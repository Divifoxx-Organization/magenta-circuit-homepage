import { Clock, Database, MessageSquare, RefreshCw } from "lucide-react";
import { SpotlightCard } from "@/components/SpotlightCard";

const problems = [
  {
    icon: MessageSquare,
    title: "Manual follow-ups",
    description: "Spending hours chasing leads and sending repetitive messages",
  },
  {
    icon: Database,
    title: "Scattered data and tools",
    description: "Information spread across multiple platforms with no single source of truth",
  },
  {
    icon: Clock,
    title: "Slow response times",
    description: "Leads going cold because responses take too long",
  },
  {
    icon: RefreshCw,
    title: "Repetitive internal tasks",
    description: "Team members stuck doing the same manual work every day",
  },
];

const Problems = () => {
  return (
    <section id="problems" className="section-container">
      {/* Background elements */}
      <div className="absolute inset-0 radial-gradient-subtle" />
      <div className="orb orb-accent w-[500px] h-[500px] top-0 left-1/4 opacity-15" />
      <div className="orb orb-blue w-[400px] h-[400px] bottom-0 right-1/4 opacity-10" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="section-badge">
            <span className="text-sm text-muted-foreground font-medium">Common Challenges</span>
          </div>
          <h2 className="section-title">
            Problems We Solve
          </h2>
          <p className="section-subtitle">
            Common challenges that slow down growing businesses
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <SpotlightCard
              key={index}
              className="premium-card rounded-2xl lg:rounded-3xl p-8 lg:p-10 group"
            >
              <div className="flex items-start gap-6">
                <div className="icon-container-accent shrink-0 group-hover:border-accent/40 transition-colors duration-300">
                  <problem.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3 tracking-tight">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
      
      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default Problems;
