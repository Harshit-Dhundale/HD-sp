"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { skills, skillCategories } from "../data/skills"
import { SkillChip } from "./SkillChip"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", ...Array.from(new Set(skills.map((s) => s.category)))]
  const filteredSkills = activeCategory === "All"
    ? skills
    : skills.filter((s) => s.category === activeCategory)

  const stats = {
    totalSkills: skills.length,
    categories: categories.length - 1, // Exclude "All"
    avgExperience: Math.round(skills.reduce((acc, skill) => acc + skill.yearsOfExperience, 0) / skills.length),
    projects: 15, // Static count for completed projects
  }

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience, continuous learning, and real-world
            project implementation across diverse technology stacks.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto"
        >
          <div className="text-center p-4 bg-card rounded-lg border">
            <div className="text-2xl font-bold text-primary mb-1">{stats.totalSkills}</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border">
            <div className="text-2xl font-bold text-primary mb-1">{stats.categories}</div>
            <div className="text-sm text-muted-foreground">Categories</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border">
            <div className="text-2xl font-bold text-primary mb-1">{stats.avgExperience}</div>
            <div className="text-sm text-muted-foreground">Avg Experience</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border">
            <div className="text-2xl font-bold text-primary mb-1">{stats.projects}</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="transition-all duration-200"
            >
              {category}
              {category !== "All" && (
                <Badge variant="secondary" className="ml-2 text-xs">
                  {skills.filter((s) => s.category === category).length}
                </Badge>
              )}
            </Button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-16"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <SkillChip {...skill} />
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  )
}
