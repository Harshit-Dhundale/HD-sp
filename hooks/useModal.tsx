"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

interface ModalContextType {
  isOpen: boolean
  openModal: (content: React.ReactNode) => void
  closeModal: () => void
  content: React.ReactNode
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState<React.ReactNode>(null)

  const openModal = (modalContent: React.ReactNode) => {
    setContent(modalContent)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setContent(null)
  }

  return <ModalContext.Provider value={{ isOpen, openModal, closeModal, content }}>{children}</ModalContext.Provider>
}

export function useModal() {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider")
  }
  return context
}
