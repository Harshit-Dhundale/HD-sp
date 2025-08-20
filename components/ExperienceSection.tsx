"use client"

import { motion } from "framer-motion"
import { ExperienceCard } from "./ExperienceCard"
import clsx from "clsx"

const experiences = [
  {
    id: "orchid-intern",
    company: "The Orchid Group",
    position: "Full-Stack Web Developer",
    duration: "Jun 2023 - Aug 2023",
    location: "Indore, India",
    type: "Internship",
    description:
      "Developed and optimized web applications using modern frameworks. Collaborated with senior developers on client projects and gained hands-on experience in full-stack development.",
    achievements: [
      "Built responsive web applications using React and Node.js",
      "Optimized database queries resulting in 40% performance improvement",
      "Collaborated with design team to implement pixel-perfect UI components",
      "Participated in code reviews and learned industry best practices",
    ],
    technologies: ["React", "Node.js", "MongoDB", "JavaScript", "Express.js", "HTML/CSS"],
    website: "#",
  },
  {
    id: "freelance",
    company: "Freelance Developer",
    position: "Full-Stack Developer",
    duration: "Jan 2023 - Present",
    location: "Remote",
    type: "Freelance",
    description:
      "Worked on diverse personal and collaborative projects focused on modern web technologies, full-stack development, and AI-powered solutions. Built production-ready applications while exploring scalable system architectures.",
    achievements: [
      "Developed 7+ full-stack projects, including web apps, dashboards, and AI-powered tools",
      "Built real-time collaborative features such as chat, notifications, and live data streaming",
      "Gained hands-on experience deploying applications using AWS, Vercel, and Render"
    ],
    technologies: ["React", "Next.js", "Node.js", "Python", "FastAPI", "Express.js", "AWS", "Flutter", "TensorFlow"],
    website: "#"
},
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Building expertise through diverse roles, from corporate internships to independent freelance projects,
            delivering impactful solutions across multiple industries.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <ol className="relative border-l border-border ml-4 space-y-16">
            {experiences.map((job, idx) => (
              <motion.li
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative pl-10"
              >
                {/* Timeline dot */}
                <span className="absolute -left-4 top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
                
                {/* Experience card */}
                <ExperienceCard data={job} />
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-2xl mx-auto"
        >
          <div className="text-center p-4 bg-card rounded-lg border">
            <div className="text-2xl font-bold text-primary mb-1">2+</div>
            <div className="text-sm text-muted-foreground">Years Hands-on Development Experience</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border">
            <div className="text-2xl font-bold text-primary mb-1">7+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border">
            <div className="text-2xl font-bold text-primary mb-1">200+</div>
            <div className="text-sm text-muted-foreground">DSA Problems Solved</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border">
            <div className="text-2xl font-bold text-primary mb-1">2+</div>
            <div className="text-sm text-muted-foreground">Cloud Certifications</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
