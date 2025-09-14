import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Zap, 
  DollarSign, 
  Clock, 
  Users, 
  PhoneCall,
  TrendingUp,
  Lock
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "End-to-end encryption and compliance with international security standards.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Complete your exchange in under 5 minutes with our automated system.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: DollarSign,
      title: "Competitive Rates",
      description: "Get the best exchange rates with transparent fees and no hidden charges.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Exchange money anytime, anywhere with our round-the-clock service.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Trusted Platform",
      description: "Join over 10,000 satisfied users who trust UPIEx for their exchanges.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: PhoneCall,
      title: "24/7 Support",
      description: "Get instant help from our dedicated customer support team.",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Real-Time Rates",
      description: "Always get the most current exchange rates updated every minute.",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Lock,
      title: "KYC Compliant",
      description: "Fully compliant with Indian regulations and international standards.",
      gradient: "from-gray-500 to-slate-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose UPIEx?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of international money transfers with our advanced features and secure platform
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-border hover:shadow-card-elevated transition-all duration-300 group animate-fade-in-up hover:scale-105" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  {/* Icon with gradient background */}
                  <div className="mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} p-0.5`}>
                      <div className="w-full h-full bg-background rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-foreground group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10K+</div>
            <div className="text-muted-foreground">Happy Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">₹50Cr+</div>
            <div className="text-muted-foreground">Exchanged</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5 Min</div>
            <div className="text-muted-foreground">Avg. Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;