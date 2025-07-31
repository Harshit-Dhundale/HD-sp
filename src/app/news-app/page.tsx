"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Smartphone, Zap } from "lucide-react"
import PageSpread from "../../components/PageSpread"
import StoryCard from "../../components/StoryCard"
import TimelineBubble from "../../components/TimelineBubble"
import ParallaxLayer from "../../components/ParallaxLayer"

export default function NewsAppPage() {
  return (
    <div className="relative min-h-screen bg-midnight">
      <ParallaxLayer speed={0.5} className="opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
      </ParallaxLayer>

      <ParallaxLayer speed={0.6} className="opacity-30">
        <Smartphone className="absolute top-1/4 left-1/4 w-12 h-12 text-blue-400/30" />
        <div className="absolute bottom-1/3 right-1/4 text-3xl">📱</div>
        <Zap className="absolute top-1/2 right-1/3 w-8 h-8 text-purple-400/30" />
      </ParallaxLayer>

      <PageSpread chapterIndex={4}>
        <motion.div
          className="prose prose-invert max-w-none"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-display text-gold mb-4">Chapter 4</h1>
            <h2 className="text-2xl md:text-3xl font-display text-parchment mb-6">Mobile Horizons</h2>
          </div>

          <TimelineBubble year="October 2024" />

          <p className="text-lg leading-relaxed text-parchment/90 mb-6">
            Mobile-first thinking demanded more than responsive web design. The News App project pushed me into
            Flutter's widget-driven world, where every pixel matters and performance is paramount.
          </p>

          <p className="text-lg leading-relaxed text-parchment/90 mb-6">
            Integrating NewsAPI with Firebase Auth, implementing Provider state management, and achieving a{" "}
            <strong className="text-gold">90% crash reduction</strong> during testing taught me that mobile development
            is as much about graceful degradation as it is about features.
          </p>

          <div className="flex items-center gap-4 mt-8 p-4 bg-blue-500/10 rounded-lg border border-blue-400/20">
            <Smartphone className="w-8 h-8 text-blue-400" />
            <div>
              <h3 className="text-blue-400 font-semibold">Cross-Platform Excellence</h3>
              <p className="text-parchment/70 text-sm">Flutter + Firebase integration</p>
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
            emoji="📱"
            heading="Flutter News App"
            bullets={[
              "Firebase Auth & Remote Config integration",
              "Provider state management across 5+ UI components",
              "100+ articles per request with pagination",
              "90% crash reduction through comprehensive error handling",
              "Cross-platform deployment (iOS & Android)",
            ]}
          />

          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-lg border border-blue-400/20">
            <div className="text-center">
              <div className="w-32 h-48 mx-auto bg-midnight border-2 border-blue-400/40 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-2 bg-gradient-to-b from-blue-500/20 to-purple-500/20 rounded"></div>
                <div className="text-blue-400 text-xs z-10">📱 News Feed</div>
              </div>
              <p className="text-sm text-parchment/70 mt-2">Interactive mobile preview</p>
            </div>
          </div>

          <div className="flex justify-between items-center pt-8">
            <Link
              href="/farmiculture"
              className="flex items-center gap-2 px-4 py-2 text-gold hover:text-gold/80 transition-colors border border-gold/20 rounded-lg"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous Chapter
            </Link>
            <Link
              href="/hackathon-leaps"
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
