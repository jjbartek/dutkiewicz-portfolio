import React, { useState, useLayoutEffect } from "react"
import styled from "styled-components"

import { colors } from "_styles/theme"

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999999;
  background: ${colors.bodyBg};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out opacity;
`

const LoadingScreen = () => {
  const [isHidden, setIsHidden] = useState(false)
  const [isHiding, setIsHiding] = useState(false)

  useLayoutEffect(() => {
    setIsHiding(true)
    setTimeout(() => {
      setIsHidden(true)
    }, 300)
  }, [])

  const styles = {
    display: isHidden ? "none" : "flex",
    opacity: isHiding ? "0" : "1",
  }

  return (
    <LoadingContainer style={styles}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 44 44"
        stroke={colors.blue}
      >
        <g fill="none" fillRule="evenodd" strokeWidth="2">
          <circle cx="22" cy="22" r="1">
            <animate
              attributeName="r"
              begin="0s"
              dur="1.8s"
              values="1; 20"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.165, 0.84, 0.44, 1"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-opacity"
              begin="0s"
              dur="1.8s"
              values="1; 0"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.3, 0.61, 0.355, 1"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="22" cy="22" r="1">
            <animate
              attributeName="r"
              begin="-0.9s"
              dur="1.8s"
              values="1; 20"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.165, 0.84, 0.44, 1"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-opacity"
              begin="-0.9s"
              dur="1.8s"
              values="1; 0"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.3, 0.61, 0.355, 1"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    </LoadingContainer>
  )
}

export default LoadingScreen
