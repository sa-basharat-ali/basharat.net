"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import ParticleBackground from '@/components/animations/ParticleBackground';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedProject, setExpandedProject] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        // Using static project data with case studies
        setProjects([
          // TEMPLATE - Copy this structure for new projects
          {
            _id: 'stock-prediction',
            title: 'Predicting the availibity of product in a supermarket, ultimate goal to scale it to the whole country',
            caseStudy: `
          **Challenge:**
          In a retail environment, the challenge was to predict product availability across stores based on historical data, aiming to minimize stockouts and optimize inventory without disclosing specific business details.
          
          **Approach:**
          • Extracted and prepared stock data from a PostgreSQL database using SQL queries and data processing libraries.
          • Developed a classification model to predict availability using features like store ID, product ID, days since last stock, and remaining quantity.
          • Trained, evaluated, and prepared the model for deployment, including feature importance analysis and model serialization.
          • Packaged the model using Docker and deployed it for real-time predictions.
          
          **Results:**
          • Achieved reasonable accuracy on test data, enabling reliable predictions.
          • Identified remaining quantity (61% importance) and days since last stock (36% importance) as top predictive factors.
          • Demonstrated the ideal classification of availability in evaluation metrics (precision, recall, F1-score)
          
          **Technologies:**
          Python (Scikit-learn, Pandas, Numpy), Docker, PostgreSQL, SQL, Data Visualization (Matplotlib, Seaborn)
          
          **Impact:**
          Enabled better inventory management, potentially reducing stockouts and operational costs while improving long-term retail efficiency and customer satisfaction.
            `.trim(),
            category: 'Category',
          },
                     {
             _id: "pakistan-used-cars",
             title: "Used car market competition analysis for multiple used-car business ventures",
             image: "/images/pakistan-cars-dashboard.png",
             caseStudy: `
**Challenge:**
In the automotive sector, the task was to analyze market trends for used vehicles based on scraped data, focusing on key metrics like pricing and features without revealing specific marketplace details.

**Approach:**
• Scraped used car data from online sources using web scraping tools to collect details such as model, price, mileage, and specifications
• Performed exploratory data analysis (EDA) to clean, process, and identify patterns in the dataset
• Created an interactive dashboard to visualize insights, enabling easy exploration of trends and distributions

**Results:**
• Generated visualizations highlighting price distributions, popular models, and correlations between features like mileage and price
• Provided actionable insights into market dynamics, such as average prices by vehicle type and regional variations
• Built comprehensive dashboard showing 84,012 car listings with average mileage of 85,537 km

**Technologies:**
Python (Selenium, Pandas, NumPy), SQL, Tableau

**Impact:**
Facilitated better understanding of market trends, supporting informed decisions for buyers and sellers while demonstrating scalable data analysis techniques.
             `.trim(),
             category: "Data Analysis"
             },
          {
            _id: 'fintech-pipeline',
            title: 'Fintech Data Infrastructure - 40% cost reduction processing 1M+ daily transactions',
            caseStudy: `
**Challenge:**
The fintech company was struggling with legacy data systems that couldn't handle rapid growth. Daily transaction volumes exceeded 1M records, causing system slowdowns and increased AWS costs.

**Approach:**
• Migrated from legacy ETL to Apache Airflow orchestration
• Implemented data lake architecture using AWS S3 + Glue
• Built real-time streaming pipelines with Kafka + Spark
• Created automated data quality monitoring and alerting
• Optimized compute resources with auto-scaling groups

**Results:**
• 40% reduction in data processing costs
• 3x faster query performance on analytics workloads  
• 99.9% data pipeline reliability (up from 85%)
• Enabled real-time fraud detection capabilities
• Reduced time-to-insight from days to hours

**Technologies:**
Apache Airflow, AWS (S3, Glue, EMR, Lambda), Apache Spark, Kafka, Python, SQL, Docker

**Impact:**
This project became the foundation for the company's expansion into new markets, enabling them to process data from 5 additional countries seamlessly.
            `.trim(),
            category: 'Enterprise',
          },
          {
            _id: 'consulting-ml',
            title: 'ML Framework for Big 4 Consulting - 60% faster project delivery across 12+ teams',
            caseStudy: `
**Challenge:**
Consulting teams were building ML models from scratch for each client, leading to inconsistent quality, long delivery times, and difficulty scaling data science capabilities across multiple projects.

**Approach:**
• Designed modular ML framework with standardized components
• Built automated feature engineering pipeline
• Created model selection and hyperparameter tuning automation
• Implemented MLOps best practices with versioning and monitoring
• Developed client-facing dashboard templates

**Results:**
• 60% faster project delivery (3 weeks vs 8 weeks average)
• Standardized model performance metrics across all projects
• Reduced junior consultant onboarding time by 50%
• Framework adopted by 12+ consulting teams globally

**Technologies:**
Python, Scikit-learn, MLflow, Docker, Kubernetes, Power BI, Azure ML

**Recognition:**
Framework was recognized as "Innovation of the Year" and became standard practice across the consulting division.
            `.trim(),
            category: 'Consulting',
          },
        ]);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const toggleCaseStudy = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  // Function to render markdown-like text
  const renderCaseStudy = (text) => {
    return text.split('\n').map((line, index) => {
      if (line.startsWith('**') && line.endsWith('**')) {
        return (
          <h4 key={index} className="font-bold text-light mt-4 mb-2">
            {line.slice(2, -2)}
          </h4>
        );
      }
      if (line.startsWith('•')) {
        return (
          <li key={index} className="ml-4 mb-1">
            {line.slice(2)}
          </li>
        );
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }
      return (
        <p key={index} className="mb-2">
          {line}
        </p>
      );
    });
  };

  if (loading) {
    return (
      <section className="relative min-h-screen flex flex-col justify-center py-20">
        <ParticleBackground />
        <div className="container mx-auto px-6 max-w-4xl z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="text-light-darker mt-4">Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center py-20">
      <ParticleBackground />

      <div className="container mx-auto px-6 max-w-4xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-8"
        >
          {/* Name in the center */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-light">
              Syed Ahmed Basharat Ali
            </h1>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.github.com/sa-basharat-ali"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-darker hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/sa-basharat-ali"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-darker hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://www.x.com/sabshrtali"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-darker hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-8 text-sm mb-4">
              <Link href="/" className="text-light-darker hover:text-primary transition-colors font-medium relative group">
                About
              </Link>
              <Link href="/projects" className="text-primary font-medium relative group">
                Projects
              </Link>
              <Link href="/blog" className="text-light-darker hover:text-primary transition-colors font-medium relative group">
                Writing
              </Link>
            </div>
            {/* Subtle line */}
            <div className="w-24 h-px bg-light-darker/30"></div>
          </div>

          {/* Projects content - left aligned but constrained to name width */}
          <div className="pt-8 flex justify-center">
            <div className="w-full max-w-[600px] space-y-8 text-left">
              {projects.map((project, index) => (
                <motion.div
                  key={project._id || index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-dark-lighter/20 backdrop-blur-sm rounded-lg p-6 border border-light-darker/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  <h2 className="text-xl font-bold text-light mb-4">
                    {project.title}
                  </h2>

                  {project.caseStudy && (
                    <button
                      onClick={() => toggleCaseStudy(project._id)}
                      className="inline-flex items-center text-primary font-medium hover:text-primary-light transition-all duration-300 hover:translate-x-1 mb-4"
                    >
                      {expandedProject === project._id ? 'Hide Case Study' : 'View Case Study'}
                      <svg 
                        className={`w-4 h-4 ml-1 transition-transform ${
                          expandedProject === project._id ? 'rotate-180' : ''
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}

                  {/* Expandable Case Study */}
                  {project.caseStudy && expandedProject === project._id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="bg-dark-lighter/30 rounded-lg p-4 mt-4 text-light-darker text-sm leading-relaxed"
                    >
                      {project.image && (
                        <div className="mb-4">
                          <Image
                            src={project.image}
                            alt={`${project.title} dashboard`}
                            width={600}
                            height={400}
                            className="rounded-lg border border-light-darker/20"
                            style={{ width: '100%', height: 'auto' }}
                          />
                        </div>
                      )}
                      {renderCaseStudy(project.caseStudy)}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
