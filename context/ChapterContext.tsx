"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export interface Chapter {
  slug: string
  title: string
  description: string
  href: string
}

export const chapters: Chapter[] = [
  {
    slug: "foundations",
    title: "Foundations & Curiosity",
    description: "The first lines of code",
    href: "/foundations",
  },
  {
    slug: "orchid-internship",
    title: "Enterprise Velocity",
    description: "Shipping at scale",
    href: "/orchid-internship",
  },
  {
    slug: "farmiculture",
    title: "Growing Intelligence",
    description: "AI for agriculture",
    href: "/farmiculture",
  },
  {
    slug: "news-app",
    title: "Mobile Horizons",
    description: "Flutter & Firebase",
    href: "/news-app",
  },
  {
    slug: "hackathon-leaps",
    title: "High-Velocity Wins",
    description: "Building at lightning speed",
    href: "/hackathon-leaps",
  },
  {
    slug: "bloq-quantum",
    title: "Quantum Circuits",
    description: "Dragging gates & edge cases",
    href: "/bloq-quantum",
  },
  {
    slug: "think41-chatbot",
    title: "Conversational Commerce",
    description: "Mongo aggregations meet LLM",
    href: "/think41-chatbot",
  },
  {
    slug: "water-intake-tracker",
    title: "Small Habits, Big Impact",
    description: "Gamifying hydration",
    href: "/water-intake-tracker",
  },
  {
    slug: "forward-vision",
    title: "Forward Vision",
    description: "Where I'm heading next",
    href: "/forward-vision",
  },
]

interface ChapterContextType {
  currentIndex: number
  setCurrentIndex: (index: number) => void
  chapters: Chapter[]
  totalChapters: number
}

const ChapterContext = createContext<ChapterContextType | undefined>(undefined)

export function ChapterProvider({ children }: { children: ReactNode }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <ChapterContext.Provider
      value={{
        currentIndex,
        setCurrentIndex,
        chapters,
        totalChapters: chapters.length,
      }}
    >
      {children}
    </ChapterContext.Provider>
  )
}

export function useChapter() {
  const context = useContext(ChapterContext)
  if (context === undefined) {
    throw new Error("useChapter must be used within a ChapterProvider")
  }
  return context
}
