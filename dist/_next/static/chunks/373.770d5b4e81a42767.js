"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[373],{53345:function(e,t,n){n.d(t,{H:function(){return c}});var a=n(82729),r=n(85893),i=n(67294),s=n(59608),l=n(45098);function o(){let e=(0,a._)(["\n  display: flex;\n  max-width: 100%;\n"]);return o=function(){return e},e}let c=i.forwardRef(function(e,t){return(0,r.jsx)(s.I,{slots:{root:x,input:"input",textarea:u},...e,ref:t})}),d={50:"#F3F6F9",100:"#E5EAF2",200:"#DAE2ED",300:"#C7D0DD",400:"#B0B8C4",500:"#9DA8B7",600:"#6B7A90",700:"#434D5B",800:"#303740",900:"#1C2025"},x=(0,l.Z)("div")(o()),u=(0,l.Z)("textarea",{shouldForwardProp:e=>!["ownerState","minRows","maxRows"].includes(e.toString())})(e=>{let{theme:t}=e;return"\n  width: 100%;\n  font-family: 'IBM Plex Sans', sans-serif;\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.5rem;\n  padding: 8px 12px;\n  border-radius: 4px 4px 0 4px;\n  color: ".concat((t.palette.mode,d[900]),";\n  background: ").concat((t.palette.mode,"#f2f2f2"),";\n  border: 1px solid ").concat((t.palette.mode,d[200]),";\n \n\n  &:hover {\n    border-color: ").concat(d[400],";\n  }\n\n  &:focus {\n    border-color: ").concat(d[400],"; \n  }\n\n  // firefox\n  &:focus-visible {\n    outline: 0;\n  }\n")})},85373:function(e,t,n){n.r(t),n.d(t,{UserinfoModal:function(){return G}});var a=n(85893),r=n(67294),i=n(5616),s=n(15861),l=n(69417),o=n(87952),c=n(98456),d=n(76770),x=n.n(d),u=n(87066),h=n(47386),f=n.n(h),p=n(82084),m=n(56836),g=n(13950),j=n(64032),y=n(31065),v=n(5297),Z=n(45098),w=n(22760);let C=r.forwardRef(function(e,t){let{getRootProps:n,getInputProps:r}=(0,v.G)(e),i=r();return i.ref=(0,w.Z)(i.ref,t),(0,a.jsx)("div",{...n(),children:(0,a.jsx)(S,{...e,...i})})}),b={50:"#F3F6F9",100:"#E5EAF2",200:"#DAE2ED",300:"#C7D0DD",400:"#B0B8C4",500:"#9DA8B7",600:"#6B7A90",700:"#434D5B",800:"#303740",900:"#1C2025"},S=(0,Z.Z)("input")(e=>{let{theme:t}=e;return" \n  font-family: 'IBM Plex Sans', sans-serif;\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.5;\n  padding: 8px 12px;\n  border-radius: 4px;\n  color: ".concat((t.palette.mode,b[900]),";\n  background: ").concat((t.palette.mode,"#fff"),";\n  border: 1px solid ").concat((t.palette.mode,b[200]),";\n \n  &:hover {\n    border-color: ").concat(b[400],";\n  }\n\n  &:focus {\n    border-color: ").concat(b[400],"; \n  }\n\n  // firefox\n  &:focus-visible {\n    outline: 0;\n  }\n")});var F=n(10084),I=n(81458),D=n(67720),L=n(53345),A=n(76172),M=n(60888),k=n(74187),T=n(77294),E=n(2593),N=n(91783),B=n(61085),P=n(93619),R=n(19215),z=n(11163);let U=()=>{let{type:e,close:t,setType:n}=(0,j.a)(),{signer:o,account:d,getBodhiUserAssets:x,getBodhiAssets:h,fetchArweaveData:f,spaceUserInfo:p}=(0,y.Yh)(),{refetchSpaceUserData:m}=(0,R.n)(),v=(0,z.useRouter)(),[Z,w]=(0,r.useState)(""),[b,S]=(0,r.useState)(""),[U,W]=(0,r.useState)(0),[O,_]=(0,r.useState)(0),[H,G]=(0,r.useState)(""),[Y,K]=(0,r.useState)(),[$,J]=(0,r.useState)(!1),[Q,V]=(0,r.useState)(!1);async function X(){if(!Z||""===Z){(0,F.L)(!1,"Please enter a space name.");return}if(Z.length>32){(0,F.L)(!1,"Maximum space name length is 32 strings.");return}if(!b||""===b){(0,F.L)(!1,"Please enter a description.");return}W(1)}async function q(){if(W(2),_(0),J(!0),""!==H&&H)setTimeout(()=>{ee(H)},500);else try{let e=await u.Z.post(k.zA.api_text,{text:b});200===e.status?(G(e.data.transactionId),ee(e.data.transactionId)):((0,F.L)(!1,"Upload failed. Please try again."),J(!1))}catch(e){console.error("Error uploading text:",e),J(!1)}let e=setInterval(()=>{_(e=>Math.min(e+20*Math.random(),100))},100);return()=>{clearInterval(e)}}async function ee(e){if(!e||""==e)return;J(!0);let t=k.TT[k.KY].bodhi,n=new T.CH(t,N,o);try{let a={from:d,to:t,value:E.O$.from(0),data:n.interface.encodeFunctionData("create",[e])},r=await n.provider.estimateGas(a);console.log("gasLimit:",r.toNumber());let i=null==o?void 0:o.sendTransaction({...a,gasLimit:r});null==i||i.then(e=>{e.wait().then(e=>{1===e.status?((0,F.L)(!0,"Bodhi Asset Created."),setTimeout(()=>{et()},500)):((0,F.L)(!1,"Signature failure."),J(!1))}).catch(e=>{J(!1),(0,F.L)(!1,e.reason)})}).catch(e=>{J(!1),(0,F.L)(!1,e.reason)})}catch(e){console.log({error:e}),J(!1),-32603===e.code&&-32015==e.data.code?(0,F.L)(!1,"Insufficient funds for gas."):"execution reverted: Asset already exists"==e.reason.toString()?et():(0,F.L)(!1,"Signature failure.")}}async function et(){if(!Z||""===Z){(0,F.L)(!1,"Please enter a space name.");return}W(3),J(!0);let e=await x(d);if(K(e),!e&&0!==e){(0,F.L)(!1,"Refresh and try again.");return}let t=k.TT[k.KY].spaceFactory,n=new T.CH(t,B,o),a={from:d,to:t,value:E.O$.from(0),data:n.interface.encodeFunctionData("create",[e,Z])},r=await n.provider.estimateGas(a);console.log("gasLimit:",r.toNumber());let i=null==o?void 0:o.sendTransaction({...a,gasLimit:r});null==i||i.then(e=>{e.wait().then(e=>{1===e.status?((0,F.L)(!0,"Space Created."),en()):(0,F.L)(!1,"Signature failure."),J(!1)}).catch(()=>{J(!1)})}).catch(()=>{J(!1)})}async function en(){m&&m(),setTimeout(()=>{W(4)},1500)}return(0,r.useEffect)(()=>{p&&p.spaceName&&w(p.spaceName),(async()=>{if(d){let e=await x(d);if(e||0==e){K(e);let t=await h(null!=e?e:-1);if(t){G(t.arTxId),V(!0);let e=await f(t.arTxId);S(null!=e?e:"")}}else Q&&V(!1)}})()},[p,d]),(0,a.jsxs)(i.Z,{children:[0==U&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(g.E,{title:"Create a Space"}),(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(s.Z,{variant:"secondary16",color:"text.secondary",children:"Space Name"}),(0,a.jsx)(C,{style:{width:"100%"},value:Z,onChange:e=>{w(e.target.value)}})]}),(0,a.jsxs)(i.Z,{sx:{mt:2},children:[(0,a.jsx)(s.Z,{variant:"secondary16",color:"text.secondary",children:"Description"}),(0,a.jsx)(L.H,{multiline:!0,style:{width:"100%"},value:b,onChange:e=>{S(e.target.value)},rows:4})]}),(0,a.jsxs)(i.Z,{sx:{mt:8,display:"flex",justifyContent:"right",gap:4},children:[(0,a.jsx)(l.Z,{variant:"outlined",onClick:()=>{t()},sx:{minWidth:"90px"},children:(0,a.jsx)(s.Z,{variant:"buttonM",children:(0,a.jsx)(a.Fragment,{children:"Cancel"})})}),(0,a.jsx)(l.Z,{variant:"outlined_2",onClick:()=>{X()},sx:{minWidth:"90px"},children:(0,a.jsx)(s.Z,{variant:"buttonM",children:(0,a.jsx)(a.Fragment,{children:"Preview"})})})]})]}),1==U&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(g.E,{title:"Space Preview"}),(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(s.Z,{sx:{mb:1.5},color:"text.secondary",children:"Space Name"}),(0,a.jsx)(s.Z,{variant:"h4",component:"div",children:Z}),(0,a.jsxs)(i.Z,{sx:{mt:4},children:[(0,a.jsx)(s.Z,{sx:{mb:1.5},color:"text.secondary",children:"Description"}),(0,a.jsx)(s.Z,{variant:"secondary14",children:(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:b.replace(/\n/g,"<br />")}})})]})]}),(0,a.jsxs)(i.Z,{sx:{mt:8,display:"flex",justifyContent:"right",gap:4},children:[(0,a.jsx)(l.Z,{variant:"outlined",onClick:()=>{W(0)},sx:{minWidth:"90px"},startIcon:(0,a.jsx)(A.Z,{}),children:(0,a.jsx)(s.Z,{variant:"buttonM",children:(0,a.jsx)(a.Fragment,{children:"Back "})})}),(0,a.jsx)(l.Z,{variant:"surface",onClick:()=>{Q?et():q()},sx:{minWidth:"90px"},children:(0,a.jsx)(s.Z,{variant:"buttonM",children:(0,a.jsx)(a.Fragment,{children:"Confirm Create"})})})]})]}),2==U&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(g.E,{title:"Create Space"}),(0,a.jsx)(i.Z,{children:(0,a.jsx)(i.Z,{sx:{width:"100%"},children:100!=O?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(I.Z,{variant:"determinate",value:O})}):(0,a.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,a.jsxs)(s.Z,{variant:"main16",sx:{display:"flex",alignItems:"center",gap:"10px"},children:[(0,a.jsx)(M.Z,{sx:{color:"#78e378"}}),(0,a.jsx)(a.Fragment,{children:"Uploaded"})]}),(0,a.jsxs)(s.Z,{variant:"secondary14",color:"text.secondary",children:["Arweave ID: ",H]}),(0,a.jsx)(D.Z,{sx:{mt:2,mb:2}}),(0,a.jsx)(s.Z,{variant:"secondary16",color:"text.primary",children:"Creating Bodhi Asset..."})]})})}),(0,a.jsxs)(i.Z,{sx:{mt:8,display:"flex",justifyContent:"right",gap:4},children:[(0,a.jsx)(l.Z,{variant:"outlined",onClick:()=>{W(1)},sx:{minWidth:"90px"},startIcon:(0,a.jsx)(A.Z,{}),children:(0,a.jsx)(s.Z,{variant:"buttonM",children:(0,a.jsx)(a.Fragment,{children:"Back"})})}),(0,a.jsx)(l.Z,{variant:"surface",onClick:()=>{ee(H)},sx:{minWidth:"90px"},disabled:$,startIcon:$&&(0,a.jsx)(c.Z,{size:14}),children:(0,a.jsx)(s.Z,{variant:"buttonM",children:(0,a.jsx)(a.Fragment,{children:$?"Signing":"Sign"})})})]})]}),3==U&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(g.E,{title:"Create Space"}),(0,a.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,a.jsxs)(s.Z,{variant:"main16",sx:{display:"flex",alignItems:"center",gap:"10px"},children:[(0,a.jsx)(M.Z,{sx:{color:"#78e378"}}),(0,a.jsx)(a.Fragment,{children:"Uploaded"})]}),(0,a.jsxs)(s.Z,{variant:"secondary14",color:"text.secondary",children:["Arweave ID: ",H]}),(0,a.jsx)(D.Z,{sx:{mt:2,mb:2}}),(0,a.jsxs)(s.Z,{variant:"main16",sx:{mt:4,display:"flex",alignItems:"center",gap:"10px"},children:[(0,a.jsx)(M.Z,{sx:{color:"#78e378"}}),(0,a.jsx)(a.Fragment,{children:"Bodhi Asset Created"})]}),(0,a.jsxs)(s.Z,{variant:"secondary14",color:"text.secondary",children:["Asset lD: ",Y]}),(0,a.jsx)(D.Z,{sx:{mt:2,mb:2}}),(0,a.jsx)(s.Z,{variant:"secondary16",color:"text.primary",children:"Creating Space..."})]}),(0,a.jsxs)(i.Z,{sx:{mt:8,display:"flex",justifyContent:"right",gap:4},children:[(0,a.jsx)(l.Z,{variant:"outlined",onClick:()=>{W(2)},sx:{minWidth:"90px"},startIcon:(0,a.jsx)(A.Z,{}),children:(0,a.jsx)(s.Z,{variant:"buttonM",children:(0,a.jsx)(a.Fragment,{children:"Back"})})}),(0,a.jsx)(l.Z,{variant:"surface",onClick:()=>{et()},sx:{minWidth:"90px"},disabled:$,startIcon:$&&(0,a.jsx)(c.Z,{size:14}),children:(0,a.jsx)(s.Z,{variant:"buttonM",children:(0,a.jsx)(a.Fragment,{children:$?"Signing":"Sign"})})})]})]}),4==U&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(g.E,{title:" "}),(0,a.jsxs)(s.Z,{variant:"h2",sx:{pt:8,pb:8,textAlign:"center"},children:["Space #",null==p?void 0:p.spaceId,"  ",Z]}),(0,a.jsx)(i.Z,{sx:{mt:8,display:"flex",justifyContent:"center"},children:(0,a.jsx)(l.Z,{variant:"surface",onClick:()=>{v.push("/space-overview?address=".concat(d)),t()},sx:{minWidth:"90px"},disabled:$,endIcon:(0,a.jsx)(P.Z,{}),children:"Enter My Space"})})]})]})};var W=n(75071),O=n(35553),_=n(47726),H=n(46154);let G=()=>{f().init({});let{type:e,close:t,setType:n}=(0,j.a)(),[d,h]=(0,r.useState)(!1),[v,Z]=(0,r.useState)(!1),[w,b]=(0,r.useState)(!1),[S,I]=(0,r.useState)(""),[D,L]=(0,r.useState)(""),[A,M]=(0,r.useState)(""),[N,P]=(0,r.useState)(null),[z,G]=(0,r.useState)(null),{spaceUserInfo:Y,account:K,signer:$}=(0,y.Yh)(),{refetchSpaceUserData:J}=(0,R.n)(),Q=(0,r.useMemo)(()=>(0,H.fO)(Y),[Y]);async function V(){try{let e=k.TT[k.KY].spaceFactory,t=new T.CH(e,B,$),n={from:K,to:e,value:E.O$.from(0),data:t.interface.encodeFunctionData("updateSpaceName",[S])},a=await t.provider.estimateGas(n);console.log("gasLimit:",a.toNumber());let r=null==$?void 0:$.sendTransaction({...n,gasLimit:a});null==r||r.then(e=>{e.wait().then(e=>{1===e.status?(J&&J(),(0,F.L)(!0,"Space name updated successfully.")):(0,F.L)(!1,"Signature failure."),h(!1)}).catch(()=>{h(!1)})}).catch(()=>{})}catch(e){}}let{avatar:X,spacename:q}=(0,r.useMemo)(()=>(0,_.Dm)(K,Y),[K,Y]),ee={x:0,y:0,width:200,height:200,unit:"px"},[et,en]=(0,r.useState)(ee),[ea,er]=(0,r.useState)(ee),ei=(0,r.useRef)(null),es=e=>{ei.current=e},el=(e,t)=>{let n=document.createElement("canvas"),a=e.naturalWidth/e.width,r=e.naturalHeight/e.height;n.width=t.width,n.height=t.height;let i=n.getContext("2d");return i?(i.drawImage(e,t.x*a,t.y*r,t.width*a,t.height*r,0,0,t.width,t.height),new Promise(e=>{n.toBlob(t=>{if(t){let n=new File([t],"croppedImage.jpg",{type:"image/jpeg"});e(n)}},"image/jpeg")})):Promise.reject(Error("Failed to crop image"))},eo=async e=>{if(e.preventDefault(),!N||!ea||!ei.current){(0,F.L)(!1,"Please select and crop an image to upload.");return}b(!0);try{let e=await el(ei.current,ea);e.size<1e4?ec(e):x().imageFileResizer(e,200,200,"JPEG",100,0,async e=>{e instanceof File&&ec(e)},"file")}catch(e){console.error("Error uploading file:",e),(0,F.L)(!1,"Error uploading file.")}};async function ec(e){let t=new FormData;t.append("file",e);let n=await u.Z.post(k.zA.api_media,t,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:e=>{}});200===n.status?(M(n.data.transactionId),ed(n.data.transactionId)):((0,F.L)(!1,"Upload failed. Please try again."),b(!1))}async function ed(e){if(e)try{let t=k.TT[k.KY].spaceFactory,n=new T.CH(t,B,$),a=O.fi("0.1"),r={from:K,to:t,value:a,data:n.interface.encodeFunctionData("uploadAvatar",[e])},i=await n.provider.estimateGas(r);console.log("gasLimit:",i.toNumber());let s=null==$?void 0:$.sendTransaction({...r,gasLimit:i});null==s||s.then(e=>{e.wait().then(e=>{1===e.status?(J&&J(),(0,F.L)(!0,"Avatar uploaded successfully.")):(0,F.L)(!1,"Signature failure."),Z(!1),b(!1),G(null)}).catch(e=>{b(!1),Z(!1),(0,F.L)(!1,e.reason)})}).catch(e=>{b(!1),Z(!1),(0,F.L)(!1,e.reason)})}catch(e){b(!1),Z(!1),-32603===e.code&&-32015==e.data.code?(0,F.L)(!1,"Insufficient funds for gas."):(0,F.L)(!1,"Signature failure.")}}return(0,a.jsx)(m.P,{open:e===j.w.UserInfo,setOpen:function(){h(!1),b(!1),Z(!1),G(null),t()},contentMaxWidth:520,children:(0,a.jsx)(i.Z,{sx:{display:"flex",flexDirection:"column"},children:Q?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(g.E,{title:"Account"}),(0,a.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column",gap:6},children:[(0,a.jsxs)(i.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)(s.Z,{variant:"secondary16",color:"text.secondary",children:"Space Id"}),(0,a.jsx)(i.Z,{children:(0,a.jsxs)(s.Z,{variant:"secondary16",color:"text.primary",sx:{paddingRight:10},children:["# ",null==Y?void 0:Y.spaceId]})})]}),(0,a.jsxs)(i.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)(s.Z,{variant:"secondary16",color:"text.secondary",children:"Space Name"}),(0,a.jsx)(i.Z,{sx:{display:"flex",gap:6,alignItems:"center"},children:d?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(C,{style:{width:"100%"},value:S,onChange:e=>{I(e.target.value)}}),(0,a.jsx)(l.Z,{variant:"outlined",onClick:()=>{V()},children:"Save"})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,{variant:"secondary16",color:"text.primary",children:null==Y?void 0:Y.spaceName}),(0,a.jsxs)("span",{onClick:()=>{h(!0),I(null==Y?void 0:Y.spaceName)},children:[" ",(0,a.jsx)(W.Z,{fontSize:"small",sx:{color:"#75cedb"}})]})]})})]}),(0,a.jsxs)(i.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)(s.Z,{variant:"secondary16",color:"text.secondary",children:"Avatar"}),(0,a.jsx)(i.Z,{sx:{display:"flex",gap:6,alignItems:"center"},children:v?(0,a.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center",gap:2},children:[(0,a.jsxs)("div",{className:"file-upload-container",children:[(0,a.jsx)("label",{htmlFor:"file-upload",className:"file-upload-label",children:"Choose File"}),(0,a.jsx)("input",{id:"file-upload",type:"file",onChange:e=>{if(e.target.files&&e.target.files.length>0){let t=e.target.files[0];G(URL.createObjectURL(t)),P(t)}},style:{display:"none"}})]}),(0,a.jsx)(l.Z,{variant:"surface",onClick:eo,sx:{minWidth:"90px"},disabled:!z||w,startIcon:w&&(0,a.jsx)(c.Z,{size:14}),children:(0,a.jsx)(s.Z,{variant:"buttonM",children:(0,a.jsx)(a.Fragment,{children:"Upload"})})})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,{alt:"",src:X}),(0,a.jsxs)("span",{onClick:()=>{Z(!0)},children:[" ",(0,a.jsx)(W.Z,{fontSize:"small",sx:{color:"#75cedb"}})]})]})})]}),(0,a.jsx)(i.Z,{children:z&&(0,a.jsx)("div",{className:"image-preview",children:(0,a.jsx)(p.ZP,{aspect:1,crop:et,onComplete:e=>{er(e)},onChange:e=>en(e),children:(0,a.jsx)("img",{src:z,alt:"Preview",onLoad:e=>es(e.currentTarget)})})})})]})]}):(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(U,{})})})})}},10084:function(e,t,n){n.d(t,{L:function(){return r},V:function(){return i}}),n(67294);var a=n(55678);function r(e,t){e?a.Am.success(t,{autoClose:5e3,position:"top-right",theme:"light",closeOnClick:!0,style:{borderRadius:"6px"}}):a.Am.error("".concat(t),{autoClose:2500,position:"top-right",theme:"light",closeOnClick:!0,style:{borderRadius:"6px"}})}function i(e,t){e?a.Am.success(t,{autoClose:5e3,position:"top-right",theme:"light",closeOnClick:!0,style:{borderRadius:"6px"}}):a.Am.error("".concat(t),{autoClose:2500,position:"top-right",theme:"light",closeOnClick:!0,style:{borderRadius:"6px"}})}},46154:function(e,t,n){n.d(t,{Q1:function(){return i},fO:function(){return s}});var a=n(25733),r=n(74187);async function i(e){let t=new a.r(r.zG[r.KY].urls[0]),n=await t.getTransaction(e);return n}function s(e){return!!e&&!!e.spaceAddress&&""!=e.spaceAddress&&"0x0000000000000000000000000000000000000000"!=e.spaceAddress&&!!e.spaceName}},47726:function(e,t,n){n.d(t,{Dm:function(){return l},Xe:function(){return s},i$:function(){return o}});var a=n(11288),r=n.n(a),i=n(74187);let s=(e,t,n)=>e&&""!==e?"".concat(e.substr(0,t),"...").concat(e.substr(e.length-n,e.length)):"",l=(e,t)=>{let n=t&&t.avatarArTxId?"".concat(i.zA.ar_url).concat(null==t?void 0:t.avatarArTxId):e?r()(e):"/icons/img/user.jpg",a=t&&t.spaceName?t.spaceName:s(e,4,4);return{avatar:n,spacename:a}},o=e=>{let t=Date.now()/1e3,n=t-e;if(n<0){let t=Math.abs(n);if(t<60)return"".concat(Math.floor(t),"s from now");if(t<3600)return"".concat(Math.floor(t/60),"m from now");{if(t<86400)return"".concat(Math.floor(t/3600),"h from now");let n=new Date(1e3*e),a=new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"});return"on ".concat(a.format(n))}}if(n<60)return"".concat(Math.floor(n),"s ago");if(n<3600)return"".concat(Math.floor(n/60),"m ago");{if(n<86400)return"".concat(Math.floor(n/3600),"h ago");let t=new Date(1e3*e),a=new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"});return a.format(t)}}}}]);