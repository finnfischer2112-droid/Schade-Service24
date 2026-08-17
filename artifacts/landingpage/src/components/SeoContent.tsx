interface SeoBlock {
  heading: string;
  paragraphs: string[];
}

function SectionLabel({ text, center = false }: { text: string; center?: boolean }) {
  return (
    <div className={`flex items-center gap-3 mb-5 ${center ? 'justify-center' : ''}`}>
      <div className="w-8 h-0.5 bg-primary"></div>
      <span className="text-xs font-bold uppercase tracking-widest text-primary">{text}</span>
      {center && <div className="w-8 h-0.5 bg-primary"></div>}
    </div>
  );
}

function ImageTextRow({
  block,
  image,
  imageAlt,
  imageLeft,
}: {
  block: SeoBlock;
  image: string;
  imageAlt: string;
  imageLeft: boolean;
}) {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div
        className={`relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] ${
          imageLeft ? 'order-2 md:order-1' : 'order-2'
        }`}
      >
        <img src={image} alt={imageAlt} className="object-cover w-full h-full" loading="lazy" />
      </div>
      <div className={`space-y-5 ${imageLeft ? 'order-1 md:order-2' : 'order-1'}`}>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight heading-gradient">
          {block.heading}
        </h2>
        {block.paragraphs.map((p, i) => (
          <p key={i} className="text-lg text-muted-foreground leading-relaxed">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}

function TextBlock({ block }: { block: SeoBlock }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight heading-gradient">
        {block.heading}
      </h2>
      {block.paragraphs.map((p, i) => (
        <p key={i} className="text-base md:text-lg text-muted-foreground leading-relaxed">
          {p}
        </p>
      ))}
    </div>
  );
}

const imageRows: SeoBlock[] = [
  {
    heading: 'Wann ist ein KFZ Gutachter Kaiserslautern nach einem Unfall sinnvoll?',
    paragraphs: [
      'Nicht jeder Fahrzeugschaden ist auf den ersten Blick vollständig erkennbar. Neben sichtbaren Beschädigungen an Karosserie, Stoßfängern oder Fahrzeugteilen können je nach Unfallgeschehen weitere technische Schäden vorliegen. Deshalb sollte der konkrete Zustand des Fahrzeugs fachlich betrachtet werden.',
      'Ein KFZ Gutachter kann den Schaden am Fahrzeug aufnehmen, dokumentieren und hinsichtlich seines Umfangs bewerten. Dabei spielen unter anderem der Zustand des Fahrzeugs, die festgestellten Beschädigungen und die erforderlichen Reparaturarbeiten eine Rolle.',
      'Ob ein ausführliches Gutachten im konkreten Fall sinnvoll ist, hängt von der jeweiligen Unfallsituation und dem entstandenen Schaden ab. Gerade bei umfangreicheren Schäden kann eine detaillierte Dokumentation für die weitere Schadensabwicklung relevant sein.',
    ],
  },
  {
    heading: 'Was enthält ein KFZ Gutachten in Kaiserslautern und warum ist die Dokumentation wichtig?',
    paragraphs: [
      'Ein KFZ-Gutachten soll den Zustand und die festgestellten Schäden eines Fahrzeugs nachvollziehbar dokumentieren. Dazu gehören beispielsweise Fahrzeugdaten, eine Beschreibung der Beschädigungen und die technische Einschätzung des Schadens.',
      'Auch der voraussichtliche Reparaturumfang kann Bestandteil der Dokumentation sein. Je nach Fahrzeug und Schaden werden die relevanten Beschädigungen erfasst und durch entsprechende Aufnahmen dokumentiert.',
      'Für ein KFZ Gutachten in Kaiserslautern ist deshalb nicht allein die sichtbare Beschädigung entscheidend. Eine fachliche Betrachtung soll vielmehr ein möglichst vollständiges Bild des Schadens vermitteln. Das unterscheidet ein umfassenderes Gutachten beispielsweise von einer einfachen ersten Kostenschätzung.',
      'Für Fahrzeughalter kann eine solche Dokumentation hilfreich sein, wenn im weiteren Verlauf verschiedene Informationen zum Fahrzeugschaden benötigt werden.',
    ],
  },
  {
    heading: 'Welche Informationen sollten Sie für den KFZ Gutachter in Kaiserslautern bereithalten?',
    paragraphs: [
      'Je vollständiger die verfügbaren Informationen sind, desto einfacher lässt sich die jeweilige Unfallsituation einordnen. Fahrzeughalter können deshalb bereits vor einem Gutachtertermin vorhandene Unterlagen und Informationen zusammentragen.',
      'Dazu können beispielsweise Fahrzeugdaten, Angaben zum Unfallhergang und vorhandene Unfallunterlagen gehören. Auch Fotos vom Schaden können hilfreich sein, sofern solche Aufnahmen bereits vorliegen.',
      'Darüber hinaus sollten bekannte Vorschäden nicht verschwiegen werden. Für die fachliche Einordnung eines aktuellen Schadens kann es relevant sein, welche Beschädigungen am Fahrzeug bereits vor dem Unfall vorhanden waren.',
      'Je nach Situation können außerdem Versicherungsdaten oder weitere Unterlagen für die Schadensabwicklung benötigt werden. Welche Informationen im konkreten Fall erforderlich sind, hängt von den Umständen des Unfalls ab.',
      'Eine geordnete Zusammenstellung der vorhandenen Informationen kann dazu beitragen, die Begutachtung und die anschließenden organisatorischen Schritte strukturiert vorzubereiten.',
    ],
  },
  {
    heading: 'Wie unterstützt Schaden-Service24 bei einem Unfallschaden in Kaiserslautern?',
    paragraphs: [
      'Schaden-Service24 bietet Dienstleistungen rund um die Schadensabwicklung an. Als KFZ Sachverständiger ist Matthias Kahnert auf Unfallgutachten für KFZ und NFZ spezialisiert. Zum Leistungsbereich gehören außerdem Fahrzeugbewertungen, unter anderem für die Privatentnahme von Geschäftsfahrzeugen sowie Bewertungen von Oldtimern und Youngtimern.',
      'Bei einem Unfallschaden kann die Begutachtung dabei mit weiteren organisatorischen Leistungen der Schadensabwicklung verbunden werden. Schaden-Service24 nennt in diesem Zusammenhang unter anderem Mietwagen, Abschleppdienste, Rechtsanwälte und Werkstätten.',
      'Für Fahrzeughalter kann die Bündelung verschiedener Bereiche sinnvoll sein, wenn nach einem Unfall mehrere Beteiligte und organisatorische Schritte koordiniert werden müssen. Dabei steht zunächst die fachliche Aufnahme und Dokumentation des Fahrzeugschadens im Mittelpunkt.',
      'Die konkrete Vorgehensweise richtet sich selbstverständlich nach der jeweiligen Unfallsituation und dem tatsächlichen Schaden am Fahrzeug.',
    ],
  },
];

const textBlocks: SeoBlock[] = [
  {
    heading: 'Warum kann ein Unfallgutachten Kaiserslautern für die Schadensabwicklung relevant sein?',
    paragraphs: [
      'Ein Unfallgutachten kann eine wichtige Grundlage für die weitere Bearbeitung eines Fahrzeugschadens darstellen. Entscheidend ist dabei eine nachvollziehbare Dokumentation dessen, was am Fahrzeug festgestellt wurde und welche Arbeiten aufgrund des Schadens erforderlich sein können.',
      'Neben der eigentlichen Schadensbeschreibung können dabei verschiedene fahrzeugbezogene und technische Faktoren berücksichtigt werden. Die konkrete Bedeutung des Gutachtens hängt jedoch immer vom jeweiligen Unfall und der individuellen Situation ab.',
      'Gerade deshalb sollte ein Unfallgutachten nicht als pauschales Dokument betrachtet werden, das bei jedem Schaden nach demselben Schema funktioniert. Fahrzeugtyp, Schaden, Zustand und Unfallgeschehen können sich deutlich unterscheiden.',
      'Ein KFZ Sachverständiger unterstützt dabei mit der fachlichen Erfassung des Fahrzeugs und schafft eine dokumentierte Grundlage für die weiteren Schritte der Schadensabwicklung.',
    ],
  },
  {
    heading: 'Was macht ein KFZ Sachverständiger Kaiserslautern bei einem beschädigten Fahrzeug?',
    paragraphs: [
      'Zu den wesentlichen Aufgaben eines KFZ Sachverständigen gehört zunächst die Besichtigung des beschädigten Fahrzeugs. Dabei werden die festgestellten Schäden aufgenommen und dokumentiert.',
      'Anschließend erfolgt eine technische Einschätzung des Schadensumfangs. Je nach Fahrzeug und Beschädigung können unterschiedliche Bereiche und Bauteile betroffen sein. Auch der allgemeine Fahrzeugzustand kann für die Einordnung relevant sein.',
      'Die gewonnenen Informationen werden anschließend für die Gutachtenerstellung aufbereitet. Eine strukturierte Dokumentation ermöglicht es, die Feststellungen am Fahrzeug nachvollziehbar darzustellen.',
      'Wichtig ist dabei auch die Abgrenzung der jeweiligen Aufgabenbereiche: Ein KFZ Sachverständiger beschäftigt sich mit der technischen Bewertung und Dokumentation des Fahrzeugs. Eine rechtliche Beratung oder verbindliche Beurteilung konkreter Ansprüche gehört dagegen in den entsprechenden rechtlichen Zuständigkeitsbereich.',
    ],
  },
  {
    heading: 'Was sollten Sie bei einem KFZ Gutachter in Kaiserslautern beachten?',
    paragraphs: [
      'Bei der Auswahl eines KFZ Gutachters sollten Fahrzeughalter auf eine fachlich nachvollziehbare Arbeitsweise und eine verständliche Kommunikation achten. Wichtig ist, dass der Schaden sorgfältig aufgenommen und die relevanten Feststellungen nachvollziehbar dokumentiert werden.',
      'Auch die Erfahrung mit unterschiedlichen Fahrzeugen und Schadenssituationen kann eine Rolle spielen. Bei Unternehmen, die neben PKW auch Nutzfahrzeuge betreuen, kann zudem eine entsprechende Erfahrung im Bereich KFZ und NFZ relevant sein.',
      'Für Kunden aus Kaiserslautern und der näheren Umgebung kann außerdem die regionale Erreichbarkeit eine praktische Rolle spielen. Persönliche Termine und eine direkte Kommunikation können insbesondere dann hilfreich sein, wenn nach einem Unfall mehrere Fragen zur weiteren Vorgehensweise entstehen.',
      'Entscheidend bleibt jedoch die individuelle Betrachtung des jeweiligen Fahrzeugs. Ein Gutachten sollte sich am konkreten Schaden und den tatsächlich festgestellten Gegebenheiten orientieren.',
    ],
  },
  {
    heading: 'Welche weiteren Leistungen können bei der Schadensabwicklung relevant sein?',
    paragraphs: [
      'Nach einem Unfall kann neben der Begutachtung des Fahrzeugs weiterer organisatorischer Bedarf entstehen. Dazu kann beispielsweise ein Mietwagen gehören, wenn das beschädigte Fahrzeug während der weiteren Bearbeitung oder einer Reparatur nicht genutzt werden kann.',
      'Auch ein Abschleppdienst kann erforderlich sein, wenn das Fahrzeug nach dem Unfall nicht mehr fahrbereit ist. Darüber hinaus können Werkstätten für die technische Instandsetzung und gegebenenfalls Rechtsanwälte für rechtliche Fragen im Zusammenhang mit der Schadensabwicklung relevant sein.',
      'Schaden-Service24 führt diese Bereiche in seinem Leistungsangebot zusammen und unterstützt damit bei verschiedenen organisatorischen Aspekten rund um einen Unfallschaden.',
      'Welche Schritte tatsächlich erforderlich sind, hängt jedoch immer vom konkreten Unfall, dem Fahrzeugzustand und der weiteren Schadensabwicklung ab. Eine individuelle Betrachtung bleibt daher entscheidend.',
    ],
  },
];

const fazit: SeoBlock = {
  heading: 'Fazit – KFZ Gutachter Kaiserslautern für eine strukturierte Schadensaufnahme',
  paragraphs: [
    'Nach einem Unfall sollte der entstandene Fahrzeugschaden möglichst nachvollziehbar erfasst und dokumentiert werden. Ein KFZ Gutachter kann dabei den Fahrzeugzustand und die festgestellten Schäden fachlich aufnehmen und die relevanten Informationen in einem Gutachten zusammenführen.',
    'Für die weitere Schadensabwicklung können eine vollständige Dokumentation, vorhandene Unterlagen und eine strukturierte Kommunikation hilfreich sein. Ein KFZ Sachverständiger ist dabei insbesondere für die technische Betrachtung des Fahrzeugs zuständig.',
    'Mit Schaden-Service24 steht Fahrzeughaltern in Kaiserslautern und Umgebung ein Ansprechpartner für Unfallgutachten und weitere Bereiche der Schadensabwicklung zur Verfügung.',
  ],
};

export function SeoContent() {
  return (
    <>
      {/* Alternating image/text rows */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl space-y-24">
          <div>
            <SectionLabel text="KFZ Gutachter Kaiserslautern" />
            <ImageTextRow
              block={imageRows[0]}
              image="/hero-bg.jpg"
              imageAlt="KFZ Gutachter begutachtet Unfallschaden am Fahrzeug in Kaiserslautern"
              imageLeft={true}
            />
          </div>
          <ImageTextRow
            block={imageRows[1]}
            image="/gutachten.jpg"
            imageAlt="KFZ Gutachten Dokumentation nach einem Unfall in Kaiserslautern"
            imageLeft={false}
          />
        </div>
      </section>

      {/* Text blocks on cream background */}
      <section className="py-24 bg-secondary/60">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <SectionLabel text="Unfallgutachten & Schadensabwicklung" />
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <TextBlock block={textBlocks[0]} />
            <TextBlock block={textBlocks[1]} />
          </div>
        </div>
      </section>

      {/* Second pair of image/text rows */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl space-y-24">
          <ImageTextRow
            block={imageRows[2]}
            image="/gutachten.jpg"
            imageAlt="Unterlagen und Informationen für den KFZ Sachverständigen"
            imageLeft={true}
          />
          <ImageTextRow
            block={imageRows[3]}
            image="/hero-bg.jpg"
            imageAlt="Schaden-Service24 KFZ Sachverständiger für Unfallgutachten KFZ und NFZ"
            imageLeft={false}
          />
        </div>
      </section>

      {/* Remaining text blocks */}
      <section className="py-24 bg-secondary/60">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <SectionLabel text="Gut zu wissen" />
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <TextBlock block={textBlocks[2]} />
            <TextBlock block={textBlocks[3]} />
          </div>
        </div>
      </section>

      {/* Fazit */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <SectionLabel text="Fazit" center />
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight heading-gradient mb-8">
            {fazit.heading}
          </h2>
          <div className="space-y-4 text-left md:text-center">
            {fazit.paragraphs.map((p, i) => (
              <p key={i} className="text-lg text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
