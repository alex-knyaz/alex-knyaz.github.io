import{ad as e,V as a,ae as t,F as r,a2 as n,ac as o,af as s,J as i,ag as l,ah as u,ai as d,aj as c,ak as v,q as f,o as h,l as p,e as m,al as w,am as g,an as y,ao as _,ap as b,aq as E,ar as L,d as x,v as j,h as k,x as S,a5 as T}from"./runtime.CYGL3sOw.js";import{r as q,b as M}from"./disclose-version.CukIriLK.js";const V=new Set,W=new Set;function B(n,s,i,l){function u(n){if(l.capture||O.call(s,n),!n.cancelBubble)return function(n){var o=t,s=r;e(null),a(null);try{return n()}finally{e(o),a(s)}}((()=>i.call(this,n)))}return n.startsWith("pointer")||n.startsWith("touch")||"wheel"===n?o((()=>{s.addEventListener(n,u,l)})):s.addEventListener(n,u,l),u}function C(e,a,t,r,o){var s={capture:r,passive:o},i=B(e,a,t,s);a!==document.body&&a!==window&&a!==document||n((()=>{a.removeEventListener(e,i,s)}))}function N(e){for(var a=0;a<e.length;a++)V.add(e[a]);for(var t of W)t(e)}function O(n){var o=this,l=o.ownerDocument,u=n.type,d=n.composedPath?.()||[],c=d[0]||n.target,v=0,f=n.__root;if(f){var h=d.indexOf(f);if(-1!==h&&(o===document||o===window))return void(n.__root=o);var p=d.indexOf(o);if(-1===p)return;h<=p&&(v=h)}if((c=d[v]||n.target)!==o){s(n,"currentTarget",{configurable:!0,get:()=>c||l});var m=t,w=r;e(null),a(null);try{for(var g,y=[];null!==c;){var _=c.assignedSlot||c.parentNode||c.host||null;try{var b=c["__"+u];if(void 0!==b&&!c.disabled)if(i(b)){var[E,...L]=b;E.apply(c,[n,...L])}else b.call(c,n)}catch(x){g?y.push(x):g=x}if(n.cancelBubble||_===o||null===_)break;c=_}if(g){for(let e of y)queueMicrotask((()=>{throw e}));throw g}}finally{n.__root=o,delete n.currentTarget,e(m),a(w)}}}const $=["touchstart","touchmove"];function D(e,a){var t=null==a?"":"object"==typeof a?a+"":a;t!==(e.__t??=e.nodeValue)&&(e.__t=t,e.nodeValue=null==t?"":t+"")}function F(e,a){return z(e,a)}function J(e,a){l(),a.intro=a.intro??!1;const t=a.target,r=k,n=m;try{for(var o=u(t);o&&(8!==o.nodeType||o.data!==d);)o=c(o);if(!o)throw v;f(!0),h(o),p();const r=z(e,{...a,anchor:o});if(null===m||8!==m.nodeType||m.data!==w)throw g(),v;return f(!1),r}catch(s){if(s===v)return!1===a.recover&&y(),l(),_(t),f(!1),F(e,a);throw s}finally{f(r),h(n),q()}}const P=new Map;function z(e,{target:a,anchor:t,props:n={},events:o,context:s,intro:i=!0}){l();var u=new Set,d=e=>{for(var t=0;t<e.length;t++){var r=e[t];if(!u.has(r)){u.add(r);var n=(s=r,$.includes(s));a.addEventListener(r,O,{passive:n});var o=P.get(r);void 0===o?(document.addEventListener(r,O,{passive:n}),P.set(r,1)):P.set(r,o+1)}}var s};d(b(V)),W.add(d);var c=void 0,v=E((()=>{var i=t??a.appendChild(L());return x((()=>{s&&(j({}),T.c=s);o&&(n.$$events=o),k&&M(i,null),c=e(i,n)||{},k&&(r.nodes_end=m),s&&S()})),()=>{for(var e of u){a.removeEventListener(e,O);var r=P.get(e);0==--r?(document.removeEventListener(e,O),P.delete(e)):P.set(e,r)}W.delete(d),A.delete(c),i!==t&&i.parentNode?.removeChild(i)}}));return A.set(c,v),c}let A=new WeakMap;function G(e){const a=A.get(e);a&&a()}export{N as d,C as e,J as h,F as m,D as s,G as u};