"use client"

import { motion } from "framer-motion"
import { Book, ArrowRight, Star, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useChapter } from "../context/chapter"
import Link from "next/link"
import Image from "next/image"

export default function StorybookHome() {
  const { chapters, progress } = useChapter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <Image
                src="/images/harshit.webp"
                alt="Harshit"
                width={120}
                height={120}
                className="rounded-full border-4 border-primary/20"
              />
              <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-2">
                <Book className="w-5 h-5" />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Digital Storybook
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A developer's journey through code, creativity, and innovation. Each chapter tells a story of growth,
            challenges, and breakthroughs.
          </p>

          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Book className="w-4 h-4" />
              {chapters.length} Chapters
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              ~60 min read
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              {Math.round(progress)}% Complete
            </div>
          </div>

          {progress > 0 && (
            <div className="max-w-md mx-auto mb-8">
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                <span>Reading Progress</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <motion.div
                  className="bg-primary h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>
          )}
        </motion.div>

        {/* Chapter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {chapters.map((chapter, index) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={chapter.path}>
                <div className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:bg-card/80 transition-all duration-300 cursor-pointer h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                      style={{ backgroundColor: chapter.color + "20" }}
                    >
                      {chapter.icon}
                    </div>
                    {chapter.completed && (
                      <div className="bg-green-500/20 text-green-600 rounded-full p-1">
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{chapter.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{chapter.subtitle}</p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {chapter.readTime}
                    </span>
                    <Badge variant="outline" className="text-xs">
                      {chapter.difficulty}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {chapter.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {chapter.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{chapter.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Chapter {chapter.order}</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Start Reading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Link href={chapters[0].path}>
            <Button size="lg" className="group">
              Begin Journey
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-4">Use arrow keys to navigate between chapters</p>
        </motion.div>
      </div>
    </div>
  )
}
