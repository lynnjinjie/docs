module.exports = [
  // 导航栏配置
  {
    text: '首页',
    link: '/',
  },
  {
    text: '前端相关',
    link: '/frontend/',
    items: [
      { text: 'JavaScript', link: '/pages/a69b73/' },
      { text: 'Vue', link: '/pages/5a22b5/' },
    ],
  },
  { text: '后端相关', link: '/backend/' },
  {
    text: '技术',
    link: '/technology/',
    items: [
      { text: '技术文档', link: '/pages/545d59/' },
      { text: '服务器搭建', link: '/pages/5fe574/' },
    ],
  },
  {
    text: '其他',
    link: '/other/',
    items: [
      { text: '收藏', link: '/pages/69d92f/' },
      {
        text: 'Think',
        link: '/pages/caeaa7/',
      },
    ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
