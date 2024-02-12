import{K as F,o as f,c as k,v as r,x as c,L as w,M as T,F as t,y as s,N as m,z as C,I,r as _,u as R,A as g,J as v,G as S,m as $}from"./entry.CtRdw_C7.js";const B=["id","placeholder","type","maxlength"],U={key:0,class:"text-red-500 text-[14px] font-semibold"},V={__name:"TextInput",props:["input","placeholder","inputType","max","autoFocus","error"],emits:["update:input"],setup(y,{emit:p}){const u=p,n=y,{input:i,placeholder:d,inputType:x,max:b,autoFocus:l,error:e}=F(n);f(()=>{l.value&&document.getElementById(`input-${d.value}`).focus()});const a=k({get:()=>i.value,set:o=>u("update:input",o)});return(o,h)=>(r(),c("div",null,[w(s("input",{id:`input-${t(d)}`,placeholder:t(d),class:"block w-full bg-[#F1F1F2] text-gray-800 border border-gray-300 rounded-md py-2.5 px-3 focus:outline-none",type:t(x),"onUpdate:modelValue":h[0]||(h[0]=N=>m(a)?a.value=N:null),autocomplete:"off",maxlength:t(b)},null,8,B),[[T,t(a)]]),t(e)?(r(),c("span",U,C(t(e)),1)):I("",!0)]))}},D=s("div",{class:"my-3"},[s("h2",{class:"text-center text-2xl font-semibold"}," Guccho Study Planner ")],-1),L={class:"max-w-md mx-auto bg-white m-3 py-6 border rounded-md"},M={key:0},z=s("div",{class:"text-center text-[28px] mb-4 font-bold"},"Login",-1),A={class:"px-6 pb-2"},E={class:"px-6 pb-2 mt-6"},G=["disabled"],P={key:1},J=s("div",{class:"text-center text-[28px] mb-4 font-bold"},"Sign up",-1),K={class:"px-6 pb-2"},j={class:"px-6 pb-2"},q={class:"px-6 pb-2 mt-6"},H=["disabled"],Q={__name:"login",setup(y){const{$userStore:p}=$();let u=_(null),n=_(null),i=_(null);const d=R(),x=async()=>{try{let l=n.value.slice(-11);p.login(l,d)}catch(l){console.log(l)}},b=async()=>{try{let l=n.value.slice(-11);p.register(u.value,l,i.value,d)}catch(l){console.log(l)}};return f(()=>{p.isNotRegistered=!0}),(l,e)=>{const a=V;return r(),c(S,null,[D,s("div",L,[t(p).isNotRegistered?(r(),c("div",M,[z,s("div",A,[g(a,{placeholder:"Phone Number",input:t(n),"onUpdate:input":e[0]||(e[0]=o=>m(n)?n.value=o:n=o),inputType:"tel"},null,8,["input"])]),s("div",E,[s("button",{disabled:!t(n),class:v([t(n)?"bg-blue-500":"bg-gray-200","w-full text-[17px] font-semibold text-white bg-blue-500 py-3 rounded-sm"]),onClick:e[1]||(e[1]=o=>x())}," Login ",10,G)])])):(r(),c("div",P,[J,s("div",K,[g(a,{placeholder:"Full name",input:t(u),"onUpdate:input":e[2]||(e[2]=o=>m(u)?u.value=o:u=o),inputType:"text",autoFocus:!0},null,8,["input"])]),s("div",j,[g(a,{placeholder:"Institute",input:t(i),"onUpdate:input":e[3]||(e[3]=o=>m(i)?i.value=o:i=o),inputType:"text"},null,8,["input"])]),s("div",q,[s("button",{disabled:!t(u)||!t(n)||!t(i),class:v([!t(u)||!t(n)||!t(i)?"bg-gray-200":"bg-blue-500","w-full text-[17px] font-semibold text-white bg-blue-500 py-3 rounded-sm"]),onClick:e[4]||(e[4]=o=>b())}," Sign up ",10,H)])]))])],64)}}};export{Q as default};
