import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"

const backslash = "\\"

const StyledIcon = styled.i`

font-family: "icomoon" !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  ${({ code }) =>
    code === "templanet" &&
    css`
      width: 3.5em;
    `}

  ${({ code }) =>
    code === "youtube" &&
    css`
      width: 1.125em;
    `}

    ${({ code }) =>
      code &&
      css`
      &:before {
        content: "${backslash}${props => props.code}";
      }
    `}
`

const icons = {
  arrowVerticalLong: "e921",
  arrowVerticalShort: "e922",
  arrowHorizontalLong: "e91f",
  arrowHorizontalShort: "e91e",
  longArrow: "e920",
  user: "e91d",
  scroll: "e91c",
  hamburger: "e900",
  alert: "e901",
  behance: "e902",
  bell: "e903",
  "bell-off": "e904",
  check: "e905",
  "chevron-down": "e906",
  "chevron-left": "e907",
  "chevron-right": "e908",
  "chevron-up": "e909",
  close: "e90a",
  dribbble: "e90b",
  facebook: "e90c",
  globe: "e90d",
  heart: "e90e",
  instagram: "e90f",
  mail: "e910",
  messenger: "e911",
  moon: "e912",
  phone: "e913",
  search: "e914",
  send: "e915",
  sun: "e916",
  tag: "e917",
  telegram: "e918",
  templanet: "e919",
  twitter: "e91a",
  youtube: "e91b",
}

const Icon = ({ name }) => {
  return <StyledIcon code={icons[name] ?? undefined}></StyledIcon>
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon
