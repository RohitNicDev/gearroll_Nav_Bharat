import { httpsCallable } from 'firebase/functions';
import { firebaseFunctions } from '../firebase';

/** Sends a lead to a Firebase callable Cloud Function.
 * The function stores it in Firestore and sends the email server-side.
 */
export async function submitEnquiry(payload) {
  if (!firebaseFunctions) {
    throw new Error('Firebase is not configured yet. Add your Firebase web settings to .env and deploy the Cloud Function.');
  }

  const submit = httpsCallable(firebaseFunctions, 'submitEnquiry');
  const response = await submit({
    name: payload.name,
    email: payload.email,
    phone: payload.phone,
    address: payload.address,
    message: payload.message || '',
    website: payload.website || '',
    sourcePage: typeof window !== 'undefined' ? window.location.pathname : '/',
  });
  return response.data;
}
