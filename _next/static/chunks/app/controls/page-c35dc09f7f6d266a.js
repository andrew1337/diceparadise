(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4],{1676:function(e,t,n){Promise.resolve().then(n.bind(n,3697))},3697:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(7437),s=n(2265),i=n(430);n(3009);let a=e=>{let{usernames:t,setUsers:n,resetDices:s,resetAll:i}=e,a=(e,r)=>n(t.map(t=>t.id===r?{...t,name:e}:t)),c=(e,r,s)=>n(t.map(t=>t.id===r?{...t,[s]:Number(e)}:t));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"usernames",children:t.map(e=>(0,r.jsxs)("div",{className:"usernames-row",children:[(0,r.jsxs)("div",{children:["Player ",e.id+1]}),(0,r.jsx)("input",{type:"text",className:"usernames-input",value:e.name,onChange:t=>a(t.target.value,e.id),placeholder:"Enter player name"}),(0,r.jsx)("div",{children:"Dices"}),(0,r.jsx)("input",{type:"number",min:1,max:6,value:e.dice_1||void 0,onChange:t=>c(t.target.value,e.id,"dice_1")}),(0,r.jsx)("input",{type:"number",min:1,max:6,value:e.dice_2||void 0,onChange:t=>c(t.target.value,e.id,"dice_2")}),(0,r.jsx)("input",{type:"number",min:1,max:6,value:e.dice_3||void 0,onChange:t=>c(t.target.value,e.id,"dice_3")})]},e.id))}),(0,r.jsx)("button",{className:"reset",type:"button",onClick:s,children:"Reset dices"}),(0,r.jsx)("button",{className:"reset all",type:"button",onClick:i,children:"Reset Players"})]})},c={id:0,name:"",dice_1:0,dice_2:0,dice_3:0,sum:0};var l=()=>{var e;let t=JSON.parse(null===(e=window.localStorage)||void 0===e?void 0:e.getItem("usernames")),[n,l]=(0,s.useState)(null==t?void 0:t.length),[o,u]=(0,i.Z)("usernames",t||[]),d=(0,s.useCallback)(()=>{l(void 0),u([])},[]),m=()=>{let e=[];if(o.length<n)for(let t=0;t<n;t++)e.push({...c,id:t});else e=o.sort((e,t)=>t.dice_1+t.dice_2+t.dice_3-(e.dice_1+e.dice_2+e.dice_3)).slice(0,n);u(e)};return(0,s.useEffect)(()=>{m()},[n]),(0,r.jsxs)("div",{className:"controls",children:[(0,r.jsxs)("div",{className:"count",children:["Start count of users:",(0,r.jsxs)("div",{className:"countItem",children:[(0,r.jsx)("input",{type:"radio",name:"count",id:"12",value:12,checked:12===n,onChange:()=>l(12)}),(0,r.jsx)("label",{htmlFor:"12",children:"12"})]}),(0,r.jsxs)("div",{className:"countItem",children:[(0,r.jsx)("input",{type:"radio",name:"count",id:"6",value:6,checked:6===n,onChange:()=>l(6)}),(0,r.jsx)("label",{htmlFor:"6",children:"6"})]})]}),n&&(0,r.jsx)(a,{usernames:o,setUsers:u,resetDices:()=>{u(o.map(e=>({...e,dice_1:0,dice_2:0,dice_3:0})).sort((e,t)=>e.id-t.id))},resetAll:d})]})}},430:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(2265);function s(e,t){let[n,s]=(0,r.useState)(t),[i,a]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{s((()=>{try{let n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(e){return t}})()),a(!0)},[e]),(0,r.useEffect)(()=>{let t=t=>{t.key===e&&t.newValue&&s(JSON.parse(t.newValue))};return window.addEventListener("storage",t),()=>{window.removeEventListener("storage",t)}},[e]),[n,t=>{let r=t instanceof Function?t(n):t;(function(t){if(i)try{window.localStorage.setItem(e,JSON.stringify(t)),window.dispatchEvent(new StorageEvent("storage",{key:e,newValue:JSON.stringify(t)}))}catch(e){}})(r),s(r)}]}},3009:function(){},622:function(e,t,n){"use strict";var r=n(2265),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,n){var r,i={},o=null,u=null;for(r in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:s,type:e,key:o,ref:u,props:i,_owner:c.current}}t.Fragment=i,t.jsx=o,t.jsxs=o},7437:function(e,t,n){"use strict";e.exports=n(622)}},function(e){e.O(0,[971,938,744],function(){return e(e.s=1676)}),_N_E=e.O()}]);