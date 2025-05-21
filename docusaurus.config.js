// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  future: {
    experimental_faster: true,
  },

  customFields: {
    titlePrefix: '主页', // 标题前缀
    start: "快速开始 🥵", // 开始按钮
  },
  
  title: '初梦大陆 Wiki',
  tagline: '在这里可以找到你在初梦大陆服务器中需要的帮助、问题或内容',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://edl-wiki.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'EarlyDreamLand', // Usually your GitHub org/user name.
  projectName: 'EarlyDreamLand_Wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
    localeConfigs: {
      'zh-Hans': {
        label: '简体中文',
        direction: 'ltr',
        htmlLang: 'zh-CN',
        calendar: 'gregory',
        path: 'zh-Hans',
      },
    },
  },

  clientModules: [
    require.resolve('./src/clientModules/githubIconModule.js'),
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/EarlyDreamLand/EarlyDreamLand_Wiki/tree/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/github.css'),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      metadata: [
        {name: 'keywords', content: 'Minecraft, 红石教程, MC, 初梦大陆, 服务器, 我的世界, WIKI'},
      ],
      navbar: {
        title: '初梦大陆 Wiki',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        hideOnScroll: true,
        items: [
          {
            to: '/docs/intro',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '通用',
          },
          {
            to: 'docs/category/实用教程',
            position: 'left',
            label: '实用教程',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/EarlyDreamLand/EarlyDreamLand_Wiki',
            className: "header-github-link",
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '服务器规则',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '交流',
            items: [
              {
                label: 'QQ群',
                href: 'https://qm.qq.com/q/UCl1KJ3Aku',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/EarlyDreamLand/EarlyDreamLand_Wiki',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <b>诺仙网络</b>, All Rights Reserved.`,
      },
      prism: {
        theme: prismThemes.github,
      },
      // 搜索
      algolia: {
        appId: 'KO57183DTL',
        apiKey: 'ce9a6eccb01e031e69cf5be55d3dec87',
        indexName: 'edl-wiki',
        insights: true,
      },
    }),
};

export default config;
