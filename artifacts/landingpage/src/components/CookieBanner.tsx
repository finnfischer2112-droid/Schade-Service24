import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { getConsent, setConsent, onConsentChange } from '@/lib/consent';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getConsent() === null);
    return onConsentChange(() => setVisible(getConsent() === null));
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[60] p-4 sm:p-6">
      <div className="mx-auto max-w-3xl bg-slate-900 text-slate-200 rounded-xl shadow-2xl border border-slate-700 p-5 sm:p-6">
        <p className="text-sm leading-relaxed mb-4">
          Wir verwenden Cookies und ähnliche Technologien, u.&nbsp;a. für Google Ads
          Conversion-Tracking und Analysezwecke. Einige sind technisch notwendig, andere
          setzen wir nur mit Ihrer Einwilligung ein. Ihre Einwilligung können Sie jederzeit
          über den Link „Cookie-Einstellungen" im Footer widerrufen. Weitere Informationen
          finden Sie in unserer{' '}
          <Link href="/datenschutz" className="underline hover:text-white">
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => setConsent('accepted')}
            className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Alle akzeptieren
          </button>
          <button
            onClick={() => setConsent('declined')}
            className="inline-flex items-center justify-center h-11 px-6 rounded-lg border border-slate-600 text-slate-200 font-semibold text-sm hover:bg-slate-800 transition-colors"
          >
            Nur notwendige
          </button>
        </div>
      </div>
    </div>
  );
}
