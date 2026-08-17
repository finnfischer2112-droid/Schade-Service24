import { CTAButton } from './CTAButton';
import { HelpCircle } from 'lucide-react';

export function CostSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="bg-background rounded-3xl p-8 md:p-16 shadow-2xl border border-border text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-primary"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Kosten</span>
            <div className="w-8 h-0.5 bg-primary"></div>
          </div>
          <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 text-primary">
            <HelpCircle className="w-7 h-7" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8 heading-gradient">
            Was kostet mich ein Unfallgutachten?
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            <p>
              Wenn Sie unverschuldet in einen Verkehrsunfall verwickelt wurden, kann die gegnerische Haftpflichtversicherung die Kosten des unabhängigen Gutachters übernehmen.
            </p>
            <p className="font-semibold text-foreground">
              Daher ist der Service für Unfallgeschädigte unter den entsprechenden Voraussetzungen grundsätzlich kostenfrei.*
            </p>
          </div>

          <CTAButton className="mb-8" />

          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            * Kostenübernahme vorausgesetzt / abhängig vom jeweiligen Schadenfall und der Regulierung durch die Versicherung.
          </p>
        </div>
      </div>
    </section>
  );
}
