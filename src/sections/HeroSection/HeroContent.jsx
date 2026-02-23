export default function HeroContent() {
  return (
    <div className="relative z-10  mx-auto px-8">

      <div className="pt-32 pb-32 flex flex-col w-[70vw] gap-3">

        <div className="bg-[linear-gradient(90deg,#709CBE_0%,#639DBE_50%,#346082_100%)] px-6 py-1 max-w-fit rounded-md inline-block">
          <p className="text-white font-rokkitt font-bold tracking-widest">
            {"< Threcia.AKA >"}
          </p>
        </div>

        <h1 className="text-[80px] font-bold leading-tight font-cinzel tracking-wide gradient-glow-text">
          DEEPANSHU <br />
          CHAUDHARY
        </h1>

        <p className="max-w-[55vw] text-gray-300 leading-relaxed text-lg font-rokkitt">
          A developer who began as a beginner in the realm of Binary code. Through continuous learning, real-world projects, and discipline, he awakened his potential and now walks the path toward mastery in frontend, backend, and cloud technologies. Each project cleared, each skill unlocked, and each challenge faced contributes to his evolution as a full-stack developer.
        </p>

      </div>

    </div>
  )
}