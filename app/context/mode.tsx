"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Mode = "classic" | "storybook"

interface ModeContextType {
  mode: Mode
  setMode: (mode: Mode) => void
  toggleMode: () => void
  isStorybook: boolean
  isClassic: boolean
}

const ModeContext = createContext<ModeContextType | undefined>(undefined)

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<Mode>("classic")

  // Load mode from localStorage on mount
  useEffect(() => {
    const savedMode = localStorage.getItem("portfolio-mode") as Mode
    if (savedMode && (savedMode === "classic" || savedMode === "storybook")) {
      setModeState(savedMode)
    }
  }, [])

  const setMode = (newMode: Mode) => {
    setModeState(newMode)
    localStorage.setItem("portfolio-mode", newMode)
  }

  const toggleMode = () => {
    const newMode = mode === "classic" ? "storybook" : "classic"
    setMode(newMode)
  }

  return (
    <ModeContext.Provider
      value={{
        mode,
        setMode,
        toggleMode,
        isStorybook: mode === "storybook",
        isClassic: mode === "classic",
      }}
    >
      {children}
    </ModeContext.Provider>
  )
}

export function useMode() {
  const context = useContext(ModeContext)
  if (context === undefined) {
    throw new Error("useMode must be used within a ModeProvider")
  }
  return context
}
