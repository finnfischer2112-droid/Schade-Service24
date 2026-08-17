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

export function setConsent(value: 'accepted' | 'declined') {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // storage unavailable
  }
  if (value === 'accepted' && typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({ event: 'cookie_consent_accepted' });
  }
  listeners.forEach((l) => l());
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
