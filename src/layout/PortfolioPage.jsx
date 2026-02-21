import HeroSection from "../sections/HeroSection"
import OriginsSection from "../sections/OriginsSection"
import EducationSection from "../sections/EducationSection"
import ProjectsSection from "../sections/ProjectsSection"
import SkillsSection from "../sections/SkillsSection"
import ExperienceSection from "../sections/ExperienceSection"
import ContactSection from "../sections/ContactSection"

export default function PortfolioPage() {
  return (
    <div className="w-full min-h-screen bg-[var(--bg-primary)]">

      <HeroSection />
      <OriginsSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />

    </div>
  )
}