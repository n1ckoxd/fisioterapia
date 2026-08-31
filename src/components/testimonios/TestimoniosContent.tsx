'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonios, type Testimonio } from '@/lib/data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function TestimoniosContent() {
  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {testimonios.map((testimonio: Testimonio) => (
          <motion.div
            key={testimonio.id}
            variants={itemVariants}
            className="bg-white rounded-2xl p-8 shadow-sm card-hover border border-neutral-100"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(testimonio.estrellas)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
              {[...Array(5 - testimonio.estrellas)].map((_, i) => (
                <Star key={i + testimonio.estrellas} className="w-5 h-5 text-neutral-300" />
              ))}
            </div>
            
            <p className="text-gray-700 italic flex-grow mb-6">
              &quot;{testimonio.texto}&quot;
            </p>
            
            <div className="border-t border-neutral-100 pt-4">
              <p className="font-bold text-neutral-900">{testimonio.nombre}, {testimonio.edad}</p>
              <div className="flex justify-between items-center mt-1">
                <span className="text-sm text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                  {testimonio.servicio}
                </span>
                <span className="text-sm text-neutral-500">{testimonio.fecha}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
