import BackToTop from "@/components/BackToTop";
import QuoteButton from "@/components/QuoteButton";
import Navbar from "@/components/Navbar";
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

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-0">
        <Hero />
        <About />
        <WhyChooseUs />
        <Process />
        <Stats />
        <Gallery />
        <Testimonials />
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