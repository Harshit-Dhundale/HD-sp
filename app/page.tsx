"use client"

import { HeroClassic } from "../components/HeroClassic"
import { SkillsSection } from "../components/SkillsSection"
import { Certifications } from "../components/Certifications"
import { ProjectsSection } from "../components/ProjectsSection"
import { ExperienceSection } from "../components/ExperienceSection"
import { EducationSection } from "../components/EducationSection"
import { ContactSection } from "../components/ContactSection"
import { NavClassic } from "../components/NavClassic"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <NavClassic />
      <main>
        <HeroClassic />
        <SkillsSection />
        <Certifications />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
    </div>
  )
}
