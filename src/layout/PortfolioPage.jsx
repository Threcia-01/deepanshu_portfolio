import HeroSection from "../sections/HeroSection/HeroSection"
import OriginsSection from "../sections/OriginsSection/OriginsSection"
import DungeonClearedSection from "../sections/dungeonClearedSection/DungeonClearedSection"
import SkillsSection from "../sections/SkillsSection/SkillsSection"
import ExperienceSection from "../sections/ExperienceSection/ExperienceSection"
import ResumePage from "../sections/ResumeSection/ResumeSection"
import heroSectionDivider from "../assets/images/heroSectionDivider.png"
import sectionDividerBlueBottom from "../assets/images/sectionDividerBlueBottom.png"
import sectionDividerBlueTop from "../assets/images/sectionDividerBlueTop.png"

export default function PortfolioPage() {
  return (
    <div className="w-full min-h-screen bg-(--bg-primary)">

      {/* Hero Section */}
      <div className="relative">
        <HeroSection />
        <div className="absolute bottom-0 left-0 w-full translate-y-1/2 z-20">
          <img src={heroSectionDivider} alt="" className="w-full" />
        </div>
      </div>

      {/* Origins Section */}
      <div className="relative pt-16 sm:pt-20 md:pt-0 md:-top-20 md:-mb-20">
        <OriginsSection />
        <div className="absolute bottom-0 left-0 w-full translate-y-1/2 z-20">
          <img src={sectionDividerBlueBottom} alt="" className="w-full" />
        </div>
      </div>

      {/* Dungeon Cleared Section */}
      <div className="relative">
        <DungeonClearedSection />
        <div className="absolute bottom-0 left-0 w-full translate-y-1/2 z-20">
          <img src={sectionDividerBlueTop} alt="" className="w-full" />
        </div>
      </div>

      {/* Skills Section */}
      <div className="relative">
        <SkillsSection />
        <div className="absolute bottom-0 left-0 w-full translate-y-1/2 z-20">
          <img src={sectionDividerBlueBottom} alt="" className="w-full" />
        </div>
      </div>

      {/* Experience Section */}
      <div className="relative pt-8 sm:pt-12 md:pt-0 md:-top-20 md:-mb-40">
        <ExperienceSection />
        <div className="absolute bottom-0 left-0 w-full translate-y-1/2 z-20">
          <img src={sectionDividerBlueTop} alt="" className="w-full" />
        </div>
      </div>

      {/* Resume Section */}
      <ResumePage className="!pb-0" />

    </div>
  )
}
