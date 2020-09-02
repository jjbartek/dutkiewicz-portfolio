import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"

import { useWindowDimensions } from "_utils/hooks"

import Socials from "_components/Socials"
import BottomLine from "_components/BottomLine"
import { mQuery } from "_styles/theme"
import { SectionWrapper } from "_styles/sharedStyles"

import SiteContext from "../store/SiteContext"

const StyledSection = styled.section`
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  padding-bottom: 123px;
  padding-top: 82px;

  ${({ fixedHeight }) =>
    fixedHeight &&
    css`
      height: 100vh;
      overflow-y: hidden;
    `}

  ${mQuery("only-lg-xl")(css`
    padding-bottom: 80px;
  `)}
`

const Section = ({
  heightFixedOnDesktop,
  hideScroll,
  hideContactData,
  hasLeftGap,
  children,
  id,
}) => {
  if (typeof window !== "undefined") {
    const { windowHeight, windowWidth } = useWindowDimensions()
    const hasFixedHeight = heightFixedOnDesktop ? windowWidth >= 1200 : true
  } else {
    const windowHeight = (windowWidth = 0)
    const hasFixedHeight = true
  }

  const style = {
    minHeight: windowHeight,
    ...(hasFixedHeight && {
      height: windowHeight,
    }),
  }

  return (
    <StyledSection fixedHeight={hasFixedHeight} style={style} id={id}>
      <SectionWrapper hasLeftGap={hasLeftGap} hasRightGap={true}>
        {children}
        <SiteContext.Consumer>
          {({ socialMedia }) => <Socials socialMedia={socialMedia} />}
        </SiteContext.Consumer>
      </SectionWrapper>
      <BottomLine hideContactData={hideContactData} hideScroll={hideScroll} />
    </StyledSection>
  )
}

Section.propTypes = {
  heightFixedOnDesktop: PropTypes.bool,
  hideContactData: PropTypes.bool,
  hideScroll: PropTypes.bool,
  hasLeftGap: PropTypes.bool,
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

Section.defaultProps = {
  heightFixedOnDesktop: false,
  hideContactData: false,
}

export default Section
