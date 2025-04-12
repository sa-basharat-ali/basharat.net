"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-light-darker max-w-2xl mx-auto">
            Learn more about my journey, experience, and passion for data science and AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/images/profile.jpg"
                alt="Basharat Ali"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4">My Journey</h2>
            <p className="text-light-darker mb-4">
              With over 4 years of experience in data science and AI, I've had the privilege of working 
              on diverse projects that have shaped my expertise in different aspects of the data life cycle. From creating
              data pipelines, to building dashboards and to machine learning models this journey has been rewarding.
            </p>
            <p className="text-light-darker mb-4">
              My passion lies in making AI accessible and practical for businesses and individuals alike. 
              I believe in the power of data-driven decision making and enjoy helping organizations 
              leverage their data effectively.
            </p>
            <p className="text-light-darker">
              When I'm not working with data, I enjoy sharing my knowledge through writing, speaking 
              at conferences, and conducting workshops on various aspects of data science and AI.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-dark-lighter p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Education</h3>
            <ul className="space-y-2 text-light-darker">
              <li>M.S. in  Business Analytics (in progress)</li>
              <li>B.S. in Computer Science</li>
            </ul>
          </div>

          <div className="bg-dark-lighter p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Experience</h3>
            <ul className="space-y-2 text-light-darker">
              <li>Senior Analytics Engineer & Business Analyst at geidea</li>
              <li>Senior Data Consultant at EY</li>
              <li>Managing Director & Head of Data for a stealth startup</li> 
              <li>Freelance Data/AI Consultant</li>
            </ul>
          </div>

          <div className="bg-dark-lighter p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Certifications</h3>
            <ul className="space-y-2 text-light-darker">
              <li>Certified Data Analyst - Google</li>
              <li>Data Science Roadmap - DataCamp</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
