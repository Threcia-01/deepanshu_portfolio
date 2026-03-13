import heroBg from "../../assets/images/heroSectionBg.webp"
import sunJinWoo from "../../assets/images/sunJinWoo.png"

export default function HeroBackground() {
  return (
    <>
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Character image — hidden on small screens, shown from md up */}
      <img
        src={sunJinWoo}
        alt="character"
        className="
          hidden md:block
          absolute
          right-0 lg:right-10
          bottom-0
          h-[85vh] lg:h-[100vh]
          w-[45vw] lg:w-[40vw]
          object-contain
          pointer-events-none
          select-none
        "
      />
    </>
  )
}
