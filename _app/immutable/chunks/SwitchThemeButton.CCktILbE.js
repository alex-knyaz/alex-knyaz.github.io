import{h as e,o as t,ar as a,l as r,b as n,T as s,ap as l,H as o,m as i,q as d,e as u,av as m,k as p,d as c,p as f,P as v,aw as g,ax as h,ao as b,ay as y,j as x,ah as w,al as _,ae as k,a8 as j,M as N,az as P,aA as U,aB as $,aj as M,am as I,ak as A,aC as E,R as S,aD as C,v as T,A as O,x as z,f as B,s as F,t as K,g as L,aE as R,I as q,c as D,r as H,aF as J,y as W}from"./runtime.DkEBQSWI.js";import{b as G,e as Q,h as V,a as X,t as Y}from"./disclose-version.B6hVzsSH.js";import{i as Z}from"./if.2NbXrrqk.js";import{a as ee}from"./props.qTUfTDNK.js";import{s as te}from"./config.BYI0gEHB.js";import"./legacy.DMDG-Jwf.js";import{e as ae}from"./render.Cki-mHPH.js";function re(e,t){return t}function ne(g,j,N,P,U,$=null){var M=g,I={flags:j,items:new Map,first:null},A=g;M=e?t(w(A)):A.appendChild(a()),e&&r();var E=null,S=!1;n((()=>{var a=N(),r=s(a)?a:null==a?[]:l(a),n=r.length;if(S&&0===n)return;S=0===n;let g=!1;e&&(M.data===o!==(0===n)&&(M=i(),t(M),d(!1),g=!0));if(e){for(var w,A=null,C=0;C<n;C++){if(8===u.nodeType&&u.data===_){M=u,g=!0,d(!1);break}var T=r[C],O=P(T,C);w=le(u,I,A,null,T,O,C,U,j),I.items.set(O,w),A=w}n>0&&t(i())}e||function(e,t,a,r,n,s,o){var i,d,u,c,f,g=e.length,w=t.items,_=t.first,k=_,j=null,N=[],P=[];for(f=0;f<g;f+=1)if(u=o(d=e[f],f),void 0!==(c=w.get(u))){if(se(c,d,f),c.e.f&m&&p(c.e),c!==k){if(void 0!==i&&i.has(c)){if(N.length<P.length){var U,$=P[0];j=$.prev;var M=N[0],I=N[N.length-1];for(U=0;U<N.length;U+=1)oe(N[U],$,a);for(U=0;U<P.length;U+=1)i.delete(P[U]);ie(t,M.prev,I.next),ie(t,j,M),ie(t,I,$),k=$,j=I,f-=1,N=[],P=[]}else i.delete(c),oe(c,k,a),ie(t,c.prev,c.next),ie(t,c,null===j?t.first:j.next),ie(t,j,c),j=c;continue}for(N=[],P=[];null!==k&&k.k!==u;)!s&&k.e.f&m||(i??=new Set).add(k),P.push(k),k=k.next;if(null===k)continue;c=k}N.push(c),j=c,k=c.next}else{j=le(k?k.e.nodes_start:a,t,j,null===j?t.first:j.next,d,u,f,r,n),w.set(u,j),N=[],P=[],k=j.next}if(null!==k||void 0!==i){for(var A=void 0===i?[]:l(i);null!==k;)!s&&k.e.f&m||A.push(k),k=k.next;if(A.length>0)!function(e,t,a,r){for(var n=[],s=t.length,l=0;l<s;l++)h(t[l].e,n,!0);var o=s>0&&0===n.length&&null!==a;if(o){var i=a.parentNode;b(i),i.append(a),r.clear(),ie(e,t[0].prev,t[s-1].next)}y(n,(()=>{for(var a=0;a<s;a++){var n=t[a];o||(r.delete(n.k),ie(e,n.prev,n.next)),x(n.e,!o)}}))}(t,A,0===g?a:null,w)}v.first=t.first&&t.first.e,v.last=j&&j.e}(r,I,M,U,j,!!(k.f&m),P);null!==$&&(0===n?E?p(E):E=c((()=>$(M))):null!==E&&f(E,(()=>{E=null}))),g&&d(!0),N()})),e&&(M=u)}function se(e,t,a,r){g(e.v,t),e.i=a}function le(t,a,r,n,s,l,o,i,d){var u=!!(d&U)?!(d&$)?j(s):N(s):s,m=d&P?N(o):o,p={i:m,v:u,k:l,a:null,e:null,prev:r,next:n};try{return p.e=c((()=>i(t,u,m)),e),p.e.prev=r&&r.e,p.e.next=n&&n.e,null===r?a.first=p:(r.next=p,r.e.next=p.e),null!==n&&(n.prev=p,n.e.prev=p.e),p}finally{}}function oe(e,t,a){for(var r=e.next?e.next.e.nodes_start:a,n=t?t.e.nodes_start:a,s=e.e.nodes_start;s!==r;){var l=M(s);n.before(s),s=l}}function ie(e,t,a){null===t?e.first=a:(t.next=a,t.e.next=a&&a.e),null!==a&&(a.prev=t,a.e.prev=t&&t.e)}function de(a,s,l,o,i){var d,m=a,p="";n((()=>{p!==(p=s()??"")?(void 0!==d&&(x(d),d=void 0),""!==p&&(d=c((()=>{if(e){u.data;for(var a=r(),n=a;null!==a&&(8!==a.nodeType||""!==a.data);)n=a,a=M(a);if(null===a)throw I(),A;return G(u,n),void(m=t(a))}var s=Q(p+"");G(w(s),s.lastChild),m.before(s)})))):e&&r()}))}function ue(t,a,r,n){var s=t.__attributes??={};e&&(s[a]=t.getAttribute(a),"src"===a||"srcset"===a||"href"===a&&"LINK"===t.nodeName)||s[a]!==(s[a]=r)&&("style"===a&&"__styles"in t&&(t.__styles={}),"loading"===a&&(t[E]=r),null==r?t.removeAttribute(a):"string"!=typeof r&&function(e){var t,a=me.get(e.nodeName);if(a)return a;me.set(e.nodeName,a=[]);var r=S(e),n=Element.prototype;for(;n!==r;){for(var s in t=C(r))t[s].set&&a.push(s);r=S(r)}return a}(t).includes(a)?t[a]=r:t.setAttribute(a,r))}var me=new Map;function pe(t,a){var r=t.__className,n=function(e){return null==e?"":e}(a);e&&t.className===n?t.__className=n:(r!==n||e&&t.className!==n)&&(null==a?t.removeAttribute("class"):t.className=n,t.__className=n)}var ce=Y('<meta name="keywords">'),fe=Y('<meta property="og:image">'),ve=Y('<meta property="article:published_time">'),ge=Y('<meta property="article:modified_time">'),he=Y('<meta property="article:author">'),be=Y('<meta name="twitter:image">'),ye=Y('<meta name="twitter:creator">'),xe=Y('<meta name="description"> <!> <link rel="canonical"> <meta property="og:title"> <meta property="og:description"> <meta property="og:type" content="article"> <meta property="og:url"> <!> <!> <!> <!> <meta name="twitter:card"> <meta name="twitter:title"> <meta name="twitter:description"> <!> <!> <link rel="alternate" type="application/rss+xml"> <meta name="apple-mobile-web-app-capable" content="yes"> <meta name="apple-mobile-web-app-status-bar-style" content="default"> <meta name="apple-mobile-web-app-title"> <!>',1);function we(e,t){T(t,!0);let a=ee(t,"tags",19,(()=>[])),r=ee(t,"type",3,"page"),n=q((()=>t.slug?`${te.baseUrl}${t.url}`:te.baseUrl)),s=q((()=>t.featuredImage?`${te.baseUrl}${t.featuredImage}`:void 0));O((()=>{console.log("featuredImage",t.featuredImage),console.log("fimgUrl",L(s)),console.log("canonicalUrl",L(n)),console.log("siteConfig.baseUrl",te.baseUrl)})),O((()=>{console.log("canonicalUrl",L(n))}));const l=e=>{switch(e){case"blog":return"BlogPosting";case"project":return"Project";default:return"WebPage"}};V((e=>{var o=xe(),i=B(o),d=F(i,2);Z(d,(()=>a().length>0),(e=>{var t=ce();K((()=>ue(t,"content",a().join(", ")))),X(e,t)}));var u=F(d,2),m=F(u,2),p=F(m,2),c=F(p,4),f=F(c,2);Z(f,(()=>L(s)),(e=>{var t=fe();K((()=>ue(t,"content",L(s)))),X(e,t)}));var v=F(f,2);Z(v,(()=>t.datePublished),(e=>{var a=ve();K((()=>ue(a,"content",t.datePublished))),X(e,a)}));var g=F(v,2);Z(g,(()=>t.dateModified),(e=>{var a=ge();K((()=>ue(a,"content",t.dateModified))),X(e,a)}));var h=F(g,2);Z(h,(()=>t.author),(e=>{var a=he();K((()=>ue(a,"content",t.author))),X(e,a)}));var b=F(h,2),y=F(b,2),x=F(y,2),w=F(x,2);Z(w,(()=>L(s)),(e=>{var t=be();K((()=>ue(t,"content",L(s)))),X(e,t)}));var _=F(w,2);Z(_,(()=>t.twitterUsername),(e=>{var a=ye();K((()=>ue(a,"content",`@${t.twitterUsername}`))),X(e,a)}));var k=F(_,2),j=F(k,6);de(F(j,2),(()=>`<script type="application/ld+json">\n        ${JSON.stringify({"@context":"https://schema.org","@type":l(r()),headline:t.title,description:t.description,...t.featuredImage&&{image:{"@type":"ImageObject",url:L(s)}},...t.datePublished&&{datePublished:t.datePublished},...t.dateModified&&{dateModified:t.dateModified},...t.author&&{author:{"@type":"Person",name:t.author}},...t.publisher&&{publisher:{"@type":"Organization",name:t.publisher}},mainEntityOfPage:L(n),...a().length>0&&{keywords:a().join(", ")}})}\n    <\/script>`)),K((()=>{R.title=`${te.siteName??""} | ${t.title??""}`,ue(i,"content",t.description),ue(u,"href",L(n)),ue(m,"content",t.title),ue(p,"content",t.description),ue(c,"content",L(n)),ue(b,"content",t.twitterCardType||"summary_large_image"),ue(y,"content",t.title),ue(x,"content",t.description),ue(k,"title",`${te.siteName} RSS Feed`),ue(k,"href",`${te.baseUrl}rss.xml`),ue(j,"content",t.title)})),X(e,o)})),z()}var _e=Y('<button class="ml-auto self-center p-1 text-sm border border-inherit rounded hover:bg-slate-300 dark:hover:bg-slate-700 active:!bg-slate-400 leading-none" aria-label="Toggle theme"><i></i></button>');function ke(e){let t=W(window.localStorage),a=e=>{("mousedown"===e.type||e instanceof KeyboardEvent&&("Enter"===e.key||" "===e.key))&&(J(t,L(t).theme="dark"===L(t).theme?"light":"dark"),document.documentElement.classList.toggle("dark"))};var r=_e(),n=D(r);H(r),K((()=>pe(n,`bx w-3.5 h-3.5 leading-none ${("dark"===L(t).theme?"bx-sun":"bx-moon")??""}`))),ae("mousedown",r,a),ae("keydown",r,a),X(e,r)}export{we as M,ke as S,pe as a,ne as e,de as h,re as i,ue as s};