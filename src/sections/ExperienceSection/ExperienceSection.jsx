import { useEffect, useRef } from "react"
import SectionWrapper from "../../layout/SectionWrapper"
import TopLeftCorner from "../../components/containerCorners/topLeftCorner"
import TopRightCorner from "../../components/containerCorners/topRightCorner"
import BottomLeftCorner from "../../components/containerCorners/bottomLeftCorner"
import BottomRightCorner from "../../components/containerCorners/bottomRightCorner"
import ExperienceTitle from "./experienceTitle"
import ExperienceContent from "./ExperienceContent"
import experienceSectionBg from "../../assets/images/experienceSectionBg.webp"
import { animateFadeUp } from "../../components/animations/ScrollAnimations"

export default function ExperienceSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (sectionRef.current) animateFadeUp(sectionRef.current)
  }, [])

  return (
    <section id="experience">
      <SectionWrapper>
        <div className="relative py-10">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-80"
            style={{ backgroundImage: `url(${experienceSectionBg})` }}
          />
          <div ref={sectionRef} className="relative max-w-6xl mx-auto px-8 sm:px-6 py-10 sm:py-24 md:py-32 opacity-0">
            <TopLeftCorner />
            <TopRightCorner />
            <ExperienceTitle />
            <ExperienceContent />
            <BottomLeftCorner />
            <BottomRightCorner />
          </div>
        </div>
      </SectionWrapper>
    </section>
  )
}