import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProductSection from "@/components/home/ProductSection";
import Industries from "@/components/home/Industries";
import About from "@/components/home/About";
import Catalogue from "@/components/home/Catalogue";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
<>
  <Navbar />
  <Hero />
  <WhyChooseUs />
  <ProductSection />
  <Industries />
  <About />
  <Catalogue />
  <Contact />
  <Footer />
</>
  );
}