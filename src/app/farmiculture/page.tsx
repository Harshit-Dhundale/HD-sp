"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import PageSpread from "../../components/PageSpread"
import StoryCard from "../../components/StoryCard"
import TimelineBubble from "../../components/TimelineBubble"
import ParallaxLayer from "../../components/ParallaxLayer"
import EasterEggLink from "../../components/EasterEggLink"

export default function FarmiculturePage() {
  return (
    <div className="relative min-h-screen">
      <ParallaxLayer speed={0.4} className="opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-gold/10" />
      </ParallaxLayer>

      <ParallaxLayer speed={0.6} className="opacity-20">
        <div className="absolute top-1/4 left-1/4 text-4xl">🌾</div>
        <div className="absolute bottom-1/3 right-1/4 text-3xl">☁️</div>
        <div className="absolute top-1/2 right-1/3 text-2xl">🚜</div>
      </ParallaxLayer>

      <PageSpread chapterIndex={3}>
        <motion.div
          className="prose prose-invert max-w-none"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-display text-gold mb-6">Chapter 3: Cultivating Solutions</h2>

          <TimelineBubble year="March 2025" />

          <p className="text-lg leading-relaxed text-parchment/90 mb-6">
            Real farmers face real challenges—unpredictable weather, pest outbreaks, market volatility. FarmiCulture
            emerged from understanding that technology should serve those who feed us. With a dataset of{" "}
            <strong>90,000+ records</strong>, we achieved <strong>92-95% AI accuracy</strong> across crop
            recommendations.
          </p>

          <p className="text-lg leading-relaxed text-parchment/90">
            This wasn't just another CRUD app. Multi-tenant architecture, JWT authentication, Redis-backed OTP
            verification, and Docker-containerized Python microservices created a platform that scales with farming
            communities.
          </p>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <StoryCard
            emoji="🌾"
            heading="FarmiCulture Platform"
            bullets={[
              "Multi-tenant farm dashboard (JWT, Redis OTP)",
              "AI micro-services: Naive Bayes, Random Forest, CNN",
              "E-commerce with Razorpay + node-cron delivery polling",
              "Dockerised, CI/CD → Render + Vercel",
            ]}
          >
            <div className="mt-4 flex gap-4 text-sm">
              <EasterEggLink href="https://farmi-culture.vercel.app" className="text-link-hover hover:underline">
                🌱 Live Demo
              </EasterEggLink>
              <EasterEggLink
                href="https://github.com/Harshit-Dhundale/farmiculture"
                className="text-link-hover hover:underline"
              >
                📦 GitHub Repo
              </EasterEggLink>
            </div>
          </StoryCard>

          <div className="flex justify-between items-center pt-8">
            <Link
              href="/orchid-internship"
              className="flex items-center gap-2 px-4 py-2 text-gold hover:text-gold/80 transition-colors border border-gold/20 rounded-lg"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous Chapter
            </Link>
            <Link
              href="/news-app"
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
