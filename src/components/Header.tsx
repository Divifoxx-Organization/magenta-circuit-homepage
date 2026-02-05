import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto">
        <nav className="glass-subtle rounded-full px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center glow-accent-subtle">
              <span className="text-accent-foreground font-bold text-sm">M</span>
            </div>
            <span className="font-semibold text-foreground tracking-tight">MagentaCircuit</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#problems" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Problems</a>
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
          </div>
          
          <Button variant="accent" size="sm" className="rounded-full glow-accent-subtle">
            Book a Call
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
