import { forwardRef, useEffect, useRef } from "react"
import sword from "../../assets/images/originsSword.png"
import OriginsTextContainer from "../../components/containerBoxes/originsTextContainer"
import { animateFadeUp, animateStagger } from "../../components/animations/ScrollAnimations"

// Panel: SVG is background, content in absolute overlay
// min-h ensures the wrapper is tall enough on mobile even when SVG shrinks
const Panel = forwardRef(({ children }, ref) => (
  <div ref={ref} className="relative w-full max-w-4xl opacity-0" style={{ minHeight: "clamp(260px, 45vw, 539px)" }}>
    <div className="absolute inset-0">
      <OriginsTextContainer />
    </div>
    <div className="absolute inset-0 flex flex-col items-center justify-center px-8 sm:px-[10%] md:px-[12%] py-6 sm:py-[8%]">
      {children}
    </div>
  </div>
))

export default function ExperienceContent() {
  const expRef = useRef(null)
  const achRef = useRef(null)
  const itemsRef = useRef([])

  useEffect(() => {
    if (expRef.current) animateFadeUp(expRef.current)
    if (achRef.current) animateFadeUp(achRef.current, 0.15)
    const items = itemsRef.current.filter(Boolean)
    if (items.length) animateStagger(items, 0.1)
  }, [])

  return (
    <div className="mt-6 sm:mt-10 flex flex-col min-w-0 items-center px-2 sm:px-0 gap-6 sm:gap-8">

      <Panel ref={expRef}>
        <h3 className="text-[#BEE1EE] font-cinzel font-bold tracking-[0.15em] sm:tracking-[0.3em] mb-2 sm:mb-4 text-[13px] sm:text-[22px] md:text-[28px] text-center shrink-0">
          EXPERIENCE
        </h3>
        <div className="w-full">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5 mb-2 sm:mb-3">
            <div>
              <div className="text-[10px] sm:text-[13px] text-[#E6FBFF] font-rokkitt">Front End Developer Intern</div>
              <div className="text-blue-300 text-[9px] sm:text-[12px] font-rokkitt">At Micro IT · Remote</div>
              <div className="text-[9px] sm:hidden text-[#E6FBFF] font-rokkitt">May 2025 – June 2025</div>
            </div>
            <div className="hidden sm:block text-[12px] md:text-[14px] text-[#E6FBFF] font-rokkitt">May 2025 – June 2025</div>
          </div>
          <div className="flex flex-col gap-1.5 sm:gap-3">
            {[
              "UI structuring & layout optimisation",
              "DOM handling and vanilla JavaScript logic",
              "Git & GitHub version control discipline",
              "Design solutions for real-world user flow",
            ].map((item, i) => (
              <div key={i} ref={el => (itemsRef.current[i] = el)}
                className="grid grid-cols-[12px_1fr] sm:grid-cols-[22px_1fr] gap-1.5 sm:gap-2 items-start opacity-0">
                <img src={sword} className="w-full h-5 sm:h-9 mt-0.5 opacity-90" />
                <div className="text-[#E6FBFF] font-rokkitt text-[9px] sm:text-[13px] md:text-[15px]">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </Panel>

      <Panel ref={achRef}>
        <h3 className="text-[#BEE1EE] text-center font-cinzel font-bold tracking-[0.06em] sm:tracking-[0.15em] mb-2 sm:mb-6 text-[10px] sm:text-[18px] md:text-[24px] shrink-0">
          ACHIEVEMENTS &amp; CERTIFICATIONS
        </h3>
        <div className="flex flex-col gap-1.5 sm:gap-4 w-full">
          {[
            "Web Development Course — Hitesh Choudhary",
            "Code Titans — Battle of Brilliance",
            "Adobe Designathon — IIT Delhi",
            "UI/UX Hackathon — IIT BHU (5th position)",
          ].map((item, i) => (
            <div key={i} className="grid grid-cols-[12px_1fr_auto] sm:grid-cols-[22px_1fr_auto] gap-1.5 sm:gap-2 items-center">
              <img src={sword} className="w-full h-5 sm:h-8 opacity-90" />
              <p className="text-[#E6FBFF] font-rokkitt text-[9px] sm:text-[13px] md:text-[15px]">{item}</p>
              <p className="text-blue-400 font-rokkitt whitespace-nowrap text-[8px] sm:text-[12px]">VIEW</p>
            </div>
          ))}
        </div>
      </Panel>

    </div>
  )
}