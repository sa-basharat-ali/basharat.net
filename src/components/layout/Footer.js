import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-dark-lighter text-light py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-between">
          {/* Left side */}
          <div className="md:w-1/3">
            {/* Logo and description */}
            <div className="flex-shrink-0 max-w-xs">
              <Link href="/" className="block mb-6">
                <Image 
                  src="/images/logo.png"
                  alt="Basharat.net Logo"
                  width={240}
                  height={60}
                  className="w-auto h-auto" 
                />
              </Link>
              <p className="text-light-darker text-sm leading-relaxed">
                Data Scientist, Tech Educator and Tech Content Creator helping
                organizations leverage data and AI for better decision-making.
              </p>
            </div>
          </div>

          {/* Right side */}
          <div className="md:w-1/2 flex justify-end gap-32">


          {/* Quick Links */}
          <div className="flex-shrink-0">
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-light-darker hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-light-darker hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-light-darker hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-light-darker hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-light-darker hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex-shrink-0">
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <div>
              <a href="mailto:contact@basharat.net" className="text-light-darker hover:text-primary transition-colors block mb-3">
                contact@basharat.net
              </a>
              <div className="flex items-center justify-center space-x-4 mt-4">
                <a href="https://linkedin.com/in/sa-basharat-ali" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-light-darker hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://github.com/sa-basharat-ali" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-light-darker hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
                <a href="https://twitter.com/basharat_ali00" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)" className="text-light-darker hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Kaggle" className="text-light-darker hover:text-primary transition-colors">
                  <img src="https://www.kaggle.com/static/images/site-logo.svg" alt="Kaggle" className="w-5 h-5 opacity-80 hover:opacity-100 transition-opacity" style={{filter: 'brightness(0) invert(1)'}}/>
                </a>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div className="border-t border-dark-light w-full mt-12 pt-6 text-center">
          <p className="text-sm text-light-darker">&copy; {new Date().getFullYear()} Basharat.net. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
