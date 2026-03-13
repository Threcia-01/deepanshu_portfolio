import { useEffect, useRef } from "react"
import SectionWrapper from "../../layout/SectionWrapper"
import TopLeftCorner from "../../components/containerCorners/topLeftCorner"
import TopRightCorner from "../../components/containerCorners/topRightCorner"
import BottomLeftCorner from "../../components/containerCorners/bottomLeftCorner"
import BottomRightCorner from "../../components/containerCorners/bottomRightCorner"
import InventoryTitle from "./inventoryTitle"
import InventoryGrid from "./inventoryGrid"
import { animateFadeUp } from "../../components/animations/ScrollAnimations"

export default function SkillsSection() {
  const sectionRef = useRef(null)
  useEffect(() => { if (sectionRef.current) animateFadeUp(sectionRef.current) }, [])
  return (
    <section id="skills">
      <SectionWrapper>
        <div ref={sectionRef} className="relative max-w-6xl mx-auto py-16 sm:py-20 -top-10 sm:-top-20 md:-top-40 opacity-0">
          <TopLeftCorner /><TopRightCorner />
          <InventoryTitle />
          <InventoryGrid />
          <BottomLeftCorner /><BottomRightCorner />
        </div>
      </SectionWrapper>
    </section>
  )
}