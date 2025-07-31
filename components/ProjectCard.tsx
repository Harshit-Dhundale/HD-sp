"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, Eye } from "lucide-react"
import type { Project } from "../data/projects"

interface ProjectCardProps {
  project: Project
  index: number
  onClick: () => void
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="project-card h-full">
        {/* Project Image */}
        <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-muted">
          <Image
            src={project.images?.[0] || project.image || "/placeholder.svg?height=200&width=400"}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
              <Eye className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Project Info */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-display font-semibold group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">{project.category}</span>
          </div>

          <p className="text-foreground/70 text-sm leading-relaxed line-clamp-2">{project.description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1">
            {project.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="text-xs px-2 py-1 bg-muted rounded text-foreground/80">
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="text-xs px-2 py-1 bg-muted rounded text-foreground/80">+{project.tags.length - 4}</span>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-2">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 text-sm text-foreground/60 hover:text-foreground/80 transition-colors"
              >
                <Github className="w-3 h-3" />
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
