module.exports = {
  title: '华深的博客',
  description: '专注前端开发，分享技术心得',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
    //增加manifest.json
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],

  themeConfig:{
    sidebar: 'auto',
    nav: [
      { text: "主页", link: "/" },
      { text: "JavaScript", link: "/javascript/" },
      { text: "CSS", link: "/css/" },
      { text: "HTML", link: "/html/" },
      { text: "面试问题", link: "/interview/" }
    ]
  },

  plugins:[
    '@vuepress/pwa', 
    {
      serviceWorker: true,
      updatePopup: true
    },
    [
      'vuepress-plugin-comment',
      {
        choosen: 'valine', 
        // options选项中的所有参数，会传给Valine的配置
        options: {
          el: '#valine-vuepress-comment',
          appId: 'Gnm0Svrw8dNXSobbLWNvRMlJ-gzGzoHsz',
          appKey: 'wQhs4qVqDfzKI79KCAK4AogN'
        }
      }
    ],
    ["@vuepress/back-to-top"], // 返回顶部
    ["@vuepress/nprogress"],   // 加载进度条
  ]
}