webpackJsonp([7],{EH2N:function(e,t){},aRmM:function(e,t){},"apa+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={name:"Test",components:{ImgButton:n("cpc/").a},data:function(){return{img:""}},methods:{msgListView:function(e){this.pageNo=e,alert(this.pageNo),this.$remote.post("xxxxxx.do",params,function(e){})},changeImg:function(){console.log(this.img)},getImgFile:function(e){console.log(e.target.value)}},props:[],computed:{},watch:{},beforeCreated:function(){},created:function(){},mounted:function(){}},a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ImgButton",{attrs:{multiple:!0},on:{change:e.changeImg},model:{value:e.img,callback:function(t){e.img=t},expression:"img"}}),e._v(" "),n("img")],1)},staticRenderFns:[]};var r=n("C7Lr")(i,a,!1,function(e){n("aRmM")},null,null);t.default=r.exports},"cpc/":function(e,t,n){"use strict";var i=n("rVsN"),a=n.n(i),r={name:"ImgButton",data:function(){return{currentValue:"",currentValues:[]}},props:{value:{},multiple:{type:Boolean,default:!1}},computed:{},watch:{},methods:{triggerFile:function(e){$(e.target.parentElement.children[0]).trigger("click")},getImgFile:function(e){var t=this,n=new FileReader,i=new RegExp("(.jpg|.JPG|.png|.PNG)$");if(this.multiple)!function(){t.currentValues=[];for(var n=e.target.files,r=[],u=function(e){var u=new a.a(function(a,r){var u=new FileReader,o=n[e];o&&(i.test(o.name)||a(),o.size>5e6&&a(),u.readAsDataURL(o),u.onload=function(){var e=u.result;t.currentValues.push(e),a()})});r.push(u)},o=0;o<n.length;o++)u(o);a.a.all(r).then(function(){t.$emit("input",t.currentValues),t.$emit("change")})}();else{var r=e.target.files[0];if(r){if(!i.test(r.name))return void t.$alert({text:"文件格式不正确，请重新选择!(支持jpg/png)"});if(r.size>5242880)return void t.$alert({text:"文件大小最大为5M，请重新选择!"});n.readAsDataURL(r),n.onload=function(){t.currentValue=[n.result],t.$emit("input",t.currentValue),t.$emit("change")}}}}},beforeCreated:function(){},created:function(){},mounted:function(){},components:{}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.multiple?n("input",{staticClass:"img-file",attrs:{type:"file",multiple:"multiple"},on:{change:function(t){return e.getImgFile(t)}}}):n("input",{staticClass:"img-file",attrs:{type:"file"},on:{change:function(t){return e.getImgFile(t)}}}),e._v(" "),n("input",{staticClass:"file-btn",attrs:{type:"button",value:"选择图片"},on:{click:function(t){return e.triggerFile(t)}}})])},staticRenderFns:[]};var o=n("C7Lr")(r,u,!1,function(e){n("EH2N"),n("n2mW")},"data-v-73010387",null);t.a=o.exports},n2mW:function(e,t){}});
//# sourceMappingURL=7.6064b6e4cba6eaa069d3.js.map