(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[930],{87952:function(t,e,r){"use strict";r.d(e,{Z:function(){return C}});var i=r(63366),s=r(87462),o=r(67294),f=r(90512),n=r(58510),a=r(78114),h=r(90948),l=r(82066),u=r(85893),c=(0,l.Z)((0,u.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),d=r(54801),p=r(80560);let _=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],g=(0,a.U)("MuiAvatar"),v=t=>{let{classes:e,variant:r,colorDefault:i}=t;return(0,n.Z)({root:["root",r,i&&"colorDefault"],img:["img"],fallback:["fallback"]},d.$,e)},b=(0,h.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:r}=t;return[e.root,e[r.variant],r.colorDefault&&e.colorDefault]}})(({theme:t})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:(0,s.Z)({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:(0,s.Z)({backgroundColor:t.palette.grey[400]},t.applyStyles("dark",{backgroundColor:t.palette.grey[600]})))}]})),x=(0,h.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(t,e)=>e.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),z=(0,h.ZP)(c,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(t,e)=>e.fallback})({width:"75%",height:"75%"}),m=o.forwardRef(function(t,e){let r=g({props:t,name:"MuiAvatar"}),{alt:n,children:a,className:h,component:l="div",slots:c={},slotProps:d={},imgProps:m,sizes:C,src:A,srcSet:w,variant:Z="circular"}=r,M=(0,i.Z)(r,_),y=null,S=function({crossOrigin:t,referrerPolicy:e,src:r,srcSet:i}){let[s,f]=o.useState(!1);return o.useEffect(()=>{if(!r&&!i)return;f(!1);let s=!0,o=new Image;return o.onload=()=>{s&&f("loaded")},o.onerror=()=>{s&&f("error")},o.crossOrigin=t,o.referrerPolicy=e,o.src=r,i&&(o.srcset=i),()=>{s=!1}},[t,e,r,i]),s}((0,s.Z)({},m,{src:A,srcSet:w})),k=A||w,P=k&&"error"!==S,R=(0,s.Z)({},r,{colorDefault:!P,component:l,variant:Z}),j=v(R),[D,N]=(0,p.Z)("img",{className:j.img,elementType:x,externalForwardedProps:{slots:c,slotProps:{img:(0,s.Z)({},m,d.img)}},additionalProps:{alt:n,src:A,srcSet:w,sizes:C},ownerState:R});return y=P?(0,u.jsx)(D,(0,s.Z)({},N)):a||0===a?a:k&&n?n[0]:(0,u.jsx)(z,{ownerState:R,className:j.fallback}),(0,u.jsx)(b,(0,s.Z)({as:l,ownerState:R,className:(0,f.Z)(j.root,h),ref:e},M,{children:y}))});var C=m},54801:function(t,e,r){"use strict";r.d(e,{$:function(){return o}});var i=r(1977),s=r(8027);function o(t){return(0,s.ZP)("MuiAvatar",t)}let f=(0,i.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);e.Z=f},11288:function(t){t.exports=function(t){var e={};function r(i){if(e[i])return e[i].exports;var s=e[i]={exports:{},id:i,loaded:!1};return t[i].call(s.exports,s,s.exports,r),s.loaded=!0,s.exports}return r.m=t,r.c=e,r.p="",r(0)}([function(t,e,r){let i=r(1),s=r(2),o=[,,,,];function f(){let t=o[0]^o[0]<<11;return o[0]=o[1],o[1]=o[2],o[2]=o[3],o[3]=o[3]^o[3]>>19^t^t>>8,(o[3]>>>0)/2147483648}function n(){let t=Math.floor(360*f()),e=60*f()+40,r=(f()+f()+f()+f())*25;return[t/360,e/100,r/100]}t.exports=function(t){let e=function(t){if(!t.seed)throw Error("No seed provided");return function(t){for(let t=0;t<o.length;t++)o[t]=0;for(let e=0;e<t.length;e++)o[e%4]=(o[e%4]<<5)-o[e%4]+t.charCodeAt(e)}(t.seed),Object.assign({size:8,scale:16,color:n(),bgcolor:n(),spotcolor:n()},t)}({seed:t.toLowerCase()}),r=function(t){let e=Math.ceil(t/2),r=t-e,i=[];for(let s=0;s<t;s++){let t=[];for(let r=0;r<e;r++)t[r]=Math.floor(2.3*f());let s=t.slice(0,r).reverse();t=t.concat(s);for(let e=0;e<t.length;e++)i.push(t[e])}return i}(e.size),a=Math.sqrt(r.length),h=new i(e.size*e.scale,e.size*e.scale,3);h.color(...s(...e.bgcolor));let l=h.color(...s(...e.color)),u=h.color(...s(...e.spotcolor));for(let t=0;t<r.length;t++){let i=Math.floor(t/a),s=t%a;if(r[t]){let o=1==r[t]?l:u;!function(t,e,r,i,s,o){for(let f=0;f<i;f++)for(let i=0;i<s;i++)t.buffer[t.index(e+f,r+i)]=o}(h,s*e.scale,i*e.scale,e.scale,e.scale,o)}}return`data:image/png;base64,${h.getBase64()}`}},function(t,e){/**
	 * A handy class to calculate color values.
	 *
	 * @version 1.0
	 * @author Robert Eisele <robert@xarg.org>
	 * @copyright Copyright (c) 2010, Robert Eisele
	 * @link http://www.xarg.org/2010/03/generate-client-side-png-files-using-javascript/
	 * @license http://www.opensource.org/licenses/bsd-license.php BSD License
	 *
	 */t.exports=function(t,e,r){function i(t,e){for(var r=2;r<arguments.length;r++)for(var i=0;i<arguments[r].length;i++)t[e++]=arguments[r].charAt(i)}function s(t){return String.fromCharCode(t>>24&255,t>>16&255,t>>8&255,255&t)}function o(t){return String.fromCharCode(255&t,t>>8&255)}this.width=t,this.height=e,this.depth=r,this.pix_size=e*(t+1),this.data_size=2+this.pix_size+5*Math.floor((65534+this.pix_size)/65535)+4,this.ihdr_offs=0,this.ihdr_size=25,this.plte_offs=this.ihdr_offs+this.ihdr_size,this.plte_size=8+3*r+4,this.trns_offs=this.plte_offs+this.plte_size,this.trns_size=8+r+4,this.idat_offs=this.trns_offs+this.trns_size,this.idat_size=8+this.data_size+4,this.iend_offs=this.idat_offs+this.idat_size,this.iend_size=12,this.buffer_size=this.iend_offs+this.iend_size,this.buffer=[],this.palette={},this.pindex=0;for(var f,n,a,h=[],l=0;l<this.buffer_size;l++)this.buffer[l]="\x00";i(this.buffer,this.ihdr_offs,s(this.ihdr_size-12),"IHDR",s(t),s(e),"\b\x03"),i(this.buffer,this.plte_offs,s(this.plte_size-12),"PLTE"),i(this.buffer,this.trns_offs,s(this.trns_size-12),"tRNS"),i(this.buffer,this.idat_offs,s(this.idat_size-12),"IDAT"),i(this.buffer,this.iend_offs,s(this.iend_size-12),"IEND");var u=30912;u+=31-u%31,i(this.buffer,this.idat_offs+8,String.fromCharCode((f=u)>>8&255,255&f));for(var l=0;(l<<16)-1<this.pix_size;l++)l+65535<this.pix_size?(n=65535,a="\x00"):(n=this.pix_size-(l<<16)-l,a="\x01"),i(this.buffer,this.idat_offs+8+2+(l<<16)+(l<<2),a,o(n),o(~n));for(var l=0;l<256;l++){for(var c=l,d=0;d<8;d++)c=1&c?-306674912^c>>1&2147483647:c>>1&2147483647;h[l]=c}this.index=function(t,e){var r=e*(this.width+1)+t+1;return this.idat_offs+8+2+5*Math.floor(r/65535+1)+r},this.color=function(t,e,r,i){var s=(((i=i>=0?i:255)<<8|t)<<8|e)<<8|r;if(void 0===this.palette[s]){if(this.pindex==this.depth)return"\x00";var o=this.plte_offs+8+3*this.pindex;this.buffer[o+0]=String.fromCharCode(t),this.buffer[o+1]=String.fromCharCode(e),this.buffer[o+2]=String.fromCharCode(r),this.buffer[this.trns_offs+8+this.pindex]=String.fromCharCode(i),this.palette[s]=String.fromCharCode(this.pindex++)}return this.palette[s]},this.getBase64=function(){var t,e,r,i,s,o,f,n=this.getDump(),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",h=n.length,l=0,u="";do i=(t=n.charCodeAt(l))>>2,s=(3&t)<<4|(e=n.charCodeAt(l+1))>>4,r=n.charCodeAt(l+2),o=h<l+2?64:(15&e)<<2|r>>6,f=h<l+3?64:63&r,u+=a.charAt(i)+a.charAt(s)+a.charAt(o)+a.charAt(f);while((l+=3)<h);return u},this.getDump=function(){for(var t=1,e=0,r=5552,o=0;o<this.height;o++)for(var f=-1;f<this.width;f++)t+=this.buffer[this.index(f,o)].charCodeAt(0),e+=t,0==(r-=1)&&(t%=65521,e%=65521,r=5552);function n(t,e,r){for(var o=-1,f=4;f<r-4;f+=1)o=h[(o^t[e+f].charCodeAt(0))&255]^o>>8&16777215;i(t,e+r-4,s(-1^o))}return t%=65521,e%=65521,i(this.buffer,this.idat_offs+this.idat_size-8,s(e<<16|t)),n(this.buffer,this.ihdr_offs,this.ihdr_size),n(this.buffer,this.plte_offs,this.plte_size),n(this.buffer,this.trns_offs,this.trns_size),n(this.buffer,this.idat_offs,this.idat_size),n(this.buffer,this.iend_offs,this.iend_size),"\x89PNG\r\n\x1a\n"+this.buffer.join("")}}},function(t,e){function r(t,e,r){return(r<0&&(r+=1),r>1&&(r-=1),r<1/6)?t+(e-t)*6*r:r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}t.exports=function(t,e,i){let s,o,f;if(0==e)s=o=f=i;else{let n=i<.5?i*(1+e):i+e-i*e,a=2*i-n;s=r(a,n,t+1/3),o=r(a,n,t),f=r(a,n,t-1/3)}return[Math.round(255*s),Math.round(255*o),Math.round(255*f),255]}}])},11163:function(t,e,r){t.exports=r(96885)},82729:function(t,e,r){"use strict";function i(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}r.d(e,{_:function(){return i}})}}]);