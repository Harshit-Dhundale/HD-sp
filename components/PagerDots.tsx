"use client"

import { useChapter } from "../app/context/chapter"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"

export function PagerDots() {
  const { chapters } = useChapter()
  const pathname = usePathname()

  // Don't show pager dots on non-storybook pages
  if (!pathname.startsWith("/storybook")) {
    return null
  }

  const currentSlug = pathname.split("/").pop()
  const currentIndex = chapters.findIndex((chapter) => chapter.id === currentSlug)
  const isBookshelf = pathname === "/storybook"

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-border rounded-full px-4 py-2">
        {/* Bookshelf dot */}
        <Link href="/storybook">
          <motion.div
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
              isBookshelf ? "bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            title="Bookshelf"
          />
        </Link>

        <div className="w-px h-4 bg-border mx-1" />

        {/* Chapter dots */}
        {chapters.map((chapter, index) => (
          <Link key={chapter.id} href={chapter.path}>
            <motion.div
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                index === currentIndex
                  ? "bg-primary"
                  : chapter.completed
                    ? "bg-green-500"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              title={`${chapter.title} ${chapter.completed ? "(Completed)" : ""}`}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
