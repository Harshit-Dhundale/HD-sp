import type { ReactNode } from "react"

interface StoryCardProps {
  emoji: string
  heading: string
  bullets: string[]
  children?: ReactNode
}

export default function StoryCard({ emoji, heading, bullets, children }: StoryCardProps) {
  return (
    <div className="bg-parchment/10 backdrop-blur-sm border border-gold/20 rounded-lg p-6 shadow-card paper-texture">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl" role="img" aria-label={heading}>
          {emoji}
        </span>
        <h3 className="text-xl font-display font-semibold text-gold">{heading}</h3>
      </div>

      <ul className="space-y-2 text-parchment/90">
        {bullets.map((bullet, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-gold mt-1">•</span>
            <span className="text-sm leading-relaxed">{bullet}</span>
          </li>
        ))}
      </ul>

      {children}
    </div>
  )
}
