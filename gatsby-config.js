require("dotenv").config({
  path: `.env`,
})

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "awy0uwqcdbbl",
        accessToken: "yQSk20sGzrgAb6lGp6tQLtzhOgAY9AWOvrAFG4bP5v4",
      },
    },
    `gatsby-transformer-remark`,
  ],
  pathPrefix: "/my_portfolio",
}
