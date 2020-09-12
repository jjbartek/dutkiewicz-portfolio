import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"

import { Swiper, SwiperSlide } from "swiper/react"
import styled, { css } from "styled-components"

import TextContainer from "_typography/TextContainer"
import Caption from "_typography/Caption"
import Heading from "_typography/Heading"

import Icon from "_components/Icon"

import { mQuery, colors } from "_styles/theme"
import { registerScrollTrigger, gsapSet, createTimeline } from "_utils/helpers"

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-wrap: wrap;

  ${mQuery("up-lg")(css`
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `)}
`

const Info = styled.div`
  max-width: 500px;
  width: 100%;

  & > h1,
  & > p {
    margin: 3rem 0;
  }

  ${mQuery("up-lg")(css`
    width: unset;
    flex: 0 1 42%;
    max-width: unset;

    & > p {
      width: 86%;
    }
  `)}
`

const Block = styled.div`
  background: ${colors.darkGrey};
  border-radius: 8px;
  padding: 31px 32px;
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
  position: relative;

  ${mQuery("only-lg-xl")(css`
    padding: 22px 25px;
  `)}

  & > i {
    background: ${colors.grey_two};
    width: 51px;
    height: 51px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    color: ${colors.grey};
    font-size: 2.3rem;
    margin-bottom: 2rem;

    ${mQuery("only-lg-xl")(css`
      width: 35px;
      height: 35px;
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
    `)}
  }

  .hidden {
    background: ${colors.blue};
    position: absolute;
    top: -100%;
    left: 0;
    right: 0;
    height: 100%;
    z-index: 5;
    padding: 31px 32px;
    box-sizing: border-box;
    transition: 0.3s ease-in-out top;
    overflow: auto;

    ${mQuery("only-lg-xl")(css`
      padding: 22px 25px;
    `)}

    p {
      color: ${colors.light};
      margin: 1rem 0 0 0;

      ${mQuery("only-lg-xl")(css`
        margin: 0.5rem 0 0 0;
      `)}
    }

    h2 {
      margin: 0;
    }
  }

  &:hover {
    .hidden {
      top: 0;
    }
  }
`
const Blocks = styled.div`
  width: 100%;
  ${mQuery("up-lg")(css`
    width: unset;
    flex: 0 1 52%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `)}
`

const MobileBlocks = styled.div`
  margin-top: 4rem;
  width: 100%;
  margin-right: -20px;
  width: calc(100% + 20px);

  .swiper-slide {
    width: 85vw;
    max-width: 400px;
    height: auto;
    position: relative;

    &:last-child {
      margin-right: 20px;
    }
  }

  ${mQuery("up-lg")(css`
    display: none;
  `)}
`
const DesktopBlocks = styled.div`
  display: none;
  gap: 28px;
  max-height: 616px;

  ${Block} {
    & > h2 {
      margin-bottom: 0;
    }

    & > p {
      margin-top: 1rem;
    }
  }

  ${Block}:nth-child(1) {
    grid-area: 1 / 1 / 3 / 2;
  }

  ${Block}:nth-child(2) {
    grid-area: 2 / 2 / 4 / 2;
  }

  ${Block}:nth-child(3) {
    grid-area: 3 / 1 / 5 / 2;
  }

  ${Block}:nth-child(4) {
    grid-area: 4 / 2 / 6 / 2;
  }

  ${mQuery("up-lg")(css`
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(2, 1fr);
  `)}

  ${mQuery("only-lg-xl")(css`
    gap: 18px;
    max-height: 500px;

    ${Block} {
      display: flex;
      flex-direction: column;
      justify-content: center & > h2 {
        margin: 0.3rem 0 0.2rem 0;
      }

      & > p {
        margin: 0;
      }
    }
  `)}
`
const PersonalData = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4rem;

  ${mQuery("up-xl")(css`
    margin-top: 7rem;
  `)}
`

const PDRow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1.7rem;

  ${mQuery("up-lg")(css`
    margin: 0 2.7rem;
  `)}

  ${mQuery("up-lg")(css`
    margin: 0 3.7rem;
  `)}

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`

const PDTitle = styled.p`
  color: ${colors.grey};
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 180%;
  margin: 0;
`

const PDValue = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 180%;
  margin: 0;
`

const Offer = ({ offer }) => {
  const { iconName, title, shortDescription, fullDescription } = offer

  return (
    <Block className={`block`}>
      <Icon name={iconName}></Icon>
      <Heading size="small">{title}</Heading>
      <TextContainer size="small">{shortDescription}</TextContainer>
      <div className="hidden">
        <Heading size="small">{title}</Heading>
        <TextContainer size="small">{fullDescription}</TextContainer>
      </div>
    </Block>
  )
}

const Offers = ({ offersData }) => {
  const { caption, heading, description, personalData, offers } = offersData

  const info = useRef(null)
  const blocks = useRef(null)

  useEffect(() => {
    const infoItems = info.current.children
    const allBlocks = blocks.current.querySelectorAll(".block")

    registerScrollTrigger()
    gsapSet([...infoItems, ...allBlocks], { autoAlpha: 0 })

    createTimeline(info.current).to(infoItems, {
      duration: 1,
      autoAlpha: 1,
      stagger: 0.1,
    })

    createTimeline(blocks.current).to(allBlocks, {
      duration: 1,
      autoAlpha: 1,
      stagger: 0.1,
    })
  }, [])

  return (
    <Container>
      <Info ref={info}>
        <Caption>{caption}</Caption>
        <Heading size="big">{heading}</Heading>
        <TextContainer size="big">{description}</TextContainer>
        <PersonalData>
          {personalData.map(({ title, value }, index) => (
            <PDRow key={index}>
              <PDTitle>{title}</PDTitle>
              <PDValue>{value}</PDValue>
            </PDRow>
          ))}
        </PersonalData>
      </Info>
      <Blocks ref={blocks}>
        <MobileBlocks>
          <Swiper slidesPerView="auto" spaceBetween={30}>
            {offers.map((offer, index) => (
              <SwiperSlide key={index}>
                <Offer offer={offer} />
              </SwiperSlide>
            ))}
          </Swiper>
        </MobileBlocks>
        <DesktopBlocks>
          {offers.map((offer, index) => (
            <Offer id="social" key={index} offer={offer} />
          ))}
        </DesktopBlocks>
      </Blocks>
    </Container>
  )
}

Offers.propTypes = {
  offersData: PropTypes.object.isRequired,
}

export default Offers
