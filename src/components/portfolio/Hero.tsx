import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20 animate-pulse-glow" style={{
        background: "radial-gradient(circle, hsl(var(--primary) / 0.3), transparent 70%)",
      }} />

      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label mb-6">Software Engineer</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Hi, I'm <span className="text-gradient">Khalida</span>
            <br />
            <span className="text-muted-foreground text-3xl md:text-5xl lg:text-5xl font-medium">
              Amazon SDE Intern
            </span>
          </h1>
          <p className="max-w-xl mx-auto text-muted-foreground text-lg md:text-xl mb-10 leading-relaxed">
            Building scalable systems with Java, REST APIs, and a passion for backend engineering. Computer Science undergraduate, Class of 2027.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="hero" size="lg" asChild>
            <a href="#projects">
              View Projects
              <ArrowDown className="ml-1" />
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="#contact">
              <Mail className="mr-1" />
              Contact Me
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
