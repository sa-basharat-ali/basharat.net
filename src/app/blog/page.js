"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getPosts, urlFor } from '@/lib/sanity';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load blog posts');
        // Fallback to hardcoded data if Sanity fails
        setPosts([
          {
            _id: "fallback-1",
            title: "Understanding Neural Networks: A Beginner's Guide",
            excerpt: "A comprehensive introduction to neural networks, their architecture, and how they learn from data. Perfect for beginners starting their journey in deep learning.",
            imageUrl: "/images/blog1.jpg",
            readTime: "8 min read",
            category: "Deep Learning",
            mediumUrl: "https://medium.com/@sabasharat.ali"
          },
          {
            _id: "fallback-2",
            title: "The Future of AI in Healthcare",
            excerpt: "Exploring how artificial intelligence is revolutionizing healthcare through diagnosis, treatment, and patient care. Real-world examples and future predictions.",
            imageUrl: "/images/blog2.jpg",
            readTime: "6 min read",
            category: "AI Applications",
            mediumUrl: "https://medium.com/@sabasharat.ali"
          }
        ]);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
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
          <div className="text-xl">Loading blog posts...</div>
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
            <span className="text-gradient">Blog</span>
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-light-darker max-w-2xl mx-auto">
            Insights and tutorials on data science, AI, and machine learning. Stay updated with the latest trends and technologies.
          </p>
          <div className="mt-6">
            <a 
              href="https://medium.com/@sabasharat.ali" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors"
            >
              Visit My Medium Profile
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
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
          {posts.map((post) => (
            <motion.article
              key={post._id}
              variants={itemVariants}
              className="bg-dark-lighter rounded-xl overflow-hidden group hover:transform hover:scale-[1.02] transition-transform"
            >
              <a 
                href={post.mediumUrl || "https://medium.com/@sabasharat.ali"}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative h-48">
                  <Image
                    src={post.imageUrl || post.image || "/images/blog-placeholder.jpg"}
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
                  {/* Medium indicator */}
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-black/70 text-white text-xs rounded flex items-center">
                      <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z"/>
                      </svg>
                      Medium
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-light-darker mb-3">
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-light-darker mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-primary group-hover:text-primary-light transition-colors">
                    Read on Medium
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
