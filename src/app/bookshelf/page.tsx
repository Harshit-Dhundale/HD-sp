"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { toast, Toaster } from "../../components/ui/toast"
import confetti from "canvas-confetti"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { MapPin, Send } from "lucide-react"

const chapters = [
  { title: "Foundations", slug: "foundations", color: "from-gold/80 to-gold" },
  { title: "Orchid Internship", slug: "orchid-internship", color: "from-mint/80 to-mint" },
  { title: "FarmiCulture", slug: "farmiculture", color: "from-green-400 to-green-600" },
  { title: "News App", slug: "news-app", color: "from-blue-400 to-blue-600" },
  { title: "Hackathon Leaps", slug: "hackathon-leaps", color: "from-purple-400 to-purple-600" },
  { title: "Skills", slug: "skills", color: "from-gold/60 to-gold/80", center: true },
  { title: "Quantum Circuits", slug: "bloq-quantum", color: "from-cyan-400 to-cyan-600" },
  { title: "AI Chatbot", slug: "think41-chatbot", color: "from-orange-400 to-orange-600" },
  { title: "Forward Vision", slug: "forward-vision", color: "from-pink-400 to-pink-600" },
]

export default function BookshelfPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleBookClick = (slug: string) => {
    router.push(`/${slug}`)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Honeypot check
    if (formData.honeypot) return

    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })

      toast.success("Thank you! I'll get back to you soon.")

      setFormData({
        name: "",
        email: "",
        message: "",
        honeypot: "",
      })
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      <Toaster />
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display text-gold mb-4">The Complete Collection</h1>
            <p className="text-xl text-parchment/80">
              Choose a chapter to revisit, or reach out to start a new story together.
            </p>
          </motion.div>

          {/* Interactive Bookshelf */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-3 gap-4 mb-16 max-w-4xl mx-auto"
          >
            {chapters.map((chapter, index) => (
              <motion.div
                key={chapter.slug}
                initial={{ opacity: 0, rotateY: -15 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ rotateY: -15, scale: 1.05 }}
                className={`book-spine h-32 cursor-pointer rounded-r-lg bg-gradient-to-br ${chapter.color} flex items-center justify-center relative overflow-hidden ${
                  chapter.center ? "col-start-2" : ""
                }`}
                onClick={() => handleBookClick(chapter.slug)}
              >
                <div className="text-white font-display font-semibold text-center px-2">
                  <div className="text-sm opacity-90">Chapter {chapter.center ? "Skills" : index + 1}</div>
                  <div className="text-xs mt-1">{chapter.title}</div>
                </div>

                {/* Book spine details */}
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/20" />
                <div className="absolute right-1 top-2 bottom-2 w-px bg-white/40" />
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="bg-parchment/10 border-gold/20 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-display text-gold">Let's Build Something Together</CardTitle>
                <CardDescription className="text-parchment/70 flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Indore/Bhopal – Ready to relocate
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot field */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleInputChange}
                    className="absolute -left-9999px opacity-0"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-parchment/5 border-gold/30 text-parchment placeholder:text-parchment/50"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="your.email@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-parchment/5 border-gold/30 text-parchment placeholder:text-parchment/50"
                      />
                    </div>
                  </div>

                  <Textarea
                    name="message"
                    placeholder="Tell me about your project, team, or just say hello..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="bg-parchment/5 border-gold/30 text-parchment placeholder:text-parchment/50 resize-none"
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold text-midnight hover:bg-gold/90 font-semibold"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-midnight/30 border-t-midnight rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  )
}
