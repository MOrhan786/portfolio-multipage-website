import About from '@/components/about/About';
import ContactUs from '@/components/contact-us/ContactUs';
import Footer from '@/components/footer/Footer';
import Header from "@/components/header/Header";
import HeroSection from "@/components/hero-section/HeroSection";
import Portfolio from '@/components/portfolio/Portfolio';
import Services from '@/components/services-section/Services';
import Testimonials from '@/components/testimonials/Testimonials';
import Skills from '@/components/skills/Skills';
import FeaturedProjects from '@/components/featured-projects/FeaturedProjects';

export default function Home() {
  return (
  <>
  <Header/>
  <HeroSection/>
  <About/>
  <Skills/>
  <FeaturedProjects/>
  <Portfolio/>
  <Services/>
  <Testimonials/>
  <ContactUs/>
  <Footer/>
  </>
  );
}
