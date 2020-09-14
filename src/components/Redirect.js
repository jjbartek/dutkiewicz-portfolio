import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "_components/SEO"

const Redirect = data => {
  const {
    homePage: { meta },
  } = useStaticQuery(graphql`
    query {
      homePage: datoCmsHomepage(locale: { eq: "pl" }) {
        meta: seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
      }
    }
  `)
  return <SEO meta={meta} />
}

export default Redirect
