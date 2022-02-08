(()=>{"use strict";var e,n,t,r,o,i,a,c,d,s,l,u,p,m,f={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,'* {\n  margin: 0;\n  padding: 0;\n  font-family: "Cinzel", serif;\n}\n\nheader {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\nfooter {\n  bottom: 0%;\n  color: rgb(185, 145, 71);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 4.5rem;\n}\n\na {\n  color: white;\n}\n\nbutton {\n  background-color: white;\n  color: rgb(197, 72, 72);\n  border: none;\n  padding: 1em;\n}\n\nbutton:hover,\na:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n.active {\n  text-decoration: underline;\n}\n\n.top {\n  background-color: white;\n}\n\n.logo {\n  color: rgb(197, 72, 72);\n  font-weight: 700;\n}\n\n.middle-img {\n  background-image: url("https://images.unsplash.com/photo-1615361200098-9e630ec29b4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3164&q=80");\n}\n\n.middle-space {\n  background-color: rgb(197, 72, 72);\n  background-size: cover;\n  background-position: 35%;\n  min-height: 30em;\n}\n\n.bottom {\n  gap: 2em;\n  background-color: rgb(185, 145, 71);\n  min-height: 6em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n',""]);const c=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=i[s]||0,u="".concat(s," ").concat(l);i[s]=l+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var d=r(e,o),s=0;s<i.length;s++){var l=t(i[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},h={};function v(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,exports:{}};return f[e](t,t.exports,v),t.exports}v.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return v.d(n,{a:n}),n},v.d=(e,n)=>{for(var t in n)v.o(n,t)&&!v.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},v.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),e=v(379),n=v.n(e),t=v(795),r=v.n(t),o=v(569),i=v.n(o),a=v(565),c=v.n(a),d=v(216),s=v.n(d),l=v(589),u=v.n(l),p=v(426),(m={}).styleTagTransform=u(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=s(),n()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals,function(){const e=document.querySelector("#content"),n=document.createElement("header"),t=document.createElement("footer"),r=document.createElement("div"),o=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div"),c=document.createElement("a"),d=document.createElement("button"),s=document.createElement("button"),l=document.createElement("button"),u=document.createElement("a");u.innerText="Reserve A Mat",r.classList.add("top"),o.classList.add("middle-img"),o.classList.add("middle-space"),i.classList.add("bottom"),c.innerHTML="<h1>Yogushi</h1>",c.classList.add("logo"),c.classList.add("active"),d.innerText="Yoga",s.innerText="Sushi",l.innerText="Locations",c.addEventListener("click",(function(){o.classList.add("middle-img")})),d.addEventListener("click",(function(){o.classList.remove("middle-img")})),s.addEventListener("click",(function(){o.classList.remove("middle-img")})),l.addEventListener("click",(function(){o.classList.remove("middle-img")})),t.innerHTML="&#169 2022 Yogushi Group",a.appendChild(d),a.appendChild(s),a.appendChild(l),n.appendChild(c),n.appendChild(a),i.appendChild(u),r.appendChild(n),e.appendChild(r),e.appendChild(o),e.appendChild(i),e.appendChild(t)}()})();