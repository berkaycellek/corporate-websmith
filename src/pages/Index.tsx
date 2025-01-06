import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <main className="relative">
      <Navbar />
      <div className="min-h-screen">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Index;