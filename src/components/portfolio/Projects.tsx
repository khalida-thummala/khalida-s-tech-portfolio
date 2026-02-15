import { motion } from "framer-motion";
import { ExternalLink, Timer, ListTodo } from "lucide-react";

const projects = [
  {
    icon: Timer,
    title: "Time-Track AI",
    subtitle: "Productivity Dashboard",
    description: "A full-stack productivity dashboard with authentication, real-time database syncing, activity management, smart 24-hour validation logic, and interactive analytics.",
    tech: ["React (Vite)", "Tailwind CSS", "Firebase", "Recharts"],
  },
  {
    icon: ListTodo,
    title: "Student To-Do List",
    subtitle: "Task Management Web App",
    description: "A clean, dynamic web application for academic task management with DOM manipulation, responsive UI, and intuitive task workflows.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Projects</p>
          <h2 className="section-title">Things I've <span className="text-gradient">built</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card group cursor-default"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <project.icon size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">{project.title}</h3>
                  <p className="text-sm text-muted-foreground font-mono">{project.subtitle}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="skill-tag text-xs">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
