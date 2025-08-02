"use client"

import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects"

interface LightboxGalleryProps {
  slug: string
}

export default function LightboxGallery({ slug }: LightboxGalleryProps) {
  const project = projects.find((p) => p.id === slug)
  const images = project?.images || []
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent((prev) => (prev + 1) % images.length), [images.length])
  const prev = useCallback(() => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1)), [images.length])

  // Keyboard support
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prev()
      } else if (e.key === 'ArrowRight') {
        next()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [prev, next])

  if (images.length === 0) return null

  if (images.length === 1) {
    return (
      <div className="relative aspect-video w-full">
        <Image src={images[0]} alt={`${project?.title} screenshot`} fill className="object-cover rounded-lg" />
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Main hero image */}
      <div className="relative aspect-video w-full">
        <Image 
          src={images[current]} 
          alt={`${project?.title} screenshot ${current + 1}`} 
          fill 
          className="object-cover rounded-lg" 
        />
        
        {/* Navigation arrows - only show when multiple images */}
        {images.length > 1 && (
          <>
            <Button
              size="sm"
              variant="secondary"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-0"
              onClick={prev}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-0"
              onClick={next}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </>
        )}
      </div>

      {/* Thumbnail strip - only show when multiple images */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((src, idx) => (
            <button
              key={src}
              className={`relative w-8 h-8 flex-shrink-0 rounded overflow-hidden transition-opacity ${
                idx === current ? 'ring-2 ring-primary' : 'opacity-70 hover:opacity-100'
              }`}
              onClick={() => setCurrent(idx)}
            >
              <Image 
                src={src} 
                alt={`Thumbnail ${idx + 1}`} 
                fill 
                className="object-cover" 
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
