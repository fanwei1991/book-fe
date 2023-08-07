const nav = require('./nav')

module.exports = {
  title: '没口别问',
  description: '钓鱼佬',
  markdown: {
    lineNumbers: true
  },
  base:'book-fe',
  plugins: {
    '@vuepress/back-to-top': {},
    'vuepress-plugin-auto-sidebar': {
      sidebarDepth: 0,
    }
  },
  theme: 'reco',
  themeConfig: {
    nav: nav,
  }
}