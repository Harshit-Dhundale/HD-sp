"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, CalendarDays, MapPin, BookOpen, Award } from "lucide-react"

const education = [
  {
  "id": "btech",
  "institution": "Vellore Institute of Technology (VIT)",
  "degree": "Bachelor of Technology",
  "field": "Computer Science and Engineering",
  "duration": "2021 – 2025",
  "location": "Bhopal, India",
  "status": "Completed",
  "cgpa": "8.8/10",
  "description": "Completed a comprehensive program in Computer Science and Engineering, covering core CS fundamentals, AI/ML, cloud technologies, and scalable software systems. Gained hands-on experience through academic projects, hackathons, and internships.",
  "highlights": [
    "Graduated with a CGPA of 8.8/10",
    // "Built and deployed multiple full-stack projects ",
    // "Represented college in multiple hackathons and secured top ranks",
    "Completed industrial internship and capstone projects demonstrating practical problem-solving skills",
    "Part of ADVITYA 2024, VIT Bhopal’s flagship college fest, which attracted over 7,000–8,000 attendees, contributing to event coordination and technical activities",
    "Actively contributed to the Mozilla Firefox Club and Microsoft Technical Club at VIT Bhopal as a core technical member, participating in hackathons, coding sessions, technical workshops, and collaborative knowledge-sharing events.",
    "Recognized among the Best Performers at Solvit Hackathon 2025 for building multiple innovative web applications — including Stockly, MarketMitra, and other AI-powered solutions — within a challenging 2-day development sprint.", 
    "Organized and coordinated intra-college tournaments as Event Coordinator for the VIT Bhopal Chess Committee",
    // "Member of E-Cell, VIT Bhopal, contributing to entrepreneurship-driven initiatives and startup-focused events",
    // "Actively participated in various technical and cultural events, enhancing leadership, teamwork, and networking skills",
    
  ],
  "courses": [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Object-Oriented Programming (C++)",
    "Programming in Java",
    "Cloud Computing",
    "Software Engineering",
    "Parallel & Distributed Computing",
    "Machine Learning & AI",
    "Computer Architecture",
    "Computer Vision",
    "Mobile Application Development"
  ]
}
,
  {
    "id": "cbse12",
    "institution": "Daisy Dales School",
    "degree": "Senior Secondary Certificate (CBSE - Class XII)",
    "field": "Science (PCM)",
    "duration": "2021",
    "location": "Indore, Madhya Pradesh, India",
    "status": "Completed",
    "percentage": "78%",
    "description": "Completed Class XII under CBSE with a focus on Physics, Chemistry, and Mathematics, strengthening analytical, logical reasoning, and problem-solving skills.",
    "highlights": [
      "Achieved 78% in CBSE Class XII Board Examinations"
    ],
    "courses": [
      "Physics",
      "Chemistry",
      "Mathematics",
      "English",
      "Physical Education"],
  },
{
  "id": "cbse10",
  "institution": "Choithram School North Campus",
  "degree": "Secondary School Certificate (CBSE - Class X)",
  "field": "Science",
  "duration": "2019",
  "location": "Indore, Madhya Pradesh, India",
  "status": "Completed",
  "percentage": "89%",
  "description": "Completed Class X under CBSE with a focus on Science and Mathematics, building a strong foundation for higher academic pursuits.",
  "highlights": [
    "Scored 89% in CBSE Class X Board Examinations",
    "Qualified NTSE Stage 1 – National-level scholarship examination conducted by NCERT"
  ],
  "courses": [
    "Science",
    "Mathematics",
    "English",
    "Social Studies",
    "Hindi"
  ]
}
]

const achievements = [
{
    title: "Best Performers - SolVIT Hackathon",
    issuer: "VIT Bhopal",
    year: "2025",
    type: "Award",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
    type: "Certification",
  },
  {
    title: "Google Cloud Digital Leader",
    issuer: "Google Cloud",
    year: "2024",
    type: "Certification",
  },
  {
  title: "NTSE Stage 1 Qualifier",
  issuer: "NCERT",
  year: "2019",
  type: "Academic"
  }
,
]

export function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Education & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Academic foundation combined with industry certifications and competitive achievements, building a
            comprehensive knowledge base in computer science and emerging technologies.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Main Info */}
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <GraduationCap className="w-6 h-6 text-primary" />
                          </div>

                          <div className="flex-1">
                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors mb-1">
                              {edu.institution}
                            </h3>
                            <h4 className="text-lg font-semibold text-primary mb-2">
                              {edu.degree} in {edu.field}
                            </h4>

                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                              <div className="flex items-center gap-1">
                                <CalendarDays className="w-4 h-4" />
                                {edu.duration}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {edu.location}
                              </div>
                              <Badge variant={edu.status === "Completed" ? "default" : "secondary"}>{edu.status}</Badge>
                              {edu.cgpa && (
                                <Badge variant="outline" className="font-mono">
                                  CGPA: {edu.cgpa}
                                </Badge>
                              )}
                              {edu.percentage && (
                                <Badge variant="outline" className="font-mono">
                                  {edu.percentage}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed mb-6">{edu.description}</p>

                        {/* Highlights */}
                        <div className="mb-6">
                          <h5 className="font-semibold mb-3 flex items-center gap-2">
                            <Award className="w-4 h-4 text-primary" />
                            Key Highlights
                          </h5>
                          <ul className="space-y-2">
                            {edu.highlights.map((highlight, highlightIndex) => (
                              <li key={highlightIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Courses Sidebar */}
                      <div className="lg:w-80">
                        <div className="bg-muted/30 rounded-lg p-6">
                          <h5 className="font-semibold mb-4 flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-primary" />
                            Core Subjects
                          </h5>
                          <div className="grid grid-cols-1 gap-2">
                            {edu.courses.map((course, courseIndex) => (
                              <div
                                key={courseIndex}
                                className="text-sm p-2 bg-card rounded border text-center hover:border-primary/20 transition-colors"
                              >
                                {course}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Notable Achievements</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-card rounded-lg border hover:shadow-lg transition-all duration-300 hover:border-primary/20"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {achievement.type === "Certification" && <Award className="w-6 h-6 text-primary" />}
                  {achievement.type === "Award" && <Award className="w-6 h-6 text-yellow-500" />}
                  {achievement.type === "Academic" && <GraduationCap className="w-6 h-6 text-primary" />}
                </div>
                <h4 className="font-semibold mb-2 text-sm">{achievement.title}</h4>
                <p className="text-xs text-muted-foreground mb-1">{achievement.issuer}</p>
                <Badge variant="outline" className="text-xs">
                  {achievement.year}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Academic Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-muted/30 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Academic Excellence</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Maintaining strong academic performance while actively contributing to projects, hackathons, 
    and earning industry-recognized certifications to bridge the gap between theory and practical skills.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div>
              <div className="text-2xl font-bold text-primary">8.8</div>
              <div className="text-sm text-muted-foreground">CGPA</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">7+</div>
              <div className="text-sm text-muted-foreground">Real-World Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">3+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Hackathons</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
