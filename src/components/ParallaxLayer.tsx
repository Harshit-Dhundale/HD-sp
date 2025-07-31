"use client"

import type React from "react"
import { useEffect, useRef } from "react"

interface ParallaxLayerProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export default function ParallaxLayer({ children, speed = 0.5, className = "" }: ParallaxLayerProps) {
  const layerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!layerRef.current) return

    const element = layerRef.current

    const handleScroll = () => {
      const scrollY = window.scrollY
      const yPos = -(scrollY * speed)
      element.style.transform = `translateY(${yPos}px)`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div
      ref={layerRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ willChange: "transform" }}
    >
      {children}
    </div>
  )
}
