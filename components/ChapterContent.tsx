"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronLeft, ChevronRight, BookOpen, Home } from "lucide-react"
import type { Chapter } from "../data/chapters"
import ChapterProgress from "./ChapterProgress"

interface ChapterContentProps {
  chapter: Chapter
  prevChapter: Chapter | null
  nextChapter: Chapter | null
  currentIndex: number
  totalChapters: number
}

export default function ChapterContent({
  chapter,
  prevChapter,
  nextChapter,
  currentIndex,
  totalChapters,
}: ChapterContentProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container-width section-padding">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/storybook/bookshelf"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              <span className="font-medium">Bookshelf</span>
            </Link>

            <div className="text-center">
              <h1 className="font-display font-semibold text-lg">{chapter.title}</h1>
              <p className="text-xs text-foreground/60">
                Chapter {chapter.order} of {totalChapters}
              </p>
            </div>

            <Link
              href="/"
              className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors"
            >
              <Home className="w-5 h-5" />
              <span className="font-medium">Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Chapter Content */}
      <main className="pt-20">
        <motion.div
          initial={{ opacity: 0, rotateY: -15 }}
          animate={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="section-padding py-12"
          style={{ perspective: "1000px" }}
        >
          <div className="container-width max-w-4xl">
            {/* Chapter Header */}
            <div className="text-center mb-12">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{chapter.title}</h1>
                <p className="text-xl text-foreground/70 mb-6">{chapter.description}</p>
              </motion.div>
            </div>

            {/* Chapter Body */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="prose prose-lg max-w-none dark:prose-invert"
            >
              <div className="bg-muted/50 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-display font-semibold mb-4">Chapter Overview</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Content for this chapter is being prepared. This will include detailed narratives, technical insights,
                  project showcases, and interactive elements that bring the story to life.
                </p>
              </div>

              {/* Placeholder for MDX content */}
              <div className="space-y-6">
                <p className="text-foreground/80 leading-relaxed">
                  Content for this chapter is being prepared. This will include detailed narratives, technical insights,
                  project showcases, and interactive elements that bring the story to life.
                </p>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                  <h3 className="font-semibold text-primary mb-2">Coming Soon</h3>
                  <p className="text-sm text-foreground/70">
                    Full MDX content with interactive components, code examples, and rich media will be available here.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex justify-between items-center pt-12 mt-12 border-t border-border"
            >
              {prevChapter ? (
                <Link
                  href={`/storybook/${prevChapter?.id}`}
                  className="flex items-center gap-2 px-6 py-3 bg-muted hover:bg-muted/80 rounded-lg transition-colors group"
                >
                  <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <div className="text-left">
                    <div className="text-sm text-foreground/60">Previous</div>
                    <div className="font-medium">{prevChapter.title.replace(/^Chapter \d+:\s*/, "")}</div>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextChapter ? (
                <Link
                  href={`/storybook/${nextChapter?.id}`}
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-colors group"
                >
                  <div className="text-right">
                    <div className="text-sm text-primary-foreground/80">Next</div>
                    <div className="font-medium">{nextChapter.title.replace(/^Chapter \d+:\s*/, "")}</div>
                  </div>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <Link
                  href="/storybook/bookshelf"
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-colors"
                >
                  Back to Bookshelf
                  <BookOpen className="w-4 h-4" />
                </Link>
              )}
            </motion.div>
          </div>
        </motion.div>
      </main>

      {/* Progress Indicator */}
      <ChapterProgress currentIndex={currentIndex} totalChapters={totalChapters} />
    </div>
  )
}
