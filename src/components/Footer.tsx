import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">U</span>
              </div>
              <span className="text-2xl font-bold text-foreground">UPIEx</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              The most trusted platform for converting international payments to UPI. 
              Fast, secure, and transparent currency exchange for modern India.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                support@upiex.com
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                +91 98765 43210
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                Mumbai, Maharashtra, India
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How it Works</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a></li>
              <li><a href="#supported" className="text-muted-foreground hover:text-primary transition-colors">Supported Platforms</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">API Documentation</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Compliance</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h4 className="text-foreground font-semibold mb-2">Stay Updated</h4>
              <p className="text-muted-foreground">Get the latest updates on exchange rates and features.</p>
            </div>
            <div className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="hero" size="sm">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 UPIEx. All rights reserved. Licensed by RBI.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;