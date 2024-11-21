import{a as t,t as e}from"../chunks/disclose-version.B6hVzsSH.js";import{v as s,f as a,x as i,s as r,c as l,r as o,n as d,g as c,t as n}from"../chunks/runtime.DkEBQSWI.js";import{s as m}from"../chunks/render.Cki-mHPH.js";import{i as x}from"../chunks/if.2NbXrrqk.js";import{M as g,S as h,e as p,i as u,s as v}from"../chunks/SwitchThemeButton.CCktILbE.js";var f=e('<img class="w-full aspect-[2/1] object-fit rounded-xl rounded-t-none">'),b=e('<a class="block"><div class="border rounded-2xl dark:bg-slate-800 dark:border-slate-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-md dark:hover:shadow-slate-700/50"><h3 class="text-2xl flex content-start items-center gap-x-1 p-3"> </h3> <!></div></a>'),k=e('<h2 class="text-3xl p-4 flex content-start items-center gap-x-1">Projects <i class="bx bx-briefcase"></i></h2> <div class="grid sm:grid-cols-3 grid-cols-1 sm:gap-4 gap-3"></div>',1),y=e('<a class="flex content-start items-center gap-x-1"> </a>'),j=e('<h2 class="text-3xl p-4 flex content-start items-center gap-x-1">Blog <i class="bx bx-book-open"></i></h2> <div class="grid grid-cols-1 gap-1"></div>',1),w=e('<!> <main class="p-4"><div class="main-container mx-auto svelte-12e69q1"><div class="border md p-4 rounded-2xl dark:bg-slate-800 dark:border-slate-700"><div class="grid sm:grid-cols-2 grid-cols-1"><div><h1 class="text-3xl flex">Alex site. <!></h1> <p>Hi. I\'m Alex. <br> <br> This is my personal site. Enjoy! <br> Contact me:</p> <ul class="list-disc ml-5"><li>GitHub: <a href="https://github.com/alex-knyaz" title="Alex\'s GitHub Profile">https://github.com/alex-knyaz</a></li> <li>Twitter: <a href="https://twitter.com/alex_knyaz_st" title="Alex\'s Twitter Profile">https://twitter.com/alex_knyaz_st</a></li></ul></div> <img class="rounded-2xl w-64 h-[277px] sm:justify-self-end justify-self-center mt-4 sm:mt-0" src="/alex.png" alt="alex" title="Alex\'s Profile Picture" width="256" height="277"></div> <div><!> <!></div></div> <div class="text-sm text-gray-500 mt-2"><a href="/rss.xml" title="Subscribe to RSS Feed">RSS Feed</a> | <a href="/sitemap.xml" title="View Site Map">Sitemap</a> | <a href="/robots.txt" title="View Robots.txt">Robots</a></div></div></main>',1);function S(e,S){s(S,!0);var A=w(),P=a(A);g(P,{title:"Alex site",description:"Hi. I'm Alex. This is my personal site. Enjoy!",type:"page",slug:"",tags:[],featuredImage:"/alex.png",datePublished:"2024-11-12",dateModified:"2024-11-12",author:"Alex",twitterCardType:"summary_large_image",twitterUsername:"alex_knyaz_st"});var _=r(P,2),T=l(_),z=l(T),I=l(z),H=l(I),R=l(H),M=r(l(R));h(M),o(R),d(4),o(H),d(2),o(I);var B=r(I,2),C=l(B);x(C,(()=>S.data.projects.length>0),(e=>{var s=k(),i=r(a(s),2);p(i,21,(()=>S.data.projects),u,((e,s)=>{var a=b(),i=l(a),d=l(i),g=l(d,!0);o(d);var h=r(d,2);x(h,(()=>c(s).featuredImage),(e=>{var a=f();n((()=>{v(a,"src",c(s).featuredImage),v(a,"alt",c(s).title),v(a,"title",c(s).title)})),t(e,a)})),o(i),o(a),n((()=>{v(a,"href",`/projects/${c(s).slug??""}`),m(g,c(s).title)})),t(e,a)})),o(i),t(e,s)}));var E=r(C,2);x(E,(()=>S.data.blogPosts.length>0),(e=>{var s=j(),i=r(a(s),2);p(i,21,(()=>S.data.blogPosts),u,((e,s)=>{var a=y(),i=l(a,!0);o(a),n((()=>{v(a,"href",`/blog/${c(s).slug??""}`),m(i,c(s).title)})),t(e,a)})),o(i),t(e,s)})),o(B),o(z),d(2),o(T),o(_),t(e,A),i()}export{S as component};