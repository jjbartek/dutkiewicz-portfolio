//import React from "react"
import styled, { css } from "styled-components"

import { mQuery, gaps } from "_styles/theme"

export const Wrapper = styled.div`
  max-width: 1516px;
  margin: 0 auto;
  padding: 0 ${gaps.wrapper};
  position: relative;
  box-sizing: border-box;

  ${({ hasLeftGap }) =>
    hasLeftGap &&
    css`
      ${mQuery("up-lg")(css`
        padding-left: ${gaps.socials};
      `)}
    `}

  ${({ hasRightGap }) =>
    hasRightGap &&
    css`
      ${mQuery("up-lg")(css`
        padding-right: ${gaps.socials};
      `)}
    `}
`

export const SectionWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  height: 100%;
`
