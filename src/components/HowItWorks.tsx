const steps = [
  {
    number: "01",
    title: "Understand your workflow",
    description: "We analyze your current processes to identify automation opportunities",
  },
  {
    number: "02",
    title: "Build automation",
    description: "Our team designs and develops custom automation systems for your needs",
  },
  {
    number: "03",
    title: "Test & launch",
    description: "Rigorous testing ensures everything works perfectly before going live",
  },
  {
    number: "04",
    title: "Ongoing improvement",
    description: "Continuous optimization keeps your systems running at peak performance",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative px-6 py-28 overflow-hidden">
      {/* Background */}
      <div className="orb orb-accent w-[400px] h-[400px] top-1/2 left-0 -translate-y-1/2 opacity-20" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-subtle rounded-full px-4 py-2 mb-6">
            <span className="text-sm text-muted-foreground">Simple Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A straightforward process to transform your operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px">
                  <div className="h-full bg-gradient-to-r from-accent/50 via-accent/20 to-transparent" />
                </div>
              )}
              
              <div className="glass-card rounded-2xl p-7 h-full hover:scale-[1.02] transition-all duration-300">
                {/* Step number with glow */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center glow-accent-subtle">
                    <span className="text-accent-foreground font-bold text-lg">{step.number}</span>
                  </div>
                  {/* Subtle ring */}
                  <div className="absolute inset-0 w-14 h-14 rounded-full border border-accent/30 animate-pulse" />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
