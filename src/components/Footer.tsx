import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-white">Berkay Cellek</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Crafting digital experiences and bringing ideas to life through modern web development.
            </p>
            <p className="mt-4 text-sm text-purple-600 dark:text-purple-400 font-medium">
              "Transforming visions into digital reality, one pixel at a time. Let's create something extraordinary together."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-white">Connect</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Ready to bring your digital dreams to life? Let's collaborate and create something amazing together.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/berkaycellek" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 dark:text-gray-300" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/berkaycellek" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 dark:text-gray-300" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:contact@berkaycellek.com">
                  <Mail className="h-5 w-5 dark:text-gray-300" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Berkay Cellek. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;