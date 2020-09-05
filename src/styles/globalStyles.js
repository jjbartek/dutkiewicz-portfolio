import { createGlobalStyle, css } from "styled-components"

import IcomoonTtf from "_fonts/icomoon/icomoon.ttf"
import IcomoonWoff from "_fonts/icomoon/icomoon.woff"
import IcomoonSvg from "_fonts/icomoon/icomoon.woff"

import { mQuery, colors, fonts } from "_styles/theme"

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'icomoon';
    src:
        url(${IcomoonTtf}) format('truetype'),
        url(${IcomoonWoff}) format('woff'),
        url(${IcomoonSvg}) format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
}

html {
    font-size: 62.5%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    overflow-x: hidden;

    ${mQuery("up-lg")(css`
      overflow: unset;
    `)}
}

body {
    background: ${colors.bodyBg};
    font-family: ${fonts.main};
    font-size: 1.6rem;
    color: ${colors.white};
    overflow-x: hidden;
}

a {
    text-decoration: none;
    color: ${colors.white};
}
`

export default GlobalStyle
