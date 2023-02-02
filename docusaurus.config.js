// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// const remarkAdsense = require('./src/plugins/remark-adsense');

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
          breadcrumbs: false,
          // remarkPlugins: [remarkAdsense],
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

  /**
   * Reference:
   * https://github.com/facebook/docusaurus/issues/4765
   * https://johnnyreilly.com/2022/09/29/faster-docusaurus-build-swc-loader
   */
  // webpack: {
  //   jsLoader: (isServer) => ({
  //     loader: require.resolve('swc-loader'),
  //     options: {
  //       jsc: {
  //         parser: {
  //           syntax: 'typescript',
  //           tsx: true,
  //         },
  //         target: 'es2017',
  //       },
  //       module: {
  //         type: isServer ? 'commonjs' : 'es6',
  //       },
  //     },
  //   }),
  // },

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
            type: 'docSidebar',
            sidebarId: 'stocksExtendedSidebar',
            position: 'left',
            label: '教你炒股票相关',
          },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'byCategorySidebar',
          //   position: 'left',
          //   label: '博文分类',
          // },
          {
            type: 'dropdown',
            label: '博文分类',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'stocksExtendedSidebar',
                label: '教你炒股票相关',
              },
              {
                type: 'docSidebar',
                sidebarId: 'confuciusSidebar',
                label: '文史哲学（《论语》详解）',
              },
              {
                type: 'docSidebar',
                sidebarId: 'zenSidebar',
                label: '缠中说禅',
              },
              {
                type: 'docSidebar',
                sidebarId: 'poemsSidebar',
                label: '诗词曲赋',
              },
              {
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
            type: 'doc',
            docId: 'timeline',
            position: 'left',
            label: '全部博文 (时间线)',
          },
          {
            type: 'dropdown',
            label: '缠博以外作品',
            position: 'right',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'fundAnalysisSidebar',
                label: '《基金分析》木子观点',
              },
              {
                type: 'docSidebar',
                sidebarId: 'qiangguoSidebar',
                label: '缠于强国兴华凯迪等论坛作品',
              },
              {
                type: 'docSidebar',
                sidebarId: 'tangfenSidebar',
                label: '缠用[唐粉]ID发表的作品',
              },
              {
                type: 'docSidebar',
                sidebarId: 'tianyaSidebar',
                label: '缠的天涯作品',
              },
              {
                type: 'docSidebar',
                sidebarId: 'y2002postsSidebar',
                label: '缠于2002年的诗与文',
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
          // {
          //   href: 'https://t.me/chzhshchblog',
          //   label: '反馈',
          //   position: 'right',
          //   // className: 'header-telegram-link',
          //   // 'aria-label': 'Telegram'
          // },
          {
            href: 'https://github.com/gavfu/chzhshch-blog-site',
            // label: 'GitHub',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub Repository'
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      // tableOfContents: {
      //   minHeadingLevel: 2,
      //   maxHeadingLevel: 5,
      // },
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
      // footer: {
      //   // copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
      //   links: [
      //     {
      //       html: `
      //         <div>
      //           <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5686832782200002" crossorigin="anonymous"></script>
      //           <!-- 我的展示广告-横向 -->
      //           <ins class="adsbygoogle"
      //             style="display:block"
      //             data-ad-client="ca-pub-5686832782200002"
      //             data-ad-slot="1204145775"
      //             data-ad-format="auto"
      //             data-full-width-responsive="true">
      //             </ins>
      //           <script>
      //             (adsbygoogle = window.adsbygoogle || []).push({});
      //           </script>
      //         </div>
      //         `,
      //     },
      //   ],
      // }
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
          // ignoreFiles: [/^stocks\/*/, /^economics\/*/, /^essays\/*/, /^math\/*/, /^music\/*/, /^entertainment\/*/, /^confucius\/*/, /^zen\/*/, /^poems\/*/, /^fluid\/*/],
          searchBarPosition: 'right',
        },
      ],
    ],

  // plugins: ['docusaurus-plugin-google-adsense'],
  plugins: [
    // [
    //   'docusaurus2-plugin-google-adsense',
    //   {
    //     dataAdClient: 'ca-pub-5686832782200002'
    //   },
    // ],
  ],

  // scripts: [
  //   {
  //     src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5686832782200002",
  //     crossorigin: "anonymous",
  //     async: true
  //   }
  // ]
};

module.exports = config;
