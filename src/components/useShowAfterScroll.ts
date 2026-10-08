'use client';

import { useEffect, useState } from 'react';

/**
 * Geeft true zodra de pagina verder dan `threshold` pixels is gescrold.
 * Wordt gebruikt om de zwevende knoppen op mobiel pas na de hero te tonen.
 */
export function useShowAfterScroll(threshold = 300): boolean {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const update = () => setShow(window.scrollY > threshold);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [threshold]);

  return show;
}
