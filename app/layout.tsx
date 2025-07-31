import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ChapterProvider } from "./context/chapter"
import { ModeProvider } from "./context/mode"
import { Toaster } from "@/components/ui/sonner"
import { ModalProvider } from "../hooks/useModal"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Harshit's Digital Storybook",
  description: "A developer's journey through code, creativity, and innovation",
  keywords: ["developer", "portfolio", "react", "nextjs", "typescript", "full-stack"],
  authors: [{ name: "Harshit" }],
  openGraph: {
    title: "Harshit's Digital Storybook",
    description: "A developer's journey through code, creativity, and innovation",
    type: "website",
    locale: "en_US",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ModalProvider>
          <ModeProvider>
            <ChapterProvider>
              {children}
              <Toaster />
            </ChapterProvider>
          </ModeProvider>
        </ModalProvider>
      </body>
    </html>
  )
}
