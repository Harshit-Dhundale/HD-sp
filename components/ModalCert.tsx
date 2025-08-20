"use client"

import Image from "next/image"
import Link from "next/link"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useHashDialog } from "@/hooks/useHashDialog"
import { certifications } from "@/data/certifications"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { toast } from "sonner"

/* -------------------------------------------------------------------------- */
/*  Certification Modal (single instance)                                     */
/* -------------------------------------------------------------------------- */
export default function ModalCert() {
  const [error, setError] = useState<string | null>(null)
  const { isOpen, activeId, closeDialog } = useHashDialog({
    hashKey: "cert",
    onOpen: async (id) => {
      try {
        // Safe PostHog import
        if (typeof window !== "undefined" && window.posthog) {
          window.posthog.capture("cert_open", { id })
        }
      } catch (err) {
        console.error("PostHog error:", err)
      }
    },
  })

  const cert = certifications.find((c) => c.id === activeId)
  
  // Fallback mechanism: check hash on mount and after a small delay
  useEffect(() => {
    const checkHash = () => {
      try {
        const params = new URLSearchParams(window.location.hash.slice(1))
        const certId = params.get("cert")
        if (certId && !isOpen) {
          console.log(`[ModalCert] Fallback: Found cert ID ${certId} but modal not open`)
          // Force a hash change event to trigger the modal
          setTimeout(() => {
            window.dispatchEvent(new HashChangeEvent("hashchange", {
              oldURL: window.location.href,
              newURL: window.location.href
            }))
          }, 50)
        }
      } catch (err) {
        console.error("[ModalCert] Error in fallback check:", err)
        setError("Failed to check hash state")
      }
    }

    // Check immediately and after a small delay
    checkHash()
    const timeoutId = setTimeout(checkHash, 100)

    return () => clearTimeout(timeoutId)
  }, [isOpen])

  // Error state
  if (error) {
    console.error("[ModalCert] Error:", error)
    return null
  }

  if (!cert) return null

  /* copy helper */
  const copyLink = () => {
    if (!cert.verificationUrl) return
    try {
      navigator.clipboard.writeText(cert.verificationUrl)
      toast.success("Verification link copied ✅", {
        duration: 2000
      })
    } catch (err) {
      console.error("[ModalCert] Copy error:", err)
      toast.error("Failed to copy link", {
        duration: 3000
      })
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={(o) => !o && closeDialog()}>
      {/* DialogContent ALREADY contains a built-in close button,
          so we do NOT add a custom one → no double “×” */}
      <DialogContent className="max-w-3xl md:max-w-4xl">
        <div className="grid gap-8 md:grid-cols-[320px_1fr]">
          {/* left */}
          <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-muted">
            <Image
              src={cert.image}
              alt={cert.name}
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-contain"
              priority
            />
          </div>

          {/* right */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">{cert.name}</h2>
            <p className="text-muted-foreground">{cert.issuer}</p>

            <div className="text-sm space-y-1">
              <p>
                <strong>Issued:</strong> {cert.date}
              </p>
              {cert.expiryDate && (
                <p>
                  <strong>Expires:</strong> {cert.expiryDate}
                </p>
              )}
              {cert.credentialId && (
                <p>
                  <strong>ID:</strong> {cert.credentialId}
                </p>
              )}
            </div>

            {cert.description && (
              <p className="text-sm text-muted-foreground">{cert.description}</p>
            )}

            <div className="flex flex-wrap gap-2">
              {cert.skills.map((s) => (
                <span
                  key={s}
                  className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-medium"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {cert.verificationUrl && (
                <>
                  <Button
                    size="sm"
                    onClick={() =>
                      window.open(cert.verificationUrl!, "_blank", "noopener")
                    }
                  >
                    Verify Online
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={copyLink}
                  >
                    Copy Link
                  </Button>
                </>
              )}
              {cert.downloadUrl && (
                <Button size="sm" variant="outline" asChild>
                  <Link href={cert.downloadUrl} download>
                    Download PDF
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
