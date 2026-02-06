import { Clock, Zap, Shield, Activity } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Save hours every week",
    description: "Reclaim time spent on repetitive tasks",
    stat: "10+",
    statLabel: "Hours Saved",
  },
  {
    icon: Zap,
    title: "Faster lead responses",
    description: "Respond to inquiries in seconds, not hours",
    stat: "<1min",
    statLabel: "Response Time",
  },
  {
    icon: Shield,
    title: "Fewer human errors",
    description: "Automated systems don't miss steps or make typos",
    stat: "99%",
    statLabel: "Accuracy",
  },
  {
    icon: Activity,
    title: "Systems that work 24×7",
    description: "Your automation never sleeps, even when you do",
    stat: "24/7",
    statLabel: "Uptime",
  },
];

const Benefits = () => {
  return (
    <section className="section-container">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/15 to-background" />
      <div className="orb orb-blue w-[500px] h-[500px] top-0 right-1/4 opacity-15" />
      <div className="orb orb-secondary w-[400px] h-[400px] bottom-0 left-1/4 opacity-15" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="section-badge">
            <span className="text-sm text-muted-foreground font-medium">Real Outcomes</span>
          </div>
          <h2 className="section-title">
            What You Get
          </h2>
          <p className="section-subtitle">
            Real outcomes that impact your bottom line
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="premium-card rounded-2xl lg:rounded-3xl p-8 lg:p-10 text-center group"
            >
              {/* Stat highlight */}
              <div className="mb-6">
                <span className="text-4xl lg:text-5xl font-semibold text-gradient-accent tracking-tight">
                  {benefit.stat}
                </span>
                <div className="text-xs lg:text-sm text-muted-foreground mt-2 font-medium uppercase tracking-wider">
                  {benefit.statLabel}
                </div>
              </div>
              
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="icon-container-accent group-hover:border-accent/40 transition-colors duration-300">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
              </div>
              
              <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-3 tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default Benefits;
