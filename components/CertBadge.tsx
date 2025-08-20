"use client"

import Image from "next/image"
import { ExternalLink } from "lucide-react"
import type { Certification } from "@/data/certifications"
import { cn } from "@/lib/utils"

interface CertBadgeProps {
  cert: Certification
  onOpen: (id: string) => void
  className?: string
}

export default function CertBadge({ cert, onOpen, className }: CertBadgeProps) {
  const handleClick = () => {
    // Call the onOpen function immediately for optimistic UI
    onOpen(cert.id)
    
    // Fallback: ensure hash is properly set
    setTimeout(() => {
      const currentHash = window.location.hash
      const expectedHash = `#cert=${cert.id}`
      
      if (!currentHash.includes(`cert=${cert.id}`)) {
        // If hash wasn't set properly, set it manually
        window.location.hash = expectedHash
        // Trigger hash change event
        window.dispatchEvent(new HashChangeEvent("hashchange", {
          oldURL: window.location.href,
          newURL: window.location.href
        }))
      }
    }, 10)
  }

  return (
    <div
      onClick={handleClick}
      className={cn(
        "relative flex items-center gap-4 p-4 bg-card border rounded-lg cursor-pointer hover:shadow-md hover:ring-2 hover:ring-primary/50 transition overflow-hidden",
        className
      )}
      aria-label={`Open details for ${cert.name}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick()
        }
      }}
    >
      {/* Thumbnail */}
      <div className="relative w-14 h-14 flex-shrink-0 rounded overflow-hidden bg-muted/60">
        <Image
          src={cert.image}
          alt={cert.name}
          fill
          className="object-contain"
          sizes="56px"
          priority={cert.featured}
        />
      </div>

      {/* Meta */}
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold truncate text-sm">{cert.name}</h4>
        <p className="text-xs text-muted-foreground truncate">{cert.issuer}</p>
        <div className="flex gap-2 mt-1 text-[10px] text-muted-foreground">
          <span>Issued: {cert.date}</span>
          {cert.credentialId && <span>• ID: {cert.credentialId}</span>}
        </div>
      </div>

      {/* Verification / external indicator */}
      {cert.verificationUrl && (
        <ExternalLink className="w-5 h-5 text-muted-foreground flex-shrink-0" />
      )}
    </div>
  )
}
