export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  overview?: string;
  problem?: string;
  features?: string[];
  tags: string[];
  tech: string[];
  category: string;
  image: string;
  images: string[];
  github?: string;
  live?: string;
  links: {
    live?: string;
    repo?: string;
    demo?: string;
  };
  featured: boolean;
  rank: number;
  impact: number;
  year: string;
  status: "completed" | "in-progress" | "planning";
  achievements: string[];
  role: string;
  teamSize?: number;
  duration?: string;
  architecture: string[];
  metrics?: {
    users?: string;
    accuracy?: string;
    performance?: string;
    revenue?: string;
    scalability?: string;
  };
}

export const projects: Project[] = [
  {
    id: "farmiculture",
    title: "FarmiCulture 🌱",
    description:
      "Secure multi-tenant agricultural management platform with AI-driven crop recommendations, disease detection, and e-commerce integration",
    longDescription:
      "FarmiCulture is a full-stack agri-tech platform that unifies farm management, AI-powered decision support, and a production-grade e-commerce system. It provides farmers with crop and fertilizer recommendations, disease detection via CNN models, and a marketplace with Razorpay integration—all deployed with CI/CD pipelines.",
    overview:
      "Built as an end-to-end solution for farmers and agri-SMBs, FarmiCulture integrates secure authentication, AI microservices, and a full commerce ecosystem. The platform eliminates fragmented tools by centralizing farm records, community engagement, AI insights, and order management into one reliable application.",
    problem:
      "Farmers face fragmented solutions: one app for farm records, another for buying inputs, another for advice. This leads to inefficiency, weak adoption, and lack of trust. They also lack AI-driven insights and secure, scalable systems for farm and business management.",
    features: [
      "JWT authentication with Redis-backed OTP verification (Nodemailer)",
      "Role-based access controls (Admin, Vendor, User)",
      "Farm & plot management dashboards",
      "AI-powered crop recommendation using Naive Bayes & Random Forest (~92–95% accuracy)",
      "Fertilizer recommendation via NPK-based regression modeling",
      "Plant disease detection using CNN models",
      "E-commerce store with catalog, cart, and Razorpay payments",
      "Automated invoice dispatch & failed-order cleanup jobs",
      "Order tracking with live delivery updates",
      "Community forum with posts and replies in real time",
      "CI/CD pipeline with GitHub Actions, deployed on Render & Vercel",
    ],
    tags: ["AI/ML", "Deep Learning", "Full-Stack", "E-Commerce", "Agriculture"],
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "Python",
      "Flask",
      "Docker",
      "Tailwind CSS",
      "Razorpay",
      "Render",
      "Vercel",
      "GitHub Actions",
    ],
    category: "Full-Stack • AI/ML • E-Commerce",
    image: "/projects/farmiculture/cover.webp",
    images: ["/projects/farmiculture/cover.webp"],
    github: "https://github.com/Harshit-Dhundale/FarmiCulture",
    live: "https://farmi-culture.vercel.app/",
    links: {
      live: "https://farmi-culture.vercel.app/",
      repo: "https://github.com/Harshit-Dhundale/FarmiCulture",
    },
    featured: true,
    rank: 1,
    impact: 95,
    year: "2025",
    status: "completed",
    achievements: [
      "Achieved 92–95% accuracy in ML crop prediction",
      "Implemented production-grade Razorpay integration with order lifecycle",
      "Built fully containerized AI microservices in Python using Docker",
      "Deployed backend + ML services on Render, frontend on Vercel with CI/CD",
    ],
    role: "Full-Stack Developer & ML Engineer (Individual Project)",
    teamSize: 1,
    duration: "3 months",
    architecture: [
      "Microservices for AI/ML",
      "REST API with Node.js & Express",
      "Dockerized Python ML services",
      "Role-based authentication with JWT + Redis OTP",
      "CI/CD with GitHub Actions",
      "React frontend with Tailwind UI",
    ],
    metrics: {
      users: "Multi-tenant farmer onboarding supported",
      accuracy: "92–95% crop prediction accuracy",
      performance: "Optimized API + microservices deployment",
      revenue: "Supports secure Razorpay-based transactions",
    },
  },
  {
    id: "codeconflux",
    title: "CodeConflux 👩‍💻",
    description:
      "Real-time collaborative code editor with AI support, Docker-based sandboxing, and multi-user synchronization.",
    longDescription:
      "CodeConflux is a full-stack real-time collaborative code editor enabling multiple users to write, run, and debug code simultaneously. It features AI-assisted code suggestions powered by Gemini, secure containerized execution with Docker, and live synchronization using WebSockets. Each session is room-based, ensuring seamless teamwork and contextual code collaboration.",
    overview:
      "Built to enhance coding collaboration and pair programming, CodeConflux provides an IDE-like experience in the browser with AI-assisted features and secure multi-language execution.",
    problem:
      "Traditional code editors lack real-time collaboration and secure multi-language execution environments. Developers often rely on separate tools for collaboration and execution, which reduces productivity.",
    features: [
      "Real-time multi-user code collaboration (Socket.IO)",
      "Support for Python, C++, Java, and JavaScript execution",
      "Secure Docker-based sandboxed execution",
      "AI-powered code suggestions with Google Gemini",
      "Unique room IDs for session-based collaboration",
      "Live editing with user presence indicators",
      "Vite-powered React frontend for high performance",
    ],
    tags: [
      "Full Stack",
      "Collaboration",
      "AI",
      "WebSockets",
      "Docker",
      "Real-time",
    ],
    tech: [
      "React",
      "Vite",
      "Socket.IO",
      "Node.js",
      "Express",
      "Docker",
      "Google Gemini",
    ],
    category: "Full-Stack • AI • Real-Time",
    image: "/projects/codeconflux/cover.webp",
    images: ["/projects/codeconflux/cover.webp"],
    // github: "https://github.com/yourusername/repo-name",
    // live: "https://coderelo-realtimecodeeditor-withaisupport.onrender.com",
    links: {
      // live: "https://coderelo-realtimecodeeditor-withaisupport.onrender.com",
      // repo: "https://github.com/yourusername/repo-name",
    },
    featured: true,
    rank: 3,
    impact: 9,
    year: "2024",
    status: "completed",
    achievements: [
      "Implemented secure code execution via Docker",
      "Integrated AI code assistance with Gemini 1.5 Flash",
      "Built a scalable WebSocket-based collaboration system",
    ],
    role: "Full-Stack Developer (Architecture, Backend, and AI Integration)",
    teamSize: 1,
    duration: "3 weeks",
    architecture: [
      "React (Vite)",
      "Node.js + Express",
      "Socket.IO",
      "Docker",
      "Google Gemini API",
    ],
    metrics: {
      users: "10+ concurrent users per session",
      performance: "Low-latency collaboration under 200ms sync",
    },
  },
  {
    id: "stocktau",
    title: "StockTau 📊",
    description:
      "A virtual stock trading platform offering real-time market data, portfolio management, and risk-control tools for practicing trading strategies safely.",
    longDescription:
      "StockTau is a full-stack virtual trading platform built to simulate the real stock market experience. It enables users to create portfolios, buy and sell stocks, and track their performance using live market data. With integrated risk management tools, market insights, and segment-wise market status, it offers a complete environment for learners and enthusiasts to practice trading without financial risk.",
    overview:
      "StockTau bridges the gap between learning and live trading by providing a practice environment with real-time data. It integrates Fyres & NSE APIs, a secure backend, and an intuitive React frontend to ensure both accuracy and usability.",
    problem:
      "Beginner traders often struggle to practice trading safely. Existing solutions are either too basic or lack real-time accuracy, preventing effective learning. There was a need for a platform that combines real-world data with risk management features for safe and practical learning.",
    features: [
      "Virtual trading with portfolio creation and stock transactions",
      "Real-time stock market data using Fyres & NSE APIs",
      "Risk management tools (stop-loss, exposure control)",
      "Market status across all trading segments in one dashboard",
      "Top gainers and losers with detailed insights",
      "Educational resources like tutorials, articles, and trading strategies",
    ],
    tags: ["Finance", "Trading", "Full-Stack", "Simulation"],
    tech: ["React", "Node.js", "Express", "MongoDB", "Fyres API", "NSE API"],
    category: "Full-Stack • Finance • Simulation",
    image: "/projects/stocktau/cover.webp",
    images: ["/projects/stocktau/cover.webp"],
    github: "https://github.com/Harshit-Dhundale/StockTau",
    links: {
      repo: "https://github.com/Harshit-Dhundale/StockTau",
    },
    featured: false,
    rank: 2,
    impact: 85,
    year: "2024",
    status: "completed",
    achievements: [
      "Integrated live market data from NSE and Fyres APIs",
      "Developed a risk management system with stop-loss functionality",
      "Created an interactive portfolio management system with analytics",
    ],
    role: "Full-Stack Developer (Individual Project)",
    teamSize: 1,
    duration: "1 month",
    architecture: [
      "Frontend: React-based SPA",
      "Backend: Node.js + Express REST APIs",
      "Database: MongoDB",
      "External APIs: Fyres API, NSE API",
      "Authentication with JWT",
    ],
    metrics: {
      users: "Supports multiple users with secure authentication",
      performance: "Handles real-time stock price updates efficiently",
    },
  },
  {
    id: "ecommerce-chatbot",
    title: "ShopAssist AI 🛍️",
    description:
      "Container-ready chatbot answering product, stock, and order queries for a fictitious clothing retailer.",
    longDescription:
      "A full-stack, interview-assignment chatbot that ingests a 1M-row dataset into MongoDB and answers customer queries about products, inventory, and order status. The system prioritizes database pipelines for speed and falls back to an LLM (Groq compound-beta) for natural-language responses. Includes a React dashboard with chat window, conversation history, and full Docker-compose setup.",
    overview:
      "The chatbot demonstrates end-to-end integration of FastAPI, MongoDB, and Groq LLM with a Next.js frontend. It was built as a 2-day assignment for Think41’s second interview round, focusing on scalability, clean architecture, and developer-friendly setup.",
    problem:
      "E-commerce support teams face repetitive customer queries like stock availability and order tracking. Manual handling leads to inefficiency and delayed responses.",
    features: [
      "Ingest ~1M rows from CSVs into MongoDB",
      "Aggregation pipelines for top products, stock left, and order status",
      "Natural language fallback via Groq LLM",
      "Multi-user conversation history schema",
      "React UI with chat window, conversation list, and input box",
      "Full Docker-compose setup (Mongo + FastAPI + Frontend)",
      "Auto-generated FastAPI docs for all APIs",
    ],
    tags: ["FastAPI", "MongoDB", "Groq LLM", "Next.js", "React", "Docker"],
    tech: [
      "Python",
      "FastAPI",
      "MongoDB",
      "Groq compound-beta",
      "Next.js 14",
      "React 18",
      "Docker",
    ],
    category: "AI/ML • Conversational AI • Full-Stack",
    image: "/projects/ecommerce-chatbot/cover.png",
    images: ["/projects/ecommerce-chatbot/cover.png"],
    github: "https://github.com/Harshit-Dhundale/Think41_2_Interview",
    live: "https://github.com/Harshit-Dhundale/Think41_2_Interview",
    links: {
      repo: "https://github.com/Harshit-Dhundale/Think41_2_Interview",
      demo: "https://github.com/Harshit-Dhundale/Think41_2_Interview",
    },
    featured: false,
    rank: 11,
    impact: 0,
    year: "2025",
    status: "completed",
    achievements: [
      "Completed in 2 days as part of interview assignment",
      "Handled ~1M dataset rows in MongoDB",
      "Seamless DB-first + LLM-fallback design",
    ],
    role: "Full-Stack Developer",
    teamSize: 1,
    duration: "2 days",
    architecture: [
      "FastAPI backend with chat and conversation APIs",
      "MongoDB pipelines for structured queries",
      "Groq compound-beta LLM integration",
      "Next.js + React UI with Context for state",
      "Docker-compose orchestration",
    ],
    metrics: {
      users: "Demo project (fictitious e-commerce site)",
      accuracy: "DB queries precise, LLM fallback tested",
      performance: "Docker setup runs locally in <1 min",
      revenue: "Interview project — no commercial metrics",
    },
  },
  {
    id: "store-rating-platform",
    title: "RateMyStore ⭐",
    description:
      "A full-stack platform where users can rate stores (1–5 stars), with distinct capabilities for admins, store owners, and normal users. Built using Next.js 13 (App Router) and Supabase with secure row-level access control.",
    longDescription:
      "This project is a modern store-rating platform with multi-role access control. Admins can manage stores and users while viewing global analytics, store owners can monitor ratings for their stores, and normal users can browse stores, submit, and update ratings. The app leverages Next.js 13 App Router with React Server Components, Supabase for Postgres, Auth, and Storage, and implements Row-Level Security (RLS) for secure multi-tenant data isolation. Tailwind CSS and Shadcn/UI ensure consistent, accessible UI. The project also includes CI/CD with GitHub Actions and testing setup with Vitest and React Testing Library.",
    overview:
      "A role-based rating system with modern full-stack best practices. Features dashboards for admins and store owners, rating and browsing system for users, and secure backend enforced by RLS policies.",
    problem:
      "Traditional rating platforms often lack clear multi-role isolation and secure backend enforcement. This platform solves those gaps by leveraging Supabase RLS policies, service/admin keys, and carefully designed schema relations to ensure robust access control.",
    features: [
      "Role-based access (Admin, Store Owner, User)",
      "JWT Authentication via Supabase",
      "Row-Level Security enforced per role",
      "Admin dashboard for global analytics and user/store management",
      "Store Owner dashboard with per-store ratings & performance metrics",
      "User features: signup, browse stores, submit/update ratings",
      "Average rating per store (materialized view)",
      "Filtering & browsing functionality",
      "Next.js App Router (RSC + API Routes)",
      "CI/CD setup with GitHub Actions",
      "Testing with Vitest, RTL, and Cypress scaffold",
    ],
    tags: [
      "Next.js",
      "Supabase",
      "Full-Stack",
      "RLS",
      "TypeScript",
      "Tailwind",
    ],
    tech: [
      "Next.js 13 (App Router)",
      "React 18",
      "TypeScript",
      "Supabase (Postgres + Auth + Storage)",
      "Tailwind CSS",
      "Shadcn/UI",
      "Lucide Icons",
      "zod + React Hook Form",
      "Vitest + React Testing Library",
      "Cypress",
      "GitHub Actions",
    ],
    category: "Full-Stack • Security • Web",
    image: "/projects/storerating/main.png",
    images: ["/projects/storerating/main.png"],
    github: "https://github.com/your-org/store-rating-platform",
    live: "", // Vercel deployment link can go here
    links: {
      repo: "https://github.com/your-org/store-rating-platform",
      demo: "Demo link (if deployed on Vercel)",
    },
    featured: true,
    rank: 5,
    impact: 9,
    year: "2025",
    status: "completed",
    achievements: [
      "Implemented secure row-level access with Supabase RLS",
      "Designed multi-role dashboards (Admin, Store Owner, User)",
      "Built modern Next.js 13 App Router + RSC architecture",
      "Integrated CI/CD with GitHub Actions for testing & linting",
      "Created reusable UI with Shadcn/UI & Tailwind CSS",
    ],
    role: "Full-Stack Developer (architecture, backend RLS, frontend dashboards)",
    teamSize: 1,
    duration: "2 weeks",
    architecture: [
      "Next.js App Router (RSC + API routes)",
      "Supabase Postgres with Auth & Storage",
      "Row-Level Security Policies",
      "Materialized views for analytics",
      "CI/CD with GitHub Actions",
    ],
    metrics: {
      users: "Supports Admins, Store Owners, and Users with isolated access",
      performance: "RLS ensures low-latency per-role isolation",
    },
  },
  {
    id: "real-time-chat-app",
    title: "ChatterBox RT 💬",
    description:
      "WebSocket-based real-time chat backend with offline message buffering, guaranteed message ordering, and REST APIs for chat history retrieval.",
    longDescription:
      "This project is a real-time chat backend system built with Node.js, Express, and WebSocket. It enables instant messaging between users with features like offline message buffering, message acknowledgments, and guaranteed ordering using async mutex locks. The system also provides REST endpoints for retrieving chat history and status, along with a minimal React frontend for demonstration purposes.",
    overview:
      "Designed to showcase robust WebSocket communication, this backend system ensures reliable messaging with offline support, acknowledgments, and chat history APIs, making it suitable for scalable chat applications.",
    problem:
      "Most basic chat backends fail to handle offline delivery, ordering guarantees, and robust reconnection gracefully. This project solves these gaps with in-memory storage and mutex-controlled operations.",
    features: [
      "Real-time messaging via WebSocket (ws library)",
      "Offline message buffering with auto-delivery on reconnection",
      "Guaranteed message ordering with async mutex locks",
      "Message acknowledgments (ACK responses with IDs)",
      "Chat history retrieval via REST API",
      "Thread-safe concurrent operations",
      "Comprehensive logging with emoji indicators",
      "Minimal React frontend for testing and demonstration",
    ],
    tags: [
      "WebSocket",
      "Backend",
      "Real-time",
      "Node.js",
      "Express",
      "Messaging",
    ],
    tech: [
      "Node.js",
      "Express",
      "WebSocket (ws)",
      "async-mutex",
      "React (frontend demo)",
    ],
    category: "Backend • Real-Time • System Design",
    image: "/projects/realtime-chat/cover.png",
    images: ["/projects/realtime-chat/cover.png"],
    github: "https://github.com/Harshit-Dhundale/Real-Time-Chat-Application",
    live: "", // no deployed backend link provided
    links: {
      repo: "https://github.com/Harshit-Dhundale/Real-Time-Chat-Application",
      demo: "Demo video available (link can be added here)",
    },
    featured: false,
    rank: 4,
    impact: 8,
    year: "2025",
    status: "completed",
    achievements: [
      "Implemented offline message buffering and auto-delivery",
      "Ensured guaranteed message ordering with async-mutex",
      "Developed REST API for chat history retrieval",
      "Built robust logging and reconnection handling system",
    ],
    role: "Backend Developer (Architecture, WebSocket & REST APIs)",
    teamSize: 1,
    duration: "1.5 weeks",
    architecture: [
      "Node.js",
      "Express",
      "WebSocket (ws)",
      "async-mutex",
      "React frontend (demo)",
    ],
    metrics: {
      users: "Supports multiple concurrent users with separate chat streams",
      performance: "Low latency delivery with guaranteed ordering",
    },
  },

  {
    id: "stockly",
    title: "Stockly 📦",
    description:
      "Admin panel for retailers to manage inventory, orders, and sales analytics.",
    longDescription:
      "Stockly is the admin-facing dashboard of our hackathon project. It enables vendors and store managers to track inventory, manage stock levels, process orders, and analyze sales trends. Integrated with MarketMitra, it provides a seamless end-to-end retail solution.",
    overview:
      "Designed as the inventory and sales management backbone, Stockly connects retailers with their customers by keeping product data, orders, and analytics in sync. It ensures low-stock alerts, order tracking, and real-time analytics.",
    problem:
      "Small retailers struggle with inventory mismanagement and lack of digital tools for monitoring sales trends. They require an intuitive platform to track stock and integrate with customer-facing systems.",
    features: [
      "Real-time inventory management",
      "Order tracking and fulfillment",
      "Sales and revenue analytics",
      "Low-stock alerts and dead stock tracking",
      "Razorpay integration for payments",
    ],
    tags: ["E-Commerce", "Full-Stack", "Hackathon", "Analytics"],
    tech: ["React", "Node.js", "Express", "MongoDB", "Razorpay", "Vercel"],
    category: "Full-Stack • Hackathon • Analytics",
    image: "/projects/stockly/cover.webp",
    images: ["/projects/stockly/cover.webp"],
    github: "https://github.com/Harshit-Dhundale/MarketMitra-and-Stockly",
    live: "https://stockly-mu.vercel.app/",
    links: {
      live: "https://stockly-mu.vercel.app/",
      repo: "https://github.com/Harshit-Dhundale/MarketMitra-and-Stockly",
    },
    featured: false,
    rank: 3,
    impact: 85,
    year: "2024",
    status: "completed",
    achievements: [
      "Awarded Best Performer in hackathon with MarketMitra",
      "Implemented real-time inventory & analytics dashboard",
      "End-to-end sync with customer-facing MarketMitra platform",
    ],
    role: "Backend & Dashboard Developer",
    teamSize: 4,
    duration: "2 days (Hackathon)",
    architecture: [
      "React admin dashboard",
      "Node.js + Express backend",
      "MongoDB for inventory management",
      "REST APIs for MarketMitra integration",
    ],
    metrics: {
      users: "Vendor-side management panel",
      performance: "Supports real-time API sync with MarketMitra",
      revenue: "Tracks revenue analytics with Razorpay",
    },
  },
  {
    id: "marketmitra",
    title: "MarketMitra 🛒",
    description:
      "Client-side marketplace for retailers with secure checkout, product browsing, and order management.",
    longDescription:
      "MarketMitra is the customer-facing platform of our full-stack hackathon project. It enables end-users to browse inventory, place orders, and complete secure transactions using Razorpay. The UI focuses on simplicity and reliability to ensure seamless shopping for customers.",
    overview:
      "Designed as the marketplace interface for retailers and customers, MarketMitra ensures fast product search, secure checkout, and scalable performance. It integrates tightly with Stockly (Admin Panel) via REST APIs to fetch inventory and manage orders in real time.",
    problem:
      "Retailers often lack modern, reliable e-commerce interfaces for customers, resulting in poor user adoption. Customers need a user-friendly system that connects directly with backend inventory management.",
    features: [
      "Product browsing with quick search",
      "Cart and checkout system",
      "Razorpay payment gateway integration",
      "Order history tracking",
      "Real-time inventory sync from Stockly",
    ],
    tags: ["E-Commerce", "Full-Stack", "Hackathon"],
    tech: ["React", "Node.js", "Express", "MongoDB", "Razorpay", "Vercel"],
    category: "Full-Stack • Hackathon • E-Commerce",
    image: "/projects/marketmitra/cover.webp",
    images: ["/projects/marketmitra/cover.webp"],
    github: "https://github.com/Harshit-Dhundale/MarketMitra-and-Stockly",
    live: "https://marketmitra.vercel.app/",
    links: {
      live: "https://marketmitra.vercel.app/",
      repo: "https://github.com/Harshit-Dhundale/MarketMitra-and-Stockly",
    },
    featured: false,
    rank: 2,
    impact: 80,
    year: "2024",
    status: "completed",
    achievements: [
      "Built in 2 days during hackathon, awarded Best Performer",
      "Successfully integrated real-time APIs with Stockly Admin Panel",
      "Delivered production-ready Razorpay checkout flow",
    ],
    role: "Frontend + Full-Stack Developer",
    teamSize: 4,
    duration: "2 days (Hackathon)",
    architecture: [
      "React frontend with REST API integration",
      "Node.js + Express backend",
      "MongoDB for order management",
      "Razorpay for payments",
    ],
    metrics: {
      users: "Customer-side marketplace",
      performance: "Real-time inventory sync with backend",
      revenue: "Supports online payments via Razorpay",
    },
  },

  {
    id: "hydration-tracker",
    title: "HydraTrack 💧",
    description:
      "Full-stack hydration tracker with logging, history, streaks, and data export",
    longDescription:
      "A modern hydration tracking application built with Next.js and MongoDB. The app lets users log water intake, track daily progress, review history, monitor streaks, and export their data. Designed as a full-stack demo project that evolved into a production-ready hydration tracker.",
    overview:
      "The Hydration Tracking Application helps users maintain healthy hydration habits with smart logging, streak tracking, progress insights, and multi-user support.",
    problem:
      "People often underestimate or forget their daily water intake, leading to dehydration. Most hydration apps are either too simple (lacking analytics) or too bloated. A balance was needed: fast, reliable, and insightful tracking.",
    features: [
      "Log water intake (manual entry or quick-add presets)",
      "Configurable daily hydration goals",
      "Daily progress visualization (rings, totals)",
      "7-day & 30-day history views with badges",
      "Streak tracking (current & longest)",
      "Aggregated stats (average, best day, success rate)",
      "Multi-user authentication with secure sessions",
      "Demo mode with auto-expiring test accounts",
      "Export data as CSV or JSON",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "React Query",
      "Tailwind",
      "Node.js",
    ],
    tech: [
      "Next.js App Router",
      "TypeScript",
      "MongoDB Atlas",
      "React Query",
      "Tailwind / shadcn/ui",
      "Node.js API Layer",
    ],
    category: "Full-Stack • Health Tech • Utility",
    image: "/projects/water-tracker/cover.png",
    images: [
      "/projects/water-tracker/cover.png",
    ],
    github: "https://github.com/Harshit-Dhundale/Water-Intake-Tracker",
    // live: "https://hydration-web.vercel.app",
    links: {
      // live: "https://hydration-web.vercel.app",
      repo: "https://github.com/Harshit-Dhundale/Water-Intake-Tracker",
      // demo: "https://hydration-web.vercel.app/demo",
    },
    featured: false,
    rank: 13,
    impact: 70,
    year: "2023",
    status: "completed",
    achievements: [
      "Implemented streak logic with timezone support",
      "Built full authentication + secure sessions",
      "Added data export (CSV & JSON) feature",
    ],
    role: "Full-Stack Developer",
    teamSize: 1,
    duration: "2 months",
    architecture: [
      "Next.js Full-Stack",
      "Serverless API Routes",
      "MongoDB Atlas Persistence",
    ],
    metrics: {
      users: "Demo + multi-user support",
      performance: "Optimized Next.js build for fast loads",
      accuracy: "Timezone-aware hydration summaries",
      revenue: "Open-source learning/demo project",
    },
  },
  {
    id: "todo-summary-app",
    title: "TaskWise AI ✅",
    description:
      "AI-powered to-do app with Slack integration and Supabase backend",
    longDescription:
      "A full-stack task management application that lets users create, view, edit, and delete todos, then generate AI-powered summaries of all pending tasks using Google Gemini. The summaries are displayed inside the app and automatically posted to a Slack channel via Webhooks, making it ideal for personal productivity and team workflows.",
    overview:
      "Todo Summary App combines CRUD task management with AI-generated insights and Slack integration to improve productivity and reduce context switching.",
    problem:
      "Traditional to-do apps lack AI assistance and team collaboration features. Users often need to manually summarize or communicate tasks across platforms, leading to inefficiency.",
    features: [
      "CRUD Todos: create, edit, delete, and view tasks",
      "Detail view for each task",
      "AI Summaries of pending tasks (Google Gemini gemini-2.0-flash)",
      "Slack integration via Incoming Webhooks",
      "On-site AI summary display in the UI",
      "Responsive, modern UI with Tailwind CSS",
      "Supabase-backed persistent storage",
    ],
    tags: [
      "React",
      "Express.js",
      "Supabase",
      "Slack API",
      "Google Gemini",
      "TailwindCSS",
    ],
    tech: [
      "React.js",
      "Express.js",
      "Supabase (Postgres)",
      "Google Gemini API",
      "Slack Incoming Webhooks",
      "Tailwind CSS",
      "Node.js",
    ],
    category: "AI/ML • Productivity • Full-Stack",
    image: "/projects/todo-slack/cover.png",
    images: ["/projects/todo-slack/cover.png"],
    github: "https://github.com/Harshit-Dhundale/Todo-Summary-App",
    // live: "https://todo-summary-app.vercel.app",
    links: {
      // live: "https://todo-summary-app.vercel.app",
      repo: "https://github.com/Harshit-Dhundale/Todo-Summary-App",
      // demo: "https://youtu.be/your-demo-video",
    },
    featured: false,
    rank: 15,
    impact: 70,
    year: "2025",
    status: "completed",
    achievements: [
      "Integrated free-tier LLM (Gemini 2.0 Flash) for real-time summaries",
      "Successful Slack workflow automation",
      "Built in just 2 days as a rapid prototyping project",
    ],
    role: "Full Stack Developer",
    teamSize: 1,
    duration: "2 days",
    architecture: [
      "Client-server REST API",
      "Supabase (Postgres) storage",
      "AI Summarization via Google Gemini",
      "Slack Webhook integration",
    ],
    metrics: {
      users: "Prototype stage (personal use + demo-ready)",
      performance: "Sub-second CRUD ops, summary generation in ~2s",
      accuracy: "Gemini summaries contextual & task-specific",
      revenue: "Non-commercial prototype",
    },
  },
  // {
  //   id: "clumpcoder",
  //   title: "ClumpCoder",
  //   description: "Competitive programming platform with automated judging and performance analytics",
  //   longDescription: "Advanced competitive programming platform featuring automated code judging, performance analytics, contest management, and comprehensive learning resources for coding enthusiasts.",
  //   overview: "ClumpCoder democratizes competitive programming by providing a comprehensive platform for learning, practicing, and competing in coding challenges with real-time feedback.",
  //   problem: "Aspiring competitive programmers lack access to quality practice platforms with automated judging, detailed analytics, and structured learning paths.",
  //   features: [
  //     "Automated code judging system",
  //     "Real-time contest hosting",
  //     "Performance analytics dashboard",
  //     "Problem difficulty classification",
  //     "Learning path recommendations",
  //     "Community discussion forums",
  //     "Multiple language support",
  //     "Editorial and solution explanations"
  //   ],
  //   tags: ["Django", "React", "Docker", "PostgreSQL", "Redis", "Celery"],
  //   tech: ["Django", "Python", "React", "TypeScript", "Docker", "PostgreSQL", "Redis", "Celery", "AWS"],
  //   category: "Education",
  //   image: "/projects/clumpcoder/cover.webp",
  //   images: [
  //     "/projects/clumpcoder/cover.webp"
  //   ],
  //   github: "https://github.com/harshit/clumpcoder",
  //   live: "https://clumpcoder.com",
  //   links: {
  //     live: "https://clumpcoder.com",
  //     repo: "https://github.com/harshit/clumpcoder",
  //     demo: "https://clumpcoder.com/demo"
  //   },
  //   featured: true,
  //   rank: 7,
  //   impact: 78,
  //   year: "2023",
  //   status: "completed",
  //   achievements: ["5000+ registered users", "100+ coding contests", "Integration with major judges"],
  //   role: "Backend Developer",
  //   teamSize: 3,
  //   duration: "5 months",
  //   architecture: ["Queue Processing", "Microservices", "Container Orchestration"],
  //   metrics: {
  //     users: "5000+ programmers",
  //     performance: "Sub-5s judging",
  //     accuracy: "99.9% judge accuracy",
  //     revenue: "Educational impact"
  //   }
  // },
  {
  "id": "pdf-details-extractor",
  "title": "DocuParse 📄",
  "description": "Automated tool to extract Name, Phone Number, and Address from PDF documents.",
  "longDescription": "A full-stack project that extracts specific user details (Name, Phone Number, Address) from PDFs and displays them on a React frontend. The backend uses Python and PyMuPDF for reliable text parsing, while Node.js/Express powers the API layer. Initially designed as a lightweight solution, with future plans to integrate NLP models like spaCy or Transformers for advanced entity recognition.",
  "overview": "This project automates PDF parsing by extracting structured details without manual effort. It demonstrates frontend-backend integration and AI-readiness for scaling into advanced document intelligence.",
  "problem": "Manual extraction of key fields from PDFs is error-prone and time-consuming. A lightweight, automated system was needed to extract details quickly and reliably.",
  "features": [
    "Extracts Name, Phone Number, and Address from PDFs",
    "Uses PyMuPDF for fast and reliable parsing",
    "React-based frontend to display extracted details",
    "Node.js + Express backend API integration",
    "Planned NLP/AI model support for advanced entity recognition",
    "Cross-platform support via browser UI"
  ],
  "tags": ["Python", "React", "Node.js", "Express", "PyMuPDF"],
  "tech": [
    "Python",
    "PyMuPDF",
    "React",
    "Node.js",
    "Express"
  ],
  "category": "AI/ML • Automation • Python",
  "image": "/projects/pdf-extractor/cover.webp",
  "images": ["/projects/pdf-extractor/cover.webp"],
  "github": "https://github.com/Harshit-Dhundale/PDF-Details-Extractor",
  "live": "",
  "links": {
    "live": "",
    "repo": "https://github.com/Harshit-Dhundale/PDF-Details-Extractor"
  },
  "featured": false,
  "rank": 8,
  "impact": 60,
  "year": "2023",
  "status": "completed",
  "achievements": [
    "Successfully extracted structured fields (Name, Phone, Address) from multiple PDFs",
    "Demonstrated frontend-backend integration",
    "Showcased scope for NLP/AI expansion"
  ],
  "role": "Full Stack Developer",
  "teamSize": 1,
  "duration": "2 weeks",
  "architecture": ["Frontend-Backend Integration", "PDF Parsing Layer"],
  "metrics": {
    "accuracy": "High for standard PDFs",
    "performance": "Processes PDFs instantly",
    "scalability": "Planned AI/NLP improvements"
  }
}
,
  // {
  //   id: "congkong",
  //   title: "CongKong",
  //   description: "Social media analytics platform with sentiment analysis and trend prediction",
  //   longDescription: "Comprehensive social media analytics platform that monitors brand mentions, analyzes sentiment, predicts trends, and provides actionable insights for marketing teams.",
  //   overview: "CongKong transforms social media data into actionable business insights using advanced analytics and AI to help brands understand their online presence and audience sentiment.",
  //   problem: "Brands struggle to monitor and analyze their social media presence across multiple platforms, missing important conversations and trends that impact their reputation.",
  //   features: [
  //     "Multi-platform social monitoring",
  //     "Real-time sentiment analysis",
  //     "Trend prediction algorithms",
  //     "Competitor analysis tools",
  //     "Automated reporting system",
  //     "Influencer identification",
  //     "Crisis detection alerts",
  //     "Custom dashboard creation"
  //   ],
  //   tags: ["React", "Python", "Kafka", "Elasticsearch", "MongoDB", "AWS"],
  //   tech: ["React", "TypeScript", "Python", "Kafka", "Elasticsearch", "MongoDB", "AWS", "Docker", "Redis"],
  //   category: "Analytics",
  //   image: "/projects/congkong/cover.webp",
  //   images: [
  //     "/projects/congkong/cover.webp"
  //   ],
  //   github: "https://github.com/harshit/congkong",
  //   live: "https://congkong.analytics",
  //   links: {
  //     live: "https://congkong.analytics",
  //     repo: "https://github.com/harshit/congkong",
  //     demo: "https://congkong.analytics/demo"
  //   },
  //   featured: false,
  //   rank: 9,
  //   impact: 72,
  //   year: "2022",
  //   status: "completed",
  //   achievements: ["Real-time sentiment analysis", "Multi-platform monitoring", "Enterprise clients"],
  //   role: "Data Engineer",
  //   teamSize: 4,
  //   duration: "4 months",
  //   architecture: ["Stream Processing", "Big Data", "Real-time Analytics"],
  //   metrics: {
  //     users: "50+ enterprises",
  //     performance: "Real-time processing",
  //     accuracy: "92% sentiment accuracy",
  //     revenue: "SaaS revenue model"
  //   }
  // },
  // {
  //   id: "quantum-circuit",
  //   title: "Quantum Circuit Simulator",
  //   description: "Educational quantum computing simulator with visual circuit builder",
  //   longDescription: "Interactive quantum computing simulator designed for educational purposes, featuring a visual circuit builder, quantum gate library, and step-by-step execution visualization.",
  //   overview: "Quantum Circuit Simulator makes quantum computing accessible to students and researchers through intuitive visual tools and educational resources.",
  //   problem: "Quantum computing education lacks accessible tools for students to visualize and experiment with quantum circuits without expensive hardware or complex software.",
  //   features: [
  //     "Visual quantum circuit builder",
  //     "Comprehensive gate library",
  //     "Step-by-step execution visualization",
  //     "Quantum state visualization",
  //     "Educational tutorials and examples",
  //     "Circuit sharing and collaboration",
  //     "Performance benchmarking",
  //     "Export to quantum hardware formats"
  //   ],
  //   tags: ["Python", "Qiskit", "React", "D3.js", "WebGL"],
  //   tech: ["Python", "Qiskit", "React", "TypeScript", "D3.js", "WebGL", "FastAPI", "Docker"],
  //   category: "Education",
  //   image: "/projects/quantum-circuit/cover.png",
  //   images: [
  //     "/projects/quantum-circuit/cover.png"
  //   ],
  //   github: "https://github.com/harshit/quantum-simulator",
  //   live: "https://quantum-sim.vercel.app",
  //   links: {
  //     live: "https://quantum-sim.vercel.app",
  //     repo: "https://github.com/harshit/quantum-simulator",
  //     demo: "https://quantum-sim.vercel.app/tutorial"
  //   },
  //   featured: false,
  //   rank: 10,
  //   impact: 70,
  //   year: "2022",
  //   status: "completed",
  //   achievements: ["Used in 5+ universities", "Open-source community", "Educational impact award"],
  //   role: "Quantum Software Developer",
  //   teamSize: 2,
  //   duration: "6 months",
  //   architecture: ["Quantum Computing", "Visualization", "Educational Framework"],
  //   metrics: {
  //     users: "2000+ students",
  //     performance: "Real-time simulation",
  //     accuracy: "University adoption",
  //     revenue: "Open-source impact"
  //   }
  // },

];

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
};

export const featuredProjects = projects.filter((p) => p.featured);
