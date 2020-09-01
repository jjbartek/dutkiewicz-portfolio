import { useState, useEffect } from "react"

function getWindowDimensions() {
  const { innerWidth: windowWidth, innerHeight: windowheight } = window
  return {
    windowWidth,
    windowheight,
  }
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowDimensions
}

function getWindowOffset() {
  const { pageYOffset: offsetY, pageXOffset: offsetX } = window
  return {
    offsetY,
    offsetX,
  }
}

export function useWindowOffset() {
  const [windowOffset, setWindowOffset] = useState(getWindowOffset())

  useEffect(() => {
    function handleScroll() {
      setWindowOffset(getWindowOffset())
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return windowOffset
}
