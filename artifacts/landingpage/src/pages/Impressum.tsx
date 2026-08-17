import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Impressum() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight heading-gradient mb-10">
            Impressum
          </h1>

          <div className="space-y-2 text-lg leading-relaxed mb-10">
            <p>RCS Gries &amp; Kahnert UG</p>
            <p>Saarpfalzstr. 55</p>
            <p>66914 Waldmohr</p>
            <p>Telefon: 06373 – 2093898</p>
            <p>
              Email:{' '}
              <a href="mailto:info@schaden-service24.com" className="text-primary hover:underline break-all">
                info@schaden-service24.com
              </a>
            </p>
            <p>Geschäftsführer Matthias Kahnert</p>
            <p>USt-ID: DE329121754</p>
          </div>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-foreground mb-4">
                Haftungsausschluss (Disclaimer)
              </h2>
              <h3 className="text-lg font-bold text-foreground mb-2">Haftung für Inhalte</h3>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
                forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung
                der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
                diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
                entfernen.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">Haftung für Links</h3>
              <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
                verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">Urheberrecht</h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
                Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem
                auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
                Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-foreground mb-4">Beschwerdeverfahren</h2>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Alternative Streitbeilegung gemäß Art. 14 Abs. 1 ODR-VO und § 36 VSBG:
              </h3>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die du unter{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all"
                >
                  https://ec.europa.eu/consumers/odr
                </a>{' '}
                findest. Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind
                wir nicht verpflichtet und nicht bereit.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
