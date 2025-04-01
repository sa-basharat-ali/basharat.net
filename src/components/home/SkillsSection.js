"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  {
    category: "Data Science & ML",
    items: [
      { name: "Python", level: 95 },
      { name: "TensorFlow", level: 90 },
      { name: "PyTorch", level: 85 },
      { name: "Scikit-learn", level: 95 },
      { name: "Pandas", level: 95 },
      { name: "NumPy", level: 90 },
    ]
  },
  {
    category: "AI & Deep Learning",
    items: [
      { name: "Neural Networks", level: 90 },
      { name: "Computer Vision", level: 85 },
      { name: "NLP", level: 85 },
      { name: "Reinforcement Learning", level: 80 },
      { name: "GANs", level: 75 },
      { name: "Transfer Learning", level: 85 },
    ]
  },
  {
    category: "Big Data & Cloud",
    items: [
      { name: "Apache Spark", level: 85 },
      { name: "AWS", level: 80 },
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 75 },
      { name: "SQL", level: 90 },
      { name: "MongoDB", level: 85 },
    ]
  },
];

export default function SkillsSection() {
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
          <span className="text-gradient">Skills & Expertise</span>
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-light-darker max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and proficiency levels in various data science and AI technologies.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-dark-lighter p-6 rounded-xl"
          >
            <h3 className="text-xl font-bold mb-6 text-primary">
              {skillGroup.category}
            </h3>
            <div className="space-y-4">
              {skillGroup.items.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-1">
                    <span className="text-light-darker">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-dark rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.2 * skillIndex }}
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
