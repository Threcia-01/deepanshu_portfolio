import { useEffect, useRef } from "react"
import SectionWrapper from "../../layout/SectionWrapper"
import TopLeftCorner from "../../components/containerCorners/topLeftCorner"
import TopRightCorner from "../../components/containerCorners/topRightCorner"
import BottomLeftCorner from "../../components/containerCorners/bottomLeftCorner"
import BottomRightCorner from "../../components/containerCorners/bottomRightCorner"
import DungeonBackground from "./DungeonBackground"
import DungeonTitle from "./DungeonTitle"
import DungeonGrid from "./DungeonGrid"
import { animateFadeUp } from "../../components/animations/ScrollAnimations"

export default function DungeonClearedSection() {
  const containerRef = useRef(null)
  useEffect(() => { if (containerRef.current) animateFadeUp(containerRef.current) }, [])
  return (
    <section id="projects">
      <SectionWrapper>
        <div className="relative mx-auto -mt-10 sm:-mt-20 md:-mt-50 py-10">
          <DungeonBackground />
          <div ref={containerRef} className="relative max-w-6xl mx-auto py-16 sm:py-24 md:py-32 opacity-0">
            <TopLeftCorner /><TopRightCorner />
            <DungeonTitle />
            <DungeonGrid />
            <BottomLeftCorner /><BottomRightCorner />
          </div>
        </div>
      </SectionWrapper>
    </section>
  )
}