import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const animateFadeUp = (element, delay = 0) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 88%",
        toggleActions: "play none none none",
      },
    }
  )
}

export const animateStagger = (elements, staggerDelay = 0.12) => {
  gsap.fromTo(
    elements,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: staggerDelay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: elements[0],
        start: "top 88%",
        toggleActions: "play none none none",
      },
    }
  )
}

export const animateScaleIn = (element, delay = 0) => {
  gsap.fromTo(
    element,
    { opacity: 0, scale: 0.85 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      delay,
      ease: "back.out(1.4)",
      scrollTrigger: {
        trigger: element,
        start: "top 88%",
        toggleActions: "play none none none",
      },
    }
  )
}

export const animateSlideLeft = (element, delay = 0) => {
  gsap.fromTo(
    element,
    { opacity: 0, x: -60 },
    {
      opacity: 1,
      x: 0,
      duration: 0.9,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 88%",
        toggleActions: "play none none none",
      },
    }
  )
}

export const animateSlideRight = (element, delay = 0) => {
  gsap.fromTo(
    element,
    { opacity: 0, x: 60 },
    {
      opacity: 1,
      x: 0,
      duration: 0.9,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 88%",
        toggleActions: "play none none none",
      },
    }
  )
}
