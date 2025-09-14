import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowRight, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">U</span>
            </div>
            <span className="text-2xl font-bold text-foreground">UPIEx</span>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
              How it Works
            </a>
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#supported" className="text-muted-foreground hover:text-primary transition-colors">
              Supported Platforms
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button variant="hero" size="sm" className="group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-8 mt-8">
                {/* Mobile Navigation */}
                <nav className="flex flex-col space-y-6">
                  <a 
                    href="#how-it-works" 
                    className="text-lg text-muted-foreground hover:text-primary transition-colors"
                  >
                    How it Works
                  </a>
                  <a 
                    href="#features" 
                    className="text-lg text-muted-foreground hover:text-primary transition-colors"
                  >
                    Features
                  </a>
                  <a 
                    href="#supported" 
                    className="text-lg text-muted-foreground hover:text-primary transition-colors"
                  >
                    Supported Platforms
                  </a>
                  <a 
                    href="#contact" 
                    className="text-lg text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </a>
                </nav>

                {/* Mobile CTA Buttons */}
                <div className="flex flex-col space-y-4 pt-4 border-t border-border">
                  <Button variant="ghost" size="default" className="justify-start">
                    Login
                  </Button>
                  <Button variant="hero" size="default" className="group justify-start">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;