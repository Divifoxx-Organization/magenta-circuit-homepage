import { Users, Globe, MessageCircle, Workflow, Settings } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Lead Handling Automation",
    description: "Capture, qualify, and route leads automatically without manual intervention",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: Globe,
    title: "Website to Business System Integration",
    description: "Connect your website forms directly to your CRM, email, and internal tools",
    gradient: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: MessageCircle,
    title: "AI Website Chat Assistant",
    description: "Intelligent chat that answers questions and captures leads 24/7",
    gradient: "from-teal-500/20 to-teal-500/5",
  },
  {
    icon: Workflow,
    title: "Internal Process Automation",
    description: "Streamline onboarding, reporting, and team workflows",
    gradient: "from-purple-500/20 to-purple-500/5",
  },
  {
    icon: Settings,
    title: "Custom Automation Setup",
    description: "Tailored solutions built specifically for your unique business needs",
    gradient: "from-orange-500/20 to-orange-500/5",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative px-6 py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="orb orb-blue w-[500px] h-[500px] bottom-0 right-0 opacity-20" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-subtle rounded-full px-4 py-2 mb-6">
            <span className="text-sm text-muted-foreground">What We Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Automation solutions that deliver real business outcomes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass-card rounded-2xl p-7 hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="p-4 rounded-xl bg-secondary/50 w-fit mb-5 group-hover:bg-secondary/70 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
