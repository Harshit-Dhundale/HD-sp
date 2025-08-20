"use client"

import { useEffect, useState } from "react"

interface PostHogProviderProps {
  children: React.ReactNode
}

export function PostHogProvider({ children }: PostHogProviderProps) {
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Only initialize PostHog on the client side
    if (typeof window !== "undefined" && !window.posthog) {
      import("posthog-js")
        .then((ph) => {
          // Initialize PostHog with your project key
          // Replace with your actual PostHog project key
          const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY || "your-posthog-key"
          const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com"
          
          if (POSTHOG_KEY && POSTHOG_KEY !== "your-posthog-key") {
            ph.default.init(POSTHOG_KEY, {
              api_host: POSTHOG_HOST,
              loaded: (posthog) => {
                if (process.env.NODE_ENV === 'development') {
                  posthog.debug()
                }
              },
              capture_pageview: false, // Disable automatic pageview capture
              capture_pageleave: false, // Disable automatic pageleave capture
            })
          }
          setIsInitialized(true)
        })
        .catch((error) => {
          console.error("Failed to initialize PostHog:", error)
          setIsInitialized(true) // Still mark as initialized to prevent blocking
        })
    } else {
      setIsInitialized(true)
    }
  }, [])

  // Show children immediately, don't wait for PostHog
  return <>{children}</>
} 