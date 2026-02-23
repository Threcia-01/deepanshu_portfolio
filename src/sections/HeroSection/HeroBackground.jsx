import heroBg from "../../assets/images/heroSectionBg.png"
import sunJinWoo from "../../assets/images/sunJinWoo.png"

export default function HeroBackground() {
  return (
    <>
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black/30" /> */}

      {/* Character image */}
      <img
        src={sunJinWoo}
        alt="character"
        className="
          absolute
          right-10
          bottom-0
          h-[100vh]
          w-[40vw]
          object-contain
          pointer-events-none
          select-none
        "
      />
    </>
  )
}