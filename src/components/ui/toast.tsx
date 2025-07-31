"use client"

import { useState, useEffect } from "react"

interface Toast {
  id: string
  message: string
  type: "success" | "error"
}

let toasts: Toast[] = []
let listeners: ((toasts: Toast[]) => void)[] = []

export const toast = {
  success: (message: string) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast = { id, message, type: "success" as const }
    toasts = [...toasts, newToast]
    listeners.forEach((listener) => listener(toasts))

    setTimeout(() => {
      toasts = toasts.filter((t) => t.id !== id)
      listeners.forEach((listener) => listener(toasts))
    }, 3000)
  },
  error: (message: string) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast = { id, message, type: "error" as const }
    toasts = [...toasts, newToast]
    listeners.forEach((listener) => listener(toasts))

    setTimeout(() => {
      toasts = toasts.filter((t) => t.id !== id)
      listeners.forEach((listener) => listener(toasts))
    }, 3000)
  },
}

export function Toaster() {
  const [currentToasts, setCurrentToasts] = useState<Toast[]>([])

  useEffect(() => {
    const listener = (newToasts: Toast[]) => setCurrentToasts(newToasts)
    listeners.push(listener)

    return () => {
      listeners = listeners.filter((l) => l !== listener)
    }
  }, [])

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {currentToasts.map((toast) => (
        <div
          key={toast.id}
          className={`px-4 py-2 rounded-lg shadow-lg ${
            toast.type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"
          }`}
        >
          {toast.message}
        </div>
      ))}
    </div>
  )
}
