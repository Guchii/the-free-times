(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8881:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2028)}])},2028:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var r=t(1527),s=t(299),i=t.n(s),l=t(959),c=t(5596),o=t(4064),h=t(1531),a=t(9370),d=t(5110),u=t(9890);let x=()=>(0,r.jsx)(c.rj,{placeItems:"center",w:"full",h:"full",children:(0,r.jsxs)(c.gC,{gap:4,children:[(0,r.jsx)(o.$,{size:"xl"}),(0,r.jsx)(c.xv,{fontWeight:"bold",children:"loading the paper"})]})});function f(){let{category:e,setCategory:n}=(0,l.useContext)(u.AppContext),[t,s]=(0,l.useState)([]),[o,f]=(0,l.useState)(!0),j=(0,d.a)(["news",e],async()=>{let{data:{data:n},status:t}=await i().get("https://inshortsapi.vercel.app/news?category=".concat(e));return n},{onSuccess:e=>{s(e)}});return j.isLoading?(0,r.jsx)(x,{}):(0,r.jsxs)(c.xu,{w:"full",p:8,children:[(0,r.jsx)("main",{style:{overflow:"hidden"},children:(0,r.jsx)(c.rj,{templateColumns:"1fr 1fr 1fr",gap:8,children:t.map((e,n)=>(0,r.jsxs)(h.Zb,{_hover:{shadow:"xl"},transitionDuration:"0.3s",children:[(0,r.jsx)(h.Ol,{children:(0,r.jsx)(c.xv,{fontSize:"md",fontWeight:"bold",children:e.title})}),(0,r.jsx)(h.eW,{children:(0,r.jsx)(c.xv,{fontSize:"sm",children:e.content})}),(0,r.jsx)(h.iR,{children:(0,r.jsx)(a.zx,{_hover:{textDecoration:"none"},isExternal:!0,as:c.rU,href:e.readMoreUrl,children:"Read More →"})})]},n))})}),(0,r.jsx)(c.xu,{as:"footer",p:8,children:(0,r.jsxs)(c.xv,{children:["Made with ❤️ by"," ",(0,r.jsx)(c.rU,{href:"https://github.com/guchii",isExternal:!0,children:"Guchii"})]})})]})}}},function(e){e.O(0,[861,774,888,179],function(){return e(e.s=8881)}),_N_E=e.O()}]);