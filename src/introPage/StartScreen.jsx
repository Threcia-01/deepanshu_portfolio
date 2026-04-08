import { useIntroPage } from "./useIntroPage"
import { useEffect, useRef, useState } from "react"
import introBg from "../assets/images/introPageBg.webp"
import startBtn from "../assets/images/startButtonIntroPage.png"

// The start button's position as % of the actual image dimensions
// Tweak these two values to land on the monitor
const BTN_LEFT_PCT  = 0.25   // 25% from left of image
const BTN_TOP_PCT   = 0.46   // 46% from top of image
const BTN_WIDTH_PCT = 0.15   // 15% of image width

export default function StartScreen() {
  const { startIntro } = useIntroPage()
  const imgRef = useRef(null)
  const [btnStyle, setBtnStyle] = useState({})

  // Natural image aspect ratio (measure once from actual file if needed)
  const IMG_RATIO = 6912 / 4468  // actual image dimensions

  const recompute = () => {
    const container = imgRef.current?.parentElement
    if (!container) return
    const cw = container.clientWidth
    const ch = container.clientHeight

    // Replicate object-contain logic
    const containerRatio = cw / ch
    let imgW, imgH, offsetX, offsetY

    if (containerRatio > IMG_RATIO) {
      // pillarboxed — black bars on left/right
      imgH = ch
      imgW = ch * IMG_RATIO
      offsetX = (cw - imgW) / 2
      offsetY = 0
    } else {
      // letterboxed — black bars on top/bottom
      imgW = cw
      imgH = cw / IMG_RATIO
      offsetX = 0
      offsetY = (ch - imgH) / 2
    }

    setBtnStyle({
      left:  offsetX + imgW * BTN_LEFT_PCT,
      top:   offsetY + imgH * BTN_TOP_PCT,
      width: imgW * BTN_WIDTH_PCT,
    })
  }

  useEffect(() => {
    recompute()
    window.addEventListener("resize", recompute)
    return () => window.removeEventListener("resize", recompute)
  }, [])

  return (
    <div className="w-full h-screen relative flex items-center justify-center bg-black overflow-hidden">

      <div ref={imgRef} className="absolute inset-0">
        <img
          src={introBg}
          alt=""
          className="w-full h-full object-contain object-center zoom-slow pointer-events-none select-none"
          onLoad={recompute}
        />

        <img
          src={startBtn}
          alt="Start"
          onClick={startIntro}
          className="absolute cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-200 drop-shadow-[0_0_20px_rgba(56,189,248,0.6)] hover:drop-shadow-[0_0_35px_rgba(56,189,248,0.9)]"
          style={{ position: "absolute", ...btnStyle }}
        />
      </div>

      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
    </div>
  )
}