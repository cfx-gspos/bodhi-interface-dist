"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[247],{41899:function(e,t,n){var s=n(64836);t.Z=void 0;var i=s(n(64938)),r=n(85893);t.Z=(0,i.default)((0,r.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"}),"ContentCopy")},54048:function(e,t,n){var s=n(64836);t.Z=void 0;var i=s(n(64938)),r=n(85893);t.Z=(0,i.default)((0,r.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"}),"OpenInNew")},37388:function(e,t,n){n.d(t,{Z:function(){return i}});var s=n(67294),i=function({controlled:e,default:t,name:n,state:i="value"}){let{current:r}=s.useRef(void 0!==e),[a,l]=s.useState(t),c=r?e:a,o=s.useCallback(e=>{r||l(e)},[]);return[c,o]}},58974:function(e,t,n){var s=n(54895);t.Z=s.Z},68046:function(e,t,n){n.d(t,{Z:function(){return l}});var s=n(67294),i=n.t(s,2);let r=0,a=i["useId".toString()];var l=function(e){if(void 0!==a){let t=a();return null!=e?e:t}return function(e){let[t,n]=s.useState(e),i=e||t;return s.useEffect(()=>{null==t&&n(`mui-${r+=1}`)},[t]),i}(e)}},86145:function(e,t,n){n.d(t,{Z:function(){return s}});function s(e,t=166){let n;function s(...i){clearTimeout(n),n=setTimeout(()=>{e.apply(this,i)},t)}return s.clear=()=>{clearTimeout(n)},s}},10026:function(e,t,n){n.r(t),n.d(t,{SpaceDetailModal:function(){return g}});var s=n(85893),i=n(64032),r=n(15861),a=n(5616),l=n(93946),c=n(67720),o=n(21737),d=n(47781),u=n(56836),x=n(41899),p=n(10084),h=n(54048),f=n(41664),m=n.n(f),v=n(74187);let g=()=>{let{type:e,close:t}=(0,i.a)(),{tempSpaceModal:n}=(0,d.R)();async function f(){t()}return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(u.P,{open:e===i.w.SpaceInfo,setOpen:f,contentMaxWidth:480,children:[(0,s.jsxs)(r.Z,{variant:"h2",sx:{mb:4},children:["Space #",null==n?void 0:n.spaceId," Details"]}),(0,s.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"column",gap:2,mt:8},children:[(0,s.jsxs)(r.Z,{variant:"main14",sx:{mt:2,display:"flex",alignItems:"center",gap:"10px"},children:[(0,s.jsx)(s.Fragment,{children:"SPACE ADDRESS"}),(0,s.jsx)(l.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",width:20,height:20,borderRadius:"50%",p:0,minWidth:0},onClick:()=>{navigator.clipboard.writeText("".concat(null==n?void 0:n.spaceAddress)),(0,p.L)(!0,"Copy successful.")},children:(0,s.jsx)(x.Z,{sx:{fontSize:"16px"}})})]}),(0,s.jsxs)(r.Z,{variant:"secondary16",color:"text.secondary",sx:{display:"flex",alignItems:"center",gap:"10px"},children:[(0,s.jsx)(s.Fragment,{children:null==n?void 0:n.spaceAddress}),(0,s.jsx)(m(),{target:"_blank",href:"".concat(v.zG[v.KY].blockExplorerUrls[0],"/address/").concat(null==n?void 0:n.spaceAddress),children:(0,s.jsx)(l.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",width:20,height:20,borderRadius:"50%",p:0,minWidth:0},children:(0,s.jsx)(h.Z,{sx:{fontSize:"16px"}})})})]}),(0,s.jsx)(c.Z,{sx:{mt:0,mb:2}}),(0,s.jsxs)(r.Z,{variant:"main14",sx:{mt:2,display:"flex",alignItems:"center",gap:"10px"},children:[(0,s.jsx)(s.Fragment,{children:"CREATOR"}),(0,s.jsx)(l.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",width:20,height:20,borderRadius:"50%",p:0,minWidth:0},onClick:()=>{navigator.clipboard.writeText("".concat(null==n?void 0:n.spaceCreator)),(0,p.L)(!0,"Copy successful.")},children:(0,s.jsx)(x.Z,{sx:{fontSize:"16px"}})})]}),(0,s.jsxs)(r.Z,{variant:"secondary16",color:"text.secondary",sx:{display:"flex",alignItems:"center",gap:"10px"},children:[(0,s.jsx)(s.Fragment,{children:null==n?void 0:n.spaceCreator}),(0,s.jsx)(m(),{target:"_blank",href:"".concat(v.zG[v.KY].blockExplorerUrls[0],"/address/").concat(null==n?void 0:n.spaceCreator),children:(0,s.jsx)(l.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",width:20,height:20,borderRadius:"50%",p:0,minWidth:0},children:(0,s.jsx)(h.Z,{sx:{fontSize:"16px"}})})})]}),(0,s.jsx)(c.Z,{sx:{mt:0,mb:2}}),(0,s.jsx)(r.Z,{variant:"main14",sx:{mt:2,display:"flex",alignItems:"center",gap:"10px"},children:"SPACE ASSET"}),(0,s.jsxs)(r.Z,{variant:"secondary16",color:"text.secondary",children:["#",null==n?void 0:n.assetId]}),(0,s.jsxs)(o.Z,{severity:"info",sx:{mt:"24px",mb:"6px"},children:[(0,s.jsx)(s.Fragment,{children:"Space revenue will be shared among holders of this asset."}),(0,s.jsx)("br",{}),(0,s.jsx)(m(),{href:"/asset-overview?assetid=".concat(null==n?void 0:n.assetId),onClick:()=>f(),children:"View in asset page"})]})]})]})})}},10084:function(e,t,n){n.d(t,{L:function(){return i},V:function(){return r}}),n(67294);var s=n(55678);function i(e,t){e?s.Am.success(t,{autoClose:5e3,position:"top-right",theme:"light",closeOnClick:!0,style:{borderRadius:"6px"}}):s.Am.error("".concat(t),{autoClose:2500,position:"top-right",theme:"light",closeOnClick:!0,style:{borderRadius:"6px"}})}function r(e,t){e?s.Am.success(t,{autoClose:5e3,position:"top-right",theme:"light",closeOnClick:!0,style:{borderRadius:"6px"}}):s.Am.error("".concat(t),{autoClose:2500,position:"top-right",theme:"light",closeOnClick:!0,style:{borderRadius:"6px"}})}},47781:function(e,t,n){n.d(t,{R:function(){return i}});var s=n(64529);let i=(0,s.Ue)(e=>({setTempAssetModal(t){e({tempAssetModal:t})},setTempSpaceModal(t){e({tempSpaceModal:t})},setTempSelectMemuIndex(t){e({tempSelectMemuIndex:t})}}))}}]);