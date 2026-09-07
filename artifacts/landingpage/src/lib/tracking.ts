import { getConsent } from '@/lib/consent';

const GOOGLE_ADS_CLAIM_CONVERSION =
  'AW-921888031/IGMMCLSbyuwcEJ_Ky7cD';

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown> | IArguments>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName: string,
  eventParams?: Record<string, unknown>,
) {
  if (typeof window !== 'undefined') {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...eventParams,
      });
    } else {
      console.log(`[Tracking] Event: ${eventName}`, eventParams);
    }
  }
}

export function trackFunnelStep(stepName: string, stepNumber: number) {
  trackEvent('funnel_step', { step_name: stepName, step_number: stepNumber });
}

export function trackFormSubmitted() {
  trackEvent('form_submitted');

  if (
    typeof window !== 'undefined' &&
    getConsent() === 'accepted' &&
    window.gtag
  ) {
    window.gtag('event', 'conversion', {
      send_to: GOOGLE_ADS_CLAIM_CONVERSION,
    });
  }
}
