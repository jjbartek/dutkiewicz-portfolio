import React from "react"
import Flip from "react-reveal/Flip"
import Slide from "react-reveal/Slide"
import PropTypes from "prop-types"

import styled, { css } from "styled-components"
import Img from "gatsby-image"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay } from "swiper"

import Button from "_components/Button"
import Icon from "_components/Icon"

import TextContainer from "_typography/TextContainer"
import Heading from "_typography/Heading"

import { mQuery } from "_styles/theme"

SwiperCore.use([Autoplay])

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Info = styled.div`
  max-width: 400px; /* Only for mobile */
  & > a {
    margin-top: 1rem;
  }

  a > i {
    margin-left: 1.5rem;
    font-size: 1.2rem;
  }

  ${mQuery("up-lg")(css`
    flex: 0 1 43%;
    padding: 1rem;
    max-width: unset;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    h2 {
      margin-bottom: 0.5rem;
    }
  `)}
`
const ImagesContainer = styled.div`
  width: calc(100% + 20px);
  margin-right: -20px;
  margin-top: 50px;

  .swiper-container {
    width: 100%;
  }

  .swiper-slide {
    width: 218px;
    height: auto;

    &:last-child {
      margin-right: 20px;
    }

    ${mQuery("up-lg")(css`
      width: calc(33.3% - 13.3px);
      max-width: 218px;
    `)}
  }

  ${mQuery("up-lg")(css`
    width: unset;
    margin-right: unset;
    margin-top: unset;
    flex: 0 1 50%;
    max-width: 694px;
  `)}
`
const ImageLink = styled.a``
const Image = styled(Img)`
  height: auto;
  width: auto;
  max-width: 218px;
`

const ProjectsWrapper = styled.div`
  width: 100%;
  & + & {
    margin-top: 4rem;

    ${mQuery("up-xl")(css`
      margin-top: 8%;
    `)}
  }

  ${mQuery("up-lg")(css`
    display: flex;
    flex-direction: ${({ reversed }) => (reversed ? "row-reverse" : "row")};
    justify-content: space-between;

    ${({ reversed }) =>
      reversed &&
      css`
        ${Info} {
          align-items: flex-end;
          text-align: right;
        }
      `}
  `)}
`

const Portfolio = ({ portfolioData }) => {
  const { edges } = portfolioData
  return (
    <Container>
      {edges.map(
        (
          {
            node: {
              title,
              subTitle,
              description,
              buttonText,
              buttonLink,
              buttonBackground: { hex },
              projects,
            },
          },
          index
        ) => (
          <ProjectsWrapper
            key={index}
            reversed={index % 2 !== 0 ? true : false}
          >
            <Info>
              <Flip bottom>
                <Heading size="medium">
                  <span>{title}</span>
                  {subTitle && <span className="reversed"> | {subTitle}</span>}
                </Heading>
                <TextContainer size="medium">{description}</TextContainer>
                <Button size="medium" hex={hex} link={buttonLink}>
                  {buttonText}
                  <Icon name="longArrow" />
                </Button>
              </Flip>
            </Info>
            <ImagesContainer>
              <Slide left={index % 2 !== 0} right={index % 2 === 0}>
                <Swiper autoplay spaceBetween={20} slidesPerView="auto">
                  {projects.map(({ image: { fluid, alt }, link }, index) => (
                    <SwiperSlide key={index}>
                      <ImageLink href={link}>
                        <Image fluid={fluid} alt={alt} />
                      </ImageLink>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Slide>
            </ImagesContainer>
          </ProjectsWrapper>
        )
      )}
    </Container>
  )
}

Portfolio.propTypes = {
  portfolioData: PropTypes.object.isRequired,
}

export default Portfolio
