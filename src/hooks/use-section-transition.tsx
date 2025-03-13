import { useEffect, useRef, useState } from 'react';

/**
 * Hook to handle section visibility transitions
 * @param threshold - Intersection threshold (0-1) for when to trigger the animation
 * @param rootMargin - Root margin to adjust observation area
 * @returns [sectionRef, isVisible] - Ref to attach to section and visibility state
 */
export const useSectionTransition = (
  threshold: number = 0.15,
  rootMargin: string = '0px'
): [React.RefObject<HTMLElement>, boolean] => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When section enters viewport, make it visible
        if (entry.isIntersecting) {
          // Set a small timeout to ensure the transition is visible
          setTimeout(() => {
            setIsVisible(true);
          }, 100);
          
          // Once animation has triggered, no need to observe anymore
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        root: null, // Use viewport as root
        rootMargin,
        threshold,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return [sectionRef, isVisible];
};