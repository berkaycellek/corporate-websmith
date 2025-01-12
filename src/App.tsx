import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import BlogDetail from "./pages/BlogDetail";
import ModernDesign from "./pages/ModernDesign";
import TechnicalExcellence from "./pages/TechnicalExcellence";
import UserExperience from "./pages/UserExperience";
import WebDesignService from "./pages/WebDesignService";
import DevelopmentService from "./pages/DevelopmentService";
import ResponsiveService from "./pages/ResponsiveService";

const queryClient = new QueryClient();

const App = () => (
  <LanguageProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/modern-design" element={<ModernDesign />} />
              <Route path="/technical-excellence" element={<TechnicalExcellence />} />
              <Route path="/user-experience" element={<UserExperience />} />
              <Route path="/services/web-design" element={<WebDesignService />} />
              <Route path="/services/development" element={<DevelopmentService />} />
              <Route path="/services/responsive" element={<ResponsiveService />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </LanguageProvider>
);

export default App;