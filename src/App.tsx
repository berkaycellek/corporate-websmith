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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <LanguageProvider>
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
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;