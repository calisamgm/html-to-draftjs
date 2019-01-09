!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("immutable"),require("draft-js")):"function"==typeof define&&define.amd?define(["immutable","draft-js"],t):"object"==typeof exports?exports.htmlToDraftjs=t(require("immutable"),require("draft-js")):e.htmlToDraftjs=t(e.immutable,e["draft-js"])}("undefined"!=typeof self?self:this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){e.exports=n(3)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,r,l,o){var u=e.nodeName.toLowerCase();if(o){var c=o(u,e);if(c){var s=a.Entity.__create(c.type,c.mutability,c.data||{});return{chunk:(0,d.getAtomicBlockChunk)(s)}}}if("#text"===u&&"\n"!==e.textContent)return(0,d.createTextChunk)(e,t,l);if("br"===u)return{chunk:(0,d.getSoftNewlineChunk)()};if("img"===u&&e instanceof HTMLImageElement){var f={};f.src=e.getAttribute?e.getAttribute("src")||e.src:e.src,f.alt=e.alt,f.height=e.style.height,f.width=e.style.width,e.style.float&&(f.alignment=e.style.float);var m=a.Entity.__create("IMAGE","MUTABLE",f);return{chunk:(0,d.getAtomicBlockChunk)(m)}}if("video"===u&&e instanceof HTMLVideoElement){var g={};g.src=e.getAttribute?e.getAttribute("src")||e.src:e.src,g.alt=e.alt,g.height=e.style.height,g.width=e.style.width,e.style.float&&(g.alignment=e.style.float);var y=a.Entity.__create("VIDEO","MUTABLE",g);return{chunk:(0,d.getAtomicBlockChunk)(y)}}if("iframe"===u&&e instanceof HTMLIFrameElement){var b={};b.src=e.getAttribute?e.getAttribute("src")||e.src:e.src,b.height=e.height,b.width=e.width;var x=a.Entity.__create("EMBEDDED_LINK","MUTABLE",b);return{chunk:(0,d.getAtomicBlockChunk)(x)}}var E=(0,h.default)(u,r),C=void 0;E&&("ul"===u||"ol"===u?(r=u,n+=1):("unordered-list-item"!==E&&"ordered-list-item"!==E&&(r="",n=-1),M?(C=(0,d.getFirstBlockChunk)(E,(0,k.default)(e)),M=!1):C=(0,d.getBlockDividerChunk)(E,n,(0,k.default)(e)))),C||(C=(0,d.getEmptyChunk)()),t=(0,p.default)(u,e,t);for(var w=e.firstChild;w;){var _=(0,v.default)(w),A=i(w,t,n,r,_||l,o),T=A.chunk;C=(0,d.joinChunks)(C,T);w=w.nextSibling}return{chunk:C}}function l(e,t){var n=e.trim().replace(x,b),r=(0,s.default)(n);return r?(M=!0,{chunk:i(r,new u.OrderedSet,-1,"",void 0,t).chunk}):null}function o(e,t){var n=l(e,t);if(n){var r=n.chunk,i=new u.OrderedMap({});r.entities&&r.entities.forEach(function(e){e&&(i=i.set(e,a.Entity.__get(e)))});var o=0;return{contentBlocks:r.text.split("\r").map(function(e,t){var n=o+e.length,i=r&&r.inlines.slice(o,n),l=r&&r.entities.slice(o,n),c=new u.List(i.map(function(e,t){var n={style:e,entity:null};return l[t]&&(n.entity=l[t]),a.CharacterMetadata.create(n)}));return o=n,new a.ContentBlock({key:(0,a.genKey)(),type:r&&r.blocks[t]&&r.blocks[t].type||"unstyled",depth:r&&r.blocks[t]&&r.blocks[t].depth,data:r&&r.blocks[t]&&r.blocks[t].data||new u.Map({}),text:e,characterList:c})}),entityMap:i}}return null}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var a=n(1),u=n(0),c=n(4),s=r(c),d=n(5),f=n(6),h=r(f),m=n(7),p=r(m),g=n(8),k=r(g),y=n(9),v=r(y),b=" ",x=new RegExp("&nbsp;","g"),M=!0},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){var t,n=null;return document.implementation&&document.implementation.createHTMLDocument&&(t=document.implementation.createHTMLDocument("foo"),t.documentElement.innerHTML=e,n=t.getElementsByTagName("body")[0]),n};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.joinChunks=t.getAtomicBlockChunk=t.getBlockDividerChunk=t.getFirstBlockChunk=t.getEmptyChunk=t.getSoftNewlineChunk=t.createTextChunk=t.getWhitespaceChunk=void 0;var r=n(0),i=t.getWhitespaceChunk=function(e){return{text:" ",inlines:[new r.OrderedSet],entities:[e],blocks:[]}};t.createTextChunk=function(e,t,n){var r=e.textContent;return""===r.trim()?{chunk:i(n)}:{chunk:{text:r,inlines:Array(r.length).fill(t),entities:Array(r.length).fill(n),blocks:[]}}},t.getSoftNewlineChunk=function(){return{text:"\n",inlines:[new r.OrderedSet],entities:new Array(1),blocks:[]}},t.getEmptyChunk=function(){return{text:"",inlines:[],entities:[],blocks:[]}},t.getFirstBlockChunk=function(e,t){return{text:"",inlines:[],entities:[],blocks:[{type:e,depth:0,data:t||new r.Map({})}]}},t.getBlockDividerChunk=function(e,t,n){return{text:"\r",inlines:[],entities:[],blocks:[{type:e,depth:Math.max(0,Math.min(4,t)),data:n||new r.Map({})}]}},t.getAtomicBlockChunk=function(e){return{text:"\r ",inlines:[new r.OrderedSet],entities:[e],blocks:[{type:"atomic",depth:0,data:new r.Map({})}]}},t.joinChunks=function(e,t){return{text:e.text+t.text,inlines:e.inlines.concat(t.inlines),entities:e.entities.concat(t.entities),blocks:e.blocks.concat(t.blocks)}}},function(e,t,n){"use strict";function r(e,t){var n=l.filter(function(n){return n.element===e&&(!n.wrapper||n.wrapper===t)||n.wrapper===e||n.aliasedElements&&n.aliasedElements.indexOf(e)>-1}).keySeq().toSet().toArray();if(1===n.length)return n[0]}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var i=n(0),l=new i.Map({"header-one":{element:"h1"},"header-two":{element:"h2"},"header-three":{element:"h3"},"header-four":{element:"h4"},"header-five":{element:"h5"},"header-six":{element:"h6"},"unordered-list-item":{element:"li",wrapper:"ul"},"ordered-list-item":{element:"li",wrapper:"ol"},blockquote:{element:"blockquote"},code:{element:"pre"},atomic:{element:"figure"},unstyled:{element:"p",aliasedElements:["div"]}})},function(e,t,n){"use strict";function r(e,t,n){var r=i[e],l=void 0;if(r)l=n.add(r).toOrderedSet();else if(t instanceof HTMLElement){l=n;var o=t;l=l.withMutations(function(e){var t=o.style.color,n=o.style.backgroundColor,r=o.style.fontSize,l=o.style.fontFamily.replace(/^"|"$/g,""),a=o.style.fontWeight,u=o.style.textDecoration,c=o.style.fontStyle;t&&e.add("color-"+t.replace(/ /g,"")),n&&e.add("bgcolor-"+n.replace(/ /g,"")),r&&e.add("fontsize-"+r.replace(/px$/g,"")),l&&e.add("fontfamily-"+l),"bold"===a&&e.add(i.strong),"underline"===u&&e.add(i.ins),"italic"===c&&e.add(i.em)}).toOrderedSet()}return l}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var i={code:"CODE",del:"STRIKETHROUGH",em:"ITALIC",strong:"BOLD",ins:"UNDERLINE",sub:"SUBSCRIPT",sup:"SUPERSCRIPT"}},function(e,t,n){"use strict";function r(e){var t={};return e.style.textAlign&&(t["text-align"]=e.style.textAlign),e.style.marginLeft&&(t["margin-left"]=e.style.marginLeft),e.style.lineHeight&&(t["line-height"]=e.style.lineHeight),e.style.margin&&(t.margin=e.style.margin),new i.Map(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var i=n(0)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=function(e){var t=void 0;if(e instanceof HTMLAnchorElement){var n={};e.dataset&&void 0!==e.dataset.mention?(n.url=e.href,n.text=e.innerHTML,n.value=e.dataset.value,t=r.Entity.__create("MENTION","IMMUTABLE",n)):(n.url=e.getAttribute?e.getAttribute("href")||e.href:e.href,n.title=e.innerHTML,n.targetOption=e.target,t=r.Entity.__create("LINK","MUTABLE",n))}return t};t.default=i}])});