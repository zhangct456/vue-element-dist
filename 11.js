webpackJsonp([11],{"33qc":function(e,n,t){e.exports=t("QfsW")},QfsW:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("h2",[e._v("ElementUI")]),e._v(" "),t("h4",[e._v("安装")]),e._v(" "),t("blockquote",[t("p",[e._v("参考"),t("a",{attrs:{href:"http://element-cn.eleme.io/#/zh-CN/component/installation"}},[e._v("官方文档")])])]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("cnpm i element-ui -S\n")])]),e._v(" "),t("hr"),e._v(" "),t("h4",[e._v("引入")]),e._v(" "),t("h6",[e._v("全部引入")]),e._v(" "),t("p",[e._v("在main.js中添加：")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("import ElementUI from 'element-ui';\nimport 'element-ui/lib/theme-chalk/index.css';\n\nVue.use(ElementUI)\n")])]),e._v(" "),t("h6",[e._v("部分引入")]),e._v(" "),t("p",[e._v("需要安装"),t("code",{pre:!0},[e._v("babel-plugin-component")]),e._v("：")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("cnpm install babel-plugin-component -D\n")])]),e._v(" "),t("p",[e._v("配置"),t("code",{pre:!0},[e._v(".babelrc")]),e._v("文件：")]),e._v(" "),t("p",[t("strong",[e._v("需要注意"),t("code",{pre:!0},[e._v("styleLibraryName")]),e._v("的值可能因版本原因不同，有些教程中是"),t("code",{pre:!0},[e._v("theme-default")]),e._v("，可以查看组件中的文件夹名")])]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('{\n  "presets": [\n    ["env", {\n      "modules": false,\n      "targets": {\n        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]\n      }\n    }],\n    "stage-2"\n  ],\n  "plugins": [\n  ["component", [\n    {\n      "libraryName": "element-ui",\n      "styleLibraryName": "theme-chalk"\n    }\n  ]],\n   "transform-vue-jsx", "transform-runtime"]\n}\n')])]),e._v(" "),t("p",[e._v("在"),t("code",{pre:!0},[e._v("setting/element-ui.js")]),e._v("中引入所需组件：")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("import Vue from 'vue'\nimport { Button,\n\tRow, Col,\n\tMenu, Submenu, MenuItem, MenuItemGroup,\n\tContainer, Header, Aside, Main, Footer\n} from 'element-ui'\n\nVue.use(Button)\n\nVue.use(Row)\nVue.use(Col)\n\nVue.use(Menu)\nVue.use(Submenu)\nVue.use(MenuItem)\nVue.use(MenuItemGroup)\n\nVue.use(Container)\nVue.use(Header)\nVue.use(Aside)\nVue.use(Main)\nVue.use(Footer)\n\n")])]),e._v(" "),t("p",[e._v("在main.js中引用：")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('import "./setting/element-ui"\n')])])])}]},u=t("C7Lr")(null,r,!1,null,null,null);n.default=u.exports}});
//# sourceMappingURL=11.js.map?aecde5446dc6d129aa94