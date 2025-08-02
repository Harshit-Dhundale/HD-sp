"use client"

import { useRef, useState } from "react"
import { projects } from "@/data/projects"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import ProjectCard from "./ProjectCard"
import { useHashDialog } from "@/hooks/useHashDialog"
import { ModalProject } from "./ModalProject"

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { openDialog } = useHashDialog({ hashKey: "project" })

  const visibleProjects = showAll ? projects : projects.slice(0, 6)
  const hidden = projects.length - visibleProjects.length

  const toggleShow = () => {
    if (showAll) {
      // When collapsing, scroll to section top
      sectionRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    setShowAll((prev) => !prev)
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

        {hidden > 0 && (
          <div className="text-center mt-8">
            <Button variant="outline" onClick={toggleShow}>
              <ChevronDown
                className={`mr-2 h-4 w-4 transition-transform ${showAll ? "rotate-180" : ""}`}
              />
              {showAll ? "Show Less" : `Show All Projects (+${hidden})`}
            </Button>
          </div>
        )}
        <ModalProject projects={projects} />
      </div>
    </section>
  )
}
