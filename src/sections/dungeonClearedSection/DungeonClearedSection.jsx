import SectionWrapper from "../../layout/SectionWrapper"

import TopLeftCorner from "../../components/containerCorners/topLeftCorner"
import TopRightCorner from "../../components/containerCorners/topRightCorner"
import BottomLeftCorner from "../../components/containerCorners/bottomLeftCorner"
import BottomRightCorner from "../../components/containerCorners/bottomRightCorner"

import DungeonBackground from "./DungeonBackground"
import DungeonTitle from "./DungeonTitle"
import DungeonGrid from "./DungeonGrid"

export default function DungeonClearedSection() {
  return (
    <SectionWrapper>
      <div className="relative mx-auto -mt-50 py-10">
        <DungeonBackground />

        <div className="relative max-w-6xl mx-auto py-32">

          {/* Corners */}
          <TopLeftCorner />
          <TopRightCorner />

          <DungeonTitle />

          <DungeonGrid />

          <BottomLeftCorner />
          <BottomRightCorner />

        </div>
      </div>

    </SectionWrapper>
  )
}