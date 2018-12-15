webpackJsonp([10],{A94f:function(e,n,t){e.exports=t("ZP4R")},ZP4R:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("h2",[e._v("MarkDown文件")]),e._v(" "),t("blockquote",[t("p",[e._v("把markdown文件导入成为html。")])]),e._v(" "),t("h4",[e._v("安装")]),e._v(" "),t("p",[e._v("安装"),t("code",{pre:!0},[e._v("vue-markdown-loader")]),e._v("和代码高亮方法"),t("code",{pre:!0},[e._v("highlight.js")])]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("cnpm install vue-markdown-loader --save\ncnpm install highlight.js --save\n")])]),e._v(" "),t("hr"),e._v(" "),t("h4",[e._v("配置")]),e._v(" "),t("p",[e._v("在"),t("code",{pre:!0},[e._v("module.rules")]),e._v("中新增markdown文件的loader：")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("//webpack.base.conf.js\n\n{\n\ttest: /\\.md$/,\n\tloader: 'vue-markdown-loader',\n\toptions: {}\n}\n\n")])]),e._v(" "),t("p",[e._v("在"),t("code",{pre:!0},[e._v("resolve.extensions")]),e._v("中新增后缀名"),t("code",{pre:!0},[e._v(".md")]),e._v("，引用时可不写后缀名：")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("//webpack.base.conf.js\n\nresolve: {\n\textensions: ['.js', '.vue', '.json', '.md'],\n\talias: {\n\t\t'vue$': 'vue/dist/vue.esm.js',\n\t\t'@': resolve('src'),\n\t}\n}\n\n")])]),e._v(" "),t("hr"),e._v(" "),t("h4",[e._v("引用")]),e._v(" "),t("p",[e._v("与vue文件引用方式相同：")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("import example from 'example.md';\n")])]),e._v(" "),t("hr"),e._v(" "),t("h4",[e._v("修改样式")]),e._v(" "),t("h6",[e._v("基本样式")]),e._v(" "),t("p",[e._v("上网找或者自己设计一个markdown样式的css文件引入，用引用markdown文件的父级元素限制下样式作用域：")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('.markdown-body {\n  font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  font-size: 16px;\n  line-height: 1.6;\n  word-wrap: break-word;\n}\n.markdown-body:before {\n  display: table;\n  content: "";\n}\n.markdown-body:after {\n  display: table;\n  clear: both;\n  content: "";\n}\n.markdown-body > *:first-child {\n  margin-top: 0 !important;\n}\n.markdown-body > *:last-child {\n  margin-bottom: 0 !important;\n}\n.markdown-body a:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n\n.....\n')])]),e._v(" "),t("h6",[e._v("代码高亮")]),e._v(" "),t("p",[e._v("引用"),t("code",{pre:!0},[e._v("highlight.js")]),e._v("，使用其中的"),t("code",{pre:!0},[e._v("highlightBlock")]),e._v("方法改变代码块的html。")]),e._v(" "),t("p",[e._v("封装成方法"),t("code",{pre:!0},[e._v("highlightCode")]),e._v("：")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("import hljs from 'highlight.js'\n\nconst highlightCode = () => {\n    const preEl = document.querySelectorAll('pre')\n    preEl.forEach((el) => {\n        hljs.highlightBlock(el)\n  })\n}\n")])]),e._v(" "),t("p",[e._v("每次路由变化后，新加载的页面需要运行该方法来改变代码块的html，\n所以在父级路由中的钩子函数updated、mounted中调用该方法：")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("  mounted() {\n  \thighlightCode()\n  },\n  updated() {\n  \thighlightCode()\n  }\n")])]),e._v(" "),t("blockquote",[t("p",[e._v("进一步优化，可以在markdown文件中插入vue组件，需要创建自定义的markdown代码块，在loader中配置处理方法，\n可以参考大佬的博客"),t("a",{attrs:{href:"https://blog.csdn.net/m0_37972557/article/details/81089887"}},[e._v("https://blog.csdn.net/m0_37972557/article/details/81089887")]),e._v(",\n使用的是elementui教程网站的例子。")])])])}]},o=t("C7Lr")(null,r,!1,null,null,null);n.default=o.exports}});
//# sourceMappingURL=10.f8db8e85dbc892b643c9.js.map