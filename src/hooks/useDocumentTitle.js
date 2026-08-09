import { useEffect } from 'react';

const DEFAULT_TITLE = 'SynthMindz - AI Content Strategy Platform';

export default function useDocumentTitle(title, description) {
  useEffect(() => {
    const previousTitle = document.title;

    document.title = title ? `${title} - SynthMindz` : DEFAULT_TITLE;

    let metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription
      ? metaDescription.getAttribute('content')
      : null;

    if (description) {
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);
    }

    return () => {
      document.title = previousTitle || DEFAULT_TITLE;
      if (metaDescription && previousDescription !== null) {
        metaDescription.setAttribute('content', previousDescription);
      } else if (metaDescription && previousDescription === null) {
        metaDescription.remove();
      }
    };
  }, [title, description]);
}
