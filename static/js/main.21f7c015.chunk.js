/*! For license information please see main.21f7c015.chunk.js.LICENSE.txt */
(this["webpackJsonplunch-wpa"]=this["webpackJsonplunch-wpa"]||[]).push([[0],{13:function(e){e.exports=JSON.parse('{"baseURL":"https://lunchapi.hsuan.app/api/","project":"https://tnfsacec.github.io/","gmailSuffix":"gm.tnfsh.tn.edu.tw","docRoot":"https://tnfsa.github.io/document/","googleCloudPlatformId":"1081268402297-stef8id8lhkhjd7lvh1de82eubmcn3re"}')},59:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),o=n(23),a=n.n(o),i=(n(59),n(60),n(34)),s=n(11),l=n(5),j=n(6),u=n(8),d=n(7),h=n(51),b=n(13),p=n(1),O=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e={url:b.docRoot+"status.json"};return Object(p.jsx)(h.Offline,{polling:e,children:Object(p.jsx)("p",{style:{textAlign:"center"},className:"p-3 mb-2 bg-danger text-white",children:"\u96e2\u7dda\u4e2d\uff0c\u8acb\u6aa2\u5bdf\u60a8\u7684\u9023\u7dda\u72c0\u6cc1"})})}}]),n}(r.a.Component),m=n(28),f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(m.a,{children:[Object(p.jsxs)(m.a.Item,{children:[Object(p.jsx)("img",{className:"d-block w-100",src:"https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg",alt:"First slide"}),Object(p.jsxs)(m.a.Caption,{children:[Object(p.jsx)("h3",{children:"First slide label"}),Object(p.jsx)("p",{children:"\u5c0d\u4e0d\u8d77\u6211\u76dc\u5716"})]})]}),Object(p.jsxs)(m.a.Item,{children:[Object(p.jsx)("img",{className:"d-block w-100",src:"https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg",alt:"Second slide"}),Object(p.jsxs)(m.a.Caption,{children:[Object(p.jsx)("h3",{children:"Second slide label"}),Object(p.jsx)("p",{children:"\u5c0d\u4e0d\u8d77\u6211\u76dc\u5716"})]})]}),Object(p.jsxs)(m.a.Item,{children:[Object(p.jsx)("img",{className:"d-block w-100",src:"https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg",alt:"Third slide"}),Object(p.jsxs)(m.a.Caption,{children:[Object(p.jsx)("h3",{children:"Third slide label"}),Object(p.jsx)("p",{children:"\u5c0d\u4e0d\u8d77\u6211\u76dc\u5716"})]})]})]})}}]),n}(r.a.Component),x=n(75),v=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){return Object(p.jsx)(r.a.Fragment,{children:Object(p.jsx)(x.a,{children:Object(p.jsx)(f,{})})})}}]),n}(r.a.Component),g=n(53),y=n.n(g),w=n(17),k=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=b.googleCloudPlatformId+".apps.googleusercontent.com",t=function(e){console.log(e);var t={token:e.tokenId},n=b.baseURL+"google";fetch(n,{method:"POST",body:JSON.stringify(t),headers:new Headers({"Content-Type":"application/json",Accept:"application/json","user-agent":"tnfsa-lunch-front-react"})}).then((function(e){if(e.status<300&&e.status>=200){var t=JSON.stringify(e);window.alert(t);var n=new w.a;n.set("session",t.access_token,{path:"/"}),n.set("isGoogle","true",{path:"/"}),n.set("userName",e.gt.rU,{path:"/"}),n.set("alert","\u767b\u5165\u6210\u529f",{path:"/"}),window.location.replace("/")}else window.alert(e.status+": \n\u8207\u4f3a\u670d\u5668\u9023\u7dda\u932f\u8aa4\uff0c\u8acb\u518d\u8a66\u4e00\u6b21\n\u5982\u679c\u554f\u984c\u7121\u6cd5\u89e3\u6c7a\uff0c\u8acb\u806f\u7d61\u7ba1\u7406\u54e1"),window.location.replace("#/login")}))};return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(y.a,{clientId:e,buttonText:"\u4f7f\u7528 Google \u767b\u5165",onSuccess:t,onFailure:t,hostedDomain:b.gmailSuffix,cookiePolicy:"single_host_origin",uxMode:"redirect",redirectUri:b.project})})}}]),n}(r.a.Component),C=n(76),I=n(77),N=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(p.jsx)(r.a.Fragment,{children:Object(p.jsx)(x.a,{children:Object(p.jsxs)("form",{className:"signInBlock",children:[Object(p.jsx)("h3",{style:{textAlign:"center"},children:"\u767b\u5165"}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"\u96fb\u5b50\u90f5\u4ef6"}),Object(p.jsx)("input",{id:"userInputEmail",type:"email",className:"form-control",placeholder:"Enter email"})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"\u5bc6\u78bc"}),Object(p.jsx)("input",{id:"userInputPasswd",type:"password",className:"form-control",placeholder:"Enter password"})]}),Object(p.jsxs)(C.a,{children:[Object(p.jsx)(I.a,{}),Object(p.jsx)(I.a,{}),Object(p.jsx)(I.a,{children:Object(p.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",onClick:function(){var e=document.getElementById("userInputEmail"),t=document.getElementById("userInputPasswd");if(-1!==e.value.search(/^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/)){var n={email:e.value,password:t.value},c=b.baseURL+"login";fetch(c,{method:"POST",body:JSON.stringify(n),headers:new Headers({"Content-Type":"application/json",Accept:"application/json","user-agent":"tnfsa-lunch-front-react"})}).catch((function(e){console.log("Error:",e),window.alert("1.\u4f3a\u670d\u5668\u806f\u7d61\u5931\u6557")})).then((function(e){if(e.status<300&&e.status>=200){var t=JSON.stringify(e);window.alert(t)}else window.alert(e.status+": \n\u767b\u5165\u5931\u6557\uff0c\u8acb\u518d\u8a66\u4e00\u6b21\n\u5982\u679c\u554f\u984c\u7121\u6cd5\u89e3\u6c7a\uff0c\u8acb\u806f\u7d61\u7ba1\u7406\u54e1"),document.location.replace("#/login")}))}},children:"Submit"})})]}),Object(p.jsx)("hr",{}),Object(p.jsx)("label",{children:"\u5176\u4ed6\u767b\u5165\u65b9\u5f0f\uff1f"}),Object(p.jsx)("div",{className:"otherLoginMethod",children:Object(p.jsx)(k,{})})]})})})}}]),n}(r.a.Component),E=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){return Object(p.jsx)(r.a.Fragment,{children:Object(p.jsx)(N,{})})}}]),n}(r.a.Component),T=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){return Object(p.jsx)(r.a.Fragment,{children:Object(p.jsx)("h1",{style:{textAlign:"center"},children:"\u8a02\u9910"})})}}]),n}(r.a.Component),A=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){return Object(p.jsx)(r.a.Fragment,{children:Object(p.jsx)("h1",{style:{textAlign:"center"},children:"\u5403\u4ec0\u9ebc"})})}}]),n}(r.a.Component),S=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){return Object(p.jsx)(r.a.Fragment,{children:Object(p.jsx)("h1",{style:{textAlign:"center"},children:"\u8a2d\u5b9a"})})}}]),n}(r.a.Component),F=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){for(var e=1;e<=10;++e){var t=document.createElement("DIV");t.textContent="Hello",document.getElementById("Chunk").appendChild(t)}}},{key:"render",value:function(){return Object(p.jsx)("div",{id:"Chunk"})}}]),n}(r.a.Component),M=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){return Object(p.jsxs)(r.a.Fragment,{children:[Object(p.jsx)("h1",{style:{textAlign:"center"},children:"\u9910\u5ef3"}),Object(p.jsx)(x.a,{children:Object(p.jsx)(F,{})})]})}}]),n}(r.a.Component),B=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){return Object(p.jsx)(r.a.Fragment,{children:Object(p.jsx)("h1",{style:{textAlign:"center"},children:"\u6b77\u53f2\u7d00\u9304"})})}}]),n}(r.a.Component),D=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){return Object(p.jsx)(r.a.Fragment,{children:Object(p.jsx)("h1",{style:{textAlign:"center"},children:"\u5546\u5bb6\u8a2d\u5b9a"})})}}]),n}(r.a.Component),L=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){return Object(p.jsx)(r.a.Fragment,{children:Object(p.jsx)("h1",{style:{textAlign:"center"},children:"\u83dc\u55ae\u8a2d\u5b9a"})})}}]),n}(r.a.Component),P=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){return Object(p.jsx)(r.a.Fragment,{children:Object(p.jsx)("h1",{style:{textAlign:"center"},children:"\u9032\u968e\u8a2d\u5b9a"})})}}]),n}(r.a.Component),R=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(p.jsx)(r.a.Fragment,{children:Object(p.jsx)("div",{className:"p-3 mb-2 bg-dark text-white",children:Object(p.jsx)(x.a,{children:Object(p.jsxs)(C.a,{children:[Object(p.jsxs)(I.a,{children:[Object(p.jsx)(i.b,{to:"/privacy",children:"\u96b1\u79c1\u6b0a\u8072\u660e"}),"\u3001",Object(p.jsx)(i.b,{to:"/COC",children:"\u4f7f\u7528\u8005\u4f7f\u7528\u689d\u6b3e"})]}),Object(p.jsxs)(I.a,{children:["\u95dc\u65bc\u6211\u5011\uff1a",Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://sivir.pw",rel:"noreferrer noopener",target:"_blank",children:"Alias722"}),"\u3001",Object(p.jsx)("a",{href:"https://hsuan.app/",rel:"noreferrer noopener",target:"_blank",children:"Hsuan1117"}),"\u3001",Object(p.jsx)("a",{href:"https://neodoggy.github.io/",rel:"noreferrer noopener",target:"_blank",children:"Neodoggy"})]})]})})})})}}]),n}(r.a.Component),H=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo({top:0,behavior:"smooth"});var e=new RegExp("\n","g"),t=b.docRoot+"title.json";fetch(t).then((function(e){return e.json()})).then((function(e){document.getElementById("title").innerHTML=e.title}));var n=b.docRoot+"coc.json";fetch(n).then((function(e){return e.json()})).then((function(t){for(var n=0;n<t.title.length;++n){var c=document.createElement("H2");c.textContent=t.title[n],document.getElementById("COC").appendChild(c),document.getElementById("COC").innerHTML+="<p>"+t.context[n].replace(e,"<br>")+"</p>"}}))}},{key:"render",value:function(){return Object(p.jsxs)(r.a.Fragment,{children:[Object(p.jsx)("h1",{style:{textAlign:"center"},children:"\u4f7f\u7528\u8005\u4f7f\u7528\u689d\u6b3e"}),Object(p.jsxs)(x.a,{children:[Object(p.jsx)("br",{}),Object(p.jsx)("p",{id:"title"}),Object(p.jsx)("div",{id:"COC"})]})]})}}]),n}(r.a.Component),J=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo({top:0,behavior:"smooth"});var e=new RegExp("\n","g"),t=b.docRoot+"title.json";fetch(t).then((function(e){return e.json()})).then((function(e){document.getElementById("title").innerHTML=e.title}));var n=b.docRoot+"privacy.json";fetch(n).then((function(e){return e.json()})).then((function(t){for(var n=0;n<t.title.length;++n){var c=document.createElement("H2");c.textContent=t.title[n],document.getElementById("policy").appendChild(c),document.getElementById("policy").innerHTML+="<p>"+t.context[n].replace(e,"<br>")+"</p>"}}))}},{key:"render",value:function(){return Object(p.jsxs)(r.a.Fragment,{children:[Object(p.jsx)("h1",{style:{textAlign:"center"},children:"\u96b1\u79c1\u6b0a\u8072\u660e"}),Object(p.jsxs)(x.a,{children:[Object(p.jsx)("br",{}),Object(p.jsx)("p",{id:"title"}),Object(p.jsx)("div",{id:"policy"})]})]})}}]),n}(r.a.Component),U=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(p.jsx)(r.a.Fragment,{children:Object(p.jsx)(x.a,{children:Object(p.jsxs)("form",{className:"signInBlock",children:[Object(p.jsx)("h3",{style:{textAlign:"center"},children:"\u5e33\u865f\u8a3b\u518a"}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"\u555f\u52d5\u78bc"}),Object(p.jsx)("input",{id:"activateToken",type:"text",className:"form-control",placeholder:"Enter the activate code",required:!0})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"\u96fb\u5b50\u90f5\u4ef6"}),Object(p.jsx)("input",{id:"userInputEmail",type:"email",className:"form-control",placeholder:"Enter email",required:!0})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"\u5bc6\u78bc"}),Object(p.jsx)("input",{id:"userInputPasswd",type:"password",className:"form-control",placeholder:"Enter password",required:!0})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"\u5bc6\u78bc\u78ba\u8a8d"}),Object(p.jsx)("input",{id:"userInputPasswdVerification",type:"password",className:"form-control",placeholder:"Enter password",required:!0})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"\u4f7f\u7528\u8005\u540d\u7a31"}),Object(p.jsx)("input",{id:"username",type:"text",className:"form-control",placeholder:"Enter the username",required:!0})]}),Object(p.jsxs)(C.a,{children:[Object(p.jsx)(I.a,{}),Object(p.jsx)(I.a,{}),Object(p.jsx)(I.a,{children:Object(p.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",onClick:function(){var e=document.getElementById("userInputPasswd"),t=document.getElementById("userInputPasswdVerification"),n=document.getElementById("userInputEmail"),c=document.getElementById("activateToken"),r=document.getElementById("username");if(e.value&&t.value&&n.value&&c.value&&r.value){if(e.value!==t.value)return window.alert("\u5bc6\u78bc\u8207\u5bc6\u78bc\u9a57\u8b49\u4e0d\u7b26"),e.value="",void(t.value="");if(-1!==n.value.search(/^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/)){var o={email:n.value,name:r.value,password:e.value,token:c.value},a=b.baseURL+"register";fetch(a,{method:"POST",body:JSON.stringify(o),headers:new Headers({"Content-Type":"application/json",Accept:"application/json","user-agent":"tnfsa-lunch-front-react"})}).catch((function(e){console.log("Error:",e),window.alert("\u8207\u4f3a\u670d\u5668\u806f\u7d61\u5931\u6557")})).then((function(e){e.status<300&&e.status>=200?window.alert(JSON.stringify(e)):(window.alert(e.status+": \n\u8a3b\u518a\u5931\u6557\uff0c\u8acb\u518d\u8a66\u4e00\u6b21\n\u5982\u679c\u554f\u984c\u7121\u6cd5\u89e3\u6c7a\uff0c\u8acb\u806f\u7d61\u7ba1\u7406\u54e1"),document.location.replace("#/login"))}))}}},children:"Submit"})})]})]})})})}}]),n}(r.a.Component),W=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(p.jsx)(r.a.Fragment,{children:Object(p.jsx)(U,{})})}}]),n}(r.a.Component),_=n(79),z=n(80),Z=n(78),q=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var c;Object(l.a)(this,n),c=t.call(this,e);var r=(new w.a).getAll(),o=[];return r.isGoogle?o.push(!0):o.push(!1),r.isSells?o.push(!0):o.push(!1),r.sessionId?o.push(!0):o.push(!1),c.state={isGoogle:o[0],isSells:o[1],isLoggedIn:o[2],username:r.userName||"Anonymous"},c}return Object(j.a)(n,[{key:"render",value:function(){var e="\u55e8! "+this.state.username;return Object(p.jsx)(r.a.Fragment,{children:Object(p.jsxs)(_.a,{bg:"light",expand:"lg",children:[Object(p.jsx)(_.a.Brand,{href:"/",children:"\u7f8e\u5ee3\u8a02\u9910\u7cfb\u7d71"}),Object(p.jsx)(_.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsxs)(_.a.Collapse,{id:"basic-navbar-nav",children:[Object(p.jsxs)(z.a,{className:"mr-auto",children:[Object(p.jsx)(z.a.Link,{href:"#/restaurant",children:"\u9910\u5ef3"}),this.state.isSells&&Object(p.jsxs)(Z.a,{title:"\u5e97\u5bb6\u7ba1\u7406",id:"basic-nav-dropdown",children:[Object(p.jsx)(Z.a.Item,{href:"#/config/store",children:"\u5546\u5bb6\u8a2d\u5b9a"}),Object(p.jsx)(Z.a.Item,{href:"#/config/menu",children:"\u83dc\u55ae\u8a2d\u5b9a"})]}),Object(p.jsxs)(Z.a,{title:"\u76f8\u95dc\u9023\u7d50",id:"basic-nav-dropdown",children:[Object(p.jsx)(Z.a.Item,{href:"https://sites.google.com/view/tnfshsu/",rel:"noreferrer noopener",target:"_blank",children:"\u5b78\u806f\u6703"}),Object(p.jsx)(Z.a.Item,{href:"https://tnfsacec.github.io",rel:"noreferrer noopener",target:"_blank",children:"\u9078\u59d4\u6703"})]})]}),this.state.isLoggedIn?Object(p.jsxs)(Z.a,{title:e,id:"basic-nav-dropdown",children:[Object(p.jsx)(Z.a.Item,{href:"#/history",children:"\u6b77\u53f2\u7d00\u9304"}),Object(p.jsx)(Z.a.Item,{href:"#/settings",children:"\u8a2d\u5b9a"}),Object(p.jsx)(Z.a.Item,{onClick:function(){var e=new w.a;e.remove("isGoogle"),e.remove("isSells"),e.remove("sessionId"),e.remove("userName"),e.remove("userPhoto"),e.set("alert","\u767b\u51fa\u6210\u529f",{path:"/"}),window.location.replace("/")},children:"\u767b\u51fa"})]}):Object(p.jsxs)(z.a,{children:[Object(p.jsx)(z.a.Link,{href:"#/signup",children:"\u8a3b\u518a"}),Object(p.jsx)(z.a.Link,{href:"#/login",children:"\u767b\u5165"})]})]})]})})}}]),n}(r.a.Component),G=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var c;Object(l.a)(this,n),c=t.call(this,e);var r=[],o=(new w.a).getAll();return o.alert?r.push(!0):r.push(!1),c.state={alert:r[0],alertSentence:o.alert},c}return Object(j.a)(n,[{key:"componentDidMount",value:function(){(new w.a).remove("alert")}},{key:"render",value:function(){return Object(p.jsx)(r.a.Fragment,{children:this.state.alert&&Object(p.jsx)("p",{className:"p-3 mb-2 bg-success text-white",children:this.state.alertSentence})})}}]),n}(r.a.Component);var V=function(){return Object(p.jsxs)(i.a,{children:[Object(p.jsx)(O,{}),Object(p.jsx)(q,{}),Object(p.jsx)(G,{}),Object(p.jsxs)(s.c,{children:[Object(p.jsx)(s.a,{path:"/login",component:E}),Object(p.jsx)(s.a,{path:"/restaurant",component:M}),Object(p.jsx)(s.a,{path:"/settings",component:S}),Object(p.jsx)(s.a,{path:"/purchase",component:T}),Object(p.jsx)(s.a,{path:"/order",component:A}),Object(p.jsx)(s.a,{path:"/history",component:B}),Object(p.jsx)(s.a,{path:"/config/store",component:D}),Object(p.jsx)(s.a,{path:"/config/menu",component:L}),Object(p.jsx)(s.a,{path:"/config/advanced/:id",component:P}),Object(p.jsx)(s.a,{path:"/privacy",component:J}),Object(p.jsx)(s.a,{path:"/COC",component:H}),Object(p.jsx)(s.a,{path:"/signup",component:W}),Object(p.jsx)(s.a,{path:"/",component:v})]}),Object(p.jsx)(R,{})]})},$=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))};a.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(V,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");$?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):K(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):K(t,e)}))}}(),Q()}},[[70,1,2]]]);
//# sourceMappingURL=main.21f7c015.chunk.js.map