(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[618],{10795:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/space",function(){return s(50187)}])},50187:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return D}});var t=s(85893),r=s(5616),i=s(67294),l=s(67952),a=s(61115),c=s(31065),o=s(90629),d=s(15861),u=s(98456),x=s(69417),h=s(11163),p=s(97975),f=s(59242),j=s(92900),v=s(49479),m=s(35330),y=s(26384);let g=e=>{let{...n}=e;return(0,t.jsx)(y.G,{...n,children:(0,t.jsx)(t.Fragment,{children:"When people upvote/downvote contents, space will get a fee, which belongs to all holders of this space."})})},Z=e=>{let{...n}=e;return(0,t.jsx)(y.G,{...n,children:(0,t.jsx)(t.Fragment,{children:"Buy shares of a space to join it and share its revenue."})})};var w=s(36444),I=s(85518);function b(){let e=(0,h.useRouter)(),{currentTimestamp:n}=(0,c.Yh)(),[s,l]=(0,i.useState)([]),[a,p]=(0,i.useState)(0),v=(0,i.useMemo)(()=>new Set,[]),{userArray:y,loading:w,error:b,refetch:D}=(0,f.oX)(a,50);return(0,i.useEffect)(()=>{D()},[n,D]),(0,i.useEffect)(()=>{if(y){let e=y.filter(e=>!v.has(e.id));e.forEach(e=>v.add(e.id)),l(n=>[...n,...e])}},[y]),(0,t.jsxs)(r.Z,{children:[I.tq?(0,t.jsx)(t.Fragment,{children:null==s?void 0:s.map((n,s)=>(0,t.jsx)(o.Z,{sx:e=>({padding:"12px",background:"#312f5c",mb:3}),children:(0,t.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"column"},component:"div",onClick:()=>{e.push("/space-overview/?address=".concat(n.user))},children:[(0,t.jsx)(r.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:(0,t.jsx)(j.M,{sender:n.user,spaceUserInfo:n,imgWidth:36,showSpaceId:!1,MoreBox:(0,t.jsxs)(d.Z,{variant:"main16",color:"text.secondary",sx:{mr:2},children:["#",null==n?void 0:n.spaceId]})})}),(0,t.jsx)(r.Z,{children:(0,t.jsx)(C,{userInfo:n})})]},s)},s))}):(0,t.jsxs)(o.Z,{sx:e=>({background:"#312f5c"}),children:[(0,t.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",gap:2,mt:4,padding:"12px",cursor:"pointer","&:hover":{backgroundColor:"#3e3c76"}},children:[(0,t.jsx)(r.Z,{children:" "}),(0,t.jsx)(r.Z,{children:(0,t.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"row",gap:6},children:[(0,t.jsxs)(r.Z,{sx:{width:"90px",display:"flex",alignItems:"center",gap:"2px"},children:[(0,t.jsx)(d.Z,{variant:"secondary16",color:"text.secondary",children:"REVENUE"}),(0,t.jsx)(g,{})]}),(0,t.jsxs)(r.Z,{sx:{width:"140px",display:"flex",alignItems:"center",gap:"2px"},children:[(0,t.jsx)(d.Z,{variant:"secondary16",color:"text.secondary",children:"SHARE PRICE"}),(0,t.jsx)(Z,{})]})]})})]}),null==s?void 0:s.map((n,s)=>(0,t.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",gap:2,mt:4,padding:"12px 8px",cursor:"pointer","&:hover":{backgroundColor:"#3e3c76"}},component:"div",onClick:()=>{e.push("/space-overview/?address=".concat(n.user))},children:[(0,t.jsx)(r.Z,{children:(0,t.jsx)(j.M,{sender:n.user,spaceUserInfo:n,imgWidth:36,showSpaceId:!0})}),(0,t.jsx)(r.Z,{children:(0,t.jsx)(S,{userInfo:n})})]},s))]}),w?(0,t.jsx)(r.Z,{sx:{display:"flex",justifyContent:"center",mt:4},children:(0,t.jsx)(u.Z,{color:"inherit",size:32})}):(0,t.jsx)(r.Z,{sx:{display:"flex",justifyContent:"center",mt:4},children:y&&50==y.length?(0,t.jsx)(x.Z,{onClick:()=>{p(e=>e+1),D()},endIcon:(0,t.jsx)(m.Z,{className:"icon-animation"}),children:"Load More"}):(0,t.jsx)(d.Z,{variant:"secondary16",color:"text.secondary",children:"No more."})})]})}function S(e){var n,s,i,l,a,o,d;let{userInfo:u}=e,{ethPrice:x}=(0,c.Yh)(),h=(0,p.r2)([{assetId:u.descriptionAssetId?Number(u.descriptionAssetId):-1,totalSupply:null!==(l=null===(n=u.spaceAsset)||void 0===n?void 0:n.totalSupply)&&void 0!==l?l:0}]);return(0,t.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"row",gap:6},children:[(0,t.jsx)(r.Z,{sx:{width:"90px"},children:(0,t.jsx)(v.B,{value:(null!==(o=null===(s=u.spaceAsset)||void 0===s?void 0:s.totalFees)&&void 0!==o?o:0)*(null!=x?x:0),variant:"main16",compact:!0,visibleDecimals:2,symbol:"USD"})}),(0,t.jsx)(r.Z,{sx:{width:"140px"},children:(0,t.jsx)(v.B,{value:Number(null!==(d=null===(i=h[0])||void 0===i?void 0:i.data)&&void 0!==d?d:0)*(null!=x?x:0),variant:"main16",compact:!0,visibleDecimals:2,symbol:"USD"})})]})}function C(e){var n,s,i,l,a,o,d;let{userInfo:u}=e,{ethPrice:x}=(0,c.Yh)(),h=(0,p.r2)([{assetId:u.descriptionAssetId?Number(u.descriptionAssetId):-1,totalSupply:null!==(l=null===(n=u.spaceAsset)||void 0===n?void 0:n.totalSupply)&&void 0!==l?l:0}]);return(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(w.X,{caption:(0,t.jsx)(t.Fragment,{children:"Revenue"}),align:"flex-start",captionVariant:"description",mt:2,children:(0,t.jsx)(v.B,{value:(null!==(o=null===(s=u.spaceAsset)||void 0===s?void 0:s.totalFees)&&void 0!==o?o:0)*(null!=x?x:0),variant:"main16",compact:!0,visibleDecimals:2,symbol:"USD"})}),(0,t.jsx)(w.X,{caption:(0,t.jsx)(t.Fragment,{children:"Share Price"}),align:"flex-start",captionVariant:"description",mt:2,children:(0,t.jsx)(v.B,{value:Number(null!==(d=null===(i=h[0])||void 0===i?void 0:i.data)&&void 0!==d?d:0)*(null!=x?x:0),variant:"main16",compact:!0,visibleDecimals:2,symbol:"USD"})})]})}function D(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(l.Z,{children:(0,t.jsxs)(r.Z,{sx:{display:"flex",flex:1,flexDirection:"column",gap:4},children:[I.tq?(0,t.jsx)(t.Fragment,{}):(0,t.jsx)(a.d,{}),(0,t.jsx)(b,{})]})})})}},92900:function(e,n,s){"use strict";s.d(n,{M:function(){return c}});var t=s(85893),r=s(47726),i=s(5616),l=s(15861),a=s(87952);s(67294);let c=e=>{let{sender:n,blockTimestamp:s,spaceUserInfo:c,imgWidth:o,showSpaceId:d,handleClick:u,MoreBox:x}=e,{avatar:h,spacename:p}=(0,r.Dm)(n,c);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center",gap:1,cursor:"pointer"},component:"div",onClick:()=>{u&&u()},children:[d&&(0,t.jsxs)(l.Z,{variant:"main16",sx:{mr:2},children:["#",null==c?void 0:c.spaceId]}),(0,t.jsx)(a.Z,{sx:{width:o?"".concat(o,"px"):"36px",height:o?"".concat(o,"px"):"36px"},alt:p,src:h}),(0,t.jsxs)(i.Z,{sx:{ml:2},children:[(0,t.jsx)(l.Z,{variant:"main16",children:p}),(0,t.jsx)(l.Z,{variant:"secondary14",color:"text.secondary",children:(0,r.Xe)(n,4,4)})]})]}),(0,t.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center",gap:3},children:[s&&(0,t.jsx)(i.Z,{children:(0,t.jsx)(l.Z,{variant:"secondary14",color:"text.secondary",children:(0,r.i$)(s)})}),x&&(0,t.jsx)(i.Z,{children:x})]})]})}},61115:function(e,n,s){"use strict";s.d(n,{d:function(){return S}});var t=s(85893),r=s(5616),i=s(87952),l=s(69417),a=s(75058),c=s(67294),o=s(42761),d=s(2734),u=s(93946),x=s(53219),h=s(70256),p=s(89396),f=s(61730),j=s(11298),v=s(23279),m=s.n(v);let y=e=>{let{onSearchTermChange:n,wrapperSx:s,placeholder:i,disableFocus:l,showCancle:a,CancleChange:o}=e,x=(0,c.useRef)(null),[v,y]=(0,c.useState)(""),{breakpoints:g}=(0,d.Z)(),Z=(0,f.Z)(g.down("sm")),w=()=>{var e;y(""),n(""),null===(e=x.current)||void 0===e||e.focus(),o&&o()},I=(0,c.useMemo)(()=>m()(e=>{n(e)},300),[n]);return(0,t.jsxs)(r.Z,{sx:e=>({display:"flex",alignItems:"center",gap:2,border:"1px solid ".concat(e.palette.divider),borderRadius:"6px",height:"36px",...s}),children:[(0,t.jsx)(r.Z,{sx:{ml:2,mt:1},children:(0,t.jsx)(p.Z,{height:16})}),(0,t.jsx)(j.ZP,{autoFocus:Z,inputRef:x,sx:{width:"100%",fontSize:{xs:16,sm:14}},placeholder:i,value:v,onChange:e=>{y(e.target.value),I(e.target.value)},onKeyDown:e=>{l&&e.stopPropagation()}}),(0,t.jsx)(u.Z,{sx:{p:0,mr:2,visibility:v||a?"visible":"hidden"},onClick:()=>w(),children:(0,t.jsx)(h.Z,{height:16})})]})},g=e=>{let{onSearchTermChange:n,searchPlaceholder:s,titleProps:i,title:l}=e,[a,h]=(0,c.useState)(!1),{breakpoints:p}=(0,d.Z)();return(0,t.jsxs)(r.Z,{sx:{},children:[!a&&(0,t.jsx)(u.Z,{onClick:()=>h(!0),sx:{padding:0},children:(0,t.jsx)(x.Z,{children:(0,t.jsx)(o.Z,{})})}),a&&(0,t.jsx)(r.Z,{sx:{width:"100%",display:"flex",justifyContent:"space-between"},children:(0,t.jsx)(y,{wrapperSx:{width:{xs:"100%",sm:"280px"}},placeholder:s,onSearchTermChange:n,showCancle:!0,CancleChange:()=>{h(!1),n("")}})})]})};var Z=s(64032),w=s(31065),I=s(47726),b=s(46154);function S(){let[e,n]=(0,c.useState)(""),{setType:s}=(0,Z.a)(),{setWalletModalOpen:o,disconnectWallet:d,account:u,spaceUserInfo:x}=(0,w.Yh)(),{avatar:h,spacename:p}=(0,c.useMemo)(()=>(0,I.Dm)(u,x),[u,x]);async function f(){if(!u){o(!0);return}let e=(0,b.fO)(x);if(!e){s(Z.w.UserInfo);return}s(Z.w.BlogEditor)}return(0,t.jsxs)(r.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsxs)(r.Z,{sx:{display:"flex",gap:4},children:[(0,t.jsx)(i.Z,{alt:"",src:h}),(0,t.jsx)(l.Z,{variant:"surface",size:"medium",startIcon:(0,t.jsx)(a.Z,{fontSize:"small"}),onClick:()=>{f()},children:"Create"})]}),(0,t.jsx)(g,{onSearchTermChange:n,title:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(t.Fragment,{children:"assets"})}),searchPlaceholder:"Search asset"})]})}},36444:function(e,n,s){"use strict";s.d(n,{X:function(){return l}});var t=s(85893),r=s(5616),i=s(15861);let l=e=>{let{caption:n,children:s,captionVariant:l="secondary16",captionColor:a,align:c="center",...o}=e;return(0,t.jsxs)(r.Z,{...o,sx:{display:"flex",alignItems:c,justifyContent:"space-between",...o.sx},children:[n&&(0,t.jsx)(i.Z,{component:"div",variant:l,color:a,sx:{mr:2},children:n}),s]})}},97975:function(e,n,s){"use strict";s.d(n,{TX:function(){return u},bo:function(){return x},c1:function(){return c},k:function(){return d},lv:function(){return a},r2:function(){return o}});var t=s(31065),r=s(46154),i=s(99673),l=s(88144);let a=e=>{let n=(0,t.Yh)(e=>e.fetchArweaveData),s=(0,i.h)({queries:e.map(e=>({queryKey:["arweaveData",e],queryFn:()=>n(e),refetchInterval:6e4}))});return s},c=e=>{let{data:n,error:s}=(0,l.a)({queryKey:["useGetTransactionInfo",e],queryFn:()=>(0,r.Q1)(e),refetchInterval:6e4});return s?void 0:n},o=e=>{let n=(0,t.Yh)(e=>e.getBuyPrice),s=(0,i.h)({queries:e.map(e=>({queryKey:["getBuyPrice",e.assetId,e.totalSupply],queryFn:()=>n(e.assetId,1,e.totalSupply),refetchInterval:6e4}))});return s},d=(e,n)=>{let s=(0,t.Yh)(e=>e.getBuyPrice),{data:r,error:i}=(0,l.a)({queryKey:["getBuyPrice",e,n],queryFn:()=>s(e,1,n),refetchInterval:6e4});return{data:r,error:i}},u=(e,n,s)=>{let r=(0,t.Yh)(e=>e.getSellPrice),{data:i,error:a}=(0,l.a)({queryKey:["getSellPrice",e,n,s],queryFn:()=>r(e,1,n),refetchInterval:6e4});return{data:i,error:a}},x=(e,n,s)=>{let r=(0,t.Yh)(e=>e.getBalanceByAccount_Asset),{data:i,error:a}=(0,l.a)({queryKey:["getBalanceByAccount_Asset",n,e,s],queryFn:()=>r(e,n),refetchInterval:6e4});return{data:i,error:a}}}},function(e){e.O(0,[240,266,87,930,170,144,306,219,952,774,888,179],function(){return e(e.s=10795)}),_N_E=e.O()}]);