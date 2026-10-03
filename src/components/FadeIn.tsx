'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

export interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'none';
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    const current = domRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => observer.disconnect();
  }, []);

  const translateClass =
    direction === 'up'
      ? isVisible
        ? 'translate-y-0'
        : 'translate-y-5'
      : '';

  return (
    <div
      ref={domRef}
      style={{
        transitionDuration: '950ms',
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`transition-all motion-reduce:transition-none motion-reduce:transform-none ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${translateClass} ${className}`}
    >
      {children}
    </div>
  );
}