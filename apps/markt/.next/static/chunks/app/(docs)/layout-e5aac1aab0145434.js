(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6529],{1310:function(e,t,n){Promise.resolve().then(n.t.bind(n,1718,23)),Promise.resolve().then(n.bind(n,3099)),Promise.resolve().then(n.bind(n,2310)),Promise.resolve().then(n.bind(n,2355))},2310:function(e,t,n){"use strict";n.r(t),n.d(t,{DocsSearch:function(){return i}});var s=n(5528);n(1349);var r=n(75),l=n(9035);function i(e){let{className:t,...n}=e;return(0,s.jsxs)("form",{onSubmit:function(e){return e.preventDefault(),(0,l.toast)({title:"Not implemented",message:"We're still working on the search.",type:"error"})},className:(0,r.cn)("relative w-full",t),...n,children:[(0,s.jsx)("input",{type:"search",placeholder:"Search documentation...",className:"block h-8 w-full appearance-none rounded-md border border-slate-200 bg-slate-100 py-2 pl-3 pr-3 text-sm placeholder:text-slate-400 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:ring-offset-1 sm:w-64 sm:pr-12"}),(0,s.jsxs)("kbd",{className:"pointer-events-none absolute top-1.5 right-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-white px-1.5 font-mono text-[10px] font-medium text-slate-600 opacity-100 sm:flex",children:[(0,s.jsx)("span",{className:"text-xs",children:"⌘"}),"K"]})]})}},2355:function(e,t,n){"use strict";n.r(t),n.d(t,{DocsSidebarNav:function(){return a},DocsSidebarNavItems:function(){return c}});var s=n(5528),r=n(6046),l=n.n(r),i=n(5835),o=n(75);function a(e){let{items:t}=e,n=(0,i.usePathname)();return t.length?(0,s.jsx)("div",{className:"w-full",children:t.map((e,t)=>(0,s.jsxs)("div",{className:(0,o.cn)("pb-8"),children:[(0,s.jsx)("h4",{className:"mb-1 rounded-md px-2 py-1 text-sm font-medium",children:e.title}),(0,s.jsx)(c,{items:e.items,pathname:n})]},t))}):null}function c(e){let{items:t,pathname:n}=e;return(null==t?void 0:t.length)?(0,s.jsx)("div",{className:"grid grid-flow-row auto-rows-max text-sm",children:t.map((e,t)=>(0,s.jsx)(l(),{href:e.disabled?"#":e.href,className:(0,o.cn)("flex w-full items-center rounded-md px-2 py-2 hover:underline",e.disabled&&"cursor-not-allowed opacity-60",{"bg-slate-100":n===e.href}),target:e.external&&"_blank",rel:e.external?"noreferrer":"",children:e.title},t))}):null}},8706:function(e,t,n){"use strict";n.d(t,{P:function(){return Z}});var s=n(2303),r=n(5704),l=n(7977),i=n(2346),o=n(4285),a=n(9120),c=n(5407),d=n(6704),u=n(7380),m=n(1790),f=n(7259),h=n(5981),x=n(722),p=n(6833),b=n(5348),g=n(9695),w=n(251),v=n(9552),j=n(6025),N=n(8397),y=n(7158);let Z={logo:s.Z,close:r.Z,spinner:l.Z,chevronLeft:i.Z,chevronRight:o.Z,trash:a.Z,post:c.Z,page:d.Z,media:u.Z,settings:m.Z,billing:f.Z,ellipsis:h.Z,add:x.Z,warning:p.Z,user:b.Z,arrowRight:g.Z,help:w.Z,pizza:v.Z,gitHub:j.Z,twitter:N.Z,check:y.Z}},3099:function(e,t,n){"use strict";n.r(t),n.d(t,{MainNav:function(){return m}});var s=n(5528),r=n(1349),l=n(6046),i=n.n(l),o=n(5835),a=n(75),c=n(9034),d=n(8706);function u(e){let{items:t,children:n}=e;return r.useLayoutEffect(()=>{let e=window.getComputedStyle(document.body).overflow;return document.body.style.overflow="hidden",()=>document.body.style.overflow=e},[]),(0,s.jsx)("div",{className:(0,a.cn)("fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden"),children:(0,s.jsxs)("div",{className:"relative z-20 grid gap-6 rounded-md bg-white p-4 shadow-md",children:[(0,s.jsxs)(i(),{href:"/",className:"flex items-center space-x-2",children:[(0,s.jsx)(d.P.logo,{}),(0,s.jsx)("span",{className:"font-bold",children:c.J.name})]}),(0,s.jsx)("nav",{className:"grid grid-flow-row auto-rows-max text-sm",children:t.map((e,t)=>(0,s.jsx)(i(),{href:e.disabled?"#":e.href,className:(0,a.cn)("flex w-full items-center rounded-md px-2 py-2 text-sm font-medium hover:underline",e.disabled&&"cursor-not-allowed opacity-60"),children:e.title},t))}),n]})})}function m(e){let{items:t,children:n}=e,l=(0,o.useSelectedLayoutSegment)(),[m,f]=r.useState(!1);return(0,s.jsxs)("div",{className:"flex gap-6 md:gap-10",children:[(0,s.jsxs)(i(),{href:"/",className:"hidden items-center space-x-2 md:flex",children:[(0,s.jsx)(d.P.logo,{}),(0,s.jsx)("span",{className:"hidden font-bold sm:inline-block",children:c.J.name})]}),(null==t?void 0:t.length)?(0,s.jsx)("nav",{className:"hidden gap-6 md:flex",children:null==t?void 0:t.map((e,t)=>(0,s.jsx)(i(),{href:e.disabled?"#":e.href,className:(0,a.cn)("flex items-center text-lg font-semibold text-slate-600 sm:text-sm",e.href.startsWith("/".concat(l))&&"text-slate-900",e.disabled&&"cursor-not-allowed opacity-80"),children:e.title},t))}):null,(0,s.jsxs)("button",{className:"flex items-center space-x-2 md:hidden",onClick:()=>f(!m),children:[m?(0,s.jsx)(d.P.close,{}):(0,s.jsx)(d.P.logo,{}),(0,s.jsx)("span",{className:"font-bold",children:"Menu"})]}),m&&(0,s.jsx)(u,{items:t,children:n})]})}},9034:function(e,t,n){"use strict";n.d(t,{J:function(){return s}});let s={name:"Taxonomy",links:{twitter:"https://twitter.com/shadcn",github:"https://github.com/shadcn/taxonomy"}}},75:function(e,t,n){"use strict";n.d(t,{cn:function(){return l},p:function(){return i}});var s=n(4517),r=n(5522);function l(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.m)((0,s.W)(t))}function i(e){let t=new Date(e);return t.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})}},9035:function(e,t,n){"use strict";n.r(t),n.d(t,{Toast:function(){return a},Toaster:function(){return o},toast:function(){return c}});var s=n(5528);n(1349);var r=n(855),l=n(75),i=n(8706);let o=r.x7;function a(e){let{visible:t,className:n,...r}=e;return(0,s.jsx)("div",{className:(0,l.cn)("min-h-16 mb-2 flex w-[350px] flex-col items-start gap-1 rounded-md bg-white px-6 py-4 shadow-lg",t&&"animate-in slide-in-from-bottom-5",n),...r})}function c(e){let{title:t,message:n,type:i="default",duration:o=3e3}=e;return r.ZP.custom(e=>{let{visible:r}=e;return(0,s.jsxs)(a,{visible:r,className:(0,l.cn)({"bg-red-600 text-white":"error"===i,"bg-black text-white":"success"===i}),children:[(0,s.jsx)(a.Title,{children:t}),n&&(0,s.jsx)(a.Description,{children:n})]})},{duration:o})}a.Icon=function(e){let{name:t,className:n,...r}=e,o=i.P[t];return o?(0,s.jsx)("div",{className:"flex h-20 w-20 items-center justify-center rounded-full bg-slate-100",children:(0,s.jsx)(o,{className:(0,l.cn)("h-10 w-10",n),...r})}):null},a.Title=function(e){let{className:t,...n}=e;return(0,s.jsx)("p",{className:(0,l.cn)("text-sm font-medium",t),...n})},a.Description=function(e){let{className:t,...n}=e;return(0,s.jsx)("p",{className:(0,l.cn)("text-sm opacity-80",t),...n})}},6046:function(e,t,n){e.exports=n(1718)},5835:function(e,t,n){e.exports=n(8406)},9482:function(){}},function(e){e.O(0,[1718,8122,5801,7516,1744],function(){return e(e.s=1310)}),_N_E=e.O()}]);