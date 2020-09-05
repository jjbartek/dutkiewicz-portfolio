import React, { useEffect } from "react"
import styled, { css } from "styled-components"
import { gsap, ScrollTrigger } from "gsap/all"
import Socials from "_components/Socials"
import { Wrapper } from "_styles/sharedStyles"
import SiteContext from "_store/SiteContext"

import { mQuery, gaps, breakpoints } from "_styles/theme"

gsap.registerPlugin(ScrollTrigger)

const MainWrapper = styled(Wrapper)`
  display: flex;
  position: relative;
`

const Container = styled.div`
  width: 100%;

  ${mQuery("up-lg")(css`
    flex: 0 0 ${gaps.sections};
  `)}
`

const Sections = ({ children }) => {
  useEffect(() => {
    ScrollTrigger.matchMedia({
      [`(min-width: ${breakpoints.up.lg}px)`]: function () {
        const snapSections = gsap.utils.toArray(".page-section")
        let snapper
        ScrollTrigger.create({
          trigger: snapSections[0],
          start: "top bottom",
          endTrigger: snapSections[snapSections.length - 1],
          end: "bottom top",
          onRefresh: self => {
            let values = snapSections.map(section =>
              gsap.utils.normalize(self.start, self.end, section.offsetTop)
            )
            values.push(1)
            snapper = gsap.utils.snap(values)
          },
          snap: value => snapper(value),
        })
      },
    })
  }, [])

  return (
    <MainWrapper>
      <Container>{children}</Container>
      <SiteContext.Consumer>
        {({ socialMedia }) => <Socials socialMedia={socialMedia} />}
      </SiteContext.Consumer>
    </MainWrapper>
  )
}

export default Sections
