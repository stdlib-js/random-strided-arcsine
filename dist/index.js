"use strict";var y=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var d=y(function(I,p){
var g=require('@stdlib/array-base-assert-is-accessor-array/dist'),q=require('@stdlib/random-base-arcsine/dist');function O(n,e,u,i,c,a,f,t){var r,v,s;if(r={arity:0,fcn:null},f){if(e===0&&c===0)return g(n)?v=n.get(u):v=n[u],g(i)?s=i.get(a):s=i[a],r.fcn=q.factory(v,s,t),r;r.fcn=q.factory(t)}else r.fcn=q;return r.arity+=2,r}p.exports=O
});var h=y(function(J,m){
var R=require('@stdlib/strided-base-nullary/dist'),j=require('@stdlib/strided-base-binary/dist'),w=d();function z(n,e,u,i,c,a,f,t){var r=w(e,u,0,i,c,0,arguments.length>7,t);return r.arity===0?(R([a],[n],[f],r.fcn),a):(j([e,i,a],[n],[u,c,f],r.fcn),a)}m.exports=z
});var k=y(function(K,A){
var B=require('@stdlib/strided-base-nullary/dist').ndarray,C=require('@stdlib/strided-base-binary/dist').ndarray,D=d();function E(n,e,u,i,c,a,f,t,r,v,s){var l=D(e,u,i,c,a,f,arguments.length>10,s);return l.arity===0?(B([t],[n],[r],[v],l.fcn),t):(C([e,c,t],[n],[u,a,r],[i,f,v],l.fcn),t)}A.exports=E
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=h(),G=k();F(x,"ndarray",G);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
