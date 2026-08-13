import { Car, FileText, Search, Wrench, ShieldAlert, LineChart } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: ShieldAlert,
      title: "Unfallgutachten",
      desc: "Professionelle Begutachtung von KFZ & NFZ nach einem Unfall. Unabhängig und neutral."
    },
    {
      icon: Search,
      title: "Schadengutachten",
      desc: "Detaillierte Dokumentation und Bewertung des Fahrzeugschadens, inkl. Sturm- & Hagelschäden oder Motorschaden."
    },
    {
      icon: LineChart,
      title: "Fahrzeugbewertung",
      desc: "Bewertung von Fahrzeugen, inkl. Privatentnahme von Geschäftsfahrzeugen."
    },
    {
      icon: Car,
      title: "Oldtimer-Wertgutachten",
      desc: "Fachgerechte Bewertung und Zustandserfassung von Oldtimern."
    },
    {
      icon: Wrench,
      title: "Onboard-Diagnose",
      desc: "Modernste Fehlerdiagnose durch Auslesen der Fahrzeugelektronik."
    },
    {
      icon: FileText,
      title: "Schadensabwicklung",
      desc: "Unterstützung rund um die Abwicklung, sowie Vermittlung bei Mietwagen, Abschleppdienst, Werkstätten & Rechtsanwälten."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            Umfangreiches Leistungsangebot
          </h2>
          <p className="text-lg text-muted-foreground">
            Als geprüfter Sachverständiger bieten wir Ihnen ein breites Spektrum an fachgerechten Dienstleistungen rund um Ihr Fahrzeug.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="group bg-secondary/50 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-border duration-300">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
