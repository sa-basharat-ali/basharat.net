"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "Customer Churn Prediction",
    description: "Developed a machine learning model to predict customer churn for a telecom company with 85% accuracy. Implemented feature engineering, model selection, and deployment pipeline.",
    image: "/images/project1.jpg",
    tags: ["Machine Learning", "Python", "Scikit-learn", "Feature Engineering"],
    link: "https://github.com/username/churn-prediction"
  },
  {
    id: 2,
    title: "Sentiment Analysis Dashboard",
    description: "Created an NLP-powered dashboard to analyze customer feedback and social media sentiment in real-time. Built using BERT for text classification and React for the frontend.",
    image: "/images/project2.jpg",
    tags: ["NLP", "BERT", "Python", "React", "Dashboard"],
    link: "https://github.com/username/sentiment-dashboard"
  },
  {
    id: 3,
    title: "Computer Vision for Retail",
    description: "Implemented computer vision solutions for shelf monitoring and customer behavior analysis in retail stores using YOLOv5 and tracking algorithms.",
    image: "/images/project3.jpg",
    tags: ["Computer Vision", "YOLOv5", "TensorFlow", "Edge AI"],
    link: "https://github.com/username/retail-vision"
  },
  {
    id: 4,
    title: "Time Series Forecasting",
    description: "Built a time series forecasting system for inventory management using Prophet and LSTM models. Achieved 30% improvement in forecast accuracy.",
    image: "/images/project4.jpg",
    tags: ["Time Series", "Prophet", "LSTM", "Python"],
    link: "https://github.com/username/time-series"
  },
  {
    id: 5,
    title: "Recommendation Engine",
    description: "Developed a hybrid recommendation system combining collaborative filtering and content-based approaches for an e-commerce platform.",
    image: "/images/project5.jpg",
    tags: ["Recommender Systems", "Python", "Neural Networks"],
    link: "https://github.com/username/recommender"
  },
  {
    id: 6,
    title: "Anomaly Detection System",
    description: "Created an unsupervised anomaly detection system for IoT sensor data using autoencoders and statistical methods.",
    image: "/images/project6.jpg",
    tags: ["Anomaly Detection", "IoT", "Deep Learning"],
    link: "https://github.com/username/anomaly-detection"
  }
];

export default function Projects() {
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
                
                <a 
                  href={project.link}
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
