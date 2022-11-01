// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";function n(n){return n!=n}var t,r=Math.ceil,e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,i=Object.prototype.hasOwnProperty,f="function"==typeof Symbol?Symbol.toStringTag:"",u=e&&"symbol"==typeof Symbol.toStringTag?function(n){var t,r,e,u,a;if(null==n)return o.call(n);r=n[f],a=f,t=null!=(u=n)&&i.call(u,a);try{n[f]=void 0}catch(t){return o.call(n)}return e=o.call(n),t?n[f]=r:delete n[f],e}:function(n){return o.call(n)},a="function"==typeof Uint32Array,c="function"==typeof Uint32Array?Uint32Array:null,y="function"==typeof Uint32Array?Uint32Array:void 0;t=function(){var n,t,r;if("function"!=typeof c)return!1;try{t=new c(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(a&&r instanceof Uint32Array||"[object Uint32Array]"===u(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?y:function(){throw new Error("not implemented")};var l,p=t,A="function"==typeof Float64Array,w="function"==typeof Float64Array?Float64Array:null,b="function"==typeof Float64Array?Float64Array:void 0;l=function(){var n,t,r;if("function"!=typeof w)return!1;try{t=new w([1,3.14,-3.14,NaN]),r=t,n=(A&&r instanceof Float64Array||"[object Float64Array]"===u(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?b:function(){throw new Error("not implemented")};var v,d=l,U="function"==typeof Uint8Array,m="function"==typeof Uint8Array?Uint8Array:null,h="function"==typeof Uint8Array?Uint8Array:void 0;v=function(){var n,t,r;if("function"!=typeof m)return!1;try{t=new m(t=[1,3.14,-3.14,256,257]),r=t,n=(U&&r instanceof Uint8Array||"[object Uint8Array]"===u(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?h:function(){throw new Error("not implemented")};var s,N=v,g="function"==typeof Uint16Array,F="function"==typeof Uint16Array?Uint16Array:null,S="function"==typeof Uint16Array?Uint16Array:void 0;s=function(){var n,t,r;if("function"!=typeof F)return!1;try{t=new F(t=[1,3.14,-3.14,65536,65537]),r=t,n=(g&&r instanceof Uint16Array||"[object Uint16Array]"===u(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?S:function(){throw new Error("not implemented")};var j,E={uint16:s,uint8:N};(j=new E.uint16(1))[0]=4660;var I=52===new E.uint8(j.buffer)[0],T=!0===I?1:0,O=new d(1),H=new p(O.buffer);function x(n){return O[0]=n,H[T]}var G,L,W=!0===I?1:0,M=new d(1),P=new p(M.buffer),V=!0===I?0:1,Y=new d(1),_=new p(Y.buffer);!0===I?(G=1,L=0):(G=0,L=1);var k={HIGH:G,LOW:L},q=new d(1),z=new p(q.buffer),B=k.HIGH,C=k.LOW;function D(n,t){return q[0]=t,n[0]=z[B],n[1]=z[C],n}var J=Number.NEGATIVE_INFINITY,K=1048575,Q=1.4426950407214463,R=[0,0];function X(t){var r,e,o,i,f;if(n(t)||t<0)return NaN;if(function(n,t){1===arguments.length?D([0,0],n):D(n,t)}(R,t),f=0,(e=R[0])<1048576){if(0==(2147483647&e|R[1]))return J;f-=54,e=x(t*=0x40000000000000)}return e>=2146435072?t+t:(f+=(e>>20)-1023|0,f+=(i=614244+(e&=1048575)&1048576|0)>>20|0,o=function(n){var t,r,e,o,i,f,u,a,c,y,l;return o=x(n),i=n-1,(K&2+o)<3?0===i?0:i*i*(.3333333333333333*i-.5):(y=(o&=K)-398458|0,l=440401-o|0,r=(c=(u=(f=i/(2+i))*f)*u)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(c),e=u*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(c),a=e+r,(y|=l)>0?f*((t=.5*i*i)+a)-t:f*(a-i))}(t=function(n,t){return M[0]=n,P[W]=t>>>0,M[0]}(t,e|1072693248^i)),r=function(n,t){return Y[0]=n,_[V]=t>>>0,Y[0]}(t-=1,0),1.6751713164886512e-10*(t+o)+(t-r+o)*Q+r*Q+f)}return function(t){return n(t)||t<0||t>1?NaN:r(-1/X(1-t))-1}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).median=t();
//# sourceMappingURL=index.js.map
