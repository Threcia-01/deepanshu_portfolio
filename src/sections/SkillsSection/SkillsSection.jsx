import SectionWrapper from "../../layout/SectionWrapper"

import TopLeftCorner from "../../components/containerCorners/topLeftCorner"
import TopRightCorner from "../../components/containerCorners/topRightCorner"
import BottomLeftCorner from "../../components/containerCorners/bottomLeftCorner"
import BottomRightCorner from "../../components/containerCorners/bottomRightCorner"

import InventoryTitle from "./inventoryTitle"
import InventoryGrid from "./inventoryGrid"

export default function SkillsSection() {
  return (
    <SectionWrapper >
      <div className="relative max-w-6xl mx-auto py-22 -top-40">

        {/* Top Corners */}
        <TopLeftCorner />
        <TopRightCorner />

        <InventoryTitle />

        <InventoryGrid />

        {/* Bottom Corners */}
        <BottomLeftCorner />
        <BottomRightCorner />

      </div>

    </SectionWrapper>
  )
}