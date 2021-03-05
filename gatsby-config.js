require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: "Saad Baig.",
    titleTemplate: "Saad Baig.",
    description: "Saad Baig.",
    url: "https://saadbaigg.github.io/portfolio",
    twitterUsername: "@saadbaigg",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "UA-126452483-2", // Google Analytics / GA
          "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
      },
    }
  ],
  pathPrefix: "/portfolio",
}
