"use client"

import type React from "react"
import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useChapter } from "../context/chapter"
import { PagerDots } from "../../components/PagerDots"

export default function StorybookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { setCurrentChapter, chapters } = useChapter()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    // Update current index based on pathname
    const currentSlug = pathname.split("/").pop()
    const chapter = chapters.find((chapter) => chapter.id === currentSlug)
    if (chapter) {
      setCurrentChapter(chapter.id)
    } else if (pathname === "/storybook") {
      setCurrentChapter("bookshelf")
    }
  }, [pathname, chapters, setCurrentChapter])

  useEffect(() => {
    // Keyboard navigation
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return
      }

      const currentSlug = pathname.split("/").pop()
      const currentIndex = chapters.findIndex((chapter) => chapter.id === currentSlug)

      if (e.key === "ArrowLeft" && currentIndex > 0) {
        router.push(chapters[currentIndex - 1].path)
      } else if (e.key === "ArrowLeft" && currentIndex === 0) {
        router.push("/storybook")
      } else if (e.key === "ArrowRight" && currentIndex < chapters.length - 1) {
        router.push(chapters[currentIndex + 1].path)
      } else if (e.key === "ArrowRight" && pathname === "/storybook") {
        router.push(chapters[0].path)
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [pathname, chapters, router])

  return (
    <div className="min-h-screen relative">
      {children}
      <PagerDots />
    </div>
  )
}
