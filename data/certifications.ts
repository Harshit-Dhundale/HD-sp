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
    id: "nptel-cloud-computing",
    name: "NPTEL Cloud Computing",
    issuer: "NPTEL (IIT Kharagpur)",
    date: "April 2024",
    expiryDate: "No Expiry",
    credentialId: "NPTEL24CS17S457601102",
    image: "/images/nptel.jpg",
    verificationUrl: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS17S45760110230501948",
    downloadUrl: "/certificates/nptel-cloud-computing.pdf",
    skills: ["Cloud Computing", "Virtualization", "Distributed Systems", "AWS", "GCP", "Cloud Security"],
    description: "Completed the NPTEL Cloud Computing course conducted by IIT Kharagpur, gaining knowledge in cloud service models, virtualization, distributed computing, cloud platforms (AWS, GCP), and cloud security best practices.",
    featured: false
},

  
{ 
    id: "google-networking",
    name: "The Bits and Bytes of Computer Networking",
    issuer: "Google (Coursera)",
    date: "December 2022",
    expiryDate: "No Expiry",
    credentialId: "LJUSS8V6J3JG",
    image: "/images/google-networking.jpeg",
    verificationUrl: "https://coursera.org/verify/LJUSS8V6J3JG",
    downloadUrl: "/certificates/google-networking.pdf",
    skills: [
      "OSI Models",
      "Network Infrastructure",
      "Network Security",
      "Network Routing",
      "DHCP",
      "Wireless Networks",
      "Data Integrity",
      "Computer Networking",
      "VPN",
      "Network Architecture",
      "TCP/IP",
      "Network Protocols"
    ],
    description: "Completed Google’s Coursera course on Computer Networking, covering OSI and TCP/IP models, routing, VPNs, DHCP, wireless networks, and modern network security and infrastructure.",
    featured: false
}, 
]
