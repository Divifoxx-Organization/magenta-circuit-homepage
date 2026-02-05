import { Clock, Database, MessageSquare, RefreshCw } from "lucide-react";

const problems = [
  {
    icon: MessageSquare,
    title: "Manual follow-ups",
    description: "Spending hours chasing leads and sending repetitive messages",
    color: "328 85% 55%", // accent
  },
  {
    icon: Database,
    title: "Scattered data and tools",
    description: "Information spread across multiple platforms with no single source of truth",
    color: "220 80% 55%", // blue
  },
  {
    icon: Clock,
    title: "Slow response times",
    description: "Leads going cold because responses take too long",
    color: "170 70% 45%", // teal
  },
  {
    icon: RefreshCw,
    title: "Repetitive internal tasks",
    description: "Team members stuck doing the same manual work every day",
    color: "280 70% 55%", // purple
  },
];

const Problems = () => {
  return (
    <section id="problems" className="relative px-6 py-28 overflow-hidden">
      {/* Background elements */}
      <div className="orb orb-accent w-[400px] h-[400px] top-0 left-1/4 opacity-20" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-subtle rounded-full px-4 py-2 mb-6">
            <span className="text-sm text-muted-foreground">Common Challenges</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5">
            Problems We Solve
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Common challenges that slow down growing businesses
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group glass-card rounded-2xl p-7 hover:scale-[1.02] transition-all duration-300 accent-border-top"
              style={{ '--accent-color': `hsl(${problem.color})` } as React.CSSProperties}
            >
              <div className="flex items-start gap-5">
                <div 
                  className="p-4 rounded-xl transition-all duration-300"
                  style={{ 
                    background: `linear-gradient(135deg, hsl(${problem.color} / 0.2) 0%, hsl(${problem.color} / 0.1) 100%)`,
                  }}
                >
                  <problem.icon 
                    className="w-6 h-6"
                    style={{ color: `hsl(${problem.color})` }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
