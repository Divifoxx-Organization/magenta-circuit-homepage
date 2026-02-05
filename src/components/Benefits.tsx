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
    <section className="relative px-6 py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="orb orb-blue w-[400px] h-[400px] top-0 right-1/4 opacity-20" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-subtle rounded-full px-4 py-2 mb-6">
            <span className="text-sm text-muted-foreground">Real Outcomes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5">
            What You Get
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real outcomes that impact your bottom line
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="glass-card rounded-2xl p-7 text-center hover:scale-[1.02] transition-all duration-300 group"
            >
              {/* Stat highlight */}
              <div className="mb-4">
                <span className="text-3xl font-bold text-gradient-accent">{benefit.stat}</span>
                <div className="text-xs text-muted-foreground mt-1">{benefit.statLabel}</div>
              </div>
              
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 mb-5 group-hover:bg-accent/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-accent" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
