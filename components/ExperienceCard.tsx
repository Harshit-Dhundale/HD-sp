"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Building, ExternalLink } from "lucide-react"

interface Experience {
  id: string
  company: string
  position: string
  duration: string
  location: string
  type: string
  description: string
  achievements: string[]
  technologies: string[]
  website: string
}

interface ExperienceCardProps {
  data: Experience
}

export function ExperienceCard({ data: exp }: ExperienceCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-card/80 backdrop-blur-sm">
      <CardContent className="p-6 md:p-8">
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
          <h4 className="text-lg font-semibold text-primary mb-2">
            {exp.position}
          </h4>

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
        <p className="text-muted-foreground leading-relaxed mb-6">
          {exp.description}
        </p>

        {/* Key Achievements */}
        <div className="mb-6">
          <h5 className="font-semibold mb-3">Key Achievements</h5>
          <ul className="pl-6 list-disc space-y-1 text-sm leading-relaxed">
            {exp.achievements.map((achievement, achIndex) => (
              <li key={achIndex} className="text-muted-foreground">
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
  )
}
