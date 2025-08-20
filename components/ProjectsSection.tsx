"use client"

import { useRef, useState } from "react"
import { projects } from "@/data/projects"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import ProjectCard from "./ProjectCard"
import { useHashDialog } from "@/hooks/useHashDialog"
import { ModalProject } from "./ModalProject"

export function ProjectsSection() {
  const [expanded, setExpanded] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { openDialog } = useHashDialog({ hashKey: "project" })

  // Show 6 projects by default, all when expanded
  const TOP = 6
  const visibleProjects = expanded ? projects : projects.slice(0, TOP)
  const hiddenCount = projects.length - visibleProjects.length

  const toggleExpanded = () => {
    if (expanded) {
      // When collapsing, scroll to section top smoothly
      sectionRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    setExpanded((prev) => !prev)
  }

  return (
    <section id="projects" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A collection of projects showcasing different technologies, problem-solving approaches, and creative solutions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={openDialog}
            />
          ))}
        </div>

        {/* Toggle button - show when there are hidden projects OR when expanded */}
        {(hiddenCount > 0 || expanded) && (
          <div className="text-center mt-10">
            <Button 
              variant="outline" 
              onClick={toggleExpanded}
              aria-expanded={expanded}
              className="gap-2"
            >
              {expanded ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  Hide Projects
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  Show All Projects (+{hiddenCount})
                </>
              )}
            </Button>
          </div>
        )}
        
        <ModalProject projects={projects} />
      </div>
    </section>
  )
}
