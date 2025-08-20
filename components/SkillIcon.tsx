"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { iconMap } from "@/data/iconMap"

interface SkillIconProps {
  name: string
  size?: number
  className?: string
  color?: string
}

function normalizeKey(name: string) {
  return name.toLowerCase().trim()
}

/**
 * SkillIcon: deterministic loading via iconMap manifest.
 * - Always respects NEXT_PUBLIC_USE_BRAND_COLORS at build time.
 * - Falls back to PascalCase lookup in react-icons/si if missing in manifest.
 * - Falls back to SiCircle if icon export not available.
 */
export function SkillIcon({ name, size = 24, className = "", color }: SkillIconProps) {
  const [Icon, setIcon] = useState<any>(null)
  const [brandColor, setBrandColor] = useState<string | undefined>(undefined)
  // env control only (no per-page toggle)
  const useBrand = process.env.NEXT_PUBLIC_USE_BRAND_COLORS === "true"

  useEffect(() => {
    let mounted = true
    const key = normalizeKey(name)
    const mapping = iconMap[key]

    // prefer explicit manifest mapping
    const reactExportName = mapping?.reactIcon ?? null
    const presetHex = mapping?.hex

    if (useBrand && presetHex) {
      setBrandColor(presetHex)
    }

    import("react-icons/si")
      .then((mod) => {
        // if manifest provides a preferred export, try it first
        if (reactExportName && mod[reactExportName]) {
          if (mounted) setIcon(() => mod[reactExportName])
          return
        }

        // fallback: attempt common PascalCase generation from name -> SiPascalCase
        const cleaned = key.replace(/[^a-z0-9]+/g, " ")
        const pascal = cleaned
          .split(" ")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join("")
        const generated = `Si${pascal}`

        if (mod[generated]) {
          if (mounted) setIcon(() => mod[generated])
          return
        }

        // final fallback: SiCircle if available
        if (mod.SiCircle) {
          if (mounted) setIcon(() => mod.SiCircle)
        } else {
          if (mounted) setIcon(() => () => <svg width={size} height={size} />)
        }
      })
      .catch((err) => {
        console.error("Failed to load react-icons/si", err)
        // keep Icon null (will render spacer)
      })

    return () => {
      mounted = false
    }
  }, [name, size, useBrand])

  if (!Icon) return <div style={{ width: size, height: size }} className={className} />

  // When useBrand === false, let icon use CSS currentColor (monochrome).
  const colorProp = process.env.NEXT_PUBLIC_USE_BRAND_COLORS === "true" ? brandColor || color : undefined

  return (
    <motion.span whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.96 }} className={className}>
      <Icon size={size} color={colorProp} aria-label={`${name} icon`} />
    </motion.span>
  )
}
