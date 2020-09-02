import React, { useState } from "react"
import { useScrollYPosition } from "react-use-scroll-position"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import { scrollToTarget } from "_utils/helpers"
import PropTypes from "prop-types"

import logo from "_images/logo.svg"
import Icon from "_components/Icon"
import {
  StyledHeader,
  Logo,
  Bar,
  BarWrapper,
  Hamburger,
  MobileContainer,
  Wrap,
  Menu,
  DesktopMenu,
  MenuItem,
  MenuLink,
  SideRow,
} from "./HeaderStyles"

import Button from "_components/Button"

const LanguageSwicher = () => {
  return (
    <IntlContextConsumer>
      {({ messages, languages, language: currentLocale }) =>
        languages
          .filter(language => language !== currentLocale)
          .map(language => (
            <Button
              key={language}
              onClick={() => {
                changeLocale(language)
                console.log(language)
              }}
              size="large"
            >
              {messages[language]}
            </Button>
          ))
      }
    </IntlContextConsumer>
  )
}

const MenuItems = ({ links, onMenuItemClick }) => {
  return (
    <>
      {links.map(({ title, sectionId }) => (
        <MenuItem key={title}>
          <MenuLink
            onClick={e => {
              if (typeof onMenuItemClick === "function") onMenuItemClick()
              scrollToTarget(e, `#${sectionId}`)
            }}
            to={`/#${sectionId}`}
          >
            {title}
          </MenuLink>
        </MenuItem>
      ))}
    </>
  )
}

const HeaderSideRow = ({ button }) => {
  return (
    <SideRow>
      <LanguageSwicher />
      {button.map(({ title, url }) => (
        <Button key={title} link={url} size="large" color="blue">
          {title}
        </Button>
      ))}
    </SideRow>
  )
}

const Header = ({ headerData }) => {
  const { links, button } = headerData

  const [hidden, setHidden] = useState(true)
  const scrollY = useScrollYPosition(),
    scrolled = scrollY !== 0

  return (
    <StyledHeader>
      <Bar triggered={scrolled}>
        <BarWrapper>
          <Logo to="/#home" onClick={e => scrollToTarget(e, `#home`)}>
            <img src={logo} alt="logo" />
          </Logo>
          <DesktopMenu>
            <MenuItems links={links} />
          </DesktopMenu>
          <HeaderSideRow button={button} />
          <Hamburger onClick={() => setHidden(!hidden)}>
            <Icon name="hamburger" />
          </Hamburger>
        </BarWrapper>
      </Bar>
      <MobileContainer active={!hidden}>
        <Wrap>
          <Menu>
            <MenuItems links={links} onMenuItemClick={() => setHidden(true)} />
          </Menu>
          <HeaderSideRow button={button} />
        </Wrap>
      </MobileContainer>
    </StyledHeader>
  )
}

Header.propTypes = {
  headerData: PropTypes.object.isRequired,
}

export default Header
