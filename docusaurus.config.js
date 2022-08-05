// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tech Talk John Blog',
  tagline: 'Talking Tech',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'JohnTelford.com LLC', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),

        
        },
        blog: {
          /* other blog options */
          blogTitle: 'John Telford Blog',
          blogDescription: 'Tech Talk John Blog',
          routeBasePath: '/', // Serve the blog at the site's root
          showReadingTime: true,
          blogSidebarTitle: 'Posts',
          blogSidebarCount: 'ALL',
          blogListComponent: '@theme/BlogListPage',
          blogPostComponent: '@theme/BlogPostPage',
          blogTagsListComponent: '@theme/BlogTagsListPage',
          blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
          tagsBasePath: '/blog/tags',
          archiveBasePath: '/archive',
          feedOptions: {
            type: 'rss',
            copyright: `Copyright © ${new Date().getFullYear()} JohnTelford.com LLC.`,
          }
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
        hideOnScroll: true,
        title: 'techtalkjohn.com blog',
        items: [
          {to: '/blog/tags', label: 'Topics', position: 'left'},
          {href: 'https://johntelford.com', label: 'johntelford.com', position: 'left'},

        ],
      },
      footer: {
        style: 'dark',

        copyright: `Copyright © ${new Date().getFullYear()} by John M. Telford.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

    plugins: [
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          // ... Your options.
        indexDocs: true,
        indexPages: true,
        highlightSearchTermsOnTargetPage: true,
          // `hashed` is recommended as long-term-cache of index file is possible.
         hashed: true,
          // For Docs using Chinese, The `language` is recommended to set to:
          // ```
          // language: ["en", "zh"],
          // ```
        },
      ],
    ],
    
};

module.exports = config;
