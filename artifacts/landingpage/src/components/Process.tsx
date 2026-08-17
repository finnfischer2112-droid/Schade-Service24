import { CTAButton } from './CTAButton';

export function Process() {
  const steps = [
    {
      num: "01",
      title: "Schaden melden",
      desc: "Sie starten die Schadenmeldung ganz einfach online oder telefonisch."
    },
    {
      num: "02",
      title: "Schaden prüfen lassen",
      desc: "Die notwendigen Informationen und Bilder werden aufgenommen und geprüft."
    },
    {
      num: "03",
      title: "Gutachten erstellen lassen",
      desc: "Ein Sachverständiger bewertet den Fahrzeugschaden professionell."
    },
    {
      num: "04",
      title: "Schadensabwicklung",
      desc: "Die weiteren Schritte der Regulierung werden mit Ihnen abgestimmt."
    }
  ];

  return (
    <section className="py-24 bg-secondary/60">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-0.5 bg-primary"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Ablauf</span>
            <div className="w-8 h-0.5 bg-primary"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight heading-gradient">
            So einfach funktioniert es
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-7 left-12 right-12 h-0.5 bg-border -z-10"></div>
          
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-xl bg-primary text-white flex items-center justify-center text-lg font-bold shadow-md mb-6 ring-8 ring-background">
                {step.num}
              </div>
              <h3 className="font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
}
