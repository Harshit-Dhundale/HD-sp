"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

interface TypeCycleProps {
  phrases: string[]
  duration?: number
}

export default function TypeCycle({ phrases, duration = 1600 }: TypeCycleProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (phrases.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length)
    }, duration)

    return () => clearInterval(interval)
  }, [phrases.length, duration])

  if (phrases.length === 0) {
    return <div className="text-2xl md:text-4xl font-display text-gold">Loading...</div>
  }

  return (
    <div className="relative h-16 flex items-center justify-center lg:justify-start">
      <AnimatePresence mode="wait">
        <motion.span
          key={`phrase-${currentIndex}`}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-2xl md:text-4xl font-display text-gold absolute inset-0 flex items-center justify-center lg:justify-start"
        >
          {phrases[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
