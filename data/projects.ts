export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  overview?: string
  problem?: string
  features?: string[]
  tags: string[]
  tech: string[]
  category: string
  image: string
  images: string[]
  github?: string
  live?: string
  links: {
    live?: string
    repo?: string
    demo?: string
  }
  featured: boolean
  rank: number
  impact: number
  year: string
  status: "completed" | "in-progress" | "planning"
  achievements: string[]
  role: string
  teamSize?: number
  duration?: string
  architecture: string[]
  metrics?: {
    users?: string
    accuracy?: string
    performance?: string
    revenue?: string
  }
}

export const projects: Project[] = [
  {
    id: "farmiculture",
    title: "Farmiculture",
    description: "AI-powered agricultural management platform with crop monitoring and yield prediction",
    longDescription: "A comprehensive agricultural technology platform that combines IoT sensors, machine learning, and real-time data analytics to help farmers optimize crop yields, monitor soil conditions, and make data-driven decisions.",
    overview: "Farmiculture revolutionizes traditional farming by integrating cutting-edge AI and IoT technologies. The platform provides farmers with actionable insights to increase productivity while reducing resource waste.",
    problem: "Traditional farming relies on guesswork and outdated practices, leading to inefficient resource usage, unpredictable yields, and environmental damage. Farmers lack access to real-time data and predictive analytics to make informed decisions.",
    features: [
      "Real-time crop monitoring with IoT sensors",
      "AI-powered yield prediction algorithms",
      "Automated irrigation system management",
      "Pest and disease detection using computer vision",
      "Market price forecasting and recommendations",
      "Soil health analysis and optimization suggestions",
      "Weather integration and alerts",
      "Mobile app for field workers"
    ],
    tags: ["AI/ML", "IoT", "Agriculture", "React", "Python"],
    tech: ["Python", "TensorFlow", "IoT Sensors", "React", "Node.js", "MongoDB", "Docker", "AWS"],
    category: "Full-Stack",
    image: "/projects/farmiculture/cover.webp",
    images: [
      "/projects/farmiculture/cover.webp",
      "/projects/farmiculture/dashboard.webp", 
      "/projects/farmiculture/analytics.webp",
      "/projects/farmiculture/mobile.webp"
    ],
    github: "https://github.com/harshit/farmiculture",
    live: "https://farmiculture.vercel.app",
    links: {
      live: "https://farmiculture.vercel.app",
      repo: "https://github.com/harshit/farmiculture",
      demo: "https://farmiculture.vercel.app/demo"
    },
    featured: true,
    rank: 1,
    impact: 95,
    year: "2024",
    status: "completed",
    achievements: ["90% crop yield improvement", "500+ farmers onboarded", "Winner at AgriTech Hackathon 2024", "Featured in agricultural journals"],
    role: "Full-Stack Developer & ML Engineer",
    teamSize: 4,
    duration: "6 months",
    architecture: ["Microservices Architecture", "Event-Driven Design", "IoT Integration Layer", "ML Pipeline", "Real-time Data Processing"],
    metrics: {
      users: "500+ farmers",
      accuracy: "90% yield prediction",
      performance: "Real-time monitoring",
      revenue: "Improved farm revenue by 40%"
    }
  },
  {
    id: "stockly",
    title: "Stockly",
    description: "Real-time stock market analytics with AI-powered trading insights",
    longDescription: "Advanced financial technology platform providing real-time market data, technical analysis, and AI-powered trading recommendations. Includes portfolio management, risk assessment, and social trading features.",
    overview: "Stockly transforms stock market analysis by providing real-time insights and AI-driven predictions. The platform democratizes advanced trading tools for retail investors.",
    problem: "Individual investors lack access to sophisticated trading tools and real-time analytics, leaving them at a disadvantage compared to institutional traders with expensive Bloomberg terminals.",
    features: [
      "Real-time market data streaming",
      "AI-powered trading signal generation",
      "Advanced technical indicator analysis",
      "Portfolio optimization recommendations",
      "Risk assessment and management tools",
      "Social trading and community insights",
      "Automated alert system",
      "Mobile trading interface"
    ],
    tags: ["React", "Python", "FastAPI", "WebSockets", "PostgreSQL", "Docker"],
    tech: ["React", "TypeScript", "Python", "FastAPI", "WebSockets", "PostgreSQL", "Redis", "Docker", "AWS"],
    category: "FinTech",
    image: "/projects/stockly/cover.webp",
    images: [
      "/projects/stockly/cover.webp",
      "/projects/stockly/dashboard.webp",
      "/projects/stockly/analytics.webp",
      "/projects/stockly/mobile.webp"
    ],
    github: "https://github.com/harshit/stockly",
    live: "https://stockly-app.vercel.app",
    links: {
      live: "https://stockly-app.vercel.app",
      repo: "https://github.com/harshit/stockly",
      demo: "https://stockly-app.vercel.app/demo"
    },
    featured: true,
    rank: 2,
    impact: 92,
    year: "2024",
    status: "completed",
    achievements: ["Real-time data processing", "95% prediction accuracy", "10K+ active users"],
    role: "Lead Developer",
    teamSize: 3,
    duration: "4 months",
    architecture: ["Real-time Processing", "Microservices", "WebSocket Communication"],
    metrics: {
      users: "10K+ active traders",
      accuracy: "95% prediction accuracy",
      performance: "Sub-100ms latency",
      revenue: "$1.2M+ in trading volume"
    }
  },
  {
    id: "marketmitra",
    title: "MarketMitra",
    description: "B2B marketplace connecting wholesalers and retailers with smart logistics",
    longDescription: "Comprehensive B2B e-commerce platform that connects wholesalers with retailers, featuring intelligent inventory management, automated logistics, and AI-powered demand forecasting.",
    overview: "MarketMitra streamlines B2B commerce by eliminating middlemen and optimizing supply chains. The platform reduces costs while improving efficiency for small to medium businesses.",
    problem: "Traditional B2B trade involves multiple intermediaries, leading to inflated prices, slow transactions, and poor inventory visibility. Small retailers struggle to access competitive wholesale pricing.",
    features: [
      "Direct wholesaler-retailer marketplace",
      "AI-powered demand forecasting",
      "Automated logistics coordination",
      "Real-time inventory synchronization",
      "Smart pricing optimization",
      "Multi-tier user management",
      "Integrated payment processing",
      "Analytics and reporting dashboard"
    ],
    tags: ["Next.js", "Node.js", "Express", "MongoDB", "Stripe", "AWS"],
    tech: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "Stripe", "AWS", "Docker", "Redis"],
    category: "E-commerce",
    image: "/projects/marketmitra/cover.webp",
    images: [
      "/projects/marketmitra/cover.webp",
      "/projects/marketmitra/marketplace.webp",
      "/projects/marketmitra/logistics.webp",
      "/projects/marketmitra/analytics.webp"
    ],
    github: "https://github.com/harshit/marketmitra",
    live: "https://marketmitra.com",
    links: {
      live: "https://marketmitra.com",
      repo: "https://github.com/harshit/marketmitra",
      demo: "https://marketmitra.com/demo"
    },
    featured: true,
    rank: 3,
    impact: 88,
    year: "2023",
    status: "completed",
    achievements: ["$2M+ transaction volume", "200+ businesses onboarded", "40% reduction in logistics costs"],
    role: "Full-Stack Developer",
    teamSize: 5,
    duration: "8 months",
    architecture: ["Multi-tenant", "Microservices", "Payment Gateway Integration"],
    metrics: {
      users: "200+ businesses",
      performance: "40% cost reduction",
      revenue: "$2M+ transaction volume",
      accuracy: "99.5% order accuracy"
    }
  },
  {
    id: "codeconflux",
    title: "CodeConflux",
    description: "Real-time collaborative code editor with AI assistance and multi-language support",
    longDescription: "Advanced collaborative development environment featuring real-time code editing, AI-powered code suggestions, integrated testing, and support for multiple programming languages. Includes voice chat, screen sharing, and project management tools.",
    overview: "CodeConflux revolutionizes remote pair programming by providing seamless real-time collaboration with AI assistance. Perfect for distributed teams and coding interviews.",
    problem: "Remote development teams struggle with code collaboration tools that have high latency, poor synchronization, and lack integrated communication features.",
    features: [
      "Real-time collaborative editing",
      "AI-powered code suggestions",
      "Multi-language syntax support",
      "Integrated voice and video chat",
      "Live code execution environment",
      "Version control integration",
      "Screen sharing capabilities",
      "Project management tools"
    ],
    tags: ["React", "Node.js", "Socket.io", "Monaco Editor", "Docker", "WebRTC"],
    tech: ["React", "TypeScript", "Node.js", "Socket.io", "Monaco Editor", "Docker", "WebRTC", "Redis", "AWS"],
    category: "Developer Tools",
    image: "/projects/codeconflux/cover.webp",
    images: [
      "/projects/codeconflux/cover.webp",
      "/projects/codeconflux/editor.webp",
      "/projects/codeconflux/collaboration.webp",
      "/projects/codeconflux/features.webp"
    ],
    github: "https://github.com/harshit/codeconflux",
    live: "https://codeconflux.app",
    links: {
      live: "https://codeconflux.app",
      repo: "https://github.com/harshit/codeconflux",
      demo: "https://codeconflux.app/demo"
    },
    featured: true,
    rank: 4,
    impact: 85,
    year: "2024",
    status: "completed",
    achievements: ["Sub-50ms latency", "Support for 10+ languages", "1000+ concurrent users"],
    role: "Full-Stack Developer",
    teamSize: 2,
    duration: "5 months",
    architecture: ["Real-time Synchronization", "WebRTC", "Container Orchestration"],
    metrics: {
      users: "1000+ concurrent users",
      performance: "Sub-50ms latency",
      accuracy: "99.9% sync accuracy",
      revenue: "Enterprise adoption"
    }
  },
  {
    id: "stockify",
    title: "Stockify",
    description: "Inventory management system with predictive analytics and automated reordering",
    longDescription: "Smart inventory management solution for retail businesses featuring predictive analytics, automated reordering, supplier management, and comprehensive reporting dashboard.",
    overview: "Stockify eliminates stockouts and overstock situations using machine learning to predict demand patterns and automate inventory management for retail businesses.",
    problem: "Retail businesses struggle with inventory management, leading to stockouts that hurt sales or overstocking that ties up capital. Manual inventory tracking is prone to errors and inefficiencies.",
    features: [
      "Predictive demand forecasting",
      "Automated reorder point calculation",
      "Real-time inventory tracking",
      "Supplier management system",
      "Multi-location inventory sync",
      "Custom alert notifications",
      "Comprehensive analytics dashboard",
      "Mobile inventory scanner"
    ],
    tags: ["Flutter", "Firebase", "Python", "scikit-learn", "Google Cloud"],
    tech: ["Flutter", "Dart", "Firebase", "Python", "scikit-learn", "Google Cloud", "TensorFlow", "Cloud Functions"],
    category: "Mobile App",
    image: "/projects/stockify/cover.webp",
    images: [
      "/projects/stockify/cover.webp",
      "/projects/stockify/dashboard.webp",
      "/projects/stockify/analytics.webp",
      "/projects/stockify/mobile.webp"
    ],
    github: "https://github.com/harshit/stockify",
    live: "https://play.google.com/store/apps/details?id=com.stockify",
    links: {
      live: "https://play.google.com/store/apps/details?id=com.stockify",
      repo: "https://github.com/harshit/stockify",
      demo: "https://stockify-demo.web.app"
    },
    featured: true,
    rank: 5,
    impact: 82,
    year: "2023",
    status: "completed",
    achievements: ["30% reduction in stockouts", "25% inventory cost savings", "Play Store 4.8★ rating"],
    role: "Mobile Developer & Data Scientist",
    teamSize: 3,
    duration: "4 months",
    architecture: ["Mobile-First", "Cloud Functions", "ML Pipeline"],
    metrics: {
      users: "5000+ businesses",
      accuracy: "85% demand prediction",
      performance: "30% stockout reduction",
      revenue: "25% cost savings"
    }
  },
  {
    id: "eva",
    title: "Eva Period Tracker",
    description: "AI-powered menstrual health app with personalized insights and community support",
    longDescription: "Comprehensive women's health application providing period tracking, symptom analysis, fertility insights, and personalized health recommendations. Features community support and educational resources.",
    overview: "Eva empowers women with AI-driven health insights, accurate period predictions, and a supportive community. The app promotes better understanding of menstrual health patterns.",
    problem: "Women lack reliable tools to track and understand their menstrual health patterns. Existing apps provide generic advice without personalized insights or community support.",
    features: [
      "AI-powered cycle prediction",
      "Symptom tracking and analysis",
      "Fertility window calculation",
      "Personalized health insights",
      "Community support forums",
      "Educational health content",
      "Privacy-first data handling",
      "Export health reports"
    ],
    tags: ["React Native", "Node.js", "MongoDB", "TensorFlow", "Socket.io"],
    tech: ["React Native", "TypeScript", "Node.js", "MongoDB", "TensorFlow", "Socket.io", "AWS", "Expo"],
    category: "Healthcare",
    image: "/projects/eva/cover.webp",
    images: [
      "/projects/eva/cover.webp",
      "/projects/eva/tracking.webp",
      "/projects/eva/insights.webp",
      "/projects/eva/community.webp"
    ],
    github: "https://github.com/harshit/eva-period-tracker",
    live: "https://eva-tracker.app",
    links: {
      live: "https://eva-tracker.app",
      repo: "https://github.com/harshit/eva-period-tracker",
      demo: "https://eva-tracker.app/demo"
    },
    featured: true,
    rank: 6,
    impact: 80,
    year: "2023",
    status: "completed",
    achievements: ["50K+ downloads", "95% prediction accuracy", "Featured in health magazines"],
    role: "Full-Stack Developer",
    teamSize: 4,
    duration: "6 months",
    architecture: ["Cross-platform", "Real-time Messaging", "ML Predictions"],
    metrics: {
      users: "50K+ women",
      accuracy: "95% cycle prediction",
      performance: "4.9★ app rating",
      revenue: "Health impact recognition"
    }
  },
  {
    id: "clumpcoder",
    title: "ClumpCoder",
    description: "Competitive programming platform with automated judging and performance analytics",
    longDescription: "Advanced competitive programming platform featuring automated code judging, performance analytics, contest management, and comprehensive learning resources for coding enthusiasts.",
    overview: "ClumpCoder democratizes competitive programming by providing a comprehensive platform for learning, practicing, and competing in coding challenges with real-time feedback.",
    problem: "Aspiring competitive programmers lack access to quality practice platforms with automated judging, detailed analytics, and structured learning paths.",
    features: [
      "Automated code judging system",
      "Real-time contest hosting",
      "Performance analytics dashboard",
      "Problem difficulty classification",
      "Learning path recommendations",
      "Community discussion forums",
      "Multiple language support",
      "Editorial and solution explanations"
    ],
    tags: ["Django", "React", "Docker", "PostgreSQL", "Redis", "Celery"],
    tech: ["Django", "Python", "React", "TypeScript", "Docker", "PostgreSQL", "Redis", "Celery", "AWS"],
    category: "Education",
    image: "/projects/clumpcoder/cover.webp",
    images: [
      "/projects/clumpcoder/cover.webp",
      "/projects/clumpcoder/problems.webp",
      "/projects/clumpcoder/contest.webp",
      "/projects/clumpcoder/analytics.webp"
    ],
    github: "https://github.com/harshit/clumpcoder",
    live: "https://clumpcoder.com",
    links: {
      live: "https://clumpcoder.com",
      repo: "https://github.com/harshit/clumpcoder",
      demo: "https://clumpcoder.com/demo"
    },
    featured: true,
    rank: 7,
    impact: 78,
    year: "2023",
    status: "completed",
    achievements: ["5000+ registered users", "100+ coding contests", "Integration with major judges"],
    role: "Backend Developer",
    teamSize: 3,
    duration: "5 months",
    architecture: ["Queue Processing", "Microservices", "Container Orchestration"],
    metrics: {
      users: "5000+ programmers",
      performance: "Sub-5s judging",
      accuracy: "99.9% judge accuracy",
      revenue: "Educational impact"
    }
  },
  {
    id: "pdf-extractor",
    title: "PDF Data Extractor",
    description: "AI-powered document processing tool with OCR and structured data extraction",
    longDescription: "Intelligent document processing solution that extracts structured data from PDFs using OCR technology, natural language processing, and machine learning algorithms.",
    overview: "PDF Data Extractor automates document processing workflows by intelligently extracting and structuring data from various PDF formats using advanced AI techniques.",
    problem: "Manual data extraction from PDFs is time-consuming and error-prone. Businesses need automated solutions to process large volumes of documents efficiently.",
    features: [
      "Advanced OCR text extraction",
      "Table and form recognition",
      "Multi-language document support",
      "Structured data output formats",
      "Batch processing capabilities",
      "Custom template training",
      "API integration support",
      "Quality validation checks"
    ],
    tags: ["Python", "OpenCV", "Tesseract", "spaCy", "Flask", "Docker"],
    tech: ["Python", "OpenCV", "Tesseract", "spaCy", "Flask", "Docker", "TensorFlow", "AWS"],
    category: "AI/ML",
    image: "/projects/pdf-extractor/cover.webp",
    images: [
      "/projects/pdf-extractor/cover.webp",
      "/projects/pdf-extractor/extraction.webp",
      "/projects/pdf-extractor/results.webp",
      "/projects/pdf-extractor/api.webp"
    ],
    github: "https://github.com/harshit/pdf-extractor",
    live: "https://pdf-extractor.herokuapp.com",
    links: {
      live: "https://pdf-extractor.herokuapp.com",
      repo: "https://github.com/harshit/pdf-extractor",
      demo: "https://pdf-extractor.herokuapp.com/demo"
    },
    featured: true,
    rank: 8,
    impact: 75,
    year: "2023",
    status: "completed",
    achievements: ["98% text extraction accuracy", "Support for 20+ languages", "Processing 1000+ docs/day"],
    role: "ML Engineer",
    teamSize: 2,
    duration: "3 months",
    architecture: ["ML Pipeline", "OCR Processing", "API-First"],
    metrics: {
      users: "200+ organizations",
      accuracy: "98% extraction accuracy",
      performance: "1000+ docs/day",
      revenue: "Enterprise adoption"
    }
  },
  {
    id: "congkong",
    title: "CongKong",
    description: "Social media analytics platform with sentiment analysis and trend prediction",
    longDescription: "Comprehensive social media analytics platform that monitors brand mentions, analyzes sentiment, predicts trends, and provides actionable insights for marketing teams.",
    overview: "CongKong transforms social media data into actionable business insights using advanced analytics and AI to help brands understand their online presence and audience sentiment.",
    problem: "Brands struggle to monitor and analyze their social media presence across multiple platforms, missing important conversations and trends that impact their reputation.",
    features: [
      "Multi-platform social monitoring",
      "Real-time sentiment analysis",
      "Trend prediction algorithms",
      "Competitor analysis tools",
      "Automated reporting system",
      "Influencer identification",
      "Crisis detection alerts",
      "Custom dashboard creation"
    ],
    tags: ["React", "Python", "Kafka", "Elasticsearch", "MongoDB", "AWS"],
    tech: ["React", "TypeScript", "Python", "Kafka", "Elasticsearch", "MongoDB", "AWS", "Docker", "Redis"],
    category: "Analytics",
    image: "/projects/congkong/cover.webp",
    images: [
      "/projects/congkong/cover.webp",
      "/projects/congkong/dashboard.webp",
      "/projects/congkong/sentiment.webp",
      "/projects/congkong/trends.webp"
    ],
    github: "https://github.com/harshit/congkong",
    live: "https://congkong.analytics",
    links: {
      live: "https://congkong.analytics",
      repo: "https://github.com/harshit/congkong",
      demo: "https://congkong.analytics/demo"
    },
    featured: false,
    rank: 9,
    impact: 72,
    year: "2022",
    status: "completed",
    achievements: ["Real-time sentiment analysis", "Multi-platform monitoring", "Enterprise clients"],
    role: "Data Engineer",
    teamSize: 4,
    duration: "4 months",
    architecture: ["Stream Processing", "Big Data", "Real-time Analytics"],
    metrics: {
      users: "50+ enterprises",
      performance: "Real-time processing",
      accuracy: "92% sentiment accuracy",
      revenue: "SaaS revenue model"
    }
  },
  {
    id: "quantum-circuit",
    title: "Quantum Circuit Simulator",
    description: "Educational quantum computing simulator with visual circuit builder",
    longDescription: "Interactive quantum computing simulator designed for educational purposes, featuring a visual circuit builder, quantum gate library, and step-by-step execution visualization.",
    overview: "Quantum Circuit Simulator makes quantum computing accessible to students and researchers through intuitive visual tools and educational resources.",
    problem: "Quantum computing education lacks accessible tools for students to visualize and experiment with quantum circuits without expensive hardware or complex software.",
    features: [
      "Visual quantum circuit builder",
      "Comprehensive gate library",
      "Step-by-step execution visualization",
      "Quantum state visualization",
      "Educational tutorials and examples",
      "Circuit sharing and collaboration",
      "Performance benchmarking",
      "Export to quantum hardware formats"
    ],
    tags: ["Python", "Qiskit", "React", "D3.js", "WebGL"],
    tech: ["Python", "Qiskit", "React", "TypeScript", "D3.js", "WebGL", "FastAPI", "Docker"],
    category: "Education",
    image: "/projects/quantum-circuit/cover.png",
    images: [
      "/projects/quantum-circuit/cover.png",
      "/projects/quantum-circuit/builder.png",
      "/projects/quantum-circuit/visualization.png",
      "/projects/quantum-circuit/tutorials.png"
    ],
    github: "https://github.com/harshit/quantum-simulator",
    live: "https://quantum-sim.vercel.app",
    links: {
      live: "https://quantum-sim.vercel.app",
      repo: "https://github.com/harshit/quantum-simulator",
      demo: "https://quantum-sim.vercel.app/tutorial"
    },
    featured: false,
    rank: 10,
    impact: 70,
    year: "2022",
    status: "completed",
    achievements: ["Used in 5+ universities", "Open-source community", "Educational impact award"],
    role: "Quantum Software Developer",
    teamSize: 2,
    duration: "6 months",
    architecture: ["Quantum Computing", "Visualization", "Educational Framework"],
    metrics: {
      users: "2000+ students",
      performance: "Real-time simulation",
      accuracy: "University adoption",
      revenue: "Open-source impact"
    }
  },
  {
    id: "ecommerce-chatbot",
    title: "E-commerce AI Chatbot",
    description: "Conversational AI for customer support with product recommendations",
    longDescription: "Advanced conversational AI system for e-commerce platforms providing customer support, product recommendations, order tracking, and personalized shopping assistance.",
    overview: "E-commerce AI Chatbot enhances customer experience by providing instant, intelligent support and personalized product recommendations using natural language processing.",
    problem: "E-commerce businesses struggle with customer support scalability and providing personalized shopping experiences, leading to lost sales and poor customer satisfaction.",
    features: [
      "Natural language understanding",
      "Product recommendation engine",
      "Order tracking integration",
      "Multi-language support",
      "Sentiment analysis for support",
      "Live agent handoff",
      "Purchase intent detection",
      "Analytics and insights dashboard"
    ],
    tags: ["Python", "NLP", "TensorFlow", "DialogFlow", "Node.js"],
    tech: ["Python", "TensorFlow", "DialogFlow", "Node.js", "MongoDB", "Redis", "AWS", "WebSockets"],
    category: "AI/ML",
    image: "/projects/ecommerce-chatbot/cover.png",
    images: [
      "/projects/ecommerce-chatbot/cover.png",
      "/projects/ecommerce-chatbot/chat.png",
      "/projects/ecommerce-chatbot/recommendations.png",
      "/projects/ecommerce-chatbot/analytics.png"
    ],
    github: "https://github.com/harshit/ecommerce-chatbot",
    live: "https://ecommerce-bot.demo.app",
    links: {
      live: "https://ecommerce-bot.demo.app",
      repo: "https://github.com/harshit/ecommerce-chatbot",
      demo: "https://ecommerce-bot.demo.app/chat"
    },
    featured: false,
    rank: 11,
    impact: 68,
    year: "2022",
    status: "completed",
    achievements: ["90% query resolution", "35% increase in sales", "Multi-language support"],
    role: "AI Developer",
    teamSize: 3,
    duration: "4 months",
    architecture: ["NLP Pipeline", "Conversational AI", "Integration APIs"],
    metrics: {
      users: "100+ e-commerce sites",
      accuracy: "90% query resolution",
      performance: "35% sales increase",
      revenue: "Client satisfaction"
    }
  },
  {
    id: "realtime-chat",
    title: "Real-time Chat Application",
    description: "Scalable messaging platform with end-to-end encryption and media sharing",
    longDescription: "Secure messaging platform featuring real-time communication, end-to-end encryption, file sharing, group chats, and presence indicators built for scalability.",
    overview: "Real-time Chat Application provides secure, scalable messaging with advanced features like encryption and media sharing for modern communication needs.",
    problem: "Existing messaging platforms lack proper security, scalability, or are controlled by large corporations. Users need private, secure communication tools.",
    features: [
      "End-to-end encryption",
      "Real-time message delivery",
      "File and media sharing",
      "Group chat management",
      "User presence indicators",
      "Message search and history",
      "Custom emoji and reactions",
      "Cross-platform synchronization"
    ],
    tags: ["Node.js", "Socket.io", "React", "MongoDB", "Redis"],
    tech: ["Node.js", "Socket.io", "React", "TypeScript", "MongoDB", "Redis", "WebRTC", "Docker"],
    category: "Communication",
    image: "/projects/realtime-chat/cover.png",
    images: [
      "/projects/realtime-chat/cover.png",
      "/projects/realtime-chat/interface.png",
      "/projects/realtime-chat/groups.png",
      "/projects/realtime-chat/security.png"
    ],
    github: "https://github.com/harshit/realtime-chat",
    live: "https://chat-app-demo.vercel.app",
    links: {
      live: "https://chat-app-demo.vercel.app",
      repo: "https://github.com/harshit/realtime-chat",
      demo: "https://chat-app-demo.vercel.app/guest"
    },
    featured: false,
    rank: 12,
    impact: 66,
    year: "2022",
    status: "completed",
    achievements: ["10K+ concurrent users", "End-to-end encryption", "Sub-100ms latency"],
    role: "Full-Stack Developer",
    teamSize: 2,
    duration: "3 months",
    architecture: ["Real-time Communication", "Security-First", "Scalable Infrastructure"],
    metrics: {
      users: "10K+ concurrent users",
      performance: "Sub-100ms latency",
      accuracy: "99.9% message delivery",
      revenue: "Personal project"
    }
  },
  {
    id: "water-tracker",
    title: "Hydration Tracking App",
    description: "Smart water intake tracker with personalized recommendations and health insights",
    longDescription: "Intelligent hydration tracking application that monitors water intake, provides personalized recommendations based on activity and weather, and offers health insights.",
    overview: "Hydration Tracking App promotes healthy hydration habits through smart tracking, personalized recommendations, and gamified experiences.",
    problem: "People struggle to maintain proper hydration levels throughout the day, lacking awareness of their water intake and personalized hydration needs.",
    features: [
      "Smart water intake tracking",
      "Personalized hydration goals",
      "Weather-based recommendations",
      "Activity level integration",
      "Reminder notifications",
      "Health insights and trends",
      "Gamification elements",
      "Wearable device sync"
    ],
    tags: ["Flutter", "Firebase", "ML Kit", "Health APIs"],
    tech: ["Flutter", "Dart", "Firebase", "ML Kit", "Health APIs", "Cloud Functions", "Google Fit"],
    category: "Healthcare",
    image: "/projects/water-tracker/cover.png",
    images: [
      "/projects/water-tracker/cover.png",
      "/projects/water-tracker/tracking.png",
      "/projects/water-tracker/insights.png",
      "/projects/water-tracker/goals.png"
    ],
    github: "https://github.com/harshit/hydration-tracker",
    live: "https://play.google.com/store/apps/details?id=com.hydration",
    links: {
      live: "https://play.google.com/store/apps/details?id=com.hydration",
      repo: "https://github.com/harshit/hydration-tracker",
      demo: "https://hydration-web.vercel.app"
    },
    featured: false,
    rank: 13,
    impact: 65,
    year: "2022",
    status: "completed",
    achievements: ["Health app of the month", "100K+ downloads", "Integration with wearables"],
    role: "Mobile Developer",
    teamSize: 2,
    duration: "2 months",
    architecture: ["Mobile-First", "Health Integration", "Smart Notifications"],
    metrics: {
      users: "100K+ downloads",
      performance: "Health improvement",
      accuracy: "4.7★ rating",
      revenue: "Health impact"
    }
  },
  {
    id: "todo-slack",
    title: "Slack Todo Integration",
    description: "Productivity bot for Slack with task management and team collaboration features",
    longDescription: "Advanced Slack bot that enhances team productivity through intelligent task management, deadline tracking, progress reporting, and seamless team collaboration features.",
    overview: "Slack Todo Integration streamlines team productivity by bringing advanced task management directly into Slack workflows with intelligent automation.",
    problem: "Teams using Slack for communication struggle to manage tasks and deadlines effectively, often switching between multiple tools and losing productivity.",
    features: [
      "Slash command task creation",
      "Deadline tracking and reminders",
      "Team task assignment",
      "Progress reporting dashboards",
      "Integration with calendar apps",
      "Automated daily standups",
      "Project milestone tracking",
      "Custom workflow automation"
    ],
    tags: ["Node.js", "Slack API", "MongoDB", "Cron Jobs"],
    tech: ["Node.js", "TypeScript", "Slack API", "MongoDB", "Cron Jobs", "Express", "Redis"],
    category: "Productivity",
    image: "/projects/todo-slack/cover.png",
    images: [
      "/projects/todo-slack/cover.png",
      "/projects/todo-slack/commands.png",
      "/projects/todo-slack/dashboard.png",
      "/projects/todo-slack/reports.png"
    ],
    github: "https://github.com/harshit/slack-todo-bot",
    live: "https://slack.com/apps/A123456789",
    links: {
      live: "https://slack.com/apps/A123456789",
      repo: "https://github.com/harshit/slack-todo-bot",
      demo: "https://todo-slack-demo.herokuapp.com"
    },
    featured: false,
    rank: 14,
    impact: 64,
    year: "2021",
    status: "completed",
    achievements: ["1000+ teams using", "Slack App Directory", "5-star rating"],
    role: "Bot Developer",
    teamSize: 1,
    duration: "2 months",
    architecture: ["Bot Framework", "Webhook Integration", "Task Automation"],
    metrics: {
      users: "1000+ teams",
      performance: "Productivity boost",
      accuracy: "5★ rating",
      revenue: "Freemium model"
    }
  },
  {
    id: "stock-suite",
    title: "Stock Analysis Suite",
    description: "Comprehensive stock market analysis tool with technical indicators and portfolio tracking",
    longDescription: "Professional-grade stock analysis platform featuring advanced technical indicators, portfolio tracking, risk analysis, and automated investment strategies.",
    overview: "Stock Analysis Suite provides professional-grade financial analysis tools to individual investors, democratizing advanced market research capabilities.",
    problem: "Individual investors lack access to sophisticated stock analysis tools and comprehensive market research, limiting their investment decision-making capabilities.",
    features: [
      "Advanced technical indicators",
      "Portfolio performance tracking",
      "Risk analysis and metrics",
      "Automated screening tools",
      "Backtesting capabilities",
      "Market sentiment analysis",
      "Custom alert system",
      "Export and reporting tools"
    ],
    tags: ["Python", "Pandas", "Plotly", "Alpha Vantage API", "Streamlit"],
    tech: ["Python", "Pandas", "Plotly", "Alpha Vantage API", "Streamlit", "NumPy", "Scikit-learn"],
    category: "FinTech",
    image: "/projects/stock-suite/cover.webp",
    images: [
      "/projects/stock-suite/cover.webp",
      "/projects/stock-suite/analysis.webp",
      "/projects/stock-suite/portfolio.webp",
      "/projects/stock-suite/charts.webp"
    ],
    github: "https://github.com/harshit/stock-analysis-suite",
    live: "https://stock-suite.streamlit.app",
    links: {
      live: "https://stock-suite.streamlit.app",
      repo: "https://github.com/harshit/stock-analysis-suite",
      demo: "https://stock-suite.streamlit.app/demo"
    },
    featured: false,
    rank: 15,
    impact: 62,
    year: "2021",
    status: "completed",
    achievements: ["Financial blogger featured", "Open-source popularity", "Investment club adoption"],
    role: "Data Analyst",
    teamSize: 1,
    duration: "3 months",
    architecture: ["Data Analytics", "Visualization", "API Integration"],
    metrics: {
      users: "3000+ investors",
      performance: "Real-time analysis",
      accuracy: "Professional tools",
      revenue: "Open-source impact"
    }
  }
]

export const projectCategories = {
  All: projects,
  "Full-Stack": projects.filter((p) => p.category === "Full-Stack"),
  "AI/ML": projects.filter((p) => p.category === "AI/ML"),
  "Mobile App": projects.filter((p) => p.category === "Mobile App"),
  FinTech: projects.filter((p) => p.category === "FinTech"),
  Healthcare: projects.filter((p) => p.category === "Healthcare"),
  "E-commerce": projects.filter((p) => p.category === "E-commerce"),
  Education: projects.filter((p) => p.category === "Education"),
  Analytics: projects.filter((p) => p.category === "Analytics"),
  "Developer Tools": projects.filter((p) => p.category === "Developer Tools"),
  Communication: projects.filter((p) => p.category === "Communication"),
  Productivity: projects.filter((p) => p.category === "Productivity"),
}

export const featuredProjects = projects.filter((p) => p.featured)
