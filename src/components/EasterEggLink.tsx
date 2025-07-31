"use client"

import type { ReactNode } from "react"
import confetti from "canvas-confetti"

interface EasterEggLinkProps {
  children: ReactNode
  href: string
  className?: string
}

export default function EasterEggLink({ children, href, className = "" }: EasterEggLinkProps) {
  const handleClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })

    setTimeout(() => {
      window.open(href, "_blank", "noopener,noreferrer")
    }, 500)
  }

  return (
    <button
      onClick={handleClick}
      className={`cursor-pointer transition-transform hover:scale-105 ${className}`}
      aria-label="Easter egg link"
    >
      {children}
    </button>
  )
}
