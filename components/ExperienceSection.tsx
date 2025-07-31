"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Building, ExternalLink } from "lucide-react"

const experiences = [
  {
    id: "orchid-intern",
    company: "Orchid Technologies",
    position: "Software Development Intern",
    duration: "Jun 2023 - Aug 2023",
    location: "Mumbai, India",
    type: "Internship",
    description:
      "Developed and optimized web applications using modern frameworks. Collaborated with senior developers on client projects and gained hands-on experience in full-stack development.",
    achievements: [
      "Built responsive web applications using React and Node.js",
      "Optimized database queries resulting in 40% performance improvement",
      "Collaborated with design team to implement pixel-perfect UI components",
      "Participated in code reviews and learned industry best practices",
    ],
    technologies: ["React", "Node.js", "MongoDB", "JavaScript", "HTML/CSS"],
    website: "https://orchidtech.com",
  },
  {
    id: "freelance",
    company: "Freelance Developer",
    position: "Full-Stack Developer",
    duration: "Jan 2022 - Present",
    location: "Remote",
    type: "Freelance",
    description:
      "Providing end-to-end web development services to clients across various industries. Specializing in modern web technologies and AI-powered solutions.",
    achievements: [
      "Delivered 15+ successful projects with 100% client satisfaction",
      "Built AI-powered agricultural platform serving 500+ farmers",
      "Developed real-time collaborative tools for remote teams",
      "Created mobile applications with 50K+ downloads",
    ],
    technologies: ["React", "Next.js", "Python", "FastAPI", "AWS", "Flutter", "TensorFlow"],
    website: "#",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Building expertise through diverse roles, from corporate internships to independent freelance projects,
            delivering impactful solutions across multiple industries.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:transform md:-translate-x-0.5" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-8"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 md:left-1/2 md:transform md:-translate-x-2" />

                <Card className="ml-16 md:ml-0 group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    {/* Company & Position */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Building className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{exp.company}</h3>
                        {exp.website !== "#" && (
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <h4 className="text-lg font-semibold text-primary mb-2">{exp.position}</h4>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <CalendarDays className="w-4 h-4" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                        <Badge variant={exp.type === "Internship" ? "secondary" : "default"} className="text-xs">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6">{exp.description}</p>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h5 className="font-semibold mb-3">Key Achievements</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="font-semibold mb-3">Technologies Used</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-2xl mx-auto"
        >
          <div className="text-center p-4 bg-card rounded-lg border">
            <div className="text-2xl font-bold text-primary mb-1">4+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border">
            <div className="text-2xl font-bold text-primary mb-1">15+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border">
            <div className="text-2xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border">
            <div className="text-2xl font-bold text-primary mb-1">2</div>
            <div className="text-sm text-muted-foreground">Cloud Certifications</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
