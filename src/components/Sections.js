import React from "react"
import styled, { css } from "styled-components"
import { Wrapper } from "_styles/sharedStyles"
import Socials from "_components/Socials"
import SiteContext from "_store/SiteContext"

import { mQuery, gaps } from "_styles/theme"

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
