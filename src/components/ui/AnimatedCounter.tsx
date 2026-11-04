'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';

// Número que cuenta desde 0 cuando entra en pantalla. Conserva prefijos y sufijos
// del texto original, por ejemplo "+2000" o "98%".
export default function AnimatedCounter({ valor, duracion = 1.6 }: { valor: string; duracion?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const enVista = useInView(ref, { once: true });
  const match = valor.match(/^([^0-9]*)([0-9]+)([^0-9]*)$/);
  const objetivo = match ? Number(match[2]) : 0;
  const tieneNumero = match !== null;
  const [actual, setActual] = useState(0);

  useEffect(() => {
    if (!enVista || !tieneNumero) return;
    const controles = animate(0, objetivo, {
      duration: duracion,
      ease: 'easeOut',
      onUpdate: (v) => setActual(Math.round(v)),
    });
    return () => controles.stop();
  }, [enVista, tieneNumero, objetivo, duracion]);

  if (!match) return <span ref={ref}>{valor}</span>;
  return (
    <span ref={ref} aria-label={valor}>
      {match[1]}
      {actual}
      {match[3]}
    </span>
  );
}
