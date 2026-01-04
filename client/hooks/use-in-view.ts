import { useEffect, useRef, useState } from "react";

export function useInView(
  options: IntersectionObserverInit = { threshold: 0.1, rootMargin: "0px" }
) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        setHasTriggered(true);
      } else {
        setIsInView(false);
        setHasTriggered(false);
      }
    }, options);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { ref, isInView, hasTriggered };
}
