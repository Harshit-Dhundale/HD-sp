"use client"

import Image from "next/image"
import type { Certification } from "@/data/certifications"
import { cn } from "@/lib/utils"

interface CertBadgeProps {
  cert: Certification
  onOpen: (id: string) => void
  className?: string
}

export default function CertBadge({ cert, onOpen, className }: CertBadgeProps) {
  return (
    <div
      onClick={() => onOpen(cert.id)}
      className={cn(
        "flex items-center gap-3 p-4 bg-card border rounded-lg cursor-pointer hover:ring-2 hover:ring-primary/50 transition",
        className
      )}
    >
      <div className="relative w-12 h-12 flex-shrink-0">
        <Image src={cert.image} alt={cert.name} fill className="object-contain" />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-sm">{cert.name}</h3>
        <p className="text-xs text-muted-foreground">{cert.issuer}</p>
      </div>
    </div>
  )
}
