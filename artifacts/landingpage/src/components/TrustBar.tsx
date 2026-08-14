import { Shield, Clock, FileText, CheckCircle2 } from 'lucide-react';

export function TrustBar() {
  const points = [
    { icon: Shield, title: "Unabhängig", desc: "Unparteiische Begutachtung" },
    { icon: CheckCircle2, title: "Geprüft", desc: "Fachgerechte Expertise" },
    { icon: FileText, title: "Umfangreich", desc: "Komplettes Leistungsangebot" },
    { icon: Clock, title: "24h Service", desc: "Termine nach Absprache" },
  ];

  return (
    <section className="bg-[#0d0d1a] border-y border-white/5 py-10">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {points.map((point, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-3" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                <point.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">{point.title}</h3>
                <p className="text-white/55 text-sm font-medium">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
