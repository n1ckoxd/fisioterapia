'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonios } from '@/lib/data';

export default function TestimoniosSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonios.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonio = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonios.length);
  };

  const prevTestimonio = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonios.length) % testimonios.length);
  };

  return (
    <section className="py-20 section-light overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Lo que dicen nuestros <span className="text-primary-600">pacientes</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-10">
            <button onClick={prevTestimonio} className="p-3 bg-white rounded-full shadow-md text-gray-600 hover:text-primary-600 transition-colors">
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-10">
            <button onClick={nextTestimonio} className="p-3 bg-white rounded-full shadow-md text-gray-600 hover:text-primary-600 transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg relative min-h-[300px] flex items-center justify-center">
            <Quote className="absolute top-8 left-8 text-primary-100 w-24 h-24 -z-0" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 text-center w-full"
              >
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-6 h-6 ${i < testimonios[currentIndex].estrellas ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl text-gray-700 italic mb-8">
                  &quot;{testimonios[currentIndex].texto}&quot;
                </p>
                
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonios[currentIndex].nombre}</h4>
                  <p className="text-gray-500">{testimonios[currentIndex].servicio}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonios.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${idx === currentIndex ? 'bg-primary-600' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
