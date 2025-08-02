"use client"

import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useHashDialog } from "@/hooks/useHashDialog"
import { certifications } from "@/data/certifications"
import { Button } from "@/components/ui/button"
import posthog from "posthog-js"
import { useToast } from "@/hooks/use-toast"

export default function ModalCert() {
  const { isOpen, activeId, closeDialog } = useHashDialog({
    hashKey: "cert",
    onOpen: (id) => {
      posthog.capture("cert_open", { id })
    },
  })
  const { toast } = useToast()
  const cert = certifications.find((c) => c.id === activeId)
  if (!cert) return null

  const copyUrl = () => {
    if (cert.verificationUrl) {
      navigator.clipboard.writeText(cert.verificationUrl)
      toast({ description: "URL copied" })
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={(o) => !o && closeDialog()}>
      <DialogContent className="max-w-3xl">
        <div className="grid gap-6 md:grid-cols-[320px_1fr] items-center">
          <div className="relative w-full h-64 md:h-80">
            <Image src={cert.image} alt={cert.name} fill className="object-contain" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">{cert.name}</h2>
            <p className="text-muted-foreground">{cert.issuer}</p>
            <p className="text-sm">Issued: {cert.date}</p>
            {cert.credentialId && <p className="text-sm">Credential ID: {cert.credentialId}</p>}
            {cert.verificationUrl && (
              <Button size="sm" onClick={copyUrl}>
                Copy URL
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
