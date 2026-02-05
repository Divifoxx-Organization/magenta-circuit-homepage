import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative px-6 py-28 overflow-hidden">
      {/* Background elements */}
      <div className="orb orb-accent w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="glass-card rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          {/* Accent glow at top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Let automation handle the work
            <br />
            <span className="text-gradient-accent">while you focus on growth.</span>
          </h2>
          
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Start with a free consultation to discover what's possible for your business.
          </p>
          
          <Button variant="accent" size="lg" className="rounded-full glow-accent group px-8">
            Get Started
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
