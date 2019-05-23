/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */

  plugins: [
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
          component: require.resolve(`./src/layouts/mainlayout.js`)
      }
    }
  ]
}
