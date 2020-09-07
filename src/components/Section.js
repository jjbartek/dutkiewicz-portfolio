import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"

import BottomLine from "_components/BottomLine"
import { mQuery, breakpoints } from "_styles/theme"
import { SectionWrapper } from "_styles/sharedStyles"

const StyledSection = styled.section`
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  padding-bottom: 123px;
  padding-top: 82px;
  width: 100%;

  ${mQuery("up-lg")(css`
    overflow: unset;
    height: 100vh;
  `)}

  ${mQuery("only-lg-xl")(css`
    padding-bottom: 80px;
  `)}
`

const Section = ({
  heightFixedOnMobile,
  hideScroll,
  hideContactData,
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
      minHeight: windowHeight,
      ...(heightFixedOnMobile && {
        height: windowHeight,
      }),
    }),
  }

  return (
    <StyledSection className={`page-section`} style={style} id={id}>
      <SectionWrapper hasLeftGap={hasLeftGap}>{children}</SectionWrapper>
      <BottomLine hideContactData={hideContactData} hideScroll={hideScroll} />
    </StyledSection>
  )
}

Section.defaultProps = {
  heightFixedOnMobile: true,
  hideContactData: false,
}

export default Section
