import { useState, useEffect } from 'react';

export function useInView(ref: React.RefObject<Element | null>, options: IntersectionObserverInit = { threshold: 0.1, root: null, rootMargin: '0px' }) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const current = ref.current;
    if (!current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        
      }
    }, options);

    observer.observe(current);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isInView;
}
