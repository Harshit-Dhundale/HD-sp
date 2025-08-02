"use client"

import { motion } from "framer-motion"
import { ExperienceCard } from "./ExperienceCard"
import clsx from "clsx"

const experiences = [
  {
    id: "orchid-intern",
    company: "Orchid Technologies",
    position: "Software Development Intern",
    duration: "Jun 2023 - Aug 2023",
    location: "Mumbai, India",
    type: "Internship",
    description:
      "Developed and optimized web applications using modern frameworks. Collaborated with senior developers on client projects and gained hands-on experience in full-stack development.",
    achievements: [
      "Built responsive web applications using React and Node.js",
      "Optimized database queries resulting in 40% performance improvement",
      "Collaborated with design team to implement pixel-perfect UI components",
      "Participated in code reviews and learned industry best practices",
    ],
    technologies: ["React", "Node.js", "MongoDB", "JavaScript", "HTML/CSS"],
    website: "https://orchidtech.com",
  },
  {
    id: "freelance",
    company: "Freelance Developer",
    position: "Full-Stack Developer",
    duration: "Jan 2022 - Present",
    location: "Remote",
    type: "Freelance",
    description:
      "Providing end-to-end web development services to clients across various industries. Specializing in modern web technologies and AI-powered solutions.",
    achievements: [
      "Delivered 15+ successful projects with 100% client satisfaction",
      "Built AI-powered agricultural platform serving 500+ farmers",
      "Developed real-time collaborative tools for remote teams",
      "Created mobile applications with 50K+ downloads",
    ],
    technologies: ["React", "Next.js", "Python", "FastAPI", "AWS", "Flutter", "TensorFlow"],
    website: "#",
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
            <div className="text-2xl font-bold text-primary mb-1">4+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border">
            <div className="text-2xl font-bold text-primary mb-1">15+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border">
            <div className="text-2xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border">
            <div className="text-2xl font-bold text-primary mb-1">2</div>
            <div className="text-sm text-muted-foreground">Cloud Certifications</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
