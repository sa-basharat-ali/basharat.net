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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-heading font-bold mb-6 text-center">
            <span className="text-gradient">My Journey</span>
          </h2>
          <p className="text-light-darker mb-6 text-lg">
            With over 4 years of experience in data science and AI, I've had the privilege of working 
            on diverse projects that have shaped my expertise in different aspects of the data life cycle. From creating
            data pipelines, to building dashboards and to machine learning models this journey has been rewarding.
          </p>
          <p className="text-light-darker mb-6 text-lg">
            My passion lies in making AI accessible and practical for businesses and individuals alike. 
            I believe in the power of data-driven decision making and enjoy helping organizations 
            leverage their data effectively.
          </p>
          <p className="text-light-darker mb-8 text-lg">
            When I'm not working with data, I enjoy sharing my knowledge through writing, speaking 
            at conferences, and conducting workshops on various aspects of data science and AI.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-dark-lighter p-8 rounded-xl">
            <h3 className="text-2xl font-heading font-bold mb-6 text-center">
              <span className="text-gradient">Education</span>
            </h3>
            <ul className="space-y-4 text-light-darker text-lg">
              <li>M.S. in Business Analytics (in progress)</li>
              <li>B.S. in Computer Science</li>
            </ul>
          </div>

          <div className="bg-dark-lighter p-8 rounded-xl">
            <h3 className="text-2xl font-heading font-bold mb-6 text-center">
              <span className="text-gradient">Experience</span>
            </h3>
            <ul className="space-y-4 text-light-darker text-lg">
              <li>Senior Analytics Engineer & Business Analyst at geidea</li>
              <li>Senior Data Consultant at EY</li>
              <li>Managing Director & Head of Data for a stealth startup</li> 
              <li>Freelance Data/AI Consultant</li>
            </ul>
          </div>

          <div className="bg-dark-lighter p-8 rounded-xl">
            <h3 className="text-2xl font-heading font-bold mb-6 text-center">
              <span className="text-gradient">Certifications</span>
            </h3>
            <ul className="space-y-4 text-light-darker text-lg">
              <li>Certified Data Analyst - Google</li>
              <li>Data Science Roadmap - DataCamp</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
