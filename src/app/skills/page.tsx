"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import PageSpread from "../../components/PageSpread"

const skillCategories: { [key: string]: string[] } = {
  All: [],
  Languages: ["Python", "Java", "C++", "JavaScript", "TypeScript", "Dart"],
  "Front-End": ["React", "Next.js", "Tailwind", "shadcn/ui", "Framer Motion", "Flutter"],
  "Back-End": ["Node.js", "Express", "FastAPI", "Flask", "GraphQL", "gRPC"],
  Databases: ["MongoDB", "PostgreSQL", "Redis", "MySQL", "DynamoDB", "Supabase"],
  DevOps: ["Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Vite", "Fly.io"],
  Cloud: ["AWS", "GCP", "Render", "Vercel", "Railway"],
  Testing: ["Selenium", "Jest", "PyTest", "Postman", "Robot Framework"],
  "ML/AI": ["TensorFlow", "PyTorch", "HuggingFace", "Gemini", "LangChain"],
}

const allSkills: string[] = Object.values(skillCategories).flat().filter(Boolean) as string[]
const uniqueSkills: string[] = [...new Set(allSkills)]

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredSkills: string[] =
    activeCategory === "All" ? uniqueSkills : (skillCategories[activeCategory as keyof typeof skillCategories] as string[])

  return (
    <div className="relative min-h-screen">
      <PageSpread chapterIndex={10}>
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl font-display text-gold mb-6">The Toolkit</h2>

          <p className="text-lg leading-relaxed text-parchment/90 mb-6">
            Breadth and depth aren't mutually exclusive. Each technology in my arsenal serves a purpose—from rapid
            prototyping to production-scale deployment.
          </p>

          <p className="text-lg leading-relaxed text-parchment/90">
            This collection represents years of hands-on experience, late-night debugging sessions, and the joy of
            finding the right tool for each challenge.
          </p>

          <div className="mt-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-2xl font-display text-gold"
              >
                Total tools mastered: {uniqueSkills.length}
              </motion.div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {Object.keys(skillCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  activeCategory === category
                    ? "bg-gold text-midnight"
                    : "bg-parchment/10 text-parchment hover:bg-parchment/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-h-96 overflow-y-auto">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group relative"
              >
                <div
                  className="px-3 py-2 bg-parchment/10 border border-gold/20 rounded-lg text-center text-sm hover:-translate-y-1 hover:shadow-card transition-all cursor-pointer"
                  data-category={Object.keys(skillCategories).find((cat) =>
                    skillCategories[cat as keyof typeof skillCategories].includes(skill),
                  )}
                >
                  <div className="text-gold font-medium">{skill}</div>

                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-midnight border border-gold/40 rounded text-xs text-parchment opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                    {skill} • {Math.floor(Math.random() * 4) + 1} yr
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-between items-center pt-8">
            <Link
              href="/forward-vision"
              className="flex items-center gap-2 px-4 py-2 text-gold hover:text-gold/80 transition-colors border border-gold/20 rounded-lg"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous Chapter
            </Link>
            <Link
              href="/bookshelf"
              className="flex items-center gap-2 px-4 py-2 bg-gold text-midnight hover:bg-gold/90 transition-colors rounded-lg font-semibold"
            >
              Bookshelf
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </PageSpread>
    </div>
  )
}
