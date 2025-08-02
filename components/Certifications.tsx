"use client"

import { useRef, useState } from "react"
import { certifications } from "@/data/certifications"
import CertBadge from "./CertBadge"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useHashDialog } from "@/hooks/useHashDialog"
import ModalCert from "./ModalCert"

export function Certifications() {
  const [expanded, setExpanded] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { openDialog } = useHashDialog({ hashKey: "cert" })

  const visible = expanded ? certifications : certifications.slice(0, 2)
  const hiddenCount = certifications.length - visible.length

  const toggle = () => {
    if (expanded) {
      sectionRef.current?.scrollIntoView({ block: "start" })
    }
    setExpanded((prev) => !prev)
  }

  return (
    <section id="certifications" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2">
          {visible.map((cert) => (
            <CertBadge key={cert.id} cert={cert} onOpen={openDialog} />
          ))}
        </div>
        {hiddenCount > 0 && (
          <div className="text-center mt-8">
            <Button variant="outline" onClick={toggle}>
              <ChevronDown
                className={`mr-2 h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
              />
              {expanded
                ? "Collapse"
                : `Show All Certifications (+${hiddenCount})`}
            </Button>
          </div>
        )}
      </div>
      <ModalCert />
    </section>
  )
}
