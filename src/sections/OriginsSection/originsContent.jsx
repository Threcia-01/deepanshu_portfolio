import { useEffect, useRef } from "react"
import sword from "../../assets/images/originsSword.png"
import shield from "../../assets/images/originsShield.png"
import OriginsTextContainer from "../../components/containerBoxes/originsTextContainer"
import { animateFadeUp } from "../../components/animations/ScrollAnimations"

export default function OriginsContent() {
  const summaryRef = useRef(null)
  const educationRef = useRef(null)

  useEffect(() => {
    if (summaryRef.current) animateFadeUp(summaryRef.current)
    if (educationRef.current) animateFadeUp(educationRef.current, 0.15)
  }, [])

  return (
    <div className="mt-6 sm:mt-10 flex flex-col min-w-0 items-center px-2 sm:px-0">

      <div className="relative w-full max-w-4xl flex flex-col">

        {/* SUMMARY PANEL */}
        <div ref={summaryRef} className="relative w-full opacity-0">
          <OriginsTextContainer />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-8 sm:px-[10%] md:px-[12%] py-8 sm:py-[8%]">
            <h3 className="text-[#BEE1EE] font-cinzel font-bold tracking-[0.15em] sm:tracking-[0.3em] mb-3 sm:mb-4 text-[14px] sm:text-[22px] md:text-[28px] text-center">
              SUMMARY
            </h3>
            <p className="text-[#BEE1EE] font-rokkitt text-center leading-relaxed text-[10px] sm:text-[14px] md:text-[16px]">
              I began by learning the basics of the web—HTML, CSS, and JavaScript—and building small things just
              to understand how everything worked. Over time, those experiments turned into real projects, and I
              started paying attention to structure, clarity, and how ideas come together into something usable.
              <br /><br />
              This phase is about curiosity, trial and error, and developing the habit of learning continuously.
              It laid the foundation for how I approach building today.
            </p>
          </div>
        </div>

        {/* SHIELD — centered on seam */}
        <div className="absolute left-1/2 z-20 pointer-events-none"
          style={{ top: "50%", transform: "translate(-50%, -50%)" }}>
          <img src={shield} className="h-16 sm:h-24 md:h-28 drop-shadow-lg" />
        </div>

        {/* EDUCATION PANEL */}
        <div ref={educationRef} className="relative w-full opacity-0">
          <OriginsTextContainer />
          <div className="absolute inset-0 px-8 sm:px-[10%] md:px-[12%] py-8 sm:py-[8%] flex flex-col">
            <h3 className="text-[#BEE1EE] text-center font-cinzel font-bold tracking-[0.15em] sm:tracking-[0.3em] mb-4 sm:mb-6 text-[14px] sm:text-[22px] md:text-[28px]">
              EDUCATION
            </h3>
            <div className="flex flex-col gap-3 sm:gap-6">
              {[
                { degree: "B.Tech in Artificial Intelligence", inst: "Babu Banarsi Das University, Lucknow", years: "2022 – 2026" },
                { degree: "Senior Secondary (12th CBSE)", inst: "Rani Lakshmi Bai Memorial School", years: "2020 – 2021" },
                { degree: "Secondary (10th CBSE)", inst: "Rani Lakshmi Bai Memorial School", years: "2019 – 2020" },
              ].map((item, i) => (
                <div key={i} className="grid grid-cols-[14px_1fr_auto] sm:grid-cols-[24px_1fr_auto] gap-2 sm:gap-3 items-start">
                  <img src={sword} className="w-full h-6 sm:h-10 mt-1 opacity-90" />
                  <div className="min-w-0">
                    <p className="text-[#E6FBFF] font-rokkitt tracking-wide text-[10px] sm:text-[14px] md:text-[16px]">{item.degree}</p>
                    <p className="text-[#6FB6FF] font-rokkitt tracking-wide text-[9px] sm:text-[12px] md:text-[13px] mt-0.5">{item.inst}</p>
                  </div>
                  <p className="text-[#E6FBFF] font-rokkitt whitespace-nowrap text-[9px] sm:text-[12px] md:text-[14px]">
                    {item.years}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}