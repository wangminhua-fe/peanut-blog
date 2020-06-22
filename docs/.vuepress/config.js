module.exports = {
  title: '华深的博客',
  description: '专注前端开发，分享技术心得',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
    //增加manifest.json
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],

  themeConfig:{
    nav: [
      {text: "主页", link: "/"      },
      { text: "JavaScript", link: "/javascript/"},
      { text: "CSS", link: "/css/"},
      { text: "HTML", link: "/html/"},
      { text: "面试问题", link: "/interview/" }
    ]
  },

  plugins:[
    '@vuepress/pwa', 
    {
      serviceWorker: true,
      updatePopup: true
    },
    ["@vuepress/back-to-top"], // 返回顶部
    ["@vuepress/nprogress"],   // 加载进度条
  ]
}