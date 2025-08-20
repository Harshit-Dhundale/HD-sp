"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { useRouter } from "next/navigation"

interface UseHashDialogProps {
  hashKey: string
  onOpen?: (id: string) => void
  onClose?: () => void
}

/* -------------------------------------------------------------------------- */
/*  SINGLE SOURCE OF TRUTH FOR HASH-DRIVEN DIALOGS                            */
/* -------------------------------------------------------------------------- */

export function useHashDialog({
  hashKey,
  onOpen,
  onClose,
}: UseHashDialogProps) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState<string | null>(null)
  const lastId = useRef<string | null>(null)
  const isUpdatingHash = useRef(false)

  // Debug logging in development
  const debug = process.env.NODE_ENV === 'development'

  /* Reads current hash → state  */
  const syncFromHash = useCallback(() => {
    // Skip if we're in the middle of updating the hash
    if (isUpdatingHash.current) {
      if (debug) console.log(`[${hashKey}] Skipping sync - hash update in progress`)
      return
    }

    const params = new URLSearchParams(window.location.hash.slice(1))
    const id = params.get(hashKey)

    if (debug) console.log(`[${hashKey}] syncFromHash:`, { hash: window.location.hash, id, isOpen })

    if (id) {
      if (lastId.current !== id) {
        if (debug) console.log(`[${hashKey}] Opening dialog for:`, id)
        onOpen?.(id)
      }
      setIsOpen(true)
      setActiveId(id)
      lastId.current = id
    } else {
      if (isOpen) {
        if (debug) console.log(`[${hashKey}] Closing dialog`)
        onClose?.()
      }
      setIsOpen(false)
      setActiveId(null)
      lastId.current = null
    }
  }, [hashKey, onOpen, onClose, isOpen, debug])

  /* ---------------------------------------------------------------------- */
  /*  Listen for hash-change events with proper cleanup                      */
  /* ---------------------------------------------------------------------- */
  useEffect(() => {
    /* initial mount */
    if (debug) console.log(`[${hashKey}] useHashDialog mounted`)
    syncFromHash()

    /* single event listener for hash changes */
    const handleHashChange = () => {
      if (debug) console.log(`[${hashKey}] Hash change detected:`, window.location.hash)
      // Small delay to ensure router state is updated
      setTimeout(syncFromHash, 0)
    }

    window.addEventListener("hashchange", handleHashChange)

    return () => {
      if (debug) console.log(`[${hashKey}] useHashDialog unmounting`)
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [syncFromHash, hashKey, debug])

  /* ---------------------------------------------------------------------- */
  /*  Helpers                                                                */
  /* ---------------------------------------------------------------------- */
  const openDialog = useCallback((id: string) => {
    if (debug) console.log(`[${hashKey}] openDialog called with:`, id)
    
    /* optimistic UI – show immediately */
    setIsOpen(true)
    setActiveId(id)
    onOpen?.(id)
    lastId.current = id

    /* push new hash with proper timing */
    const newHash = `${hashKey}=${id}`
    if (window.location.hash !== `#${newHash}`) {
      isUpdatingHash.current = true
      
      if (debug) console.log(`[${hashKey}] Updating hash to:`, newHash)
      router.replace(`#${newHash}`, { scroll: false })
      
      // Ensure hash is updated and event is fired after router completes
      setTimeout(() => {
        // Double-check hash was actually updated
        if (window.location.hash !== `#${newHash}`) {
          if (debug) console.log(`[${hashKey}] Router didn't update hash, using fallback`)
          // Fallback: manually update hash if router didn't
          window.location.hash = newHash
        }
        
        // Dispatch synthetic event to ensure all listeners are notified
        if (debug) console.log(`[${hashKey}] Dispatching synthetic hashchange event`)
        window.dispatchEvent(new HashChangeEvent("hashchange", {
          oldURL: window.location.href,
          newURL: window.location.href
        }))
        
        isUpdatingHash.current = false
      }, 10) // Small delay to ensure router operation completes
    } else {
      if (debug) console.log(`[${hashKey}] Hash already correct, no update needed`)
    }
  }, [hashKey, router, onOpen, debug])

  const closeDialog = useCallback(() => {
    if (debug) console.log(`[${hashKey}] closeDialog called`)
    
    setIsOpen(false)
    setActiveId(null)
    onClose?.()
    lastId.current = null

    const params = new URLSearchParams(window.location.hash.slice(1))
    params.delete(hashKey)
    
    isUpdatingHash.current = true
    
    const newUrl = params.toString() ? `#${params}` : window.location.pathname
    if (debug) console.log(`[${hashKey}] Updating hash to:`, newUrl)
    router.replace(newUrl, { scroll: false })
    
    // Ensure hash is updated and event is fired after router completes
    setTimeout(() => {
      // Dispatch synthetic event to ensure all listeners are notified
      if (debug) console.log(`[${hashKey}] Dispatching synthetic hashchange event for close`)
      window.dispatchEvent(new HashChangeEvent("hashchange", {
        oldURL: window.location.href,
        newURL: window.location.href
      }))
      
      isUpdatingHash.current = false
    }, 10)
  }, [hashKey, router, onClose, debug])

  return { isOpen, activeId, openDialog, closeDialog }
}
