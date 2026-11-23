module.exports = {
  siteMetadata: {
    title: "Gelateria Caraibi",
    author: "Nicolò Gasparini",
    description: "Gelateria artigianale a Carpi dal 1987, con ingredienti genuini, semifreddi e torte personalizzate. Prenotazioni anche per aziende e solo ritiro in gelateria.",
    siteUrl: "https://www.gelateriacaraibicarpi.it",
    themeColor: "#d21a2e",
    keywords: "gelateria caraibi gasparini massimo gelato carpi nuova ponente coppa cono torta torte semifreddi semifreddo gelati limone pistacchio nocciola crema riso latte granite bibite dolci dolce"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gelateria Caraibi`,
        short_name: `GelateriaCaraibi`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#d21a2e`,
        display: `standalone`,
        icon: `src/assets/images/caraibi-icon.png`
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.gelateriacaraibicarpi.it',
        sitemap: 'https://www.gelateriacaraibicarpi.it/sitemap-index.xml',
        policy: [{userAgent: '*', allow: '/'}],
        output: '/robots.txt'
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
        excludes: [
          '/404/',
          '/404.html',
          '/offline-plugin-app-shell-fallback/',
          '/chatgpt-plugin/supporto/',
          '/chatgpt-plugin/privacy/',
          '/chatgpt-plugin/termini/',
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'it'
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5GRS7FT",
        includeInDevelopment: false,  // Include GTM in development
        defaultDataLayer: {},  // datalayer to be set before GTM is loaded

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        dataLayerName: "dataLayer",
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
