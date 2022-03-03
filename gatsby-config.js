module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: "My First Gatsby Site! This data is provided by GraphQL.",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: { name: `blog`, path: `${__dirname}/blog` },
    },
    "gatsby-plugin-mdx",

  ],
};
