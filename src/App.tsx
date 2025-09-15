import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import SupportedPlatforms from "@/components/SupportedPlatforms";
import Footer from "@/components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <Hero />
        <HowItWorks />
        <Features />
        <SupportedPlatforms />
        <Footer />
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
