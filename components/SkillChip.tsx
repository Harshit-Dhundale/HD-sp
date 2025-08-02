"use client"

import { motion } from "framer-motion"
import type { Skill } from "../data/skills"
import { SkillIcon } from "./SkillIcon"

interface SkillChipProps extends Skill {
  className?: string
}

export function SkillChip({ name, category, icon, yearsOfExperience, brandColor, className = "" }: SkillChipProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`group relative bg-card border border-border rounded-lg p-4 hover:shadow-lg hover:border-primary/20 transition-all duration-200 cursor-pointer ${className}`}
    >
      {/* Icon */}
      <div className="w-12 h-12 mx-auto mb-3 bg-muted/50 rounded-lg flex items-center justify-center group-hover:bg-muted/70 transition-colors">
        <SkillIcon name={name} className="w-6 h-6" brandColor={brandColor} />
      </div>

      {/* Label */}
      <h3 className="font-semibold text-center mb-1 group-hover:text-primary transition-colors">{name}</h3>

      {/* Category & Years */}
      <div className="text-center text-xs text-muted-foreground space-y-1">
        <div className="bg-muted rounded-full px-2 py-1 inline-block">{category}</div>
        <div>
          {yearsOfExperience} yr{yearsOfExperience !== 1 ? "s" : ""}
        </div>
      </div>

      {/* Proficiency Bar */}
      <div className="mt-3 w-full bg-muted rounded-full h-1.5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${Math.min(yearsOfExperience * 25, 100)}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-primary h-full rounded-full"
        />
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  )
}
