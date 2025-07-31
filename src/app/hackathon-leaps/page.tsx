"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Trophy, Users } from "lucide-react"
import PageSpread from "../../components/PageSpread"
import StoryCard from "../../components/StoryCard"
import TimelineBubble from "../../components/TimelineBubble"
import ParallaxLayer from "../../components/ParallaxLayer"

export default function HackathonLeapsPage() {
  return (
    <div className="relative min-h-screen bg-midnight">
      <ParallaxLayer speed={0.7} className="opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />
      </ParallaxLayer>

      <ParallaxLayer speed={0.4} className="opacity-30">
        <Trophy className="absolute top-1/4 left-1/4 w-10 h-10 text-purple-400/30" />
        <div className="absolute bottom-1/3 right-1/4 px-2 py-1 bg-purple-400/20 rounded text-xs text-purple-400">
          #48Hours
        </div>
        <Users className="absolute top-1/2 right-1/3 w-8 h-8 text-pink-400/30" />
      </ParallaxLayer>

      <PageSpread chapterIndex={5}>
        <motion.div
          className="prose prose-invert max-w-none"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-display text-gold mb-4">Chapter 5</h1>
            <h2 className="text-2xl md:text-3xl font-display text-parchment mb-6">Hackathons & High-Velocity Wins</h2>
          </div>

          <TimelineBubble year="2024 – 2025" />

          <p className="text-lg leading-relaxed text-parchment/90 mb-6">
            Sleep was overrated, caffeine abundant. <em>Hackathon halls</em> echoed with clattering keyboards and
            impromptu stand-ups. In <strong className="text-gold">48 hours</strong> we morphed ideas into demos, demos
            into podium finishes.
          </p>

          <p className="text-lg leading-relaxed text-parchment/90 mb-6">
            My proudest sprint: <strong className="text-purple-400">STOCKLY</strong>—a unified retail suite with a
            real-time inventory dashboard, voice assistant, Telegram bot, and B2C marketplace. Chosen{" "}
            <em>Best Performer</em> among 150+ teams at <strong className="text-gold">SolVIT 2025</strong>, it proved
            speed ≠ corners-cut when foundations are solid.
          </p>

          <div className="flex items-center gap-4 mt-8 p-4 bg-purple-500/10 rounded-lg border border-purple-400/20">
            <Trophy className="w-8 h-8 text-purple-400" />
            <div>
              <h3 className="text-purple-400 font-semibold">Victory Streak</h3>
              <p className="text-parchment/70 text-sm">1st place among 150+ teams</p>
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
            emoji="🏆"
            heading="SolVIT Hackathon • STOCKLY"
            bullets={[
              "Real-time inventory via WebSocket feed (≤200 ms)",
              "Voice-assistant commands (NLP.js)",
              "Telegram bot: /stock ⚡ instant SKU checks",
              "Scored 1st place • 150+ teams",
            ]}
          />

          <StoryCard
            emoji="📈"
            heading="Stockify • Virtual Trading"
            bullets={[
              "Live NSE data with Fyers API",
              "Risk mgmt: VaR, stop-loss triggers",
              "SPA—holdings auto-refresh every 3 s",
            ]}
          />

          <StoryCard
            emoji="⚡"
            heading="Eva • AI Assistant"
            bullets={[
              "Natural language processing pipeline",
              "Multi-modal input handling",
              "Context-aware response generation",
            ]}
          />

          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-lg border border-purple-400/20">
            <h3 className="text-purple-400 font-display text-xl mb-3">The Hackathon Mindset</h3>
            <p className="text-parchment/80 italic">
              "48 hours to prove an idea. No time for perfect code, but every line had to count. Speed with purpose."
            </p>
          </div>

          <div className="flex justify-between items-center pt-8">
            <Link
              href="/news-app"
              className="flex items-center gap-2 px-4 py-2 text-gold hover:text-gold/80 transition-colors border border-gold/20 rounded-lg"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous Chapter
            </Link>
            <Link
              href="/bloq-quantum"
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
