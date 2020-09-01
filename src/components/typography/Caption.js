import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

import { mQuery, colors } from "_styles/theme"

const StyledCaption = styled.h3`
  margin: 1.5rem 0;
  color: ${colors.blue};
  font-size: 1.3rem;
  line-height: 3.2rem;
  font-weight: 600;
  text-transform: uppercase;
  display: flex;
  align-items: center;

  &:before {
    content: "";
    flex: 0 1 50px;
    height: 1px;
    background: ${colors.blue};
  }

  span {
    margin-left: 16px;
  }

  ${mQuery("up-lg")(css`
    font-size: 1.8rem;

    &:before {
      flex: 0 1 84px;
    }
  `)}
`

const Caption = ({ children }) => {
  return (
    <StyledCaption>
      <span>{children}</span>
    </StyledCaption>
  )
}

Caption.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Caption
