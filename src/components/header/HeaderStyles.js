//import React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby-plugin-intl"

import { mQuery, colors } from "_styles/theme"
import { Wrapper } from "_styles/sharedStyles"

export const StyledHeader = styled.header``

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 0;
  outline: 0;
  padding: 0;
  transition: 0.3s ease-in-out opacity;

  &:hover {
    opacity: 0.7;
  }

  ${mQuery("up-lg")(css`
    margin-right: 5.5rem;
  `)}
`

export const SideRow = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  margin-left: -5px;
  margin-right: -5px;

  & > * {
    box-sizing: border-box;
    margin: 0 5px;
  }

  ${mQuery("up-lg")(css`
    display: flex;
    margin-left: auto;
    margin-top: 0;
    margin-right: 0;
  `)}
`

export const Bar = styled.div`
  background: ${({ triggered }) => (triggered ? "#1D1D21" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${({ triggered }) => (triggered ? "82px" : "120px")};
  box-sizing: border-box;
  z-index: 999;
  transition: 0.3s ease-in-out height, 0.3s ease-in-out background;

  ${mQuery("up-lg")(css`
    justify-content: flex-start;
  `)}
`

export const BarWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const Hamburger = styled.button`
  color: ${colors.white};
  border: none;
  background: none;
  outline: none;
  padding: 6px;
  font-size: 2rem;
  text-shadow: none;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;

  ${mQuery("up-lg")(css`
    display: none;
  `)}
`

export const MobileContainer = styled.div`
  position: fixed;
  top: calc(-100% - 82px);
  left: 0;
  right: 0;
  height: calc(100% - 82px);
  background: ${colors.bodyBg};
  transition: 0.3s ease-in-out top;
  z-index: 998;

  ${({ active }) =>
    active &&
    css`
      top: 82px;
    `}

  ${SideRow} {
    display: flex;
  }
`

export const Wrap = styled(Wrapper)`
  padding: 20px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`

export const Nav = styled.nav`
  flex: 1 0 auto;
  display: flex;
  position: relative;
`

export const NavContainer = styled.nav`
  display: none;

  ${({ active }) =>
    active &&
    css`
      display: flex;
      flex-direction: column;
      width: 100%;
    `}
`

export const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto 0;
`

export const MenuItem = styled.li`
  margin-bottom: 20px;
`

export const MenuLink = styled(Link)`
  color: ${colors.grey};
  font-size: 2.3rem;
  font-weight: 600;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
  padding: 0;
  background: none;
  border: 0;
  outline: 0;
  transition: 0.3s ease-in-out color;

  &:hover {
    color: ${colors.white};
  }

  ${({ active }) => active && css``}
`

export const DesktopMenu = styled(Menu)`
  display: none;

  ${mQuery("up-lg")(css`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `)}

  ${MenuItem} {
    margin: 0 3.6rem;
  }

  ${MenuLink} {
    font-size: 1.4rem;
  }
`
