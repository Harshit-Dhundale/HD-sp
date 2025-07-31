"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Atom, Zap } from "lucide-react"
import PageSpread from "../../components/PageSpread"
import StoryCard from "../../components/StoryCard"
import TimelineBubble from "../../components/TimelineBubble"
import ParallaxLayer from "../../components/ParallaxLayer"
import EasterEggLink from "../../components/EasterEggLink"

export default function BloqQuantumPage() {
  return (
    <div className="relative min-h-screen bg-midnight">
      <ParallaxLayer speed={0.5} className="opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />
      </ParallaxLayer>

      <ParallaxLayer speed={0.6} className="opacity-30">
        <Atom className="absolute top-1/4 left-1/4 w-12 h-12 text-cyan-400/30" />
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-cyan-400/40 rounded-full animate-pulse" />
        <Zap className="absolute top-1/2 right-1/3 w-8 h-8 text-blue-400/30" />
      </ParallaxLayer>

      <PageSpread chapterIndex={6}>
        <motion.div
          className="prose prose-invert max-w-none"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-display text-gold mb-4">Chapter 6</h1>
            <h2 className="text-2xl md:text-3xl font-display text-parchment mb-6">Quantum Circuits & Edge Cases</h2>
          </div>

          <TimelineBubble year="July 2025" />

          <p className="text-lg leading-relaxed text-parchment/90 mb-6">
            I entered Bloq Quantum's interview <em>dragging virtual gates on a grid</em>. They spotted an unhandled edge
            case— <strong className="text-cyan-400">What if a gate expands near the layout's edge?</strong>
          </p>

          <p className="text-lg leading-relaxed text-parchment/90 mb-6">
            That night, I fixed it, pushed to GitHub, redeployed, and sent a polite follow-up email.{" "}
            <em>Attention to detail</em> matters when qubits (and careers) are at stake.
          </p>

          <div className="flex items-center gap-4 mt-8 p-4 bg-cyan-500/10 rounded-lg border border-cyan-400/20">
            <Atom className="w-8 h-8 text-cyan-400" />
            <div>
              <h3 className="text-cyan-400 font-semibold">Quantum Computing</h3>
              <p className="text-parchment/70 text-sm">Drag & drop circuit builder</p>
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
            emoji="🔬"
            heading="Quantum Circuit Builder"
            bullets={[
              "React + Tailwind drag-&-drop grid",
              "Dynamic gate width collision algo",
              "Edge-case fix delivered post-interview",
              "Live demo hosted on Vercel",
            ]}
          >
            <div className="mt-4">
              <EasterEggLink
                href="https://bloq-quantum-circuit.vercel.app"
                className="text-link-hover hover:underline text-sm"
              >
                🔗 Try the Circuit Builder
              </EasterEggLink>
            </div>
          </StoryCard>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 rounded-lg border border-cyan-400/20">
            <div className="grid grid-cols-4 gap-2 mb-4">
              {/* Quantum gate visualization */}
              <div className="h-8 bg-cyan-400/20 rounded flex items-center justify-center text-xs text-cyan-400">H</div>
              <div className="h-8 bg-blue-400/20 rounded flex items-center justify-center text-xs text-blue-400">X</div>
              <div className="h-8 bg-cyan-400/20 rounded flex items-center justify-center text-xs text-cyan-400">Y</div>
              <div className="h-8 bg-blue-400/20 rounded flex items-center justify-center text-xs text-blue-400">Z</div>
            </div>
            <p className="text-sm text-parchment/70 text-center">Interactive quantum gate placement</p>
          </div>

          <div className="bg-parchment/5 p-6 rounded-lg border border-gold/20">
            <h3 className="text-gold font-display text-xl mb-3">The Follow-Up</h3>
            <p className="text-parchment/80 italic">
              "Found the edge case, fixed it overnight, and deployed the solution. Sometimes the interview continues
              after you leave the room."
            </p>
          </div>

          <div className="flex justify-between items-center pt-8">
            <Link
              href="/hackathon-leaps"
              className="flex items-center gap-2 px-4 py-2 text-gold hover:text-gold/80 transition-colors border border-gold/20 rounded-lg"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous Chapter
            </Link>
            <Link
              href="/think41-chatbot"
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
