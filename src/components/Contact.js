import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"

import { mQuery, colors } from "_styles/theme"

const Container = styled.div`
  display: ${({ hiddenOnMobile }) => (hiddenOnMobile ? "none" : "flex")};
  flex-direction: ${({ reversed }) => (reversed ? "row-reverse" : "row")};
  text-align: ${({ reversed }) => (reversed ? "right" : "left")};

  ${mQuery("up-lg")(css`
    ${({ hiddenOnMobile }) =>
      hiddenOnMobile &&
      css`
        display: flex;
      `}
  `)}
`
const Row = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  line-height: 100%;
  margin: 0 3rem;

  ${mQuery("only-lg-xl")(css`
    font-size: 1.3rem;
  `)}

  &:first-child {
    margin-left: ${({ reversed }) => (reversed ? "3rem" : "0")};
    margin-right: ${({ reversed }) => (reversed ? "0" : "3rem")};
  }

  &:last-child {
    margin-right: ${({ reversed }) => (reversed ? "3rem" : "0")};
    margin-left: ${({ reversed }) => (reversed ? "0" : "3rem")};
  }
`

const Title = styled.p`
  font-weight: 600;
  margin-top: 0;
`
const Value = styled.p`
  color: ${colors.grey};
`

const Contact = ({ reversed, hiddenOnMobile, contactData }) => {
  const { items } = contactData

  return (
    <Container hiddenOnMobile={hiddenOnMobile} reversed={reversed}>
      {items.map(({ title, value, link }, index) => (
        <Row reversed={reversed} key={index}>
          <Title>{title}: </Title>
          <Value as={link ? "a" : "p"} href={link || null}>
            {value}
          </Value>
        </Row>
      ))}
    </Container>
  )
}

Contact.propTypes = {
  contactData: PropTypes.object.isRequired,
  hiddenOnMobile: PropTypes.bool,
  reversed: PropTypes.bool,
}

Contact.defaultProps = {
  hiddenOnMobile: false,
  reversed: false,
}

export default Contact
