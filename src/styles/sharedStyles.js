//import React from "react"
import styled, { css } from "styled-components"

import { mQuery, gaps } from "_styles/theme"

export const Wrapper = styled.div`
  max-width: 1516px;
  margin: 0 auto;
  padding: 0 ${gaps.wrapper};
  position: relative;
  box-sizing: border-box;
`

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  ${({ hasLeftGap }) =>
    hasLeftGap &&
    css`
      ${mQuery("up-lg")(css`
        padding-left: ${gaps.socials};
      `)}
    `}
`
