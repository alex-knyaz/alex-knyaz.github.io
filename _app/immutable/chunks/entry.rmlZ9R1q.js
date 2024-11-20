import{i as e,aI as t,aw as r}from"./runtime.5iT3v_-W.js";function n(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function a({href:e}){return e.split("#")[0]}new URL("sveltekit-internal://");const o=["href","pathname","search","toString","toJSON"];function s(e,t,r){const n=new URL(e);Object.defineProperty(n,"searchParams",{value:new Proxy(n.searchParams,{get(e,n){if("get"===n||"getAll"===n||"has"===n)return t=>(r(t),e[n](t));t();const a=Reflect.get(e,n);return"function"==typeof a?a.bind(e):a}}),enumerable:!0,configurable:!0});for(const a of o)Object.defineProperty(n,a,{get:()=>(t(),e[a]),enumerable:!0,configurable:!0});return n}const i=window.fetch;window.fetch=(e,t)=>("GET"!==(e instanceof Request?e.method:t?.method||"GET")&&l.delete(u(e)),i(e,t));const l=new Map;function c(e,t){const r=u(e,t),n=document.querySelector(r);if(n?.textContent){let{body:e,...t}=JSON.parse(n.textContent);const a=n.getAttribute("data-ttl");a&&l.set(r,{body:e,init:t,ttl:1e3*Number(a)});return null!==n.getAttribute("data-b64")&&(e=function(e){const t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r.buffer}(e)),Promise.resolve(new Response(e,t))}return window.fetch(e,t)}function u(e,t){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t?.headers||t?.body){const e=[];t.headers&&e.push([...new Headers(t.headers)].join(",")),t.body&&("string"==typeof t.body||ArrayBuffer.isView(t.body))&&e.push(t.body),r+=`[data-hash="${function(...e){let t=5381;for(const r of e)if("string"==typeof r){let e=r.length;for(;e;)t=33*t^r.charCodeAt(--e)}else{if(!ArrayBuffer.isView(r))throw new TypeError("value must be a string or TypedArray");{const e=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let n=e.length;for(;n;)t=33*t^e[--n]}}return(t>>>0).toString(36)}(...e)}"]`}return r}const f=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function d(e){const t=[];var r;return{pattern:"/"===e?/^\/$/:new RegExp(`^${(r=e,r.slice(1).split("/").filter(p)).map((e=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(e);if(r)return t.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const n=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(e);if(n)return t.push({name:n[1],matcher:n[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!e)return;const a=e.split(/\[(.+?)\](?!\])/);return"/"+a.map(((e,r)=>{if(r%2){if(e.startsWith("x+"))return h(String.fromCharCode(parseInt(e.slice(2),16)));if(e.startsWith("u+"))return h(String.fromCharCode(...e.slice(2).split("-").map((e=>parseInt(e,16)))));const n=f.exec(e),[,o,s,i,l]=n;return t.push({name:i,matcher:l,optional:!!o,rest:!!s,chained:!!s&&(1===r&&""===a[0])}),s?"(.*?)":o?"([^/]*)?":"([^/]+?)"}return h(e)})).join("")})).join("")}/?$`),params:t}}function p(e){return!/^\([^)]+\)$/.test(e)}function h(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function m({nodes:e,server_loads:t,dictionary:r,matchers:n}){const a=new Set(t);return Object.entries(r).map((([t,[r,a,i]])=>{const{pattern:l,params:c}=d(t),u={id:t,exec:e=>{const t=l.exec(e);if(t)return function(e,t,r){const n={},a=e.slice(1),o=a.filter((e=>void 0!==e));let s=0;for(let i=0;i<t.length;i+=1){const e=t[i];let l=a[i-s];if(e.chained&&e.rest&&s&&(l=a.slice(i-s,i+1).filter((e=>e)).join("/"),s=0),void 0!==l)if(e.matcher&&!r[e.matcher](l)){if(!e.optional||!e.chained)return;s++}else{n[e.name]=l;const r=t[i+1],c=a[i+1];r&&!r.rest&&r.optional&&c&&e.chained&&(s=0),r||c||Object.keys(n).length!==o.length||(s=0)}else e.rest&&(n[e.name]="")}if(!s)return n}(t,c,n)},errors:[1,...i||[]].map((t=>e[t])),layouts:[0,...a||[]].map(s),leaf:o(r)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u}));function o(t){const r=t<0;return r&&(t=~t),[r,e[t]]}function s(t){return void 0===t?t:[a.has(t),e[t]]}}function g(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function y(e,t,r=JSON.stringify){const n=r(t);try{sessionStorage[e]=n}catch{}}const w=[];function v(r,n=e){let a=null;const o=new Set;function s(e){if(t(r,e)&&(r=e,a)){const e=!w.length;for(const t of o)t[1](),w.push(t,r);if(e){for(let e=0;e<w.length;e+=2)w[e][0](w[e+1]);w.length=0}}}function i(e){s(e(r))}return{set:s,update:i,subscribe:function(t,l=e){const c=[t,l];return o.add(c),1===o.size&&(a=n(s,i)||e),t(r),()=>{o.delete(c),0===o.size&&a&&(a(),a=null)}}}}const b=globalThis.__sveltekit_jfojbl?.base??"",k=globalThis.__sveltekit_jfojbl?.assets??b,S="sveltekit:snapshot",A="sveltekit:scroll",E="sveltekit:states",_="sveltekit:pageurl",R="sveltekit:history",x="sveltekit:navigation",U={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},P=location.origin;function C(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const e=document.getElementsByTagName("base");t=e.length?e[0].href:document.URL}return new URL(e,t)}function L(){return{x:pageXOffset,y:pageYOffset}}function j(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const I={...U,"":U.hover};function O(e){let t=e.assignedSlot??e.parentNode;return 11===t?.nodeType&&(t=t.host),t}function T(e,t){for(;e&&e!==t;){if("A"===e.nodeName.toUpperCase()&&e.hasAttribute("href"))return e;e=O(e)}}function $(e,t){let r;try{r=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const n=e instanceof SVGAElement?e.target.baseVal:e.target;return{url:r,external:!r||!!n||V(r,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),target:n,download:r?.origin===P&&e.hasAttribute("download")}}function N(e){let t=null,r=null,n=null,a=null,o=null,s=null,i=e;for(;i&&i!==document.documentElement;)null===n&&(n=j(i,"preload-code")),null===a&&(a=j(i,"preload-data")),null===t&&(t=j(i,"keepfocus")),null===r&&(r=j(i,"noscroll")),null===o&&(o=j(i,"reload")),null===s&&(s=j(i,"replacestate")),i=O(i);function l(e){switch(e){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:I[n??"off"],preload_data:I[a??"off"],keepfocus:l(t),noscroll:l(r),reload:l(o),replace_state:l(s)}}function D(e){const t=v(e);let r=!0;return{notify:function(){r=!0,t.update((e=>e))},set:function(e){r=!1,t.set(e)},subscribe:function(e){let n;return t.subscribe((t=>{(void 0===n||r&&t!==n)&&e(n=t)}))}}}function B(){const{set:e,subscribe:t}=v(!1);let r;return{subscribe:t,check:async function(){clearTimeout(r);try{const t=await fetch(`${k}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!t.ok)return!1;const n="1732102201102"!==(await t.json()).version;return n&&(e(!0),clearTimeout(r)),n}catch{return!1}}}}function V(e,t){return e.origin!==P||!e.pathname.startsWith(t)}function F(e){const t=function(e){e.length%4==0&&(e=e.replace(/==?$/,""));let t="",r=0,n=0;for(let a=0;a<e.length;a++)r<<=6,r|=q.indexOf(e[a]),n+=6,24===n&&(t+=String.fromCharCode((16711680&r)>>16),t+=String.fromCharCode((65280&r)>>8),t+=String.fromCharCode(255&r),r=n=0);12===n?(r>>=4,t+=String.fromCharCode(r)):18===n&&(r>>=2,t+=String.fromCharCode((65280&r)>>8),t+=String.fromCharCode(255&r));return t}(e),r=new ArrayBuffer(t.length),n=new DataView(r);for(let a=0;a<r.byteLength;a++)n.setUint8(a,t.charCodeAt(a));return r}const q="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";const W=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);new Set([...W,"entries"]);const M=new Set([...W]);new Set([...M,"actions","entries"]);class J{constructor(e,t){this.status=e,this.body="string"==typeof t?{message:t}:t||{message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class G{constructor(e,t){this.status=e,this.location=t}}class z extends Error{constructor(e,t,r){super(r),this.status=e,this.text=t}}function H(e){return e instanceof J||e instanceof z?e.status:500}const K=g(A)??{},X=g(S)??{},Y={url:D({}),page:D({}),navigating:v(null),updated:B()};function Q(e){K[e]=L()}function Z(e){return location.href=e.href,new Promise((()=>{}))}async function ee(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(b||"/");e&&await e.update()}}function te(){}let re,ne,ae,oe,se,ie;const le=[],ce=[];let ue=null;const fe=[],de=[];let pe,he,me,ge,ye,we=[],ve={branch:[],error:null,url:null},be=!1,ke=!1,Se=!0,Ae=!1,Ee=!1,_e=!1,Re=!1;const xe=new Set;async function Ue(e,t,r){document.URL!==location.href&&(location.href=location.href),ie=e,re=m(e),oe=document.documentElement,se=t,ne=e.nodes[0],ae=e.nodes[1],ne(),ae(),he=history.state?.[R],me=history.state?.[x],he||(he=me=Date.now(),history.replaceState({...history.state,[R]:he,[x]:me},""));const n=K[he];n&&(history.scrollRestoration="manual",scrollTo(n.x,n.y)),r?await async function(e,{status:t=200,error:r,node_ids:n,params:a,route:o,data:s,form:i}){be=!0;const l=new URL(location.href);let c;({params:a={},route:o={id:null}}=We(l,!1)||{});try{const e=n.map((async(t,r)=>{const n=s[r];return n?.uses&&(n.uses=Xe(n.uses)),$e({loader:ie.nodes[t],url:l,params:a,route:o,parent:async()=>{const t={};for(let n=0;n<r;n+=1)Object.assign(t,(await e[n]).data);return t},server_data_node:De(n)})})),u=await Promise.all(e),f=re.find((({id:e})=>e===o.id));if(f){const e=f.layouts;for(let t=0;t<e.length;t++)e[t]||u.splice(t,0,void 0)}c=Te({url:l,params:a,branch:u,status:t,error:r,form:i,route:f??null})}catch(u){if(u instanceof G)return void(await Z(new URL(u.location,location.href)));c=await qe({status:H(u),error:await He(u,{url:l,params:a,route:o}),url:l,route:o})}c.props.page&&(c.props.page.state={});Oe(c,e,!0)}(se,r):function(e,t={}){if((e=C(e)).origin!==P)return Promise.reject(new Error("goto: invalid URL"));je(e,t,0)}(location.href,{replaceState:!0}),function(){history.scrollRestoration="manual",addEventListener("beforeunload",(e=>{let t=!1;if(Le(),!Ae){const e=Ye(ve,void 0,null,"leave"),r={...e.navigation,cancel:()=>{t=!0,e.reject(new Error("navigation cancelled"))}};fe.forEach((e=>e(r)))}t?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"})),addEventListener("visibilitychange",(()=>{"hidden"===document.visibilityState&&Le()})),navigator.connection?.saveData||function(){let e;function t(e){e.defaultPrevented||n(e.composedPath()[0],1)}oe.addEventListener("mousemove",(t=>{const r=t.target;clearTimeout(e),e=setTimeout((()=>{n(r,2)}),20)})),oe.addEventListener("mousedown",t),oe.addEventListener("touchstart",t,{passive:!0});const r=new IntersectionObserver((e=>{for(const t of e)t.isIntersecting&&(Ie(t.target.href),r.unobserve(t.target))}),{threshold:0});function n(e,t){const r=T(e,oe);if(!r)return;const{url:n,external:a,download:o}=$(r,b);if(a||o)return;const s=N(r),i=n&&ve.url.pathname+ve.url.search===n.pathname+n.search;if(!s.reload&&!i)if(t<=s.preload_data){const e=We(n,!1);e&&async function(e){if(e.id!==ue?.id){const t={};xe.add(t),ue={id:e.id,token:t,promise:Ve({...e,preload:t}).then((e=>(xe.delete(t),"loaded"===e.type&&e.state.error&&(ue=null),e)))}}ue.promise}(e)}else t<=s.preload_code&&Ie(n.pathname)}function a(){r.disconnect();for(const e of oe.querySelectorAll("a")){const{url:t,external:n,download:a}=$(e,b);if(n||a)continue;const o=N(e);o.reload||(o.preload_code===U.viewport&&r.observe(e),o.preload_code===U.eager&&Ie(t.pathname))}}we.push(a),a()}();oe.addEventListener("click",(async t=>{if(t.button||1!==t.which)return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const r=T(t.composedPath()[0],oe);if(!r)return;const{url:n,external:o,target:s,download:i}=$(r,b);if(!n)return;if("_parent"===s||"_top"===s){if(window.parent!==window)return}else if(s&&"_self"!==s)return;const l=N(r);if(!(r instanceof SVGAElement)&&n.protocol!==location.protocol&&"https:"!==n.protocol&&"http:"!==n.protocol)return;if(i)return;const[c,u]=n.href.split("#"),f=c===a(location);if(!o&&(!l.reload||f&&u)){if(void 0!==u&&f){const[,a]=ve.url.href.split("#");if(a===u){if(t.preventDefault(),""===u||"top"===u&&null===r.ownerDocument.getElementById("top"))window.scrollTo({top:0});else{const e=r.ownerDocument.getElementById(decodeURIComponent(u));e&&(e.scrollIntoView(),e.focus())}return}if(Ee=!0,Q(he),e(n),!l.replace_state)return;Ee=!1}t.preventDefault(),await new Promise((e=>{requestAnimationFrame((()=>{setTimeout(e,0)})),setTimeout(e,100)})),Ge({type:"link",url:n,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??n.href===location.href})}else Je({url:n,type:"link"})?Ae=!0:t.preventDefault()})),oe.addEventListener("submit",(e=>{if(e.defaultPrevented)return;const t=HTMLFormElement.prototype.cloneNode.call(e.target),r=e.submitter;if("_blank"===(r?.formTarget||t.target))return;if("get"!==(r?.formMethod||t.method))return;const n=new URL(r?.hasAttribute("formaction")&&r?.formAction||t.action);if(V(n,b))return;const a=e.target,o=N(a);if(o.reload)return;e.preventDefault(),e.stopPropagation();const s=new FormData(a),i=r?.getAttribute("name");i&&s.append(i,r?.getAttribute("value")??""),n.search=new URLSearchParams(s).toString(),Ge({type:"form",url:n,keepfocus:o.keepfocus,noscroll:o.noscroll,replace_state:o.replace_state??n.href===location.href})})),addEventListener("popstate",(async t=>{if(t.state?.[R]){const r=t.state[R];if(ye={},r===he)return;const n=K[r],o=t.state[E]??{},s=new URL(t.state[_]??location.href),i=t.state[x],l=a(location)===a(ve.url);if(i===me&&(_e||l))return e(s),K[he]=L(),n&&scrollTo(n.x,n.y),o!==ge.state&&(ge={...ge,state:o},pe.$set({page:ge})),void(he=r);const c=r-he;await Ge({type:"popstate",url:s,popped:{state:o,scroll:n,delta:c},accept:()=>{he=r,me=i},block:()=>{history.go(-c)},nav_token:ye})}else if(!Ee){e(new URL(location.href))}})),addEventListener("hashchange",(()=>{Ee&&(Ee=!1,history.replaceState({...history.state,[R]:++he,[x]:me},"",location.href))}));for(const t of document.querySelectorAll("link"))"icon"===t.rel&&(t.href=t.href);function e(e){ve.url=e,Y.page.set({...ge,url:e}),Y.page.notify()}addEventListener("pageshow",(e=>{e.persisted&&Y.navigating.set(null)}))}()}function Pe(e){ce.some((e=>e?.snapshot))&&(X[e]=ce.map((e=>e?.snapshot?.capture())))}function Ce(e){X[e]?.forEach(((e,t)=>{ce[t]?.snapshot?.restore(e)}))}function Le(){Q(he),y(A,K),Pe(me),y(S,X)}async function je(e,t,r,n){return Ge({type:"goto",url:C(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:r,nav_token:n,accept:()=>{t.invalidateAll&&(Re=!0)}})}async function Ie(e){const t=re.find((t=>t.exec(Me(e))));t&&await Promise.all([...t.layouts,t.leaf].map((e=>e?.[1]())))}function Oe(e,t,r){ve=e.state;const n=document.querySelector("style[data-sveltekit]");n&&n.remove(),ge=e.props.page,pe=new ie.root({target:t,props:{...e.props,stores:Y,components:ce},hydrate:r,sync:!1}),Ce(me);const a={from:null,to:{params:ve.params,route:{id:ve.route?.id??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};we.forEach((e=>e(a))),ke=!0}function Te({url:e,params:t,branch:r,status:n,error:a,route:o,form:s}){let i="never";if(!b||e.pathname!==b&&e.pathname!==b+"/")for(const m of r)void 0!==m?.slash&&(i=m.slash);else i="always";var l,c;e.pathname=(l=e.pathname,c=i,"/"===l||"ignore"===c?l:"never"===c?l.endsWith("/")?l.slice(0,-1):l:"always"!==c||l.endsWith("/")?l:l+"/"),e.search=e.search;const u={type:"loaded",state:{url:e,params:t,branch:r,error:a,route:o},props:{constructors:(f=r,f.filter((e=>null!=e))).map((e=>e.node.component)),page:ge}};var f;void 0!==s&&(u.props.form=s);let d={},p=!ge,h=0;for(let m=0;m<Math.max(r.length,ve.branch.length);m+=1){const e=r[m],t=ve.branch[m];e?.data!==t?.data&&(p=!0),e&&(d={...d,...e.data},p&&(u.props[`data_${h}`]=d),h+=1)}return(!ve.url||e.href!==ve.url.href||ve.error!==a||void 0!==s&&s!==ge.form||p)&&(u.props.page={error:a,params:t,route:{id:o?.id??null},state:{},status:n,url:new URL(e),form:s??null,data:p?d:ge.data}),u}async function $e({loader:e,parent:t,url:r,params:n,route:a,server_data_node:o}){let i=null,f=!0;const d={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},p=await e();if(p.universal?.load){let e=function(...e){for(const t of e){const{href:e}=new URL(t,r);d.dependencies.add(e)}};const h={route:new Proxy(a,{get:(e,t)=>(f&&(d.route=!0),e[t])}),params:new Proxy(n,{get:(e,t)=>(f&&d.params.add(t),e[t])}),data:o?.data??null,url:s(r,(()=>{f&&(d.url=!0)}),(e=>{f&&d.search_params.add(e)})),async fetch(t,n){let a;t instanceof Request?(a=t.url,n={body:"GET"===t.method||"HEAD"===t.method?void 0:await t.blob(),cache:t.cache,credentials:t.credentials,headers:t.headers,integrity:t.integrity,keepalive:t.keepalive,method:t.method,mode:t.mode,redirect:t.redirect,referrer:t.referrer,referrerPolicy:t.referrerPolicy,signal:t.signal,...n}):a=t;const o=new URL(a,r);return f&&e(o.href),o.origin===r.origin&&(a=o.href.slice(r.origin.length)),ke?function(e,t,r){if(l.size>0){const t=u(e,r),n=l.get(t);if(n){if(performance.now()<n.ttl&&["default","force-cache","only-if-cached",void 0].includes(r?.cache))return new Response(n.body,n.init);l.delete(t)}}return window.fetch(t,r)}(a,o.href,n):c(a,n)},setHeaders:()=>{},depends:e,parent:()=>(f&&(d.parent=!0),t()),untrack(e){f=!1;try{return e()}finally{f=!0}}};i=await p.universal.load.call(null,h)??null}return{node:p,loader:e,server:o,universal:p.universal?.load?{type:"data",data:i,uses:d}:null,data:i??o?.data??null,slash:p.universal?.trailingSlash??o?.slash}}function Ne(e,t,r,n,a,o){if(Re)return!0;if(!a)return!1;if(a.parent&&e)return!0;if(a.route&&t)return!0;if(a.url&&r)return!0;for(const s of a.search_params)if(n.has(s))return!0;for(const s of a.params)if(o[s]!==ve.params[s])return!0;for(const s of a.dependencies)if(le.some((e=>e(new URL(s)))))return!0;return!1}function De(e,t){return"data"===e?.type?e:"skip"===e?.type?t??null:null}function Be({error:e,url:t,route:r,params:n}){return{type:"loaded",state:{error:e,url:t,route:r,params:n,branch:[]},props:{page:ge,constructors:[]}}}async function Ve({id:e,invalidating:t,url:r,params:n,route:a,preload:o}){if(ue?.id===e)return xe.delete(ue.token),ue.promise;const{errors:s,layouts:i,leaf:l}=a,c=[...i,l];s.forEach((e=>e?.().catch((()=>{})))),c.forEach((e=>e?.[1]().catch((()=>{}))));let u=null;const f=!!ve.url&&e!==ve.url.pathname+ve.url.search,d=!!ve.route&&a.id!==ve.route.id,p=function(e,t){if(!e)return new Set(t.searchParams.keys());const r=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const n of r){const a=e.searchParams.getAll(n),o=t.searchParams.getAll(n);a.every((e=>o.includes(e)))&&o.every((e=>a.includes(e)))&&r.delete(n)}return r}(ve.url,r);let h=!1;const m=c.map(((e,t)=>{const r=ve.branch[t],a=!!e?.[0]&&(r?.loader!==e[1]||Ne(h,d,f,p,r.server?.uses,n));return a&&(h=!0),a}));if(m.some(Boolean)){try{u=await Ke(r,m)}catch(b){const t=await He(b,{url:r,params:n,route:{id:e}});return xe.has(o)?Be({error:t,url:r,params:n,route:a}):qe({status:H(b),error:t,url:r,route:a})}if("redirect"===u.type)return u}const g=u?.nodes;let y=!1;const w=c.map((async(e,t)=>{if(!e)return;const o=ve.branch[t],s=g?.[t];if(!(s&&"skip"!==s.type||e[1]!==o?.loader||Ne(y,d,f,p,o.universal?.uses,n)))return o;if(y=!0,"error"===s?.type)throw s;return $e({loader:e[1],url:r,params:n,route:a,parent:async()=>{const e={};for(let r=0;r<t;r+=1)Object.assign(e,(await w[r])?.data);return e},server_data_node:De(void 0===s&&e[0]?{type:"skip"}:s??null,e[0]?o?.server:void 0)})}));for(const S of w)S.catch((()=>{}));const v=[];for(let S=0;S<c.length;S+=1)if(c[S])try{v.push(await w[S])}catch(k){if(k instanceof G)return{type:"redirect",location:k.location};if(xe.has(o))return Be({error:await He(k,{params:n,url:r,route:{id:a.id}}),url:r,params:n,route:a});let e,t=H(k);if(g?.includes(k))t=k.status??t,e=k.error;else if(k instanceof J)e=k.body;else{if(await Y.updated.check())return await ee(),await Z(r);e=await He(k,{params:n,url:r,route:{id:a.id}})}const i=await Fe(S,v,s);return i?Te({url:r,params:n,branch:v.slice(0,i.idx).concat(i.node),status:t,error:e,route:a}):await ze(r,{id:a.id},e,t)}else v.push(void 0);return Te({url:r,params:n,branch:v,status:200,error:null,route:a,form:t?void 0:null})}async function Fe(e,t,r){for(;e--;)if(r[e]){let n=e;for(;!t[n];)n-=1;try{return{idx:n+1,node:{node:await r[e](),loader:r[e],data:{},server:null,universal:null}}}catch{continue}}}async function qe({status:e,error:t,url:r,route:n}){const a={};let o=null;if(0===ie.server_loads[0])try{const e=await Ke(r,[!0]);if("data"!==e.type||e.nodes[0]&&"data"!==e.nodes[0].type)throw 0;o=e.nodes[0]??null}catch{(r.origin!==P||r.pathname!==location.pathname||be)&&await Z(r)}return Te({url:r,params:a,branch:[await $e({loader:ne,url:r,params:a,route:n,parent:()=>Promise.resolve({}),server_data_node:De(o)}),{node:await ae(),loader:ae,universal:null,server:null,data:null}],status:e,error:t,route:null})}function We(e,t){if(!e)return;if(V(e,b))return;let r;try{r=ie.hooks.reroute({url:new URL(e)})??e.pathname}catch(o){return}const a=Me(r);for(const s of re){const r=s.exec(a);if(r){return{id:e.pathname+e.search,invalidating:t,route:s,params:n(r),url:e}}}}function Me(e){return function(e){return e.split("%25").map(decodeURI).join("%25")}(e.slice(b.length)||"/")}function Je({url:e,type:t,intent:r,delta:n}){let a=!1;const o=Ye(ve,r,e,t);void 0!==n&&(o.navigation.delta=n);const s={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return Ae||fe.forEach((e=>e(s))),a?null:o}async function Ge({type:e,url:t,popped:n,keepfocus:a,noscroll:o,replace_state:s,state:i={},redirect_count:l=0,nav_token:c={},accept:u=te,block:f=te}){const d=We(t,!1),p=Je({url:t,type:e,delta:n?.delta,intent:d});if(!p)return void f();const h=he,m=me;u(),Ae=!0,ke&&Y.navigating.set(p.navigation),ye=c;let g=d&&await Ve(d);if(!g){if(V(t,b))return await Z(t);g=await ze(t,{id:null},await He(new z(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=d?.url||t,ye!==c)return p.reject(new Error("navigation aborted")),!1;if("redirect"===g.type){if(!(l>=20))return je(new URL(g.location,t).href,{},l+1,c),!1;g=await qe({status:500,error:await He(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}})}else if(g.props.page.status>=400){await Y.updated.check()&&(await ee(),await Z(t))}if(le.length=0,Re=!1,Q(h),Pe(m),g.props.page.url.pathname!==t.pathname&&(t.pathname=g.props.page.url.pathname),i=n?n.state:i,!n){const e=s?0:1,r={[R]:he+=e,[x]:me+=e,[E]:i};(s?history.replaceState:history.pushState).call(history,r,"",t),s||function(e,t){let r=e+1;for(;K[r];)delete K[r],r+=1;for(r=t+1;X[r];)delete X[r],r+=1}(he,me)}if(ue=null,g.props.page.state=i,ke){ve=g.state,g.props.page&&(g.props.page.url=t);const e=(await Promise.all(de.map((e=>e(p.navigation))))).filter((e=>"function"==typeof e));if(e.length>0){let t=function(){we=we.filter((t=>!e.includes(t)))};e.push(t),we.push(...e)}pe.$set(g.props),_e=!0}else Oe(g,se,!1);const{activeElement:y}=document;await r();const w=n?n.scroll:o?L():null;if(Se){const e=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));w?scrollTo(w.x,w.y):e?e.scrollIntoView():scrollTo(0,0)}const v=document.activeElement!==y&&document.activeElement!==document.body;a||v||function(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const e=document.body,t=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0,focusVisible:!1}),null!==t?e.setAttribute("tabindex",t):e.removeAttribute("tabindex");const r=getSelection();if(r&&"None"!==r.type){const e=[];for(let t=0;t<r.rangeCount;t+=1)e.push(r.getRangeAt(t));setTimeout((()=>{if(r.rangeCount===e.length){for(let t=0;t<r.rangeCount;t+=1){const n=e[t],a=r.getRangeAt(t);if(n.commonAncestorContainer!==a.commonAncestorContainer||n.startContainer!==a.startContainer||n.endContainer!==a.endContainer||n.startOffset!==a.startOffset||n.endOffset!==a.endOffset)return}r.removeAllRanges()}}))}}}(),Se=!0,g.props.page&&(ge=g.props.page),Ae=!1,"popstate"===e&&Ce(me),p.fulfil(void 0),we.forEach((e=>e(p.navigation))),Y.navigating.set(null)}async function ze(e,t,r,n){return e.origin!==P||e.pathname!==location.pathname||be?await Z(e):await qe({status:n,error:r,url:e,route:t})}function He(e,t){if(e instanceof J)return e.body;const r=H(e),n=function(e){return e instanceof z?e.text:"Internal Error"}(e);return ie.hooks.handleError({error:e,event:t,status:r,message:n})??{message:n}}async function Ke(e,t){const r=new URL(e);var n;r.pathname=(n=e.pathname).endsWith(".html")?n.replace(/\.html$/,".html__data.json"):n.replace(/\/$/,"")+"/__data.json",e.pathname.endsWith("/")&&r.searchParams.append("x-sveltekit-trailing-slash","1"),r.searchParams.append("x-sveltekit-invalidated",t.map((e=>e?"1":"0")).join(""));const a=await i(r.href);if(!a.ok){let e;throw a.headers.get("content-type")?.includes("application/json")?e=await a.json():404===a.status?e="Not Found":500===a.status&&(e="Internal Error"),new J(a.status,e)}return new Promise((async e=>{const t=new Map,r=a.body.getReader(),n=new TextDecoder;function o(e){return function(e,t){if("number"==typeof e)return a(e,!0);if(!Array.isArray(e)||0===e.length)throw new Error("Invalid input");const r=e,n=Array(r.length);function a(e,o=!1){if(-1===e)return;if(-3===e)return NaN;if(-4===e)return 1/0;if(-5===e)return-1/0;if(-6===e)return-0;if(o)throw new Error("Invalid input");if(e in n)return n[e];const s=r[e];if(s&&"object"==typeof s)if(Array.isArray(s))if("string"==typeof s[0]){const r=s[0],o=t?.[r];if(o)return n[e]=o(a(s[1]));switch(r){case"Date":n[e]=new Date(s[1]);break;case"Set":const t=new Set;n[e]=t;for(let e=1;e<s.length;e+=1)t.add(a(s[e]));break;case"Map":const o=new Map;n[e]=o;for(let e=1;e<s.length;e+=2)o.set(a(s[e]),a(s[e+1]));break;case"RegExp":n[e]=new RegExp(s[1],s[2]);break;case"Object":n[e]=Object(s[1]);break;case"BigInt":n[e]=BigInt(s[1]);break;case"null":const i=Object.create(null);n[e]=i;for(let e=1;e<s.length;e+=2)i[s[e]]=a(s[e+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const t=new(0,globalThis[r])(F(s[1]));n[e]=t;break}case"ArrayBuffer":{const t=F(s[1]);n[e]=t;break}default:throw new Error(`Unknown type ${r}`)}}else{const t=new Array(s.length);n[e]=t;for(let e=0;e<s.length;e+=1){const r=s[e];-2!==r&&(t[e]=a(r))}}else{const t={};n[e]=t;for(const e in s){const r=s[e];t[e]=a(r)}}else n[e]=s;return n[e]}return a(0)}(e,{Promise:e=>new Promise(((r,n)=>{t.set(e,{fulfil:r,reject:n})}))})}let s="";for(;;){const{done:a,value:i}=await r.read();if(a&&!s)break;for(s+=!i&&s?"\n":n.decode(i,{stream:!0});;){const r=s.indexOf("\n");if(-1===r)break;const n=JSON.parse(s.slice(0,r));if(s=s.slice(r+1),"redirect"===n.type)return e(n);if("data"===n.type)n.nodes?.forEach((e=>{"data"===e?.type&&(e.uses=Xe(e.uses),e.data=o(e.data))})),e(n);else if("chunk"===n.type){const{id:e,data:r,error:a}=n,s=t.get(e);t.delete(e),a?s.reject(o(a)):s.fulfil(o(r))}}}}))}function Xe(e){return{dependencies:new Set(e?.dependencies??[]),params:new Set(e?.params??[]),parent:!!e?.parent,route:!!e?.route,url:!!e?.url,search_params:new Set(e?.search_params??[])}}function Ye(e,t,r,n){let a,o;const s=new Promise(((e,t)=>{a=e,o=t}));s.catch((()=>{}));return{navigation:{from:{params:e.params,route:{id:e.route?.id??null},url:e.url},to:r&&{params:t?.params??null,route:{id:t?.route?.id??null},url:r},willUnload:!t,type:n,complete:s},fulfil:a,reject:o}}export{Ue as a,Y as s};
