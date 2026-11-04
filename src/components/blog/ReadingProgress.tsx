'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

// Barra fina en la parte superior que muestra cuánto del artículo se ha leído.
export default function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 origin-left z-[60] bg-gradient-to-r from-primary-500 via-purple-500 to-teal-400"
    />
  );
}
