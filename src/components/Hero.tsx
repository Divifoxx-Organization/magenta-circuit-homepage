import { MagneticButton } from "@/components/MagneticButton";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 py-32 lg:py-40 overflow-hidden">
      {/* Premium background composition */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Radial gradient from top */}
      <div className="absolute inset-0 radial-gradient-accent" />
      
      {/* Ambient orbs */}
      <div className="orb orb-accent w-[800px] h-[800px] -top-60 -right-60 opacity-50" />
      <div className="orb orb-secondary w-[600px] h-[600px] top-1/3 -left-80 opacity-40" />
      <div className="orb orb-accent w-[400px] h-[400px] bottom-20 right-1/4 opacity-25" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay" />
      
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="section-badge mb-10">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-muted-foreground font-medium">AI & Automation Agency</span>
        </div>
        
        {/* Main headline with ambient glow */}
        <div className="relative">
          {/* Subtle glow behind headline */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[200px] bg-accent/5 rounded-full blur-[100px]" />
          </div>
          
          <h1 className="relative text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight text-foreground mb-8 leading-[1.05]">
            Automate Your Business.
            <br />
            <span className="text-gradient-accent">Reduce Manual Work.</span>
          </h1>
        </div>
        
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-14 leading-relaxed">
          We build smart automation systems that save time, reduce errors, and help businesses run smoothly.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <MagneticButton 
            variant="accent" 
            size="lg" 
            magneticStrength={0.2}
            className="rounded-full glow-accent btn-premium group h-14 px-8 text-base font-medium"
          >
            Book a Free Automation Audit
            <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
          </MagneticButton>
          <MagneticButton 
            variant="outline" 
            size="lg" 
            magneticStrength={0.15}
            className="rounded-full glass-subtle border-border/50 hover:border-border hover:bg-secondary/50 h-14 px-8 text-base font-medium transition-all duration-300"
          >
            Learn More
          </MagneticButton>
        </div>
        
        {/* Stats row */}
        <div className="mt-24 lg:mt-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {[
              { value: "50+", label: "Automations Built" },
              { value: "200h+", label: "Saved Weekly" },
              { value: "99%", label: "Client Satisfaction" },
              { value: "24/7", label: "Systems Running" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="premium-card rounded-2xl p-6 lg:p-8 text-center group"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm lg:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
