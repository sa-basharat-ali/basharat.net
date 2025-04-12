"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function TrainingsPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="pt-32 pb-16 min-h-screen bg-dark">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Gradient background effect */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-40 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
          <div className="absolute top-60 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            <span className="text-gradient">Training Programs</span>
          </h1>
          <p className="text-light-darker max-w-2xl mx-auto mb-8">
            Enhance your skills with personalized training programs in Data Science, AI, and Programming.
            Fill out the form below to get started.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative bg-dark-lighter/50 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-primary/10 overflow-hidden">
            {/* Form container decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 to-secondary/40"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary/40 to-primary/40"></div>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfSSmi4AJdZpgz_6qxRMJUlWo4o3Ec3a8bHx5kkPNRSnBQQXQ/viewform?embedded=true"
              className="w-full h-[800px] border-0 bg-transparent"
              title="Training Request Form"
            >
              Loading...
            </iframe>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
