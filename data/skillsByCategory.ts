export interface Skill {
  name: string
  level?: 'Core' | 'Advanced' | 'Familiar'
  category: string
}

export interface SkillCategory {
  id: string
  label: string
  description: string
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    description: 'Building responsive and interactive user interfaces'
  },
  {
    id: 'backend',
    label: 'Backend',
    description: 'Server-side development and API architecture'
  },
  {
    id: 'database',
    label: 'Databases',
    description: 'Data storage and management solutions'
  },
  {
    id: 'devops',
    label: 'DevOps & Cloud',
    description: 'Deployment, CI/CD, and cloud infrastructure'
  },
  {
    id: 'mobile',
    label: 'Mobile & Cross-platform',
    description: 'Native and cross-platform mobile development'
  },
  {
    id: 'ai',
    label: 'AI & ML',
    description: 'Machine learning and artificial intelligence'
  },
  {
    id: 'testing',
    label: 'Testing',
    description: 'Quality assurance and testing tools'
  }
]

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 'Core', category: 'frontend' },
  { name: 'Next.js', level: 'Core', category: 'frontend' },
  { name: 'TypeScript', level: 'Core', category: 'frontend' },
  { name: 'JavaScript', level: 'Core', category: 'frontend' },
  { name: 'HTML5', level: 'Core', category: 'frontend' },
  { name: 'CSS3', level: 'Core', category: 'frontend' },
  { name: 'Tailwind CSS', level: 'Advanced', category: 'frontend' },
  { name: 'Material UI', level: 'Advanced', category: 'frontend' },
  { name: 'Redux Toolkit', level: 'Advanced', category: 'frontend' },
  { name: 'Framer Motion', level: 'Familiar', category: 'frontend' },

  // Backend
  { name: 'Node.js', level: 'Core', category: 'backend' },
  { name: 'Express.js', level: 'Core', category: 'backend' },
  { name: 'FastAPI', level: 'Advanced', category: 'backend' },
  { name: 'Flask', level: 'Advanced', category: 'backend' },
  { name: 'Python', level: 'Core', category: 'backend' },
  { name: 'SQLAlchemy', level: 'Familiar', category: 'backend' },
  { name: 'Celery', level: 'Familiar', category: 'backend' },
  { name: 'GraphQL', level: 'Familiar', category: 'backend' },

  // Databases
  { name: 'MongoDB', level: 'Core', category: 'database' },
  { name: 'PostgreSQL', level: 'Advanced', category: 'database' },
  { name: 'MySQL', level: 'Advanced', category: 'database' },
  { name: 'Redis', level: 'Familiar', category: 'database' },
  { name: 'Supabase', level: 'Familiar', category: 'database' },

  // DevOps & Cloud
  { name: 'Docker', level: 'Advanced', category: 'devops' },
  { name: 'Kubernetes', level: 'Familiar', category: 'devops' },
  { name: 'AWS', level: 'Advanced', category: 'devops' },
  { name: 'Google Cloud', level: 'Familiar', category: 'devops' },
  { name: 'Vercel', level: 'Advanced', category: 'devops' },
  { name: 'Railway', level: 'Familiar', category: 'devops' },
  { name: 'Render', level: 'Familiar', category: 'devops' },
  { name: 'Git', level: 'Core', category: 'devops' },

  // Mobile & Cross-platform
  { name: 'React Native', level: 'Advanced', category: 'mobile' },
  { name: 'Flutter', level: 'Familiar', category: 'mobile' },

  // AI/ML
  { name: 'TensorFlow', level: 'Advanced', category: 'ai' },
  { name: 'PyTorch', level: 'Advanced', category: 'ai' },
  { name: 'OpenAI API', level: 'Advanced', category: 'ai' },
  { name: 'NumPy', level: 'Core', category: 'ai' },
  { name: 'Pandas', level: 'Core', category: 'ai' },
  { name: 'Matplotlib', level: 'Advanced', category: 'ai' },
  { name: 'Scikit-learn', level: 'Advanced', category: 'ai' },

  // Testing
  { name: 'Cypress', level: 'Advanced', category: 'testing' },
  { name: 'Vitest', level: 'Advanced', category: 'testing' },
  { name: 'Selenium', level: 'Familiar', category: 'testing' },
  { name: 'Pytest', level: 'Advanced', category: 'testing' }
]
