const nav = require('./config/nav')
module.exports = {
  title: '个人文档',
  description: '构建自己的个人知识库',
  theme: 'vdoing',
  head: [
    [
      'script',
      { src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js' },
    ],
    [
      'script',
      {
        src:
          'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js',
      },
    ],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
    [
      'script',
      { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' },
    ],
    [
      'script',
      { src: 'https://cdn.jsdelivr.net/npm/numerify/lib/index.umd.min.js' },
    ],
    // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/images/icons/page_80x80.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    ['link', { rel: 'apple-touch-icon', href: '/images/icons/page_80x80.png' }],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/images/icons/page_80x80.png',
        color: '#11a8cd',
      },
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/images/icons/page_80x80.png',
      },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  // base: '/',
  markdown: {
    lineNumbers: false, // 代码块显示行号
  },
  themeConfig: {
    // algolia: {
    //   apiKey: '8e8c2611a9abd03fea86ab567410c7a3',
    //   indexName: 'docsSearch',
    // },
    displayAllHeaders: true,
    nav,
    sidebarDepth: 2, // 侧边栏显示2/
    sidebar: 'structuring',
    // logo: '/images/kuai.jpeg',
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)
    repo: 'lynnjinjie/docs', // github仓库地址
    docsDir: 'docs', // 编辑的文件夹
    editLinks: true, // 启用编辑
    editLinkText: '编辑',
    // 以下配置是Vdoing主题改动的和新增的配置
    // category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
    // tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
    // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。
    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'
    // bodyBgImg: ['./images/banner.jpg'],
    // bodyBgImg: [
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg',
    // ], // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],
    author: {
      // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
      name: 'Lynn Jiang', // 必需
      link: 'https://github.com/lynnjiang', // 可选的
    },
    // blogger: {
    //   // 博主信息，显示在首页侧边栏
    //   avatar: '/images/kuai.jpeg',
    //   name: 'Lynn Jiang',
    //   slogan: '前端界的小学生',
    // },
    social: {
      // 社交图标，显示于博主信息栏和页脚栏
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:jinjie_me@163.com',
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/lynnjiang',
        },
        // {
        //   iconClass: 'icon-erji',
        //   title: '听音乐',
        //   link: 'https://music.163.com/#/playlist?id=755597173',
        // },
      ],
    },
    footer: {
      // 页脚信息
      createYear: 2020, // 博客创建年份
      copyrightInfo:
        'Lynn Jiang | <a href="http://beian.miit.gov.cn/" target="_blank">苏ICP备19047804号</a>', // 博客版权信息，支持a标签
    },
  },
  // 插件
  plugins: [
    [
      require('./plugins/love-me'),
      {
        // 鼠标点击爱心特效
        // color: '#11a8cd', // 爱心颜色，默认随机色
        excludeClassName: 'theme-vdoing-content', // 要排除元素的class, 默认空''
      },
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true, // 是否缓存页面
        updatePopup: true, // 是否允许用户刷新页面
      },
    ],
    [
      'one-click-copy',
      {
        copySelector: [
          'div[class*="language-"] pre',
          'div[class*="aside-code"] aside',
        ], // String or Array
        copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
        duration: 2000, // prompt message display time.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],
    [
      'demo-block',
      {
        // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
        settings: {
          // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
          // cssLib: ['http://xxx'], // 在线示例中的css依赖
          // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
          jsfiddle: false, // 是否显示 jsfiddle 链接
          codepen: true, // 是否显示 codepen 链接
          horizontal: false, // 是否展示为横向样式
        },
      },
    ],
    [
      'thirdparty-search',
      {
        thirdparty: [
          // 可选，默认 []
          {
            title: '在MDN中搜索', // 在搜索结果显示的文字
            frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
            behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
          },
          {
            title: '在github中搜索',
            frontUrl: 'https://github.com/search?q=',
          },
        ],
      },
    ],
  ],
}
