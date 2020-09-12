import scrollToElement from "scroll-to-element"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export const scrollToTarget = (e, target) => {
  if (typeof window !== "undefined") {
    if (e) e.preventDefault()
    scrollToElement(target, {
      offset: 0,
      duration: 1000,
    })
  }
}

export const registerScrollTrigger = () => {
  if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger)
    gsap.core.globals("ScrollTrigger", ScrollTrigger)
  }
}

export const createTimeline = trigger => {
  return gsap.timeline({
    ...(typeof trigger !== "undefined" && {
      scrollTrigger: {
        trigger: trigger,
        start: "top bottom",
      },
    }),
    defaults: { ease: "power3.inOut" },
  })
}

export const gsapSet = (objects, settings) => {
  gsap.set([...objects], settings)
}
