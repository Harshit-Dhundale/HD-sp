import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ChapterProvider } from "./context/chapter"
import { ModeProvider } from "./context/mode"
import { Toaster } from "@/components/ui/sonner"
import { ModalProvider } from "../hooks/useModal"
import { ThemeProvider } from "@/components/theme-provider"
import { PostHogProvider } from "@/components/PostHogProvider"
import ModalCert from "@/components/ModalCert"

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
        {/* a11y skip-link */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <PostHogProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ModalProvider>
              <ModeProvider>
                <ChapterProvider>
                  {/* ── MAIN ─────────────────────────────────────────────── */}
                  <main id="main-content">{children}</main>

                  {/* global dialogs (one instance each) */}
                  <ModalCert />                           {/* ⬅ NEW */}

                  {/* global toasts */}
                  <Toaster />
                </ChapterProvider>
              </ModeProvider>
            </ModalProvider>
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  )
}