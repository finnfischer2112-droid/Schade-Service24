import { Shield, Clock, FileText, CheckCircle2 } from 'lucide-react';

export function TrustBar() {
  const points = [
    { icon: Shield, title: "Unabhängig", desc: "Unparteiische Begutachtung" },
    { icon: CheckCircle2, title: "Geprüft", desc: "Fachgerechte Expertise" },
    { icon: FileText, title: "Umfangreich", desc: "Komplettes Leistungsangebot" },
    { icon: Clock, title: "24h Service", desc: "Termine nach Absprache" },
  ];

  return (
    <section className="bg-primary py-12 border-y border-primary-foreground/10">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {points.map((point, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-3 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'both' }}>
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white backdrop-blur-sm">
                <point.icon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">{point.title}</h3>
                <p className="text-primary-foreground/80 text-sm font-medium">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
