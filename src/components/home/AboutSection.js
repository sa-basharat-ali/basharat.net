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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-w-4 aspect-h-5 overflow-hidden rounded-xl bg-dark-lighter">
            <div className="absolute inset-0 border-2 border-primary rounded-xl transform rotate-3 z-0"></div>
            <Image
              src="/images/profile.jpg" 
              alt="Basharat Ali" 
              width={500}
              height={600}
              className="rounded-xl object-cover z-10 relative"
            />
          </div>
          
          <motion.div 
            className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="font-bold">5+ Years</p>
            <p className="text-sm">Data Science Experience</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-heading font-bold mb-4">
            Data Scientist & AI Specialist
          </h3>
          
          <p className="text-light-darker mb-6">
            I'm a passionate Data Scientist with expertise in AI technologies, machine learning, 
            and data analysis. With over 5 years of experience in the field, I've helped organizations
            leverage data to make better decisions and implemented AI solutions to solve complex problems.
          </p>
          
          <p className="text-light-darker mb-6">
            I'm committed to educating others about advancements in AI and data science
            through my daily LinkedIn content, workshops, and training sessions.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <h4 className="font-bold">Name:</h4>
              <p className="text-light-darker">Basharat Ali</p>
            </div>
            <div>
              <h4 className="font-bold">Email:</h4>
              <p className="text-light-darker">
                <a href="mailto:sabasharat.ali@gmail.com" className="hover:text-primary transition-colors">
                  sabasharat.ali@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h4 className="font-bold">From:</h4>
              <p className="text-light-darker">Pakistan</p>
            </div>
            <div>
              <h4 className="font-bold">Expertise:</h4>
              <p className="text-light-darker">Data Science, AI, ML</p>
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
