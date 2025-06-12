"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { getFeaturedProjects, urlFor } from '@/lib/sanity';

export default function FeaturedProjects() {
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
        const fetchedProjects = await getFeaturedProjects();
        setProjects(fetchedProjects);
      } catch (err) {
        console.error('Error fetching featured projects:', err);
        setError('Failed to load featured projects');
        // Fallback to hardcoded data if Sanity fails
        setProjects([
          {
            _id: "fallback-1",
            title: "Used Car Market Analysis",
            description: "Scrapped, cleaned, visualized, analyzed and gave recommendations on used car market data",
            imageUrl: "/images/project1.png",
            tags: ["Python", "EDA", "Tableau"],
            projectLink: "/projects/customer-churn-prediction"
          },
          {
            _id: "fallback-2",
            title: "Data Science Agent",
            description: "An all-round data science agent that can make your technical life simple",
            imageUrl: "/images/DS Agent.png",
            tags: ["Python","Groq", "AI Agent"],
            projectLink: "/projects/sentiment-analysis-dashboard"
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
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="text-xl">Loading featured projects...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 flex flex-col items-center" ref={ref}>
      <motion.div
        className="max-w-5xl w-full mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          <span className="text-gradient">Featured Projects</span>
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-light-darker max-w-2xl mx-auto">
          Check out some of my recent data science and AI projects that showcase my skills and expertise.
        </p>
        {error && (
          <p className="text-yellow-500 mt-4 text-sm">
            Note: Using fallback data. Please check Sanity configuration.
          </p>
        )}
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center max-w-4xl mx-auto"
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
              
              <Link 
                href={project.projectLink || project.githubLink || "#"} 
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
