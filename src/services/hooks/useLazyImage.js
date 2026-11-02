import { useEffect, useRef, useState } from 'react';

// Optional IntersectionObserver helper for bespoke lazy-loaded image blocks.
export function useLazyImage({ rootMargin = '160px' } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;
    if (!('IntersectionObserver' in window)) { setIsVisible(true); return undefined; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { rootMargin });
    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin]);
  return { ref, isVisible };
}
