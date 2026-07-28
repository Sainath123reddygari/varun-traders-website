import BackToTop from "@/components/BackToTop";
import QuoteButton from "@/components/QuoteButton";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FeaturedProducts from "@/components/FeaturedProducts";
import DealerEnquiry from "@/components/DealerEnquiry";
import TrustedSection from "@/components/TrustedSection";
import HowItWorks from "@/components/HowItWorks";
import AboutSection from "@/components/AboutSection";
import ContactCTA from "@/components/ContactCTA";
import Comparison from "@/components/Comparison";

export default function Home() {
  return (
    <>

      <main className="pt-0">
        <Hero />
        <TrustedSection />
        <About />
        <WhyChooseUs />
        <Comparison />
        <HowItWorks />
        <AboutSection />
        <Process />
        <Stats />
        <Gallery />
        <Testimonials />
        <ContactCTA />
        <FAQ />
        <Contact />
        <FeaturedProducts />
        <DealerEnquiry />
      </main>

      <Footer />
      <BackToTop />
      <QuoteButton />
      <WhatsAppButton />
    </>
  );
}