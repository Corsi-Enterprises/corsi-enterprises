import { Link } from 'react-router';
import { Mail } from 'lucide-react';

export function EmailButton() {
  return (
    <Link
      to="/contact"
      className="fixed bottom-8 right-8 z-50 bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
      aria-label="Contact us"
    >
      <Mail className="w-6 h-6" />
    </Link>
  );
}
