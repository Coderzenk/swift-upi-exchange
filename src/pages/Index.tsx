import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import SupportedPlatforms from "@/components/SupportedPlatforms";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <SupportedPlatforms />
      <Footer />
    </div>
  );
};

export default Index;
