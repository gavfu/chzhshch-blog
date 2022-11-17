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

  // stylesheets: [
  //   {
  //     rel: "preconnect",
  //     href: "https://fonts.googleapis.com",
  //   },
  //   {
  //     rel: "preconnect",
  //     href: "https://fonts.gstatic.com",
  //     crossorigin: "anonymous",
  //   },
  //   {
  //     rel: "stylesheet",
  //     href: "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700;900&display=swap",
  //   },
  // ],

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
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: [],
          filename: 'sitemap.xml',
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
            // type: 'doc',
            // docId: 'stocks/001',
            type: 'docSidebar',
            sidebarId: 'stocksSidebar',
            position: 'left',
            label: '教你炒股票',
          },
          {
            // type: 'doc',
            // docId: 'confucius/20060204',
            type: 'docSidebar',
            sidebarId: 'confuciusSidebar',
            position: 'left',
            label: '文史哲学（《论语》详解）',
          },
          {
            // type: 'doc',
            // docId: 'zen/intro',
            type: 'docSidebar',
            sidebarId: 'zenSidebar',
            position: 'left',
            label: '缠中说禅',
          },
          {
            // type: 'doc',
            // docId: 'poems/linjiangxian',
            type: 'docSidebar',
            sidebarId: 'poemsSidebar',
            label: '诗词曲赋',
            position: 'left',
          },
          {
            type: 'dropdown',
            label: '其他分类',
            position: 'left',
            items: [
              {
                // type: 'doc',
                // docId: 'economics/20060225',
                type: 'docSidebar',
                sidebarId: 'economicsSidebar',
                label: '时政经济（缠中说禅经济学）',
              },
              {
                type: 'docSidebar',
                sidebarId: 'essaysSidebar',
                label: '白话杂文',
              },
              {
                type: 'docSidebar',
                sidebarId: 'mathSidebar',
                label: '数理科技（缠中说禅医学）',
              },
              {
                type: 'docSidebar',
                sidebarId: 'musicSidebar',
                label: '音乐艺术',
              },
              {
                type: 'docSidebar',
                sidebarId: 'entertainmentSidebar',
                label: '流行娱乐',
              },
              {
                // type: 'doc',
                // docId: 'fluid/01',
                type: 'docSidebar',
                sidebarId: 'fluidSidebar',
                label: '那一夜，他的体液喷了我一身',
              },
            ]
          },
          {
            // type: 'doc',
            // docId: 'identity/photos',
            type: 'docSidebar',
            sidebarId: 'identitySidebar',
            position: 'right',
            label: '缠师其人',
          },
          // {
          //   type: 'doc',
          //   docId: 'download',
          //   position: 'right',
          //   label: '下载',
          // },
          {
            // type: 'doc',
            // docId: 'others/yinfujing',
            type: 'docSidebar',
            sidebarId: 'othersSidebar',
            position: 'right',
            label: '其他',
          },
          {
            type: 'doc',
            docId: 'donate',
            position: 'right',
            label: '捐赠',
          },
          {
            href: 'https://github.com/gavfu/chzhshch-blog',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
        },
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
      metadata: [
        {name: 'description', content: '缠中说禅, 缠论, 全球第一博客'}
      ],
      // googleAdsense: {
      //   dataAdClient: 'ca-pub-5686832782200002',
      // },
    }),
  
    themes: [
      // ... Your other themes.
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          // ... Your options.
          // `hashed` is recommended as long-term-cache of index file is possible.
          hashed: true,
          // For Docs using Chinese, The `language` is recommended to set to:
          // ```
          language: ["en", "zh"],
          // ```
          docsRouteBasePath: '/',
          searchBarPosition: 'right',
        },
      ],
    ],

  // plugins: ['docusaurus-plugin-google-adsense'],
};

module.exports = config;
