(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6026:function(e,t,n){Promise.resolve().then(n.bind(n,3669))},3669:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var a=n(7437),s=n(6691),i=n.n(s),r=n(2265),c=e=>{let[t,n]=(0,r.useState)(null),[a,s]=(0,r.useState)(null);return(0,r.useEffect)(()=>{if(t)return;let a=!1;return(async()=>{if(!a)try{n(await navigator.mediaDevices.getUserMedia(e))}catch(e){s(e)}})(),()=>{a=!0,t&&((null==t?void 0:t.getVideoTracks)&&t.getVideoTracks().map(e=>e.stop()),(null==t?void 0:t.getAudioTracks)&&t.getAudioTracks().map(e=>e.stop()),(null==t?void 0:t.stop)&&t.stop())}},[e,t,a]),{stream:t,error:a}},d={src:"/diceparadise//_next/static/media/frame.3e6f3d28.png",height:883,width:1815,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAS0lEQVR42mP4tDNc9f/XxZzfT+bxPt5fyvr3UCLrn6uVvP+fTed8sNJPleHRNGUOBhzgYJMCB2EFn3ZGgKzggltxMAFmBdeDlX6qABOfKlSuUTRrAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4};n(4444);let l=()=>{let{stream:e,error:t}=c({audio:!1,video:!0});return(0,a.jsxs)("div",{className:"stream-box",id:"stream",children:[(0,a.jsx)(i(),{className:"frame",id:"frame-top",src:d,alt:"*"}),!t&&(0,a.jsx)("video",{className:"video",muted:!0,autoPlay:!0,ref:t=>{t&&(t.srcObject=e)}})]})};var u=n(430);n(571);var o=()=>{let[e]=(0,u.Z)("usernames",[]),t=(0,r.useMemo)(()=>e.sort((e,t)=>t.dice_1+t.dice_2+t.dice_3-(e.dice_1+e.dice_2+e.dice_3)),[e]);return(0,a.jsx)("div",{className:"results",children:(0,a.jsx)("div",{className:"table",children:t.map((e,n)=>{let s=e.dice_1+e.dice_2+e.dice_3,i=12===t.length&&n<6&&!!s,r=18===s;return(0,a.jsxs)("div",{className:"row ".concat(r&&"win"),children:[(0,a.jsx)("div",{className:"name",children:e.name}),(0,a.jsx)("div",{className:"count ".concat(i&&"green"),children:e.dice_1||"-"}),(0,a.jsx)("div",{className:"count ".concat(i&&"green"),children:e.dice_2||"-"}),(0,a.jsx)("div",{className:"count ".concat(i&&"green"),children:e.dice_3||"-"}),(0,a.jsx)("div",{className:"count sum ".concat(i&&"green"),children:s})]},e.id)})})})},m=()=>(0,a.jsxs)("div",{className:"main",children:[(0,a.jsx)(o,{}),(0,a.jsx)(l,{})]})},430:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(2265);function s(e,t){let[n,s]=(0,a.useState)(t),[i,r]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{s((()=>{try{let n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(e){return t}})()),r(!0)},[e]),(0,a.useEffect)(()=>{let t=t=>{t.key===e&&t.newValue&&s(JSON.parse(t.newValue))};return window.addEventListener("storage",t),()=>{window.removeEventListener("storage",t)}},[e]),[n,t=>{let a=t instanceof Function?t(n):t;(function(t){if(i)try{window.localStorage.setItem(e,JSON.stringify(t)),window.dispatchEvent(new StorageEvent("storage",{key:e,newValue:JSON.stringify(t)}))}catch(e){}})(a),s(a)}]}},571:function(){},4444:function(){}},function(e){e.O(0,[986,971,938,744],function(){return e(e.s=6026)}),_N_E=e.O()}]);