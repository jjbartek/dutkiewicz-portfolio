import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

import Contact from "_components/Contact"
import Icon from "_components/Icon"

import { mQuery, colors, gaps } from "_styles/theme"
import { Wrapper } from "_styles/sharedStyles"

import SiteContext from "../store/SiteContext"

const BottomLineContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 123px;
  box-sizing: border-box;

  ${mQuery("only-lg-xl")(css`
    height: 80px;
  `)}
`

const Wrap = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  position: relative;
`

const Scroll = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1px;
  color: ${colors.grey};

  ${mQuery("up-md")(css`
    position: static;
    transform: none;
    left: unset;
    top: unset;
    color: ${colors.white};
    margin-right: auto;
  `)}

  ${mQuery("only-lg-xl")(css`
    font-size: 2.5rem;
  `)}

  span {
    display: none;

    ${mQuery("up-md")(css`
      display: block;
      color: ${colors.grey};
      font-size: 1.6rem;
      margin-left: 2.3rem;
    `)}

    ${mQuery("only-lg-xl")(css`
      font-size: 1.4rem;
    `)}
  }
`

const Moon = styled.button`
  margin-left: auto;
  background: ${colors.mediumGrey};
  border: 0;
  outline: 0;
  height: 53px;
  width: 53px;
  box-sizing: border-box;
  border-radius: 50%;
  font-size: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};

  ${mQuery("up-lg")(css`
    height: 48px;
    width: 48px;
    font-size: 2rem;
    margin-left: 0;
    position: absolute;
    top: 50%;
    right: ${gaps.wrapper};
    transform: translateY(-50%);
  `)}

  ${mQuery("up-xl")(css`
    height: 53px;
    width: 53px;
    font-size: 2.2rem;
  `)}
`

const BottomLine = ({ hideScroll, hideContactData }) => (
  <BottomLineContainer>
    <Wrap hasRightGap={true}>
      {!hideScroll && (
        <Scroll>
          <Icon name="scroll" />
          <span>
            <FormattedMessage id="see-more" />
          </span>
        </Scroll>
      )}
      {!hideContactData && (
        <SiteContext.Consumer>
          {({ contactData }) => (
            <Contact
              contactData={contactData}
              hiddenOnMobile={true}
              reversed={true}
            />
          )}
        </SiteContext.Consumer>
      )}
      <Moon>
        <Icon name="moon" />
      </Moon>
    </Wrap>
  </BottomLineContainer>
)

BottomLine.propTypes = {
  hideScroll: PropTypes.bool,
  hideContactData: PropTypes.bool,
}

BottomLine.defaultProps = {
  hideScroll: false,
  hideContactData: false,
}

export default injectIntl(BottomLine)
