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
      { text: "主页", link: "/" },
      { text: "JavaScript", link: "/javascript/" },
      { text: "CSS", link: "/css/" },
      { text: "HTML", link: "/html/" },
      { text: "前端框架", items: [ 
          { text: "Vue", link:"/frame/vue/"},
          { text: "React", link:"/frame/react/"},
        ]
      },
      { text: "面试问题", link: "/interview/" },
      {text: 'GitHub', link: 'https://github.com/peanut-dev'}
    ],
    sidebar:{
      // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
      '/javascript/': [
        '/javascript/', // accumulate文件夹的README.md 不是下拉框形式
        // '/javascript/article-01',
        // '/javascript/article-02',
        // '/javascript/article-03',
      ],
    },
    sidebarDepth: 2, // 侧边栏显示2级
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