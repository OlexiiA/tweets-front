import{r as s,j as a,i as l}from"./index-4d0f3cfb.js";import{T as m}from"./TweetsItem-141821b8.js";import"./moment-9428cbec.js";const i=()=>{const[t,r]=s.useState([]),o=async()=>{try{const{data:e}=await l.get("/tweets/user/me");r(e)}catch(e){console.log(e)}};return s.useEffect(()=>{o()},[]),a.jsx("div",{className:"w-1/2 py-10 flex flex-col gap-10 max-w-full p-4",children:t==null?void 0:t.map((e,c)=>a.jsx(m,{tweets:e},c))})};export{i as default};
