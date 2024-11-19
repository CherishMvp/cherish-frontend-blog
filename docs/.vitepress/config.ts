import { defineConfig } from 'vitepress'
import { getSidebar, getNav } from '../../doc-deal/getNavAndSidebar'

export default defineConfig({
  lang: 'zh-CN',
  base: '/cherish-frontend-blog/',
  title: 'zwt的前端学习笔记',
  description: 'zwt的前端学习笔记',
  head: [['link', { rel: 'icon', href: '/cherish-frontend-blog/favicon.ico' }]],
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    // https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
    theme: {
      light: 'min-dark',
      dark: 'one-dark-pro',
    },
  },
  themeConfig: {
    logo: {
      light: '/logo-light.svg',
      dark: '/logo-dark.svg',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2022.4-${new Date().getFullYear()}.${new Date().getMonth() + 1}`,
    },
    lastUpdatedText: '更新日期',
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    darkModeSwitchLabel: '主题',
    outlineTitle: '索引',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '回到顶部',
    editLink: {
      pattern: 'https://github.com/cherishmvp/cherish-frontend-blog/edit/main/docs/:path',
      text: '在GitHub编辑此页',
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/cherishmvp/cherish-frontend-blog',
      },
    ],
    // 搜索配置

    search: {
      provider: 'local',
        options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      } 
            // algolia: {
    //   appId: 'M6EYNJ9AFT',
    //   apiKey: '1672da66c356b2a2dab6510e0ed17778',
    //   indexName: 'cherish-frontend-blog',
    // },
    },
    nav: getNav(),
    sidebar: getSidebar(),
  },
})
