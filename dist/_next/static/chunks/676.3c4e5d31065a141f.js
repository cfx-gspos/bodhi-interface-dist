"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[676],{2879:function(e,t,n){n.d(t,{d:function(){return r}});var a=n(5463);let i="base";function r(e,t){let n=a._v[t];return n?`${i}--${n}`:`${i}-${e}-${t}`}},9416:function(e,t,n){n.d(t,{s:function(){return i}});var a=n(2879);function i(e,t){let n={};return t.forEach(t=>{n[t]=(0,a.d)(e,t)}),n}},1873:function(e,t,n){n.d(t,{T:function(){return r}});var a=n(7294);n(5893);let i=a.createContext({disableDefaultClasses:!1});function r(e){let{disableDefaultClasses:t}=a.useContext(i);return n=>t?"":e(n)}},3619:function(e,t,n){var a=n(4836);t.Z=void 0;var i=a(n(4938)),r=n(5893);t.Z=(0,i.default)((0,r.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward")},5071:function(e,t,n){var a=n(4836);t.Z=void 0;var i=a(n(4938)),r=n(5893);t.Z=(0,i.default)((0,r.jsx)("path",{d:"M22 24H2v-4h20zM13.06 5.19l3.75 3.75L7.75 18H4v-3.75zm4.82 2.68-3.75-3.75 1.83-1.83c.39-.39 1.02-.39 1.41 0l2.34 2.34c.39.39.39 1.02 0 1.41z"}),"BorderColor")},3345:function(e,t,n){n.d(t,{H:function(){return h}});var a=n(2729),i=n(5893),r=n(7294),o=n(9608),s=n(5098);function l(){let e=(0,a._)(["\n  display: flex;\n  max-width: 100%;\n"]);return l=function(){return e},e}let h=r.forwardRef(function(e,t){return(0,i.jsx)(o.I,{slots:{root:d,input:"input",textarea:u},...e,ref:t})}),c={50:"#F3F6F9",100:"#E5EAF2",200:"#DAE2ED",300:"#C7D0DD",400:"#B0B8C4",500:"#9DA8B7",600:"#6B7A90",700:"#434D5B",800:"#303740",900:"#1C2025"},d=(0,s.Z)("div")(l()),u=(0,s.Z)("textarea",{shouldForwardProp:e=>!["ownerState","minRows","maxRows"].includes(e.toString())})(e=>{let{theme:t}=e;return"\n  width: 100%;\n  font-family: 'IBM Plex Sans', sans-serif;\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.5rem;\n  padding: 8px 12px;\n  border-radius: 4px 4px 0 4px;\n  color: ".concat((t.palette.mode,c[900]),";\n  background: ").concat((t.palette.mode,"#f2f2f2"),";\n  border: 1px solid ").concat((t.palette.mode,c[200]),";\n \n\n  &:hover {\n    border-color: ").concat(c[400],";\n  }\n\n  &:focus {\n    border-color: ").concat(c[400],"; \n  }\n\n  // firefox\n  &:focus-visible {\n    outline: 0;\n  }\n")})},9594:function(e,t,n){n.r(t),n.d(t,{UserinfoModal:function(){return Q}});var a=n(5893),i=n(7294),r=n(5616),o=n(5861),s=n(9417),l=n(9661),h=n(8456),c=n(6770),d=n.n(c),u=n(7066),p=n(7386),x=n.n(p);let g={x:0,y:0,width:0,height:0,unit:"px"},m=(e,t,n)=>Math.min(Math.max(e,t),n),w=(...e)=>e.filter(e=>e&&"string"==typeof e).join(" "),f=(e,t)=>e===t||e.width===t.width&&e.height===t.height&&e.x===t.x&&e.y===t.y&&e.unit===t.unit;function y(e,t,n){return"%"===e.unit?{...g,...e,unit:"%"}:{unit:"%",x:e.x?e.x/t*100:0,y:e.y?e.y/n*100:0,width:e.width?e.width/t*100:0,height:e.height?e.height/n*100:0}}function v(e,t,n){return e.unit?"px"===e.unit?{...g,...e,unit:"px"}:{unit:"px",x:e.x?e.x*t/100:0,y:e.y?e.y*n/100:0,width:e.width?e.width*t/100:0,height:e.height?e.height*n/100:0}:{...g,...e,unit:"px"}}function C(e,t,n,a,i,r=0,o=0,s=a,l=i){let h={...e},c=Math.min(r,a),d=Math.min(o,i),u=Math.min(s,a),p=Math.min(l,i);t&&(t>1?(d=(c=o?o*t:c)/t,u=s*t):(c=(d=r?r/t:d)*t,p=l/t)),h.y<0&&(h.height=Math.max(h.height+h.y,d),h.y=0),h.x<0&&(h.width=Math.max(h.width+h.x,c),h.x=0);let x=a-(h.x+h.width);x<0&&(h.x=Math.min(h.x,a-c),h.width+=x);let g=i-(h.y+h.height);if(g<0&&(h.y=Math.min(h.y,i-d),h.height+=g),h.width<c&&(("sw"===n||"nw"==n)&&(h.x-=c-h.width),h.width=c),h.height<d&&(("nw"===n||"ne"==n)&&(h.y-=d-h.height),h.height=d),h.width>u&&(("sw"===n||"nw"==n)&&(h.x-=u-h.width),h.width=u),h.height>p&&(("nw"===n||"ne"==n)&&(h.y-=p-h.height),h.height=p),t){let e=h.width/h.height;if(e<t){let e=Math.max(h.width/t,d);("nw"===n||"ne"==n)&&(h.y-=e-h.height),h.height=e}else if(e>t){let e=Math.max(h.height*t,c);("sw"===n||"nw"==n)&&(h.x-=e-h.width),h.width=e}}return h}let j={capture:!0,passive:!1},D=0,b=class e extends i.PureComponent{constructor(){super(...arguments),this.docMoveBound=!1,this.mouseDownOnCrop=!1,this.dragStarted=!1,this.evData={startClientX:0,startClientY:0,startCropX:0,startCropY:0,clientX:0,clientY:0,isResize:!0},this.componentRef=(0,i.createRef)(),this.mediaRef=(0,i.createRef)(),this.initChangeCalled=!1,this.instanceId=`rc-${D++}`,this.state={cropIsActive:!1,newCropIsBeingDrawn:!1},this.onCropPointerDown=e=>{let{crop:t,disabled:n}=this.props,a=this.getBox();if(!t)return;let i=v(t,a.width,a.height);if(n)return;e.cancelable&&e.preventDefault(),this.bindDocMove(),this.componentRef.current.focus({preventScroll:!0});let r=e.target.dataset.ord,o=e.clientX,s=e.clientY,l=i.x,h=i.y;if(r){let t=e.clientX-a.x,n=e.clientY-a.y,c=0,d=0;"ne"===r||"e"==r?(c=t-(i.x+i.width),d=n-i.y,l=i.x,h=i.y+i.height):"se"===r||"s"===r?(c=t-(i.x+i.width),d=n-(i.y+i.height),l=i.x,h=i.y):"sw"===r||"w"==r?(c=t-i.x,d=n-(i.y+i.height),l=i.x+i.width,h=i.y):("nw"===r||"n"==r)&&(c=t-i.x,d=n-i.y,l=i.x+i.width,h=i.y+i.height),o=l+a.x+c,s=h+a.y+d}this.evData={startClientX:o,startClientY:s,startCropX:l,startCropY:h,clientX:e.clientX,clientY:e.clientY,isResize:!!r,ord:r},this.mouseDownOnCrop=!0,this.setState({cropIsActive:!0})},this.onComponentPointerDown=e=>{let{crop:t,disabled:n,locked:a,keepSelection:i,onChange:r}=this.props,o=this.getBox();if(n||a||i&&t)return;e.cancelable&&e.preventDefault(),this.bindDocMove(),this.componentRef.current.focus({preventScroll:!0});let s=e.clientX-o.x,l=e.clientY-o.y,h={unit:"px",x:s,y:l,width:0,height:0};this.evData={startClientX:e.clientX,startClientY:e.clientY,startCropX:s,startCropY:l,clientX:e.clientX,clientY:e.clientY,isResize:!0},this.mouseDownOnCrop=!0,r(v(h,o.width,o.height),y(h,o.width,o.height)),this.setState({cropIsActive:!0,newCropIsBeingDrawn:!0})},this.onDocPointerMove=e=>{let t;let{crop:n,disabled:a,onChange:i,onDragStart:r}=this.props,o=this.getBox();if(a||!n||!this.mouseDownOnCrop)return;e.cancelable&&e.preventDefault(),this.dragStarted||(this.dragStarted=!0,r&&r(e));let{evData:s}=this;s.clientX=e.clientX,s.clientY=e.clientY,f(n,t=s.isResize?this.resizeCrop():this.dragCrop())||i(v(t,o.width,o.height),y(t,o.width,o.height))},this.onComponentKeyDown=t=>{let{crop:n,disabled:a,onChange:i,onComplete:r}=this.props;if(a)return;let o=t.key,s=!1;if(!n)return;let l=this.getBox(),h=this.makePixelCrop(l),c=(navigator.platform.match("Mac")?t.metaKey:t.ctrlKey)?e.nudgeStepLarge:t.shiftKey?e.nudgeStepMedium:e.nudgeStep;if("ArrowLeft"===o?(h.x-=c,s=!0):"ArrowRight"===o?(h.x+=c,s=!0):"ArrowUp"===o?(h.y-=c,s=!0):"ArrowDown"===o&&(h.y+=c,s=!0),s){t.cancelable&&t.preventDefault(),h.x=m(h.x,0,l.width-h.width),h.y=m(h.y,0,l.height-h.height);let e=v(h,l.width,l.height),n=y(h,l.width,l.height);i(e,n),r&&r(e,n)}},this.onHandlerKeyDown=(t,n)=>{let{aspect:a=0,crop:i,disabled:r,minWidth:o=0,minHeight:s=0,maxWidth:l,maxHeight:h,onChange:c,onComplete:d}=this.props,u=this.getBox();if(r||!i||"ArrowUp"!==t.key&&"ArrowDown"!==t.key&&"ArrowLeft"!==t.key&&"ArrowRight"!==t.key)return;t.stopPropagation(),t.preventDefault();let p=(navigator.platform.match("Mac")?t.metaKey:t.ctrlKey)?e.nudgeStepLarge:t.shiftKey?e.nudgeStepMedium:e.nudgeStep,x=v(i,u.width,u.height),g=function(e,t,n,a){let i={...e};return"ArrowLeft"===t?"nw"===a?(i.x-=n,i.y-=n,i.width+=n,i.height+=n):"w"===a?(i.x-=n,i.width+=n):"sw"===a?(i.x-=n,i.width+=n,i.height+=n):"ne"===a?(i.y+=n,i.width-=n,i.height-=n):"e"===a?i.width-=n:"se"===a&&(i.width-=n,i.height-=n):"ArrowRight"===t&&("nw"===a?(i.x+=n,i.y+=n,i.width-=n,i.height-=n):"w"===a?(i.x+=n,i.width-=n):"sw"===a?(i.x+=n,i.width-=n,i.height-=n):"ne"===a?(i.y-=n,i.width+=n,i.height+=n):"e"===a?i.width+=n:"se"===a&&(i.width+=n,i.height+=n)),"ArrowUp"===t?"nw"===a?(i.x-=n,i.y-=n,i.width+=n,i.height+=n):"n"===a?(i.y-=n,i.height+=n):"ne"===a?(i.y-=n,i.width+=n,i.height+=n):"sw"===a?(i.x+=n,i.width-=n,i.height-=n):"s"===a?i.height-=n:"se"===a&&(i.width-=n,i.height-=n):"ArrowDown"===t&&("nw"===a?(i.x+=n,i.y+=n,i.width-=n,i.height-=n):"n"===a?(i.y+=n,i.height-=n):"ne"===a?(i.y+=n,i.width-=n,i.height-=n):"sw"===a?(i.x-=n,i.width+=n,i.height+=n):"s"===a?i.height+=n:"se"===a&&(i.width+=n,i.height+=n)),i}(x,t.key,p,n),m=C(g,a,n,u.width,u.height,o,s,l,h);if(!f(i,m)){let e=y(m,u.width,u.height);c(m,e),d&&d(m,e)}},this.onDocPointerDone=e=>{let{crop:t,disabled:n,onComplete:a,onDragEnd:i}=this.props,r=this.getBox();this.unbindDocMove(),!(n||!t)&&this.mouseDownOnCrop&&(this.mouseDownOnCrop=!1,this.dragStarted=!1,i&&i(e),a&&a(v(t,r.width,r.height),y(t,r.width,r.height)),this.setState({cropIsActive:!1,newCropIsBeingDrawn:!1}))},this.onDragFocus=()=>{var e;null==(e=this.componentRef.current)||e.scrollTo(0,0)}}get document(){return document}getBox(){let e=this.mediaRef.current;if(!e)return{x:0,y:0,width:0,height:0};let{x:t,y:n,width:a,height:i}=e.getBoundingClientRect();return{x:t,y:n,width:a,height:i}}componentDidUpdate(e){let{crop:t,onComplete:n}=this.props;if(n&&!e.crop&&t){let{width:e,height:a}=this.getBox();e&&a&&n(v(t,e,a),y(t,e,a))}}componentWillUnmount(){this.resizeObserver&&this.resizeObserver.disconnect()}bindDocMove(){this.docMoveBound||(this.document.addEventListener("pointermove",this.onDocPointerMove,j),this.document.addEventListener("pointerup",this.onDocPointerDone,j),this.document.addEventListener("pointercancel",this.onDocPointerDone,j),this.docMoveBound=!0)}unbindDocMove(){this.docMoveBound&&(this.document.removeEventListener("pointermove",this.onDocPointerMove,j),this.document.removeEventListener("pointerup",this.onDocPointerDone,j),this.document.removeEventListener("pointercancel",this.onDocPointerDone,j),this.docMoveBound=!1)}getCropStyle(){let{crop:e}=this.props;if(e)return{top:`${e.y}${e.unit}`,left:`${e.x}${e.unit}`,width:`${e.width}${e.unit}`,height:`${e.height}${e.unit}`}}dragCrop(){let{evData:e}=this,t=this.getBox(),n=this.makePixelCrop(t),a=e.clientX-e.startClientX,i=e.clientY-e.startClientY;return n.x=m(e.startCropX+a,0,t.width-n.width),n.y=m(e.startCropY+i,0,t.height-n.height),n}getPointRegion(e,t,n,a){let i;let{evData:r}=this,o=r.clientX-e.x,s=r.clientY-e.y;return i=a&&t?"nw"===t||"n"===t||"ne"===t:s<r.startCropY,(n&&t?"nw"===t||"w"===t||"sw"===t:o<r.startCropX)?i?"nw":"sw":i?"ne":"se"}resolveMinDimensions(e,t,n=0,a=0){let i=Math.min(n,e.width),r=Math.min(a,e.height);return t&&(i||r)?t>1?i?[i,i/t]:[r*t,r]:r?[r*t,r]:[i,i/t]:[i,r]}resizeCrop(){let{evData:t}=this,{aspect:n=0,maxWidth:a,maxHeight:i}=this.props,r=this.getBox(),[o,s]=this.resolveMinDimensions(r,n,this.props.minWidth,this.props.minHeight),l=this.makePixelCrop(r),h=this.getPointRegion(r,t.ord,o,s),c=t.ord||h,d=t.clientX-t.startClientX,u=t.clientY-t.startClientY;(o&&"nw"===c||"w"===c||"sw"===c)&&(d=Math.min(d,-o)),(s&&"nw"===c||"n"===c||"ne"===c)&&(u=Math.min(u,-s));let p={unit:"px",x:0,y:0,width:0,height:0};"ne"===h?(p.x=t.startCropX,p.width=d,n?p.height=p.width/n:p.height=Math.abs(u),p.y=t.startCropY-p.height):"se"===h?(p.x=t.startCropX,p.y=t.startCropY,p.width=d,n?p.height=p.width/n:p.height=u):"sw"===h?(p.x=t.startCropX+d,p.y=t.startCropY,p.width=Math.abs(d),n?p.height=p.width/n:p.height=u):"nw"===h&&(p.x=t.startCropX+d,p.width=Math.abs(d),n?(p.height=p.width/n,p.y=t.startCropY-p.height):(p.height=Math.abs(u),p.y=t.startCropY+u));let x=C(p,n,h,r.width,r.height,o,s,a,i);return n||e.xyOrds.indexOf(c)>-1?l=x:e.xOrds.indexOf(c)>-1?(l.x=x.x,l.width=x.width):e.yOrds.indexOf(c)>-1&&(l.y=x.y,l.height=x.height),l.x=m(l.x,0,r.width-l.width),l.y=m(l.y,0,r.height-l.height),l}renderCropSelection(){let{ariaLabels:t=e.defaultProps.ariaLabels,disabled:n,locked:a,renderSelectionAddon:r,ruleOfThirds:o,crop:s}=this.props,l=this.getCropStyle();if(s)return i.createElement("div",{style:l,className:"ReactCrop__crop-selection",onPointerDown:this.onCropPointerDown,"aria-label":t.cropArea,tabIndex:0,onKeyDown:this.onComponentKeyDown,role:"group"},!n&&!a&&i.createElement("div",{className:"ReactCrop__drag-elements",onFocus:this.onDragFocus},i.createElement("div",{className:"ReactCrop__drag-bar ord-n","data-ord":"n"}),i.createElement("div",{className:"ReactCrop__drag-bar ord-e","data-ord":"e"}),i.createElement("div",{className:"ReactCrop__drag-bar ord-s","data-ord":"s"}),i.createElement("div",{className:"ReactCrop__drag-bar ord-w","data-ord":"w"}),i.createElement("div",{className:"ReactCrop__drag-handle ord-nw","data-ord":"nw",tabIndex:0,"aria-label":t.nwDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"nw"),role:"button"}),i.createElement("div",{className:"ReactCrop__drag-handle ord-n","data-ord":"n",tabIndex:0,"aria-label":t.nDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"n"),role:"button"}),i.createElement("div",{className:"ReactCrop__drag-handle ord-ne","data-ord":"ne",tabIndex:0,"aria-label":t.neDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"ne"),role:"button"}),i.createElement("div",{className:"ReactCrop__drag-handle ord-e","data-ord":"e",tabIndex:0,"aria-label":t.eDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"e"),role:"button"}),i.createElement("div",{className:"ReactCrop__drag-handle ord-se","data-ord":"se",tabIndex:0,"aria-label":t.seDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"se"),role:"button"}),i.createElement("div",{className:"ReactCrop__drag-handle ord-s","data-ord":"s",tabIndex:0,"aria-label":t.sDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"s"),role:"button"}),i.createElement("div",{className:"ReactCrop__drag-handle ord-sw","data-ord":"sw",tabIndex:0,"aria-label":t.swDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"sw"),role:"button"}),i.createElement("div",{className:"ReactCrop__drag-handle ord-w","data-ord":"w",tabIndex:0,"aria-label":t.wDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"w"),role:"button"})),r&&i.createElement("div",{className:"ReactCrop__selection-addon",onPointerDown:e=>e.stopPropagation()},r(this.state)),o&&i.createElement(i.Fragment,null,i.createElement("div",{className:"ReactCrop__rule-of-thirds-hz"}),i.createElement("div",{className:"ReactCrop__rule-of-thirds-vt"})))}makePixelCrop(e){let t={...g,...this.props.crop||{}};return v(t,e.width,e.height)}render(){let{aspect:e,children:t,circularCrop:n,className:a,crop:r,disabled:o,locked:s,style:l,ruleOfThirds:h}=this.props,{cropIsActive:c,newCropIsBeingDrawn:d}=this.state,u=r?this.renderCropSelection():null,p=w("ReactCrop",a,c&&"ReactCrop--active",o&&"ReactCrop--disabled",s&&"ReactCrop--locked",d&&"ReactCrop--new-crop",r&&e&&"ReactCrop--fixed-aspect",r&&n&&"ReactCrop--circular-crop",r&&h&&"ReactCrop--rule-of-thirds",!this.dragStarted&&r&&!r.width&&!r.height&&"ReactCrop--invisible-crop",n&&"ReactCrop--no-animate");return i.createElement("div",{ref:this.componentRef,className:p,style:l},i.createElement("div",{ref:this.mediaRef,className:"ReactCrop__child-wrapper",onPointerDown:this.onComponentPointerDown},t),r?i.createElement("svg",{className:"ReactCrop__crop-mask",width:"100%",height:"100%"},i.createElement("defs",null,i.createElement("mask",{id:`hole-${this.instanceId}`},i.createElement("rect",{width:"100%",height:"100%",fill:"white"}),n?i.createElement("ellipse",{cx:`${r.x+r.width/2}${r.unit}`,cy:`${r.y+r.height/2}${r.unit}`,rx:`${r.width/2}${r.unit}`,ry:`${r.height/2}${r.unit}`,fill:"black"}):i.createElement("rect",{x:`${r.x}${r.unit}`,y:`${r.y}${r.unit}`,width:`${r.width}${r.unit}`,height:`${r.height}${r.unit}`,fill:"black"}))),i.createElement("rect",{fill:"black",fillOpacity:.5,width:"100%",height:"100%",mask:`url(#hole-${this.instanceId})`})):void 0,u)}};b.xOrds=["e","w"],b.yOrds=["n","s"],b.xyOrds=["nw","ne","se","sw"],b.nudgeStep=1,b.nudgeStepMedium=10,b.nudgeStepLarge=100,b.defaultProps={ariaLabels:{cropArea:"Use the arrow keys to move the crop selection area",nwDragHandle:"Use the arrow keys to move the north west drag handle to change the crop selection area",nDragHandle:"Use the up and down arrow keys to move the north drag handle to change the crop selection area",neDragHandle:"Use the arrow keys to move the north east drag handle to change the crop selection area",eDragHandle:"Use the up and down arrow keys to move the east drag handle to change the crop selection area",seDragHandle:"Use the arrow keys to move the south east drag handle to change the crop selection area",sDragHandle:"Use the up and down arrow keys to move the south drag handle to change the crop selection area",swDragHandle:"Use the arrow keys to move the south west drag handle to change the crop selection area",wDragHandle:"Use the up and down arrow keys to move the west drag handle to change the crop selection area"}},n(7929);var Z=n(8320),S=n(3950),M=n(4032),R=n(1065),E=n(5297),I=n(5098),k=n(2760);let F=i.forwardRef(function(e,t){let{getRootProps:n,getInputProps:i}=(0,E.G)(e),r=i();return r.ref=(0,k.Z)(r.ref,t),(0,a.jsx)("div",{...n(),children:(0,a.jsx)(L,{...e,...r})})}),A={50:"#F3F6F9",100:"#E5EAF2",200:"#DAE2ED",300:"#C7D0DD",400:"#B0B8C4",500:"#9DA8B7",600:"#6B7A90",700:"#434D5B",800:"#303740",900:"#1C2025"},L=(0,I.Z)("input")(e=>{let{theme:t}=e;return" \n  font-family: 'IBM Plex Sans', sans-serif;\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.5;\n  padding: 8px 12px;\n  border-radius: 4px;\n  color: ".concat((t.palette.mode,A[900]),";\n  background: ").concat((t.palette.mode,"#fff"),";\n  border: 1px solid ").concat((t.palette.mode,A[200]),";\n \n  &:hover {\n    border-color: ").concat(A[400],";\n  }\n\n  &:focus {\n    border-color: ").concat(A[400],"; \n  }\n\n  // firefox\n  &:focus-visible {\n    outline: 0;\n  }\n")});var _=n(84),P=n(1458),B=n(1519),H=n(3345),N=n(6172),$=n(888),Y=n(4187),K=n(6076),O=n(2593),X=n(1783),T=n(1085),U=n(3619),z=n(9215),W=n(1163);let G=e=>{let{title:t,symbol:n}=e,{type:l,close:c,setType:d}=(0,M.a)(),{signer:p,account:x,getBodhiUserAssets:g,getBodhiAssets:m,fetchArweaveData:w,spaceUserInfo:f}=(0,R.Yh)(),{refetchSpaceUserData:y,refetchSpaceData:v}=(0,z.n)(),C=(0,W.useRouter)(),[j,D]=(0,i.useState)(""),[b,Z]=(0,i.useState)(""),[E,I]=(0,i.useState)(0),[k,A]=(0,i.useState)(0),[L,G]=(0,i.useState)(""),[J,V]=(0,i.useState)(),[q,Q]=(0,i.useState)(!1);async function ee(){if(!j||""===j){(0,_.L)(!1,"Please enter a space name.");return}if(j.length>32){(0,_.L)(!1,"Maximum space name length is 32 strings.");return}if(!b||""===b){(0,_.L)(!1,"Please enter a description.");return}I(1)}async function et(){if(I(2),A(0),Q(!0),""!==L&&L)setTimeout(()=>{en(L)},500);else try{let e=await u.Z.post(Y.zA.api_text,{text:b});200===e.status?(G(e.data.transactionId),en(e.data.transactionId)):((0,_.L)(!1,"Upload failed. Please try again."),Q(!1))}catch(e){console.error("Error uploading text:",e),Q(!1)}let e=setInterval(()=>{A(e=>Math.min(e+20*Math.random(),100))},100);return()=>{clearInterval(e)}}async function en(e){if(!e||""==e)return;Q(!0);let t=Y.TT[Y.KY].bodhi,n=new K.CH(t,X,p);try{let a={from:x,to:t,value:O.O$.from(0),data:n.interface.encodeFunctionData("create",[e])},i=await n.provider.estimateGas(a);console.log("gasLimit:",i.toNumber());let r=null==p?void 0:p.sendTransaction({...a,gasLimit:i});null==r||r.then(e=>{e.wait().then(e=>{1===e.status?((0,_.L)(!0,"Bodhi Asset Created."),setTimeout(()=>{ea()},500)):((0,_.L)(!1,"Signature failure."),Q(!1))}).catch(e=>{Q(!1),(0,_.L)(!1,e.reason)})}).catch(e=>{Q(!1),(0,_.L)(!1,e.reason)})}catch(e){console.log({error:e}),Q(!1),-32603===e.code&&-32015==e.data.code?(0,_.L)(!1,"Insufficient funds for gas."):"execution reverted: Asset already exists"==e.reason.toString()?ea():(0,_.L)(!1,"Signature failure.")}}async function ea(){I(3),Q(!0);let e=await g(x);V(e);let t=Y.TT[Y.KY].spaceFactory,n=new K.CH(t,T,p),a={from:x,to:t,value:O.O$.from(0),data:n.interface.encodeFunctionData("create",[e,j])},i=await n.provider.estimateGas(a);console.log("gasLimit:",i.toNumber());let r=null==p?void 0:p.sendTransaction({...a,gasLimit:i});null==r||r.then(e=>{e.wait().then(e=>{1===e.status?((0,_.L)(!0,"Space Created."),ei()):(0,_.L)(!1,"Signature failure."),Q(!1)}).catch(()=>{Q(!1)})}).catch(()=>{Q(!1)})}async function ei(){y&&y(),v&&v(),setTimeout(()=>{I(4)},1e3)}return(0,i.useEffect)(()=>{f&&f.spaceName&&D(f.spaceName),(async()=>{let e=await g(x);if(V(e),e){let t=await m(e);if(t){G(t.arTxId);let e=await w(t.arTxId);Z(null!=e?e:"")}}})()},[f]),(0,a.jsxs)(r.Z,{children:[0==E&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(S.E,{title:"Create a Space"}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(o.Z,{variant:"secondary16",color:"text.secondary",children:"Space Name"}),(0,a.jsx)(F,{style:{width:"100%"},value:j,onChange:e=>{D(e.target.value)}})]}),(0,a.jsxs)(r.Z,{sx:{mt:2},children:[(0,a.jsx)(o.Z,{variant:"secondary16",color:"text.secondary",children:"Description"}),(0,a.jsx)(H.H,{multiline:!0,style:{width:"100%"},value:b,onChange:e=>{Z(e.target.value)},rows:4})]}),(0,a.jsxs)(r.Z,{sx:{mt:8,display:"flex",justifyContent:"right",gap:4},children:[(0,a.jsx)(s.Z,{variant:"outlined",onClick:()=>{c()},sx:{minWidth:"90px"},children:(0,a.jsx)(o.Z,{variant:"buttonM",children:(0,a.jsx)(a.Fragment,{children:"Cancel"})})}),(0,a.jsx)(s.Z,{variant:"outlined_2",onClick:()=>{ee()},sx:{minWidth:"90px"},children:(0,a.jsx)(o.Z,{variant:"buttonM",children:(0,a.jsx)(a.Fragment,{children:"Preview"})})})]})]}),1==E&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(S.E,{title:"Space Preview"}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(o.Z,{sx:{mb:1.5},color:"text.secondary",children:"Space Name"}),(0,a.jsx)(o.Z,{variant:"h4",component:"div",children:j}),(0,a.jsxs)(r.Z,{sx:{mt:4},children:[(0,a.jsx)(o.Z,{sx:{mb:1.5},color:"text.secondary",children:"Description"}),(0,a.jsx)(o.Z,{variant:"secondary14",children:(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:b.replace(/\n/g,"<br />")}})})]})]}),(0,a.jsxs)(r.Z,{sx:{mt:8,display:"flex",justifyContent:"right",gap:4},children:[(0,a.jsx)(s.Z,{variant:"outlined",onClick:()=>{I(0)},sx:{minWidth:"90px"},startIcon:(0,a.jsx)(N.Z,{}),children:(0,a.jsx)(o.Z,{variant:"buttonM",children:(0,a.jsx)(a.Fragment,{children:"Back "})})}),(0,a.jsx)(s.Z,{variant:"surface",onClick:()=>{et()},sx:{minWidth:"90px"},children:(0,a.jsx)(o.Z,{variant:"buttonM",children:(0,a.jsx)(a.Fragment,{children:"Confirm Create"})})})]})]}),2==E&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(S.E,{title:"Create Space"}),(0,a.jsx)(r.Z,{children:(0,a.jsx)(r.Z,{sx:{width:"100%"},children:100!=k?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(P.Z,{variant:"determinate",value:k})}):(0,a.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,a.jsxs)(o.Z,{variant:"main16",sx:{display:"flex",alignItems:"center",gap:"10px"},children:[(0,a.jsx)($.Z,{sx:{color:"#78e378"}}),(0,a.jsx)(a.Fragment,{children:"Uploaded"})]}),(0,a.jsxs)(o.Z,{variant:"secondary14",color:"text.secondary",children:["Arweave ID: ",L]}),(0,a.jsx)(B.Z,{sx:{mt:2,mb:2}}),(0,a.jsx)(o.Z,{variant:"secondary16",color:"text.primary",children:"Creating Bodhi Asset..."})]})})}),(0,a.jsxs)(r.Z,{sx:{mt:8,display:"flex",justifyContent:"right",gap:4},children:[(0,a.jsx)(s.Z,{variant:"outlined",onClick:()=>{I(1)},sx:{minWidth:"90px"},startIcon:(0,a.jsx)(N.Z,{}),children:(0,a.jsx)(o.Z,{variant:"buttonM",children:(0,a.jsx)(a.Fragment,{children:"Back"})})}),(0,a.jsx)(s.Z,{variant:"surface",onClick:()=>{en(L)},sx:{minWidth:"90px"},disabled:q,startIcon:q&&(0,a.jsx)(h.Z,{size:14}),children:(0,a.jsx)(o.Z,{variant:"buttonM",children:(0,a.jsx)(a.Fragment,{children:q?"Signing":"Sign"})})})]})]}),3==E&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(S.E,{title:"Create Space"}),(0,a.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,a.jsxs)(o.Z,{variant:"main16",sx:{display:"flex",alignItems:"center",gap:"10px"},children:[(0,a.jsx)($.Z,{sx:{color:"#78e378"}}),(0,a.jsx)(a.Fragment,{children:"Uploaded"})]}),(0,a.jsxs)(o.Z,{variant:"secondary14",color:"text.secondary",children:["Arweave ID: ",L]}),(0,a.jsx)(B.Z,{sx:{mt:2,mb:2}}),(0,a.jsxs)(o.Z,{variant:"main16",sx:{mt:4,display:"flex",alignItems:"center",gap:"10px"},children:[(0,a.jsx)($.Z,{sx:{color:"#78e378"}}),(0,a.jsx)(a.Fragment,{children:"Bodhi Asset Created"})]}),(0,a.jsxs)(o.Z,{variant:"secondary14",color:"text.secondary",children:["Asset lD: ",J]}),(0,a.jsx)(B.Z,{sx:{mt:2,mb:2}}),(0,a.jsx)(o.Z,{variant:"secondary16",color:"text.primary",children:"Creating Space..."})]}),(0,a.jsxs)(r.Z,{sx:{mt:8,display:"flex",justifyContent:"right",gap:4},children:[(0,a.jsx)(s.Z,{variant:"outlined",onClick:()=>{I(2)},sx:{minWidth:"90px"},startIcon:(0,a.jsx)(N.Z,{}),children:(0,a.jsx)(o.Z,{variant:"buttonM",children:(0,a.jsx)(a.Fragment,{children:"Back"})})}),(0,a.jsx)(s.Z,{variant:"surface",onClick:()=>{ea()},sx:{minWidth:"90px"},disabled:q,startIcon:q&&(0,a.jsx)(h.Z,{size:14}),children:(0,a.jsx)(o.Z,{variant:"buttonM",children:(0,a.jsx)(a.Fragment,{children:q?"Signing":"Sign"})})})]})]}),4==E&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(S.E,{title:" "}),(0,a.jsxs)(o.Z,{variant:"h2",sx:{pt:8,pb:8,textAlign:"center"},children:["Space #",null==f?void 0:f.spaceId,"  ",j]}),(0,a.jsx)(r.Z,{sx:{mt:8,display:"flex",justifyContent:"center"},children:(0,a.jsx)(s.Z,{variant:"surface",onClick:()=>{C.push("/account"),c()},sx:{minWidth:"90px"},disabled:q,endIcon:(0,a.jsx)(U.Z,{}),children:"Enter My Space"})})]})]})};var J=n(5071),V=n(5553),q=n(7726);let Q=()=>{x().init({});let{type:e,close:t,setType:n}=(0,M.a)(),[c,p]=(0,i.useState)(!1),[g,m]=(0,i.useState)(!1),[w,f]=(0,i.useState)(!1),[y,v]=(0,i.useState)(""),[C,j]=(0,i.useState)(""),[D,E]=(0,i.useState)(""),[I,k]=(0,i.useState)(null),[A,L]=(0,i.useState)(null),{spaceUserInfo:P,account:B,signer:H}=(0,R.Yh)(),{refetchSpaceUserData:N}=(0,z.n)(),$=(0,i.useMemo)(()=>!!P&&!!P.spaceAddress&&""!=P.spaceAddress&&"0x0000000000000000000000000000000000000000"!=P.spaceAddress,[P]);async function X(){try{let e=Y.TT[Y.KY].spaceFactory,t=new K.CH(e,T,H),n={from:B,to:e,value:O.O$.from(0),data:t.interface.encodeFunctionData("updateSpaceName",[y])},a=await t.provider.estimateGas(n);console.log("gasLimit:",a.toNumber());let i=null==H?void 0:H.sendTransaction({...n,gasLimit:a});null==i||i.then(e=>{e.wait().then(e=>{1===e.status?(N&&N(),(0,_.L)(!0,"Space name updated successfully.")):(0,_.L)(!1,"Signature failure."),p(!1)}).catch(()=>{p(!1)})}).catch(()=>{})}catch(e){}}let{avatar:U,spacename:W}=(0,i.useMemo)(()=>(0,q.Dm)(B,P),[B,P]),Q={x:0,y:0,width:200,height:200,unit:"px"},[ee,et]=(0,i.useState)(Q),[en,ea]=(0,i.useState)(Q),ei=(0,i.useRef)(null),er=e=>{ei.current=e},eo=(e,t)=>{let n=document.createElement("canvas"),a=e.naturalWidth/e.width,i=e.naturalHeight/e.height;n.width=t.width,n.height=t.height;let r=n.getContext("2d");return r?(r.drawImage(e,t.x*a,t.y*i,t.width*a,t.height*i,0,0,t.width,t.height),new Promise(e=>{n.toBlob(t=>{if(t){let n=new File([t],"croppedImage.jpg",{type:"image/jpeg"});e(n)}},"image/jpeg")})):Promise.reject(Error("Failed to crop image"))},es=async e=>{if(e.preventDefault(),!I||!en||!ei.current){(0,_.L)(!1,"Please select and crop an image to upload.");return}f(!0);try{let e=await eo(ei.current,en);e.size<1e4?el(e):d().imageFileResizer(e,200,200,"JPEG",100,0,async e=>{e instanceof File&&el(e)},"file")}catch(e){console.error("Error uploading file:",e),(0,_.L)(!1,"Error uploading file.")}};async function el(e){let t=new FormData;t.append("file",e);let n=await u.Z.post(Y.zA.api_media,t,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:e=>{}});200===n.status?(E(n.data.transactionId),eh(n.data.transactionId)):((0,_.L)(!1,"Upload failed. Please try again."),f(!1))}async function eh(e){if(e)try{let t=Y.TT[Y.KY].spaceFactory,n=new K.CH(t,T,H),a=V.fi("0.1"),i={from:B,to:t,value:a,data:n.interface.encodeFunctionData("uploadAvatar",[e])},r=await n.provider.estimateGas(i);console.log("gasLimit:",r.toNumber());let o=null==H?void 0:H.sendTransaction({...i,gasLimit:r});null==o||o.then(e=>{e.wait().then(e=>{1===e.status?(N&&N(),(0,_.L)(!0,"Avatar uploaded successfully.")):(0,_.L)(!1,"Signature failure."),m(!1),f(!1),L(null)}).catch(e=>{f(!1),m(!1),(0,_.L)(!1,e.reason)})}).catch(e=>{f(!1),m(!1),(0,_.L)(!1,e.reason)})}catch(e){f(!1),m(!1),-32603===e.code&&-32015==e.data.code?(0,_.L)(!1,"Insufficient funds for gas."):(0,_.L)(!1,"Signature failure.")}}return(0,a.jsx)(Z.P,{open:e===M.w.UserInfo,setOpen:function(){p(!1),f(!1),m(!1),L(null),t()},contentMaxWidth:520,children:(0,a.jsx)(r.Z,{sx:{display:"flex",flexDirection:"column"},children:$?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(S.E,{title:"Account"}),(0,a.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"column",gap:6},children:[(0,a.jsxs)(r.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)(o.Z,{variant:"secondary16",color:"text.secondary",children:"Space Id"}),(0,a.jsx)(r.Z,{children:(0,a.jsxs)(o.Z,{variant:"secondary16",color:"text.primary",sx:{paddingRight:10},children:["# ",null==P?void 0:P.spaceId]})})]}),(0,a.jsxs)(r.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)(o.Z,{variant:"secondary16",color:"text.secondary",children:"Space Name"}),(0,a.jsx)(r.Z,{sx:{display:"flex",gap:6,alignItems:"center"},children:c?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(F,{style:{width:"100%"},value:y,onChange:e=>{v(e.target.value)}}),(0,a.jsx)(s.Z,{variant:"outlined",onClick:()=>{X()},children:"Save"})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,{variant:"secondary16",color:"text.primary",children:null==P?void 0:P.spaceName}),(0,a.jsxs)("span",{onClick:()=>{p(!0),v(null==P?void 0:P.spaceName)},children:[" ",(0,a.jsx)(J.Z,{fontSize:"small",sx:{color:"#75cedb"}})]})]})})]}),(0,a.jsxs)(r.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)(o.Z,{variant:"secondary16",color:"text.secondary",children:"Avatar"}),(0,a.jsx)(r.Z,{sx:{display:"flex",gap:6,alignItems:"center"},children:g?(0,a.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center",gap:2},children:[(0,a.jsxs)("div",{className:"file-upload-container",children:[(0,a.jsx)("label",{htmlFor:"file-upload",className:"file-upload-label",children:"Choose File"}),(0,a.jsx)("input",{id:"file-upload",type:"file",onChange:e=>{if(e.target.files&&e.target.files.length>0){let t=e.target.files[0];L(URL.createObjectURL(t)),k(t)}},style:{display:"none"}})]}),(0,a.jsx)(s.Z,{variant:"surface",onClick:es,sx:{minWidth:"90px"},disabled:!A||w,startIcon:w&&(0,a.jsx)(h.Z,{size:14}),children:(0,a.jsx)(o.Z,{variant:"buttonM",children:(0,a.jsx)(a.Fragment,{children:"Upload"})})})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Z,{alt:"",src:U}),(0,a.jsxs)("span",{onClick:()=>{m(!0)},children:[" ",(0,a.jsx)(J.Z,{fontSize:"small",sx:{color:"#75cedb"}})]})]})})]}),(0,a.jsx)(r.Z,{children:A&&(0,a.jsx)("div",{className:"image-preview",children:(0,a.jsx)(b,{aspect:1,crop:ee,onComplete:e=>{ea(e)},onChange:e=>et(e),children:(0,a.jsx)("img",{src:A,alt:"Preview",onLoad:e=>er(e.currentTarget)})})})})]})]}):(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(G,{})})})})}},84:function(e,t,n){n.d(t,{L:function(){return i},V:function(){return r}}),n(7294);var a=n(5678);function i(e,t){e?a.Am.success(t,{autoClose:5e3,position:"top-right",theme:"light",closeOnClick:!0,style:{borderRadius:"6px"}}):a.Am.error("".concat(t),{autoClose:2500,position:"top-right",theme:"light",closeOnClick:!0,style:{borderRadius:"6px"}})}function r(e,t){e?a.Am.success(t,{autoClose:5e3,position:"top-right",theme:"light",closeOnClick:!0,style:{borderRadius:"6px"}}):a.Am.error("".concat(t),{autoClose:2500,position:"top-right",theme:"light",closeOnClick:!0,style:{borderRadius:"6px"}})}},7726:function(e,t,n){n.d(t,{Dm:function(){return s},Xe:function(){return o},i$:function(){return l}});var a=n(1288),i=n.n(a),r=n(4187);let o=(e,t,n)=>e&&""!==e?"".concat(e.substr(0,t),"...").concat(e.substr(e.length-n,e.length)):"",s=(e,t)=>{let n=t&&t.avatar?"".concat(r.zA.ar_url).concat(null==t?void 0:t.avatar):e?i()(e):"/icons/img/user.jpg",a=t&&t.spaceName?t.spaceName:o(e,4,4);return{avatar:n,spacename:a}},l=e=>{let t=Date.now()/1e3,n=t-e;if(n<0){let t=Math.abs(n);if(t<60)return"".concat(Math.floor(t),"s from now");if(t<3600)return"".concat(Math.floor(t/60),"m from now");{if(t<86400)return"".concat(Math.floor(t/3600),"h from now");let n=new Date(1e3*e),a=new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"});return"on ".concat(a.format(n))}}if(n<60)return"".concat(Math.floor(n),"s ago");if(n<3600)return"".concat(Math.floor(n/60),"m ago");{if(n<86400)return"".concat(Math.floor(n/3600),"h ago");let t=new Date(1e3*e),a=new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"});return a.format(t)}}}}]);