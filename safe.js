/**
 * @param {(object|array)} t inputObjOrArray - input object/array
 * @param {string} r keyString - string to access inner objects/elements
 * @param {*=} e fallback - any value to fallback to instead of undefined.
 */
module.exports=function safe(t,r,e){if(!r && typeof e === 'undefined')return t;if(("object"!=typeof t||"string"!=typeof r) && typeof e === 'undefined')return;if((!t || !r) && typeof e !== 'undefined')return e;const n=r.split(".");try{for(i=0;i<n.length;i++){let r=t;if(null==(t=t[n[i]])){const e=n[i].indexOf("["),f=n[i].indexOf("]");if(e>-1&&f>-1){let o=n[i].slice(e+1,f),l=n[i].slice(0,e);if(!Array.isArray(r[l])&&(r[l],String,0))return;t=r[l][parseInt(o)]}}}return t}catch(i){return e||void 0}};