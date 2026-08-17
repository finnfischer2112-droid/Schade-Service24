import { CTAButton } from './CTAButton';
import { config } from '@/config';
import { trackEvent } from '@/lib/tracking';
import { Phone, CheckCircle2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[#0d0d1a]/75"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl py-24 md:py-32">
        <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700">

          {/* Section label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-0.5 bg-primary"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              KFZ-Sachverständiger · Kaiserslautern
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            KFZ Gutachter Kaiserslautern:{' '}
            <span className="heading-gradient-light block mt-2">
              Was ist nach einem Unfall wichtig?
            </span>
          </h1>

          <p className="text-base md:text-lg text-white/75 leading-relaxed max-w-xl mb-10">
            Ein Unfall mit dem eigenen Fahrzeug wirft häufig viele Fragen auf. Wie groß ist der tatsächliche Schaden? Welche Reparaturen sind erforderlich? Ein KFZ Gutachter kann den Schaden fachlich erfassen, dokumentieren und die relevanten Fahrzeug- und Schadensdaten in einem Gutachten zusammenführen.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
            <CTAButton className="w-full sm:w-auto h-14 text-lg" />
            <a
              href={config.PHONE_HREF}
              onClick={() => trackEvent('phone_click')}
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-4 rounded-lg text-base font-semibold text-white border border-white/30 hover:border-white/60 hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              {config.PHONE}
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 pt-8 border-t border-white/15">
            {['Unabhängige Schadensbegutachtung', 'Persönliche Betreuung', 'Schnelle Schadensabwicklung'].map((point, i) => (
              <div key={i} className="flex items-center text-sm font-medium text-white/80">
                <CheckCircle2 className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
