"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { getProjects, urlFor } from '@/lib/sanity';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        const fetchedProjects = await getProjects();
        setProjects(fetchedProjects);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects');
        // Fallback to hardcoded data if Sanity fails
        setProjects([
          {
            _id: "fallback-1",
            title: "Customer Churn Prediction",
            description: "Developed a machine learning model to predict customer churn for a telecom company with 85% accuracy. Implemented feature engineering, model selection, and deployment pipeline.",
            imageUrl: "/images/project1.jpg",
            tags: ["Machine Learning", "Python", "Scikit-learn", "Feature Engineering"],
            githubLink: "https://github.com/username/churn-prediction"
          },
          {
            _id: "fallback-2",
            title: "Sentiment Analysis Dashboard",
            description: "Created an NLP-powered dashboard to analyze customer feedback and social media sentiment in real-time. Built using BERT for text classification and React for the frontend.",
            imageUrl: "/images/project2.jpg",
            tags: ["NLP", "BERT", "Python", "React", "Dashboard"],
            githubLink: "https://github.com/username/sentiment-dashboard"
          }
        ]);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

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

  if (loading) {
    return (
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <div className="text-xl">Loading projects...</div>
        </div>
      </div>
    );
  }

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
            <span className="text-gradient">Projects</span>
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-light-darker max-w-2xl mx-auto">
            Explore my portfolio of data science and AI projects, showcasing real-world applications and solutions.
          </p>
          {error && (
            <p className="text-yellow-500 mt-4">
              Note: Using fallback data. Please check Sanity configuration.
            </p>
          )}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project._id}
              variants={itemVariants}
              className="bg-dark-lighter rounded-xl overflow-hidden transition-transform hover:transform hover:scale-[1.02] group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.imageUrl || project.image || "/images/project-placeholder.jpg"}
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
                  {project.tags?.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs py-1 px-2 bg-primary/20 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.projectLink || project.githubLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium flex items-center group-hover:text-primary-light transition-colors"
                >
                  View Project
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
