import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative px-6 lg:px-8 py-32 lg:py-40 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 radial-gradient-accent" />
      <div className="orb orb-accent w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25" />
      <div className="orb orb-secondary w-[500px] h-[500px] top-0 left-0 opacity-15" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="premium-card rounded-3xl lg:rounded-[2rem] p-12 md:p-16 lg:p-20 text-center relative overflow-hidden">
          {/* Top accent line */}
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
          
          {/* Inner ambient glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[400px] h-[200px] bg-accent/5 rounded-full blur-[80px]" />
          </div>
          
          <div className="relative">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground mb-8 leading-tight tracking-tight">
              Let automation handle the work
              <br />
              <span className="text-gradient-accent">while you focus on growth.</span>
            </h2>
            
            <p className="text-muted-foreground text-lg lg:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Start with a free consultation to discover what's possible for your business.
            </p>
            
            <Button 
              variant="accent" 
              size="lg" 
              className="rounded-full glow-accent glow-accent-hover btn-premium group h-14 px-10 text-base font-medium"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
