import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';
import SkillsSection from '@/components/home/SkillsSection';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import LatestPosts from '@/components/home/LatestPosts';
import ContactCTA from '@/components/home/ContactCTA';

export default function Home() {
  return (
    <>
      <Hero />
      
      <section id="about" className="py-20 bg-dark">
        <AboutSection />
      </section>
      
      <section id="skills" className="py-20 bg-dark-lighter">
        <SkillsSection />
      </section>
      
      <section id="projects" className="py-20 bg-dark">
        <FeaturedProjects />
      </section>
      
      <section id="blog" className="py-20 bg-dark-lighter">
        <LatestPosts />
      </section>
      
      <section id="contact-cta" className="py-20 bg-dark">
        <ContactCTA />
      </section>
    </>
  );
}
