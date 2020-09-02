import React from "react"
import PropTypes from "prop-types"

import LoadingScreen from "_components/LoadingScreen"
import GlobalStyle from "_styles/globalStyles"

import "swiper/components/navigation/navigation.scss"
import "swiper/swiper.scss"
import "_styles/normalize.css"

const Default = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <LoadingScreen />
      {children}
    </>
  )
}

Default.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Default
