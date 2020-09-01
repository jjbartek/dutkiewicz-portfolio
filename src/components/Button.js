import React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby-plugin-intl"
import PropTypes from "prop-types"

import { mQuery, colors } from "_styles/theme"

const StyledButton = styled.button`
  display: inline-block;
  border-radius: 8px;
  font-weight: bold;
  text-align: center;
  outline: 0;
  border: 0;
  cursor: pointer;
  background: ${({ hex }) => (hex ? hex : colors.darkGrey)};
  color: ${({ hex }) => (hex ? colors.white : colors.grey)};

  ${({ size }) =>
    size === "medium" &&
    css`
      font-size: 1.3rem;
      padding: 17px 28px;

      ${mQuery("up-xl")(css`
        font-size: 1.4rem;
        padding: 20px 28px;
      `)}
    `}

  ${({ size }) =>
    size === "large" &&
    css`
      font-size: 1.4rem;
      padding: 15px 15px;

      ${mQuery("up-xl")(css`
        font-size: 1.6rem;
        padding: 20px 28px;
      `)}
    `}
`

const Button = ({
  size,
  hex,
  link,
  externalLink,
  children,
  color,
  onClick,
}) => {
  if (color && colors.hasOwnProperty(color)) {
    hex = colors[color]
  }

  return (
    <StyledButton
      size={size}
      hex={hex}
      onClick={onClick}
      as={link ? (externalLink ? "a" : Link) : "button"}
      href={link}
      to={link}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  hex: PropTypes.string,
  size: PropTypes.string,
  link: PropTypes.string,
  externalLink: PropTypes.bool,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  size: "medium",
  externalLink: true,
}

export default Button
