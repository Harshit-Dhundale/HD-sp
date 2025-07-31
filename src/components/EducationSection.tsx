"use client"

import { motion } from "framer-motion"

const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Vellore Institute of Technology (VIT)",
    period: "2021 - 2025",
    location: "Vellore, Tamil Nadu",
    description:
      "Comprehensive computer science education with focus on software engineering, algorithms, and emerging technologies.",
    highlights: [
      "Relevant Coursework: Data Structures, Algorithms, Database Systems, Software Engineering",
      "Active participation in coding competitions and hackathons",
      "Member of technical societies and developer communities",
      "Consistent academic performance with focus on practical applications",
    ],
    gpa: "8.5/10",
  },
]

export default function EducationSection() {
  return (
    <section id="education" className="section-padding py-20">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Education</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Academic foundation in computer science with emphasis on practical application and continuous learning
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-4 h-4 bg-gold rounded-full border-4 border-midnight"></div>

              {/* Content */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 ml-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gold mb-1">{edu.degree}</h3>
                    <p className="text-lg font-medium mb-2">{edu.institution}</p>
                    <p className="text-white/80 text-sm">{edu.description}</p>
                  </div>
                  <div className="text-sm text-white/60 mt-4 md:mt-0 md:text-right">
                    <div className="font-medium">{edu.period}</div>
                    <div>{edu.location}</div>
                    <div className="mt-2 text-gold font-semibold">GPA: {edu.gpa}</div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {edu.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                      <span className="text-gold mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
