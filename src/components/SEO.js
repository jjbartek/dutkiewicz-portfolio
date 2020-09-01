import React from "react"
import { HelmetDatoCms } from "gatsby-source-datocms"
import PropTypes from "prop-types"

const SEO = ({ meta }) => {
  return <HelmetDatoCms seo={meta} />
}

SEO.propTypes = {
  meta: PropTypes.object.isRequired,
}

export default SEO
