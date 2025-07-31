"use client"
import NavClassic from "../components/NavClassic"
import HeroClassic from "../components/HeroClassic"
import SkillsSection from "../components/SkillsSection"
import ProjectsSection from "../components/ProjectsSection"
import ExperienceSection from "../components/ExperienceSection"
import EducationSection from "../components/EducationSection"
import ContactSection from "../components/ContactSection"

const phrases = [
  "I am a Full-Stack Developer.",
  "I am a Software Engineer.",
  "I am an ML Enthusiast.",
  "I am a Cloud Builder.",
  "I am a Coder.",
]

export default function Home() {
  return (
    <>
      <NavClassic />
      <main className="space-y-32">
        <HeroClassic />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
    </>
  )
}
