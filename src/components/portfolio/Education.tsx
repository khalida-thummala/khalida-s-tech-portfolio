import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    degree: "B.Tech in Computer Science & Engineering",
    institution: "JNTUA (Jawaharlal Nehru Technological University Anantapur)",
    period: "2023 – 2027",
    grade: "CGPA: 8.4",
  },
  {
    icon: School,
    degree: "Intermediate (MPC)",
    institution: "Board of Intermediate Education, AP",
    period: "2021 – 2023",
    grade: "96.6%",
  },
  {
    icon: BookOpen,
    degree: "SSC (10th Standard)",
    institution: "Board of Secondary Education, AP",
    period: "2021",
    grade: "CGPA: 10",
  },
];

const Education = () => {
  return (
    <section id="education" className="border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Education</p>
          <h2 className="section-title">Academic <span className="text-gradient">background</span></h2>
        </motion.div>

        <div className="space-y-4">
          {education.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card flex items-start gap-4"
            >
              <div className="p-2 rounded-lg bg-primary/10 text-primary mt-1">
                <item.icon size={20} />
              </div>
              <div>
                <h3 className="text-foreground font-semibold">{item.degree}</h3>
                <p className="text-muted-foreground text-sm mt-0.5">{item.institution}</p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs font-mono text-muted-foreground">{item.period}</span>
                  {item.grade && (
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      {item.grade}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
