"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ParticleBackground from '../animations/ParticleBackground';

export default function Hero() {
  const typingRef = useRef(null);

  useEffect(() => {
    if (!typingRef.current) return;

    const phrases = [
      'Data Scientist',
      'AI Specialist',
      'Technology Educator',
    ];

    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (isDeleting) {
        typingRef.current.textContent = currentPhrase.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        typingSpeed = 50;
      } else {
        typingRef.current.textContent = currentPhrase.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && currentCharIndex === currentPhrase.length) {
        // Pause at the end of typing
        isDeleting = true;
        typingSpeed = 1000;
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        typingSpeed = 500;
      }

      setTimeout(type, typingSpeed);
    }

    setTimeout(type, 1000);
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-center">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            <span>Hello, I'm </span>
            <span className="text-gradient">Basharat Ali</span>
          </h1>
          
          <div className="flex items-baseline mb-8">
            <h2 className="text-xl md:text-3xl font-heading">
              <span ref={typingRef} className="text-primary"></span>
              <span className="animate-pulse">|</span>
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-light-darker mb-8 max-w-2xl">
            Helping organizations leverage data and AI technologies to make better decisions 
            and educating the community about advancements in the AI world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/projects"
              className="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-glow"
            >
              View My Work
            </Link>
            <Link 
              href="/contact"
              className="px-8 py-3 bg-transparent border border-primary text-primary hover:bg-primary/10 font-medium rounded-lg transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a 
            href="#about" 
            className="flex flex-col items-center text-light-darker hover:text-primary transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
