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
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
