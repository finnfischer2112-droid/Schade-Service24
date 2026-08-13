import { CTAButton } from './CTAButton';
import { config } from '@/config';
import { trackEvent } from '@/lib/tracking';
import { Phone, CheckCircle2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40">
      {/* Decorative background element */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col justify-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                Unfall in Kaiserslautern? <span className="text-primary block mt-2">Wir kümmern uns um Ihr Schadengutachten.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[600px]">
                Als unabhängiger KFZ-Sachverständiger unterstützen wir Sie bei der Schadensbegutachtung und Schadensabwicklung. Für Unfallgeschädigte ist die Begutachtung bei entsprechender Kostendeckung durch die gegnerische Versicherung grundsätzlich kostenfrei.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <CTAButton className="w-full sm:w-auto h-14 text-lg" />
              <a 
                href={config.PHONE_HREF} 
                onClick={() => trackEvent('phone_click')}
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-4 rounded-xl text-base font-semibold text-foreground bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2 text-primary" />
                {config.PHONE}
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 border-t border-border/60">
              {['Unabhängige Schadensbegutachtung', 'Persönliche Betreuung', 'Schnelle Schadensabwicklung'].map((point, i) => (
                <div key={i} className="flex items-center text-sm font-medium text-foreground">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0" />
                  {point}
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none animate-in fade-in slide-in-from-right-8 duration-700 delay-200 fill-mode-both">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-square">
              <img 
                src="/hero-bg.jpg" 
                alt="KFZ Sachverständiger bei der Schadensbegutachtung" 
                className="object-cover w-full h-full"
                loading="eager"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10"></div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 left-0 sm:-left-8 bg-background p-4 rounded-2xl shadow-xl border border-border flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground">Geprüfter Sachverständiger</p>
                <p className="text-sm text-muted-foreground">Kaiserslautern & Umgebung</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
