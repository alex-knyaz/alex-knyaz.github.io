import{a as e,t as s,c as t}from"./disclose-version.7cmwhoY3.js";import{v as a,a4 as r,x as o,c as i,r as n,t as l,w as c,g as d,a as v,f as m,s as f}from"./runtime.CYGL3sOw.js";import{d as p,s as h}from"./render.Dly8Qiyy.js";import{e as g,i as u,s as b,a as w,M as x,S as $}from"./SwitchThemeButton.C4ZbfLZM.js";import{p as k,s as j,r as y}from"./props.ByZabtiA.js";import{i as T}from"./if.DfBHrz97.js";import{s as B}from"./snippet.XRpBfYfI.js";var E=s('<li class="m-0 svelte-n8xtes"><a> </a></li>'),I=s('<nav id="toc" class="text-sm relative  svelte-n8xtes"><div class="svelte-n8xtes"><ul class="!list-none !p-0 !m-0 svelte-n8xtes"></ul></div></nav>');function S(s,t){a(t,!0);let m=v("");function f(){const e=t.headings.map((e=>document.getElementById(e.id))),s=window.scrollY;for(let a=e.length-1;a>=0;1+(a-=1)){const r=e[a],o=e[a+1];let i=100;if(r&&o){const e=o.offsetTop-r.offsetTop;i=Math.min(.3*e,i)}if(r&&r.offsetTop<=s+i){c(m,k(t.headings[a].id));break}}}function p(e){e.preventDefault();const s=e.currentTarget.getAttribute("href"),t=s?.slice(1);if(t){const e=document.getElementById(t);e&&(e.scrollIntoView({behavior:"smooth",block:"start"}),history.pushState(null,"",s))}}r((()=>(f(),window.addEventListener("scroll",f),()=>window.removeEventListener("scroll",f))));var x=I(),$=i(x),j=i($);g(j,21,(()=>t.headings),u,((s,t)=>{let a=()=>d(t).id;var r=E(),o=i(r);o.__pointerdown=p;var c=i(o,!0);n(o),n(r),l((()=>{b(r,"style",`margin-left: ${.5*(d(t).level-1)??""}em`),b(o,"href",`#${a()??""}`),w(o,`toc-link ${(d(m)===a()?"active":"")??""} svelte-n8xtes`),h(c,d(t).text)})),e(s,r)})),n(j),n($),n(x),e(s,x),o()}p(["pointerdown"]);var L=s('<!> <div class="m-4"><article id="article-container" class="border md p-4 mx-auto rounded-2xl dark:bg-slate-800 dark:border-slate-700 main-container relative svelte-vak8z0"><div class="absolute top-4 right-4"><!></div> <div><a href="/" title="go to the homepage">← go back</a></div> <div class="prose dark:prose-invert"><!></div></article></div>',1);function M(s,r){a(r,!0);let l=y(r,["$$slots","$$events","$$legacy"]);var c=L(),d=m(c);x(d,j((()=>l),{type:"blog"}));var v=f(d,2),p=i(v),h=i(p),g=i(h);$(g),n(h);var u=f(h,4),b=i(u);T(b,(()=>r.children),(s=>{var a=t(),o=m(a);B(o,(()=>r.children)),e(s,a)})),n(u),n(p),n(v),e(s,c),o()}export{M as B,S as T};
