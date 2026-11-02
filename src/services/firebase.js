import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFunctions } from 'firebase/functions';
import { initializeAnalytics, isSupported, logEvent } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const hasFirebaseConfig = Boolean(
  firebaseConfig.apiKey && firebaseConfig.authDomain && firebaseConfig.projectId && firebaseConfig.appId,
);

export const firebaseApp = hasFirebaseConfig
  ? (getApps().length ? getApp() : initializeApp(firebaseConfig))
  : null;

export const firebaseFunctions = firebaseApp
  ? getFunctions(firebaseApp, import.meta.env.VITE_FIREBASE_FUNCTIONS_REGION || 'asia-south1')
  : null;

let analyticsInstance;
let analyticsInitPromise;

async function getAnalyticsSafely() {
  if (!firebaseApp || !firebaseConfig.measurementId || typeof window === 'undefined') return null;
  if (analyticsInstance) return analyticsInstance;
  if (!analyticsInitPromise) {
    analyticsInitPromise = isSupported()
      .then((supported) => {
        if (supported) analyticsInstance = initializeAnalytics(firebaseApp, { config: { send_page_view: false } });
        return analyticsInstance || null;
      })
      .catch(() => null);
  }
  return analyticsInitPromise;
}

export async function trackAnalyticsEvent(eventName, parameters = {}) {
  try {
    const analytics = await getAnalyticsSafely();
    if (analytics) logEvent(analytics, eventName, parameters);
  } catch {
    // Analytics is non-critical: tracking failures must never block the enquiry form.
  }
}

export async function trackPageView(pathname) {
  await trackAnalyticsEvent('page_view', {
    page_path: pathname,
    page_title: document.title,
    page_location: `${window.location.origin}${pathname}`,
  });
}
