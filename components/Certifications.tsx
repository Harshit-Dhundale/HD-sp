"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ExternalLink, Shield, Calendar, Download, Copy, ChevronDown, Clock, Award } from "lucide-react"
import { certifications } from "../data/certifications"
import { motion, AnimatePresence } from "framer-motion"

// Certificate Modal Component
function CertificateModal({ cert }: { cert: typeof certifications[0] }) {
  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    // You could add a toast notification here
  }

  const getValidityPercentage = () => {
    if (!cert.expiryDate) return 100
    const now = new Date()
    const issued = new Date(cert.date)
    const expires = new Date(cert.expiryDate)
    const total = expires.getTime() - issued.getTime()
    const remaining = expires.getTime() - now.getTime()
    return Math.max(0, Math.min(100, (remaining / total) * 100))
  }

  const validityPercentage = getValidityPercentage()

  return (
    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: Certificate Image */}
        <div className="space-y-4">
          <div className="relative aspect-[3/4] w-full bg-muted rounded-lg overflow-hidden">
            <Image
              src={cert.image || "/placeholder.svg"}
              alt={`${cert.name} Certificate`}
              fill
              className="object-contain hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
          {/* Actions */}
          <div className="flex gap-2">
            {cert.downloadUrl && (
              <Button className="flex-1" onClick={() => window.open(cert.downloadUrl, '_blank')}>
                <Download className="w-4 h-4 mr-2" />
                Download Certificate
              </Button>
            )}
            {cert.verificationUrl && (
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => copyToClipboard(cert.verificationUrl!, 'verification URL')}
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Verification URL
              </Button>
            )}
          </div>
        </div>

        {/* Right: Certificate Details */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">{cert.name}</h2>
            <p className="text-lg text-muted-foreground">{cert.issuer}</p>
          </div>

          <p className="text-muted-foreground leading-relaxed">{cert.description}</p>

          {/* Metadata */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-green-600" />
              <span className="font-medium">Issued:</span>
              <span>{cert.date}</span>
            </div>
            
            {cert.expiryDate && (
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Expires:</span>
                <span>{cert.expiryDate}</span>
              </div>
            )}

            {cert.credentialId && (
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-600" />
                <span className="font-medium">Credential ID:</span>
                <code className="bg-muted px-2 py-1 rounded text-sm">{cert.credentialId}</code>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => copyToClipboard(cert.credentialId!, 'credential ID')}
                >
                  <Copy className="w-3 h-3" />
                </Button>
              </div>
            )}
          </div>

          {/* Validity Ring */}
          {cert.expiryDate && (
            <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
              <div className="relative w-16 h-16">
                <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray={`${validityPercentage}, 100`}
                    className="text-green-500"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-muted-foreground/20"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold">{Math.round(validityPercentage)}%</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Validity Remaining</p>
                <p className="text-xs text-muted-foreground">
                  {validityPercentage > 75 ? 'Excellent' : validityPercentage > 50 ? 'Good' : 'Renewal Due Soon'}
                </p>
              </div>
            </div>
          )}

          {/* Skills */}
          <div>
            <h3 className="font-medium mb-2">Related Skills</h3>
            <div className="flex flex-wrap gap-2">
              {cert.skills.map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>

          {/* External Verification */}
          {cert.verificationUrl && (
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => window.open(cert.verificationUrl, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Verify on Issuer Website
            </Button>
          )}
        </div>
      </div>
    </DialogContent>
  )
}

export function Certifications() {
  const [showAll, setShowAll] = useState(false)
  const featuredCerts = certifications.filter(cert => cert.featured)
  const otherCerts = certifications.filter(cert => !cert.featured)
  const displayedCerts = showAll ? certifications : featuredCerts

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Professional Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Validated expertise in cloud platforms and technologies, demonstrating commitment to continuous learning and
            industry best practices.
          </p>
        </div>

        {/* Featured Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          {featuredCerts.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        {/* Certificate Image */}
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src={cert.image || "/placeholder.svg"}
                            alt={`${cert.name} Certificate`}
                            fill
                            className="object-contain rounded-lg group-hover:scale-105 transition-transform"
                            sizes="64px"
                          />
                        </div>

                        {/* Certificate Details */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                            {cert.name}
                          </h3>
                          <p className="text-muted-foreground mb-2 font-medium text-sm">{cert.issuer}</p>
                          
                          {/* Dates */}
                          <div className="flex items-center gap-3 mb-3 text-xs">
                            <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                              <Calendar className="h-3 w-3" />
                              <span>{cert.date}</span>
                            </div>
                            {cert.expiryDate && (
                              <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
                                <Clock className="h-3 w-3" />
                                <span>Expires {cert.expiryDate}</span>
                              </div>
                            )}
                          </div>

                          {/* Skills Preview */}
                          <div className="flex flex-wrap gap-1">
                            {cert.skills.slice(0, 3).map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs px-2 py-0">
                                {skill}
                              </Badge>
                            ))}
                            {cert.skills.length > 3 && (
                              <Badge variant="outline" className="text-xs px-2 py-0">
                                +{cert.skills.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>

                        <Award className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <CertificateModal cert={cert} />
              </Dialog>
            </motion.div>
          ))}
        </div>

        {/* View All Certifications */}
        {otherCerts.length > 0 && (
          <div className="text-center">
            <Collapsible open={showAll} onOpenChange={setShowAll}>
              <CollapsibleTrigger asChild>
                <Button variant="outline" className="mb-6">
                  <ChevronDown className={`w-4 h-4 mr-2 transition-transform ${showAll ? 'rotate-180' : ''}`} />
                  {showAll ? 'Show Less' : `View All Certifications (${certifications.length})`}
                </Button>
              </CollapsibleTrigger>
              
              <CollapsibleContent>
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
                  >
                    {otherCerts.map((cert, index) => (
                      <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Dialog>
                          <DialogTrigger asChild>
                            <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 border hover:border-primary/20 bg-card/30">
                              <CardContent className="p-4">
                                <div className="flex items-center gap-3">
                                  <div className="relative w-12 h-12 flex-shrink-0">
                                    <Image
                                      src={cert.image || "/placeholder.svg"}
                                      alt={`${cert.name} Certificate`}
                                      fill
                                      className="object-contain rounded group-hover:scale-105 transition-transform"
                                      sizes="48px"
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h4 className="font-semibold text-sm group-hover:text-primary transition-colors truncate">
                                      {cert.name}
                                    </h4>
                                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                                    <p className="text-xs text-green-600">{cert.date}</p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </DialogTrigger>
                          <CertificateModal cert={cert} />
                        </Dialog>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </CollapsibleContent>
            </Collapsible>
          </div>
        )}

        {/* Validity Summary */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full border border-green-200 dark:border-green-800">
            <Shield className="h-4 w-4" />
            <span className="text-sm font-medium">All certifications actively maintained and verified</span>
          </div>
        </div>
      </div>
    </section>
  )
}
