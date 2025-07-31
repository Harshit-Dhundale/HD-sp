"use client"

import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { X, ExternalLink, Github, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useState } from "react"
import type { Project } from "../data/projects"

interface ModalProjectProps {
  isOpen: boolean
  onClose: () => void
  project: Project | null
}

export function ModalProject({ isOpen, onClose, project }: ModalProjectProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    features: false,
    architecture: false,
    achievements: false,
  })

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  if (!project) return null

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-background border border-border text-left align-middle shadow-xl transition-all">
                {/* Header */}
                <div className="relative">
                  {/* Hero Image */}
                  <div className="relative h-64 w-full overflow-hidden rounded-t-2xl">
                    <Image
                      src={project.images[0] || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  {/* Action Buttons */}
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    {project.links.live && (
                      <Button
                        size="sm"
                        className="bg-primary/90 backdrop-blur-sm hover:bg-primary"
                        onClick={() => window.open(project.links.live, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                    {project.links.repo && (
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/90 backdrop-blur-sm hover:bg-white text-black"
                        onClick={() => window.open(project.links.repo, "_blank")}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Button>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Title and Meta */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="secondary" className="text-xs font-medium">
                        {project.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>

                    <Dialog.Title as="h3" className="text-2xl font-bold text-foreground mb-3">
                      {project.title}
                    </Dialog.Title>

                    <p className="text-muted-foreground text-lg leading-relaxed mb-4">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Overview */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-3 text-foreground">Overview</h4>
                    <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
                  </div>

                  {/* Problem Statement */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-3 text-foreground">Problem Statement</h4>
                    <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
                  </div>

                  {/* Collapsible Sections */}
                  <div className="space-y-4">
                    {/* Key Features */}
                    <div className="border border-border rounded-lg">
                      <button
                        onClick={() => toggleSection("features")}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors rounded-lg"
                      >
                        <h4 className="text-lg font-semibold text-foreground">Key Features</h4>
                        {expandedSections.features ? (
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-muted-foreground" />
                        )}
                      </button>
                      {expandedSections.features && (
                        <div className="px-4 pb-4">
                          <ul className="space-y-2">
                            {project.features.map((feature, index) => (
                              <li key={index} className="flex items-start gap-2 text-muted-foreground">
                                <span className="text-primary mt-1.5 text-xs">●</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Architecture */}
                    <div className="border border-border rounded-lg">
                      <button
                        onClick={() => toggleSection("architecture")}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors rounded-lg"
                      >
                        <h4 className="text-lg font-semibold text-foreground">Architecture & Tech Stack</h4>
                        {expandedSections.architecture ? (
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-muted-foreground" />
                        )}
                      </button>
                      {expandedSections.architecture && (
                        <div className="px-4 pb-4">
                          <ul className="space-y-2">
                            {project.architecture.map((item, index) => (
                              <li key={index} className="flex items-start gap-2 text-muted-foreground">
                                <span className="text-primary mt-1.5 text-xs">●</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Achievements */}
                    <div className="border border-border rounded-lg">
                      <button
                        onClick={() => toggleSection("achievements")}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors rounded-lg"
                      >
                        <h4 className="text-lg font-semibold text-foreground">Key Achievements</h4>
                        {expandedSections.achievements ? (
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-muted-foreground" />
                        )}
                      </button>
                      {expandedSections.achievements && (
                        <div className="px-4 pb-4">
                          <ul className="space-y-2">
                            {project.achievements.map((achievement, index) => (
                              <li key={index} className="flex items-start gap-2 text-muted-foreground">
                                <span className="text-primary mt-1.5 text-xs">●</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Role */}
                  <div className="mt-8 p-4 bg-muted/30 rounded-lg border-l-4 border-primary">
                    <h4 className="text-sm font-semibold text-foreground mb-2">My Role</h4>
                    <p className="text-sm text-muted-foreground">{project.role}</p>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
