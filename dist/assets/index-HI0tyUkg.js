import{F as S,a as k,b as N,R as c,d as E,g as O,H as f,h as V,I as F,j as t,J as G,G as W,T as j,B as H,u as $,C as A,P as L}from"./index-TPODpp2I.js";import{C as w,c as q,P as J,S as M}from"./PageHeading-CGu8zPTn.js";import"./Title-CbblRd5D.js";var B={root:"m-347db0ec","root--dot":"m-fbd81e3d",label:"m-5add502a",section:"m-91fdda9b"};const U={},Y=O((e,{radius:a,color:s,gradient:o,variant:r,size:i,autoContrast:d})=>{const n=e.variantColorResolver({color:s||e.primaryColor,theme:e,gradient:o,variant:r||"filled",autoContrast:d});return{root:{"--badge-height":f(i,"badge-height"),"--badge-padding-x":f(i,"badge-padding-x"),"--badge-fz":f(i,"badge-fz"),"--badge-radius":a===void 0?void 0:V(a),"--badge-bg":s||r?n.background:void 0,"--badge-color":s||r?n.color:void 0,"--badge-bd":s||r?n.border:void 0,"--badge-dot-color":r==="dot"?F(s,e):void 0}}}),p=S((e,a)=>{const s=k("Badge",U,e),{classNames:o,className:r,style:i,styles:d,unstyled:n,vars:g,radius:b,color:y,gradient:x,leftSection:l,rightSection:C,children:I,variant:v,fullWidth:R,autoContrast:ee,circle:D,mod:P,...z}=s,m=N({name:"Badge",props:s,classes:B,className:r,style:i,classNames:o,styles:d,unstyled:n,vars:g,varsResolver:Y});return c.createElement(E,{variant:v,mod:[{block:R,circle:D},P],...m("root",{variant:v}),ref:a,...z},l&&c.createElement("span",{...m("section"),"data-position":"left"},l),c.createElement("span",{...m("label")},I),C&&c.createElement("span",{...m("section"),"data-position":"right"},C))});p.classes=B;p.displayName="@mantine/core/Badge";var T={root:"m-4451eb3a"};const Z={},h=S((e,a)=>{const s=k("Center",Z,e),{classNames:o,className:r,style:i,styles:d,unstyled:n,vars:g,inline:b,mod:y,...x}=s,l=N({name:"Center",props:s,classes:T,className:r,style:i,classNames:o,styles:d,unstyled:n,vars:g});return c.createElement(E,{ref:a,mod:[{inline:b},y],...l("root"),...x})});h.classes=T;h.displayName="@mantine/core/Center";const u=e=>t.jsxs(w,{shadow:"sm",padding:"lg",radius:"md",withBorder:!0,children:[t.jsx(w.Section,{children:t.jsx(h,{children:t.jsx(G,{src:e.img,height:100,w:"auto",fit:"contain",alt:"Norway",my:"md"})})}),t.jsxs(W,{justify:"space-between",mt:"md",mb:"xs",children:[t.jsx(j,{fw:500,ta:"center",children:e.title}),e.subtitle&&t.jsx(p,{color:"pink",children:e.subtitle})]}),t.jsx(j,{size:"sm",c:"dimmed",children:e.desc}),t.jsx(H,{fullWidth:!0,mt:"md",radius:"md",onClick:e.onClick,children:e.btn})]}),_="/assets/setup-C09oIBx_.svg",K="/assets/create-DCuOW5EC.svg",Q="/assets/Verify-DZL2uDGs.svg",X="/assets/custom-DHvqy8ej.svg",oe=()=>{const e=$(),a=o=>{e(o)},s=o=>{window.open(o)};return t.jsxs(A,{fluid:!0,px:"md",className:q.wrapper,my:"lg",children:[t.jsx(J,{title:"Our Features",desc:"Simplify trade document processing with TradeTez. Effortlessly create, authenticate, and verify configuration files and documents with our user-friendly platform!"}),t.jsx(L,{p:"xl",children:t.jsxs(M,{cols:4,children:[t.jsx(u,{title:"Config Setup",img:_,subtitle:"New",desc:`TradeTez simplifies the configuration file creation process, making it accessible to users without technical expertise. 
`,btn:"Setup Now",onClick:()=>a("/setup")}),t.jsx(u,{title:"Create Documents",img:K,desc:"Use tradetrust.io to upload your configuration file, and easily create and revoke documents with just a few clicks.",onClick:()=>s("https://creator.tradetrust.io/"),btn:"Create"}),t.jsx(u,{title:"Verify Documents",img:Q,desc:"Effortlessly upload .tt extension files to create and verify documents on tradetrust.io. Simplify your document management process with ease.",onClick:()=>s("https://dev.tradetrust.io/verify"),btn:"Verify"}),t.jsx(u,{title:"Customize Documents",img:X,desc:"AI-based MLETR document builder based on the Open Attestation schema. This feature will provide users with a drag-and-drop interface.",onClick:()=>a("/comingsoon"),btn:"Create Your Own"})]})})]})};export{oe as default};