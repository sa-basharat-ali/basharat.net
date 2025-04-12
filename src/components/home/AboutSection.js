"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
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
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          <span className="text-gradient">About Me</span>
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative px-4"
        >
          <div className="relative w-full h-full max-w-lg mx-auto group perspective">

            {/* Glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            
            {/* Main container with 3D effect */}
            <div className="relative w-full h-full rounded-xl bg-dark-lighter overflow-hidden transform-gpu group-hover:scale-[1.02] group-hover:-rotate-2 group-hover:translate-y-[-5px] transition-all duration-300 ease-out shadow-2xl">
              {/* Border overlay */}
              <div className="absolute inset-0 border-2 border-primary/50 rounded-xl group-hover:border-primary/80 transition-colors duration-300"></div>
              
              {/* Image */}
              <Image
                src="/images/About section - banner.png" 
                alt="S A Basharat Ali" 
                width={600}
                height={600}
                className="rounded-xl w-full h-full object-contain z-10 relative p-2"
                priority
              />
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="px-4"
        >
          <h3 className="text-2xl font-heading font-bold mb-4">
            Data Scientist
          </h3>
          
          <p className="text-light-darker mb-6">
            I'm a passionate Data Scientist with expertise in AI technologies, machine learning, 
            and data analysis. With decent experience in the field, I've helped organizations
            leverage data to make better decisions and implemented AI solutions to solve complex problems.
          </p>
          
          <p className="text-light-darker mb-6">
            I'm committed to educating others about advancements in AI and data science
            through my daily LinkedIn content, workshops, and training sessions.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="font-bold">Name:</h4>
              <p className="text-light-darker">S A Basharat Ali</p>
            </div>
            <div>
              <h4 className="font-bold">Email:</h4>
              <p className="text-light-darker">
                <a href="mailto:contact@basharat.net" className="hover:text-primary transition-colors">
                  contact@basharat.net
                </a>
              </p>
            </div>
          </div>
          
          <Link 
            href="/about"
            className="px-6 py-2 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors shadow-md inline-block"
          >
            More About Me
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
