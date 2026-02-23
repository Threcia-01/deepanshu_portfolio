import SectionWrapper from "../../layout/SectionWrapper"

import TopLeftCorner from "../../components/containerCorners/topLeftCorner"
import TopRightCorner from "../../components/containerCorners/topRightCorner"
import BottomLeftCorner from "../../components/containerCorners/bottomLeftCorner"
import BottomRightCorner from "../../components/containerCorners/bottomRightCorner"

import OriginsTitle from "./OriginsTitle"
import OriginsContent from "./originsContent"

export default function OriginsSection() {
  return (
    <SectionWrapper>

      <div className="relative max-w-6xl mx-auto py-32">

        {/* Top corners */}
        <TopLeftCorner />
        <TopRightCorner />

        <OriginsTitle />
        <OriginsContent />

        {/* Bottom corners */}
        <BottomLeftCorner />
        <BottomRightCorner />

      </div>

    </SectionWrapper>
  )
}