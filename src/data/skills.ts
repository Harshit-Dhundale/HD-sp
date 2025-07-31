export interface Skill {
  label: string
  cat: string
  icon: string
  years: number
}

export interface Cert {
  label: string
  issued: string
  link: string
  logo: string
}

export const skills: Skill[] = [
  // Languages
  { label: "Python", cat: "Languages", icon: "python", years: 4 },
  { label: "JavaScript", cat: "Languages", icon: "javascript", years: 3 },
  { label: "TypeScript", cat: "Languages", icon: "typescript", years: 2 },
  { label: "Java", cat: "Languages", icon: "java", years: 3 },
  { label: "C++", cat: "Languages", icon: "cplusplus", years: 2 },
  { label: "Dart", cat: "Languages", icon: "dart", years: 1 },

  // Frontend
  { label: "React", cat: "Frontend", icon: "react", years: 3 },
  { label: "Next.js", cat: "Frontend", icon: "nextjs", years: 2 },
  { label: "Tailwind CSS", cat: "Frontend", icon: "tailwindcss", years: 2 },
  { label: "Flutter", cat: "Frontend", icon: "flutter", years: 1 },
  { label: "HTML5", cat: "Frontend", icon: "html5", years: 4 },
  { label: "CSS3", cat: "Frontend", icon: "css3", years: 4 },

  // Backend
  { label: "Node.js", cat: "Backend", icon: "nodejs", years: 3 },
  { label: "Express", cat: "Backend", icon: "express", years: 3 },
  { label: "FastAPI", cat: "Backend", icon: "fastapi", years: 2 },
  { label: "Flask", cat: "Backend", icon: "flask", years: 2 },
  { label: "GraphQL", cat: "Backend", icon: "graphql", years: 1 },

  // Databases
  { label: "MongoDB", cat: "Databases", icon: "mongodb", years: 3 },
  { label: "PostgreSQL", cat: "Databases", icon: "postgresql", years: 2 },
  { label: "Redis", cat: "Databases", icon: "redis", years: 2 },
  { label: "MySQL", cat: "Databases", icon: "mysql", years: 2 },
  { label: "Supabase", cat: "Databases", icon: "supabase", years: 1 },

  // DevOps & Cloud
  { label: "Docker", cat: "DevOps", icon: "docker", years: 2 },
  { label: "AWS", cat: "Cloud", icon: "amazonwebservices", years: 2 },
  { label: "Vercel", cat: "Cloud", icon: "vercel", years: 2 },
  { label: "GitHub Actions", cat: "DevOps", icon: "githubactions", years: 2 },

  // ML/AI
  { label: "TensorFlow", cat: "ML/AI", icon: "tensorflow", years: 2 },
  { label: "PyTorch", cat: "ML/AI", icon: "pytorch", years: 1 },
  { label: "Scikit-learn", cat: "ML/AI", icon: "scikitlearn", years: 2 },
  { label: "Pandas", cat: "ML/AI", icon: "pandas", years: 3 },
]

export const certs: Cert[] = [
  {
    label: "AWS Cloud Practitioner",
    issued: "2024-04-01",
    link: "https://www.credly.com/badges/example",
    logo: "/icons/aws.svg",
  },
  {
    label: "Google Cloud Associate",
    issued: "2024-06-15",
    link: "https://www.credential.net/example",
    logo: "/icons/gcp.svg",
  },
]
