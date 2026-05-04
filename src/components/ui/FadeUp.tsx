'use client';

import { useEffect, useRef } from 'react';

interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}

export function FadeUp({ children, className = '', threshold = 0.1 }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={`fade-up ${className}`}>
      {children}
    </div>
  );
}
