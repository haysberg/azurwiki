/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: "Azur Wiki",
  tagline: "Un wiki en Français",
  favicon: "img/sunglasis.webp",

  // Set the production url of your site here
  url: "https://haysberg.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/azurwiki",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "haysberg", // Usually your GitHub org/user name.
  projectName: "azurwiki", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  plugins: [
    [
      require.resolve("docusaurus-lunr-search"),
      {
        languages: ["fr"],
        indexBaseUrl: true,
        disableVersioning: true,
      },
    ],
  ],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/haysberg/azurwiki/tree/main/docs",
        },
        blog: false,
        pages: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "Azur Wiki",
      logo: {
        alt: "Azur Wiki",
        src: "img/pepehack.gif",
      },
      items: [
        {
          href: "https://github.com/haysberg/azurwiki",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://github.com/users/haysberg/projects/1/views/1?filterQuery=-status%3A%22Fini+%21%22",
          label: "Roadmap",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Polytech CyberSec - ${new Date().getFullYear()}.`,
    },
  },
};
