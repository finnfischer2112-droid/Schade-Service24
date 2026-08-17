import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      q: "Wann sollte ich einen KFZ Gutachter in Kaiserslautern beauftragen?",
      a: "Ein KFZ Gutachter kann insbesondere bei umfangreicheren Unfallschäden sinnvoll sein. Er kann den Fahrzeugschaden fachlich aufnehmen, dokumentieren und die relevanten Informationen in einem Gutachten zusammenführen."
    },
    {
      q: "Was macht ein KFZ Gutachter in Kaiserslautern?",
      a: "Ein KFZ Gutachter besichtigt das beschädigte Fahrzeug, erfasst die festgestellten Schäden und nimmt eine technische Einschätzung des Schadenumfangs vor. Die Ergebnisse können anschließend in einem Gutachten dokumentiert werden."
    },
    {
      q: "Was ist ein KFZ Gutachten in Kaiserslautern?",
      a: "Ein KFZ-Gutachten dokumentiert den Zustand eines Fahrzeugs und die festgestellten Unfallschäden. Je nach Schaden können unter anderem Fahrzeugdaten, Schadensumfang und erforderliche Reparaturarbeiten berücksichtigt werden."
    },
    {
      q: "Wann ist ein Unfallgutachten in Kaiserslautern sinnvoll?",
      a: "Ob ein Unfallgutachten sinnvoll ist, hängt von der jeweiligen Unfallsituation und dem Umfang des Fahrzeugschadens ab. Bei umfangreicheren Schäden kann eine detaillierte fachliche Dokumentation für die weitere Schadensabwicklung relevant sein."
    },
    {
      q: "Welche Informationen benötigt ein KFZ Sachverständiger?",
      a: "Hilfreich sind unter anderem Fahrzeugdaten, Informationen zum Unfallhergang, vorhandene Unfallunterlagen und gegebenenfalls Fotos des Schadens. Auch bekannte Vorschäden sollten angegeben werden."
    },
    {
      q: "Können auch nicht sichtbare Schäden berücksichtigt werden?",
      a: "Bei der Begutachtung wird das Fahrzeug fachlich untersucht und der festgestellte Schaden dokumentiert. Je nach Unfallgeschehen können neben sichtbaren Beschädigungen auch weitere technische Bereiche relevant sein."
    },
    {
      q: "Was sollte ich bei der Auswahl eines KFZ Sachverständigen in Kaiserslautern beachten?",
      a: "Achten Sie auf eine nachvollziehbare Arbeitsweise, strukturierte Dokumentation, verständliche Kommunikation und fachliche Erfahrung mit unterschiedlichen Fahrzeugen und Schadenssituationen."
    },
    {
      q: "Was kann ein Unfallgutachten dokumentieren?",
      a: "Ein Unfallgutachten kann unter anderem Fahrzeugdaten, festgestellte Beschädigungen, technische Einschätzungen und den erforderlichen Reparaturumfang dokumentieren. Die konkreten Inhalte hängen vom jeweiligen Fahrzeug und Schaden ab."
    },
    {
      q: "Welche weiteren Leistungen können nach einem Unfall erforderlich sein?",
      a: "Neben der Begutachtung können je nach Situation beispielsweise ein Abschleppdienst, ein Mietwagen, eine Werkstatt oder rechtliche Unterstützung relevant sein. Welche Maßnahmen erforderlich sind, hängt vom konkreten Unfall ab."
    },
    {
      q: "Wer bietet KFZ Gutachten in Kaiserslautern an?",
      a: "Schaden-Service24 mit KFZ-Sachverständigem Matthias Kahnert bietet Unfallgutachten für KFZ und NFZ sowie weitere Dienstleistungen rund um die Schadensabwicklung an. Dazu gehören unter anderem die Vermittlung beziehungsweise Einbindung von Mietwagen, Abschleppdiensten, Werkstätten und Rechtsanwälten."
    }
  ];

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-0.5 bg-primary"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">FAQ</span>
            <div className="w-8 h-0.5 bg-primary"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 heading-gradient">
            KFZ Gutachter Kaiserslautern FAQs
          </h2>
          <p className="text-lg text-muted-foreground">
            Hier finden Sie Antworten auf die wichtigsten Fragen nach einem Unfall.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border py-2">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
