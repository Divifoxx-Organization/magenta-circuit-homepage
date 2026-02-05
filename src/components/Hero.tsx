import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
      {/* Background orbs */}
      <div className="orb orb-accent w-[600px] h-[600px] -top-40 -right-40 opacity-60" />
      <div className="orb orb-blue w-[500px] h-[500px] top-1/2 -left-60 opacity-40" />
      <div className="orb orb-accent w-[300px] h-[300px] bottom-20 right-1/4 opacity-30" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-60" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass-subtle rounded-full px-4 py-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-muted-foreground">AI & Automation Agency</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
          Automate Your Business.
          <br />
          <span className="text-gradient-accent">Reduce Manual Work.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          We build smart automation systems that save time, reduce errors, and help businesses run smoothly.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="accent" size="lg" className="rounded-full glow-accent group">
            Book a Free Automation Audit
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full glass-subtle border-0">
            Learn More
          </Button>
        </div>
        
        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "50+", label: "Automations Built" },
            { value: "200h+", label: "Saved Weekly" },
            { value: "99%", label: "Client Satisfaction" },
            { value: "24/7", label: "Systems Running" },
          ].map((stat, index) => (
            <div key={index} className="glass-card rounded-xl p-5 text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
