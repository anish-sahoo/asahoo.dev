/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Portfolio`,
    siteUrl: `https://asahoo.dev`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    // {
    //   resolve: `gatsby-plugin-plausible`,
    //   options: {
    //     domain: `asahoo.dev`,
    //     customDomain: `analytics.asahoo.dev`,
    //   },
    // },
  ],
};
