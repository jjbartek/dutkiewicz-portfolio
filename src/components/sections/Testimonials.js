import React from "react"
import styled, { css } from "styled-components"
import SwiperCore, { Navigation, Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import PropTypes from "prop-types"

import Heading from "_typography/Heading"

import { mQuery, colors, gaps } from "_styles/theme"

SwiperCore.use([Navigation])
SwiperCore.use([Autoplay])

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

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

    & > p {
      margin-bottom: 40px;
    }

    ${mQuery("up-lg")(css`
      justify-content: center;
    `)}
  }
`

const SliderNavigation = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  order: 1;
  margin-top: 2rem;

  ${mQuery("up-lg")(css`
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${gaps.wrapper};
    width: ${gaps.socials};
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    order: unset;
    margin-top: 0;
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
    margin-top: 1px;
    color: inherit;
    transition: 0.3s ease-in-out color;
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

  return (
    <Container>
      <SliderNavigation>
        <NavButton className="testimonials-button-prev"></NavButton>
        <NavButton className="testimonials-button-next"></NavButton>
      </SliderNavigation>
      <Swiper
        slidesPerView="auto"
        breakpoints={{
          1200: {
            direction: "vertical",
            slidesPerView: 1,
          },
        }}
        navigation={{
          prevEl: ".testimonials-button-prev",
          nextEl: ".testimonials-button-next",
        }}
        autoplay
      >
        {edges.map(({ node: { content, date, author } }, key) => (
          <SwiperSlide key={key}>
            <div>
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
            </div>
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
