"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { featuredProjects, allProjects } from "../data/projects"

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)

  const displayProjects = showAll ? allProjects : featuredProjects

  return (
    <section id="projects" className="section-padding py-20">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A showcase of full-stack applications, AI solutions, and innovative platforms I've built
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="project-card group"
            >
              {/* Project Image */}
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src={project.images[0] || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Info */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-display font-semibold">{project.title}</h3>
                  <span className="text-xs px-2 py-1 bg-gold/20 text-gold rounded-full">{project.category}</span>
                </div>

                <p className="text-white/70 text-sm leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-white/10 rounded text-white/80">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-xs px-2 py-1 bg-white/10 rounded text-white/80">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gold hover:text-gold/80 transition-colors"
                    >
                      Live Demo →
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/60 hover:text-white/80 transition-colors"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-12">
          <button onClick={() => setShowAll(!showAll)} className="btn-secondary">
            {showAll ? "Show Less" : `View All ${allProjects.length} Projects`}
          </button>
        </div>
      </div>
    </section>
  )
}
