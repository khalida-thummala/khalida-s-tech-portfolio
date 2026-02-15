import { motion } from "framer-motion";
import { Award, Shield, Sparkles, GraduationCap } from "lucide-react";

const certs = [
  { icon: Shield, title: "Amazon SDE Internship Certificate" },
  { icon: Sparkles, title: "Amazon Future Engineer Bootcamp — Java & DSA" },
  { icon: GraduationCap, title: "Generative AI with AWS — Udacity" },
  { icon: Award, title: "Amazon Scholarship Recipient (2023)" },
  { icon: Award, title: "NCC 'B' Certificate" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Certifications & Achievements</p>
          <h2 className="section-title">Milestones <span className="text-gradient">earned</span></h2>
        </motion.div>

        <div className="space-y-3">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card flex items-center gap-4 py-4"
            >
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <cert.icon size={18} />
              </div>
              <p className="text-foreground font-medium">{cert.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
