'use client';

import { ViewTransition } from 'react';
import { usePathname } from 'next/navigation';
import { MotionConfig } from 'framer-motion';

// Transición entre páginas con la View Transitions API del navegador:
// al cambiar de ruta, la página anterior sale (page-exit) y la nueva entra (page-enter).
// Los estilos están en globals.css. Sin soporte del navegador, la navegación es normal.
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <MotionConfig reducedMotion="user">
      <ViewTransition key={pathname} enter="page-enter" exit="page-exit" default="none">
        <div>{children}</div>
      </ViewTransition>
    </MotionConfig>
  );
}
