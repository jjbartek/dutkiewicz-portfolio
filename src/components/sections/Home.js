import React, { useRef, useEffect } from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import Contact from "_components/Contact"

import Heading from "_typography/Heading"
import TextContainer from "_typography/TextContainer"

import SiteContext from "../../store/SiteContext"

import { mQuery } from "_styles/theme"
import { gsapSet, createTimeline } from "_utils/helpers"

const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;

  ${mQuery("up-lg")(css`
    justify-content: space-between;
    flex-direction: row;
  `)}
`

const Content = styled.div`
  text-align: center;
  max-width: 450px;

  & > p {
    padding: 2rem 0;
  }

  ${mQuery("up-lg")(css`
    text-align: left;
    max-width: 670px;
    flex: 1;

    & > p {
      width: 70%;
      margin-top: 1rem;
    }
  `)}
`

const HomeImg = styled(Img)`
  display: none;

  ${mQuery("up-lg")(css`
    display: block;
    flex: 0 1 30%;
    margin-left: auto;
    margin-right: 3rem;
  `)}
`

const DataWrap = styled.div`
  display: none;

  ${mQuery("up-lg")(css`
    display: none;
  `)}
`

const Home = ({ homeData }) => {
  const {
    heading,
    description,
    image: { fluid },
  } = homeData

  const content = useRef(null)
  const image = useRef(null)

  useEffect(() => {
    const contentItems = content.current.children

    gsapSet([contentItems], { autoAlpha: 0 })
    createTimeline().to(contentItems, {
      duration: 1,
      autoAlpha: 1,
      stagger: 0.3,
    })
  }, [])

  return (
    <Container>
      <Content ref={content}>
        <Heading size="large">{heading}</Heading>
        <TextContainer size="medium">{description}</TextContainer>
        <DataWrap>
          <SiteContext.Consumer>
            {({ contactData }) => <Contact contactData={contactData} />}
          </SiteContext.Consumer>
        </DataWrap>
      </Content>
      <HomeImg fluid={fluid} ref={image} />
    </Container>
  )
}

Home.propTypes = {
  homeData: PropTypes.object.isRequired,
}

export default Home
