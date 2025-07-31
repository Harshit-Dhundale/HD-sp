"use client"

import { useState } from "react"
import type { Skill } from "../data/skills"

interface SkillChipProps extends Skill {
  className?: string
}

export default function SkillChip({ label, cat, icon, years, className = "" }: SkillChipProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className={`skill-chip group relative ${className}`}>
      <div className="flex items-center gap-2">
        {!imageError ? (
          <img
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
            alt={label}
            className="w-5 h-5"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-5 h-5 bg-gold/20 rounded flex items-center justify-center text-xs font-bold text-gold">
            {label.charAt(0)}
          </div>
        )}
        <span className="font-medium">{label}</span>
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-midnight border border-gold/40 rounded text-xs text-parchment opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
        {label} • {years} year{years !== 1 ? "s" : ""}
      </div>
    </div>
  )
}
