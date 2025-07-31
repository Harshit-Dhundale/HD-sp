"use client"

import { motion, AnimatePresence, easeInOut } from "framer-motion"
import { type ReactNode, useEffect, useState } from "react"

interface PageSpreadProps {
  children: ReactNode
  chapterIndex: number
}

const pageVariants = {
  enter: {
    rotateY: -180,
    opacity: 0,
  },
  center: {
    rotateY: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: easeInOut,
    },
  },
  exit: {
    rotateY: 180,
    opacity: 0,
    transition: {
      duration: 0.9,
      ease: easeInOut,
    },
  },
}

export default function PageSpread({ children, chapterIndex }: PageSpreadProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const chapterOffset = chapterIndex * windowHeight

      setIsVisible(scrollY >= chapterOffset - windowHeight / 2 && scrollY <= chapterOffset + windowHeight / 2)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [chapterIndex])

  // Render immediately on mount to prevent flash
  if (!isMounted) {
    return (
      <div className="page-spread min-h-screen flex items-center justify-center relative">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">{children}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="page-spread min-h-screen flex items-center justify-center relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={`chapter-${chapterIndex}`}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="w-full max-w-7xl mx-auto px-4"
          style={{ willChange: "transform" }}
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">{children}</div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
