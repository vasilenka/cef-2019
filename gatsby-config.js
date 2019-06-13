module.exports = {
  pathPrefix: `/solo`,
  siteMetadata: {
    title: `Civic Engagement Forum 4.0`,
    description: `Civic Engagement 4.0: Dignity ~ Justice ~ Sustainability is a regional platform for mutual learning, action and advocacy, working toward achieving dignity, justice and sustainability in Southeast Asian (SEA) society, where the wave of Fourth Industrial Revolution is affecting each of us living in the region, we become increasingly aware of the need for multi-stakeholder collaboration which can effectively respond to it. The platform is expected to facilitate exchanges of knowledge for further collaboration in implementing actions and advocacy to achieve dignity, justice and sustainability among active members of communities working on the ground at the national, regional and international levels.`,
    author: `kotakita.org - meridian.id - ongki 'vasilenka' herlambang <ongki@herlambang.id>`,
    siteUrl: `https://civicengagementforum.net/solo/`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Civic Engagement Forum 4.0`,
        short_name: `CEF 4.0`,
        start_url: `/`,
        background_color: `#E8C23D`,
        theme_color: `#E8C23D`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://civicengagementforum.net',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-plugin-sitemap`,
    // `gatsby-plugin-remove-trailing-slashes`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`400`, `600`, `700`]
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-gtag`,
    //   options: {
    //     trackingId: `UA-72826108-3`,
    //     head: true,
    //     anonymize: true,
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-72826108-3",
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional create only fields (optional)
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        // cookieDomain: "example.com",
      },
    },
  ],
}
