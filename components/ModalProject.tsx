"use client"

import { Fragment, useEffect, useState, useCallback } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { 
  X, ExternalLink, Github, Star, Share2, Copy, ChevronLeft, ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useHashDialog } from "@/hooks/useHashDialog"
import { useCopyFeedback } from "@/hooks/useCopyFeedback"
import type { Project } from "@/data/projects"
import { cn } from "@/lib/utils"

interface ModalProjectProps {
  projects: Project[]
}

export function ModalProject({ projects }: ModalProjectProps) {
  const [githubStars, setGithubStars] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const { isOpen, activeId, closeDialog } = useHashDialog({
    hashKey: 'project',
    onOpen: async (id) => {
      const project = projects.find(p => p.id === id)
      if (project) {
        try {
          if (typeof window !== "undefined" && window.posthog) {
            window.posthog.capture('project_open', { slug: project.id })
          }
        } catch (err) {
          console.error("PostHog error:", err)
        }
      }
    }
  })

  const project = activeId ? projects.find(p => p.id === activeId) : null

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0)
  }, [project?.id])

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

  const { copyToClipboard } = useCopyFeedback()

  const copyAndToast = async (label: string, url: string) => {
    await copyToClipboard(url)
    if (typeof window !== "undefined" && window.posthog) {
      try {
        window.posthog.capture('copy_url', { type: label.toLowerCase().replace(' ', '_') })
      } catch (err) {
        console.error("PostHog error:", err)
      }
    }
  }

  const handleShare = async () => {
    const url = `${window.location.origin}#project=${project?.id}`
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: project?.title || 'Project',
          url: url
        })
      } catch (err) {
        // Fallback to copy
        await copyAndToast("Project URL", url)
      }
    } else {
      // Fallback to copy
      await copyAndToast("Project URL", url)
    }
  }

  const nextImage = useCallback(() => {
    if (project?.images) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
    }
  }, [project?.images])

  const prevImage = useCallback(() => {
    if (project?.images) {
      setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
    }
  }, [project?.images])

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
              <Dialog.Panel className="w-full max-w-6xl transform overflow-hidden rounded-2xl bg-background border border-border text-left align-middle shadow-xl transition-all max-h-[calc(100vh-2rem)] flex flex-col">
                
                {/* Header Row - Fixed Height */}
                <div className="flex items-center justify-between p-6 bg-background/80 backdrop-blur-sm border-b border-border h-12 flex-shrink-0">
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
                      onClick={handleShare}
                      className="gap-2"
                      aria-label="Share project"
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

                {/* Content - Scrollable */}
                <div className="flex-1 overflow-y-auto p-6 scrollbar-gutter-stable">
                  <div className="space-y-8">
                    {/* Project Title */}
                    <div className="text-center">
                      <Dialog.Title as="h2" className="text-2xl lg:text-3xl font-bold mb-3">
                        {project.title}
                      </Dialog.Title>
                      {project.description && (
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                          {project.description}
                        </p>
                      )}
                    </div>

                    {/* Two-column layout for desktop */}
                    <div className="grid lg:grid-cols-[60%_40%] gap-8">
                      {/* LEFT COLUMN - Hero Image & CTAs */}
                      <div className="space-y-6">
                        {/* Hero Image */}
                        <div className="relative aspect-video w-full rounded-lg overflow-hidden">
                          <Image 
                            src={project.images[currentImageIndex] || project.images[0]} 
                            alt={`${project.title} screenshot ${currentImageIndex + 1}`} 
                            fill 
                            className="object-cover" 
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={currentImageIndex === 0}
                          />
                          
                          {/* Navigation arrows for multiple images */}
                          {project.images.length > 1 && (
                            <>
                              <Button
                                size="sm"
                                variant="secondary"
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-0 backdrop-blur-sm"
                                onClick={prevImage}
                                aria-label="Previous image"
                              >
                                <ChevronLeft className="w-4 h-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="secondary"
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-0 backdrop-blur-sm"
                                onClick={nextImage}
                                aria-label="Next image"
                              >
                                <ChevronRight className="w-4 h-4" />
                              </Button>
                              
                              {/* Image counter */}
                              <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                                {currentImageIndex + 1} / {project.images.length}
                              </div>
                            </>
                          )}
                        </div>

                        {/* Thumbnail strip for multiple images */}
                        {project.images.length > 1 && (
                          <div className="flex justify-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                            {project.images.slice(0, 6).map((src, idx) => (
                              <button
                                key={src}
                                className={cn(
                                  "relative w-12 h-8 flex-shrink-0 rounded overflow-hidden transition-all duration-200",
                                  idx === currentImageIndex 
                                    ? 'ring-2 ring-primary scale-105' 
                                    : 'opacity-70 hover:opacity-100 hover:scale-105'
                                )}
                                onClick={() => setCurrentImageIndex(idx)}
                              >
                                <Image 
                                  src={src} 
                                  alt={`Thumbnail ${idx + 1}`} 
                                  fill 
                                  className="object-cover" 
                                  sizes="48px"
                                  loading="lazy"
                                />
                              </button>
                            ))}
                          </div>
                        )}

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                          {project.links.live ? (
                            <Button asChild className="gap-2 flex-1">
                              <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4" />
                                Live Demo
                              </a>
                            </Button>
                          ) : (
                            <Button disabled className="gap-2 flex-1" title="Demo unavailable">
                              <ExternalLink className="w-4 h-4" />
                              Live Demo
                            </Button>
                          )}
                          
                          {project.links.repo ? (
                            <Button variant="outline" asChild className="gap-2 flex-1">
                              <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4" />
                                {githubStars !== null && (
                                  <div className="flex items-center gap-1">
                                    <Star className="w-3 h-3" />
                                    <span className="text-xs">{githubStars}</span>
                                  </div>
                                )}
                                Code
                              </a>
                            </Button>
                          ) : (
                            <Button variant="outline" disabled className="gap-2 flex-1" title="Repository unavailable">
                              <Github className="w-4 h-4" />
                              Code
                            </Button>
                          )}
                        </div>

                        {/* Copy URL Buttons */}
                        <div className="flex flex-col sm:flex-row gap-2">
                          {project.links.live && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyAndToast("Demo URL", project.links.live!)}
                              className="gap-2"
                              aria-label="Copy demo URL"
                            >
                              <Copy className="w-3 h-3" />
                              Copy Demo URL
                            </Button>
                          )}
                          {project.links.repo && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyAndToast("Repo URL", project.links.repo!)}
                              className="gap-2"
                              aria-label="Copy repository URL"
                            >
                              <Copy className="w-3 h-3" />
                              Copy Repo URL
                            </Button>
                          )}
                        </div>
                      </div>

                      {/* RIGHT COLUMN - Project Info */}
                      <div className="space-y-6">
                        {/* Technologies Used */}
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-sm">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Problem & Solution */}
                        {project.problem && (
                          <Card className="hover:shadow-md transition-shadow">
                            <CardHeader className="pb-3">
                              <h3 className="text-lg font-semibold">Problem</h3>
                            </CardHeader>
                            <CardContent>
                              <p className="text-muted-foreground leading-relaxed">
                                {project.problem}
                              </p>
                            </CardContent>
                          </Card>
                        )}

                        {project.overview && (
                          <Card className="hover:shadow-md transition-shadow">
                            <CardHeader className="pb-3">
                              <h3 className="text-lg font-semibold">Solution</h3>
                            </CardHeader>
                            <CardContent>
                              <p className="text-muted-foreground leading-relaxed">
                                {project.overview}
                              </p>
                            </CardContent>
                          </Card>
                        )}
                      </div>
                    </div>

                    {/* Key Features - Full Width */}
                    {project.features && project.features.length > 0 && (
                      <div className="max-w-4xl mx-auto">
                        <h3 className="text-lg font-semibold mb-4 text-center">Key Features</h3>
                        <ul className="grid gap-2 list-disc marker:text-primary ml-5 sm:grid-cols-2">
                          {project.features.map((feature, index) => (
                            <li key={index} className="text-muted-foreground leading-relaxed">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
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
