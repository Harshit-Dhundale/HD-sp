"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { skills, certs } from "../data/skills"
import SkillChip from "./SkillChip"
import CertBadge from "./CertBadge"

export default function SkillsSection() {
  const [filter, setFilter] = useState("All")

  const categories = ["All", ...new Set(skills.map((s) => s.cat)), "Credentials"]
  const filteredSkills =
    filter === "Credentials" ? [] : filter === "All" ? skills : skills.filter((s) => s.cat === filter)

  return (
    <section id="skills" className="section-padding py-20">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === cat ? "bg-gold text-midnight" : "bg-white/10 text-white/80 hover:bg-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {filter === "Credentials" ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
              {certs.map((cert, index) => (
                <motion.div
                  key={cert.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CertBadge {...cert} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-6xl mx-auto">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <SkillChip {...skill} />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-gold">{skills.length}</div>
            <div className="text-sm text-white/60">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold">{new Set(skills.map((s) => s.cat)).size}</div>
            <div className="text-sm text-white/60">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold">{certs.length}</div>
            <div className="text-sm text-white/60">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold">4+</div>
            <div className="text-sm text-white/60">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
