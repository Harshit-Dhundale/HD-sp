"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { useMounted } from "../hooks/useMounted"
import Link from "next/link"

const navItems = [
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Certifications", href: "#certifications", id: "certifications" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Contact", href: "#contact", id: "contact" },
]

export function NavClassic() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const mounted = useMounted()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const scrollPosition = window.scrollY + 150
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id)
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  if (!mounted) {
    return <div className="h-16" /> // Prevents flicker on first render
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer select-none"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center shadow-md">
                <span className="text-primary-foreground font-bold text-sm">HD</span>
              </div>
              <span className="font-bold text-lg">Harshit</span>
            </motion.div>

            {/* Desktop Nav - Centered */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center gap-1">
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    size="sm"
                    onClick={() => scrollToSection(item.id)}
                    className={`relative transition-colors px-3 py-1 ${
                      activeSection === item.id
                        ? "text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Button>
                ))}
              </div>
            </div>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Resume */}
              <Button asChild variant="outline" size="sm">
                <Link href="/resume.pdf" target="_blank">
                  Résumé
                </Link>
              </Button>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="w-9 h-9 p-0"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={theme}
                    initial={{ rotate: -180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    exit={{ rotate: 180, scale: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {theme === "dark" ? (
                      <Sun className="w-5 h-5" />
                    ) : (
                      <Moon className="w-5 h-5" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </Button>
            </div>

            {/* Mobile Buttons */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="w-9 h-9 p-0"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="w-9 h-9 p-0"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isOpen ? "close" : "open"}
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </motion.div>
                </AnimatePresence>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-background/95 backdrop-blur-lg border-b border-border shadow-md"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col gap-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full justify-start px-3 py-2 ${
                          activeSection === item.id ? "text-primary bg-primary/10" : ""
                        }`}
                      >
                        {item.label}
                      </Button>
                    </motion.div>
                  ))}

                  <div className="mt-4 pt-4 border-t border-border">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full justify-center"
                    >
                      <Link href="/resume.pdf" target="_blank">
                        View Résumé
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer */}
      <div className="h-16" />
    </>
  )
}