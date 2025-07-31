"use client"

import { useEffect } from "react"

export default function PrintResume() {
  useEffect(() => {
    // Auto-trigger print dialog
    if (typeof window !== "undefined") {
      window.print()
    }
  }, [])

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-black font-serif">
      <header className="text-center mb-8 border-b-2 border-black pb-4">
        <h1 className="text-3xl font-bold mb-2">Harshit Dhundale</h1>
        <p className="text-lg">Full-Stack Developer & ML Enthusiast</p>
        <div className="flex justify-center space-x-4 mt-2 text-sm">
          <span>📧 harshitdhundale@gmail.com</span>
          <span>🔗 linkedin.com/in/harshit-dhundale</span>
          <span>💻 github.com/Harshit-Dhundale</span>
        </div>
      </header>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-3 border-b border-gray-300">Summary</h2>
        <p className="text-sm leading-relaxed">
          Passionate Full-Stack Developer with 2+ years of experience building scalable web applications and AI-powered
          solutions. Proficient in React, Node.js, Python, and cloud technologies. Strong background in machine learning
          and data science with hands-on experience in enterprise environments.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-3 border-b border-gray-300">Technical Skills</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <strong>Languages:</strong> Python, JavaScript, TypeScript, Java, C++
          </div>
          <div>
            <strong>Frontend:</strong> React, Next.js, Tailwind CSS, Flutter
          </div>
          <div>
            <strong>Backend:</strong> Node.js, Express, FastAPI, Flask
          </div>
          <div>
            <strong>Databases:</strong> MongoDB, PostgreSQL, Redis, MySQL
          </div>
          <div>
            <strong>Cloud & DevOps:</strong> AWS, Docker, GitHub Actions, Vercel
          </div>
          <div>
            <strong>ML/AI:</strong> TensorFlow, PyTorch, Scikit-learn, Pandas
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-3 border-b border-gray-300">Experience</h2>
        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-bold">Full-Stack Developer Intern</h3>
            <span className="text-sm">June 2024 - August 2024</span>
          </div>
          <p className="text-sm italic mb-2">The Orchid Group</p>
          <ul className="text-sm list-disc list-inside space-y-1">
            <li>Reduced UI bug backlog by 25% through systematic React component refactoring</li>
            <li>Improved page load times by 20% via dynamic imports and performance optimization</li>
            <li>Authored 30+ Selenium end-to-end test scripts for quality assurance</li>
            <li>Implemented TDD methodology in sprint workflow, reducing defects by 20%</li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-3 border-b border-gray-300">Featured Projects</h2>

        <div className="mb-4">
          <h3 className="font-bold">FarmiCulture - AI-Powered Agriculture Platform</h3>
          <ul className="text-sm list-disc list-inside space-y-1">
            <li>Built multi-tenant farm dashboard with JWT authentication and Redis OTP verification</li>
            <li>Achieved 92-95% AI accuracy across crop recommendations using 90,000+ dataset records</li>
            <li>Implemented microservices architecture with Docker containerization</li>
            <li>Integrated Razorpay payment gateway and automated delivery polling system</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-bold">Flutter News App</h3>
          <ul className="text-sm list-disc list-inside space-y-1">
            <li>Developed cross-platform mobile app with Firebase Auth integration</li>
            <li>Implemented Provider state management across 5+ UI components</li>
            <li>Achieved 90% crash reduction through comprehensive error handling</li>
            <li>Deployed to both iOS and Android platforms</li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-3 border-b border-gray-300">Education</h2>
        <div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold">Bachelor of Technology in Computer Science</h3>
              <p className="text-sm">Vellore Institute of Technology (VIT)</p>
            </div>
            <span className="text-sm">2021 - 2025</span>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3 border-b border-gray-300">Achievements</h2>
        <ul className="text-sm list-disc list-inside space-y-1">
          <li>1st Place Winner - SolVIT Hackathon 2025 (STOCKLY project among 150+ teams)</li>
          <li>Solved 40+ algorithmic problems on LeetCode and GeeksforGeeks</li>
          <li>Built and deployed 10+ full-stack applications with modern tech stacks</li>
        </ul>
      </section>
    </div>
  )
}
