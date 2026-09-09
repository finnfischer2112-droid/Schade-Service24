declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown> | IArguments>;
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
}
