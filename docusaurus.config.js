// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '全球第一博客 — 缠中说禅',
  tagline: 'Dinosaurs are cool',
  url: 'https://chzhshch.blog',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gavfu', // Usually your GitHub org/user name.
  projectName: 'chzhshch-blog', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/gavfu/chzhshch-blog/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: '缠中说禅Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'stocks/001',
            position: 'left',
            label: '教你炒股票',
          },
          {
            type: 'doc',
            docId: 'economics/20060225',
            position: 'left',
            label: '时政经济（缠中说禅经济学）',
          },
          {
            type: 'doc',
            docId: 'confucius/20060204',
            position: 'left',
            label: '文史哲学（《论语》详解）',
          },
          {
            type: 'doc',
            docId: 'zen/intro',
            position: 'left',
            label: '缠中说禅',
          },
          {
            type: 'doc',
            docId: 'poems/linjiangxian',
            position: 'left',
            label: '诗词曲赋',
          },
          {
            type: 'doc',
            docId: 'fluid/01',
            position: 'left',
            label: '那一夜，他的体液喷了我一身',
          },
          {
            type: 'doc',
            docId: 'identity/photos',
            position: 'right',
            label: '缠师其人',
          },
          {
            type: 'doc',
            docId: 'download',
            position: 'right',
            label: '下载',
          },
          {
            type: 'doc',
            docId: 'others/yinfujing',
            position: 'right',
            label: '其他',
          },
          {
            type: 'doc',
            docId: 'donate',
            position: 'right',
            label: '捐赠',
          },
          // {
          //   href: 'https://github.com/gavfu/chzhshch-blog',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
