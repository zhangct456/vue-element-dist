webpackJsonp([17],{SAAb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("h2",[e._v("文件上传")]),e._v(" "),r("h5",[e._v("js提交带文件的表单")]),e._v(" "),r("p",[e._v("创建FormData对象：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('let formData = new FormData();\n\nformData.append("file", this.file);\nformData.append("info", "测试上传文件功能");\n')])]),e._v(" "),r("p",[e._v("提交：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("this.$remote.post('upload', formData, config).then((res) => {\n\tconsole.log(res);\n})\n")])]),e._v(" "),r("hr"),e._v(" "),r("h5",[e._v("node接收文件")]),e._v(" "),r("p",[e._v("使用formidable模块实现（基本用法）：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("npm install formidable --save\n")])]),e._v(" "),r("blockquote",[r("p",[e._v("formidable参考文档 "),r("a",{attrs:{href:"https://www.npmjs.com/package/formidable"}},[e._v("https://www.npmjs.com/package/formidable")])])]),e._v(" "),r("p",[e._v("用"),r("code",{pre:!0},[e._v("Formidable.IncomingForm")]),e._v("创建传入表单：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("router.post('/upload', (req, res) => {\n\tvar form = new formidable.IncomingForm();\n    // 设置文件保存路径，相对路径\n    form.uploadDir = \"./uploads\";\n});\n")])]),e._v(" "),r("p",[e._v("处理提交的表单：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("form.parse(req, function(err, fields, files) {\n\t//do something\n});\n")])]),e._v(" "),r("p",[e._v("回调函数参数：")]),e._v(" "),r("ul",[r("li",[r("code",{pre:!0},[e._v("err")]),e._v(" ：报错信息；")]),e._v(" "),r("li",[r("code",{pre:!0},[e._v("fields")]),e._v(" ：提交表单中除文件外的其它信息，json格式；")]),e._v(" "),r("li",[r("code",{pre:!0},[e._v("files")]),e._v(" ：提交表单中的文件")])]),e._v(" "),r("p",[e._v("保存后的文件名为“[交易名]_[随机字符串]”，无文件后缀，可以在保存后用"),r("code",{pre:!0},[e._v("fs.rename()")]),e._v("方法修改，或者设置 "),r("code",{pre:!0},[e._v("form.keepExtensions = true")]),e._v("文件将保持原扩展名。")]),e._v(" "),r("p",[e._v("代码：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('const express = require(\'express\');\n\nconst router = express.Router();\n\nconst app = express();\n\nconst formidable = require(\'formidable\');\n\nconst fs = require(\'fs\');\n\nrouter.get(\'/\', (req, res) => {\n\t//测试连通性\n\tres.send("node server");\n})\n\nrouter.post(\'/upload\', (req, res) => {\n\tvar form = new formidable.IncomingForm();\n    // 设置文件保存路径，相对路径\n    form.uploadDir = "./uploads";\n    \n\tform.parse(req, function(err, fields, files) {\n\t\tif(err){\n\t\t\tres.send({\n\t\t\t\t"status" : "200",\n\t        \t"message" : "上传失败"\n\t\t\t});\n\t\t\treturn;\n\t\t}\n        var fileName = files.file.name;\t\t//上传文件名\n        var fileNameArr = fileName.split(\'.\');\n        if(fileNameArr.length != 1){\n        \t//files.file.path：文件保存后的路径，无后缀名\n        \t//补上文件后缀\n        \tvar newfile = files.file.path + \'.\' + fileNameArr[fileNameArr.length - 1];\n        \tfs.rename(files.file.path, newfile, function(err){\n\t        \tif(err){\n\t        \t\tres.send({\n\t        \t\t\t"status" : "200",\n\t        \t\t\t"message" : "上传失败"\n\t        \t\t});\n\t        \t}else{\n\t        \t\tres.send({\n\t\t\t\t\t\t"status" : "200",\n\t\t\t\t\t\t"message" : "上传成功"\n\t\t\t\t\t});\n\t        \t}\n\t        })\n        }else{\n        \tres.send({\n\t\t\t\t"status" : "200",\n\t\t\t\t"message" : "上传成功"\n\t\t\t});\n        }\n    });\n});\napp.use(router);\n\napp.listen(8099);\n\nconsole.log("http start at port 8099");\n')])])])}]},s=r("C7Lr")(null,n,!1,null,null,null);t.default=s.exports},g4tY:function(e,t,r){e.exports=r("SAAb")}});
//# sourceMappingURL=17.3de8030f529ef73ab47d.js.map