"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Code2, Database, Globe } from "lucide-react"
import PageSpread from "../../components/PageSpread"
import StoryCard from "../../components/StoryCard"
import TimelineBubble from "../../components/TimelineBubble"
import ParallaxLayer from "../../components/ParallaxLayer"

export default function FoundationsPage() {
  return (
    <div className="relative min-h-screen bg-midnight">
      <ParallaxLayer speed={0.3} className="opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-mint/10" />
      </ParallaxLayer>

      <ParallaxLayer speed={0.5} className="opacity-30">
        <div className="absolute top-1/4 left-1/3 text-6xl text-gold/20 font-mono">{"{ }"}</div>
        <div className="absolute bottom-1/3 right-1/4 text-4xl text-mint/20 font-mono">console.log()</div>
        <Code2 className="absolute top-1/2 left-1/4 w-8 h-8 text-gold/20" />
        <Database className="absolute bottom-1/4 right-1/3 w-6 h-6 text-mint/20" />
      </ParallaxLayer>

      <PageSpread chapterIndex={1}>
        <motion.div
          className="prose prose-invert max-w-none"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-display text-gold mb-4">Chapter 1</h1>
            <h2 className="text-2xl md:text-3xl font-display text-parchment mb-6">The First Lines</h2>
          </div>

          <TimelineBubble year="2021" />

          <p className="text-lg leading-relaxed text-parchment/90 mb-6">
            Classrooms buzzed with pointers, references, and recursion trees. I stitched together C++ hacks for college
            contests and built mini-sites that crashed proudly under load. But every seg-fault fed my curiosity more.
          </p>

          <TimelineBubble year="2022" />

          <p className="text-lg leading-relaxed text-parchment/90 mb-6">
            I wandered beyond college syllabi—tinkering with cloud free-tiers, booting my first EC2 instance at 3 A.M.,
            and automating life with Python scripts that nobody asked for (but everybody borrowed).
          </p>

          <div className="flex items-center gap-4 mt-8 p-4 bg-gold/10 rounded-lg border border-gold/20">
            <Globe className="w-8 h-8 text-gold" />
            <div>
              <h3 className="text-gold font-semibold">The Beginning</h3>
              <p className="text-parchment/70 text-sm">Where curiosity met code</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <StoryCard
            emoji="🛠️"
            heading="Tooling Experiments"
            bullets={[
              "Wrote 40+ LeetCode & GFG solutions – gained Big-O intuition",
              "Deployed first Flask app on AWS EC2 (zero-downtime Blue-Green)",
              "Migrated personal blog from WordPress → Gatsby – 50% faster LCP",
            ]}
          />

          <StoryCard
            emoji="💻"
            heading="Early Projects"
            bullets={[
              "Built college event management system in PHP",
              "Created automated attendance tracker with Python",
              "Developed personal portfolio with vanilla HTML/CSS/JS",
            ]}
          />

          <div className="bg-parchment/5 p-6 rounded-lg border border-gold/20">
            <h3 className="text-gold font-display text-xl mb-3">Key Learning</h3>
            <p className="text-parchment/80 italic">
              "Every error message was a teacher, every successful deployment a small victory. The foundation wasn't
              just in syntax—it was in persistence."
            </p>
          </div>

          <div className="flex justify-between items-center pt-8">
            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2 text-gold hover:text-gold/80 transition-colors border border-gold/20 rounded-lg"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Cover
            </Link>
            <Link
              href="/orchid-internship"
              className="flex items-center gap-2 px-4 py-2 bg-gold text-midnight hover:bg-gold/90 transition-colors rounded-lg font-semibold"
            >
              Next Chapter
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </PageSpread>
    </div>
  )
}
