import { Phone } from 'lucide-react';

export default function FloatingCallButton() {
  return <a className="floating-call-button" href="tel:+919873572889" aria-label="Call +91-9873572889"><Phone size={20} /></a>;
}
