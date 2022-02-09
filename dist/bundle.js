(()=>{"use strict";var e,n,t,r,o,a,i,c,d,s,l,u,p,m,h={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,'* {\n  margin: 0;\n  padding: 0;\n  font-family: "Cinzel", serif;\n}\n\nheader {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 2px;\n}\n\nfooter {\n  bottom: 0%;\n  color: rgb(185, 145, 71);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 4.5rem;\n}\n\na {\n  color: white;\n}\n\nbutton {\n  background-color: white;\n  color: rgb(197, 72, 72);\n  border: none;\n  padding: 1em;\n}\n\nbutton:hover,\na:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n\nheader a:hover {\n  text-decoration: none;\n}\n\ntable {\n  border-collapse: collapse;\n  letter-spacing: 1px;\n  font-size: 0.6rem;\n  table-layout: fixed;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\ntd,\nth {\n  border: 1px solid rgb(190, 190, 190);\n  padding: 10px 20px;\n  text-align: center;\n  width: 20%;\n}\n\n.active {\n  text-decoration: underline;\n}\n\n.top {\n  background-color: white;\n}\n\n.logo {\n  color: rgb(197, 72, 72);\n  font-weight: 700;\n}\n\n.middle-img {\n  background-image: url("https://images.unsplash.com/photo-1615361200098-9e630ec29b4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3164&q=80");\n}\n\n.middle-space {\n  background-size: cover;\n  background-position: 35%;\n  min-height: 30em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.bottom {\n  gap: 2em;\n  background-color: rgb(185, 145, 71);\n  min-height: 6em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.table-div {\n  width: 50%;\n}\n\n.yoga-table {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  white-space: pre-wrap;\n}\n\n.table-head {\n  border: 1px solid rgb(197, 72, 72);\n  background-color: rgb(197, 72, 72);\n  color: white;\n}\n\n.menu-item {\n  border-bottom: 1px solid black;\n  margin-bottom: 20px;\n}\n',""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var d=r(e,o),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},f={};function v(e){var n=f[e];if(void 0!==n)return n.exports;var t=f[e]={id:e,exports:{}};return h[e](t,t.exports,v),t.exports}v.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return v.d(n,{a:n}),n},v.d=(e,n)=>{for(var t in n)v.o(n,t)&&!v.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},v.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),e=v(379),n=v.n(e),t=v(795),r=v.n(t),o=v(569),a=v.n(o),i=v(565),c=v.n(i),d=v(216),s=v.n(d),l=v(589),u=v.n(l),p=v(426),(m={}).styleTagTransform=u(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=s(),n()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals,function(){const e=document.querySelector("#content"),n=document.createElement("header"),t=document.createElement("footer"),r=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),c=document.createElement("a"),d=document.createElement("button"),s=document.createElement("button"),l=document.createElement("a"),u=[d,s];function p(){document.querySelectorAll("button").forEach((e=>e.classList.remove("active")))}l.innerText="Reserve A Mat",r.classList.add("top"),o.classList.add("middle-img"),o.classList.add("middle-space"),a.classList.add("bottom"),c.innerHTML="<h1>Yogushi</h1>",c.classList.add("logo"),d.innerText="Yoga",s.innerText="Sushi",u.forEach((e=>e.addEventListener("click",(function(){p(),e.classList.add("active")})))),c.addEventListener("click",(function(){p(),o.innerHTML="",o.classList.add("middle-img")})),d.addEventListener("click",(function(){var e;o.classList.remove("middle-img"),o.classList.add("showYoga"),e=o,function(){e.innerHTML="";const n=document.createElement("div");n.classList.add("table-div");const t=document.createElement("table");n.appendChild(t),t.classList.add("yoga-table");const r=document.createElement("tr"),o=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];o.forEach((function(e){const n=document.createElement("th");n.classList.add("table-head"),n.innerText=e,r.appendChild(n)})),["7:00AM: Steam Yoga","9:00AM: Steam Yoga","11:00AM: Steam Yoga","1:00PM: Yoga In The Sun","3:00PM: Yoga In The Sun","5:00PM: Dark Yoga","7:00PM: Dark Yoga"].forEach((function(e){const n=document.createElement("tr");for(let r=0;r<o.length;r++){const r=document.createElement("td");r.innerText=e,n.appendChild(r),t.appendChild(n)}})),t.prepend(r),e.appendChild(n)}()})),s.addEventListener("click",(function(){var e;o.classList.remove("middle-img"),o.classList.add("showSushi"),e=o,function(){e.innerHTML="";const n=document.createElement("div");["<h3>Sashimi, $15 per serving</h3>","<h3>Nigri, $12 per serving</h3>","<h3>Octopus, $18 per serving</h3>","<h3>Salmon, $12 per serving</h3>","<h3>Scallops, $13 per serving</h3>","<h3>Yellowtail, $7 per serving</h3>"].forEach((function(e){const t=document.createElement("div");t.classList.add("menu-item"),t.innerHTML=e,n.appendChild(t)})),e.appendChild(n)}()})),t.innerHTML="&#169 2022 Yogushi Group",i.appendChild(d),i.appendChild(s),n.appendChild(c),n.appendChild(i),a.appendChild(l),r.appendChild(n),e.appendChild(r),e.appendChild(o),e.appendChild(a),e.appendChild(t)}()})();