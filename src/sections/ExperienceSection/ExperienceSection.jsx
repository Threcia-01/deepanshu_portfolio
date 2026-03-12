import SectionWrapper from "../../layout/SectionWrapper"

import TopLeftCorner from "../../components/containerCorners/topLeftCorner"
import TopRightCorner from "../../components/containerCorners/topRightCorner"
import BottomLeftCorner from "../../components/containerCorners/bottomLeftCorner"
import BottomRightCorner from "../../components/containerCorners/bottomRightCorner"

import ExperienceTitle from "./experienceTitle"
import ExperienceContent from "./ExperienceContent"

import experienceSectionBg from "../../assets/images/experienceSectionBg.png"

export default function ExperienceSection() {
  return (
    <SectionWrapper>
      <div className="relative py-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: `url(${experienceSectionBg})` }}
        ></div>

        <div className="relative max-w-6xl mx-auto py-32">
          {/* Top corners */}
          <TopLeftCorner />
          <TopRightCorner />

          <ExperienceTitle />
          <ExperienceContent />

          {/* Bottom corners */}
          <BottomLeftCorner />
          <BottomRightCorner />
        </div>
      </div>
    </SectionWrapper>
  )
}