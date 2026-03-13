import { useEffect, useRef } from "react"
import SectionWrapper from "../../layout/SectionWrapper"
import TopLeftCorner from "../../components/containerCorners/topLeftCorner"
import TopRightCorner from "../../components/containerCorners/topRightCorner"
import BottomLeftCorner from "../../components/containerCorners/bottomLeftCorner"
import BottomRightCorner from "../../components/containerCorners/bottomRightCorner"
import OriginsTitle from "./OriginsTitle"
import OriginsContent from "./originsContent"
import { animateFadeUp } from "../../components/animations/ScrollAnimations"

export default function OriginsSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (sectionRef.current) animateFadeUp(sectionRef.current)
  }, [])

  return (
    <section id="origins">
      <SectionWrapper>
        <div ref={sectionRef} className="relative max-w-6xl mx-auto py-16 sm:py-24 md:py-32 opacity-0">
          <TopLeftCorner />
          <TopRightCorner />
          <OriginsTitle />
          <OriginsContent />
          <BottomLeftCorner />
          <BottomRightCorner />
        </div>
      </SectionWrapper>
    </section>
  )
}