import { motion } from "framer-motion";
import { Building2, CheckCircle2 } from "lucide-react";

const highlights = [
  "Led ESGS–Triton integration, enabling seamless service communication",
  "Reverse engineered Paragon request flow for system compatibility",
  "Implemented secure authentication & request handling mechanisms",
  "Improved end-to-end testing reliability across multiple services",
  "Collaborated effectively within an Agile team environment",
];

const Experience = () => {
  return (
    <section id="experience" className="border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I've <span className="text-gradient">worked</span></h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <Building2 size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Software Development Engineer Intern</h3>
              <p className="text-primary font-mono font-medium">Amazon</p>
              <p className="text-sm text-muted-foreground mt-1">May 2025 – July 2025</p>
            </div>
          </div>
          <div className="space-y-3">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <CheckCircle2 size={16} className="mt-1 text-primary flex-shrink-0" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
