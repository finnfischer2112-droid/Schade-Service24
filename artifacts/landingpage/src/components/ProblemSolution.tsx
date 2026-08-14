import { CheckCircle2, AlertTriangle } from 'lucide-react';
import { CTAButton } from './CTAButton';

export function ProblemSolution() {
  return (
    <section className="py-24 bg-secondary/60">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5 bg-primary"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Unfall gehabt – was jetzt?
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                Unsicherheit nach dem Unfall?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nach einem Verkehrsunfall stellen sich viele Fragen: Wie hoch ist der Schaden wirklich? Die gegnerische Versicherung möchte oft einen eigenen Gutachter schicken. Dabei besteht die Gefahr, dass wichtige Positionen wie Wertminderung oder Nutzungsausfall übersehen oder zu niedrig angesetzt werden. Die Reparaturkosten sind für Laien meist unklar.
              </p>
            </div>
          </div>

          <div className="bg-background rounded-2xl p-8 md:p-12 shadow-lg border border-border">
            <h2 className="text-3xl font-extrabold tracking-tight mb-6">
              Wir schaffen Klarheit.
            </h2>
            <p className="text-muted-foreground mb-8">
              Ein unabhängiges Schadengutachten von uns bewertet Ihren Schaden neutral und objektiv. Wir berücksichtigen unter anderem folgende Punkte:
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                'Exakte Reparaturkosten',
                'Eingetretene Wertminderung',
                'Ansprüche auf Nutzungsausfall',
                'Vollständiger Schadensumfang',
                'Ggf. weitere relevante Schadenspositionen'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <CTAButton className="w-full" />
          </div>

        </div>
      </div>
    </section>
  );
}
