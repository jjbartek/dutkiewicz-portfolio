import React, { useState, useRef, useEffect } from "react"
import PropTypes from "prop-types"

import styled, { css } from "styled-components"
import SwiperCore, { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import Heading from "_typography/Heading"

import { mQuery, colors } from "_styles/theme"
import { registerScrollTrigger, gsapSet, createTimeline } from "_utils/helpers"

SwiperCore.use([Navigation])

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  height: 100%;
`

const List = styled.div`
  margin-top: 2rem;
  margin-right: -20px;
  width: calc(100% + 20px);

  ${mQuery("up-lg")(css`
    width: 100%;
    margin: 0;
  `)}

  .swiper-slide {
    width: 85%;
    max-width: 400px;
    height: auto;
    position: relative;
    margin-right: 15px;
    border: 2px solid #171718;
    border-radius: 8px;
    padding: 2rem;
    box-sizing: border-box;

    &:last-child {
      margin-right: 20px !important;
    }

    ${mQuery("up-lg")(css`
      border: 0;
      max-width: unset;
      width: calc(25% - 42px);
      padding: 0;
      margin-right: 56px;

      &:last-child {
        margin-right: 0 !important;
      }
    `)}
  }
`
const Title = styled.p`
  color: ${colors.grey};
  font-size: 1.6rem;
  font-weight: 600;
  transition: 0.2s ease-in-out color;

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${colors.blue};
    `}
`

const Answers = styled.div`
  ${mQuery("up-lg")(css`
    width: 55%;
  `)}
`

const Question = styled.p`
  font-size: 2rem;
  font-weight: 500;
  line-height: 153%;

  ${({ isActive }) =>
    isActive &&
    css`
      text-decoration: underline;
      text-underline-position: under;
    `}

  ${mQuery("up-lg")(css`
    font-size: 1.8rem;
  `)}

  ${mQuery("up-xl")(css`
    font-size: 2.6rem;
  `)}
`

const QuestionWrap = styled.div`
  cursor: pointer;
`

const Help = ({ helpData }) => {
  const { edges } = helpData
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const answers = useRef(null)
  const list = useRef(null)

  useEffect(() => {
    const questions = list.current.querySelectorAll(".question")
    registerScrollTrigger()
    gsapSet([answers.current, ...questions], {
      autoAlpha: 0,
    })
    createTimeline(answers.current).to(answers.current, {
      duration: 1,
      autoAlpha: 1,
    })
    createTimeline(list.current).to(questions, {
      duration: 1,
      autoAlpha: 1,
      stagger: 0.3,
    })
  }, [])

  return (
    <Container>
      <Answers ref={answers}>
        {edges.map(({ node: { answer } }, index) => (
          <Heading
            key={index}
            style={{ display: index === currentQuestion ? "block" : "none" }}
            as="h2"
            size="big"
          >
            “{answer}”
          </Heading>
        ))}
      </Answers>
      <List ref={list}>
        <Swiper slidesPerView="auto">
          {edges.map(({ node: { category, question } }, index) => (
            <SwiperSlide
              key={index}
              onClick={() => {
                setCurrentQuestion(index)
              }}
            >
              <QuestionWrap className="question">
                <Title isActive={index === currentQuestion}>{category}</Title>
                <Question isActive={index === currentQuestion}>
                  {question}
                </Question>
              </QuestionWrap>
            </SwiperSlide>
          ))}
        </Swiper>
      </List>
    </Container>
  )
}

Help.propTypes = {
  helpData: PropTypes.object.isRequired,
}

export default Help
