"use client"

import { Fragment, useEffect, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { 
  X, ExternalLink, Github, ChevronDown, ChevronRight, Copy, 
  ChevronLeft, ChevronRight as ChevronRightIcon, Star, Users,
  TrendingUp, Clock, Award, Share2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import LightboxGallery from "./LightboxGallery"
import { useHashDialog } from "@/hooks/useHashDialog"
import type { Project } from "@/data/projects"
import posthog from "posthog-js"

interface ModalProjectProps {
  projects: Project[]
}

export function ModalProject({ projects }: ModalProjectProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    features: true,
    architecture: false,
    achievements: false,
  })
  const [githubStars, setGithubStars] = useState<number | null>(null)

  const { isOpen, activeId, closeDialog } = useHashDialog({
    hashKey: 'project',
    onOpen: (id) => {
      const project = projects.find(p => p.id === id)
      if (project) {
        posthog.capture('project_open', { slug: project.id })
      }
    }
  })

  const project = activeId ? projects.find(p => p.id === activeId) : null

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  // Fetch GitHub stars
  useEffect(() => {
    if (project?.links.repo && project.links.repo.includes('github.com')) {
      const repoPath = project.links.repo.replace('https://github.com/', '')
      fetch(`https://api.github.com/repos/${repoPath}`)
        .then(res => res.json())
        .then(data => setGithubStars(data.stargazers_count || 0))
        .catch(() => setGithubStars(null))
    }
  }, [project])

  const copyProjectLink = () => {
    const url = `${window.location.origin}#project=${project?.id}`
    navigator.clipboard.writeText(url)
    // Add toast notification here
  }

  const copyDemoLink = () => {
    if (project?.links.live) {
      navigator.clipboard.writeText(project.links.live)
      // Add toast notification here
    }
  }

  const copyRepoLink = () => {
    if (project?.links.repo) {
      navigator.clipboard.writeText(project.links.repo)
      // Add toast notification here
    }
  }

  if (!project) return null

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeDialog}>
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
              <Dialog.Panel className="w-full max-w-6xl transform overflow-hidden rounded-2xl bg-background border border-border text-left align-middle shadow-xl transition-all max-h-[90vh] overflow-y-auto">
                
                {/* Header with Close Button */}
                <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-background/80 backdrop-blur-sm border-b border-border">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">{project.category}</Badge>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                    {project.status === "completed" && (
                      <Badge variant="outline" className="text-green-600 border-green-600">Completed</Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={copyProjectLink}
                      className="gap-2"
                    >
                      <Share2 className="w-4 h-4" />
                      Share
                    </Button>
                    <button
                      onClick={closeDialog}
                      className="p-2 rounded-full hover:bg-muted transition-colors"
                      aria-label="Close modal"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  {/* Left: Gallery */}
                  <div className="space-y-6">
                    <LightboxGallery slug={project.id} />
                    
                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-3">
                      {project.links.live && (
                        <Button 
                          className="gap-2" 
                          onClick={() => window.open(project.links.live, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </Button>
                      )}
                      {project.links.repo && (
                        <Button 
                          variant="outline" 
                          className="gap-2"
                          onClick={() => window.open(project.links.repo, "_blank")}
                        >
                          <Github className="w-4 h-4" />
                          {githubStars !== null && (
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3" />
                              <span className="text-xs">{githubStars}</span>
                            </div>
                          )}
                          Code
                        </Button>
                      )}
                    </div>

                    {/* Copy Action Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      {project.links.live && (
                        <Button variant="ghost" size="sm" onClick={copyDemoLink} className="gap-2">
                          <Copy className="w-3 h-3" />
                          Copy Demo URL
                        </Button>
                      )}
                      {project.links.repo && (
                        <Button variant="ghost" size="sm" onClick={copyRepoLink} className="gap-2">
                          <Copy className="w-3 h-3" />
                          Copy Repo URL
                        </Button>
                      )}
                    </div>

                    {/* Project Metrics */}
                    {project.metrics && (
                      <Card className="p-4 space-y-3">
                        <h4 className="font-semibold text-sm">Key Metrics</h4>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          {project.metrics.users && (
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-blue-500" />
                              <span className="text-muted-foreground">Users:</span>
                              <span className="font-medium">{project.metrics.users}</span>
                            </div>
                          )}
                          {project.metrics.accuracy && (
                            <div className="flex items-center gap-2">
                              <TrendingUp className="w-4 h-4 text-green-500" />
                              <span className="text-muted-foreground">Accuracy:</span>
                              <span className="font-medium">{project.metrics.accuracy}</span>
                            </div>
                          )}
                          {project.metrics.performance && (
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-orange-500" />
                              <span className="text-muted-foreground">Performance:</span>
                              <span className="font-medium">{project.metrics.performance}</span>
                            </div>
                          )}
                          {project.metrics.revenue && (
                            <div className="flex items-center gap-2">
                              <Award className="w-4 h-4 text-purple-500" />
                              <span className="text-muted-foreground">Impact:</span>
                              <span className="font-medium">{project.metrics.revenue}</span>
                            </div>
                          )}
                        </div>
                      </Card>
                    )}
                  </div>

                  {/* Right: Project Details */}
                  <div className="space-y-6">
                    {/* Title and Description */}
                    <div>
                      <Dialog.Title as="h2" className="text-3xl font-bold mb-3">
                        {project.title}
                      </Dialog.Title>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Overview */}
                    {project.overview && (
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Overview</h3>
                        <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
                      </div>
                    )}

                    {/* Problem Statement */}
                    {project.problem && (
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Problem Statement</h3>
                        <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
                      </div>
                    )}

                    {/* Collapsible Sections */}
                    <div className="space-y-3">
                      {/* Key Features */}
                      {project.features && project.features.length > 0 && (
                        <div className="border border-border rounded-lg">
                          <button
                            onClick={() => toggleSection("features")}
                            className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
                          >
                            <h4 className="font-semibold">Key Features</h4>
                            {expandedSections.features ? (
                              <ChevronDown className="h-4 w-4" />
                            ) : (
                              <ChevronRight className="h-4 w-4" />
                            )}
                          </button>
                          {expandedSections.features && (
                            <div className="px-4 pb-4 space-y-2">
                              {project.features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-2 text-sm">
                                  <span className="text-primary mt-1 text-xs">●</span>
                                  <span className="text-muted-foreground">{feature}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Architecture */}
                      <div className="border border-border rounded-lg">
                        <button
                          onClick={() => toggleSection("architecture")}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
                        >
                          <h4 className="font-semibold">Architecture</h4>
                          {expandedSections.architecture ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </button>
                        {expandedSections.architecture && (
                          <div className="px-4 pb-4 space-y-2">
                            {project.architecture.map((item, index) => (
                              <div key={index} className="flex items-start gap-2 text-sm">
                                <span className="text-primary mt-1 text-xs">●</span>
                                <span className="text-muted-foreground">{item}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Achievements */}
                      <div className="border border-border rounded-lg">
                        <button
                          onClick={() => toggleSection("achievements")}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
                        >
                          <h4 className="font-semibold">Key Achievements</h4>
                          {expandedSections.achievements ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </button>
                        {expandedSections.achievements && (
                          <div className="px-4 pb-4 space-y-2">
                            {project.achievements.map((achievement, index) => (
                              <div key={index} className="flex items-start gap-2 text-sm">
                                <span className="text-primary mt-1 text-xs">●</span>
                                <span className="text-muted-foreground">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="grid grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Role</p>
                        <p className="text-sm">{project.role}</p>
                      </div>
                      {project.duration && (
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Duration</p>
                          <p className="text-sm">{project.duration}</p>
                        </div>
                      )}
                      {project.teamSize && (
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Team Size</p>
                          <p className="text-sm">{project.teamSize} members</p>
                        </div>
                      )}
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Impact Score</p>
                        <p className="text-sm font-bold text-primary">{project.impact}/100</p>
                      </div>
                    </div>
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
