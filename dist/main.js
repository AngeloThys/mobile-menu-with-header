(()=>{"use strict";var n,e,t,r,i,a,o,A,s,c,l,d,p,u,C={426:(n,e,t)=>{t.d(e,{Z:()=>A});var r=t(537),i=t.n(r),a=t(645),o=t.n(a)()(i());o.push([n.id,':root {\n  --primary-pink: #ff8787;\n  --secondary-pink: #ffc9c9;\n  --tertiary-pink: #fa5252;\n  --primary-green: #12b886;\n  --secondary-green: #099268;\n  --tertiary-green: #38d9a9;\n}\n\n* {\n  font-family: "Oswald", sans-serif;\n  font-family: "Roboto Condensed", sans-serif;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  margin: 0;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid:\n    "header" 1.5fr\n    "main" 8.5fr;\n}\n\nheader {\n  grid-area: header;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: 2.5fr 7.5fr;\n  border-bottom: 4px solid black;\n  box-shadow: 0px 0px 4px black;\n}\n\nmain {\n  grid-area: main;\n  background-color: var(--secondary-pink);\n}\n\n.menu {\n  z-index: 1;\n  width: 0;\n  min-width: 0;\n  background-color: var(--primary-pink);\n  height: 100%;\n  border-right: 0px solid black;\n  transition:\n    width 0.5s ease-in-out,\n    min-width 0.5s ease-in-out,\n    border-right 0s 0.5s ease-in-out;\n}\n\n.menu.active {\n  width: 25%;\n  min-width: 250px;\n  border-right: 4px solid black;\n  box-shadow: 0px 0px 4px black;\n  transition:\n    width 0.5s ease-in-out,\n    min-width 0.5s ease-in-out;\n}\n\n.menu-container {\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  gap: 2rem;\n  width: 0;\n  height: 0;\n  opacity: 0;\n  overflow: hidden;\n  cursor: pointer;\n}\n\n.menu-container.active {\n  padding: 1.5rem 0 0 2rem;\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n}\n\n.menu-item-header {\n  position: relative;\n  margin: 0;\n  opacity: 0;\n  transition:\n    opacity 0.2s 0.5s ease-in-out,\n    font-size 0.2s 0.5s ease-in-out,\n    color 0.7s ease-in-out;\n}\n\n.menu-item-header.active {\n  font-weight: 700;\n  font-size: 1.5rem;\n  opacity: 1;\n  transition:\n    color 0.1s 0.5s ease-in-out,\n    opacity 0.2s 0.5s ease-in-out,\n    font-size 0.2s 0.5s ease-in-out;\n}\n\n.menu-item-header.active.selected {\n  transition: color 0.5s ease-in-out;\n  color: white;\n}\n\n.menu-item-header:hover {\n  transition: color 0.1s 0.2s ease-in-out;\n  color: var(--primary-green);\n}\n\n.menu-item-header::after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 3px;\n  width: 0;\n  transition:\n    width 0.7s ease-in-out,\n    background-color 0s 0.7s ease-in-out;\n  display: inline-block;\n  content: "";\n}\n\n.menu-item-header:hover::after {\n  transition: width 0.2s ease-in-out;\n  width: 100%;\n  background-color: var(--primary-green);\n}\n\n.menu-item-header.active.selected::after {\n  transition:\n    width 0.3s ease-in-out,\n    background-color 0.3s 0.3s ease-in-out;\n  width: 100%;\n  background-color: white;\n}\n\n.submenu {\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  gap: 0.5rem;\n  opacity: 0;\n  height: 0;\n  width: 0;\n}\n\n.submenu.active {\n  transition: opacity 0.5s ease-in-out;\n  opacity: 1;\n  height: auto;\n  width: 100%;\n  margin-top: 1rem;\n  margin-left: 0.5rem;\n}\n\n.submenu-item-header {\n  margin: 0;\n  height: 0;\n  width: 0;\n}\n\n.submenu-item-header.active {\n  transition: opacity 0.5s 0.2s ease-in-out;\n  height: auto;\n  width: 100%;\n}\n\n.menu-button {\n  place-self: center left;\n  margin-left: 2rem;\n  cursor: pointer;\n  display: grid;\n}\n\n.logo {\n  place-self: center left;\n  margin-left: 2rem;\n}\n\n.logo h3 {\n  font-family: "Oswald", sans-serif;\n  margin: 0;\n  font-weight: 700;\n  font-size: 2rem;\n  color: var(--tertiary-pink);\n}\n\n.icon-container {\n  position: relative;\n  place-self: center;\n  height: 60px;\n  width: 60px;\n  border: 4px solid var(--secondary-green);\n  border-radius: 8px;\n  transition: all 0.5s ease-in-out;\n}\n\n.icon-container.active {\n  border-color: transparent;\n}\n\n.icon-container:hover {\n  background-color: rgba(130, 130, 130, 0.125);\n}\n\n.icon-part {\n  position: absolute;\n  display: inline-block;\n  height: 4px;\n  width: 46px;\n  background-color: var(--primary-green);\n  transition: all 0.5s ease-in-out;\n  border-radius: 4px;\n}\n\n.icon-part.part-1 {\n  transform-origin: center;\n  transform: translate(calc((52px - 46px) / 2), calc((52px - 4px) / 4 * 1));\n}\n\n.icon-part.part-1.active {\n  transform: translate(3px, 25px) rotate(45deg);\n}\n\n.icon-part.part-2 {\n  transform-origin: center;\n  transform: translate(calc((52px - 46px) / 2), calc((52px - 4px) / 4 * 2));\n  transition: all 0.25s 0.25s ease-out;\n}\n\n.icon-part.part-2.active {\n  transition: all 0.25s;\n  background-color: transparent;\n}\n\n.icon-part.part-3 {\n  transform-origin: center;\n  transform: translate(calc((52px - 46px) / 2), calc((52px - 4px) / 4 * 3));\n}\n\n.icon-part.part-3.active {\n  transform: translate(3px, 25px) rotate(-45deg);\n}\n',"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;EACE,uBAAuB;EACvB,yBAAyB;EACzB,wBAAwB;EACxB,wBAAwB;EACxB,0BAA0B;EAC1B,yBAAyB;AAC3B;;AAEA;EACE,iCAAiC;EACjC,2CAA2C;EAC3C,sBAAsB;AACxB;;AAEA;;EAEE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,aAAa;EACb;;gBAEc;AAChB;;AAEA;EACE,iBAAiB;EACjB,UAAU;EACV,aAAa;EACb,kCAAkC;EAClC,8BAA8B;EAC9B,6BAA6B;AAC/B;;AAEA;EACE,eAAe;EACf,uCAAuC;AACzC;;AAEA;EACE,UAAU;EACV,QAAQ;EACR,YAAY;EACZ,qCAAqC;EACrC,YAAY;EACZ,6BAA6B;EAC7B;;;oCAGkC;AACpC;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,6BAA6B;EAC7B,6BAA6B;EAC7B;;8BAE4B;AAC9B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,SAAS;EACT,UAAU;EACV,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,wBAAwB;EACxB,WAAW;EACX,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV;;;0BAGwB;AAC1B;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,UAAU;EACV;;;mCAGiC;AACnC;;AAEA;EACE,kCAAkC;EAClC,YAAY;AACd;;AAEA;EACE,uCAAuC;EACvC,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,WAAW;EACX,QAAQ;EACR;;wCAEsC;EACtC,qBAAqB;EACrB,WAAW;AACb;;AAEA;EACE,kCAAkC;EAClC,WAAW;EACX,sCAAsC;AACxC;;AAEA;EACE;;0CAEwC;EACxC,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,WAAW;EACX,UAAU;EACV,SAAS;EACT,QAAQ;AACV;;AAEA;EACE,oCAAoC;EACpC,UAAU;EACV,YAAY;EACZ,WAAW;EACX,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,SAAS;EACT,QAAQ;AACV;;AAEA;EACE,yCAAyC;EACzC,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,uBAAuB;EACvB,iBAAiB;EACjB,eAAe;EACf,aAAa;AACf;;AAEA;EACE,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,iCAAiC;EACjC,SAAS;EACT,gBAAgB;EAChB,eAAe;EACf,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,wCAAwC;EACxC,kBAAkB;EAClB,gCAAgC;AAClC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,WAAW;EACX,sCAAsC;EACtC,gCAAgC;EAChC,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,yEAAyE;AAC3E;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,wBAAwB;EACxB,yEAAyE;EACzE,oCAAoC;AACtC;;AAEA;EACE,qBAAqB;EACrB,6BAA6B;AAC/B;;AAEA;EACE,wBAAwB;EACxB,yEAAyE;AAC3E;;AAEA;EACE,8CAA8C;AAChD",sourcesContent:[':root {\n  --primary-pink: #ff8787;\n  --secondary-pink: #ffc9c9;\n  --tertiary-pink: #fa5252;\n  --primary-green: #12b886;\n  --secondary-green: #099268;\n  --tertiary-green: #38d9a9;\n}\n\n* {\n  font-family: "Oswald", sans-serif;\n  font-family: "Roboto Condensed", sans-serif;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  margin: 0;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid:\n    "header" 1.5fr\n    "main" 8.5fr;\n}\n\nheader {\n  grid-area: header;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: 2.5fr 7.5fr;\n  border-bottom: 4px solid black;\n  box-shadow: 0px 0px 4px black;\n}\n\nmain {\n  grid-area: main;\n  background-color: var(--secondary-pink);\n}\n\n.menu {\n  z-index: 1;\n  width: 0;\n  min-width: 0;\n  background-color: var(--primary-pink);\n  height: 100%;\n  border-right: 0px solid black;\n  transition:\n    width 0.5s ease-in-out,\n    min-width 0.5s ease-in-out,\n    border-right 0s 0.5s ease-in-out;\n}\n\n.menu.active {\n  width: 25%;\n  min-width: 250px;\n  border-right: 4px solid black;\n  box-shadow: 0px 0px 4px black;\n  transition:\n    width 0.5s ease-in-out,\n    min-width 0.5s ease-in-out;\n}\n\n.menu-container {\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  gap: 2rem;\n  width: 0;\n  height: 0;\n  opacity: 0;\n  overflow: hidden;\n  cursor: pointer;\n}\n\n.menu-container.active {\n  padding: 1.5rem 0 0 2rem;\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n}\n\n.menu-item-header {\n  position: relative;\n  margin: 0;\n  opacity: 0;\n  transition:\n    opacity 0.2s 0.5s ease-in-out,\n    font-size 0.2s 0.5s ease-in-out,\n    color 0.7s ease-in-out;\n}\n\n.menu-item-header.active {\n  font-weight: 700;\n  font-size: 1.5rem;\n  opacity: 1;\n  transition:\n    color 0.1s 0.5s ease-in-out,\n    opacity 0.2s 0.5s ease-in-out,\n    font-size 0.2s 0.5s ease-in-out;\n}\n\n.menu-item-header.active.selected {\n  transition: color 0.5s ease-in-out;\n  color: white;\n}\n\n.menu-item-header:hover {\n  transition: color 0.1s 0.2s ease-in-out;\n  color: var(--primary-green);\n}\n\n.menu-item-header::after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 3px;\n  width: 0;\n  transition:\n    width 0.7s ease-in-out,\n    background-color 0s 0.7s ease-in-out;\n  display: inline-block;\n  content: "";\n}\n\n.menu-item-header:hover::after {\n  transition: width 0.2s ease-in-out;\n  width: 100%;\n  background-color: var(--primary-green);\n}\n\n.menu-item-header.active.selected::after {\n  transition:\n    width 0.3s ease-in-out,\n    background-color 0.3s 0.3s ease-in-out;\n  width: 100%;\n  background-color: white;\n}\n\n.submenu {\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  gap: 0.5rem;\n  opacity: 0;\n  height: 0;\n  width: 0;\n}\n\n.submenu.active {\n  transition: opacity 0.5s ease-in-out;\n  opacity: 1;\n  height: auto;\n  width: 100%;\n  margin-top: 1rem;\n  margin-left: 0.5rem;\n}\n\n.submenu-item-header {\n  margin: 0;\n  height: 0;\n  width: 0;\n}\n\n.submenu-item-header.active {\n  transition: opacity 0.5s 0.2s ease-in-out;\n  height: auto;\n  width: 100%;\n}\n\n.menu-button {\n  place-self: center left;\n  margin-left: 2rem;\n  cursor: pointer;\n  display: grid;\n}\n\n.logo {\n  place-self: center left;\n  margin-left: 2rem;\n}\n\n.logo h3 {\n  font-family: "Oswald", sans-serif;\n  margin: 0;\n  font-weight: 700;\n  font-size: 2rem;\n  color: var(--tertiary-pink);\n}\n\n.icon-container {\n  position: relative;\n  place-self: center;\n  height: 60px;\n  width: 60px;\n  border: 4px solid var(--secondary-green);\n  border-radius: 8px;\n  transition: all 0.5s ease-in-out;\n}\n\n.icon-container.active {\n  border-color: transparent;\n}\n\n.icon-container:hover {\n  background-color: rgba(130, 130, 130, 0.125);\n}\n\n.icon-part {\n  position: absolute;\n  display: inline-block;\n  height: 4px;\n  width: 46px;\n  background-color: var(--primary-green);\n  transition: all 0.5s ease-in-out;\n  border-radius: 4px;\n}\n\n.icon-part.part-1 {\n  transform-origin: center;\n  transform: translate(calc((52px - 46px) / 2), calc((52px - 4px) / 4 * 1));\n}\n\n.icon-part.part-1.active {\n  transform: translate(3px, 25px) rotate(45deg);\n}\n\n.icon-part.part-2 {\n  transform-origin: center;\n  transform: translate(calc((52px - 46px) / 2), calc((52px - 4px) / 4 * 2));\n  transition: all 0.25s 0.25s ease-out;\n}\n\n.icon-part.part-2.active {\n  transition: all 0.25s;\n  background-color: transparent;\n}\n\n.icon-part.part-3 {\n  transform-origin: center;\n  transform: translate(calc((52px - 46px) / 2), calc((52px - 4px) / 4 * 3));\n}\n\n.icon-part.part-3.active {\n  transform: translate(3px, 25px) rotate(-45deg);\n}\n'],sourceRoot:""}]);const A=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(r)for(var A=0;A<this.length;A++){var s=this[A][0];null!=s&&(o[s]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&o[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(i," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},o=[],A=0;A<n.length;A++){var s=n[A],c=r.base?s[0]+r.base:s[0],l=a[c]||0,d="".concat(c," ").concat(l);a[c]=l+1;var p=t(d),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var C=i(u,r);r.byIndex=A,e.splice(A,0,{identifier:d,updater:C,references:1})}o.push(d)}return o}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var a=r(n=n||[],i=i||{});return function(n){n=n||[];for(var o=0;o<a.length;o++){var A=t(a[o]);e[A].references--}for(var s=r(n,i),c=0;c<a.length;c++){var l=t(a[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},E={};function m(n){var e=E[n];if(void 0!==e)return e.exports;var t=E[n]={id:n,exports:{}};return C[n](t,t.exports,m),t.exports}m.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return m.d(e,{a:e}),e},m.d=(n,e)=>{for(var t in e)m.o(e,t)&&!m.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},m.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),m.nc=void 0,n=m(379),e=m.n(n),t=m(795),r=m.n(t),i=m(569),a=m.n(i),o=m(565),A=m.n(o),s=m(216),c=m.n(s),l=m(589),d=m.n(l),p=m(426),(u={}).styleTagTransform=d(),u.setAttributes=A(),u.insert=a().bind(null,"head"),u.domAPI=r(),u.insertStyleElement=c(),e()(p.Z,u),p.Z&&p.Z.locals&&p.Z.locals,function(n,e){const t=document.querySelector(`.${n}`);t.addEventListener("click",(()=>{const e=t.querySelector(".icon-container"),r=e.querySelectorAll(".icon-part"),i=document.querySelectorAll(".menu-item");t.classList.toggle("active"),e.classList.toggle("active"),r.forEach((n=>{n.classList.toggle("active")})),function(n,e){const t=document.querySelector(`.${n}`),r=document.querySelector(".menu");t.classList.contains("active")?(r.classList.add("active"),r.children[0].classList.add("active"),Array.from(r.children[0].children).forEach((n=>{n.classList.add("active"),n.children[0].classList.add("active")}))):(r.classList.remove("active"),r.children[0].classList.remove("active"),Array.from(r.children[0].children).forEach((n=>{n.classList.remove("active"),n.children[0].classList.remove("active")})))}(n),t.classList.contains("active")||i.forEach((n=>{const e=n.children[1],t=n.children[0];Array.from(e.children).forEach((n=>{n.classList.remove("active")})),e.classList.remove("active"),t.classList.remove("selected")}))}))}("menu-button"),function(n){const e=document.querySelectorAll(".menu-item");e.forEach((n=>{const t=n.children[0],r=n.children[1],i=Array.from(r.children);t.addEventListener("click",(()=>{e.forEach((n=>{const e=n.children[1],t=n.children[0];Array.from(e.children).forEach((n=>{n.classList.remove("active")})),e.classList.remove("active"),t.classList.remove("selected")})),i.forEach((n=>{n.classList.add("active")})),r.classList.add("active"),t.classList.add("selected")}))}))}()})();
//# sourceMappingURL=main.js.map