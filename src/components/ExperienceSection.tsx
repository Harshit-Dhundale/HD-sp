"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "Full-Stack Developer Intern",
    company: "The Orchid Group",
    period: "June 2024 - August 2024",
    location: "Remote",
    description:
      "Contributed to enterprise-level web applications with focus on performance optimization and quality assurance.",
    achievements: [
      "Reduced UI bug backlog by 25% through systematic React component refactoring",
      "Improved page load times by 20% via dynamic imports and performance optimization",
      "Authored 30+ Selenium end-to-end test scripts for comprehensive quality assurance",
      "Implemented TDD methodology in sprint workflow, reducing defects by 20%",
    ],
    tech: ["React", "Node.js", "Selenium", "Jest", "GitHub Actions"],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding py-20">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Experience</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Professional experience building scalable applications and working with cross-functional teams
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-4 h-4 bg-gold rounded-full border-4 border-midnight"></div>

              {/* Timeline line */}
              {index < experiences.length - 1 && <div className="absolute left-2 top-4 w-0.5 h-full bg-white/20"></div>}

              {/* Content */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 ml-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gold">{exp.title}</h3>
                    <p className="text-lg font-medium">{exp.company}</p>
                  </div>
                  <div className="text-sm text-white/60 mt-2 md:mt-0">
                    <div>{exp.period}</div>
                    <div>{exp.location}</div>
                  </div>
                </div>

                <p className="text-white/80 mb-4">{exp.description}</p>

                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                      <span className="text-gold mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-gold/20 text-gold rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
