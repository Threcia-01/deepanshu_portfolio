import HeroSection from "../sections/HeroSection/HeroSection"
import OriginsSection from "../sections/OriginsSection/OriginsSection"
import DungeonClearedSection from "../sections/dungeonClearedSection/DungeonClearedSection"
import SkillsSection from "../sections/SkillsSection/SkillsSection"
import ExperienceSection from "../sections/ExperienceSection/ExperienceSection"
import ResumePage from "../sections/ResumeSection/ResumeSection"

export default function PortfolioPage() {
  return (
    <div className="w-full min-h-screen bg-(--bg-primary)">

      {/* Hero Section */}
      <div className="relative w-full overflow-visible">
        <HeroSection />
        <div className="absolute bottom-0 -left-4 -right-4 translate-y-1/2 z-20 pointer-events-none">
          <div className="w-full h-40 bg-black" style={{ filter: "blur(18px)" }} />
        </div>
      </div>

      {/* Origins Section */}
      <div className="relative overflow-visible pt-16 sm:pt-20 md:pt-0 md:-top-20 md:-mb-20">
        <OriginsSection />
        <div className="absolute bottom-6 md:bottom-18 -left-4 -right-4 translate-y-1/2 z-20 pointer-events-none">
          <div className="w-full h-40" style={{background: "linear-gradient(180deg, #0A0A0A 0%, #071D2F 100%)", filter: "blur(18px)",}}  />
        </div>
      </div>

      {/* Dungeon Cleared Section */}
      <div className="relative overflow-visible">
        <DungeonClearedSection />
        <div className="absolute bottom-8 md:bottom-18 -left-8 -right-8  translate-y-1/2 z-20 pointer-events-none">
          <div className="w-full h-25 md:h-40" style={{background: "linear-gradient(180deg, #071D2F 0%, #0A0A0A 100%)",filter: "blur(14px)",}}/>
        </div>
      </div>

      {/* Skills Section */}
      <div className="relative overflow-visible -mb-25 md:-mb-70">
        <SkillsSection />
        <div className="absolute bottom-8 md:bottom-60 -left-8 -right-8 translate-y-1/2 z-20 pointer-events-none">
          <div className="w-full h-25 md:h-40" style={{ background: "linear-gradient(180deg, #0A0A0A 0%, #071D2F 100%)",filter: "blur(18px)",}} />
        </div>
      </div>

      {/* Experience Section */}
      <div className="relative -mb-17 md-mb-0 overflow-visible pt-8 sm:pt-12 md:pt-0 md:-top-20 md:-mb-80">
        <ExperienceSection />
        <div className="absolute bottom-8 md:bottom-18 -left-8 -right-8 translate-y-1/2 z-35 pointer-events-none">
          <div className="w-full h-25 md:h-40" style={{ background: "linear-gradient(180deg, #071D2F 0%, #0A0A0A 100%)", filter: "blur(18px)", }} />
        </div>
      </div>

      {/* Resume Section */}
      <div className="relative overflow-visible">
        <ResumePage className="!pb-0 " />
      </div>
    </div>
  )
}
