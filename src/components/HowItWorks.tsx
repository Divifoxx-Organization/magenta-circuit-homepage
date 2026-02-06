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
    <section id="how-it-works" className="section-container">
      {/* Background */}
      <div className="absolute inset-0 radial-gradient-subtle" />
      <div className="orb orb-accent w-[500px] h-[500px] top-1/2 left-0 -translate-y-1/2 opacity-15" />
      <div className="orb orb-blue w-[400px] h-[400px] top-0 right-1/4 opacity-10" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="section-badge">
            <span className="text-sm text-muted-foreground font-medium">Simple Process</span>
          </div>
          <h2 className="section-title">
            How It Works
          </h2>
          <p className="section-subtitle">
            A straightforward process to transform your operations
          </p>
        </div>
        
        {/* Desktop: Horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-[60px] left-[100px] right-[100px] h-px">
              <div className="h-full bg-gradient-to-r from-accent/60 via-border to-accent/60" />
            </div>
            
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step number with glow */}
                  <div className="relative mb-10 flex justify-center">
                    <div className="relative">
                      {/* Outer glow ring */}
                      <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl scale-150" />
                      
                      {/* Number circle */}
                      <div className="relative w-[120px] h-[120px] rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center glow-accent-subtle">
                        <span className="text-accent-foreground font-semibold text-3xl tracking-tight">
                          {step.number}
                        </span>
                      </div>
                      
                      {/* Subtle ring */}
                      <div className="absolute -inset-2 rounded-full border border-accent/20" />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Mobile/Tablet: Vertical cards */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="premium-card rounded-2xl p-8 group">
              {/* Step number */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center glow-accent-subtle">
                  <span className="text-accent-foreground font-semibold text-xl">{step.number}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {step.description}
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

export default HowItWorks;
