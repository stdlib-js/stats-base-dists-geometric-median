// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var t=Math.ceil;var n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var e=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;var a,i="function"==typeof Symbol?Symbol.toStringTag:"";a=n&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,a,u,f;if(null==r)return e.call(r);n=r[i],f=i,t=null!=(u=r)&&o.call(u,f);try{r[i]=void 0}catch(t){return e.call(r)}return a=e.call(r),t?r[i]=n:delete r[i],a}:function(r){return e.call(r)};var u=a,f="function"==typeof Uint32Array;var c="function"==typeof Uint32Array?Uint32Array:null;var l,y="function"==typeof Uint32Array?Uint32Array:void 0;l=function(){var r,t,n;if("function"!=typeof c)return!1;try{t=new c(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(f&&n instanceof Uint32Array||"[object Uint32Array]"===u(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?y:function(){throw new Error("not implemented")};var p=l,v="function"==typeof Float64Array;var b="function"==typeof Float64Array?Float64Array:null;var w,A="function"==typeof Float64Array?Float64Array:void 0;w=function(){var r,t,n;if("function"!=typeof b)return!1;try{t=new b([1,3.14,-3.14,NaN]),n=t,r=(v&&n instanceof Float64Array||"[object Float64Array]"===u(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?A:function(){throw new Error("not implemented")};var _=w,m="function"==typeof Uint8Array;var d="function"==typeof Uint8Array?Uint8Array:null;var s,U="function"==typeof Uint8Array?Uint8Array:void 0;s=function(){var r,t,n;if("function"!=typeof d)return!1;try{t=new d(t=[1,3.14,-3.14,256,257]),n=t,r=(m&&n instanceof Uint8Array||"[object Uint8Array]"===u(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?U:function(){throw new Error("not implemented")};var h=s,j="function"==typeof Uint16Array;var g="function"==typeof Uint16Array?Uint16Array:null;var S,N="function"==typeof Uint16Array?Uint16Array:void 0;S=function(){var r,t,n;if("function"!=typeof g)return!1;try{t=new g(t=[1,3.14,-3.14,65536,65537]),n=t,r=(j&&n instanceof Uint16Array||"[object Uint16Array]"===u(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?N:function(){throw new Error("not implemented")};var E,F={uint16:S,uint8:h};(E=new F.uint16(1))[0]=4660;var O=52===new F.uint8(E.buffer)[0],I=!0===O?1:0,T=new _(1),G=new p(T.buffer);function P(r){return T[0]=r,G[I]}var H=!0===O?1:0,x=new _(1),V=new p(x.buffer);var k=!0===O?0:1,L=new _(1),W=new p(L.buffer);var C="function"==typeof Object.defineProperty?Object.defineProperty:null;var M,Y=Object.defineProperty,q=Object.prototype,z=q.toString,B=q.__defineGetter__,D=q.__defineSetter__,J=q.__lookupGetter__,K=q.__lookupSetter__;M=function(){try{return C({},"x",{}),!0}catch(r){return!1}}()?Y:function(r,t,n){var e,o,a,i;if("object"!=typeof r||null===r||"[object Array]"===z.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===z.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(J.call(r,t)||K.call(r,t)?(e=r.__proto__,r.__proto__=q,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),a="get"in n,i="set"in n,o&&(a||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&B&&B.call(r,t,n.get),i&&D&&D.call(r,t,n.set),r};var Q,R,X=M;!0===O?(Q=1,R=0):(Q=0,R=1);var Z={HIGH:Q,LOW:R},$=new _(1),rr=new p($.buffer),tr=Z.HIGH,nr=Z.LOW;function er(r,t,n,e){return $[0]=r,t[e]=rr[tr],t[e+n]=rr[nr],t}function or(r){return er(r,[0,0],1,0)}X(or,"assign",{configurable:!1,enumerable:!1,writable:!1,value:er});var ar=Number.NEGATIVE_INFINITY;var ir=[0,0];function ur(t){var n,e,o,a,i;if(r(t)||t<0)return NaN;if(or.assign(t,ir,1,0),i=0,(e=ir[0])<1048576){if(0==(2147483647&e|ir[1]))return ar;i-=54,e=P(t*=0x40000000000000)}return e>=2146435072?t+t:(i+=(e>>20)-1023|0,i+=(a=(e&=1048575)+614244&1048576|0)>>20|0,o=function(r){var t,n,e,o,a,i,u,f,c,l,y;return a=r-1,(1048575&2+(o=P(r)))<3?0===a?0:a*a*(.3333333333333333*a-.5):(l=(o&=1048575)-398458|0,y=440401-o|0,n=(c=(u=(i=a/(2+a))*i)*u)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(c),e=u*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(c),f=e+n,(l|=y)>0?i*((t=.5*a*a)+f)-t:i*(f-a))}(t=function(r,t){return x[0]=r,V[H]=t>>>0,x[0]}(t,e|1072693248^a)),n=function(r,t){return L[0]=r,W[k]=t>>>0,L[0]}(t-=1,0),1.6751713164886512e-10*(t+o)+1.4426950407214463*(t-n+o)+1.4426950407214463*n+i)}function fr(n){return r(n)||n<0||n>1?NaN:t(-1/ur(1-n))-1}export{fr as default};
//# sourceMappingURL=mod.js.map
