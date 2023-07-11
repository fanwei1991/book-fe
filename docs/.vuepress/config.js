module.exports = {
  title: '没口别问',
  description: '钓鱼佬',
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/back-to-top'],
  theme: 'reco',
  themeConfig: {
    nav: [{
        text: 'vue',
        link: '/vue/'
      },
      {
        text: 'js基础',
        link: '/js基础/'
      },
      {
        text: '计算机网络',
        link: '/计算机网络/'
      },
      {
        text: '数据结构及算法',
        link: '/数据结构及算法/'
      },
      {
        text: '常见问题汇总',
        link: '/常见问题汇总/'
      },
    ],
    sidebar: {
      '/vue': [{
        title: 'vue2',
        path: '/vue/',
        collapsable: false, // 不折叠
        children: [{
          title: "问题1",
          path: "/vue/问题1.md"
        }]
      }],
      '/js基础': [{
        title: 'js基础学习',
        path: '/js基础',
        collapsable: false, // 不折叠
        children: [{
          title: "事件循环机制",
          path: "/js基础/事件循环机制.md"
        }]
      }]
    }
  }
}