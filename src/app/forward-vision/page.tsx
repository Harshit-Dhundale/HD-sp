"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Rocket, Target, Users, BookOpen } from "lucide-react"
import PageSpread from "../../components/PageSpread"
import StoryCard from "../../components/StoryCard"
import TimelineBubble from "../../components/TimelineBubble"
import ParallaxLayer from "../../components/ParallaxLayer"

export default function ForwardVisionPage() {
  return (
    <div className="relative min-h-screen bg-midnight">
      <ParallaxLayer speed={0.2} className="opacity-20">
        <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent" />
      </ParallaxLayer>

      <ParallaxLayer speed={0.4} className="opacity-30">
        <Rocket className="absolute top-1/4 left-1/4 w-10 h-10 text-pink-400/30" />
        <div className="absolute bottom-1/3 right-1/4 text-xl">🌅</div>
        <Target className="absolute top-1/2 right-1/3 w-8 h-8 text-gold/30" />
      </ParallaxLayer>

      <PageSpread chapterIndex={9}>
        <motion.div
          className="prose prose-invert max-w-none"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-display text-gold mb-4">Chapter 9</h1>
            <h2 className="text-2xl md:text-3xl font-display text-parchment mb-6">Forward Vision</h2>
          </div>

          <TimelineBubble year="2026 & Beyond" />

          <p className="text-lg leading-relaxed text-parchment/90 mb-6">
            The journey continues beyond these pages. My roadmap includes mastering distributed systems with Rust
            microservices, building AI agents with RAG capabilities, and earning my AWS Solutions Architect
            certification.
          </p>

          <p className="text-lg leading-relaxed text-parchment/90 mb-6">
            But technical growth is only half the story. I'm committed to writing technical blogs, speaking at
            conferences, and mentoring junior developers—because the best way to solidify knowledge is to share it.
          </p>

          <div className="flex items-center gap-4 mt-8 p-4 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-lg border border-pink-400/20">
            <Rocket className="w-8 h-8 text-pink-400" />
            <div>
              <h3 className="text-pink-400 font-semibold">The Next Chapter</h3>
              <p className="text-parchment/70 text-sm">Where ambition meets opportunity</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <StoryCard
            emoji="📡"
            heading="Distributed Systems"
            bullets={["Rust microservices with gRPC", "NATS message streaming", "Event-driven architectures"]}
          />

          <StoryCard
            emoji="🚀"
            heading="ML Ops"
            bullets={["Kubeflow pipeline orchestration", "Vertex AI model deployment", "MLflow experiment tracking"]}
          />

          <StoryCard
            emoji="✍️"
            heading="Dev Advocacy"
            bullets={["Technical blog writing", "Conference CFP submissions", "Junior developer mentoring"]}
          />

          <div className="bg-gradient-to-r from-gold/10 to-pink-400/10 p-6 rounded-lg border border-gold/20">
            <h3 className="text-gold font-display text-xl mb-4">2026 Goals</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-gold" />
                <span className="text-parchment/80">AWS Solutions Architect</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-pink-400" />
                <span className="text-parchment/80">Tech Blog Launch</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-400" />
                <span className="text-parchment/80">Conference Speaking</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="w-4 h-4 text-green-400" />
                <span className="text-parchment/80">Open Source Contrib</span>
              </div>
            </div>
          </div>

          <div className="bg-parchment/5 p-6 rounded-lg border border-gold/20">
            <h3 className="text-gold font-display text-xl mb-3">The Vision</h3>
            <p className="text-parchment/80 italic">
              "Technology should amplify human potential. My mission is to build systems that don't just work—they
              inspire."
            </p>
          </div>

          <div className="flex justify-between items-center pt-8">
            <Link
              href="/water-intake-tracker"
              className="flex items-center gap-2 px-4 py-2 text-gold hover:text-gold/80 transition-colors border border-gold/20 rounded-lg"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous Chapter
            </Link>
            <Link
              href="/bookshelf"
              className="flex items-center gap-2 px-4 py-2 bg-gold text-midnight hover:bg-gold/90 transition-colors rounded-lg font-semibold"
            >
              Complete Collection
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </PageSpread>
    </div>
  )
}
