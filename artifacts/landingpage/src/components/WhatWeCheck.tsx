import { Wrench, TrendingDown, Clock, SearchCheck, Layers } from 'lucide-react';

export function WhatWeCheck() {
  const items = [
    {
      icon: Wrench,
      title: "Reparaturkosten",
      desc: "Welche konkreten Reparaturmaßnahmen sind für die fachgerechte Instandsetzung erforderlich?"
    },
    {
      icon: TrendingDown,
      title: "Wertminderung",
      desc: "Hat das Fahrzeug durch den Unfall trotz Reparatur an Wert verloren?"
    },
    {
      icon: Clock,
      title: "Nutzungsausfall",
      desc: "Welche Ansprüche können für die unfallbedingte Ausfallzeit des Fahrzeugs relevant sein?"
    },
    {
      icon: SearchCheck,
      title: "Schadensumfang",
      desc: "Welche Schäden sind durch den Unfall tatsächlich und nachweisbar entstanden?"
    },
    {
      icon: Layers,
      title: "Weitere Positionen",
      desc: "Zusätzliche relevante Positionen werden im Rahmen der Begutachtung sorgfältig berücksichtigt."
    }
  ];

  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-0.5 bg-white/40"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-white/60">Begutachtung</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight heading-gradient-light">
              Kein Schaden bleibt verborgen.
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Bei der Begutachtung Ihres Fahrzeugs nehmen wir jedes Detail genau unter die Lupe. Eine vollständige und fachgerechte Dokumentation bildet die Basis für Ihre Ansprüche.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4">
              {items.map((item, i) => (
                <div 
                  key={i} 
                  className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 ${i === 4 ? 'sm:col-span-2' : ''}`}
                >
                  <item.icon className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
