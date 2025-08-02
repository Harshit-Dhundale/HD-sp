"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface UseHashDialogProps {
  hashKey: string // e.g., "project" or "cert"
  onOpen?: (id: string) => void
  onClose?: () => void
}

export function useHashDialog({ hashKey, onOpen, onClose }: UseHashDialogProps) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState<string | null>(null)

  // Check hash on mount and URL changes
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash
      const params = new URLSearchParams(hash.slice(1))
      const id = params.get(hashKey)
      
      if (id) {
        setActiveId(id)
        setIsOpen(true)
        onOpen?.(id)
      } else {
        setIsOpen(false)
        setActiveId(null)
        onClose?.()
      }
    }

    // Check on mount
    checkHash()

    // Listen for hash changes
    window.addEventListener('hashchange', checkHash)
    return () => window.removeEventListener('hashchange', checkHash)
  }, [hashKey, onOpen, onClose])

  const openDialog = (id: string) => {
    const newHash = `${hashKey}=${id}`
    router.push(`#${newHash}`, { scroll: false })
  }

  const closeDialog = () => {
    // Remove the specific hash parameter while preserving others
    const hash = window.location.hash.slice(1)
    const params = new URLSearchParams(hash)
    params.delete(hashKey)
    
    const newHash = params.toString()
    router.push(newHash ? `#${newHash}` : window.location.pathname, { scroll: false })
  }

  return {
    isOpen,
    activeId,
    openDialog,
    closeDialog,
  }
}
