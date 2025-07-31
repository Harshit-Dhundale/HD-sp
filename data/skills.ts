export interface Skill {
  name: string
  category: "frontend" | "backend" | "mobile" | "database" | "cloud" | "tools" | "ai"
  level: "beginner" | "intermediate" | "advanced" | "expert"
  icon: string
  color: string
  yearsOfExperience: number
  projects: number
}

export const skills: Skill[] = [
  // Frontend
  {
    name: "React",
    category: "frontend",
    level: "expert",
    icon: "react",
    color: "#61DAFB",
    yearsOfExperience: 4,
    projects: 25,
  },
  {
    name: "Next.js",
    category: "frontend",
    level: "expert",
    icon: "nextdotjs",
    color: "#000000",
    yearsOfExperience: 3,
    projects: 18,
  },
  {
    name: "TypeScript",
    category: "frontend",
    level: "advanced",
    icon: "typescript",
    color: "#3178C6",
    yearsOfExperience: 3,
    projects: 20,
  },
  {
    name: "JavaScript",
    category: "frontend",
    level: "expert",
    icon: "javascript",
    color: "#F7DF1E",
    yearsOfExperience: 5,
    projects: 30,
  },
  {
    name: "HTML5",
    category: "frontend",
    level: "expert",
    icon: "html5",
    color: "#E34F26",
    yearsOfExperience: 5,
    projects: 35,
  },
  {
    name: "CSS3",
    category: "frontend",
    level: "advanced",
    icon: "css3",
    color: "#1572B6",
    yearsOfExperience: 5,
    projects: 35,
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    level: "advanced",
    icon: "tailwindcss",
    color: "#06B6D4",
    yearsOfExperience: 2,
    projects: 15,
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    level: "advanced",
    icon: "nodedotjs",
    color: "#339933",
    yearsOfExperience: 3,
    projects: 20,
  },
  {
    name: "Python",
    category: "backend",
    level: "advanced",
    icon: "python",
    color: "#3776AB",
    yearsOfExperience: 4,
    projects: 22,
  },
  {
    name: "Express.js",
    category: "backend",
    level: "advanced",
    icon: "express",
    color: "#000000",
    yearsOfExperience: 3,
    projects: 18,
  },
  {
    name: "FastAPI",
    category: "backend",
    level: "intermediate",
    icon: "fastapi",
    color: "#009688",
    yearsOfExperience: 2,
    projects: 8,
  },

  // Mobile
  {
    name: "React Native",
    category: "mobile",
    level: "intermediate",
    icon: "react",
    color: "#61DAFB",
    yearsOfExperience: 2,
    projects: 6,
  },
  {
    name: "Flutter",
    category: "mobile",
    level: "intermediate",
    icon: "flutter",
    color: "#02569B",
    yearsOfExperience: 1,
    projects: 4,
  },

  // Database
  {
    name: "MongoDB",
    category: "database",
    level: "advanced",
    icon: "mongodb",
    color: "#47A248",
    yearsOfExperience: 3,
    projects: 15,
  },
  {
    name: "PostgreSQL",
    category: "database",
    level: "intermediate",
    icon: "postgresql",
    color: "#336791",
    yearsOfExperience: 2,
    projects: 8,
  },
  {
    name: "MySQL",
    category: "database",
    level: "intermediate",
    icon: "mysql",
    color: "#4479A1",
    yearsOfExperience: 2,
    projects: 10,
  },

  // Cloud
  {
    name: "AWS",
    category: "cloud",
    level: "intermediate",
    icon: "amazonaws",
    color: "#FF9900",
    yearsOfExperience: 2,
    projects: 12,
  },
  {
    name: "Google Cloud",
    category: "cloud",
    level: "intermediate",
    icon: "googlecloud",
    color: "#4285F4",
    yearsOfExperience: 1,
    projects: 6,
  },
  {
    name: "Vercel",
    category: "cloud",
    level: "advanced",
    icon: "vercel",
    color: "#000000",
    yearsOfExperience: 2,
    projects: 20,
  },

  // Tools
  {
    name: "Git",
    category: "tools",
    level: "advanced",
    icon: "git",
    color: "#F05032",
    yearsOfExperience: 4,
    projects: 40,
  },
  {
    name: "Docker",
    category: "tools",
    level: "intermediate",
    icon: "docker",
    color: "#2496ED",
    yearsOfExperience: 2,
    projects: 8,
  },
  {
    name: "VS Code",
    category: "tools",
    level: "expert",
    icon: "visualstudiocode",
    color: "#007ACC",
    yearsOfExperience: 5,
    projects: 50,
  },

  // AI/ML
  {
    name: "TensorFlow",
    category: "ai",
    level: "intermediate",
    icon: "tensorflow",
    color: "#FF6F00",
    yearsOfExperience: 2,
    projects: 5,
  },
  {
    name: "OpenAI API",
    category: "ai",
    level: "intermediate",
    icon: "openai",
    color: "#412991",
    yearsOfExperience: 1,
    projects: 8,
  },
]

export const skillCategories = [
  { id: "all", name: "All Skills", count: skills.length },
  { id: "frontend", name: "Frontend", count: skills.filter((s) => s.category === "frontend").length },
  { id: "backend", name: "Backend", count: skills.filter((s) => s.category === "backend").length },
  { id: "mobile", name: "Mobile", count: skills.filter((s) => s.category === "mobile").length },
  { id: "database", name: "Database", count: skills.filter((s) => s.category === "database").length },
  { id: "cloud", name: "Cloud", count: skills.filter((s) => s.category === "cloud").length },
  { id: "tools", name: "Tools", count: skills.filter((s) => s.category === "tools").length },
  { id: "ai", name: "AI/ML", count: skills.filter((s) => s.category === "ai").length },
]
