"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"

interface SkillIconProps {
  name: string
  size?: number
  className?: string
  color?: string
}

// Common aliases for icon export names in react-icons/si
const ALIASES: Record<string, string[]> = {
  react: ["SiReact"],
  "next.js": ["SiNextdotjs", "SiNextjs"],
  next: ["SiNextdotjs", "SiNextjs"],
  typescript: ["SiTypescript"],
  javascript: ["SiJavascript"],
  html5: ["SiHtml5"],
  css3: ["SiCss3"],
  "tailwind css": ["SiTailwindcss", "SiTailwind"],
  tailwindcss: ["SiTailwindcss", "SiTailwind"],
  "material ui": ["SiMui", "SiMaterialui"],
  mui: ["SiMui", "SiMaterialui"],
  redux: ["SiRedux"],
  "redux toolkit": ["SiRedux"],
  node: ["SiNodedotjs", "SiNodejs"],
  "node.js": ["SiNodedotjs", "SiNodejs"],
  express: ["SiExpress"],
  python: ["SiPython"],
  mongodb: ["SiMongodb"],
  postgresql: ["SiPostgresql"],
  mysql: ["SiMysql"],
  redis: ["SiRedis"],
  docker: ["SiDocker"],
  kubernetes: ["SiKubernetes"],
  aws: ["SiAmazonaws"],
  vercel: ["SiVercel"],
  github: ["SiGithub", "SiGit"],
  git: ["SiGit"],
  flutter: ["SiFlutter"],
  "react native": ["SiReact"],
  tensorflow: ["SiTensorflow"],
  pytorch: ["SiPytorch"],
  openai: ["SiOpenai"],
  numpy: ["SiNumpy"],
  pandas: ["SiPandas"],
  framer: ["SiFramer"],
  "framer motion": ["SiFramer"],
  cypress: ["SiCypress"],
  vitest: ["SiVitest"],
  graphql: ["SiGraphql"],
  stripe: ["SiStripe"],
  supabase: ["SiSupabase"],
  posthog: ["SiPosthog"],
  railway: ["SiRailway"],
  render: ["SiRender"],
  razorpay: ["SiRazorpay"]
}

function toAliasCandidates(name: string) {
  const key = name.toLowerCase().trim()
  if (ALIASES[key]) return ALIASES[key]
  // fallback: create PascalCase export name e.g. "Si" + PascalCase(name)
  const cleaned = key.replace(/[^a-z0-9]+/g, " ")
  const pascal = cleaned
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("")
  return [`Si${pascal}`]
}

export function SkillIcon({ name, size = 24, className = "", color }: SkillIconProps) {
  const [Icon, setIcon] = useState<any>(null)

  useEffect(() => {
    let mounted = true
    const candidates = toAliasCandidates(name)

    import("react-icons/si")
      .then((mod) => {
        for (const c of candidates) {
          if (mod[c]) {
            if (mounted) setIcon(() => mod[c])
            return
          }
        }
        // fallback to a simple circle if nothing found
        if (mod.SiCircle) {
          if (mounted) setIcon(() => mod.SiCircle)
        } else {
          if (mounted) setIcon(() => () => <svg width={size} height={size} />)
        }
      })
      .catch((err) => {
        console.error("Failed to load react-icons/si", err)
      })

    return () => {
      mounted = false
    }
  }, [name, size])

  if (!Icon) return <div style={{ width: size, height: size }} className={className} />

  return (
    <motion.span whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.96 }} className={className}>
      <Icon size={size} color={color || undefined} aria-label={`${name} icon`} />
    </motion.span>
  )
}
