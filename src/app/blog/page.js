"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ParticleBackground from '@/components/animations/ParticleBackground';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to strip HTML tags and clean text
  const stripHtml = (html) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        // Use a CORS proxy to fetch Medium RSS
        const proxyUrl = 'https://api.rss2json.com/v1/api.json?rss_url=';
        const mediumUrl = 'https://medium.com/feed/@sabasharat.ali';
        
        const response = await fetch(proxyUrl + encodeURIComponent(mediumUrl));
        const data = await response.json();
        
        if (data.status === 'ok') {
          // Clean up the posts by removing HTML tags
          const cleanPosts = data.items.slice(0, 10).map(post => ({
            ...post,
            title: stripHtml(post.title),
            description: stripHtml(post.description || post.content || ''),
          }));
          setPosts(cleanPosts);
        }
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
        // Fallback posts if Medium fetch fails
        setPosts([
          {
            title: "The Power of Data Science in Business Decision Making",
            pubDate: "2024-01-15",
            description: "Exploring how data science is revolutionizing business decisions across industries and driving meaningful insights.",
            link: "https://medium.com/@sabasharat.ali"
          },
          {
            title: "Building Scalable Machine Learning Pipelines", 
            pubDate: "2024-01-10",
            description: "A comprehensive guide to building production-ready ML pipelines that scale with your business needs.",
            link: "https://medium.com/@sabasharat.ali"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchMediumPosts();
  }, []);

  if (loading) {
    return (
      <section className="relative min-h-screen flex flex-col justify-center py-20">
        <ParticleBackground />
        <div className="container mx-auto px-6 max-w-4xl z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="text-light-darker mt-4">Loading articles...</p>
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
          transition={{ duration: 0.8 }}
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
            <a href="https://www.github.com/sa-basharat-ali" target="_blank" rel="noopener noreferrer" className="text-light-darker hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/sa-basharat-ali" target="_blank" rel="noopener noreferrer" className="text-light-darker hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://www.x.com/sabshrtali" target="_blank" rel="noopener noreferrer" className="text-light-darker hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-8 text-sm mb-4">
              <Link href="/" className="text-light-darker hover:text-primary transition-colors font-medium">
                About
              </Link>
              <Link href="/projects" className="text-light-darker hover:text-primary transition-colors font-medium">
                Projects
              </Link>
              <Link href="/blog" className="text-primary font-medium">
                Writing
              </Link>
            </div>
            {/* Subtle line */}
            <div className="w-24 h-px bg-light-darker/30"></div>
          </div>

          {/* Articles content - left aligned but constrained to name width */}
          <div className="pt-8 flex justify-center">
            <div className="w-full max-w-[600px] space-y-6 text-left">
              {posts.map((post, index) => (
                <motion.a
                  key={index}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="block border-b border-light-darker/20 pb-6 hover:text-primary transition-colors group"
                >
                  <div className="text-sm text-light-darker mb-2">
                    {new Date(post.pubDate).toLocaleDateString('en-US', { 
                      month: '2-digit', 
                      day: '2-digit', 
                      year: '2-digit' 
                    })}
                  </div>
                  <h2 className="text-xl font-bold text-light group-hover:text-primary transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-light-darker leading-relaxed">
                    {post.description?.slice(0, 150)}...
                  </p>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}