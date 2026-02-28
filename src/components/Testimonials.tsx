import { SpotlightCard } from "@/components/SpotlightCard";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Operations",
    company: "Nexus Digital",
    initials: "SC",
    quote: "MagentaCircuit transformed our lead pipeline. We went from losing 40% of inbound leads to capturing and qualifying every single one automatically.",
    stars: 5,
  },
  {
    name: "James Rodriguez",
    role: "CEO",
    company: "Elevate SaaS",
    initials: "JR",
    quote: "The automation audit alone was worth it. They identified 30+ hours of weekly manual work we didn't even realize we were doing.",
    stars: 5,
  },
  {
    name: "Emily Nakamura",
    role: "Head of Growth",
    company: "Vertex Labs",
    initials: "EN",
    quote: "Their AI chat assistant handles 80% of our website inquiries now. Our team focuses on closing deals instead of answering repetitive questions.",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-container">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="orb orb-accent w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2 opacity-10" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="section-badge">
            <span className="text-sm text-muted-foreground font-medium">Testimonials</span>
          </div>
          <h2 className="section-title">
            Trusted by Growing Teams
          </h2>
          <p className="section-subtitle">
            Hear from businesses that automated their way to growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <SpotlightCard key={i} className="premium-card rounded-2xl lg:rounded-3xl p-8 lg:p-10 flex flex-col h-full">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/90 text-base lg:text-lg leading-relaxed flex-1 mb-8">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border/30">
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-secondary text-muted-foreground text-sm font-medium">
                    {t.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default Testimonials;
