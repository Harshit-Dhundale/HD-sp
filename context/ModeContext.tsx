"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Mode = "classic" | "storybook"

interface ModeContextType {
  mode: Mode
  setMode: (mode: Mode) => void
  toggleMode: () => void
  isLoading: boolean
}

const ModeContext = createContext<ModeContextType | undefined>(undefined)

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>("classic")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Initialize mode from localStorage or default
    const savedMode = localStorage.getItem("portfolio-mode") as Mode
    if (savedMode && (savedMode === "classic" || savedMode === "storybook")) {
      setMode(savedMode)
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    // Save mode to localStorage whenever it changes
    localStorage.setItem("portfolio-mode", mode)
  }, [mode])

  const toggleMode = () => {
    setMode((prev) => (prev === "classic" ? "storybook" : "classic"))
  }

  const value = {
    mode,
    setMode,
    toggleMode,
    isLoading,
  }

  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>
}

export function useMode() {
  const context = useContext(ModeContext)
  if (context === undefined) {
    throw new Error(
      "useMode must be used within a ModeProvider. Make sure your component is wrapped with <ModeProvider>.",
    )
  }
  return context
}
