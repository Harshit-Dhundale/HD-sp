"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
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
        <ThemeToggle />
      </div>
    </nav>
  )
}
