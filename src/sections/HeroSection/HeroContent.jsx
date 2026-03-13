import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function HeroContent() {
  const badgeRef = useRef(null)
  const titleRef = useRef(null)
  const paraRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 })
    tl.fromTo(badgeRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" })
      .fromTo(titleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }, "-=0.3")
      .fromTo(paraRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
  }, [])

  return (
    <div className="relative z-10 mx-auto px-5 sm:px-8 md:px-8">
      <div className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-24 md:pb-32 flex flex-col w-full sm:w-[80vw] md:w-[70vw] gap-3">

        <div
          ref={badgeRef}
          className="bg-[linear-gradient(90deg,#709CBE_0%,#639DBE_50%,#346082_100%)] px-4 sm:px-6 py-1 max-w-fit rounded-md inline-block opacity-0"
        >
          <p className="text-white font-rokkitt font-bold tracking-widest text-sm sm:text-base">
            {"< Threcia.AKA >"}
          </p>
        </div>

        <h1
          ref={titleRef}
          className="text-[48px] sm:text-[64px] md:text-[80px] font-bold leading-tight font-cinzel tracking-wide gradient-glow-text opacity-0"
        >
          DEEPANSHU <br />
          CHAUDHARY
        </h1>

        <p
          ref={paraRef}
          className="max-w-full sm:max-w-[70vw] md:max-w-[55vw] text-gray-300 leading-relaxed text-base sm:text-lg font-rokkitt opacity-0"
        >
          A developer who began as a beginner in the realm of Binary code. Through continuous learning,
          real-world projects, and discipline, he awakened his potential and now walks the path toward mastery
          in frontend, backend, and cloud technologies. Each project cleared, each skill unlocked, and each
          challenge faced contributes to his evolution as a full-stack developer.
        </p>

      </div>
    </div>
  )
}
