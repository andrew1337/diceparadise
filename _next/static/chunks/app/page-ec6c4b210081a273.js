(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6026:function(e,t,s){Promise.resolve().then(s.bind(s,3669))},3669:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return m}});var a=s(7437),n=s(6691),i=s.n(n),c=s(2265),r=e=>{let[t,s]=(0,c.useState)(null),[a,n]=(0,c.useState)(null);return(0,c.useEffect)(()=>{if(t)return;let a=!1;return(async()=>{if(!a)try{s(await navigator.mediaDevices.getUserMedia(e))}catch(e){n(e)}})(),()=>{a=!0,t&&((null==t?void 0:t.getVideoTracks)&&t.getVideoTracks().map(e=>e.stop()),(null==t?void 0:t.getAudioTracks)&&t.getAudioTracks().map(e=>e.stop()),(null==t?void 0:t.stop)&&t.stop())}},[e,t,a]),{stream:t,error:a}},l={src:"/diceparadise//_next/static/media/frame.3e6f3d28.png",height:883,width:1815,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAS0lEQVR42mP4tDNc9f/XxZzfT+bxPt5fyvr3UCLrn6uVvP+fTed8sNJPleHRNGUOBhzgYJMCB2EFn3ZGgKzggltxMAFmBdeDlX6qABOfKlSuUTRrAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4};s(4444);let d=()=>{let{stream:e,error:t}=r({audio:!1,video:!0});return(0,a.jsxs)("div",{className:"stream-box",id:"stream",children:[(0,a.jsx)(i(),{className:"frame",id:"frame-top",src:l,alt:"*"}),!t&&(0,a.jsx)("video",{className:"video",muted:!0,autoPlay:!0,ref:t=>{t&&(t.srcObject=e)}})]})};var o=s(430);s(571);var u=()=>{let[e]=(0,o.Z)("usernames",[]),t=(0,c.useMemo)(()=>e.sort((e,t)=>t.dice_1+t.dice_2+t.dice_3-(e.dice_1+e.dice_2+e.dice_3)),[e]);return(0,a.jsx)("div",{className:"results",children:(0,a.jsx)("div",{className:"table",children:t.map((e,s)=>{let n=e.dice_1+e.dice_2+e.dice_3,i=12===t.length&&s<6&&!!n,c=18===n;return(0,a.jsxs)("div",{className:"row ".concat(c&&"win"),children:[(0,a.jsx)("div",{className:"name",children:e.name}),(0,a.jsx)("div",{className:"count ".concat(i&&"green"),children:e.dice_1||"-"}),(0,a.jsx)("div",{className:"count ".concat(i&&"green"),children:e.dice_2||"-"}),(0,a.jsx)("div",{className:"count ".concat(i&&"green"),children:e.dice_3||"-"}),(0,a.jsx)("div",{className:"count sum ".concat(i&&"green"),children:n})]},e.id)})})})},m=()=>(0,a.jsxs)("div",{className:"main",children:[(0,a.jsx)(u,{}),(0,a.jsxs)("div",{className:"right",children:[(0,a.jsxs)("div",{className:"bank",children:[(0,a.jsx)("div",{className:"gold",children:"GRAND TOURNAMENT"}),(0,a.jsxs)("div",{className:"sum",children:[(0,a.jsx)("span",{className:"gold",children:"Prize pool"})," 300 000 ",(0,a.jsx)("span",{className:"gold",children:"Gel"})]})]}),(0,a.jsx)(d,{})]})]})},430:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});var a=s(2265);function n(e,t){let[s,n]=(0,a.useState)(t),[i,c]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{n((()=>{try{let s=window.localStorage.getItem(e);return s?JSON.parse(s):t}catch(e){return t}})()),c(!0)},[e]),(0,a.useEffect)(()=>{let t=t=>{t.key===e&&t.newValue&&n(JSON.parse(t.newValue))};return window.addEventListener("storage",t),()=>{window.removeEventListener("storage",t)}},[e]),[s,t=>{let a=t instanceof Function?t(s):t;(function(t){if(i)try{window.localStorage.setItem(e,JSON.stringify(t)),window.dispatchEvent(new StorageEvent("storage",{key:e,newValue:JSON.stringify(t)}))}catch(e){}})(a),n(a)}]}},571:function(){},4444:function(){}},function(e){e.O(0,[986,971,938,744],function(){return e(e.s=6026)}),_N_E=e.O()}]);