import { motion } from "framer-motion";

const categories = [
  { label: "Programming", skills: ["Java", "C"] },
  { label: "Web", skills: ["HTML", "CSS", "JavaScript", "React"] },
  { label: "Backend", skills: ["REST APIs"] },
  { label: "CS Fundamentals", skills: ["DSA", "DBMS", "OOP", "OS"] },
  { label: "Tools", skills: ["Git", "GitHub", "Firebase", "AWS Basics"] },
];

const Skills = () => {
  return (
    <section id="skills" className="border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Skills</p>
          <h2 className="section-title">My <span className="text-gradient">toolkit</span></h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card"
            >
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-primary mb-4">{cat.label}</p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
