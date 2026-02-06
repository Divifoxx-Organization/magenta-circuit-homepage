import { MagneticButton } from "@/components/MagneticButton";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-5">
      <div className="max-w-6xl mx-auto">
        <nav className="glass rounded-full px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center glow-accent-subtle">
              <span className="text-accent-foreground font-bold text-base">M</span>
            </div>
            <span className="font-semibold text-foreground tracking-tight text-lg">MagentaCircuit</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <a 
              href="#problems" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
            >
              Problems
            </a>
            <a 
              href="#services" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
            >
              Services
            </a>
            <a 
              href="#how-it-works" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
            >
              How It Works
            </a>
          </div>
          
          <MagneticButton 
            variant="accent" 
            size="sm" 
            magneticStrength={0.2}
            className="rounded-full glow-accent-subtle btn-premium h-10 px-5 font-medium"
          >
            Book a Call
          </MagneticButton>
        </nav>
      </div>
    </header>
  );
};

export default Header;
