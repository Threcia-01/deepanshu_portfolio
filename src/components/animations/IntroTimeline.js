import { gsap } from "gsap"

export const runIntroTimeline = ({
  flashRef,
  loadingRef,
  onComplete,
}) => {

  const tl = gsap.timeline()

  // Flash burst
  tl.to(flashRef.current, {
    opacity: 1,
    duration: 0.8,
    ease: "power4.out",
  })

  // Fade to black
  tl.to(flashRef.current, {
    opacity: 0,
    duration: 2.2,
    ease: "power2.inOut",
  })

  // Loading text fade in
  tl.fromTo(
    loadingRef.current,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 1.6,
      ease: "power2.out",
    }
  )

  // Hold
  tl.to({}, { duration: 1 })

  // Callback → enter portfolio
  tl.call(onComplete)

}