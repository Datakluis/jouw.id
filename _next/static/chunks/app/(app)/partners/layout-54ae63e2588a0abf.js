(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888,57],{9145:function(e,n,t){Promise.resolve().then(t.bind(t,6605)),Promise.resolve().then(t.bind(t,9357)),Promise.resolve().then(t.bind(t,8537))},6605:function(e,n,t){"use strict";t.r(n),t.d(n,{NavMainConnector:function(){return g}});var o=t(7573),r=t(7653),i=t(7754),l=t(7659),a=t(3094),s=t.n(a),u=t(1519),c=t(8728),f=t(1457),d=t(8269),h=e=>{let{logo:n,links:t,callToActions:a,profileButtonHref:h,withBackButton:v,loggedIn:m,mobile:p}=e,{back:g}=(0,i.useRouter)(),[w,x]=(0,r.useState)(p),b=(0,f.cx)(s().NavMain,w&&s()["is-collapsed"]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("nav",{className:b,children:[n&&(0,o.jsx)("a",{href:n.href,className:s().logo,"aria-label":"home",children:(0,o.jsx)(c.ZP,{name:"logo"})}),(t&&(null==t?void 0:t.length)>0||a&&(null==a?void 0:a.length)>0)&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:s().wrapper,children:(0,o.jsxs)("div",{className:s().items,children:[t&&(0,o.jsx)("ul",{className:s().links,children:t.map(e=>(0,o.jsx)("li",{className:s().link,children:(0,o.jsx)("a",{href:e.href,children:e.label})},"nav-link-".concat(e.label)))}),a&&a.length>0&&(0,o.jsx)("div",{className:s()["cta-container"],children:a.map(e=>(0,o.jsx)(u.default,{loggedIn:m,...e,small:!0},"nav-link-".concat(e.label)))})]})}),(0,o.jsxs)("button",{className:s().button,type:"button","aria-label":"toggle menu",onClick:()=>x(!w),children:[(0,o.jsx)("span",{className:s().icon,children:(0,o.jsx)(c.ZP,{name:"menu"})}),(0,o.jsx)("span",{className:s().icon,children:(0,o.jsx)(c.ZP,{name:"close"})})]})]}),h&&(0,o.jsx)("a",{href:h,"aria-label":"go to profile",className:s()["profile-link"],children:(0,o.jsx)(c.ZP,{name:"profile"})})]}),v&&(0,o.jsxs)(l.default,{className:s()["back-button"],onClick:g,href:"/",children:[(0,o.jsx)(c.ZP,{name:"arrowLeft"}),(0,d.t)("Back")]})]})},v=t(6415),m=t(806);let{navMain:p}=v.global,g=()=>{let{mobile:e}=(0,m.b)();return(0,o.jsx)(h,{...p,callToActions:[{label:"Home",href:"".concat("https://idp.jouw.id","/register"),loggedOutOnly:!0,type:"footer"},{label:"Hoe werkt het?",loggedOutOnly:!0,type:"footer"},{label:"Testfase",href:"/je-datakluis",loggedOutOnly:!0,type:"footer"},{label:"Voor bedrijven",href:"/je-datakluis",loggedOutOnly:!0,type:"footer"},{label:"Over ons",href:"/je-datakluis",loggedOutOnly:!0,type:"footer"},{label:"Veelgestelde vragen",href:"/je-datakluis",loggedOutOnly:!0,type:"footer"}],logo:{...p.logo,href:"/"},mobile:e})}},9357:function(e,n,t){"use strict";t.r(n),t.d(n,{StickyCtaConnector:function(){return l}});var o=t(7573),r=t(806),i=t(9146);let l=e=>{let{info:n,button:t}=e,{hasScrolled:l}=(0,r.b)();return(0,o.jsx)(i.Lx,{info:n,button:t,hasScrolled:l})}},8537:function(e,n,t){"use strict";t.r(n),t.d(n,{TooltipDialogConnector:function(){return l}});var o=t(7573),r=t(806),i=t(9146);let l=()=>{let e=(0,r.n)();return(0,o.jsx)(i.QA,{...e})}},8520:function(e,n,t){"use strict";t.d(n,{Il:function(){return m},iz:function(){return p},d8:function(){return g},g7:function(){return w}});var o=t(7573),r=t(7653),i=t(2076),l=function(e){(0,r.useEffect)(e,[])},a=function(e){var n=(0,r.useRef)(e);n.current=e,l(function(){return function(){return n.current()}})},s=function(e){var n=(0,r.useRef)(0),t=(0,r.useState)(e),o=t[0],i=t[1],l=(0,r.useCallback)(function(e){cancelAnimationFrame(n.current),n.current=requestAnimationFrame(function(){i(e)})},[]);return a(function(){cancelAnimationFrame(n.current)}),[o,l]},u=function(){var e=s(function(){return{x:i.jU?window.pageXOffset:0,y:i.jU?window.pageYOffset:0}}),n=e[0],t=e[1];return(0,r.useEffect)(function(){var e=function(){t(function(e){var n=window.pageXOffset,t=window.pageYOffset;return e.x!==n||e.y!==t?{x:n,y:t}:e})};return e(),(0,i.on)(window,"scroll",e,{capture:!1,passive:!0}),function(){(0,i.S1)(window,"scroll",e)}},[]),n},c=function(e,n){void 0===e&&(e=1/0),void 0===n&&(n=1/0);var t=s({width:i.jU?window.innerWidth:e,height:i.jU?window.innerHeight:n}),o=t[0],l=t[1];return(0,r.useEffect)(function(){if(i.jU){var e=function(){l({width:window.innerWidth,height:window.innerHeight})};return(0,i.on)(window,"resize",e),function(){(0,i.S1)(window,"resize",e)}}},[]),o},f=i.jU?window:null,d=function(e){return!!e.addEventListener},h=function(e){return!!e.on},v=function(e,n,t,o){void 0===t&&(t=f),(0,r.useEffect)(function(){if(n&&t)return d(t)?(0,i.on)(t,e,n,o):h(t)&&t.on(e,n,o),function(){d(t)?(0,i.S1)(t,e,n,o):h(t)&&t.off(e,n,o)}},[e,n,t,JSON.stringify(o)])};let m=(0,r.createContext)({portrait:!0,mobile:!0,desktop:!1,setIsBlue:()=>console.warn("no context"),hasScrolled:!1,setFooterVisible:()=>console.warn("no context")}),p=e=>{let{children:n}=e,[t,i]=(0,r.useState)(!0),[a,s]=(0,r.useState)(!1),[f,d]=(0,r.useState)(!1),[h,p]=(0,r.useState)(!1),[g,w]=(0,r.useState)(!1),{y:x}=u(),b=(0,r.useMemo)(()=>x>0,[x]),{width:_,height:j}=c(),N=()=>{i(_<640),d(_<j),s(_>=1024)};v("resize",N),l(N),(0,r.useEffect)(()=>{document.body.classList.toggle("is-blue",h)},[h]),(0,r.useEffect)(()=>{document.body.classList.toggle("footer-in-view",g)},[g]),(0,r.useEffect)(()=>{document.documentElement.style.setProperty("--viewport-width","calc(100vw - ".concat(window.innerWidth-document.documentElement.clientWidth,"px)"))},[]);let k=(0,r.useMemo)(()=>({portrait:f,mobile:t,desktop:a,setIsBlue:p,hasScrolled:b,setFooterVisible:w}),[f,t,a,p,b,w]);return(0,o.jsx)(m.Provider,{value:k,children:n})},g=(0,r.createContext)({tooltipContent:null,setTooltipContent:()=>null,tooltipVisible:!1,setTooltipVisible:()=>null}),w=e=>{let{children:n}=e,[t,i]=(0,r.useState)(null),[l,a]=(0,r.useState)(!1),s=(0,r.useMemo)(()=>({tooltipContent:t,setTooltipContent:i,tooltipVisible:l,setTooltipVisible:a}),[t,i,l,a]);return(0,o.jsx)(g.Provider,{value:s,children:n})}},806:function(e,n,t){"use strict";t.d(n,{b:function(){return i},n:function(){return l}});var o=t(7653),r=t(8520);let i=()=>{let e=(0,o.useContext)(r.Il);if(!e)throw Error("missing root <AppContextProvider />.");return e},l=()=>{let e=(0,o.useContext)(r.d8);if(!e)throw Error("missing root <TooltipContextProvider />.");return e}},3094:function(e){e.exports={NavMain:"Nav_NavMain__3cJwp",logo:"Nav_logo__4LewA",wrapper:"Nav_wrapper__DXN6t",items:"Nav_items__wuw8m",links:"Nav_links__32xpW",link:"Nav_link__YLnqc","cta-container":"Nav_cta-container__nqqDI",button:"Nav_button__lTLrJ",icon:"Nav_icon__IyfxG","profile-link":"Nav_profile-link__Seo8u","is-collapsed":"Nav_is-collapsed__jizL4","back-button":"Nav_back-button__BgExn"}}},function(e){e.O(0,[435,538,827,623,911,146,415,293,286,744],function(){return e(e.s=9145)}),_N_E=e.O()}]);