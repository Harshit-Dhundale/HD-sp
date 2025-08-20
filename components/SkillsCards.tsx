'use client'

import { skillsByCategory } from '@/data/skillsByCategory'
import { SkillPill } from './SkillPill'

const cardOrder = ['frontend', 'backend', 'ml', 'dl', 'others']

export default function SkillsCards() {
  return (
    <section id="skills" className="py-24">
      <div className="text-center mb-10 space-y-2">
        <h2 className="text-4xl font-bold">Skills</h2>
        <p className="text-muted-foreground">
          Here are some of my core technologies and toolsets.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {cardOrder.map((cat, index) => (
          <div
            key={cat}
            className={`border-2 border-violet-600/70 rounded-xl p-6 shadow-[0_0_20px_-5px_theme(colors.violet.600)] bg-card/70 ${
              cat === 'others' && cardOrder.length % 2 !== 0 ? 'lg:col-span-2' : ''
            }`}
          >
            <h3 className="text-xl font-semibold mb-4 text-center capitalize">
              {categoryLabel(cat)}
            </h3>

            <div className="flex flex-wrap gap-3 justify-center">
              {skillsByCategory[cat]?.map(skill => (
                <SkillPill key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function categoryLabel(key: string) {
  const map: Record<string, string> = {
    frontend: 'Frontend',
    backend: 'Backend',
    ml: 'Machine Learning',
    dl: 'Deep Learning',
    others: 'Others'
  }
  return map[key] ?? key
}
