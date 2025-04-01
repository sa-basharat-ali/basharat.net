"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "Customer Churn Prediction",
    description: "Developed a machine learning model to predict customer churn for a telecom company with 85% accuracy.",
    image: "/images/project1.jpg",
    tags: ["Machine Learning", "Python", "Scikit-learn"],
    link: "/projects/customer-churn-prediction"
  },
  {
    id: 2,
    title: "Sentiment Analysis Dashboard",
    description: "Created an NLP-powered dashboard to analyze customer feedback and social media sentiment in real-time.",
    image: "/images/project2.jpg",
    tags: ["NLP", "Python", "React", "Dashboard"],
    link: "/projects/sentiment-analysis-dashboard"
  },
  {
    id: 3,
    title: "Computer Vision for Retail",
    description: "Implemented computer vision solutions for shelf monitoring and customer behavior analysis in retail stores.",
    image: "/images/project3.jpg",
    tags: ["Computer Vision", "TensorFlow", "Edge AI"],
    link: "/projects/computer-vision-retail"
  },
];

export default function FeaturedProjects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="container mx-auto px-4" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          <span className="text-gradient">Featured Projects</span>
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-light-darker max-w-2xl mx-auto">
          Check out some of my recent data science and AI projects that showcase my skills and expertise.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            variants={itemVariants}
            className="bg-dark-lighter rounded-xl overflow-hidden transition-transform hover:transform hover:scale-[1.02] group"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: "cover" }}
                className="group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-light-darker mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-xs py-1 px-2 bg-primary/20 text-primary rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <Link 
                href={project.link} 
                className="text-primary font-medium flex items-center group-hover:text-primary-light transition-colors"
              >
                View Project
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center mt-12"
      >
        <Link 
          href="/projects" 
          className="px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium rounded-lg transition-colors inline-flex items-center"
        >
          View All Projects
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </motion.div>
    </div>
  );
}
