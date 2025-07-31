import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import { ModeProvider } from "../context/ModeContext"
import { ChapterProvider } from "../context/ChapterContext"
import "../styles/globals.css"

export const metadata: Metadata = {
  title: "Harshit Dhundale - Full-Stack Developer & ML Enthusiast",
  description:
    "Interactive portfolio showcasing my journey as a Full-Stack Developer, Software Engineer, and ML enthusiast. Crafting reliable web & AI solutions.",
  keywords: "Full-Stack Developer, Software Engineer, ML Engineer, React, Node.js, Python, AWS, Portfolio",
  authors: [{ name: "Harshit Dhundale" }],
  creator: "Harshit Dhundale",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harshit-portfolio.vercel.app",
    title: "Harshit Dhundale - Interactive Portfolio",
    description: "Explore my journey through an interactive experience",
    siteName: "Harshit Dhundale Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshit Dhundale - Full-Stack Developer",
    description: "Interactive portfolio experience",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={false}>
          <ModeProvider>
            <ChapterProvider>
              <main id="main-content">{children}</main>
            </ChapterProvider>
          </ModeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
