export interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  expiryDate?: string
  credentialId?: string
  image: string
  verificationUrl?: string
  downloadUrl?: string
  skills: string[]
  description: string
  featured?: boolean
}

export const certifications: Certification[] = [
  {
    id: "aws-ccp",
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "January 2024",
    expiryDate: "January 2027",
    credentialId: "AWS-CCP-2024-001",
    image: "/images/aws-ccp.webp",
    verificationUrl: "https://aws.amazon.com/verification/AWS-CCP-2024-001",
    downloadUrl: "/certificates/aws-ccp.pdf",
    skills: ["AWS", "Cloud Computing", "Infrastructure"],
    description: "Foundational understanding of AWS Cloud services and architecture with hands-on cloud deployment experience",
    featured: true,
  },
  {
    id: "gcp-digital-leader",
    name: "Google Cloud Digital Leader",
    issuer: "Google Cloud",
    date: "March 2024",
    expiryDate: "March 2027",
    credentialId: "GCP-DL-2024-001",
    image: "/images/gcp-digital-leader.webp",
    verificationUrl: "https://cloud.google.com/certification/verify/GCP-DL-2024-001",
    downloadUrl: "/certificates/gcp-digital-leader.pdf",
    skills: ["Google Cloud", "Digital Transformation", "Cloud Strategy"],
    description: "Understanding of Google Cloud capabilities and digital transformation with practical implementation knowledge",
    featured: true,
  },
  {
    id: "docker-associate",
    name: "Docker Certified Associate",
    issuer: "Docker Inc.",
    date: "February 2024",
    expiryDate: "February 2026",
    credentialId: "DCA-2024-HD001",
    image: "/images/docker-cert.webp",
    verificationUrl: "https://success.docker.com/certification",
    downloadUrl: "/certificates/docker-associate.pdf",
    skills: ["Docker", "Containerization", "DevOps"],
    description: "Proficiency in Docker containerization and orchestration technologies",
    featured: false,
  },
  {
    id: "kubernetes-ckad",
    name: "Certified Kubernetes Application Developer",
    issuer: "Cloud Native Computing Foundation",
    date: "May 2024",
    expiryDate: "May 2027",
    credentialId: "CKAD-2024-0001",
    image: "/images/kubernetes-ckad.webp",
    verificationUrl: "https://training.linuxfoundation.org/certification/verify/",
    downloadUrl: "/certificates/kubernetes-ckad.pdf",
    skills: ["Kubernetes", "Container Orchestration", "Cloud Native"],
    description: "Expertise in developing and deploying applications on Kubernetes clusters",
    featured: false,
  },
]
