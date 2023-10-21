// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'Azur Wiki',
  tagline: 'Un wiki en Français',
  favicon: 'img/sunglasis.webp',

  // Set the production url of your site here
  url: 'https://haysberg.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/azurwiki',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'haysberg', // Usually your GitHub org/user name.
  projectName: 'azurwiki', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  plugins: [[ require.resolve('docusaurus-lunr-search'), {
    languages: ['fr'],
    indexBaseUrl: true,
    disableVersioning: true
  }]],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/haysberg/azurwiki/tree/main/docs',
        },
        blog: false,
        pages: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/hacking_banner.gif',
      navbar: {
        title: 'Azur Wiki',
        logo: {
          alt: 'Azur Wiki',
          src: 'img/pepehack.gif',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {
            href: 'https://discord.gg/asYdxuSEdf',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://github.com/haysberg/azurwiki',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://github.com/users/haysberg/projects/1/views/1?filterQuery=-status%3A%22Fini+%21%22',
            label: 'Roadmap',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/haysberg/azurwiki',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Polytech CyberSec - ${new Date().getFullYear()}.`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};
