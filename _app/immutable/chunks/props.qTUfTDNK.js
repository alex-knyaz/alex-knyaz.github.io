import{S as e,K as r,L as t,M as n,N as s,w as o,U as a,O as i,g as u,P as l,Q as f,R as v,T as p,V as c,W as g,X as d,Y as y,C as b,Z as w,_ as h,$ as m,a0 as P,a1 as x,a2 as O,a3 as R,a4 as K,a5 as j,I as D,a6 as N,a7 as I,a8 as $}from"./runtime.DkEBQSWI.js";import{c as q}from"./store.DgNBeoax.js";function M(c,g=null,d){if("object"!=typeof c||null===c||e in c)return c;const y=v(c);if(y!==r&&y!==t)return c;var b,w=new Map,h=p(c),m=n(0);return h&&w.set("length",n(c.length)),new Proxy(c,{defineProperty(e,r,t){"value"in t&&!1!==t.configurable&&!1!==t.enumerable&&!1!==t.writable||s();var a=w.get(r);return void 0===a?(a=n(t.value),w.set(r,a)):o(a,M(t.value,b)),!0},deleteProperty(e,r){var t=w.get(r);if(void 0===t)r in e&&w.set(r,n(a));else{if(h&&"string"==typeof r){var s=w.get("length"),i=Number(r);Number.isInteger(i)&&i<s.v&&o(s,i)}o(t,a),C(m)}return!0},get(r,t,s){if(t===e)return c;var o=w.get(t),l=t in r;if(void 0!==o||l&&!i(r,t)?.writable||(o=n(M(l?r[t]:a,b)),w.set(t,o)),void 0!==o){var f=u(o);return f===a?void 0:f}return Reflect.get(r,t,s)},getOwnPropertyDescriptor(e,r){var t=Reflect.getOwnPropertyDescriptor(e,r);if(t&&"value"in t){var n=w.get(r);n&&(t.value=u(n))}else if(void 0===t){var s=w.get(r),o=s?.v;if(void 0!==s&&o!==a)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return t},has(r,t){if(t===e)return!0;var s=w.get(t),o=void 0!==s&&s.v!==a||Reflect.has(r,t);if((void 0!==s||null!==l&&(!o||i(r,t)?.writable))&&(void 0===s&&(s=n(o?M(r[t],b):a),w.set(t,s)),u(s)===a))return!1;return o},set(e,r,t,s){var u=w.get(r),l=r in e;if(h&&"length"===r)for(var f=t;f<u.v;f+=1){var v=w.get(f+"");void 0!==v?o(v,a):f in e&&(v=n(a),w.set(f+"",v))}void 0===u?l&&!i(e,r)?.writable||(u=n(void 0),o(u,M(t,b)),w.set(r,u)):(l=u.v!==a,o(u,M(t,b)));var p=Reflect.getOwnPropertyDescriptor(e,r);if(p?.set&&p.set.call(s,t),!l){if(h&&"string"==typeof r){var c=w.get("length"),g=Number(r);Number.isInteger(g)&&g>=c.v&&o(c,g+1)}C(m)}return!0},ownKeys(e){u(m);var r=Reflect.ownKeys(e).filter((e=>{var r=w.get(e);return void 0===r||r.v!==a}));for(var[t,n]of w)n.v===a||t in e||r.push(t);return r},setPrototypeOf(){f()}})}function C(e,r=1){o(e,e.v+r)}const L={get(e,r){if(!e.exclude.includes(r))return e.props[r]},set:(e,r)=>!1,getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r))return r in e.props?{enumerable:!0,configurable:!0,value:e.props[r]}:void 0},has:(e,r)=>!e.exclude.includes(r)&&r in e.props,ownKeys:e=>Reflect.ownKeys(e.props).filter((r=>!e.exclude.includes(r)))};function Q(e,r,t){return new Proxy({props:e,exclude:r},L)}const S={get(e,r){let t=e.props.length;for(;t--;){let n=e.props[t];if(w(n)&&(n=n()),"object"==typeof n&&null!==n&&r in n)return n[r]}},set(e,r,t){let n=e.props.length;for(;n--;){let s=e.props[n];w(s)&&(s=s());const o=i(s,r);if(o&&o.set)return o.set(t),!0}return!1},getOwnPropertyDescriptor(e,r){let t=e.props.length;for(;t--;){let n=e.props[t];if(w(n)&&(n=n()),"object"==typeof n&&null!==n&&r in n){const e=i(n,r);return e&&!e.configurable&&(e.configurable=!0),e}}},has(r,t){if(t===e||t===h)return!1;for(let e of r.props)if(w(e)&&(e=e()),null!=e&&t in e)return!0;return!1},ownKeys(e){const r=[];for(let t of e.props){w(t)&&(t=t());for(const e in t)r.includes(e)||r.push(e)}return r}};function T(...e){return new Proxy({props:e},S)}function U(e){for(var r=l,t=l;null!==r&&!(r.f&(m|P));)r=r.parent;try{return x(r),e()}finally{x(t)}}function V(r,t,n,s){var a,l=!!(n&O),f=!R||!!(n&K),v=!!(n&j),p=!!(n&I),w=!1;v?[a,w]=q((()=>r[t])):a=r[t];var m,P=e in r||h in r,x=i(r,t)?.set??(P&&v&&t in r?e=>r[t]=e:void 0),C=s,L=!0,Q=!1,S=()=>(Q=!0,L&&(L=!1,C=p?b(s):s),C);if(void 0===a&&void 0!==s&&(x&&f&&c(),a=S(),x&&x(a)),f)m=()=>{var e=r[t];return void 0===e?S():(L=!0,Q=!1,e)};else{var T=U((()=>(l?D:N)((()=>r[t]))));T.f|=g,m=()=>{var e=u(T);return void 0!==e&&(C=void 0),void 0===e?C:e}}if(!(n&d))return m;if(x){var V=r.$$legacy;return function(e,r){return arguments.length>0?(f&&r&&!V&&!w||x(r?m():e),e):m()}}var W=!1,X=$(a),Y=U((()=>D((()=>{var e=m(),r=u(X);return W?(W=!1,r):X.v=e}))));return l||(Y.equals=y),function(e,r){if(arguments.length>0){const t=r?u(Y):f&&v?M(e):e;return Y.equals(t)||(W=!0,o(X,t),Q&&void 0!==C&&(C=t),b((()=>u(Y)))),e}return u(Y)}}export{V as a,M as p,Q as r,T as s};