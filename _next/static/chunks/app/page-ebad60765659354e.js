(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6026:function(e,t,s){Promise.resolve().then(s.bind(s,3669))},3669:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return m}});var n=s(7437),r=s(2265),a=s(6691),l=s.n(a),i=e=>{let[t,s]=(0,r.useState)(null),[n,a]=(0,r.useState)(null);return(0,r.useEffect)(()=>{if(t)return;let n=!1;return(async()=>{if(!n)try{s(await navigator.mediaDevices.getUserMedia(e))}catch(e){a(e)}})(),()=>{n=!0,t&&((null==t?void 0:t.getVideoTracks)&&t.getVideoTracks().map(e=>e.stop()),(null==t?void 0:t.getAudioTracks)&&t.getAudioTracks().map(e=>e.stop()),(null==t?void 0:t.stop)&&t.stop())}},[e,t,n]),{stream:t,error:n}},c={src:"/diceparadise//_next/static/media/frame.3e6f3d28.png",height:883,width:1815,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAS0lEQVR42mP4tDNc9f/XxZzfT+bxPt5fyvr3UCLrn6uVvP+fTed8sNJPleHRNGUOBhzgYJMCB2EFn3ZGgKzggltxMAFmBdeDlX6qABOfKlSuUTRrAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4};s(4444);let o=()=>{let{stream:e,error:t}=i({audio:!1,video:!0});return(0,n.jsxs)("div",{className:"stream-box",id:"stream",children:[(0,n.jsx)(l(),{className:"frame",id:"frame-top",src:c,alt:"*"}),!t&&(0,n.jsx)("video",{className:"video",muted:!0,autoPlay:!0,ref:t=>{t&&(t.srcObject=e)}})]})};var d=s(430);s(571);var u=()=>{let e=(0,r.useRef)(null),t=(0,r.useRef)(null),[s,a]=(0,r.useState)(0),[l]=(0,d.Z)("users",[]),[i]=(0,d.Z)("prizes",[]),c=(0,r.useMemo)(()=>l.sort((e,t)=>t.primary_roll-e.primary_roll||t.optional_roll-e.optional_roll),[l]);return(0,r.useEffect)(()=>{if(l.length!==t.current){let{height:s}=e.current.getBoundingClientRect();a(s),t.current=l.length}},[l]),(0,n.jsx)("div",{className:"results",children:(0,n.jsx)("div",{className:"table",ref:e,children:l.map((e,t)=>{let a=c.findIndex(t=>t.id===e.id),o=12===l.length&&a<6&&!!e.primary_roll,d=18===e.primary_roll||18===e.optional_roll,u=6===l.length&&!!i;return(0,n.jsxs)(r.Fragment,{children:[(0,n.jsx)("div",{className:"row invisible"}),(0,n.jsxs)("div",{className:"row ".concat(d&&"win"),style:{top:s/l.length*a},children:[(0,n.jsx)("div",{className:"name",children:e.name}),(0,n.jsx)("div",{className:"count ".concat(o&&"green"),children:d?"Jackpot":t+1}),console.log(i),(0,n.jsx)("div",{className:"count sum ".concat(o&&"green"),children:e.primary_roll}),(0,n.jsx)("div",{className:"count sum ".concat(o&&"green"),children:e.optional_roll}),(0,n.jsx)("div",{className:"prize",children:u&&i[t]>0&&i[t]+" Gel"})]})]},e.id)})})})},m=()=>(0,n.jsxs)("div",{className:"main",children:[(0,n.jsx)(u,{}),(0,n.jsxs)("div",{className:"right",children:[(0,n.jsxs)("div",{className:"bank",children:[(0,n.jsx)("div",{className:"gold",children:"GRAND TOURNAMENT"}),(0,n.jsxs)("div",{className:"sum",children:[(0,n.jsx)("span",{className:"gold",children:"Prize pool"})," 300 000"," ",(0,n.jsx)("span",{className:"gold",children:"Gel"})]})]}),(0,n.jsx)(o,{})]})]})},430:function(e,t,s){"use strict";s.d(t,{Z:function(){return r}});var n=s(2265);function r(e,t){let[s,r]=(0,n.useState)(t),[a,l]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{r((()=>{try{let s=window.localStorage.getItem(e);return s?JSON.parse(s):t}catch(e){return t}})()),l(!0)},[e]),(0,n.useEffect)(()=>{let t=t=>{t.key===e&&t.newValue&&r(JSON.parse(t.newValue))};return window.addEventListener("storage",t),()=>{window.removeEventListener("storage",t)}},[e]),[s,t=>{let n=t instanceof Function?t(s):t;(function(t){if(a)try{window.localStorage.setItem(e,JSON.stringify(t)),window.dispatchEvent(new StorageEvent("storage",{key:e,newValue:JSON.stringify(t)}))}catch(e){}})(n),r(n)}]}},571:function(){},4444:function(){}},function(e){e.O(0,[986,971,938,744],function(){return e(e.s=6026)}),_N_E=e.O()}]);