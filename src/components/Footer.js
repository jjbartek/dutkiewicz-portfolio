import React, { useRef, useEffect } from "react"
import styled, { css } from "styled-components"

import { Wrapper } from "_styles/sharedStyles"
import { mQuery, colors } from "_styles/theme"
import { registerScrollTrigger, gsapSet, createTimeline } from "_utils/helpers"

const Wrap = styled(Wrapper)`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 0;

  ${mQuery("up-lg")(css`
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    height: 120px;
    margin-top: -120px;
    padding: 0;
  `)}

  ${mQuery("up-xl")(css`
    height: 148px;
    margin-top: -148px;
  `)}
`

const Copyright = styled.p`
  font-size: 1.6rem;
  margin: 0;
  color: ${colors.grey};
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 150%;

  &::last-child {
    margin-bottom: 0;
  }

  ${mQuery("up-lg")(css`
    width: unset;
    text-align: unset;
    margin-bottom: unset;
  `)}

  a {
    color: ${colors.white};
    font-weight: bold;
  }
`

const Footer = () => {
  const footer = useRef(null)

  useEffect(() => {
    const footerChildren = footer.current.children

    registerScrollTrigger()

    gsapSet([...footerChildren], {
      autoAlpha: 0,
    })

    createTimeline(footer.current).to([...footerChildren], {
      duration: 1,
      autoAlpha: 1,
      stagger: 0.3,
    })
  }, [])

  return (
    <Wrap ref={footer}>
      <Copyright>
        Wszystkie prawa zastrzeżone &copy; 2020 dutkiewiczdesign.pl
      </Copyright>
      <Copyright>
        Realizacja: <a href="http://bartekjonca.pl">Bartek Jońca</a>
      </Copyright>
    </Wrap>
  )
}

export default Footer
