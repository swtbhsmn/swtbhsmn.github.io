import{j as e,q as i,T as n,t as u,S as p,P as s,v as b,I as c,W as w}from"./index-e890e1dd.js";import{C as m,a as v}from"./CardHeader-12136802.js";import{L as y,G as o}from"./Link-8617a182.js";import{C as k}from"./Container-ba47b0c7.js";import{B as S}from"./Button-0a5dc711.js";const I="/assets/bg-9b4609ff.jpg",C="/assets/bg_1-306b6bdc.jpg";function R(){return e.jsx(e.Fragment,{children:e.jsxs(i,{sx:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:350},children:[e.jsxs(i,{children:[e.jsx(n,{sx:{fontSize:20},children:"Hi, I am"}),e.jsx(n,{sx:{fontSize:"6.5vw"},children:"Swetabh Suman"})]}),e.jsxs(i,{sx:{display:{md:"block"},m:5},children:[e.jsx(n,{sx:{mr:1},children:"I am a software engineer with a background in both backend and frontend development."}),e.jsx(n,{children:"I love building applications that solve real-world problems and enhance user experiences."})]}),e.jsxs(i,{sx:{display:{xs:"none",sm:"none"}},children:[e.jsx(n,{sx:{mr:1,display:{xs:"none",sm:"none"}},children:"I am a software engineer with a background in both backend and frontend development."}),e.jsx(n,{sx:{display:{xs:"none",sm:"none"}},children:"I love building applications that solve real-world problems and enhance user experiences."})]})]})})}function T(){const r=u("up","md");return e.jsxs(m,{children:[e.jsx(i,{sx:{minHeight:330,background:`url(${r?I:C})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}),e.jsx(R,{})]})}function d({title:r,total:l,icon:t,color:h="primary",sx:x,width:a,height:g,...f}){return e.jsxs(m,{component:p,spacing:3,direction:"row",sx:{mt:2,px:3,py:5,borderRadius:2,maxHeight:140,...x},...f,children:[t&&e.jsx(i,{sx:{width:a||64,height:g||64},children:t}),e.jsxs(p,{spacing:.5,children:[e.jsx(n,{variant:"h4",children:l}),e.jsx(n,{variant:"subtitle2",sx:{color:"text.disabled"},children:r})]})]})}d.propTypes={color:s.string,icon:s.oneOfType([s.element,s.string]),sx:s.object,title:s.string,total:s.string};function j({title:r,subheader:l,list:t,...h}){const x=u("up","md");return e.jsxs(m,{...h,children:[e.jsx(v,{title:r,subheader:l}),e.jsx(i,{sx:{p:3,gap:2,display:"grid",gridTemplateColumns:x?"repeat(4, 1fr)":"repeat(2, 1fr)"},children:t.map(a=>e.jsx(y,{href:a.value,target:"_blank",children:e.jsxs(b,{variant:"outlined",sx:{py:2.5,textAlign:"center",borderStyle:"dashed"},children:[e.jsx(i,{sx:{mb:.5},children:a.icon}),e.jsx(n,{variant:"body2",sx:{color:"text.secondary"},children:a.name})]})},a.name))})]})}j.propTypes={title:s.string,subheader:s.string,list:s.array.isRequired};const B="/assets/Swetabh_Suman_Resume-49187fbe.pdf";function P(){function r(){const l=B,t=document.createElement("a");t.href=l,t.download="Swetabh_Suman_Resume.pdf",t.click()}return e.jsx(k,{maxWidth:"xl",children:e.jsxs(o,{container:!0,spacing:3,children:[e.jsx(o,{xs:12,md:12,lg:12,children:e.jsx(T,{})}),e.jsx(o,{xs:12,md:12,lg:12,children:e.jsx(j,{title:"Social Media",list:[{name:"FaceBook",value:"https://www.facebook.com/swetabh.suman.777",icon:e.jsx(c,{icon:"eva:facebook-fill",color:"#1877F2",width:32})},{name:"Github",value:"https://www.github.com/swtbhsmn",icon:e.jsx(c,{icon:"eva:github-fill",color:"#000",width:32})},{name:"Linkedin",value:"https://www.linkedin.com/in/swetabhsuman/",icon:e.jsx(c,{icon:"eva:linkedin-fill",color:"#006097",width:32})},{name:"Twitter",value:"https://twitter.com/swetabhsroy",icon:e.jsx(c,{icon:"eva:twitter-fill",color:"#1C9CEA",width:32})}]})}),e.jsx(o,{xs:12,sm:6,md:4,children:e.jsx(d,{title:"Blood Group",total:"B+",color:"warning",icon:e.jsx("img",{alt:"icon",src:"/assets/images/avatars/blood.webp"}),width:30,height:30})}),e.jsx(o,{xs:12,sm:6,md:4,children:e.jsx(d,{title:"Date Of Birth",total:"17-03-1998",color:"info",icon:e.jsx("img",{alt:"icon",src:"/assets/images/avatars/dob_gif.gif"}),width:80,height:80})}),e.jsx(o,{xs:12,sm:6,md:4,children:e.jsx(d,{title:"Mobile Number",total:"+91 7903385534",color:"success",icon:e.jsx("img",{alt:"icon",src:"/assets/images/avatars/mobile.webp"})})}),e.jsx(i,{sx:{position:"fixed",bottom:0,right:0,m:1},children:e.jsx(S,{onClick:r,component:"label",variant:"contained",startIcon:e.jsx(c,{icon:"eva:download-fill"}),children:"Resume"})})]})})}function z(){return e.jsxs(e.Fragment,{children:[e.jsx(w,{children:e.jsx("title",{children:" Profile"})}),e.jsx(P,{})]})}export{z as default};
