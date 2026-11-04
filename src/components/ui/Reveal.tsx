'use client';

import { motion, type Variants } from 'framer-motion';

type Direccion = 'up' | 'down' | 'left' | 'right' | 'none';

const desplazamiento: Record<Direccion, { x?: number; y?: number }> = {
  up: { y: 32 },
  down: { y: -32 },
  left: { x: 40 },
  right: { x: -40 },
  none: {},
};

const EASE = [0.22, 1, 0.36, 1] as const;

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  direccion?: Direccion;
  delay?: number;
  duracion?: number;
  /** Escala inicial (p. ej. 0.95) para un efecto de "zoom" suave. */
  escala?: number;
}

// Aparece con un desplazamiento suave cuando entra en pantalla (una sola vez).
export function Reveal({ children, className, direccion = 'up', delay = 0, duracion = 0.7, escala }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...desplazamiento[direccion], ...(escala ? { scale: escala } : {}) }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: duracion, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

const contenedor: Variants = {
  oculto: {},
  visible: (intervalo: number) => ({ transition: { staggerChildren: intervalo } }),
};

const elemento: Variants = {
  oculto: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

// Contenedor que revela a sus <StaggerItem> uno tras otro.
export function Stagger({
  children,
  className,
  intervalo = 0.09,
}: {
  children: React.ReactNode;
  className?: string;
  intervalo?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="oculto"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={contenedor}
      custom={intervalo}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={elemento}>
      {children}
    </motion.div>
  );
}
