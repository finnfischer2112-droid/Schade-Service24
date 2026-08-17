const CONSENT_KEY = 'cookie-consent';

export type ConsentValue = 'accepted' | 'declined' | null;

const listeners = new Set<() => void>();

export function getConsent(): ConsentValue {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === 'accepted' || v === 'declined' ? v : null;
  } catch {
    return null;
  }
}

function gtagConsentUpdate(granted: boolean) {
  if (typeof window === 'undefined') return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (!gtag) return;
  const state = granted ? 'granted' : 'denied';
  gtag('consent', 'update', {
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
    analytics_storage: state,
  });
}

export function setConsent(value: 'accepted' | 'declined') {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // storage unavailable
  }
  gtagConsentUpdate(value === 'accepted');
  if (value === 'accepted' && typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({ event: 'cookie_consent_accepted' });
  }
  listeners.forEach((l) => l());
}

// On page load: if the user already accepted earlier, re-grant consent to Google.
if (typeof window !== 'undefined' && getConsent() === 'accepted') {
  gtagConsentUpdate(true);
}

export function revokeConsent() {
  try {
    localStorage.removeItem(CONSENT_KEY);
  } catch {
    // storage unavailable
  }
  listeners.forEach((l) => l());
}

export function onConsentChange(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
