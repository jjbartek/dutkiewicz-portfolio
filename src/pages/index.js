import React from "react"
import { graphql } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "_components/layouts/Default"
import Header from "_components/header/Header"
import Sections from "_components/Sections"
import Section from "_components/Section"
import Footer from "_components/Footer"

import Testimonials from "_sections/Testimonials"
import Portfolio from "_sections/Portfolio"
import Offers from "_sections/Offers"
import Help from "_sections/Help"
import Home from "_sections/Home"

import SiteContext from "../store/SiteContext"
import SEO from "_components/SEO"

const IndexPage = ({ data }) => {
  const {
    homeData,
    offersData,
    portfolioData,
    testimonialsData,
    helpData,
    headerData,
    contactData,
    socialMedia,
    homePage: { meta },
  } = data

  return (
    <SiteContext.Provider value={{ socialMedia, contactData }}>
      <SEO meta={meta} />
      <Layout title="Home">
        <Header headerData={headerData}></Header>
        <Sections>
          <Section id="home" hasBottomLine={true} heightFixedOnMobile={true}>
            <Home homeData={homeData} />
          </Section>
          <Section id="offers">
            <Offers offersData={offersData} />
          </Section>
          <Section id="portfolio">
            <Portfolio portfolioData={portfolioData} />
          </Section>
          <Section id="testimonials" isTiny={true} hasLeftGap={true}>
            <Testimonials testimonialsData={testimonialsData} />
          </Section>
          <Section id="help" hasFooter={true}>
            <Help helpData={helpData} />
          </Section>
        </Sections>
        <Footer />
      </Layout>
    </SiteContext.Provider>
  )
}

export const IndexData = graphql`
  query($locale: String!) {
    homeData: datoCmsHome(locale: { eq: $locale }) {
      heading
      description
      image {
        fluid(maxWidth: 460, imgixParams: { auto: "compress" }) {
          ...GatsbyDatoCmsFluid_noBase64
        }
      }
    }
    offersData: datoCmsOffersSection(locale: { eq: $locale }) {
      caption
      heading
      description
      personalData {
        title
        value
      }
      offers {
        title
        iconName
        shortDescription
        fullDescription
      }
    }
    portfolioData: allDatoCmsProjectsContainer(
      filter: { locale: { eq: $locale } }
    ) {
      edges {
        node {
          buttonBackground {
            hex
          }
          title
          subTitle
          buttonLink
          buttonText
          description
          projects {
            image {
              fluid(maxWidth: 218, imgixParams: { auto: "compress" }) {
                ...GatsbyDatoCmsFluid_noBase64
              }
              alt
            }
            link
          }
        }
      }
    }
    testimonialsData: allDatoCmsTestimonial(
      filter: { locale: { eq: $locale } }
    ) {
      edges {
        node {
          author
          date
          content
        }
      }
    }
    helpData: allDatoCmsQa(filter: { locale: { eq: $locale } }) {
      edges {
        node {
          question
          category
          answer
        }
      }
    }
    headerData: datoCmsHeader(locale: { eq: $locale }) {
      links {
        title
        sectionId
      }
      button {
        title
        url
      }
    }
    contactData: datoCmsContact(locale: { eq: $locale }) {
      items: contactItems {
        title
        value
        link
      }
    }
    socialMedia: allDatoCmsSocialMedium(filter: { locale: { eq: $locale } }) {
      edges {
        node {
          icon
          url
          title
        }
      }
    }
    homePage: datoCmsHomepage(locale: { eq: $locale }) {
      meta: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`

export default injectIntl(IndexPage)
