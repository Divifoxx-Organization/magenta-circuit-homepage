const Footer = () => {
  return (
    <footer className="relative px-6 lg:px-8 py-16 border-t border-border/30">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-base">M</span>
            </div>
            <span className="font-semibold text-foreground tracking-tight text-lg">MagentaCircuit</span>
          </div>
          
          {/* Links */}
          <div className="flex items-center gap-10">
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
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MagentaCircuit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
