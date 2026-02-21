import { useEffect, useRef } from "react"
import { useIntroPage } from "./useIntroPage"
import { runIntroTimeline } from "../components/animations/IntroTimeline.js"

export default function TransitionScreen() {
  const { enterPortfolio } = useIntroPage()

  const flashRef = useRef(null)
  const loadingRef = useRef(null)

  useEffect(() => {
    runIntroTimeline({
      flashRef,
      loadingRef,
      onComplete: enterPortfolio,
    })
  }, [enterPortfolio])

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center relative">

      {/* Flash overlay */}
      <div
        ref={flashRef}
        className="fixed inset-0 bg-white opacity-0 z-50 pointer-events-none"
      />

      {/* Loading text */}
      <h1
        ref={loadingRef}
        className="text-3xl text-cyan-400 opacity-0"
      >
        Loading the world...
      </h1>

    </div>
  )
}