"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Send,
  MessageCircle,
} from "lucide-react"
import { useState } from "react"
import { toast } from "react-hot-toast"
import { cn } from "@/lib/utils"

/* ───────────────────────────────────────────
   static data
   ───────────────────────────────────────── */

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "harshitdhundale@gmail.com",
    href: "mailto:harshitdhundale@gmail.com",
    color: "text-blue-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
    color: "text-green-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mumbai, India",
    href: "https://maps.google.com/?q=Mumbai,India",
    color: "text-red-500",
  },
]

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/harshitdhundale" },
  { icon: Github,   label: "GitHub",   href: "https://github.com/harshitdhundale" },
  { icon: Twitter,  label: "Twitter",  href: "https://twitter.com/harshitdhundale" },
]

/* ───────────────────────────────────────────
   reusable card shell
   ───────────────────────────────────────── */

interface InfoCardProps {
  title: string
  icon?: React.ReactNode
  children: React.ReactNode
  className?: string
}

function InfoCard({ title, icon, children, className }: InfoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Card
        className={cn(
          "p-6 space-y-4 rounded-xl bg-card/70 backdrop-blur-sm ring-1 ring-border flex flex-col",
          className,
        )}
      >
        <h3 className="flex items-center gap-2 font-semibold text-lg">
          {icon}
          {title}
        </h3>
        {children}
      </Card>
    </motion.div>
  )
}

/* ───────────────────────────────────────────
   main section component
   ───────────────────────────────────────── */

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  /* — handlers — */
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const formspreeUrl = `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`;

    const response = await fetch(formspreeUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast.success("Message sent successfully 🚀");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      toast.error("Failed to send. Please try again.");
    }
  } catch (error) {
    toast.error("Something went wrong. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};


  /* — markup — */
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Let’s Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Whether it’s a full-stack application, AI
            solution, or cloud architecture, I’m here to help. Let’s discuss your next
            project!
          </p>
        </motion.div>

        {/* 2-col grid on ≥lg */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {/* left — send a message */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 space-y-4 rounded-xl bg-card/70 backdrop-blur-sm ring-1 ring-border">
              <div className="flex items-center gap-2 mb-4">
                <MessageCircle className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* name / email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      className="bg-background/50"
                    />
                  </div>
                </div>

                {/* subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project inquiry…"
                    className="bg-background/50"
                  />
                </div>

                {/* message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, timeline, requirements…"
                    className="bg-background/50 resize-none"
                  />
                </div>

                {/* send btn */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Sending…" : "Send Message"}
                </Button>
              </form>

              <p className="text-sm text-muted-foreground text-center mt-6 border-t pt-4">
                Prefer email?&nbsp;
                <a
                  href="mailto:harshitdhundale@gmail.com"
                  className="text-primary hover:underline font-medium"
                >
                  harshitdhundale@gmail.com
                </a>
              </p>
            </Card>
          </motion.div>

          {/* right column — stacked cards */}
          <div className="flex flex-col gap-8">
            {/* get in touch */}
            <InfoCard title="Get in Touch" icon={<Mail className="w-5 h-5 text-primary" />}>
              <div className="space-y-3">
                {contactInfo.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 rounded-lg bg-muted/40 p-3 hover:bg-muted/60 transition-colors"
                  >
                    <c.icon className={cn("w-5 h-5", c.color)} />
                    <div>
                      <p className="font-medium">{c.label}</p>
                      <p className="text-sm text-muted-foreground">{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </InfoCard>

            {/* connect online */}
            <InfoCard
              title="Connect Online"
              icon={<Linkedin className="w-5 h-5 text-primary" />}
            >
              <div className="flex gap-3 mb-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="rounded-full hover:bg-muted p-2 transition-colors"
                  >
                    <s.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Follow my journey, see my latest work, and drop a hello.
              </p>
            </InfoCard>
          </div>
        </div>

        {/* full-width availability banner */}
        <InfoCard
          title="Currently Available"
          icon={<span className="h-3 w-3 bg-emerald-500 rounded-full animate-pulse" />}
          className="mt-12"
        >
          <p className="text-sm text-muted-foreground mb-3">
            I’m open for freelance projects&nbsp;and full-time opportunities.
          </p>
          <div className="grid grid-cols-2 gap-y-2 text-sm">
            <span className="text-muted-foreground">Response Time:</span>
            <span className="font-medium">Within 24 hours</span>
            <span className="text-muted-foreground">Timezone:</span>
            <span className="font-medium">IST (UTC +5:30)</span>
            <span className="text-muted-foreground">Preferred Contact:</span>
            <span className="font-medium">Email or LinkedIn</span>
          </div>
        </InfoCard>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-primary/5 rounded-xl p-8 border border-primary/10"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            From concept to deployment, I’ll help you build scalable, modern solutions
            that make a real impact.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-primary hover:bg-primary/90"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Start Conversation
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/resume.pdf" download>
                Download Résumé
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
