import scrollToElement from "scroll-to-element"

export const scrollToTarget = (e, target) => {
  if (typeof window !== "undefined") {
    if (e) e.preventDefault()
    scrollToElement(target, {
      offset: 0,
      duration: 1000,
    })
  }
}
