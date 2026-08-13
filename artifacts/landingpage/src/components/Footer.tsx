import { config } from '@/config';
import { trackEvent } from '@/lib/tracking';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-slate-800 pb-12 mb-8">
          
          {/* Column 1 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm leading-none">24</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Schaden-Service<span className="text-primary">24</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Ihr unabhängiger KFZ-Sachverständiger im Raum Kaiserslautern. Fachgerechte Schadensbegutachtung und schnelle Hilfe nach einem Unfall.
            </p>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h4 className="text-white font-bold mb-6">Kontakt</h4>
            <div className="space-y-3 text-sm">
              <p>
                <a 
                  href={config.PHONE_HREF} 
                  onClick={() => trackEvent('phone_click')}
                  className="hover:text-primary transition-colors"
                >
                  Tel: {config.PHONE}
                </a>
              </p>
              <p>
                <a 
                  href={config.EMAIL_HREF} 
                  onClick={() => trackEvent('email_click')}
                  className="hover:text-primary transition-colors"
                >
                  E-Mail: {config.EMAIL}
                </a>
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <h4 className="text-white font-bold mb-6">Unternehmenssitz</h4>
            <div className="space-y-3 text-sm">
              <p>{config.COMPANY_LEGAL_NAME}</p>
              <p>Saarpfalzstr. 55</p>
              <p>66914 Waldmohr</p>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {currentYear} {config.COMPANY_NAME}. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-6">
            <a href="https://rcs.stageberry.net/impressum" className="hover:text-white transition-colors">Impressum</a>
            <a href="https://rcs.stageberry.net/datenschutz" className="hover:text-white transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
