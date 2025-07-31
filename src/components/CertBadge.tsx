"use client"

import type { Cert } from "../data/skills"

interface CertBadgeProps extends Cert {
  className?: string
}

export default function CertBadge({ label, issued, link, logo, className = "" }: CertBadgeProps) {
  const issuedDate = new Date(issued)
  const expiryDate = new Date(issuedDate.getFullYear() + 3, issuedDate.getMonth(), issuedDate.getDate())
  const isValid = new Date() < expiryDate

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`block p-4 bg-white/5 border border-gold/30 rounded-lg hover:bg-white/10 hover:border-gold/60 transition-all duration-200 transform hover:-translate-y-1 ${className}`}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 bg-gold/20 rounded flex items-center justify-center">
          <span className="text-gold font-bold text-sm">🏆</span>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-sm">{label}</h3>
          <p className="text-xs text-white/60">{isValid ? `Valid until ${expiryDate.getFullYear()}` : "Expired"}</p>
        </div>
      </div>
      <div className="text-xs text-white/50">Issued: {issuedDate.toLocaleDateString()}</div>
    </a>
  )
}
