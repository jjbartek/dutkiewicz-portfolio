import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"

import BottomLine from "_components/BottomLine"
import { mQuery, breakpoints } from "_styles/theme"
import { SectionWrapper } from "_styles/sharedStyles"

const StyledSection = styled.section`
  position: relative;
  box-sizing: border-box;
  padding-top: 5rem;
  width: 100%;

  ${mQuery("up-lg")(css`
    padding-top: 82px;
    overflow: unset;
    height: 80vh;
  `)}

  ${({ hasBottomLine }) =>
    hasBottomLine &&
    css`
      padding-bottom: 123px;

      ${mQuery("up-lg")(css`
        height: 100vh;
      `)}

      ${mQuery("only-lg-xl")(css`
        padding-bottom: 80px;
      `)}
    `}

  ${({ hasFooter }) =>
    hasFooter &&
    css`
      ${mQuery("up-lg")(css`
        height: 90vh;
        padding-bottom: 120px;
      `)}

      ${mQuery("only-xl")(css`
        padding-bottom: 148px;
      `)}
    `}

  ${({ isTiny }) =>
    isTiny &&
    css`
      ${mQuery("up-lg")(css`
        height: 70vh;
      `)}
    `}
`

const Section = ({
  heightFixedOnMobile,
  hasBottomLine,
  hasFooter,
  isTiny,
  hasLeftGap,
  children,
  id,
}) => {
  const [windowWidth, setWindowWidth] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    const setDimentions = () => {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
    }

    setDimentions()
    window.addEventListener("resize", setDimentions)
    return () => window.removeEventListener("resize", setDimentions)
  }, [])

  const isDesktop = windowWidth >= breakpoints.up.lg

  const style = {
    ...(!isDesktop && {
      ...(heightFixedOnMobile && {
        height: windowHeight,
      }),
    }),
  }

  return (
    <StyledSection
      hasBottomLine={hasBottomLine}
      hasFooter={hasFooter}
      isTiny={isTiny}
      className={`page-section`}
      style={style}
      id={id}
    >
      <SectionWrapper hasLeftGap={hasLeftGap}>{children}</SectionWrapper>
      {hasBottomLine && <BottomLine />}
    </StyledSection>
  )
}

Section.props = {
  heightFixedOnMobile: PropTypes.bool,
  hasBottomLine: PropTypes.bool,
  hasFooter: PropTypes.bool,
  hasLeftGap: PropTypes.bool,
  isTiny: PropTypes.bool,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
}

Section.defaultProps = {
  heightFixedOnMobile: false,
  hasBottomLine: false,
  hasFooter: false,
  isTiny: false,
}

export default Section
