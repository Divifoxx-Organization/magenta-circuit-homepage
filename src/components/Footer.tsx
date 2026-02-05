const Footer = () => {
  return (
    <footer className="relative px-6 py-12 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">M</span>
            </div>
            <span className="font-semibold text-foreground tracking-tight">MagentaCircuit</span>
          </div>
          
          {/* Links */}
          <div className="flex items-center gap-8">
            <a href="#problems" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Problems</a>
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
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
