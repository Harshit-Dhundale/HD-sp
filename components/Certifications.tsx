"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Shield, Calendar } from "lucide-react"
import { certifications } from "../data/certifications"

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Cloud Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Validated expertise in cloud platforms and technologies, demonstrating commitment to continuous learning and
            industry best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert) => (
            <Card
              key={cert.id}
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  {/* Certificate Image */}
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={cert.image || "/placeholder.svg"}
                      alt={`${cert.name} Certificate`}
                      fill
                      className="object-contain rounded-lg"
                      sizes="80px"
                    />
                  </div>

                  {/* Certificate Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-muted-foreground mb-3 font-medium">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{cert.description}</p>

                    {/* Dates */}
                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                        <Calendar className="h-4 w-4" />
                        <span>Issued: {cert.date}</span>
                      </div>
                      {cert.credentialId && (
                        <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
                          <Shield className="h-4 w-4" />
                          <span>Credential ID: {cert.credentialId}</span>
                        </div>
                      )}
                    </div>

                    {/* Validation Number - removed, not in interface */}

                    {/* Verify Button */}
                    {cert.verificationUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-200 bg-transparent"
                        onClick={() => window.open(cert.verificationUrl, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Verify Credential
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Validity Ring - Optional Enhancement */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full border border-green-200 dark:border-green-800">
            <Shield className="h-4 w-4" />
            <span className="text-sm font-medium">All certifications valid through 2027</span>
          </div>
        </div>
      </div>
    </section>
  )
}
