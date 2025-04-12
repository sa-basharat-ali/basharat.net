import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Basharat Ali | Data Scientist & AI Specialist',
  description: 'Personal website of Basharat Ali, a data scientist specializing in AI technologies, sharing insights, projects, and educational content.',
  keywords: 'Basharat Ali, Data Science, Artificial Intelligence, Machine Learning, AI Education, Data Visualization',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans dark:bg-dark dark:text-light`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
