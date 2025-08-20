"use client"

import { useRef, useState } from "react"
import { certifications } from "@/data/certifications"
import CertBadge from "./CertBadge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useHashDialog } from "@/hooks/useHashDialog"

/**
 * Behavior:
 *  - Show only featured first two by default.
 *  - Toggle expands to all; toggles back to hide with “Show Less”.
 *  - Single ModalCert instance lives outside (does not stack).
 *  - Deep linking via hash handled by useHashDialog.
 */

export default function Certifications() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [expanded, setExpanded] = useState(false)

  const { openDialog } = useHashDialog({ hashKey: "cert" })

  // Featured-first default two
  const TOP = 2
  const visible = expanded
    ? certifications
    : certifications
        .filter((c) => c.featured)
        .slice(0, TOP)

  const hiddenCount = certifications.length - visible.length

  const toggle = () => {
    if (expanded) {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    setExpanded((v) => !v)
  }

  return (
    <section id="certifications" ref={sectionRef} className="py-20">
      <div className="max-w-6xl px-4 mx-auto">
        {/* header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Industry-recognised credentials that validate my cloud & DevOps
            expertise.
          </p>
        </div>

        {/* grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {visible.map((cert) => (
            <CertBadge key={cert.id} cert={cert} onOpen={openDialog} />
          ))}
        </div>

        {/* toggle */}
        {certifications.length > TOP && (
          <div className="text-center mt-10">
            <Button variant="outline" onClick={toggle} aria-expanded={expanded}>
              {expanded ? (
                <>
                  <ChevronUp className="mr-2 h-4 w-4" /> Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="mr-2 h-4 w-4" /> Show All Certifications
                  (+{hiddenCount})
                </>
              )}
            </Button>
          </div>
        )}
      </div>
      {/* single modal host */}
      {/* ModalCert should be imported and rendered by the parent of this component or at layout level */}
    </section>
  )
}
