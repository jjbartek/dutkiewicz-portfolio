import React from "react"
import Slide from "react-reveal/Slide"
import styled from "styled-components"
import { FormattedMessage } from "gatsby-plugin-intl"

import Layout from "_components/layouts/Default"
import Button from "_components/Button"

import TextContainer from "_typography/TextContainer"
import Heading from "_typography/Heading"

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    margin-top: 3rem;
  }
`

const NotFoundPage = () => (
  <Layout>
    <Container>
      <Slide bottom>
        <Heading size="big">
          <FormattedMessage id="404-title" />
        </Heading>
        <TextContainer size="medium">
          <FormattedMessage id="404-description" />
        </TextContainer>
        <Button link="/" externalLink={false} size="medium">
          <FormattedMessage id="404-button-title" />
        </Button>
      </Slide>
    </Container>
  </Layout>
)

export default NotFoundPage
