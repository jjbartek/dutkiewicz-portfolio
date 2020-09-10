import React from "react"
import styled, { css } from "styled-components"

import { Wrapper } from "_styles/sharedStyles"
import { mQuery, colors } from "_styles/theme"

const Wrap = styled(Wrapper)`
    justify-content: space-between;
    align-items: center;
`

const Copyright = styled(p)`
    font-size: 1.6rem;
    margin: 0;
    a {
        color: #fff;
    }
`

const Footer = () => {
    return (
        <StyledFooter>
            <Wrap>
                <Copyright>Wszystkie prawa zastrzeżone © 2020 dutkiewiczdesign.pl</Copyright>
                <Copyright>Realizacja: <a href="http://bartekjonca.pl">Bartek Jońca</a></Copyright>
            </Wrap>
        </StyledFooter>
    )
}

export default Footer