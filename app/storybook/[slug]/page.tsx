"use client"

import type React from "react"
import { useParams } from "next/navigation"
import { useChapter } from "../../context/chapter"
import { useMounted } from "../../../hooks/useMounted"
import { chapters } from "../../../data/chapters"
import type { Chapter } from "../../../data/chapters"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, BookOpen, Clock, Tag } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect } from "react"

const chapterContent: Record<string, React.ReactNode> = {
  // ... (copy the chapterContent object from [chapter]/page.tsx)
  foundations: (
    <div className="prose prose-invert max-w-none">
      <h1>Foundations: The Beginning</h1>
      <p className="lead">
        Every journey has its beginning. Mine started with curiosity—a simple question: "How do websites work?" This
        innocent inquiry would eventually reshape my entire future.
      </p>
      {/* ...rest of content... */}
    </div>
  ),
  // ...other chapters...
}

export default function ChapterPage() {
  const params = useParams<{ slug: string }>()
  const mounted = useMounted()
  const { setCurrentChapter, getChapter, getNextChapter, getPrevChapter, markChapterCompleted } = useChapter()

  const chapterSlug = params.slug
  const chapter = chapters.find((c: Chapter) => c.id === chapterSlug)

  useEffect(() => {
    if (chapterSlug) {
      setCurrentChapter(chapterSlug)
    }
  }, [chapterSlug, setCurrentChapter])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!chapter) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Chapter Not Found</h1>
          <Link href="/storybook/bookshelf">
            <Button>Return to Bookshelf</Button>
          </Link>
        </div>
      </div>
    )
  }

  const nextChapter = getNextChapter(chapterSlug)
  const prevChapter = getPrevChapter(chapterSlug)
  const content = chapterContent[chapterSlug]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
              style={{ backgroundColor: chapter.color + "20" }}
            >
              {chapter.icon}
            </div>
            <div className="text-left">
              <h1 className="text-3xl md:text-4xl font-bold">{chapter.title}</h1>
              <p className="text-lg text-muted-foreground">{chapter.subtitle}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {chapter.readTime}
            </div>
            <Badge variant="outline">{chapter.difficulty}</Badge>
            <div className="flex items-center gap-1">
              <Tag className="w-4 h-4" />
              Chapter {chapter.order}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {chapter.tags.map((tag: string, index: number) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 md:p-12">
            {content || (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">Chapter Coming Soon</h2>
                <p className="text-muted-foreground">
                  This chapter is currently being written. Check back soon for the full story!
                </p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-between items-center max-w-4xl mx-auto"
        >
          <div className="flex-1">
            {prevChapter && (
              <Link href={prevChapter.path}>
                <Button variant="outline" className="group bg-transparent">
                  <ChevronLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Previous</div>
                    <div className="font-medium">{prevChapter.title}</div>
                  </div>
                </Button>
              </Link>
            )}
          </div>

          <div className="px-4">
            <Link href="/storybook/bookshelf">
              <Button variant="ghost" size="sm">
                <BookOpen className="w-4 h-4 mr-2" />
                Bookshelf
              </Button>
            </Link>
          </div>

          <div className="flex-1 flex justify-end">
            {nextChapter && (
              <Link href={nextChapter.path}>
                <Button className="group">
                  <div className="text-right">
                    <div className="text-xs text-primary-foreground/70">Next</div>
                    <div className="font-medium">{nextChapter.title}</div>
                  </div>
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            )}
          </div>
        </motion.div>

        {/* Mark as Complete */}
        {content && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-8"
          >
            <Button
              onClick={() => markChapterCompleted(chapterSlug)}
              variant="outline"
              className="bg-green-500/10 border-green-500/20 text-green-600 hover:bg-green-500/20"
            >
              Mark Chapter as Complete
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
