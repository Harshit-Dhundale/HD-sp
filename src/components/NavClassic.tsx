"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useMode } from "../context/ModeContext"
import ThemeToggle from "./ThemeToggle"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
]

export default function NavClassic() {
  const [activeSection, setActiveSection] = useState("")
  const { toggleMode } = useMode()
  const router = useRouter()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 },
    )

    navLinks.forEach(({ href }) => {
      const element = document.querySelector(href)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const handleStorybookSwitch = () => {
    toggleMode()
    router.push("/storybook")
  }

  return (
    <nav className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-white/5 bg-bg/80 backdrop-blur">
      <Link href="/" className="font-display text-gold text-xl pl-6">
        HD
      </Link>

      <ul className="hidden gap-6 md:flex">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className={`text-sm font-medium transition-colors hover:text-gold ${
                activeSection === href.slice(1) ? "text-gold" : "text-white/80"
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3 pr-6">
        <button
          onClick={handleStorybookSwitch}
          className="flex items-center gap-1 rounded-full border border-gold/60 px-3 py-0.5 text-gold text-sm hover:bg-gold/10 transition-colors"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          Storybook
        </button>
        <ThemeToggle />
      </div>
    </nav>
  )
}
