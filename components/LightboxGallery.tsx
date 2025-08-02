"use client"

import Image from "next/image"
import { useState } from "react"
import { projects } from "@/data/projects"

interface LightboxGalleryProps {
  slug: string
}

export default function LightboxGallery({ slug }: LightboxGalleryProps) {
  const project = projects.find((p) => p.id === slug)
  const images = project?.images || []
  const [isOpen, setIsOpen] = useState(false)
  const [current, setCurrent] = useState(0)

  const open = (index: number) => {
    setCurrent(index)
    setIsOpen(true)
  }

  const next = () => setCurrent((prev) => (prev + 1) % images.length)
  const prev = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        {images.map((src, idx) => (
          <div
            key={src}
            className="relative aspect-video cursor-pointer"
            onClick={() => open(idx)}
          >
            <Image src={src} alt={`${project?.title} screenshot ${idx + 1}`} fill className="object-cover rounded-lg" />
          </div>
        ))}
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black/80" onClick={() => setIsOpen(false)} />
          <div className="relative z-10 max-w-4xl w-full p-4">
            <img
              src={images[current]}
              alt="project image"
              className="max-h-[80vh] mx-auto object-contain rounded"
            />
            {images.length > 1 && (
              <>
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white"
                  onClick={prev}
                >
                  ‹
                </button>
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
                  onClick={next}
                >
                  ›
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
