require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Marcin Dutkiewicz`,
    description: `Portfolio Marcin Dutkiewicz`,
    author: `Bartłomiej Jońca`,
    siteUrl: `http://dutkiewiczdesign.pl`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [
              "100",
              "300",
              "400",
              "400i",
              "500",
              "600",
              "700",
              "800",
              "900",
            ],
            subsets: ["latin-ext"],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/fonts`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `marcin-dutkiewicz`,
        short_name: `Marcin`,
        start_url: `/`,
        background_color: `#0153F6`,
        theme_color: `#0153F6`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          _typography: `src/components/typography`,
          _sections: `src/components/sections`,
          _layouts: `src/components/layouts`,
          _components: `src/components`,
          _images: `src/images`,
          _styles: `src/styles`,
          _fonts: `src/fonts`,
          _utils: `src/utils`,
          _store: `src/store`,
          _types: `src/types`,
          _intl: `src/intl`,
        },
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_CMS,
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `pl`],
        defaultLanguage: `pl`,
        redirect: true,
        redirectComponent: require.resolve(`./src/components/Redirect.js`),
      },
    },
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: process.env.SENTRY_DSN,
        environment: process.env.NODE_ENV,
        enabled: (() => ["production"].indexOf(process.env.NODE_ENV) !== -1)(),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ID,
        head: false,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "http://dutkiewiczdesign.pl",
        sitemap: "http://dutkiewiczdesign.pl/sitemap.xml",
      },
    },
  ],
}
