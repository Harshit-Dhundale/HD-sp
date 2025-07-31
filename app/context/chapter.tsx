"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface Chapter {
  id: string
  title: string
  subtitle?: string
  order: number
  path: string
  completed: boolean
  icon: string
  color: string
  readTime: string
  difficulty: string
  tags: string[]
}

interface ChapterContextType {
  currentChapter: string | null
  setCurrentChapter: (chapterId: string) => void
  chapters: Chapter[]
  getChapter: (id: string) => Chapter | undefined
  getNextChapter: (id: string) => Chapter | undefined
  getPrevChapter: (id: string) => Chapter | undefined
  markChapterCompleted: (id: string) => void
  progress: number
}

const defaultChapters: Chapter[] = [
  {
    id: "foundations",
    title: "Foundations",
    subtitle: "The Beginning",
    order: 1,
    path: "/storybook/foundations",
    completed: false,
    icon: "🌱",
    color: "#10B981",
    readTime: "5 min read",
    difficulty: "Beginner",
    tags: ["HTML", "CSS", "JavaScript", "Learning"],
  },
  {
    id: "orchid-internship",
    title: "Orchid Internship",
    subtitle: "First Professional Experience",
    order: 2,
    path: "/storybook/orchid-internship",
    completed: false,
    icon: "🏢",
    color: "#8B5CF6",
    readTime: "7 min read",
    difficulty: "Intermediate",
    tags: ["React", "Professional", "Team Work", "Growth"],
  },
  {
    id: "farmiculture",
    title: "Farmiculture",
    subtitle: "Agricultural Innovation",
    order: 3,
    path: "/storybook/farmiculture",
    completed: false,
    icon: "🌾",
    color: "#F59E0B",
    readTime: "10 min read",
    difficulty: "Advanced",
    tags: ["AI", "IoT", "Agriculture", "Innovation"],
  },
  {
    id: "news-app",
    title: "News App",
    subtitle: "Information at Your Fingertips",
    order: 4,
    path: "/storybook/news-app",
    completed: false,
    icon: "📰",
    color: "#EF4444",
    readTime: "6 min read",
    difficulty: "Intermediate",
    tags: ["Flutter", "Mobile", "API", "News"],
  },
  {
    id: "hackathon-leaps",
    title: "Hackathon Leaps",
    subtitle: "Competitive Coding Journey",
    order: 5,
    path: "/storybook/hackathon-leaps",
    completed: false,
    icon: "🏆",
    color: "#06B6D4",
    readTime: "8 min read",
    difficulty: "Advanced",
    tags: ["Competition", "Problem Solving", "Innovation", "Awards"],
  },
  {
    id: "bloq-quantum",
    title: "Quantum Gates",
    subtitle: "Quantum Computing Exploration",
    order: 6,
    path: "/storybook/bloq-quantum",
    completed: false,
    icon: "⚛️",
    color: "#8B5CF6",
    readTime: "12 min read",
    difficulty: "Expert",
    tags: ["Quantum", "Physics", "Computing", "Research"],
  },
  {
    id: "codeconflux",
    title: "CodeConflux",
    subtitle: "Real-time Collaboration",
    order: 7,
    path: "/storybook/codeconflux",
    completed: false,
    icon: "🤝",
    color: "#10B981",
    readTime: "9 min read",
    difficulty: "Advanced",
    tags: ["Collaboration", "Real-time", "WebRTC", "Team"],
  },
  {
    id: "think41-chatbot",
    title: "Think41 Chatbot",
    subtitle: "AI-Powered Conversations",
    order: 8,
    path: "/storybook/think41-chatbot",
    completed: false,
    icon: "🤖",
    color: "#F59E0B",
    readTime: "11 min read",
    difficulty: "Advanced",
    tags: ["AI", "Chatbot", "NLP", "Commerce"],
  },
  {
    id: "water-intake-tracker",
    title: "Hydration Tracker",
    subtitle: "Health & Wellness",
    order: 9,
    path: "/storybook/water-intake-tracker",
    completed: false,
    icon: "💧",
    color: "#06B6D4",
    readTime: "5 min read",
    difficulty: "Beginner",
    tags: ["Health", "Mobile", "Tracking", "Wellness"],
  },
  {
    id: "forward-vision",
    title: "Forward Vision",
    subtitle: "The Future Ahead",
    order: 10,
    path: "/storybook/forward-vision",
    completed: false,
    icon: "🚀",
    color: "#EF4444",
    readTime: "6 min read",
    difficulty: "Visionary",
    tags: ["Future", "Goals", "Vision", "Growth"],
  },
]

const ChapterContext = createContext<ChapterContextType | undefined>(undefined)

export function ChapterProvider({ children }: { children: React.ReactNode }) {
  const [currentChapter, setCurrentChapter] = useState<string | null>(null)
  const [chapters, setChapters] = useState<Chapter[]>(defaultChapters)

  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem("storybook-progress")
    if (savedProgress) {
      try {
        const progress = JSON.parse(savedProgress)
        setChapters((prev) =>
          prev.map((chapter) => ({
            ...chapter,
            completed: progress[chapter.id] || false,
          })),
        )
      } catch (error) {
        console.error("Failed to load progress:", error)
      }
    }
  }, [])

  const getChapter = (id: string) => chapters.find((chapter) => chapter.id === id)

  const getNextChapter = (id: string) => {
    const current = getChapter(id)
    if (!current) return undefined
    return chapters.find((chapter) => chapter.order === current.order + 1)
  }

  const getPrevChapter = (id: string) => {
    const current = getChapter(id)
    if (!current) return undefined
    return chapters.find((chapter) => chapter.order === current.order - 1)
  }

  const markChapterCompleted = (id: string) => {
    setChapters((prev) => {
      const updated = prev.map((chapter) => (chapter.id === id ? { ...chapter, completed: true } : chapter))

      // Save to localStorage
      const progress = updated.reduce(
        (acc, chapter) => {
          acc[chapter.id] = chapter.completed
          return acc
        },
        {} as Record<string, boolean>,
      )
      localStorage.setItem("storybook-progress", JSON.stringify(progress))

      return updated
    })
  }

  const progress = (chapters.filter((c) => c.completed).length / chapters.length) * 100

  return (
    <ChapterContext.Provider
      value={{
        currentChapter,
        setCurrentChapter,
        chapters,
        getChapter,
        getNextChapter,
        getPrevChapter,
        markChapterCompleted,
        progress,
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
