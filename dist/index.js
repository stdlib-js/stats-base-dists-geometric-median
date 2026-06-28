"use strict";var a=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(u){throw (e=0, u)}};};var t=a(function(f,i){
var n=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-ceil/dist'),c=require('@stdlib/math-base-special-log2/dist');function o(r){return n(r)||r<0||r>1?NaN:s(-1/c(1-r))-1}i.exports=o
});var q=t();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
