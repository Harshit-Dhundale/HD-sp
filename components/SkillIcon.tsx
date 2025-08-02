"use client"

import * as simpleIcons from "simple-icons"

interface SkillIconProps {
  name: string
  className?: string
  brandColor?: string
}

const iconMap: Record<string, string> = {
  vscode: "visualstudiocode",
  aws: "amazonaws",
  matplotlib: "matplotlib",
  css3: "css3",
}

export function SkillIcon({ name, className = "w-5 h-5", brandColor }: SkillIconProps) {
  const slug = iconMap[name.toLowerCase()] || name.toLowerCase()
  const key = `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}`
  const icon = (simpleIcons as any)[key]

  if (!icon) {
    const letters = name.slice(0, 2).toUpperCase()
    return (
      <div className="flex items-center justify-center w-5 h-5 border bg-muted text-[10px] font-bold text-muted-foreground rounded">
        {letters}
      </div>
    )
  }

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: icon.svg.replace(
          "<svg",
          `<svg fill="${brandColor || `#${icon.hex}`}"`,
        ),
      }}
    />
  )
}
