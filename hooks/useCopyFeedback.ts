"use client"

import { useState, useCallback } from "react"
import { toast } from "sonner"

interface UseCopyFeedbackOptions {
  successMessage?: string
  errorMessage?: string
  animationDuration?: number
}

export function useCopyFeedback(options: UseCopyFeedbackOptions = {}) {
  const [isAnimating, setIsAnimating] = useState(false)
  
  const {
    successMessage = "Copied to clipboard ✅",
    errorMessage = "Failed to copy to clipboard",
    animationDuration = 400
  } = options

  const copyToClipboard = useCallback(async (text: string) => {
    try {
      // Trigger animation
      setIsAnimating(true)
      
      // Copy to clipboard
      await navigator.clipboard.writeText(text)
      
      // Show success toast
      toast.success(successMessage, {
        duration: 2000
      })
      
      // Reset animation after duration
      setTimeout(() => {
        setIsAnimating(false)
      }, animationDuration)
      
      return true
    } catch (error) {
      console.error("Copy failed:", error)
      
      // Show error toast
      toast.error(errorMessage, {
        duration: 3000
      })
      
      // Reset animation
      setIsAnimating(false)
      
      return false
    }
  }, [successMessage, errorMessage, animationDuration])

  return {
    copyToClipboard,
    isAnimating
  }
} 