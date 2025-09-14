import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CreditCard, RefreshCw, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: CreditCard,
      title: "Connect Your Account",
      description: "Link your PayPal, Skrill, or other supported payment platform securely.",
      color: "text-primary"
    },
    {
      icon: RefreshCw,
      title: "Enter UPI Details",
      description: "Provide your UPI ID and the amount you want to exchange.",
      color: "text-accent"
    },
    {
      icon: CheckCircle,
      title: "Receive Instantly",
      description: "Get money directly in your UPI account within 5 minutes.",
      color: "text-primary"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to convert your international payments to UPI
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <Card className="bg-gradient-card border-border hover:shadow-card-elevated transition-all duration-300 group h-full">
                  <CardContent className="p-8 text-center">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mb-6 flex justify-center">
                      <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className={`h-8 w-8 ${step.color}`} />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-card border border-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to get started?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of users who trust UPIEx for their currency exchanges
            </p>
            <button className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-glow-primary transition-all duration-300 group">
              Start Your First Exchange
              <ArrowRight className="ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;