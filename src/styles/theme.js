import { css } from "styled-components"

export const fonts = {
  main: `'Poppins', sans-serif`,
}

export const colors = {
  bodyBg: `#101010`,
  white: `#ffffff`,
  grey: `#848DA6`,
  darkGrey: `#171718`,
  mediumGrey: `#212324`,
  blue: `#0153F6`,
  pink: `#F83659`,
  grey_two: `#1D1D21`,
  grey_three: `#3b3636`,
  light: `#B3CBFC`,
}

export const gaps = {
  wrapper: "20px",
  socials: "9.4%",
  sections: "90.6%",
}

export const breakpoints = {
  up: {
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1400,
  },
  down: {
    xs: 575.98,
    sm: 767.98,
    md: 991.98,
    lg: 1199.98,
    xl: 1399.98,
  },
}

export const mQuery = options => {
  const [type, from, to] = options.split("-")

  if (type === "up") {
    return style =>
      css`
        @media (min-width: ${breakpoints.up[from]}px) {
          ${style}
        }
      `
  }

  if (type === "down") {
    return style =>
      css`
        @media (max-width: ${breakpoints.down[from]}px) {
          ${style}
        }
      `
  }

  if (type === "only") {
    return style =>
      css`
        @media (min-width: ${breakpoints.up[
            from
          ]}px) and (max-width: ${breakpoints.down[to]}px) {
          ${style}
        }
      `
  }
}
