module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: `blog`,
    //     path: `${__dirname}/blog`,
    //   }
    // },
    "gatsby-plugin-mdx",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-netlify"
    // {
    //   resolve: "gatsby-plugin-netlify-cms",
    //   options: {
    //     modulePath: `${__dirname}/src/cms/cms.js`,
    //   },
    // },
  ],
};