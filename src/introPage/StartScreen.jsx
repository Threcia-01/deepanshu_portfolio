import { useIntroPage } from "./useIntroPage"
import introBg from "../assets/images/introPageBg.jpg"

export default function StartScreen() {
  const { startIntro } = useIntroPage()

  return (
    <div className="w-full h-screen relative flex items-center justify-center bg-black">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center zoom-slow"
        style={{ backgroundImage: `url(${introBg})` }}
      />

     
      {/* Content */}
      <div className="relative z-10 text-center">


        <button
          onClick={startIntro}
          className="px-10 py-4 border border-cyan-400 text-cyan-400 text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_25px_rgba(56,189,248,0.7)] hover:scale-105"
        >
          START
        </button>

      </div>
    </div>
  )
}