import HeroSection from "../sections/HeroSection/HeroSection"
import OriginsSection from "../sections/OriginsSection/OriginsSection"
import EducationSection from "../sections/EducationSection/EducationSection"
import ProjectsSection from "../sections/ProjectsSection/ProjectsSection"
import SkillsSection from "../sections/SkillsSection/SkillsSection"
import ExperienceSection from "../sections/ExperienceSection/ExperienceSection"
import ContactSection from "../sections/ContactSection/ContactSection"
import heroSectionDivider from "../assets/images/heroSectionDivider.png"

export default function PortfolioPage() {
  return (
    <div className="w-full min-h-screen bg-[var(--bg-primary)]">
      <div className="relative">
        <HeroSection />
        <div className="absolute bottom-0 left-0 w-[2000px] -mx-30  translate-y-1/2 z-20">
          <img src={heroSectionDivider} alt="" className="w-full" />
        </div>
      </div>


      <OriginsSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />

    </div>
  )
}