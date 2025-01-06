import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-gray-100 rounded-full animate-fadeIn">
            Professional Web Development
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            Creating Digital Experiences That Matter
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            Transforming ideas into elegant, functional websites that drive results
            for businesses worldwide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" asChild>
              <a href="#portfolio">View Portfolio</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;