import{S as e,z as r,A as t,B as n,C as s,w as o,U as i,D as a,g as u,F as l,G as f,I as v,J as p,K as c,L as g,P as d,M as y,N as b,O as w,Q as h,R as m,T as P,V as x,W as O,X as R,Y as D,Z as K,_ as j,$ as N,a0 as I,a1 as $}from"./runtime.CYGL3sOw.js";import{c as q}from"./store.kFf1kW7z.js";function M(c,g=null,d){if("object"!=typeof c||null===c||e in c)return c;const y=v(c);if(y!==r&&y!==t)return c;var b,w=new Map,h=p(c),m=n(0);return h&&w.set("length",n(c.length)),new Proxy(c,{defineProperty(e,r,t){"value"in t&&!1!==t.configurable&&!1!==t.enumerable&&!1!==t.writable||s();var i=w.get(r);return void 0===i?(i=n(t.value),w.set(r,i)):o(i,M(t.value,b)),!0},deleteProperty(e,r){var t=w.get(r);if(void 0===t)r in e&&w.set(r,n(i));else{if(h&&"string"==typeof r){var s=w.get("length"),a=Number(r);Number.isInteger(a)&&a<s.v&&o(s,a)}o(t,i),k(m)}return!0},get(r,t,s){if(t===e)return c;var o=w.get(t),l=t in r;if(void 0!==o||l&&!a(r,t)?.writable||(o=n(M(l?r[t]:i,b)),w.set(t,o)),void 0!==o){var f=u(o);return f===i?void 0:f}return Reflect.get(r,t,s)},getOwnPropertyDescriptor(e,r){var t=Reflect.getOwnPropertyDescriptor(e,r);if(t&&"value"in t){var n=w.get(r);n&&(t.value=u(n))}else if(void 0===t){var s=w.get(r),o=s?.v;if(void 0!==s&&o!==i)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return t},has(r,t){if(t===e)return!0;var s=w.get(t),o=void 0!==s&&s.v!==i||Reflect.has(r,t);if((void 0!==s||null!==l&&(!o||a(r,t)?.writable))&&(void 0===s&&(s=n(o?M(r[t],b):i),w.set(t,s)),u(s)===i))return!1;return o},set(e,r,t,s){var u=w.get(r),l=r in e;if(h&&"length"===r)for(var f=t;f<u.v;f+=1){var v=w.get(f+"");void 0!==v?o(v,i):f in e&&(v=n(i),w.set(f+"",v))}void 0===u?l&&!a(e,r)?.writable||(u=n(void 0),o(u,M(t,b)),w.set(r,u)):(l=u.v!==i,o(u,M(t,b)));var p=Reflect.getOwnPropertyDescriptor(e,r);if(p?.set&&p.set.call(s,t),!l){if(h&&"string"==typeof r){var c=w.get("length"),g=Number(r);Number.isInteger(g)&&g>=c.v&&o(c,g+1)}k(m)}return!0},ownKeys(e){u(m);var r=Reflect.ownKeys(e).filter((e=>{var r=w.get(e);return void 0===r||r.v!==i}));for(var[t,n]of w)n.v===i||t in e||r.push(t);return r},setPrototypeOf(){f()}})}function k(e,r=1){o(e,e.v+r)}const z={get(e,r){if(!e.exclude.includes(r))return e.props[r]},set:(e,r)=>!1,getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r))return r in e.props?{enumerable:!0,configurable:!0,value:e.props[r]}:void 0},has:(e,r)=>!e.exclude.includes(r)&&r in e.props,ownKeys:e=>Reflect.ownKeys(e.props).filter((r=>!e.exclude.includes(r)))};function A(e,r,t){return new Proxy({props:e,exclude:r},z)}const B={get(e,r){let t=e.props.length;for(;t--;){let n=e.props[t];if(w(n)&&(n=n()),"object"==typeof n&&null!==n&&r in n)return n[r]}},set(e,r,t){let n=e.props.length;for(;n--;){let s=e.props[n];w(s)&&(s=s());const o=a(s,r);if(o&&o.set)return o.set(t),!0}return!1},getOwnPropertyDescriptor(e,r){let t=e.props.length;for(;t--;){let n=e.props[t];if(w(n)&&(n=n()),"object"==typeof n&&null!==n&&r in n){const e=a(n,r);return e&&!e.configurable&&(e.configurable=!0),e}}},has(r,t){if(t===e||t===h)return!1;for(let e of r.props)if(w(e)&&(e=e()),null!=e&&t in e)return!0;return!1},ownKeys(e){const r=[];for(let t of e.props){w(t)&&(t=t());for(const e in t)r.includes(e)||r.push(e)}return r}};function C(...e){return new Proxy({props:e},B)}function F(e){for(var r=l,t=l;null!==r&&!(r.f&(m|P));)r=r.parent;try{return x(r),e()}finally{x(t)}}function G(r,t,n,s){var i,l=!!(n&O),f=!R||!!(n&D),v=!!(n&K),p=!!(n&I),w=!1;v?[i,w]=q((()=>r[t])):i=r[t];var m,P=e in r||h in r,x=a(r,t)?.set??(P&&v&&t in r?e=>r[t]=e:void 0),k=s,z=!0,A=!1,B=()=>(A=!0,z&&(z=!1,k=p?b(s):s),k);if(void 0===i&&void 0!==s&&(x&&f&&c(),i=B(),x&&x(i)),f)m=()=>{var e=r[t];return void 0===e?B():(z=!0,A=!1,e)};else{var C=F((()=>(l?j:N)((()=>r[t]))));C.f|=g,m=()=>{var e=u(C);return void 0!==e&&(k=void 0),void 0===e?k:e}}if(!(n&d))return m;if(x){var G=r.$$legacy;return function(e,r){return arguments.length>0?(f&&r&&!G&&!w||x(r?m():e),e):m()}}var J=!1,L=$(i),Q=F((()=>j((()=>{var e=m(),r=u(L);return J?(J=!1,r):L.v=e}))));return l||(Q.equals=y),function(e,r){if(arguments.length>0){const t=r?u(Q):f&&v?M(e):e;return Q.equals(t)||(J=!0,o(L,t),A&&void 0!==k&&(k=t),b((()=>u(Q)))),e}return u(Q)}}export{G as a,M as p,A as r,C as s};
