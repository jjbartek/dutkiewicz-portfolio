import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"

import { mQuery, colors } from "_styles/theme"

const StyledHeading = styled.h1`
  margin: 1.5rem 0;

  .reversed {
    color: ${colors.grey};
    font-weight: normal;
  }

  ${({ headingSize }) =>
    headingSize === "large" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      line-height: 130%;

      ${mQuery("up-sm")(css`
        font-size: 4.5rem;
      `)}

      ${mQuery("up-xl")(css`
        font-size: 6.2rem;
      `)}
    `}

  ${({ headingSize }) =>
    headingSize === "big" &&
    css`
      font-size: 3.5rem;
      font-weight: 500;
      line-height: 124%;

      ${mQuery("up-xl")(css`
        font-size: 5rem;
      `)}
    `}

  ${({ headingSize }) =>
    headingSize === "small" &&
    css`
      font-size: 2rem;
      line-height: 3rem;
      font-weight: 400;

      ${mQuery("only-lg-xl")(css`
        font-size: 1.8rem;
      `)}
    `}

  ${({ headingSize }) =>
    headingSize === "medium" &&
    css`
      margin: 2rem 0;
      font-size: 1.8rem;
      line-height: 120%;
      font-weight: bold;

      .reversed {
        font-size: 1.5rem;
      }

      ${mQuery("up-xl")(css`
        font-size: 2.4rem;

        .reversed {
          font-size: 2rem;
        }
      `)}
    `}
`

const Heading = ({ size, as, children, style }) => {
  const sizes = {
    large: "h1",
    big: "h1",
    medium: "h2",
    small: "h2",
  }

  return (
    <StyledHeading headingSize={size} as={as ? as : sizes[size]} style={style}>
      {children}
    </StyledHeading>
  )
}

Heading.propTypes = {
  size: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  as: PropTypes.string,
  style: PropTypes.object,
}

Heading.defaultProps = {
  size: "big",
}

export default Heading
