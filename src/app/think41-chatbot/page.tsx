"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronLeft, ChevronRight, MessageSquare, Database, Zap } from "lucide-react"
import PageSpread from "../../components/PageSpread"
import StoryCard from "../../components/StoryCard"
import TimelineBubble from "../../components/TimelineBubble"
import ParallaxLayer from "../../components/ParallaxLayer"

export default function Think41ChatbotPage() {
  return (
    <div className="relative min-h-screen bg-midnight">
      <ParallaxLayer speed={0.4} className="opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10" />
      </ParallaxLayer>

      <ParallaxLayer speed={0.6} className="opacity-30">
        <MessageSquare className="absolute top-1/4 left-1/4 w-10 h-10 text-orange-400/30" />
        <Database className="absolute bottom-1/3 right-1/4 w-8 h-8 text-red-400/30" />
        <div className="absolute top-1/2 right-1/3 text-lg">🛒</div>
      </ParallaxLayer>

      <PageSpread chapterIndex={7}>
        <motion.div
          className="prose prose-invert max-w-none"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-display text-gold mb-4">Chapter 7</h1>
            <h2 className="text-2xl md:text-3xl font-display text-parchment mb-6">Conversational Commerce</h2>
          </div>

          <TimelineBubble year="July 2025" />

          <p className="text-lg leading-relaxed text-parchment/90 mb-6">
            Handling thousands of SKU queries demands more than a chatbot veneer. For{" "}
            <strong className="text-orange-400">Think41's</strong> interview task I fused:
          </p>

          <ul className="text-parchment/90 space-y-2 mb-6 list-none">
            <li className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-orange-400" />
              <strong>FastAPI</strong> microservice – lightning Mongo aggregations
            </li>
            <li className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-orange-400" />
              <strong>Groq LLM</strong> fallback – graceful when users get fuzzy
            </li>
            <li className="flex items-center gap-2">
              <Database className="w-4 h-4 text-orange-400" />
              Docker-Compose spin-up – {"< 3 min from zero → demo"}
            </li>
          </ul>

          <p className="text-lg leading-relaxed text-parchment/90 mb-6">
            The result: customer answers in under <strong className="text-gold">600 ms</strong> on known routes, and
            human-like context when questions wander.
          </p>

          <div className="flex items-center gap-4 mt-8 p-4 bg-orange-500/10 rounded-lg border border-orange-400/20">
            <MessageSquare className="w-8 h-8 text-orange-400" />
            <div>
              <h3 className="text-orange-400 font-semibold">AI-Powered Support</h3>
              <p className="text-parchment/70 text-sm">Hybrid retrieval + LLM pipeline</p>
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
            emoji="🛒"
            heading="E-Commerce Support Bot"
            bullets={[
              "Hybrid Retrieval ➜ LLM pipeline",
              "Swagger docs auto-generated (OpenAPI)",
              "LLM temperature tuned (0.2) to stay factual",
              "Docker one-liner demo for recruiters",
            ]}
          />

          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 rounded-lg border border-orange-400/20">
            <h3 className="text-orange-400 font-display text-lg mb-3">Architecture Flow</h3>
            <div className="flex items-center justify-between text-sm text-parchment/70">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-400/20 rounded-full flex items-center justify-center mb-2">
                  <MessageSquare className="w-6 h-6 text-orange-400" />
                </div>
                <p>Query</p>
              </div>
              <div className="text-gold">→</div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center mb-2">
                  <Database className="w-6 h-6 text-blue-400" />
                </div>
                <p>MongoDB</p>
              </div>
              <div className="text-gold">→</div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center mb-2">
                  <Zap className="w-6 h-6 text-green-400" />
                </div>
                <p>LLM</p>
              </div>
            </div>
          </div>

          <div className="bg-parchment/5 p-6 rounded-lg border border-gold/20">
            <h3 className="text-gold font-display text-xl mb-3">Performance Metrics</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-orange-400 font-semibold">Response Time:</span>
                <p className="text-parchment/80">{"< 600ms"}</p>
              </div>
              <div>
                <span className="text-orange-400 font-semibold">Accuracy:</span>
                <p className="text-parchment/80">95%+ on known SKUs</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-8">
            <Link
              href="/bloq-quantum"
              className="flex items-center gap-2 px-4 py-2 text-gold hover:text-gold/80 transition-colors border border-gold/20 rounded-lg"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous Chapter
            </Link>
            <Link
              href="/water-intake-tracker"
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
