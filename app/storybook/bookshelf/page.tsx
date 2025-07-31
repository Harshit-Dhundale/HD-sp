"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, BookOpen, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { chapters } from "../../../data/chapters"
import type { Chapter } from "../../../data/chapters"

export default function BookshelfPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const router = useRouter()

  const filteredChapters = chapters.filter(
    (chapter: Chapter) =>
      chapter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chapter.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const handleChapterClick = (slug: string) => {
    router.push(`/storybook/${slug}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
            The Storybook
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Journey through my development story, one chapter at a time. Each book represents a milestone in my growth
            as a developer.
          </p>

          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search chapters or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white/80 backdrop-blur-sm border-orange-200 focus:border-orange-400"
            />
          </div>
        </motion.div>

        {/* Bookshelf */}
        <div className="relative">
          {/* Shelf */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-amber-800 via-orange-800 to-red-800 rounded-lg shadow-lg"></div>

          {/* Books */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 pb-8">
            {filteredChapters.map((chapter: Chapter, index: number) => (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => handleChapterClick(chapter.id)}
              >
                {/* Book Spine */}
                <div
                  className={`
                  relative h-64 w-full rounded-t-sm rounded-b-lg shadow-lg transform transition-all duration-300
                  group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-2xl
                  bg-gradient-to-b ${chapter.color}
                  border-l-4 border-black/20
                `}
                >
                  {/* Book Title */}
                  <div className="absolute inset-0 p-3 flex flex-col justify-between text-white">
                    <div>
                      <div className="text-xs font-bold mb-1 opacity-90">Chapter {chapter.order}</div>
                      <div className="text-sm font-bold leading-tight">
                        {chapter.title.replace(`Chapter ${chapter.order}: `, "")}
                      </div>
                    </div>

                    <div className="text-xs opacity-75">{chapter.readTime}</div>
                  </div>

                  {/* Book Highlight */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-white/30 rounded-l-sm"></div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 rounded-t-sm rounded-b-lg"></div>
                </div>

                {/* Book Base */}
                <div
                  className={`
                  h-3 w-full bg-gradient-to-b ${chapter.color} opacity-80 rounded-b-lg
                  transform transition-all duration-300 group-hover:opacity-100
                `}
                ></div>

                {/* Chapter Info on Hover */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute inset-x-0 top-full mt-2 p-3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg shadow-lg border border-orange-200 dark:border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                >
                  <h3 className="font-semibold text-sm mb-1">{chapter.title}</h3>
                  {chapter.subtitle && <p className="text-xs text-muted-foreground mb-2">{chapter.subtitle}</p>}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {chapter.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button size="sm" className="w-full text-xs">
                    <BookOpen className="h-3 w-3 mr-1" />
                    Read Chapter
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">Ready to begin the journey?</p>
          <Button
            size="lg"
            onClick={() => handleChapterClick("foundations")}
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-lg"
          >
            Start from Chapter 1
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
