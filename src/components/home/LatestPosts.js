"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';

const posts = [
  {
    id: 1,
    title: "Understanding Neural Networks: A Beginner's Guide",
    excerpt: "A comprehensive introduction to neural networks, their architecture, and how they learn from data.",
    image: "/images/blog1.jpg",
    date: "2024-03-15",
    readTime: "8 min read",
    category: "Deep Learning",
    slug: "understanding-neural-networks"
  },
  {
    id: 2,
    title: "The Future of AI in Healthcare",
    excerpt: "Exploring how artificial intelligence is revolutionizing healthcare through diagnosis, treatment, and patient care.",
    image: "/images/blog2.jpg",
    date: "2024-03-10",
    readTime: "6 min read",
    category: "AI Applications",
    slug: "ai-in-healthcare"
  },
  {
    id: 3,
    title: "Data Science Best Practices for 2024",
    excerpt: "Essential practices and tools that every data scientist should know to stay competitive in the field.",
    image: "/images/blog3.jpg",
    date: "2024-03-05",
    readTime: "10 min read",
    category: "Data Science",
    slug: "data-science-best-practices-2024"
  }
];

export default function LatestPosts() {
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
          <span className="text-gradient">Latest Posts</span>
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-light-darker max-w-2xl mx-auto">
          Stay updated with my latest thoughts and insights on data science, AI, and technology.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {posts.map((post) => (
          <motion.article
            key={post.id}
            variants={itemVariants}
            className="bg-dark-lighter rounded-xl overflow-hidden group hover:transform hover:scale-[1.02] transition-transform"
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 text-white text-sm rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-light-darker mb-3">
                  <span>{new Date(post.date).toLocaleDateString('en-US', { 
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-light-darker mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-primary group-hover:text-primary-light transition-colors">
                  Read More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center mt-12"
      >
        <Link 
          href="/blog" 
          className="px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium rounded-lg transition-colors inline-flex items-center"
        >
          View All Posts
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </motion.div>
    </div>
  );
}
