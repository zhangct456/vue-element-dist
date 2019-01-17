webpackJsonp([6],{OIk8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("h2",[t._v("vue项目创建")]),t._v(" "),r("h4",[t._v("全局安装 vue-cli VUE的脚手架工具")]),t._v(" "),t._m(0),t._v(" "),r("p",[t._v("使用淘宝镜像，之后用cnpm代替npm")]),t._v(" "),t._m(1),t._v(" "),r("hr"),t._v(" "),r("h4",[t._v("创建项目")]),t._v(" "),r("h6",[t._v("进入文件夹")]),t._v(" "),t._m(2),t._v(" "),r("h6",[t._v("初始化项目")]),t._v(" "),t._m(3),t._v(" "),r("p",[t._v("依次选择")]),t._v(" "),t._m(4),t._v(" "),r("h6",[t._v("测试结果")]),t._v(" "),t._m(5),t._v(" "),r("p",[t._v("默认浏览器会自动打开网站 http://localhost:8080/#/ ，或者手动打开，显示如下界面说明成功")]),t._v(" "),r("center",[r("img",{attrs:{src:n("Znn0"),width:"40%"}})]),t._v(" "),r("hr"),t._v(" "),r("h4",[t._v("热更新")]),t._v(" "),r("p",[t._v("创建的项目默认热更新，电脑性能比较差，所以关闭热更新。")]),t._v(" "),r("p",[t._v("修改参数：")]),t._v(" "),t._m(6),t._v(" "),r("p",[t._v("注释代码：")]),t._v(" "),t._m(7),t._v(" "),r("p",[t._v("修改启动命令：")]),t._v(" "),t._m(8),t._v(" "),r("hr"),t._v(" "),r("h4",[t._v("文件目录结构")]),t._v(" "),r("p",[t._v("修改src文件夹中的目录，结果：")]),t._v(" "),t._m(9)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0},[e("code",{attrs:{"v-pre":""}},[this._v("npm install -g vue-cli\nvue -V 测试\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0},[e("code",{attrs:{"v-pre":""}},[this._v("npm install -g cnpm --registry=https://registry.npm.taobao.org\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0},[e("code",{attrs:{"v-pre":""}},[this._v("cd ...\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0},[e("code",{attrs:{"v-pre":""}},[this._v("vue init webpack VueLearn(文件夹名称)\n")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ol",[n("li",[t._v("项目名称\t\tvuelearn")]),t._v(" "),n("li",[t._v("项目名称\t\tvuelearn")]),t._v(" "),n("li",[t._v("作者\t\tzhangct456@163.com")]),t._v(" "),n("li",[t._v("是否安装编译器\tY")]),t._v(" "),n("li",[t._v("是否需要安装vue-router(路由)\tY")]),t._v(" "),n("li",[t._v("是否需要使用ESLint来检查你的代码\tY or N")]),t._v(" "),n("li",[t._v("需要使用哪种风格来检查你的代码\t\tStandard")]),t._v(" "),n("li",[t._v("是否需要安装测试功能\tn")]),t._v(" "),n("li",[t._v("是否需要安装测试功能\tn")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0},[e("code",{attrs:{"v-pre":""}},[this._v("cd vuelearn\ncnpm install\ncnpm run dev\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0},[e("code",{attrs:{"v-pre":""}},[this._v("//webpack.dev.conf.js\n\n...\ndevServer: {\n\t...\n\thot: false,\n\tinline: false\n\t...\n}\n...\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0},[e("code",{attrs:{"v-pre":""}},[this._v("//webpack.dev.conf.js\n\n//webpack.HotModuleReplacementPlugin()\n//webpack.NamedModulesPlugin()\n//webpack.NoEmitOnErrorsPlugin()\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0},[e("code",{attrs:{"v-pre":""}},[this._v('//package.json\n\n"scripts": {\n\t...\n   "dev": "webpack-dev-server --progress --config build/webpack.dev.conf.js",\n\t...\n},\n')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0},[e("code",{attrs:{"v-pre":""}},[this._v("\tbuild : webpack项目构建的相关配置代码\n\tconfig : 配置目录，包括端口、环境等的配置\n\tsrc : 开发的主要目录\n\t    -- asset : 放置项目中用到的静态资源\n\t\t\t-- css\n\t\t\t-- images\n\t\t\t-- js\n\t    -- components :主要放置一些常用的组件文件\n\t\t-- pages : 放置页面\n\t\t-- router : 路由配置文件\n\t\t-- setting : 公共的组件配置\n\t\t-- store : vuex相关js文件\n\t\t-- utils : 一些工具类的js方法\n\t    -- App.vue:项目的入口文件(顶层父组件)\n\t    -- main.js:项目的核心文件(vue的实例初始化)\n\tstatic : 静态资源文件夹\n\t\t-- data : 模拟请求返回数据json文件夹\n\tREADME.md : 说明文档\n\tpackage.json : npm的配置文件\n")])])}]},v=n("C7Lr")(null,r,!1,null,null,null);e.default=v.exports},Znn0:function(t,e,n){t.exports=n.p+"static/img/vue-page.96c1786.jpg"},gV7S:function(t,e,n){t.exports=n("OIk8")}});
//# sourceMappingURL=6.4630dbe6032caac9d52d.js.map