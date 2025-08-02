"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TypeCycleProps {
  words: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

export function TypeCycle({
  words,
  className = "",
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypeCycleProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]

    const timeout = setTimeout(
      () => {
        if (isPaused) {
          setIsPaused(false)
          setIsDeleting(true)
          return
        }

        if (isDeleting) {
          if (currentText === "") {
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
          } else {
            setCurrentText(currentWord.substring(0, currentText.length - 1))
          }
        } else {
          if (currentText === currentWord) {
            setIsPaused(true)
          } else {
            setCurrentText(currentWord.substring(0, currentText.length + 1))
          }
        }
      },
      isPaused ? pauseDuration : isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, isPaused, words, typingSpeed, deletingSpeed, pauseDuration])

  // Find the longest word for width reservation
  const longestWord = words.reduce((longest, current) => 
    current.length > longest.length ? current : longest, ""
  )

  return (
    <div className={`inline-flex items-center justify-center min-h-[3.75rem] lg:min-h-[4.25rem] relative ${className}`}>
      {/* Invisible placeholder to reserve width */}
      <span className="opacity-0 pointer-events-none absolute" aria-hidden="true">
        {longestWord}|
      </span>
      
      {/* Visible typewriter content */}
      <div className="flex items-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            {currentText}
          </motion.span>
        </AnimatePresence>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="text-primary ml-1"
        >
          |
        </motion.span>
      </div>
    </div>
  )
}
