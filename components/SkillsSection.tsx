'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as Tabs from '@radix-ui/react-tabs'
import * as Tooltip from '@radix-ui/react-tooltip'
import type { Skill, SkillCategory } from '@/data/skillsByCategory'
import { skillCategories, skills } from '@/data/skillsByCategory'
import { SkillIcon } from './SkillIcon'
import { useMediaQuery } from '@/hooks/use-media-query'

const levelColors = {
  'Core': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  'Advanced': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'Familiar': 'bg-amber-500/20 text-amber-300 border-amber-500/30'
} as const

const allCategory: SkillCategory = {
  id: 'all',
  label: 'All Skills',
  description: 'Complete overview of my technical expertise across all domains'
}

type SkillCardProps = {
  name: string
  level?: 'Core' | 'Advanced' | 'Familiar'
  compact?: boolean
  category?: string
}

function SkillCard({ name, level, compact, category }: SkillCardProps) {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <motion.div
            whileHover={{ y: -2 }}
            className={`flex ${compact ? 'flex-row items-center gap-3' : 'flex-col items-center gap-2'} 
              p-3 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-colors`}
          >
            <SkillIcon name={name} size={compact ? 24 : 32} />
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">{name}</span>
              {level && !compact && (
                <span 
                  className={`text-xs px-2 py-0.5 rounded-full border ${
                    levelColors[level]
                  }`}
                >
                  {level}
                </span>
              )}
              {category && compact && (
                <span className="text-xs text-muted-foreground">
                  {category}
                </span>
              )}
            </div>
          </motion.div>
        </Tooltip.Trigger>
        <Tooltip.Content
          className="bg-popover px-3 py-1.5 text-sm rounded-lg border shadow-md animate-in fade-in-0 zoom-in-95"
          sideOffset={5}
        >
          {level} proficiency in {name}
          {category && ` (${category})`}
          <Tooltip.Arrow className="fill-popover" />
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('all')
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const categories = [allCategory, ...skillCategories]

  const renderSkillGrid = (categoryId: string, compact: boolean = false) => {
    if (categoryId === 'all') {
      // Grouped, compact, and non-scrolling layout for All view
      return (
        <div className="space-y-6">
          {skillCategories.map((cat) => (
            <div key={cat.id}>
              <h3 className="text-lg font-semibold mb-3 text-muted-foreground">{cat.label}</h3>
              <div className="flex flex-wrap gap-3">
                {skills
                  .filter((s) => s.category === cat.id)
                  .map((s) => (
                    <div key={s.name} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
                      <SkillCard {...s} compact />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      )
    }

    const categorySkills = skills.filter((skill) => skill.category === categoryId)
    return (
      <div className={`grid gap-4 ${compact ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'}`}>
        {categorySkills.map((skill) => (
          <SkillCard key={skill.name} {...skill} compact={compact} />
        ))}
      </div>
    )
  }

  return (
    <section id="skills" className="py-24 container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 space-y-4"
      >
        <h2 className="text-4xl font-bold">My Tech Stack</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A curated selection of tools and technologies I wield to build robust, innovative solutions
        </p>
      </motion.div>

      <Tabs.Root
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <Tabs.List 
          className="flex overflow-x-auto scrollbar-hide justify-start md:justify-center gap-2 mb-8 pb-2 md:pb-0"
          aria-label="Filter skills by category"
        >
          {categories.map((category: SkillCategory) => (
            <Tabs.Trigger
              key={category.id}
              value={category.id}
              className={`px-4 py-2 rounded-full transition-colors whitespace-nowrap ${
                activeTab === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted'
              }`}
            >
              {category.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        <div className="max-h-[70vh] overflow-y-auto rounded-lg px-1 scrollbar-thin scrollbar-track-background scrollbar-thumb-muted-foreground/20">
          {categories.map((category: SkillCategory) => (
            <Tabs.Content
              key={category.id}
              value={category.id}
              className="outline-none"
            >
              <AnimatePresence mode="wait" initial={false}>
                {activeTab === category.id && (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-center text-muted-foreground mb-8">
                      {category.description}
                    </p>
                    {renderSkillGrid(category.id, category.id === 'all')}
                  </motion.div>
                )}
              </AnimatePresence>
            </Tabs.Content>
          ))}
        </div>
      </Tabs.Root>
    </section>
  )
}
