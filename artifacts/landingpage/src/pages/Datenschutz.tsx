import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { revokeConsent } from '@/lib/consent';

interface Block {
  h2?: string;
  h3?: string;
  paragraphs?: string[];
  list?: string[];
}

const blocks: Block[] = [
  { h2: '1. Datenschutz auf einen Blick' },
  {
    h3: 'Allgemeine Hinweise',
    paragraphs: [
      'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.',
    ],
  },
  {
    h3: 'Datenerfassung auf unserer Website',
    paragraphs: [
      'Wer ist verantwortlich für die Datenerfassung auf dieser Website?',
      'Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.',
      'Wie erfassen wir Ihre Daten?',
      'Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.',
      'Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.',
      'Wofür nutzen wir Ihre Daten?',
      'Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.',
      'Welche Rechte haben Sie bezüglich Ihrer Daten?',
      'Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.',
      'Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Details hierzu entnehmen Sie der Datenschutzerklärung unter „Recht auf Einschränkung der Verarbeitung“.',
    ],
  },
  { h2: '2. Allgemeine Hinweise und Pflichtinformationen' },
  {
    h3: 'Datenschutz',
    paragraphs: [
      'Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.',
      'Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.',
      'Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.',
    ],
  },
  {
    h3: 'Hinweis zur verantwortlichen Stelle',
    paragraphs: [
      'Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:',
      'RCS Gries & Kahnert UG',
      'Matthias Kahnert',
      'Saarpfalz Straße 55,',
      '66914 Waldmohr',
      'Telefon: +49 160 98008009',
      'E-Mail: info@schaden-service24.com',
      'Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.',
    ],
  },
  {
    h3: 'Widerruf Ihrer Einwilligung zur Datenverarbeitung',
    paragraphs: [
      'Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.',
    ],
  },
  {
    h3: 'Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)',
    paragraphs: [
      'Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Die jeweilige Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).',
      'Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).',
    ],
  },
  {
    h3: 'Beschwerderecht bei der zuständigen Aufsichtsbehörde',
    paragraphs: [
      'Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.',
    ],
  },
  {
    h3: 'Recht auf Datenübertragbarkeit',
    paragraphs: [
      'Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.',
    ],
  },
  {
    h3: 'SSL- bzw. TLS-Verschlüsselung',
    paragraphs: [
      'Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von “http://” auf “https://” wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.',
      'Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.',
    ],
  },
  {
    h3: 'Verschlüsselter Zahlungsverkehr auf dieser Website',
    paragraphs: [
      'Besteht nach dem Abschluss eines kostenpflichtigen Vertrags eine Verpflichtung, uns Ihre Zahlungsdaten (z.B. Kontonummer bei Einzugsermächtigung) zu übermitteln, werden diese Daten zur Zahlungsabwicklung benötigt.',
      'Der Zahlungsverkehr über die gängigen Zahlungsmittel (Visa/MasterCard, Lastschriftverfahren) erfolgt ausschließlich über eine verschlüsselte SSL- bzw. TLS-Verbindung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von “http://” auf “https://” wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.',
      'Bei verschlüsselter Kommunikation können Ihre Zahlungsdaten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.',
    ],
  },
  {
    h3: 'Auskunft, Sperrung, Löschung und Berichtigung',
    paragraphs: [
      'Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.',
    ],
  },
  {
    h3: 'Recht auf Einschränkung der Verarbeitung',
    paragraphs: [
      'Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:',
    ],
    list: [
      'Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
      'Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah / geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.',
      'Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
      'Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
    ],
  },
  {
    paragraphs: [
      'Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.',
    ],
  },
  { h2: '3. Datenerfassung auf unserer Website' },
  {
    h3: 'Cookies',
    paragraphs: [
      'Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.',
      'Die meisten der von uns verwendeten Cookies sind so genannte “Session-Cookies”. Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.',
      'Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.',
      'Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z.B. Warenkorbfunktion) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Soweit andere Cookies (z.B. Cookies zur Analyse Ihres Surfverhaltens) gespeichert werden, werden diese in dieser Datenschutzerklärung gesondert behandelt.',
      'Ihre Einwilligung in nicht notwendige Cookies erteilen Sie über unseren Cookie-Banner. Sie können diese Einwilligung jederzeit mit Wirkung für die Zukunft über den Link „Cookie-Einstellungen“ im Footer dieser Website widerrufen.',
    ],
  },
  {
    h3: 'Server-Log-Dateien',
    paragraphs: [
      'Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:',
    ],
    list: [
      'Browsertyp und Browserversion',
      'verwendetes Betriebssystem',
      'Referrer URL',
      'Hostname des zugreifenden Rechners',
      'Uhrzeit der Serveranfrage',
      'IP-Adresse',
    ],
  },
  {
    paragraphs: [
      'Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.',
      'Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.',
    ],
  },
  {
    h3: 'Kontaktformular',
    paragraphs: [
      'Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.',
      'Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.',
      'Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.',
    ],
  },
  {
    h3: 'Anfrage per E-Mail, Telefon oder Telefax',
    paragraphs: [
      'Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.',
      'Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und / oder auf unseren berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO), da wir ein berechtigtes Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen haben.',
      'Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.',
    ],
  },
  {
    h3: 'Registrierung auf dieser Website',
    paragraphs: [
      'Sie können sich auf unserer Website registrieren, um zusätzliche Funktionen auf der Seite zu nutzen. Die dazu eingegebenen Daten verwenden wir nur zum Zwecke der Nutzung des jeweiligen Angebotes oder Dienstes, für den Sie sich registriert haben. Die bei der Registrierung abgefragten Pflichtangaben müssen vollständig angegeben werden. Anderenfalls werden wir die Registrierung ablehnen.',
      'Für wichtige Änderungen etwa beim Angebotsumfang oder bei technisch notwendigen Änderungen nutzen wir die bei der Registrierung angegebene E-Mail-Adresse, um Sie auf diesem Wege zu informieren.',
      'Die Verarbeitung der bei der Registrierung eingegebenen Daten erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können eine von Ihnen erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.',
      'Die bei der Registrierung erfassten Daten werden von uns gespeichert, solange Sie auf unserer Website registriert sind und werden anschließend gelöscht. Gesetzliche Aufbewahrungsfristen bleiben unberührt.',
    ],
  },
  {
    h3: 'Verarbeiten von Daten (Kunden- und Vertragsdaten)',
    paragraphs: [
      'Wir erheben, verarbeiten und nutzen personenbezogene Daten nur, soweit sie für die Begründung, inhaltliche Ausgestaltung oder Änderung des Rechtsverhältnisses erforderlich sind (Bestandsdaten). Dies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet. Personenbezogene Daten über die Inanspruchnahme unserer Internetseiten (Nutzungsdaten) erheben, verarbeiten und nutzen wir nur, soweit dies erforderlich ist, um dem Nutzer die Inanspruchnahme des Dienstes zu ermöglichen oder abzurechnen.',
      'Die erhobenen Kundendaten werden nach Abschluss des Auftrags oder Beendigung der Geschäftsbeziehung gelöscht. Gesetzliche Aufbewahrungsfristen bleiben unberührt.',
    ],
  },
  {
    h3: 'Datenübermittlung bei Vertragsschluss für Online-Shops, Händler und Warenversand',
    paragraphs: [
      'Wir übermitteln personenbezogene Daten an Dritte nur dann, wenn dies im Rahmen der Vertragsabwicklung notwendig ist, etwa an die mit der Lieferung der Ware betrauten Unternehmen oder das mit der Zahlungsabwicklung beauftragte Kreditinstitut. Eine weitergehende Übermittlung der Daten erfolgt nicht bzw. nur dann, wenn Sie der Übermittlung ausdrücklich zugestimmt haben. Eine Weitergabe Ihrer Daten an Dritte ohne ausdrückliche Einwilligung, etwa zu Zwecken der Werbung, erfolgt nicht.',
      'Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.',
    ],
  },
  { h2: '4. Soziale Medien' },
  {
    h3: 'Social-Media-Plugins mit Shariff',
    paragraphs: [
      'Auf unseren Seiten werden Plugins von sozialen Medien verwendet (z.B. Facebook, Twitter, Google+, Instagram, Pinterest, XING, LinkedIn, Tumblr).',
      'Die Plugins können Sie in der Regel anhand der jeweiligen Social-Media-Logos erkennen. Um den Datenschutz auf unserer Website zu gewährleisten, verwenden wir diese Plugins nur zusammen mit der sogenannten „Shariff“-Lösung. Diese Anwendung verhindert, dass die auf unserer Website integrierten Plugins Daten schon beim ersten Betreten der Seite an den jeweiligen Anbieter übertragen.',
      'Erst wenn Sie das jeweilige Plugin durch Anklicken der zugehörigen Schaltfläche aktivieren, wird eine direkte Verbindung zum Server des Anbieters hergestellt (Einwilligung). Sobald Sie das Plugin aktivieren, erhält der jeweilige Anbieter die Information, dass Sie mit Ihrer IP-Adresse unsere Seite besucht haben. Wenn Sie gleichzeitig in Ihrem jeweiligen Social-Media-Account (z.B. Facebook) eingeloggt sind, kann der jeweilige Anbieter den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen.',
      'Das Aktivieren des Plugins stellt eine Einwilligung im Sinne des Art. 6 Abs. 1 lit. a DSGVO dar. Diese Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.',
    ],
  },
  { h2: '5. Analyse-Tools und Werbung' },
  {
    h3: 'Google Ads und Google Conversion-Tracking',
    paragraphs: [
      'Diese Website nutzt Google Ads. Google Ads ist ein Online-Werbeprogramm der Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.',
      'Im Rahmen von Google Ads nutzen wir das so genannte Conversion-Tracking. Wenn Sie auf eine von Google geschaltete Anzeige klicken, wird ein Cookie für das Conversion-Tracking gesetzt. Bei Cookies handelt es sich um kleine Textdateien, die der Internet-Browser auf dem Computer des Nutzers ablegt. Diese Cookies verlieren nach 30 Tagen ihre Gültigkeit und dienen nicht der persönlichen Identifizierung der Nutzer. Besucht der Nutzer bestimmte Seiten dieser Website und das Cookie ist noch nicht abgelaufen, können Google und wir erkennen, dass der Nutzer auf die Anzeige geklickt hat und zu dieser Seite weitergeleitet wurde.',
      'Jeder Google-Ads-Kunde erhält ein anderes Cookie. Die Cookies können nicht über die Websites von Google-Ads-Kunden nachverfolgt werden. Die mithilfe des Conversion-Cookies eingeholten Informationen dienen dazu, Conversion-Statistiken für Google-Ads-Kunden zu erstellen, die sich für Conversion-Tracking entschieden haben. Die Kunden erfahren die Gesamtanzahl der Nutzer, die auf ihre Anzeige geklickt haben und zu einer mit einem Conversion-Tracking-Tag versehenen Seite weitergeleitet wurden. Sie erhalten jedoch keine Informationen, mit denen sich Nutzer persönlich identifizieren lassen.',
      'Die Speicherung von „Conversion-Cookies“ und die Nutzung dieses Tracking-Tools erfolgen ausschließlich auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, die Sie über unseren Cookie-Banner erteilen können. Die Einwilligung ist jederzeit widerrufbar – nutzen Sie hierfür den Link „Cookie-Einstellungen“ im Footer dieser Website.',
      'Mehr Informationen zu Google Ads und Google Conversion-Tracking finden Sie in den Datenschutzbestimmungen von Google: https://policies.google.com/privacy?hl=de.',
      'Sie können Ihren Browser außerdem so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.',
    ],
  },
  {
    h3: 'Google Tracking (Google Tag Manager / Messdienste von Google)',
    paragraphs: [
      'Diese Website nutzt Tracking- und Messdienste von Google, insbesondere den Google Tag Manager. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.',
      'Der Google Tag Manager ist ein Tool, mit dessen Hilfe wir Tracking- oder Statistik-Tools und andere Technologien auf unserer Website einbinden können. Der Google Tag Manager selbst erstellt keine Nutzerprofile, speichert keine Cookies und nimmt keine eigenständigen Analysen vor. Er dient lediglich der Verwaltung und Ausspielung der über ihn eingebundenen Tools. Der Google Tag Manager erfasst jedoch Ihre IP-Adresse, die auch an das Mutterunternehmen von Google in die Vereinigten Staaten übertragen werden kann.',
      'Über die eingebundenen Tracking-Dienste können Informationen über Ihr Nutzungsverhalten auf dieser Website (z.B. aufgerufene Seiten, Verweildauer, verwendetes Endgerät, Interaktionen wie Klicks auf Telefonnummer oder Formularabsendungen) erfasst und ausgewertet werden. Diese Daten nutzen wir, um die Wirksamkeit unserer Werbekampagnen zu messen und unser Angebot zu verbessern.',
      'Der Einsatz dieser Tracking-Dienste erfolgt ausschließlich auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, die Sie über unseren Cookie-Banner erteilen können. Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen – nutzen Sie hierfür den Link „Cookie-Einstellungen“ im Footer dieser Website.',
      'Soweit Daten in die USA übertragen werden, stützt sich die Übermittlung auf die Standardvertragsklauseln der EU-Kommission sowie – soweit einschlägig – auf das EU-US Data Privacy Framework. Details finden Sie in der Datenschutzerklärung von Google: https://policies.google.com/privacy?hl=de.',
    ],
  },
  { h2: '6. Plugins und Tools' },
  {
    h3: 'Google Web Fonts',
    paragraphs: [
      'Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.',
    ],
  },
  {
    h3: 'Google Maps',
    paragraphs: [
      'Diese Seite nutzt über eine API den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited (“Google”), Gordon House, Barrow Street, Dublin 4, Irland.',
      'Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung.',
      'Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.',
      'Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google: https://policies.google.com/privacy?hl=de.',
    ],
  },
  { h2: '7. Zahlungsanbieter und Reseller' },
  {
    h3: 'PayPal',
    paragraphs: [
      'Auf unserer Website bieten wir u.a. die Bezahlung via PayPal an. Anbieter dieses Zahlungsdienstes ist die PayPal (Europe) S.à.r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg (im Folgenden “PayPal”).',
      'Wenn Sie die Bezahlung via PayPal auswählen, werden die von Ihnen eingegebenen Zahlungsdaten an PayPal übermittelt.',
      'Die Übermittlung Ihrer Daten an PayPal erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) und Art. 6 Abs. 1 lit. b DSGVO (Verarbeitung zur Erfüllung eines Vertrags). Sie haben die Möglichkeit, Ihre Einwilligung zur Datenverarbeitung jederzeit zu widerrufen. Ein Widerruf wirkt sich auf die Wirksamkeit von in der Vergangenheit liegenden Datenverarbeitungsvorgängen nicht aus.',
    ],
  },
];

function linkify(text: string) {
  const parts = text.split(/(https:\/\/[^\s)]+[^\s).,])/g);
  return parts.map((part, i) =>
    part.startsWith('https://') ? (
      <a
        key={i}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline break-all"
      >
        {part}
      </a>
    ) : (
      part
    )
  );
}

export default function Datenschutz() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight heading-gradient mb-10">
            Datenschutz
          </h1>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            {blocks.map((block, i) => (
              <div key={i} className="space-y-3">
                {block.h2 && (
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground pt-6">
                    {block.h2}
                  </h2>
                )}
                {block.h3 && <h3 className="text-lg font-bold text-foreground">{block.h3}</h3>}
                {block.paragraphs?.map((p, j) => <p key={j}>{linkify(p)}</p>)}
                {block.list && (
                  <ul className="list-disc pl-6 space-y-2">
                    {block.list.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="pt-8">
              <button
                onClick={() => {
                  revokeConsent();
                  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                }}
                className="text-primary font-semibold hover:underline"
              >
                Cookie-Einstellungen ändern / Einwilligung widerrufen
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
