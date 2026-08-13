import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      q: "Was kostet ein KFZ-Gutachten nach einem Unfall?",
      a: "Wenn Sie unverschuldet in einen Verkehrsunfall verwickelt wurden, kann die gegnerische Haftpflichtversicherung die Kosten des unabhängigen Gutachters übernehmen. Daher ist der Service für Unfallgeschädigte unter den entsprechenden Voraussetzungen grundsätzlich kostenfrei."
    },
    {
      q: "Kann ich meinen Gutachter selbst auswählen?",
      a: "Ja. Wenn Sie unverschuldet in einen Unfall verwickelt wurden, müssen Sie nicht einfach den von der gegnerischen Versicherung vorgeschlagenen Gutachter akzeptieren. Sie können einen unabhängigen Sachverständigen Ihrer Wahl beauftragen."
    },
    {
      q: "Wer bezahlt das Gutachten?",
      a: "Bei einem unverschuldeten Unfall trägt grundsätzlich die gegnerische Haftpflichtversicherung die Gutachterkosten. (Kostenübernahme vorausgesetzt und abhängig vom jeweiligen Schadenfall)."
    },
    {
      q: "Muss ich zu Ihnen kommen?",
      a: "Nein, nicht zwingend. Wir bieten Termine nach individueller Absprache an und begutachten das Fahrzeug gerne vor Ort im Raum Kaiserslautern und Umgebung."
    },
    {
      q: "Wie schnell kann mein Fahrzeug begutachtet werden?",
      a: "Wir legen großen Wert auf eine schnelle Schadensabwicklung. Eine Begutachtung erfolgt zeitnah nach individueller Absprache."
    },
    {
      q: "Was wird bei einem Schadengutachten geprüft?",
      a: "Wir prüfen alle relevanten Faktoren: Reparaturkosten, eine mögliche Wertminderung, Ihren Anspruch auf Nutzungsausfall, den exakten Schadensumfang und weitere relevante Schadenspositionen."
    },
    {
      q: "Was passiert nach dem Gutachten?",
      a: "Das erstellte Gutachten dient als Grundlage für die Regulierung mit der Versicherung. Wir unterstützen Sie rund um die weitere Schadensabwicklung."
    },
    {
      q: "Kann ich den Schaden online melden?",
      a: "Ja, Sie können die Schadenmeldung jederzeit online über unsere Website starten."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Häufig gestellte Fragen
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
