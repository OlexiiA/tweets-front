import{j as e,L as c,u as m,a as n,r as p,g as d}from"./index-4d0f3cfb.js";import{T as o}from"./TweetsItem-141821b8.js";import{P as r}from"./moment-9428cbec.js";const x=({tweets:s})=>e.jsx("div",{className:"bg-gray-600 my-1",children:e.jsx(c,{to:`${s._id}`,className:"flex text-xs p-2 text-gray-300 hover:bg-gray-800 hover:text-white",children:s==null?void 0:s.title})});x.propTypes={tweets:r.shape({_id:r.string.isRequired,title:r.string}).isRequired};const u=()=>{const s=m(),{tweets:l,popularTweets:a}=n(t=>t.tweets);return p.useEffect(()=>{s(d())},[s]),l.length?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"max-w-full mx-auto py-10 p-4",children:e.jsxs("div",{className:"flex justify-between gap-8",children:[e.jsx("div",{className:"flex flex-col gap-10 basis-4/5",children:l.map((t,i)=>e.jsx(o,{tweets:t},i))}),e.jsxs("div",{className:"basis-1/5",children:[e.jsx("div",{className:"text-xs uppercase text-white",children:"Popular tweets"}),a==null?void 0:a.map((t,i)=>e.jsx(x,{tweets:t},i))]})]})}),e.jsx("footer",{className:"py-3 text-center bg-gray-900",children:e.jsxs("div",{className:"max-w-full mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsx("h6",{className:"text-white text-sm",children:"OLEKSII ANDRIUSHCHENKO"}),e.jsx("p",{className:"text-white text-sm",children:"©️ All CopiRigts Reserved 2023"})]})})]}):e.jsx("div",{className:"text-xl text-center text-white py-10",children:"No tweets"})};export{u as default};
