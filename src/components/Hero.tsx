import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border mb-8 animate-fade-in">
            <Shield className="h-4 w-4 text-accent mr-2" />
            <span className="text-sm text-muted-foreground">Secure & Instant Exchanges</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in-up">
            Exchange Money
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              Instantly to UPI
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Convert your PayPal, Skrill, and other international payments directly to your Indian UPI address. 
            Fast, secure, and transparent.
          </p>

          {/* Stats */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-accent" />
              <span className="text-foreground font-semibold">Under 5 minutes</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-foreground font-semibold">Bank-grade security</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-5 w-5 text-accent" />
              <span className="text-foreground font-semibold">24/7 Support</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button variant="hero" size="lg" className="group shadow-glow-primary">
              Start Exchange Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              View Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <p className="text-sm text-muted-foreground mb-6">Trusted by 10,000+ users across India</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="h-8 w-20 bg-muted rounded flex items-center justify-center">
                <span className="text-xs font-semibold">PayPal</span>
              </div>
              <div className="h-8 w-20 bg-muted rounded flex items-center justify-center">
                <span className="text-xs font-semibold">Skrill</span>
              </div>
              <div className="h-8 w-20 bg-muted rounded flex items-center justify-center">
                <span className="text-xs font-semibold">Payoneer</span>
              </div>
              <div className="h-8 w-20 bg-muted rounded flex items-center justify-center">
                <span className="text-xs font-semibold">UPI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;