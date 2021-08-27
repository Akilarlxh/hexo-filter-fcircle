# hexo-filter-fcircle

给`hexo`博客添加 [友链朋友圈](https://akilar.top/posts/8480b91c/)

# 安装

1. 安装插件，在博客根目录`[Blogroot]`下打开终端，运行以下指令（与旧版前端方案不兼容，如有安装旧版请先卸载）：
    ```bash
    npm uninstall hexo-butterfly-fcircle --save
    npm install hexo-filter-fcircle --save
    ```

2. 添加配置信息
  在站点配置文件`_config.yml`或者主题配置文件例如`_config.butterfly.yml`中添加
  ```yaml
    # fcircle
    # see https://akilar.top/posts/8480b91c/
    fcircle:
      enable: true #控制开关
      apiurl: https://hexo-friendcircle-api.vercel.app/api #api地址
      initnumber: 20, #【可选】页面初始化展示文章数量
      stepnumber: 10 #【可选】每次加载增加的篇数
      css: #【可选】开发者接口，自定义css链接
      js: #【可选】开发者接口，自定义js链接
      path: #【可选】fcircle的路径名称。默认为 fcircle，生成的页面为 fcircle/index.html
      front_matter: #【可选】fcircle页面的 front_matter 配置
        title: 朋友圈
        comments: false
  ```
3. 参数释义

  |参数|备选值/类型|释义|
  |:--|:--|:--|
  |enable|true/false|控制开关|
  |apiurl|URL|api链接，配置教程参看[基于 hexo 的友链朋友圈](https://zfe.space/friendcircle/)|
  |initnumber|number|【可选】填写阿拉伯数字，页面展示文章数量，默认20|
  |stepnumber|number|【可选】填写阿拉伯数字，每次加载增加的篇数，默认10|
  |css| URL|【可选】开发者接口，自定义css链接|
  |js| URL|【可选】开发者接口，自定义js链接|
  |path| string|【可选】字符串，fcircle的路径名称。默认为 fcircle，生成的页面为 fcircle/index.html|
  |front_matter|object|【可选】写法见上文示例，fcircle页面的 front_matter 配置|

# 截图
1. 默认样式-Author：[Akilar](https://akilar.top/fcircle/)
  - 所用主题：无
  - 样式CDN链接：
    ```yaml
    # css
    https://cdn.jsdelivr.net/npm/hexo-filter-fcircle/assets/css/default.min.css
    # js
    https://cdn.jsdelivr.net/npm/hexo-filter-fcircle/assets/js/fcircle.min.js
    ```
  - 预览效果截图：
    ![](https://cdn.jsdelivr.net/npm/hexo-filter-fcircle/assets/preview/default.png)

2. 默认样式-Author：[Akilar](https://akilar.top/fcircle/)
  - 所用主题：[hexo-theme-butterfly](https://butterfly.js.org)
  - 样式CDN链接：
    ```yaml
    # css
    https://cdn.jsdelivr.net/npm/hexo-filter-fcircle/assets/css/butterfly.min.css
    # js
    https://cdn.jsdelivr.net/npm/hexo-filter-fcircle/assets/js/fcircle.min.js
    ```
  - 预览效果截图：
    ![](https://cdn.jsdelivr.net/npm/hexo-filter-fcircle/assets/preview/butterfly.png)

# 欢迎投稿
  https://github.com/Akilarlxh/hexo-filter-fcircle/issues
