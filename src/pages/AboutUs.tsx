import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { MagneticButton } from "@/components/MagneticButton";
import { SpotlightCard } from "@/components/SpotlightCard";
import { ArrowRight, Zap, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Zap,
    title: "Built for Speed",
    description:
      "Our automation systems are designed to execute in milliseconds, ensuring your business processes run without delay or bottleneck.",
  },
  {
    icon: Shield,
    title: "Reliability First",
    description:
      "Every solution we build is tested rigorously and monitored around the clock, so your operations stay online when it matters most.",
  },
  {
    icon: Users,
    title: "People-Centered",
    description:
      "We work closely with your team to understand real workflows, building automations that genuinely reduce manual effort and free up time.",
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background cursor-none lg:cursor-none">
      <CustomCursor />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center px-6 lg:px-8 py-32 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-background" />
          <div className="absolute inset-0 radial-gradient-accent" />

          <div className="orb orb-accent w-[700px] h-[700px] -top-40 -right-40 opacity-40" />
          <div className="orb orb-secondary w-[500px] h-[500px] top-1/3 -left-60 opacity-30" />

          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
          <div className="absolute inset-0 noise-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <div className="section-badge mb-10">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-muted-foreground font-medium">
                About Us
              </span>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[600px] h-[200px] bg-accent/5 rounded-full blur-[100px]" />
              </div>

              <h1 className="relative text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground mb-8 leading-[1.05]">
                We Build Systems
                <br />
                <span className="text-gradient-accent">That Work for You.</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              MagentaCircuit is a team of automation specialists dedicated to
              helping businesses eliminate repetitive tasks and scale
              effortlessly.
            </p>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Feature Cards Section */}
        <section className="section-container">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
          <div className="orb orb-secondary w-[600px] h-[600px] bottom-0 right-0 opacity-20" />
          <div className="orb orb-accent w-[400px] h-[400px] top-1/4 left-0 opacity-10" />

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="section-badge">
                <span className="text-sm text-muted-foreground font-medium">
                  Why MagentaCircuit
                </span>
              </div>
              <h2 className="section-title">What Sets Us Apart</h2>
              <p className="section-subtitle">
                We combine deep technical expertise with a genuine understanding
                of how businesses operate day to day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <SpotlightCard
                  key={index}
                  className="premium-card rounded-2xl lg:rounded-3xl p-8 lg:p-10 group h-full"
                >
                  <div className="icon-container w-fit mb-6 group-hover:border-border/60 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-4 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </SpotlightCard>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 section-divider" />
        </section>

        {/* CTA Section */}
        <section className="relative px-6 lg:px-8 py-32 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 radial-gradient-accent" />
          <div className="orb orb-accent w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25" />
          <div className="orb orb-secondary w-[500px] h-[500px] top-0 left-0 opacity-15" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="premium-card rounded-3xl lg:rounded-[2rem] p-12 md:p-16 lg:p-20 text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[400px] h-[200px] bg-accent/5 rounded-full blur-[80px]" />
              </div>

              <div className="relative">
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground mb-8 leading-tight tracking-tight">
                  Ready to see what
                  <br />
                  <span className="text-gradient-accent">
                    automation can do?
                  </span>
                </h2>

                <p className="text-muted-foreground text-lg lg:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                  Head back to our homepage to explore our services and book a
                  free consultation.
                </p>

                <Link to="/">
                  <MagneticButton
                    variant="accent"
                    size="lg"
                    magneticStrength={0.2}
                    className="rounded-full glow-accent btn-premium group h-14 px-10 text-base font-medium"
                  >
                    Back to Homepage
                    <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </MagneticButton>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
