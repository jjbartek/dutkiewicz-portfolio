import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"

import Icon from "_components/Icon"
import { mQuery, gaps, colors } from "_styles/theme"

const Container = styled.div`
  display: none;
  flex: 0 0 ${gaps.socials};

  ${mQuery("up-lg")(css`
    display: block;
  `)}
`

const InnerContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  display: flex;
`

const Item = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 44px;
  margin-bottom: 2.2rem;
  border-radius: 50%;
  transition: 0.3s ease-in-out background;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background: ${colors.mediumGrey};
  }

  i {
    font-size: 1.8rem;
  }
`

const Socials = ({ socialMedia }) => {
  const { edges } = socialMedia

  return (
    <Container>
      <InnerContainer>
        {edges.map(({ node: { icon, url, title } }, index) => (
          <Item href={url} alt={title} key={index}>
            <Icon name={icon} />
          </Item>
        ))}
      </InnerContainer>
    </Container>
  )
}

Socials.propTypes = {
  socialMedia: PropTypes.object.isRequired,
}

export default Socials
