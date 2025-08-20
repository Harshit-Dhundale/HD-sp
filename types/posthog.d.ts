declare global {
  interface Window {
    posthog?: {
      capture: (event: string, properties?: Record<string, any>) => void
      init: (key: string, options?: any) => void
      debug: () => void
    }
  }
}

export {} 