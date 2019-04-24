module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '码农CodeHub社交平台',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{escape description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /** 插件安装,ssr: false,这个瀑布流演示分页是用在浏览器端的,不是服务器端,所以false
   *  nuxt‐quill‐plugin富文本编辑器
   */
  plugins: [
    { src: '~plugins/vue-infinite-scroll', ssr: false },
    { src: '~plugins/element-ui', ssr: false },
    { src: '~plugins/nuxt-quill-plugin', ssr: false }
  ],
  // 还需要把elementUI的样式加进来,quill富文本编辑器样式
  css:[
    'element-ui/lib/theme-chalk/index.css',
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css',
    'quill/dist/quill.core.css'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
