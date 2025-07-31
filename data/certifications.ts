export interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  credentialId?: string
  image: string
  verificationUrl?: string
  skills: string[]
  description: string
}

export const certifications: Certification[] = [
  {
    id: "aws-ccp",
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-CCP-2023-001",
    image: "/images/aws-ccp.webp",
    verificationUrl: "https://aws.amazon.com/verification",
    skills: ["AWS", "Cloud Computing", "Infrastructure"],
    description: "Foundational understanding of AWS Cloud services and architecture",
  },
  {
    id: "gcp-digital-leader",
    name: "Google Cloud Digital Leader",
    issuer: "Google Cloud",
    date: "2023",
    credentialId: "GCP-DL-2023-001",
    image: "/images/gcp-digital-leader.webp",
    verificationUrl: "https://cloud.google.com/certification/verify",
    skills: ["Google Cloud", "Digital Transformation", "Cloud Strategy"],
    description: "Understanding of Google Cloud capabilities and digital transformation",
  },
]
