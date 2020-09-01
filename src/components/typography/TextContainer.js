import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"

import { mQuery, colors } from "_styles/theme"

const StyledTextContainer = styled.p`
  margin: 1.5rem 0;
  color: ${colors.grey};
  font-size: 1.3rem;
  line-height: 2.4rem;
  font-weight: 500;
  ${({ textContainerSize }) =>
    textContainerSize === "small" &&
    css`
      font-size: 1.4rem;
      line-height: 171%;

      ${mQuery("only-lg-xl")(css`
        font-size: 1.2rem;
      `)}
    `}

  ${({ textContainerSize }) =>
    textContainerSize === "medium" &&
    css`
      font-size: 1.3rem;
      line-height: 200%;

      ${mQuery("up-sm")(css`
        font-size: 1.6rem;
      `)}

      ${mQuery("only-lg-xl")(css`
        font-size: 1.3rem;
      `)}
    `}
`

const TextContainer = ({ size, as, children }) => {
  return (
    <StyledTextContainer textContainerSize={size} as={as ? as : "p"}>
      {children}
    </StyledTextContainer>
  )
}

TextContainer.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  as: PropTypes.string,
}

export default TextContainer
