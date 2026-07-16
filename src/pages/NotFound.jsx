import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';

export default function NotFound() {
  useDocumentTitle('Page Not Found', 'The page you are looking for does not exist.');

  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-xl mx-auto px-4 text-center">
        <AnimateOnScroll>
          <div className="text-8xl font-bold font-display gradient-text mb-6">
            404
          </div>
          <h1 className="text-3xl font-bold font-display text-ink mb-4">
            Page Not Found
          </h1>
          <p className="text-ink-soft text-lg leading-relaxed mb-8">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 btn-glow bg-gradient-to-r from-primary to-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:brightness-110"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 border border-surface-200 text-ink-soft font-medium px-6 py-3 rounded-lg hover:bg-surface-100 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
