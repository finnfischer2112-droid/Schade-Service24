import { CTAButton } from './CTAButton';
import { Phone } from 'lucide-react';
import { config } from '@/config';
import { trackEvent } from '@/lib/tracking';

export function FinalCTA() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="bg-primary rounded-3xl p-8 md:p-16 shadow-2xl text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551281622-dcfd84d632eb?q=80&w=2070')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
              Sichern Sie jetzt Ihre Ansprüche.
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto mb-10">
              Verlieren Sie keine Zeit und bares Geld. Starten Sie die Schadenmeldung online oder rufen Sie uns direkt an.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton className="w-full sm:w-auto shadow-2xl ring-4 ring-accent/20" />
              <a 
                href={config.PHONE_HREF} 
                onClick={() => trackEvent('phone_click')}
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-primary bg-white hover:bg-gray-100 transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                {config.PHONE}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
