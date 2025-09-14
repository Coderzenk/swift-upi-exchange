import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const SupportedPlatforms = () => {
  const platforms = [
    {
      name: "PayPal",
      description: "Most popular international payment platform",
      fee: "2.9%",
      time: "2-5 minutes",
      popular: true,
      features: ["Instant verification", "High limits", "24/7 support"]
    },
    {
      name: "Skrill",
      description: "Secure digital wallet for online payments",
      fee: "2.5%",
      time: "3-7 minutes",
      popular: false,
      features: ["Low fees", "Fast processing", "Global coverage"]
    },
    {
      name: "Payoneer",
      description: "Cross-border payment platform for businesses",
      fee: "3.2%",
      time: "5-10 minutes",
      popular: false,
      features: ["Business accounts", "Multi-currency", "Compliance"]
    },
    {
      name: "Wise",
      description: "International money transfer service",
      fee: "2.1%",
      time: "1-3 minutes",
      popular: true,
      features: ["Best rates", "Transparent fees", "Real exchange rate"]
    }
  ];

  const upiPartners = [
    "Google Pay", "PhonePe", "Paytm", "BHIM", "Amazon Pay", "WhatsApp Pay"
  ];

  return (
    <section id="supported" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Supported Platforms
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exchange from popular international platforms directly to your UPI account
          </p>
        </div>

        {/* International Platforms */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            From International Platforms
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {platforms.map((platform, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-border hover:shadow-card-elevated transition-all duration-300 group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {platform.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardContent className="p-6">
                  {/* Platform Header */}
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">
                        {platform.name[0]}
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold text-foreground">
                      {platform.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {platform.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Fee:</span>
                      <span className="text-sm font-semibold text-primary">{platform.fee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Time:</span>
                      <span className="text-sm font-semibold text-accent">{platform.time}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {platform.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-accent mr-2" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center space-x-4 bg-gradient-card border border-border rounded-full px-6 py-3">
            <span className="text-muted-foreground font-medium">Exchange to</span>
            <ArrowRight className="h-5 w-5 text-primary" />
            <span className="text-foreground font-semibold">UPI Account</span>
          </div>
        </div>

        {/* UPI Partners */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            To Your UPI Account
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto mb-8">
            {upiPartners.map((partner, index) => (
              <div 
                key={index}
                className="bg-gradient-card border border-border rounded-lg p-4 text-center hover:shadow-card-elevated transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-secondary rounded-lg mx-auto mb-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg font-bold text-primary">
                    {partner.split(' ')[0][0]}
                  </span>
                </div>
                <span className="text-sm font-medium text-foreground">
                  {partner}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="hero" size="lg" className="group shadow-glow-primary">
              Start Exchange
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedPlatforms;