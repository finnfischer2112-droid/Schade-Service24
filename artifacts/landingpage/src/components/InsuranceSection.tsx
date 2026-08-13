import { Scale } from 'lucide-react';

export function InsuranceSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
            <img 
              src="/gutachten.jpg" 
              alt="Gutachten Dokumentation" 
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
              <Scale className="w-7 h-7" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
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
