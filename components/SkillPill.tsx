import { Skill } from '@/data/skillsByCategory'
import { SkillIcon } from './SkillIcon'

interface SkillPillProps {
  skill: Skill
  className?: string
}

export function SkillPill({ skill, className = '' }: SkillPillProps) {
  const { name, level } = skill
  
  return (
    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-muted/30 bg-background/50 text-sm hover:ring-2 hover:ring-primary/50 transition-all duration-200 ${className}`}>
      <SkillIcon name={name} size={16} />
      <span>{name}</span>
      {level && (
        <span className="text-xs opacity-70">•</span>
      )}
    </div>
  )
}
