import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { useCreateClaim } from '@workspace/api-client-react';
import { useUpload } from '@workspace/object-storage-web';
import { useToast } from '@/hooks/use-toast';
import { trackFunnelStep, trackFormSubmitted } from '@/lib/tracking';
import { config } from '@/config';
import { 
  Phone, ArrowLeft, Camera, X, CheckCircle, 
  Loader2, Info, ChevronRight, ShieldCheck 
} from 'lucide-react';
import { cn } from '@/lib/utils';

type ClaimData = {
  faultParty: 'other' | 'self' | '';
  description: string;
  photos: File[];
  firstName: string;
  email: string;
  phone: string;
  postalCode: string;
  privacyConsent: boolean;
  accidentDate: string;
  accidentTime: string;
  accidentLocation: string;
  opponentInfo: string;
  preferredDate: string;
  preferredTimeSlot: 'vormittags' | 'nachmittags' | 'ganztags' | '';
};

const STEPS = [
  { id: 'schuldfrage', title: 'Schuldfrage' },
  { id: 'fotos', title: 'Fotos & Beschreibung' },
  { id: 'kontakt', title: 'Kontaktdaten' },
  { id: 'details', title: 'Unfalldetails' },
  { id: 'termin', title: 'Wunschtermin' },
  { id: 'danke', title: 'Abgeschlossen' }
];

const variants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 }
};

export default function SchadenMelden() {
  const { toast } = useToast();
  const [step, setStep] = useState(0);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { uploadFile } = useUpload();
  const createClaim = useCreateClaim();

  const [data, setData] = useState<ClaimData>({
    faultParty: '',
    description: '',
    photos: [],
    firstName: '',
    email: '',
    phone: '',
    postalCode: '',
    privacyConsent: false,
    accidentDate: '',
    accidentTime: '',
    accidentLocation: '',
    opponentInfo: '',
    preferredDate: '',
    preferredTimeSlot: ''
  });

  const updateData = (partial: Partial<ClaimData>) => {
    setData(d => ({ ...d, ...partial }));
  };

  useEffect(() => {
    trackFunnelStep(STEPS[step].id, step + 1);
  }, [step]);

  const validateStep = (targetStep: number) => {
    if (targetStep === 1) return true;
    if (targetStep === 2) {
      if (!data.description.trim()) {
        setError('Bitte beschreiben Sie den Schaden kurz.');
        return false;
      }
    }
    if (targetStep === 3) {
      if (!data.firstName.trim()) {
        setError('Bitte geben Sie Ihren Namen an.');
        return false;
      }
      if (!data.email.trim() || !/^\S+@\S+\.\S+$/.test(data.email)) {
        setError('Bitte geben Sie eine gültige E-Mail an.');
        return false;
      }
      if (!data.phone.trim()) {
        setError('Bitte geben Sie Ihre Telefonnummer an.');
        return false;
      }
      if (!data.postalCode.trim() || data.postalCode.length < 4) {
        setError('Bitte geben Sie eine gültige PLZ an.');
        return false;
      }
      if (!data.privacyConsent) {
        setError('Bitte stimmen Sie den Datenschutzbestimmungen zu.');
        return false;
      }
    }
    setError('');
    return true;
  };

  const nextStep = () => {
    if (validateStep(step + 1)) {
      setStep(s => Math.min(s + 1, STEPS.length - 1));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setError('');
    setStep(s => Math.max(s - 1, 0));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validFiles: File[] = [];
    
    for (const f of files) {
      if (!f.type.startsWith('image/')) {
        toast({ title: 'Hinweis', description: `${f.name} ist kein Bild.`, variant: 'destructive' });
        continue;
      }
      if (f.size > 10 * 1024 * 1024) {
        toast({ title: 'Hinweis', description: `${f.name} ist zu groß (max. 10 MB).`, variant: 'destructive' });
        continue;
      }
      validFiles.push(f);
    }
    
    if (validFiles.length > 0) {
      updateData({ photos: [...data.photos, ...validFiles] });
    }
    e.target.value = ''; // Reset input
  };

  const removePhoto = (index: number) => {
    const newPhotos = [...data.photos];
    newPhotos.splice(index, 1);
    updateData({ photos: newPhotos });
  };

  const handleSubmit = async () => {
    if (!validateStep(5)) return;
    
    setIsSubmitting(true);
    setError('');
    
    try {
      const photoPaths: string[] = [];
      
      for (const file of data.photos) {
        const res = await uploadFile(file);
        if (res?.objectPath) {
          photoPaths.push(res.objectPath);
        } else {
          throw new Error('Fehler beim Bildupload.');
        }
      }
      
      await createClaim.mutateAsync({
        data: {
          faultParty: data.faultParty as 'other' | 'self',
          description: data.description,
          photoPaths,
          firstName: data.firstName,
          email: data.email,
          phone: data.phone,
          postalCode: data.postalCode,
          accidentDate: data.accidentDate || undefined,
          accidentTime: data.accidentTime || undefined,
          accidentLocation: data.accidentLocation || undefined,
          opponentInfo: data.opponentInfo || undefined,
          preferredDate: data.preferredDate || undefined,
          preferredTimeSlot: data.preferredTimeSlot || undefined,
          consent: true,
        }
      });

      trackFormSubmitted();
      setStep(5);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error(err);
      setError('Beim Übermitteln ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.');
      toast({ 
        title: 'Fehler', 
        description: 'Ihre Anfrage konnte nicht gesendet werden.', 
        variant: 'destructive' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-2">Wer ist bei dem Unfall schuld?</h2>
              <p className="text-muted-foreground">Dies hilft uns, die weitere Vorgehensweise optimal für Sie zu planen.</p>
            </div>
            <div className="space-y-4">
              <button
                onClick={() => { updateData({ faultParty: 'other' }); setStep(1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="w-full text-left p-5 sm:p-6 rounded-2xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all group flex items-center justify-between shadow-sm hover:shadow-md bg-background"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">Mir ist jemand reingefahren</h3>
                  <p className="text-sm text-muted-foreground">Der Unfallgegner hat Schuld</p>
                </div>
                <ChevronRight className="text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
              <button
                onClick={() => { updateData({ faultParty: 'self' }); setStep(1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="w-full text-left p-5 sm:p-6 rounded-2xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all group flex items-center justify-between shadow-sm hover:shadow-md bg-background"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">Schaden selbst verursacht</h3>
                  <p className="text-sm text-muted-foreground">Ich bin selbst schuld</p>
                </div>
                <ChevronRight className="text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
            </div>
            <div className="bg-secondary/60 rounded-xl p-4 flex items-start text-sm text-muted-foreground">
              <Info className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" />
              <p>Falls der Unfallgegner unbekannt ist (z.B. Fahrerflucht), wählen Sie bitte vorerst "Schaden selbst verursacht".</p>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-2">Fotos & Beschreibung</h2>
              <p className="text-muted-foreground">Zeigen Sie uns den Schaden. Querformat wird empfohlen.</p>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {data.photos.map((file, i) => (
                  <div key={i} className="relative aspect-square rounded-xl overflow-hidden border border-border bg-muted shadow-sm group">
                    <img src={URL.createObjectURL(file)} className="w-full h-full object-cover" alt="Schaden" />
                    <button 
                      onClick={() => removePhoto(i)} 
                      aria-label="Foto entfernen"
                      className="absolute top-1.5 right-1.5 bg-black/60 text-white w-11 h-11 flex items-center justify-center rounded-full hover:bg-destructive transition-colors backdrop-blur-md"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ))}
                <label className="aspect-square rounded-xl border-2 border-dashed border-border hover:border-primary flex flex-col items-center justify-center text-muted-foreground hover:text-primary cursor-pointer transition-colors bg-secondary/20 hover:bg-primary/5">
                  <Camera className="w-8 h-8 mb-2 opacity-80" />
                  <span className="text-sm font-medium">Foto wählen</span>
                  <input type="file" accept="image/*" multiple className="hidden" onChange={handlePhotoChange} />
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-foreground">Beschreiben Sie den Schaden <span className="text-destructive">*</span></label>
              <textarea
                value={data.description}
                onChange={(e) => { setError(''); updateData({ description: e.target.value }) }}
                placeholder="Wo befindet sich der Schaden? Was ist passiert?"
                className="w-full min-h-[120px] rounded-xl border-2 border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none shadow-sm"
              />
            </div>

            {error && <div className="text-sm text-destructive font-medium p-3 bg-destructive/10 rounded-lg">{error}</div>}

            <button
              onClick={nextStep}
              className="w-full bg-primary text-primary-foreground h-14 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-md active:scale-[0.98] flex items-center justify-center mt-2"
            >
              Weiter
            </button>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-2">Ihre Kontaktdaten</h2>
              <p className="text-muted-foreground">Damit wir Sie bezüglich des Gutachtens erreichen können.</p>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground">Vor- und Nachname <span className="text-destructive">*</span></label>
                <input
                  type="text"
                  value={data.firstName}
                  onChange={e => { setError(''); updateData({ firstName: e.target.value }) }}
                  className="w-full h-12 rounded-xl border-2 border-border bg-background px-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                  placeholder="Max Mustermann"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Telefonnummer <span className="text-destructive">*</span></label>
                  <input
                    type="tel"
                    value={data.phone}
                    onChange={e => { setError(''); updateData({ phone: e.target.value }) }}
                    className="w-full h-12 rounded-xl border-2 border-border bg-background px-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                    placeholder="0151 12345678"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">E-Mail <span className="text-destructive">*</span></label>
                  <input
                    type="email"
                    value={data.email}
                    onChange={e => { setError(''); updateData({ email: e.target.value }) }}
                    className="w-full h-12 rounded-xl border-2 border-border bg-background px-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                    placeholder="mail@beispiel.de"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground">Postleitzahl <span className="text-destructive">*</span></label>
                <input
                  type="text"
                  value={data.postalCode}
                  onChange={e => { setError(''); updateData({ postalCode: e.target.value }) }}
                  className="w-full h-12 rounded-xl border-2 border-border bg-background px-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm max-w-[200px]"
                  placeholder="66914"
                  maxLength={5}
                />
              </div>
            </div>

            <div className="flex items-start space-x-3 pt-2">
              <div className="flex h-6 items-center">
                <input
                  id="privacy"
                  type="checkbox"
                  checked={data.privacyConsent}
                  onChange={e => { setError(''); updateData({ privacyConsent: e.target.checked }) }}
                  className="w-5 h-5 rounded border-border text-primary focus:ring-primary focus:ring-2 accent-primary cursor-pointer"
                />
              </div>
              <label htmlFor="privacy" className="text-sm text-muted-foreground leading-snug cursor-pointer">
                Ich stimme der Verarbeitung meiner Daten gemäß der <a href="/datenschutz" className="text-primary hover:underline font-medium" target="_blank">Datenschutzerklärung</a> zu. <span className="text-destructive">*</span>
              </label>
            </div>

            {error && <div className="text-sm text-destructive font-medium p-3 bg-destructive/10 rounded-lg">{error}</div>}

            <button
              onClick={nextStep}
              className="w-full bg-primary text-primary-foreground h-14 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-md active:scale-[0.98] flex items-center justify-center mt-4"
            >
              Weiter
            </button>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">Unfalldetails</h2>
                <span className="bg-secondary text-secondary-foreground text-xs font-bold px-2 py-1 rounded-md">Optional</span>
              </div>
              <p className="text-muted-foreground">Falls Ihnen Infos fehlen, können Sie die Felder einfach leer lassen.</p>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Datum</label>
                  <input
                    type="date"
                    value={data.accidentDate}
                    onChange={e => updateData({ accidentDate: e.target.value })}
                    className="w-full h-12 rounded-xl border-2 border-border bg-background px-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Uhrzeit</label>
                  <input
                    type="time"
                    value={data.accidentTime}
                    onChange={e => updateData({ accidentTime: e.target.value })}
                    className="w-full h-12 rounded-xl border-2 border-border bg-background px-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground">Unfallort</label>
                <input
                  type="text"
                  value={data.accidentLocation}
                  onChange={e => updateData({ accidentLocation: e.target.value })}
                  className="w-full h-12 rounded-xl border-2 border-border bg-background px-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                  placeholder="Straße, Stadt oder PLZ"
                />
              </div>

              {data.faultParty === 'other' && (
                <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                  <label className="text-sm font-bold text-foreground">Gegnerisches Kennzeichen / Name</label>
                  <input
                    type="text"
                    value={data.opponentInfo}
                    onChange={e => updateData({ opponentInfo: e.target.value })}
                    className="w-full h-12 rounded-xl border-2 border-border bg-background px-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                    placeholder="KL-AB 123 oder Name"
                  />
                </div>
              )}
            </div>

            <button
              onClick={nextStep}
              className="w-full bg-primary text-primary-foreground h-14 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-md active:scale-[0.98] flex items-center justify-center mt-6"
            >
              Weiter
            </button>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">Wunschtermin</h2>
                <span className="bg-secondary text-secondary-foreground text-xs font-bold px-2 py-1 rounded-md">Optional</span>
              </div>
              <p className="text-muted-foreground">Wann sollen wir Ihr Fahrzeug für das Gutachten besichtigen?</p>
            </div>
            
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground">Wunschdatum</label>
                <input
                  type="date"
                  value={data.preferredDate}
                  onChange={e => updateData({ preferredDate: e.target.value })}
                  className="w-full h-12 rounded-xl border-2 border-border bg-background px-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-bold text-foreground">Tageszeit</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {['vormittags', 'nachmittags', 'ganztags'].map(slot => (
                    <label 
                      key={slot}
                      className={cn(
                        "flex items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all text-sm font-bold shadow-sm hover:shadow-md",
                        data.preferredTimeSlot === slot 
                          ? "border-primary bg-primary/10 text-primary" 
                          : "border-border hover:border-primary/50 text-foreground bg-background"
                      )}
                    >
                      <input 
                        type="radio" 
                        name="timeSlot" 
                        className="hidden" 
                        checked={data.preferredTimeSlot === slot}
                        onChange={() => updateData({ preferredTimeSlot: slot as any })}
                      />
                      {slot.charAt(0).toUpperCase() + slot.slice(1)}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {error && <div className="text-sm text-destructive font-medium p-3 bg-destructive/10 rounded-lg">{error}</div>}

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-accent text-accent-foreground h-16 rounded-xl font-bold text-xl hover:bg-accent/90 transition-all shadow-xl hover:shadow-2xl active:scale-[0.98] flex items-center justify-center mt-8 relative overflow-hidden"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-6 h-6 mr-2 animate-spin" />
                  Daten werden übermittelt...
                </>
              ) : (
                'Schadenmeldung absenden'
              )}
            </button>
            <div className="flex items-center justify-center text-xs text-muted-foreground gap-1.5 mt-4">
              <ShieldCheck className="w-4 h-4 text-primary" />
              Ihre Daten werden sicher und verschlüsselt übertragen.
            </div>
          </div>
        );

      case 5:
        return (
          <div className="py-8 text-center space-y-6">
            <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">Vielen Dank!</h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Ihre Schadenmeldung ist erfolgreich bei uns eingegangen. Wir prüfen Ihre Angaben und melden uns <strong className="text-foreground">schnellstmöglich</strong> bei Ihnen.
            </p>
            
            <div className="bg-secondary/50 border border-border rounded-2xl p-6 mt-8 max-w-sm mx-auto">
              <p className="text-sm font-bold text-foreground mb-2">Sie haben eine dringende Frage?</p>
              <a 
                href={config.PHONE_HREF} 
                className="inline-flex items-center justify-center text-primary font-bold text-lg hover:underline transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                {config.PHONE}
              </a>
            </div>

            <div className="pt-6">
              <Link href="/">
                <button className="text-muted-foreground hover:text-foreground font-medium text-sm underline underline-offset-4 transition-colors">
                  Zurück zur Startseite
                </button>
              </Link>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-[100dvh] bg-secondary/30 flex flex-col font-sans">
      {/* Minimal Header */}
      <header className="bg-background sticky top-0 z-50 border-b border-border/40 shadow-sm h-16 sm:h-20 flex items-center px-4 sm:px-6 justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <img src="/logo.png" alt="Schaden-Service24 Logo" className="h-9 sm:h-10 w-auto group-hover:scale-105 transition-transform" />
          <span className="font-bold text-lg sm:text-xl tracking-tight text-foreground hidden sm:block">
            Schaden-Service<span className="text-primary">24</span>
          </span>
        </Link>
        <a 
          href={config.PHONE_HREF} 
          className="flex items-center min-h-11 text-sm font-bold text-foreground hover:text-primary transition-colors bg-secondary/80 hover:bg-secondary px-4 sm:px-5 rounded-full"
        >
          <Phone className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline">{config.PHONE}</span>
          <span className="sm:hidden">Anrufen</span>
        </a>
      </header>

      {/* Main Form Content */}
      <main className="flex-1 flex flex-col items-center p-4 sm:p-6 sm:pt-10 pb-24">
        <div className="w-full max-w-2xl">
          {/* Progress Indication */}
          {step < 5 && (
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center justify-between mb-3">
                <button 
                  onClick={prevStep} 
                  disabled={step === 0 || isSubmitting}
                  className={cn("text-muted-foreground hover:text-foreground transition-colors flex items-center min-h-11 pr-3 -ml-1 text-sm font-bold", (step === 0 || isSubmitting) && "opacity-0 pointer-events-none")}
                >
                  <ArrowLeft className="w-4 h-4 mr-1.5" /> Zurück
                </button>
                <span className="text-xs font-extrabold text-muted-foreground uppercase tracking-widest bg-secondary/80 px-3 py-1 rounded-full">
                  Schritt {step + 1} von 5
                </span>
              </div>
              <div className="h-2.5 w-full bg-border rounded-full overflow-hidden shadow-inner">
                <div 
                  className="h-full bg-primary transition-all duration-500 ease-out rounded-full"
                  style={{ width: `${((step + 1) / 5) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Form Card */}
          <div className="bg-card shadow-2xl shadow-primary/5 rounded-2xl sm:rounded-3xl border border-border p-5 sm:p-8 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}
