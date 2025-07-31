"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Droplets, Calendar, TrendingUp } from "lucide-react"
import PageSpread from "../../components/PageSpread"
import StoryCard from "../../components/StoryCard"
import TimelineBubble from "../../components/TimelineBubble"
import ParallaxLayer from "../../components/ParallaxLayer"

export default function WaterIntakeTrackerPage() {
  return (
    <div className="relative min-h-screen bg-midnight">
      <ParallaxLayer speed={0.3} className="opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />
      </ParallaxLayer>

      <ParallaxLayer speed={0.5} className="opacity-30">
        <Droplets className="absolute top-1/4 left-1/4 w-10 h-10 text-blue-400/30" />
        <div className="absolute bottom-1/3 right-1/4 text-2xl">💧</div>
        <div className="absolute top-1/2 right-1/3 text-xl">🥤</div>
      </ParallaxLayer>

      <PageSpread chapterIndex={8}>
        <motion.div
          className="prose prose-invert max-w-none"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-display text-gold mb-4">Chapter 8</h1>
            <h2 className="text-2xl md:text-3xl font-display text-parchment mb-6">Small Habits, Big Impact</h2>
          </div>

          <TimelineBubble year="June - July 2025" />

          <p className="text-lg leading-relaxed text-parchment/90 mb-6">
            What started as a 3-hour hiring prompt evolved into a full product. The Water Intake Tracker proved that
            even simple ideas deserve thoughtful execution—timezone-aware streak logic, demo-mode anonymous accounts,
            and CSV export features.
          </p>

          <p className="text-lg leading-relaxed text-parchment/90 mb-6">
            Sometimes the smallest applications teach the biggest lessons about user experience and data persistence.
          </p>

          <div className="flex items-center gap-4 mt-8 p-4 bg-blue-500/10 rounded-lg border border-blue-400/20">
            <Droplets className="w-8 h-8 text-blue-400" />
            <div>
              <h3 className="text-blue-400 font-semibold">Hydration Gamification</h3>
              <p className="text-parchment/70 text-sm">Building healthy habits through tech</p>
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
            emoji="💧"
            heading="Hydration Gamification"
            bullets={[
              "Next.js App Router + TypeScript",
              "Time-zone aware streak logic",
              "Demo-mode anon accounts auto-purge",
              "CSV & JSON export feature-flag",
            ]}
          />

          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-6 rounded-lg border border-blue-400/20">
            <h3 className="text-blue-400 font-display text-lg mb-4">Daily Progress Visualization</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-parchment/70">Today's Goal</span>
                <span className="text-blue-400 font-semibold">8 glasses</span>
              </div>
              <div className="w-full bg-midnight rounded-full h-3 border border-blue-400/20">
                <div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-full rounded-full w-3/4"></div>
              </div>
              <div className="flex justify-between text-xs text-parchment/60">
                <span>6/8 completed</span>
                <span>75%</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-parchment/5 rounded-lg border border-gold/20">
              <Calendar className="w-6 h-6 text-gold mx-auto mb-2" />
              <div className="text-gold font-semibold">7</div>
              <div className="text-xs text-parchment/70">Day Streak</div>
            </div>
            <div className="text-center p-4 bg-parchment/5 rounded-lg border border-blue-400/20">
              <Droplets className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <div className="text-blue-400 font-semibold">2.1L</div>
              <div className="text-xs text-parchment/70">Today</div>
            </div>
            <div className="text-center p-4 bg-parchment/5 rounded-lg border border-green-400/20">
              <TrendingUp className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <div className="text-green-400 font-semibold">85%</div>
              <div className="text-xs text-parchment/70">Weekly Avg</div>
            </div>
          </div>

          <div className="bg-parchment/5 p-6 rounded-lg border border-gold/20">
            <h3 className="text-gold font-display text-xl mb-3">The Lesson</h3>
            <p className="text-parchment/80 italic">
              "Simple doesn't mean easy. The most elegant solutions often hide the most complex thinking."
            </p>
          </div>

          <div className="flex justify-between items-center pt-8">
            <Link
              href="/think41-chatbot"
              className="flex items-center gap-2 px-4 py-2 text-gold hover:text-gold/80 transition-colors border border-gold/20 rounded-lg"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous Chapter
            </Link>
            <Link
              href="/forward-vision"
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
