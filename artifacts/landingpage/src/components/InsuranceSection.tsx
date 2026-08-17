import { Scale } from 'lucide-react';

export function InsuranceSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img 
                src="/gutachten.jpg" 
                alt="Gutachten Dokumentation" 
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
            <p className="mt-2 text-xs italic text-muted-foreground/70">KI generiert</p>
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-0.5 bg-primary"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Ihr Recht</span>
            </div>
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
              <Scale className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight heading-gradient">
              Sie dürfen Ihren Gutachter selbst wählen.
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Wenn Sie unverschuldet in einen Unfall verwickelt wurden, müssen Sie nicht einfach den von der gegnerischen Versicherung vorgeschlagenen Gutachter akzeptieren.
              </p>
              <p>
                Es ist Ihr gutes Recht, einen unabhängigen Sachverständigen Ihrer Wahl zu beauftragen, der den Schaden neutral und objektiv bewertet. Lassen Sie sich diese Entscheidung nicht abnehmen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
