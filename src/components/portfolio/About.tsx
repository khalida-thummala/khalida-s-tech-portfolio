import { motion } from "framer-motion";
import { GraduationCap, MapPin, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">About Me</p>
          <h2 className="section-title">Turning ideas into <span className="text-gradient">reliable systems</span></h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a motivated Computer Science undergraduate at JNTUA with a strong foundation in Data Structures & Algorithms, Object-Oriented Programming, DBMS, and Operating Systems. I maintain an <span className="text-foreground font-semibold">8.4 CGPA</span> while actively building real-world software.
              </p>
              <p>
                My internship at <span className="text-foreground font-semibold">Amazon (May–July 2025)</span> gave me hands-on experience contributing to large-scale distributed systems, working within Agile teams, and delivering production-quality code.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: MapPin, label: "Based in", value: "Andhra Pradesh, India" },
                { icon: GraduationCap, label: "Education", value: "B.Tech CSE, JNTUA — 8.4 CGPA" },
                { icon: Target, label: "Goal", value: "Building scalable distributed systems" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card flex items-start gap-4"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    <p className="text-foreground font-medium mt-0.5">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
