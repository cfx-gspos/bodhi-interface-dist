"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[810],{12879:function(e,t,i){i.d(t,{d:function(){return o}});var n=i(8027);let r="base";function o(e,t){let i=n._v[t];return i?`${r}--${i}`:`${r}-${e}-${t}`}},19416:function(e,t,i){i.d(t,{s:function(){return r}});var n=i(12879);function r(e,t){let i={};return t.forEach(t=>{i[t]=(0,n.d)(e,t)}),i}},31873:function(e,t,i){i.d(t,{T:function(){return o}});var n=i(67294);i(85893);let r=n.createContext({disableDefaultClasses:!1});function o(e){let{disableDefaultClasses:t}=n.useContext(r);return i=>t?"":e(i)}},93619:function(e,t,i){var n=i(64836);t.Z=void 0;var r=n(i(64938)),o=i(85893);t.Z=(0,r.default)((0,o.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward")},75071:function(e,t,i){var n=i(64836);t.Z=void 0;var r=n(i(64938)),o=i(85893);t.Z=(0,r.default)((0,o.jsx)("path",{d:"M22 24H2v-4h20zM13.06 5.19l3.75 3.75L7.75 18H4v-3.75zm4.82 2.68-3.75-3.75 1.83-1.83c.39-.39 1.02-.39 1.41 0l2.34 2.34c.39.39.39 1.02 0 1.41z"}),"BorderColor")},64938:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=i(82564)},67720:function(e,t,i){var n=i(63366),r=i(87462),o=i(67294),a=i(90512),h=i(58510),l=i(2101),s=i(90948),d=i(33616),c=i(35097),u=i(85893);let p=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],g=e=>{let{absolute:t,children:i,classes:n,flexItem:r,light:o,orientation:a,textAlign:l,variant:s}=e;return(0,h.Z)({root:["root",t&&"absolute",s,o&&"light","vertical"===a&&"vertical",r&&"flexItem",i&&"withChildren",i&&"vertical"===a&&"withChildrenVertical","right"===l&&"vertical"!==a&&"textAlignRight","left"===l&&"vertical"!==a&&"textAlignLeft"],wrapper:["wrapper","vertical"===a&&"wrapperVertical"]},c.V,n)},w=(0,s.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,i.absolute&&t.absolute,t[i.variant],i.light&&t.light,"vertical"===i.orientation&&t.vertical,i.flexItem&&t.flexItem,i.children&&t.withChildren,i.children&&"vertical"===i.orientation&&t.withChildrenVertical,"right"===i.textAlign&&"vertical"!==i.orientation&&t.textAlignRight,"left"===i.textAlign&&"vertical"!==i.orientation&&t.textAlignLeft]}})(({theme:e,ownerState:t})=>(0,r.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,l.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:e})=>(0,r.Z)({},e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:e,ownerState:t})=>(0,r.Z)({},t.children&&"vertical"!==t.orientation&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`}}),({theme:e,ownerState:t})=>(0,r.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(e.vars||e).palette.divider}`}}),({ownerState:e})=>(0,r.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),m=(0,s.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.wrapper,"vertical"===i.orientation&&t.wrapperVertical]}})(({theme:e,ownerState:t})=>(0,r.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})),f=o.forwardRef(function(e,t){let i=(0,d.Z)({props:e,name:"MuiDivider"}),{absolute:o=!1,children:h,className:l,component:s=h?"div":"hr",flexItem:c=!1,light:f=!1,orientation:v="horizontal",role:x="hr"!==s?"separator":void 0,textAlign:y="center",variant:C="fullWidth"}=i,D=(0,n.Z)(i,p),b=(0,r.Z)({},i,{absolute:o,component:s,flexItem:c,light:f,orientation:v,role:x,textAlign:y,variant:C}),R=g(b);return(0,u.jsx)(w,(0,r.Z)({as:s,className:(0,a.Z)(R.root,l),role:x,ref:t,ownerState:b},D,{children:h?(0,u.jsx)(m,{className:R.wrapper,ownerState:b,children:h}):null}))});f.muiSkipListHighlight=!0,t.Z=f},35097:function(e,t,i){i.d(t,{V:function(){return o}});var n=i(1977),r=i(8027);function o(e){return(0,r.ZP)("MuiDivider",e)}let a=(0,n.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=a},57144:function(e,t,i){var n=i(86145);t.Z=n.Z},82564:function(e,t,i){i.r(t),i.d(t,{capitalize:function(){return r.Z},createChainedFunction:function(){return o},createSvgIcon:function(){return a.Z},debounce:function(){return h.Z},deprecatedPropType:function(){return l},isMuiElement:function(){return d},ownerDocument:function(){return c.Z},ownerWindow:function(){return u.Z},requirePropFactory:function(){return p},setRef:function(){return g},unstable_ClassNameGenerator:function(){return D},unstable_useEnhancedEffect:function(){return w.Z},unstable_useId:function(){return m.Z},unsupportedProp:function(){return f},useControlled:function(){return v.Z},useEventCallback:function(){return x.Z},useForkRef:function(){return y.Z},useIsFocusVisible:function(){return C.Z}});var n=i(31983),r=i(98216),o=i(15725).Z,a=i(82066),h=i(57144),l=function(e,t){return()=>null},s=i(67294),d=function(e,t){var i,n;return s.isValidElement(e)&&-1!==t.indexOf(null!=(i=e.type.muiName)?i:null==(n=e.type)||null==(n=n._payload)||null==(n=n.value)?void 0:n.muiName)},c=i(8038),u=i(5340);i(87462);var p=function(e,t){return()=>null},g=i(25091).Z,w=i(58974),m=i(68046),f=function(e,t,i,n,r){return null},v=i(37388),x=i(2068),y=i(51705),C=i(39632);let D={configure:e=>{n.Z.configure(e)}}},8038:function(e,t,i){var n=i(36425);t.Z=n.Z},5340:function(e,t,i){var n=i(96613);t.Z=n.Z},37388:function(e,t,i){i.d(t,{Z:function(){return r}});var n=i(67294),r=function({controlled:e,default:t,name:i,state:r="value"}){let{current:o}=n.useRef(void 0!==e),[a,h]=n.useState(t),l=o?e:a,s=n.useCallback(e=>{o||h(e)},[]);return[l,s]}},58974:function(e,t,i){var n=i(54895);t.Z=n.Z},68046:function(e,t,i){i.d(t,{Z:function(){return h}});var n=i(67294),r=i.t(n,2);let o=0,a=r["useId".toString()];var h=function(e){if(void 0!==a){let t=a();return null!=e?e:t}return function(e){let[t,i]=n.useState(e),r=e||t;return n.useEffect(()=>{null==t&&i(`mui-${o+=1}`)},[t]),r}(e)}},86145:function(e,t,i){i.d(t,{Z:function(){return n}});function n(e,t=166){let i;function n(...r){clearTimeout(i),i=setTimeout(()=>{e.apply(this,r)},t)}return n.clear=()=>{clearTimeout(i)},n}},82084:function(e,t,i){i.d(t,{ZP:function(){return g}});var n=i(67294);let r={x:0,y:0,width:0,height:0,unit:"px"},o=(e,t,i)=>Math.min(Math.max(e,t),i),a=(...e)=>e.filter(e=>e&&"string"==typeof e).join(" "),h=(e,t)=>e===t||e.width===t.width&&e.height===t.height&&e.x===t.x&&e.y===t.y&&e.unit===t.unit;function l(e,t,i){return"%"===e.unit?{...r,...e,unit:"%"}:{unit:"%",x:e.x?e.x/t*100:0,y:e.y?e.y/i*100:0,width:e.width?e.width/t*100:0,height:e.height?e.height/i*100:0}}function s(e,t,i){return e.unit?"px"===e.unit?{...r,...e,unit:"px"}:{unit:"px",x:e.x?e.x*t/100:0,y:e.y?e.y*i/100:0,width:e.width?e.width*t/100:0,height:e.height?e.height*i/100:0}:{...r,...e,unit:"px"}}function d(e,t,i,n,r,o=0,a=0,h=n,l=r){let s={...e},d=Math.min(o,n),c=Math.min(a,r),u=Math.min(h,n),p=Math.min(l,r);t&&(t>1?(c=(d=a?a*t:d)/t,u=h*t):(d=(c=o?o/t:c)*t,p=l/t)),s.y<0&&(s.height=Math.max(s.height+s.y,c),s.y=0),s.x<0&&(s.width=Math.max(s.width+s.x,d),s.x=0);let g=n-(s.x+s.width);g<0&&(s.x=Math.min(s.x,n-d),s.width+=g);let w=r-(s.y+s.height);if(w<0&&(s.y=Math.min(s.y,r-c),s.height+=w),s.width<d&&(("sw"===i||"nw"==i)&&(s.x-=d-s.width),s.width=d),s.height<c&&(("nw"===i||"ne"==i)&&(s.y-=c-s.height),s.height=c),s.width>u&&(("sw"===i||"nw"==i)&&(s.x-=u-s.width),s.width=u),s.height>p&&(("nw"===i||"ne"==i)&&(s.y-=p-s.height),s.height=p),t){let e=s.width/s.height;if(e<t){let e=Math.max(s.width/t,c);("nw"===i||"ne"==i)&&(s.y-=e-s.height),s.height=e}else if(e>t){let e=Math.max(s.height*t,d);("sw"===i||"nw"==i)&&(s.x-=e-s.width),s.width=e}}return s}let c={capture:!0,passive:!1},u=0,p=class e extends n.PureComponent{constructor(){super(...arguments),this.docMoveBound=!1,this.mouseDownOnCrop=!1,this.dragStarted=!1,this.evData={startClientX:0,startClientY:0,startCropX:0,startCropY:0,clientX:0,clientY:0,isResize:!0},this.componentRef=(0,n.createRef)(),this.mediaRef=(0,n.createRef)(),this.initChangeCalled=!1,this.instanceId=`rc-${u++}`,this.state={cropIsActive:!1,newCropIsBeingDrawn:!1},this.onCropPointerDown=e=>{let{crop:t,disabled:i}=this.props,n=this.getBox();if(!t)return;let r=s(t,n.width,n.height);if(i)return;e.cancelable&&e.preventDefault(),this.bindDocMove(),this.componentRef.current.focus({preventScroll:!0});let o=e.target.dataset.ord,a=e.clientX,h=e.clientY,l=r.x,d=r.y;if(o){let t=e.clientX-n.x,i=e.clientY-n.y,s=0,c=0;"ne"===o||"e"==o?(s=t-(r.x+r.width),c=i-r.y,l=r.x,d=r.y+r.height):"se"===o||"s"===o?(s=t-(r.x+r.width),c=i-(r.y+r.height),l=r.x,d=r.y):"sw"===o||"w"==o?(s=t-r.x,c=i-(r.y+r.height),l=r.x+r.width,d=r.y):("nw"===o||"n"==o)&&(s=t-r.x,c=i-r.y,l=r.x+r.width,d=r.y+r.height),a=l+n.x+s,h=d+n.y+c}this.evData={startClientX:a,startClientY:h,startCropX:l,startCropY:d,clientX:e.clientX,clientY:e.clientY,isResize:!!o,ord:o},this.mouseDownOnCrop=!0,this.setState({cropIsActive:!0})},this.onComponentPointerDown=e=>{let{crop:t,disabled:i,locked:n,keepSelection:r,onChange:o}=this.props,a=this.getBox();if(i||n||r&&t)return;e.cancelable&&e.preventDefault(),this.bindDocMove(),this.componentRef.current.focus({preventScroll:!0});let h=e.clientX-a.x,d=e.clientY-a.y,c={unit:"px",x:h,y:d,width:0,height:0};this.evData={startClientX:e.clientX,startClientY:e.clientY,startCropX:h,startCropY:d,clientX:e.clientX,clientY:e.clientY,isResize:!0},this.mouseDownOnCrop=!0,o(s(c,a.width,a.height),l(c,a.width,a.height)),this.setState({cropIsActive:!0,newCropIsBeingDrawn:!0})},this.onDocPointerMove=e=>{let t;let{crop:i,disabled:n,onChange:r,onDragStart:o}=this.props,a=this.getBox();if(n||!i||!this.mouseDownOnCrop)return;e.cancelable&&e.preventDefault(),this.dragStarted||(this.dragStarted=!0,o&&o(e));let{evData:d}=this;d.clientX=e.clientX,d.clientY=e.clientY,h(i,t=d.isResize?this.resizeCrop():this.dragCrop())||r(s(t,a.width,a.height),l(t,a.width,a.height))},this.onComponentKeyDown=t=>{let{crop:i,disabled:n,onChange:r,onComplete:a}=this.props;if(n)return;let h=t.key,d=!1;if(!i)return;let c=this.getBox(),u=this.makePixelCrop(c),p=(navigator.platform.match("Mac")?t.metaKey:t.ctrlKey)?e.nudgeStepLarge:t.shiftKey?e.nudgeStepMedium:e.nudgeStep;if("ArrowLeft"===h?(u.x-=p,d=!0):"ArrowRight"===h?(u.x+=p,d=!0):"ArrowUp"===h?(u.y-=p,d=!0):"ArrowDown"===h&&(u.y+=p,d=!0),d){t.cancelable&&t.preventDefault(),u.x=o(u.x,0,c.width-u.width),u.y=o(u.y,0,c.height-u.height);let e=s(u,c.width,c.height),i=l(u,c.width,c.height);r(e,i),a&&a(e,i)}},this.onHandlerKeyDown=(t,i)=>{let{aspect:n=0,crop:r,disabled:o,minWidth:a=0,minHeight:c=0,maxWidth:u,maxHeight:p,onChange:g,onComplete:w}=this.props,m=this.getBox();if(o||!r||"ArrowUp"!==t.key&&"ArrowDown"!==t.key&&"ArrowLeft"!==t.key&&"ArrowRight"!==t.key)return;t.stopPropagation(),t.preventDefault();let f=(navigator.platform.match("Mac")?t.metaKey:t.ctrlKey)?e.nudgeStepLarge:t.shiftKey?e.nudgeStepMedium:e.nudgeStep,v=s(r,m.width,m.height),x=function(e,t,i,n){let r={...e};return"ArrowLeft"===t?"nw"===n?(r.x-=i,r.y-=i,r.width+=i,r.height+=i):"w"===n?(r.x-=i,r.width+=i):"sw"===n?(r.x-=i,r.width+=i,r.height+=i):"ne"===n?(r.y+=i,r.width-=i,r.height-=i):"e"===n?r.width-=i:"se"===n&&(r.width-=i,r.height-=i):"ArrowRight"===t&&("nw"===n?(r.x+=i,r.y+=i,r.width-=i,r.height-=i):"w"===n?(r.x+=i,r.width-=i):"sw"===n?(r.x+=i,r.width-=i,r.height-=i):"ne"===n?(r.y-=i,r.width+=i,r.height+=i):"e"===n?r.width+=i:"se"===n&&(r.width+=i,r.height+=i)),"ArrowUp"===t?"nw"===n?(r.x-=i,r.y-=i,r.width+=i,r.height+=i):"n"===n?(r.y-=i,r.height+=i):"ne"===n?(r.y-=i,r.width+=i,r.height+=i):"sw"===n?(r.x+=i,r.width-=i,r.height-=i):"s"===n?r.height-=i:"se"===n&&(r.width-=i,r.height-=i):"ArrowDown"===t&&("nw"===n?(r.x+=i,r.y+=i,r.width-=i,r.height-=i):"n"===n?(r.y+=i,r.height-=i):"ne"===n?(r.y+=i,r.width-=i,r.height-=i):"sw"===n?(r.x-=i,r.width+=i,r.height+=i):"s"===n?r.height+=i:"se"===n&&(r.width+=i,r.height+=i)),r}(v,t.key,f,i),y=d(x,n,i,m.width,m.height,a,c,u,p);if(!h(r,y)){let e=l(y,m.width,m.height);g(y,e),w&&w(y,e)}},this.onDocPointerDone=e=>{let{crop:t,disabled:i,onComplete:n,onDragEnd:r}=this.props,o=this.getBox();this.unbindDocMove(),!(i||!t)&&this.mouseDownOnCrop&&(this.mouseDownOnCrop=!1,this.dragStarted=!1,r&&r(e),n&&n(s(t,o.width,o.height),l(t,o.width,o.height)),this.setState({cropIsActive:!1,newCropIsBeingDrawn:!1}))},this.onDragFocus=()=>{var e;null==(e=this.componentRef.current)||e.scrollTo(0,0)}}get document(){return document}getBox(){let e=this.mediaRef.current;if(!e)return{x:0,y:0,width:0,height:0};let{x:t,y:i,width:n,height:r}=e.getBoundingClientRect();return{x:t,y:i,width:n,height:r}}componentDidUpdate(e){let{crop:t,onComplete:i}=this.props;if(i&&!e.crop&&t){let{width:e,height:n}=this.getBox();e&&n&&i(s(t,e,n),l(t,e,n))}}componentWillUnmount(){this.resizeObserver&&this.resizeObserver.disconnect()}bindDocMove(){this.docMoveBound||(this.document.addEventListener("pointermove",this.onDocPointerMove,c),this.document.addEventListener("pointerup",this.onDocPointerDone,c),this.document.addEventListener("pointercancel",this.onDocPointerDone,c),this.docMoveBound=!0)}unbindDocMove(){this.docMoveBound&&(this.document.removeEventListener("pointermove",this.onDocPointerMove,c),this.document.removeEventListener("pointerup",this.onDocPointerDone,c),this.document.removeEventListener("pointercancel",this.onDocPointerDone,c),this.docMoveBound=!1)}getCropStyle(){let{crop:e}=this.props;if(e)return{top:`${e.y}${e.unit}`,left:`${e.x}${e.unit}`,width:`${e.width}${e.unit}`,height:`${e.height}${e.unit}`}}dragCrop(){let{evData:e}=this,t=this.getBox(),i=this.makePixelCrop(t),n=e.clientX-e.startClientX,r=e.clientY-e.startClientY;return i.x=o(e.startCropX+n,0,t.width-i.width),i.y=o(e.startCropY+r,0,t.height-i.height),i}getPointRegion(e,t,i,n){let r;let{evData:o}=this,a=o.clientX-e.x,h=o.clientY-e.y;return r=n&&t?"nw"===t||"n"===t||"ne"===t:h<o.startCropY,(i&&t?"nw"===t||"w"===t||"sw"===t:a<o.startCropX)?r?"nw":"sw":r?"ne":"se"}resolveMinDimensions(e,t,i=0,n=0){let r=Math.min(i,e.width),o=Math.min(n,e.height);return t&&(r||o)?t>1?r?[r,r/t]:[o*t,o]:o?[o*t,o]:[r,r/t]:[r,o]}resizeCrop(){let{evData:t}=this,{aspect:i=0,maxWidth:n,maxHeight:r}=this.props,a=this.getBox(),[h,l]=this.resolveMinDimensions(a,i,this.props.minWidth,this.props.minHeight),s=this.makePixelCrop(a),c=this.getPointRegion(a,t.ord,h,l),u=t.ord||c,p=t.clientX-t.startClientX,g=t.clientY-t.startClientY;(h&&"nw"===u||"w"===u||"sw"===u)&&(p=Math.min(p,-h)),(l&&"nw"===u||"n"===u||"ne"===u)&&(g=Math.min(g,-l));let w={unit:"px",x:0,y:0,width:0,height:0};"ne"===c?(w.x=t.startCropX,w.width=p,i?w.height=w.width/i:w.height=Math.abs(g),w.y=t.startCropY-w.height):"se"===c?(w.x=t.startCropX,w.y=t.startCropY,w.width=p,i?w.height=w.width/i:w.height=g):"sw"===c?(w.x=t.startCropX+p,w.y=t.startCropY,w.width=Math.abs(p),i?w.height=w.width/i:w.height=g):"nw"===c&&(w.x=t.startCropX+p,w.width=Math.abs(p),i?(w.height=w.width/i,w.y=t.startCropY-w.height):(w.height=Math.abs(g),w.y=t.startCropY+g));let m=d(w,i,c,a.width,a.height,h,l,n,r);return i||e.xyOrds.indexOf(u)>-1?s=m:e.xOrds.indexOf(u)>-1?(s.x=m.x,s.width=m.width):e.yOrds.indexOf(u)>-1&&(s.y=m.y,s.height=m.height),s.x=o(s.x,0,a.width-s.width),s.y=o(s.y,0,a.height-s.height),s}renderCropSelection(){let{ariaLabels:t=e.defaultProps.ariaLabels,disabled:i,locked:r,renderSelectionAddon:o,ruleOfThirds:a,crop:h}=this.props,l=this.getCropStyle();if(h)return n.createElement("div",{style:l,className:"ReactCrop__crop-selection",onPointerDown:this.onCropPointerDown,"aria-label":t.cropArea,tabIndex:0,onKeyDown:this.onComponentKeyDown,role:"group"},!i&&!r&&n.createElement("div",{className:"ReactCrop__drag-elements",onFocus:this.onDragFocus},n.createElement("div",{className:"ReactCrop__drag-bar ord-n","data-ord":"n"}),n.createElement("div",{className:"ReactCrop__drag-bar ord-e","data-ord":"e"}),n.createElement("div",{className:"ReactCrop__drag-bar ord-s","data-ord":"s"}),n.createElement("div",{className:"ReactCrop__drag-bar ord-w","data-ord":"w"}),n.createElement("div",{className:"ReactCrop__drag-handle ord-nw","data-ord":"nw",tabIndex:0,"aria-label":t.nwDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"nw"),role:"button"}),n.createElement("div",{className:"ReactCrop__drag-handle ord-n","data-ord":"n",tabIndex:0,"aria-label":t.nDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"n"),role:"button"}),n.createElement("div",{className:"ReactCrop__drag-handle ord-ne","data-ord":"ne",tabIndex:0,"aria-label":t.neDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"ne"),role:"button"}),n.createElement("div",{className:"ReactCrop__drag-handle ord-e","data-ord":"e",tabIndex:0,"aria-label":t.eDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"e"),role:"button"}),n.createElement("div",{className:"ReactCrop__drag-handle ord-se","data-ord":"se",tabIndex:0,"aria-label":t.seDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"se"),role:"button"}),n.createElement("div",{className:"ReactCrop__drag-handle ord-s","data-ord":"s",tabIndex:0,"aria-label":t.sDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"s"),role:"button"}),n.createElement("div",{className:"ReactCrop__drag-handle ord-sw","data-ord":"sw",tabIndex:0,"aria-label":t.swDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"sw"),role:"button"}),n.createElement("div",{className:"ReactCrop__drag-handle ord-w","data-ord":"w",tabIndex:0,"aria-label":t.wDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"w"),role:"button"})),o&&n.createElement("div",{className:"ReactCrop__selection-addon",onPointerDown:e=>e.stopPropagation()},o(this.state)),a&&n.createElement(n.Fragment,null,n.createElement("div",{className:"ReactCrop__rule-of-thirds-hz"}),n.createElement("div",{className:"ReactCrop__rule-of-thirds-vt"})))}makePixelCrop(e){let t={...r,...this.props.crop||{}};return s(t,e.width,e.height)}render(){let{aspect:e,children:t,circularCrop:i,className:r,crop:o,disabled:h,locked:l,style:s,ruleOfThirds:d}=this.props,{cropIsActive:c,newCropIsBeingDrawn:u}=this.state,p=o?this.renderCropSelection():null,g=a("ReactCrop",r,c&&"ReactCrop--active",h&&"ReactCrop--disabled",l&&"ReactCrop--locked",u&&"ReactCrop--new-crop",o&&e&&"ReactCrop--fixed-aspect",o&&i&&"ReactCrop--circular-crop",o&&d&&"ReactCrop--rule-of-thirds",!this.dragStarted&&o&&!o.width&&!o.height&&"ReactCrop--invisible-crop",i&&"ReactCrop--no-animate");return n.createElement("div",{ref:this.componentRef,className:g,style:s},n.createElement("div",{ref:this.mediaRef,className:"ReactCrop__child-wrapper",onPointerDown:this.onComponentPointerDown},t),o?n.createElement("svg",{className:"ReactCrop__crop-mask",width:"100%",height:"100%"},n.createElement("defs",null,n.createElement("mask",{id:`hole-${this.instanceId}`},n.createElement("rect",{width:"100%",height:"100%",fill:"white"}),i?n.createElement("ellipse",{cx:`${o.x+o.width/2}${o.unit}`,cy:`${o.y+o.height/2}${o.unit}`,rx:`${o.width/2}${o.unit}`,ry:`${o.height/2}${o.unit}`,fill:"black"}):n.createElement("rect",{x:`${o.x}${o.unit}`,y:`${o.y}${o.unit}`,width:`${o.width}${o.unit}`,height:`${o.height}${o.unit}`,fill:"black"}))),n.createElement("rect",{fill:"black",fillOpacity:.5,width:"100%",height:"100%",mask:`url(#hole-${this.instanceId})`})):void 0,p)}};p.xOrds=["e","w"],p.yOrds=["n","s"],p.xyOrds=["nw","ne","se","sw"],p.nudgeStep=1,p.nudgeStepMedium=10,p.nudgeStepLarge=100,p.defaultProps={ariaLabels:{cropArea:"Use the arrow keys to move the crop selection area",nwDragHandle:"Use the arrow keys to move the north west drag handle to change the crop selection area",nDragHandle:"Use the up and down arrow keys to move the north drag handle to change the crop selection area",neDragHandle:"Use the arrow keys to move the north east drag handle to change the crop selection area",eDragHandle:"Use the up and down arrow keys to move the east drag handle to change the crop selection area",seDragHandle:"Use the arrow keys to move the south east drag handle to change the crop selection area",sDragHandle:"Use the up and down arrow keys to move the south drag handle to change the crop selection area",swDragHandle:"Use the arrow keys to move the south west drag handle to change the crop selection area",wDragHandle:"Use the up and down arrow keys to move the west drag handle to change the crop selection area"}};let g=p}}]);