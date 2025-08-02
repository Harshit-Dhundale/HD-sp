"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { projects, projectCategories, featuredProjects } from "../data/projects"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github, Star, Calendar, Users, Award, ChevronDown } from "lucide-react"
import Image from "next/image"
import { useHashDialog } from "@/hooks/useHashDialog"

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [showAll, setShowAll] = useState(false)
  const { openDialog } = useHashDialog({ hashKey: 'project' })

  const categories = Object.keys(projectCategories)
  const filteredProjects = projectCategories[activeCategory as keyof typeof projectCategories] || projects
  const displayProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6)

  const openProjectModal = (project: (typeof projects)[0]) => {
    openDialog(project.id)
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of end-to-end solutions spanning AI/ML, full-stack development, and cloud architecture. Each
            project represents real-world impact and technical excellence.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="transition-all duration-200"
            >
              {category}
              {category !== "All" && (
                <Badge variant="secondary" className="ml-2 text-xs">
                  {projectCategories[category as keyof typeof projectCategories]?.length || 0}
                </Badge>
              )}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {displayProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm cursor-pointer h-full">
                <CardContent className="p-0">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-black/20 text-white">
                        #{project.rank}
                      </Badge>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4" onClick={() => openProjectModal(project)}>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Project Meta */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        {project.year}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      {project.github && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 bg-transparent"
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open(project.github, "_blank")
                          }}
                        >
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </Button>
                      )}
                      {project.live && (
                        <Button
                          size="sm"
                          className="flex-1"
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open(project.live, "_blank")
                          }}
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Show More Button */}
        {!showAll && filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button variant="outline" size="lg" onClick={() => setShowAll(true)} className="px-8">
              Show All Projects ({filteredProjects.length - 6} more)
            </Button>
          </motion.div>
        )}

        {/* Featured Projects Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-muted/30 rounded-xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
              <Star className="w-6 h-6 text-yellow-500" />
              Featured Projects
            </h3>
            <p className="text-muted-foreground">
              Highlighting the most impactful and technically challenging projects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.slice(0, 3).map((project) => (
              <div key={project.id} className="text-center p-4 bg-card rounded-lg border">
                <div className="relative w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <h4 className="font-semibold mb-2">{project.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{project.description.slice(0, 80)}...</p>
                <Badge variant="outline" className="text-xs">
                  Rank #{project.rank}
                </Badge>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
