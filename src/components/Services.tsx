import { Users, Globe, MessageCircle, Workflow, Settings } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Lead Handling Automation",
    description: "Capture, qualify, and route leads automatically without manual intervention",
  },
  {
    icon: Globe,
    title: "Website to Business System Integration",
    description: "Connect your website forms directly to your CRM, email, and internal tools",
  },
  {
    icon: MessageCircle,
    title: "AI Website Chat Assistant",
    description: "Intelligent chat that answers questions and captures leads 24/7",
  },
  {
    icon: Workflow,
    title: "Internal Process Automation",
    description: "Streamline onboarding, reporting, and team workflows",
  },
  {
    icon: Settings,
    title: "Custom Automation Setup",
    description: "Tailored solutions built specifically for your unique business needs",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-container">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="orb orb-secondary w-[600px] h-[600px] bottom-0 right-0 opacity-20" />
      <div className="orb orb-accent w-[400px] h-[400px] top-1/4 left-0 opacity-10" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="section-badge">
            <span className="text-sm text-muted-foreground font-medium">What We Offer</span>
          </div>
          <h2 className="section-title">
            Our Services
          </h2>
          <p className="section-subtitle">
            Automation solutions that deliver real business outcomes
          </p>
        </div>
        
        {/* First row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
        
        {/* Second row - 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {services.slice(3).map((service, index) => (
            <ServiceCard key={index + 3} service={service} />
          ))}
        </div>
      </div>
      
      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

const ServiceCard = ({ service }: { service: typeof services[0] }) => {
  return (
    <div className="premium-card rounded-2xl lg:rounded-3xl p-8 lg:p-10 group h-full">
      <div className="icon-container w-fit mb-6 group-hover:border-border/60 transition-colors duration-300">
        <service.icon className="w-6 h-6 text-accent" />
      </div>
      <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-4 tracking-tight">
        {service.title}
      </h3>
      <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
        {service.description}
      </p>
    </div>
  );
};

export default Services;
