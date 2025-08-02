"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, CalendarDays, MapPin, BookOpen, Award } from "lucide-react"

const education = [
  {
    id: "btech",
    institution: "Thakur College of Engineering and Technology",
    degree: "Bachelor of Technology",
    field: "Computer Engineering",
    duration: "2021 - 2025",
    location: "Mumbai, India",
    status: "In Progress",
    cgpa: "8.7/10",
    description:
      "Pursuing comprehensive education in computer science fundamentals, software engineering, and emerging technologies. Active participation in coding competitions and technical projects.",
    highlights: [
      "Dean's List for Academic Excellence (3 semesters)",
      "Lead developer for college technical fest website",
      "Member of Computer Society and Innovation Club",
      "Represented college in multiple hackathons and coding competitions",
    ],
    courses: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Software Engineering",
      "Machine Learning",
      "Computer Networks",
      "Operating Systems",
      "Web Technologies",
      "Artificial Intelligence",
    ],
  },
  {
    id: "hsc",
    institution: "Thakur College of Science and Commerce",
    degree: "Higher Secondary Certificate",
    field: "Science (PCM)",
    duration: "2019 - 2021",
    location: "Mumbai, India",
    status: "Completed",
    percentage: "92.5%",
    description:
      "Completed higher secondary education with focus on Physics, Chemistry, and Mathematics. Built strong analytical and problem-solving foundation.",
    highlights: [
      "Secured 92.5% in HSC Board Examinations",
      "Mathematics Olympiad Regional Level Participation",
      "Science Fair Winner - Innovation in Technology",
      "Active member of Computer Club",
    ],
    courses: ["Physics", "Chemistry", "Mathematics", "Computer Science", "English"],
  },
  {
    id: "cbse10",
    institution: "Central Board of Secondary Education",
    degree: "Secondary School Certificate (CBSE X)",
    field: "Science",
    duration: "2017 - 2019",
    location: "India",
    status: "Completed",
    percentage: "93%",
    description:
      "Completed secondary education with focus on Science and Mathematics, laying the foundation for future academic pursuits.",
    highlights: [
      "Science topper",
      "School coding club lead",
      "Active participation in academic competitions",
    ],
    courses: ["Science", "Mathematics", "English", "Social Studies", "Hindi"],
  },
]

const achievements = [
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
    title: "Winner - AgriTech Hackathon",
    issuer: "TechFest Mumbai",
    year: "2024",
    type: "Award",
  },
  {
    title: "Dean's List",
    issuer: "Thakur College of Engineering",
    year: "2023-24",
    type: "Academic",
  },
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
            Maintaining high academic standards while actively engaging in practical projects, competitions, and
            industry certifications to bridge the gap between theory and practice.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div>
              <div className="text-2xl font-bold text-primary">8.7</div>
              <div className="text-sm text-muted-foreground">Current CGPA</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">3</div>
              <div className="text-sm text-muted-foreground">Dean's List</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">2</div>
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
