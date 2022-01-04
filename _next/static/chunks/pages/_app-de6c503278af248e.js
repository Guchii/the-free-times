(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8510)}])},8510:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(9008),a=n(1248),i=n.n(a),c=n(7792),s=(n(906),n(7294));function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps,a=(0,s.useState)("technology"),l=a[0],f=a[1];return(0,r.jsxs)("div",{children:[(0,r.jsxs)("header",{className:i().header,children:[(0,r.jsx)("h1",{children:"THE FREE TIMES"}),(0,r.jsx)("p",{children:(0,r.jsx)("i",{children:"Free to read e-paper with concise articles and many categories"})}),(0,r.jsxs)("ul",{className:i().linkBox,children:[(0,r.jsx)("li",{className:"technology"===l?i().active:void 0,onClick:function(){return f("technology")},children:"technology"}),(0,r.jsx)("li",{className:"national"===l?i().active:void 0,onClick:function(){return f("national")},children:"national"}),(0,r.jsx)("li",{className:"business"===l?i().active:void 0,onClick:function(){return f("business")},children:"business"}),(0,r.jsx)("li",{className:"sports"===l?i().active:void 0,onClick:function(){return f("sports")},children:"sports"}),(0,r.jsx)("li",{className:"world"===l?i().active:void 0,onClick:function(){return f("world")},children:"world"}),(0,r.jsx)("li",{className:"politics"===l?i().active:void 0,onClick:function(){return f("politics")},children:"politics"})]}),(0,r.jsx)("hr",{})]}),(0,r.jsx)("main",{children:(0,r.jsx)(t,u({},n,{category:l,setCategory:f}))}),(0,r.jsx)("footer",{className:i().footer,children:(0,r.jsxs)("p",{children:["This is a free app and under active development on ",(0,r.jsx)("b",{children:"GitHub"}),". Please star."]})}),(0,r.jsx)(c.Z,{href:"https://github.com/Guchii/the-free-times",octoColor:"#f3dfc1",bannerColor:"#1a1c1a"}),(0,r.jsx)(o.default,{children:(0,r.jsx)("title",{children:"Free to read e-paper. Stay updated with the latest news. The free times"})})]})}},1248:function(e){e.exports={header:"home_header__VSa9g",maxWidth:"home_maxWidth__iD3Q5",footer:"home_footer__CbvUL",linkBox:"home_linkBox__Hcbw9",button:"home_button__5p6hV",active:"home_active__GWg4y"}},906:function(){},9008:function(e,t,n){e.exports=n(5443)},7792:function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(7294),i=s(a),c=s(n(103));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f="____GITHUB_CORNER_SUPER_SECRET___",h=(0,c.default)(),d=function(e){function t(){return l(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){if(!document.getElementById(f)){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",t.id=f,t.styleSheet?t.styleSheet.cssText=h:t.appendChild(document.createTextNode(h)),e.appendChild(t)}}},{key:"render",value:function(){var e=this.props,t=e.href,n=e.size,o=e.direction,a=e.octoColor,c=e.bannerColor,s=e.ariaLabel,l=e.className,u=e.svgStyle,f=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["href","size","direction","octoColor","bannerColor","ariaLabel","className","svgStyle"]),h={position:"absolute",top:0,fill:a},d={},p="",m="",b="";"left"===o?(p="M250 0L135 115h-15l-12 27L0 250V0z",m="M122 109c15-9 9-19 9-19-3-7-2-11-2-11 1-7-3-2-3-2-4 5-2 11-2 11 3 10-5 15-9 16",b="M135 115s-4 2-5 0l-14-14c-3-2-6-3-8-3 8-11 15-24-2-41-5-5-10-7-16-7-1-2-3-7-12-11 0 0-5 3-7 16-4 2-8 5-12 9s-7 8-9 12c-14 4-17 9-17 9 4 8 9 11 11 11 0 6 2 11 7 16 16 16 30 10 41 2 0 3 1 7 5 11l12 11c1 2-1 6-1 6z",h.left=0,d.WebkitTransformOrigin="120px 144px",d.transformOrigin="120px 144px"):(p="M0 0l115 115h15l12 27 108 108V0z",m="M128 109c-15-9-9-19-9-19 3-7 2-11 2-11-1-7 3-2 3-2 4 5 2 11 2 11-3 10 5 15 9 16",b="M115 115s4 2 5 0l14-14c3-2 6-3 8-3-8-11-15-24 2-41 5-5 10-7 16-7 1-2 3-7 12-11 0 0 5 3 7 16 4 2 8 5 12 9s7 8 9 12c14 3 17 7 17 7-4 8-9 11-11 11 0 6-2 11-7 16-16 16-30 10-41 2 0 3-1 7-5 11l-12 11c-1 1 1 5 1 5z",h.right=0,d.WebkitTransformOrigin="130px 106px",d.transformOrigin="130px 106px");var _="string"===typeof l?" "+l:"";return i.default.createElement("a",r({},f,{href:t,className:"github-corner"+_,"aria-label":s}),i.default.createElement("svg",{width:n,height:n,viewBox:"0 0 250 250",style:r({},h,u)},i.default.createElement("path",{className:"octo-banner",d:p,fill:c}),i.default.createElement("path",{className:"octo-arm",d:m,style:d}),i.default.createElement("path",{className:"octo-body",d:b})))}}]),t}(a.Component);d.defaultProps={href:"/",size:80,direction:"right",octoColor:"#fff",bannerColor:"#151513",ariaLabel:"Open GitHub project"},t.Z=d},103:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return"\n.github-corner:hover .octo-arm {\n  animation: octocat-wave 560ms ease-in-out;\n}\n\n@keyframes octocat-wave {\n  0%, 100% {\n    transform: rotate(0deg);\n  }\n\n  20%, 60% {\n    transform: rotate(-25deg);\n  }\n\n  40%, 80% {\n    transform: rotate(10deg);\n  }\n}\n\n@media (max-width: 500px) {\n    .github-corner:hover .octo-arm {\n        animation: none;\n    }\n\n    .github-corner .octo-arm {\n        animation: octocat-wave 560ms ease-in-out;\n    }\n}\n"}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(387)}));var n=e.O();_N_E=n}]);