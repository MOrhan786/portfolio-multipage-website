import AboutImage from '@/components/about-image/AboutImage';
import About from   '@/components/about/About';
import ContactUs from '@/components/contact-us/ContactUs';
import Footer from '@/components/footer/Footer';
import Header from "@/components/header/Header";
import HeroSection from "@/components/hero-section/HeroSection";
import Portfolio from '@/components/portfolio/Portfolio';
import Services from '@/components/services-section/Services';
 import Testimonials from '@/components/testimonials/Testimonials';




export default function Home() {
  return (
  <>
  <Header/>
  <HeroSection/>
  <About/>
  <AboutImage/>
  <Portfolio/>
  <Services/>
  <Testimonials/>
 <ContactUs/>
  <Footer/>
  </>
  );
}
