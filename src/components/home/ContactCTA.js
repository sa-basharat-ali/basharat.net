"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

export default function ContactCTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto px-4" ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8 md:p-12 text-center glassmorphism"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          Let's Work Together
        </h2>
        
        <p className="text-light-darker mb-8 max-w-2xl mx-auto">
          Whether you need consultation on your data strategy, custom AI/data solutions 
          or training for your team/individual, I'm here to help you leverage the power of data science and AI.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/contact" 
            className="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-glow"
          >
            Get in Touch
          </Link>
          <Link 
            href="/trainings" 
            className="px-8 py-3 bg-transparent border border-primary text-primary hover:bg-primary/10 font-medium rounded-lg transition-colors"
          >
            Request Training
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
