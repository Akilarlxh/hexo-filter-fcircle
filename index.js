'use strict'

const pug = require('pug')
const path = require('path')
const urlFor = require('hexo-util').url_for.bind(hexo)
const util = require('hexo-util')
hexo.extend.generator.register('fcircle', function (locals) {
  const config = hexo.config.fcircle || hexo.theme.config.fcircle

  if (!(config && config.enable)) return

  const data = {
    theme: config.theme,
    apiurl: urlFor(config.apiurl), //api地址
    initnumber: config.initnumber ? config.initnumber : 20, //页面展示文章数量
    stepnumber: config.stepnumber ? config.stepnumber : 10, //每次加载增加的篇数
    fcircleCss: config.css ? urlFor(config.css) : "https://cdn.jsdelivr.net/npm/hexo-filter-fcircle/assets/css/default.min.css",
    fcircleJs: config.js ? urlFor(config.js) : "https://cdn.jsdelivr.net/npm/hexo-filter-fcircle/assets/js/fcircle.min.js",
    fecthJs: config.fetchJs ? urlFor(config.fetchJs) : "https://cdn.jsdelivr.net/npm/hexo-filter-fcircle/assets/js/fetch.min.js"
  }
  //渲染页面
  const content = pug.renderFile(path.join(__dirname, './assets/html.pug'), data)
  //全局脚本资源
  const js_text = `<script>
    // 全局变量声明区域
    var fdata = {
      apiurl: '${data.apiurl}',
      initnumber: ${data.initnumber}, //【可选】页面初始化展示文章数量
      stepnumber: ${data.stepnumber} //【可选】每次加载增加的篇数
    }
    //存入本地存储
    localStorage.setItem("fdatalist",JSON.stringify(fdata))
    </script>
    <script defer src="${data.fetchJs}"></script>`;

  // 注入全局脚本资源
  hexo.extend.injector.register('body_end', js_text, "default");

  const pathPre = config.path || 'fcircle'

  let pageDate = {
    content: content
  }

  if (config.front_matter) {
    pageDate = Object.assign(pageDate, config.front_matter)
  }

  return {
    path: pathPre + '/index.html',
    data: pageDate,
    layout: ['page', 'post']
  }
})
