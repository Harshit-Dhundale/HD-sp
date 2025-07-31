export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tech: string[]
  category: string
  featured: boolean
  github?: string
  demo?: string
  images: string[]
  achievements: string[]
}

export const projects: Project[] = [
  {
    id: "farmiculture",
    title: "FarmiCulture",
    description: "AI-powered agriculture platform with 92-95% crop recommendation accuracy",
    longDescription:
      "A comprehensive agricultural platform serving farmers with AI-driven crop recommendations, weather insights, and marketplace integration. Built with multi-tenant architecture and achieved 92-95% accuracy using 90,000+ dataset records.",
    tech: ["React", "Node.js", "Python", "MongoDB", "Docker", "AI/ML"],
    category: "Full-Stack",
    featured: true,
    github: "https://github.com/Harshit-Dhundale/farmiculture",
    demo: "https://farmi-culture.vercel.app",
    images: ["/projects/farmiculture/cover.webp"],
    achievements: [
      "90,000+ dataset records processed",
      "92-95% AI accuracy achieved",
      "Multi-tenant architecture implemented",
      "Docker containerized microservices",
    ],
  },
  {
    id: "stockly",
    title: "Stockly",
    description: "Intelligent inventory management with real-time tracking and analytics",
    longDescription:
      "Modern inventory management platform with real-time tracking, smart analytics, and automated processes. Winner of SolVIT Hackathon 2025 among 150+ teams.",
    tech: ["React", "Node.js", "WebSocket", "MongoDB", "Express"],
    category: "Full-Stack",
    featured: true,
    demo: "https://stockly-demo.vercel.app",
    images: ["/projects/stockly/cover.webp"],
    achievements: [
      "1st place SolVIT Hackathon 2025",
      "Real-time inventory tracking",
      "Voice assistant integration",
      "Telegram bot for instant checks",
    ],
  },
  {
    id: "quantum-circuit-builder",
    title: "Quantum Circuit Builder",
    description: "Visual drag-and-drop quantum circuit designer with gate collision detection",
    longDescription:
      "Interactive quantum circuit builder for Bloq Quantum interview. Features drag-and-drop gate placement, collision detection algorithms, and edge-case handling for quantum computing education.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Drag & Drop API"],
    category: "Quantum Computing",
    featured: true,
    demo: "https://bloq-quantum-circuit.vercel.app",
    images: ["/projects/quantum-circuit/cover.png"],
    achievements: [
      "Drag-and-drop quantum gate placement",
      "Dynamic collision detection algorithm",
      "Edge-case handling for layout boundaries",
      "Post-interview bug fix and deployment",
    ],
  },
  {
    id: "ecommerce-chatbot",
    title: "E-Commerce Support Chatbot",
    description: "AI-powered customer support with MongoDB aggregations and LLM fallback",
    longDescription:
      "Hybrid customer support chatbot for Think41 interview combining fast MongoDB queries with intelligent LLM responses. Handles order status, inventory checks, and product recommendations.",
    tech: ["FastAPI", "MongoDB", "Groq LLM", "Docker", "Python"],
    category: "AI/ML",
    featured: true,
    images: ["/projects/ecommerce-chatbot/cover.png"],
    achievements: [
      "Sub-600ms response time for known queries",
      "Hybrid retrieval + LLM pipeline",
      "Docker one-liner deployment",
      "Swagger API documentation",
    ],
  },
  {
    id: "realtime-chat",
    title: "Real-Time Chat Application",
    description: "WebSocket-based messaging with activity logs and connection management",
    longDescription:
      "Full-featured real-time chat application with WebSocket connections, message history, activity logging, and user presence indicators. Built for scalable multi-user communication.",
    tech: ["React", "Node.js", "Socket.io", "WebSocket", "Express"],
    category: "Real-Time",
    featured: true,
    images: ["/projects/realtime-chat/cover.png"],
    achievements: [
      "Real-time WebSocket messaging",
      "User presence and activity tracking",
      "Message history persistence",
      "Scalable connection management",
    ],
  },
  {
    id: "water-intake-tracker",
    title: "Water Intake Tracker",
    description: "Gamified hydration tracking with timezone-aware streak logic",
    longDescription:
      "Personal hydration tracking application with gamification elements, timezone-aware streak calculations, and data export features. Started as a 3-hour hiring prompt, evolved into a full product.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    category: "Health & Wellness",
    featured: false,
    images: ["/projects/water-tracker/cover.png"],
    achievements: [
      "Timezone-aware streak logic",
      "Quick-add volume buttons",
      "Manual entry with validation",
      "CSV/JSON export functionality",
    ],
  },
  {
    id: "todo-slack-assistant",
    title: "Todo Summary Assistant",
    description: "AI-powered todo management with Slack integration and Gemini AI summaries",
    longDescription:
      "Productivity application that manages todos and generates intelligent summaries using Gemini AI, then posts them to Slack channels for team visibility and accountability.",
    tech: ["React", "Node.js", "Gemini AI", "Slack API", "Express"],
    category: "Productivity",
    featured: false,
    images: ["/projects/todo-slack/cover.png"],
    achievements: [
      "CRUD operations for todo management",
      "Gemini AI summary generation",
      "Slack API integration",
      "Team productivity insights",
    ],
  },
  {
    id: "marketmitra",
    title: "MarketMitra",
    description: "Smart e-commerce platform with sustainable solutions",
    longDescription:
      "Comprehensive e-commerce platform focusing on sustainable business practices with modern UI/UX and robust backend architecture.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    category: "E-commerce",
    featured: true,
    images: ["/projects/marketmitra/cover.webp"],
    achievements: [
      "Sustainable e-commerce focus",
      "Modern payment integration",
      "Responsive design system",
      "SEO optimized architecture",
    ],
  },
  {
    id: "stock-suite",
    title: "Stock Suite",
    description: "Combined MarketMitra + Stockly platform for complete business management",
    longDescription:
      "Unified platform combining e-commerce and inventory management capabilities for comprehensive business operations.",
    tech: ["React", "Node.js", "MongoDB", "WebSocket"],
    category: "Full-Stack",
    featured: true,
    images: ["/projects/stock-suite/cover.webp"],
    achievements: [
      "Unified business platform",
      "Real-time synchronization",
      "Scalable architecture",
      "Integrated analytics",
    ],
  },
  {
    id: "congkong",
    title: "CongKong",
    description: "Real-time KPI dashboard with advanced analytics",
    longDescription:
      "Professional dashboard application for real-time KPI monitoring with advanced analytics, participant management, and meeting insights.",
    tech: ["React", "D3.js", "Node.js", "WebSocket"],
    category: "Dashboard",
    featured: false,
    images: ["/projects/congkong/cover.webp"],
    achievements: [
      "Real-time data visualization",
      "Advanced analytics engine",
      "Participant tracking system",
      "Meeting optimization insights",
    ],
  },
  {
    id: "clumpcoder",
    title: "ClumpCoder",
    description: "Admin dashboard with comprehensive management features",
    longDescription:
      "Feature-rich admin dashboard with form management, analytics, and comprehensive business tools built with modern UI components.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    category: "Dashboard",
    featured: false,
    images: ["/projects/clumpcoder/cover.webp"],
    achievements: [
      "Comprehensive admin features",
      "Modern UI components",
      "Form management system",
      "Analytics integration",
    ],
  },
  {
    id: "pdf-extractor",
    title: "PDF Extractor App",
    description: "Streamlined PDF processing and text extraction tool",
    longDescription:
      "Efficient PDF processing application for text extraction and document analysis with clean, user-friendly interface.",
    tech: ["Python", "Flask", "PDF.js", "React"],
    category: "Utility",
    featured: false,
    images: ["/projects/pdf-extractor/cover.webp"],
    achievements: [
      "Fast PDF processing",
      "Text extraction accuracy",
      "Clean user interface",
      "Batch processing support",
    ],
  },
  {
    id: "stockify",
    title: "Stockify",
    description: "Virtual trading platform with live market data",
    longDescription:
      "Virtual stock trading platform with live NSE data integration, risk management features, and real-time portfolio tracking.",
    tech: ["React", "Node.js", "Fyers API", "WebSocket"],
    category: "FinTech",
    featured: false,
    images: ["/projects/stockify/cover.webp"],
    achievements: [
      "Live NSE data integration",
      "Risk management tools",
      "Real-time portfolio tracking",
      "Virtual trading simulation",
    ],
  },
  {
    id: "eva",
    title: "Eva Period Tracker",
    description: "Comprehensive women's health tracking mobile app",
    longDescription:
      "Flutter-based mobile application for period tracking with calendar integration, health insights, and personalized recommendations.",
    tech: ["Flutter", "Dart", "Firebase", "SQLite"],
    category: "Mobile",
    featured: false,
    images: ["/projects/eva/cover.webp"],
    achievements: [
      "Intuitive calendar interface",
      "Health insights tracking",
      "Privacy-focused design",
      "Cross-platform compatibility",
    ],
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const allProjects = projects
