(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bf6ea46"],{1511:function(e,t,n){"use strict";n.r(t);var r=n("7a23");Object(r["Q"])("data-v-d00fbe36");var c={id:"scene-container"},a={class:"fluid-content"},s={class:"user-center"},u={class:"userinfo-wrap"},b={class:"tabs-wrap"},o={class:"pane-content"},i={class:"pane-content"},d={class:"pane-content"};function l(e,t,n,l,j,O){var v=Object(r["W"])("Masthead"),f=Object(r["W"])("UserInfo"),p=Object(r["W"])("UserPosts"),m=Object(r["W"])("el-tab-pane"),I=Object(r["W"])("MoviesFavorite"),h=Object(r["W"])("MoviesHistory"),y=Object(r["W"])("el-tabs"),w=Object(r["W"])("Footer");return Object(r["N"])(),Object(r["m"])(r["b"],null,[Object(r["r"])(v),Object(r["n"])("div",c,[Object(r["n"])("div",a,[Object(r["n"])("div",s,[Object(r["n"])("div",u,[Object(r["r"])(f,{"user-id":l.userId},null,8,["user-id"])]),Object(r["n"])("div",b,[Object(r["r"])(y,{modelValue:l.activeName,"onUpdate:modelValue":t[0]||(t[0]=function(e){return l.activeName=e}),class:"ant-tabs"},{default:Object(r["lb"])((function(){return[Object(r["r"])(m,{label:"发布",name:"posts"},{default:Object(r["lb"])((function(){return[Object(r["n"])("div",o,[Object(r["r"])(p,{userId:l.userId},null,8,["userId"])])]})),_:1}),Object(r["r"])(m,{label:"收藏",name:"favorite"},{default:Object(r["lb"])((function(){return[Object(r["n"])("div",i,[Object(r["r"])(I,{userId:l.userId},null,8,["userId"])])]})),_:1}),O.self?(Object(r["N"])(),Object(r["k"])(m,{key:0,label:"记录",name:"history"},{default:Object(r["lb"])((function(){return[Object(r["n"])("div",d,[Object(r["r"])(h,{userId:l.userId},null,8,["userId"])])]})),_:1})):Object(r["l"])("",!0)]})),_:1},8,["modelValue"])])])])]),Object(r["r"])(w)],64)}Object(r["O"])();n("a9e3"),n("ac1f"),n("5319");var j=n("6c02"),O=n("6d5e"),v=n("28b6"),f=n("77e9"),p=n("31f0"),m={posts:"posts",favorite:"favorite",history:"history"},I={components:{UserInfo:O["a"],UserPosts:v["a"],MoviesFavorite:f["a"],MoviesHistory:p["a"]},props:["params","query"],setup:function(e){var t,n,c=Object(r["db"])(e),a=c.params,s=c.query,u=Object(r["S"])(Number(null===(t=a.value)||void 0===t?void 0:t.id)),b=Object(r["S"])(m[String(null===(n=s.value)||void 0===n?void 0:n.tab)]||m.favorite),o=Object(j["d"])();return Object(r["jb"])(s,(function(e,t){b.value=m[String(null===e||void 0===e?void 0:e.tab)]||m.favorite})),Object(r["jb"])(b,(function(e,t){o.replace({query:{tab:b.value}})})),{userId:u,activeName:b}},computed:{me:function(){return this.$store.state.user.user},self:function(){var e;return this.userId===(null===(e=this.me)||void 0===e?void 0:e.id)}}};n("951b");I.render=l,I.__scopeId="data-v-d00fbe36";t["default"]=I},"951b":function(e,t,n){"use strict";n("de59")},de59:function(e,t,n){}}]);
//# sourceMappingURL=chunk-2bf6ea46.e0293f85.js.map