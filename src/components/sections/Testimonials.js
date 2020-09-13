import React, { useRef, useEffect } from "react"
import styled, { css } from "styled-components"
import SwiperCore, { Navigation, Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import PropTypes from "prop-types"

import Heading from "_typography/Heading"

import { mQuery, colors, gaps } from "_styles/theme"
import { registerScrollTrigger, gsapSet, createTimeline } from "_utils/helpers"

SwiperCore.use([Navigation])
SwiperCore.use([Autoplay])

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  position: relative;

  ${mQuery("up-lg")(css`
    height: 100%;
  `)}

  .swiper-container {
    display: flex;
    position: static;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;

    ${mQuery("up-lg")(css`
      width: 64%;
      margin-left: 0;
      height: 100%;
    `)}
  }

  .swiper-wrapper {
    order: -1;
    flex: 1 0 100%;
    margin-bottom: 2.5rem;
  }

  .swiper-slide {
    display: flex;
    flex-direction: column;
    height: 100%;
    display: flex;
    width: 100%; //calc(100vw - 20px);

    & > p {
      margin-bottom: 40px;
    }

    ${mQuery("up-lg")(css`
      justify-content: center;
      width: unset;
    `)}
  }
`

const SliderNavigation = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  order: 1;
  margin-top: 2rem;

  ${mQuery("up-lg")(css`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: ${gaps.socials};
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    order: unset;
    margin-top: 0;
    transform: translateX(-100%);
    padding-top: 1.5rem;
  `)}
`

const NavButton = styled.button`
  display: flex;
  align-items: center;
  color: ${colors.grey_three};
  transition: 0.3s ease-in-out opacity;
  border: 0;
  outline: 0;
  padding: 0;
  background: none;
  cursor: pointer;

  &:not(.swiper-button-disabled):hover {
    &:before {
      color: ${colors.blue};
    }
  }

  &:before {
    font-family: "icomoon" !important;
    font-size: 1em;
    color: inherit;
    margin-right: 2rem;
    transition: 0.3s ease-in-out color;

    ${mQuery("up-lg")(css`
      margin-top: 1px;
      margin-right: unset;
    `)}
  }

  &.testimonials-button-prev:before {
    content: "\\e91e";

    ${mQuery("up-lg")(css`
      content: "\\e922";
      font-size: 55px;
    `)}
  }

  &.testimonials-button-next:before {
    content: "\\e91f";

    ${mQuery("up-lg")(css`
      content: "\\e921";
      font-size: 120px;
    `)}
  }

  &.swiper-button-disabled {
    opacity: 0.3;
  }
`

const Details = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
`

const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;

  &:last-child {
    margin-right: 0;
  }
`
const Testimonial = styled.div`
  max-width: 600px;

  ${mQuery("up-lg")(css`
    max-width: unset;
  `)}
`

const Title = styled.span`
  color: ${colors.grey};
  font-weight: 500;
  font-size: 1.4rem;
`

const Value = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  margin-top: 0.8rem;
`

const Testimonials = ({ testimonialsData }) => {
  const { edges } = testimonialsData
  const container = useRef(null)

  useEffect(() => {
    registerScrollTrigger()

    gsapSet([container.current], {
      autoAlpha: 0,
    })

    createTimeline(container.current).to(container.current, {
      duration: 2,
      autoAlpha: 1,
    })
  }, [])

  return (
    <Container ref={container}>
      <SliderNavigation>
        <NavButton className="testimonials-button-prev"></NavButton>
        <NavButton className="testimonials-button-next"></NavButton>
      </SliderNavigation>
      <Swiper
        breakpoints={{
          1200: {
            direction: "vertical",
          },
        }}
        navigation={{
          prevEl: ".testimonials-button-prev",
          nextEl: ".testimonials-button-next",
        }}
        slidesPerView={1}
        autoplay
      >
        {edges.map(({ node: { content, date, author } }, key) => (
          <SwiperSlide key={key}>
            <Testimonial>
              <Heading as="h2" size="big">
                “{content}”
              </Heading>
              <Details>
                <Row>
                  <Title>Author:</Title>
                  <Value>{author}</Value>
                </Row>
                <Row>
                  <Title>Date:</Title>
                  <Value>{date}</Value>
                </Row>
              </Details>
            </Testimonial>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

Testimonials.propTypes = {
  testimonialsData: PropTypes.object.isRequired,
}

export default Testimonials
