import{bs as ve,aG as U,aA as Ve,bt as mr,bu as It,bv as hr,aF as ne,bw as ye,bx as br,aE as me,by as wr,bz as We,bA as ce,aB as Ar,bB as H,aC as tt,b as De,bC as Mt,s as $e,bl as xr,aY as Fe,v as Bt,z as W,c as E,d as ie,aR as Ct,P as Ue,G as de,aS as jr,Q as Rt,a3 as Lt,aM as Nt,bD as ze,o as _e,f as Vt,r as fe,n as X,h as _,_ as Wt,aT as Dt,a as pe,bE as Ee,bc as Tr,I as Ut,ah as zt,bF as Or,aO as $r,j as ge,av as Fr,H as Gt,N as _r,y as Er,bG as Sr,B as rt,bH as xe,w as je,k as qr,l as Pr,p as nt,a5 as Ir,t as it,m as at,g as ot,bk as Mr,a0 as Br,ak as Cr}from"./index-6c108ddb.js";var Rr=ve(U,"WeakMap");const Se=Rr;var st=Object.create,Lr=function(){function t(){}return function(e){if(!Ve(e))return{};if(st)return st(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();const Nr=Lr;function Vr(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}function Wr(t,e){for(var r=-1,n=t==null?0:t.length;++r<n&&e(t[r],r,t)!==!1;);return t}function he(t,e,r,n){var i=!r;r||(r={});for(var o=-1,a=e.length;++o<a;){var s=e[o],f=n?n(r[s],t[s],s,r,t):void 0;f===void 0&&(f=t[s]),i?mr(r,s,f):It(r,s,f)}return r}var Dr=9007199254740991;function Kt(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Dr}function Yt(t){return t!=null&&Kt(t.length)&&!hr(t)}var Ur=Object.prototype;function Ge(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||Ur;return t===r}function zr(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}var Gr="[object Arguments]";function ft(t){return ne(t)&&ye(t)==Gr}var Zt=Object.prototype,Kr=Zt.hasOwnProperty,Yr=Zt.propertyIsEnumerable,Zr=ft(function(){return arguments}())?ft:function(t){return ne(t)&&Kr.call(t,"callee")&&!Yr.call(t,"callee")};const Hr=Zr;function Jr(){return!1}var Ht=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ut=Ht&&typeof module=="object"&&module&&!module.nodeType&&module,Qr=ut&&ut.exports===Ht,lt=Qr?U.Buffer:void 0,Xr=lt?lt.isBuffer:void 0,kr=Xr||Jr;const Jt=kr;var en="[object Arguments]",tn="[object Array]",rn="[object Boolean]",nn="[object Date]",an="[object Error]",on="[object Function]",sn="[object Map]",fn="[object Number]",un="[object Object]",ln="[object RegExp]",cn="[object Set]",dn="[object String]",pn="[object WeakMap]",gn="[object ArrayBuffer]",vn="[object DataView]",yn="[object Float32Array]",mn="[object Float64Array]",hn="[object Int8Array]",bn="[object Int16Array]",wn="[object Int32Array]",An="[object Uint8Array]",xn="[object Uint8ClampedArray]",jn="[object Uint16Array]",Tn="[object Uint32Array]",O={};O[yn]=O[mn]=O[hn]=O[bn]=O[wn]=O[An]=O[xn]=O[jn]=O[Tn]=!0;O[en]=O[tn]=O[gn]=O[rn]=O[vn]=O[nn]=O[an]=O[on]=O[sn]=O[fn]=O[un]=O[ln]=O[cn]=O[dn]=O[pn]=!1;function On(t){return ne(t)&&Kt(t.length)&&!!O[ye(t)]}function Ke(t){return function(e){return t(e)}}var Qt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ee=Qt&&typeof module=="object"&&module&&!module.nodeType&&module,$n=ee&&ee.exports===Qt,Te=$n&&br.process,Fn=function(){try{var t=ee&&ee.require&&ee.require("util").types;return t||Te&&Te.binding&&Te.binding("util")}catch{}}();const Z=Fn;var ct=Z&&Z.isTypedArray,_n=ct?Ke(ct):On;const En=_n;var Sn=Object.prototype,qn=Sn.hasOwnProperty;function Xt(t,e){var r=me(t),n=!r&&Hr(t),i=!r&&!n&&Jt(t),o=!r&&!n&&!i&&En(t),a=r||n||i||o,s=a?zr(t.length,String):[],f=s.length;for(var g in t)(e||qn.call(t,g))&&!(a&&(g=="length"||i&&(g=="offset"||g=="parent")||o&&(g=="buffer"||g=="byteLength"||g=="byteOffset")||wr(g,f)))&&s.push(g);return s}function kt(t,e){return function(r){return t(e(r))}}var Pn=kt(Object.keys,Object);const In=Pn;var Mn=Object.prototype,Bn=Mn.hasOwnProperty;function Cn(t){if(!Ge(t))return In(t);var e=[];for(var r in Object(t))Bn.call(t,r)&&r!="constructor"&&e.push(r);return e}function Ye(t){return Yt(t)?Xt(t):Cn(t)}function Rn(t){var e=[];if(t!=null)for(var r in Object(t))e.push(r);return e}var Ln=Object.prototype,Nn=Ln.hasOwnProperty;function Vn(t){if(!Ve(t))return Rn(t);var e=Ge(t),r=[];for(var n in t)n=="constructor"&&(e||!Nn.call(t,n))||r.push(n);return r}function Ze(t){return Yt(t)?Xt(t,!0):Vn(t)}function er(t,e){for(var r=-1,n=e.length,i=t.length;++r<n;)t[i+r]=e[r];return t}var Wn=kt(Object.getPrototypeOf,Object);const tr=Wn;function qe(){if(!arguments.length)return[];var t=arguments[0];return me(t)?t:[t]}function Dn(){this.__data__=new We,this.size=0}function Un(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}function zn(t){return this.__data__.get(t)}function Gn(t){return this.__data__.has(t)}var Kn=200;function Yn(t,e){var r=this.__data__;if(r instanceof We){var n=r.__data__;if(!ce||n.length<Kn-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new Ar(n)}return r.set(t,e),this.size=r.size,this}function J(t){var e=this.__data__=new We(t);this.size=e.size}J.prototype.clear=Dn;J.prototype.delete=Un;J.prototype.get=zn;J.prototype.has=Gn;J.prototype.set=Yn;function Zn(t,e){return t&&he(e,Ye(e),t)}function Hn(t,e){return t&&he(e,Ze(e),t)}var rr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,dt=rr&&typeof module=="object"&&module&&!module.nodeType&&module,Jn=dt&&dt.exports===rr,pt=Jn?U.Buffer:void 0,gt=pt?pt.allocUnsafe:void 0;function Qn(t,e){if(e)return t.slice();var r=t.length,n=gt?gt(r):new t.constructor(r);return t.copy(n),n}function Xn(t,e){for(var r=-1,n=t==null?0:t.length,i=0,o=[];++r<n;){var a=t[r];e(a,r,t)&&(o[i++]=a)}return o}function nr(){return[]}var kn=Object.prototype,ei=kn.propertyIsEnumerable,vt=Object.getOwnPropertySymbols,ti=vt?function(t){return t==null?[]:(t=Object(t),Xn(vt(t),function(e){return ei.call(t,e)}))}:nr;const He=ti;function ri(t,e){return he(t,He(t),e)}var ni=Object.getOwnPropertySymbols,ii=ni?function(t){for(var e=[];t;)er(e,He(t)),t=tr(t);return e}:nr;const ir=ii;function ai(t,e){return he(t,ir(t),e)}function ar(t,e,r){var n=e(t);return me(t)?n:er(n,r(t))}function oi(t){return ar(t,Ye,He)}function si(t){return ar(t,Ze,ir)}var fi=ve(U,"DataView");const Pe=fi;var ui=ve(U,"Promise");const Ie=ui;var li=ve(U,"Set");const Me=li;var yt="[object Map]",ci="[object Object]",mt="[object Promise]",ht="[object Set]",bt="[object WeakMap]",wt="[object DataView]",di=H(Pe),pi=H(ce),gi=H(Ie),vi=H(Me),yi=H(Se),V=ye;(Pe&&V(new Pe(new ArrayBuffer(1)))!=wt||ce&&V(new ce)!=yt||Ie&&V(Ie.resolve())!=mt||Me&&V(new Me)!=ht||Se&&V(new Se)!=bt)&&(V=function(t){var e=ye(t),r=e==ci?t.constructor:void 0,n=r?H(r):"";if(n)switch(n){case di:return wt;case pi:return yt;case gi:return mt;case vi:return ht;case yi:return bt}return e});const Je=V;var mi=Object.prototype,hi=mi.hasOwnProperty;function bi(t){var e=t.length,r=new t.constructor(e);return e&&typeof t[0]=="string"&&hi.call(t,"index")&&(r.index=t.index,r.input=t.input),r}var wi=U.Uint8Array;const At=wi;function Qe(t){var e=new t.constructor(t.byteLength);return new At(e).set(new At(t)),e}function Ai(t,e){var r=e?Qe(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}var xi=/\w*$/;function ji(t){var e=new t.constructor(t.source,xi.exec(t));return e.lastIndex=t.lastIndex,e}var xt=tt?tt.prototype:void 0,jt=xt?xt.valueOf:void 0;function Ti(t){return jt?Object(jt.call(t)):{}}function Oi(t,e){var r=e?Qe(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}var $i="[object Boolean]",Fi="[object Date]",_i="[object Map]",Ei="[object Number]",Si="[object RegExp]",qi="[object Set]",Pi="[object String]",Ii="[object Symbol]",Mi="[object ArrayBuffer]",Bi="[object DataView]",Ci="[object Float32Array]",Ri="[object Float64Array]",Li="[object Int8Array]",Ni="[object Int16Array]",Vi="[object Int32Array]",Wi="[object Uint8Array]",Di="[object Uint8ClampedArray]",Ui="[object Uint16Array]",zi="[object Uint32Array]";function Gi(t,e,r){var n=t.constructor;switch(e){case Mi:return Qe(t);case $i:case Fi:return new n(+t);case Bi:return Ai(t,r);case Ci:case Ri:case Li:case Ni:case Vi:case Wi:case Di:case Ui:case zi:return Oi(t,r);case _i:return new n;case Ei:case Pi:return new n(t);case Si:return ji(t);case qi:return new n;case Ii:return Ti(t)}}function Ki(t){return typeof t.constructor=="function"&&!Ge(t)?Nr(tr(t)):{}}var Yi="[object Map]";function Zi(t){return ne(t)&&Je(t)==Yi}var Tt=Z&&Z.isMap,Hi=Tt?Ke(Tt):Zi;const Ji=Hi;var Qi="[object Set]";function Xi(t){return ne(t)&&Je(t)==Qi}var Ot=Z&&Z.isSet,ki=Ot?Ke(Ot):Xi;const ea=ki;var ta=1,ra=2,na=4,or="[object Arguments]",ia="[object Array]",aa="[object Boolean]",oa="[object Date]",sa="[object Error]",sr="[object Function]",fa="[object GeneratorFunction]",ua="[object Map]",la="[object Number]",fr="[object Object]",ca="[object RegExp]",da="[object Set]",pa="[object String]",ga="[object Symbol]",va="[object WeakMap]",ya="[object ArrayBuffer]",ma="[object DataView]",ha="[object Float32Array]",ba="[object Float64Array]",wa="[object Int8Array]",Aa="[object Int16Array]",xa="[object Int32Array]",ja="[object Uint8Array]",Ta="[object Uint8ClampedArray]",Oa="[object Uint16Array]",$a="[object Uint32Array]",j={};j[or]=j[ia]=j[ya]=j[ma]=j[aa]=j[oa]=j[ha]=j[ba]=j[wa]=j[Aa]=j[xa]=j[ua]=j[la]=j[fr]=j[ca]=j[da]=j[pa]=j[ga]=j[ja]=j[Ta]=j[Oa]=j[$a]=!0;j[sa]=j[sr]=j[va]=!1;function ue(t,e,r,n,i,o){var a,s=e&ta,f=e&ra,g=e&na;if(r&&(a=i?r(t,n,i,o):r(t)),a!==void 0)return a;if(!Ve(t))return t;var d=me(t);if(d){if(a=bi(t),!s)return Vr(t,a)}else{var v=Je(t),w=v==sr||v==fa;if(Jt(t))return Qn(t,s);if(v==fr||v==or||w&&!i){if(a=f||w?{}:Ki(t),!s)return f?ai(t,Hn(a,t)):ri(t,Zn(a,t))}else{if(!j[v])return i?t:{};a=Gi(t,v,s)}}o||(o=new J);var $=o.get(t);if($)return $;o.set(t,a),ea(t)?t.forEach(function(y){a.add(ue(y,e,r,y,t,o))}):Ji(t)&&t.forEach(function(y,u){a.set(u,ue(y,e,r,u,t,o))});var F=g?f?si:oi:f?Ze:Ye,c=d?void 0:F(t);return Wr(c||t,function(y,u){c&&(u=y,y=t[u]),It(a,u,ue(y,e,r,u,t,o))}),a}var Fa=4;function $t(t){return ue(t,Fa)}const _a=De({size:{type:String,values:Mt},disabled:Boolean}),Ea=De({..._a,model:Object,rules:{type:$e(Object)},labelPosition:{type:String,values:["left","right","top"],default:"right"},requireAsteriskPosition:{type:String,values:["left","right"],default:"left"},labelWidth:{type:[String,Number],default:""},labelSuffix:{type:String,default:""},inline:Boolean,inlineMessage:Boolean,statusIcon:Boolean,showMessage:{type:Boolean,default:!0},validateOnRuleChange:{type:Boolean,default:!0},hideRequiredAsterisk:Boolean,scrollToError:Boolean,scrollIntoViewOptions:{type:[Object,Boolean]}}),Sa={validate:(t,e,r)=>(xr(t)||Fe(t))&&Bt(e)&&Fe(r)};function qa(){const t=W([]),e=E(()=>{if(!t.value.length)return"0";const o=Math.max(...t.value);return o?`${o}px`:""});function r(o){const a=t.value.indexOf(o);return a===-1&&e.value,a}function n(o,a){if(o&&a){const s=r(a);t.value.splice(s,1,o)}else o&&t.value.push(o)}function i(o){const a=r(o);a>-1&&t.value.splice(a,1)}return{autoLabelWidth:e,registerLabelWidth:n,deregisterLabelWidth:i}}const oe=(t,e)=>{const r=qe(e);return r.length>0?t.filter(n=>n.prop&&r.includes(n.prop)):t},Pa="ElForm",Ia=ie({name:Pa}),Ma=ie({...Ia,props:Ea,emits:Sa,setup(t,{expose:e,emit:r}){const n=t,i=[],o=Ct(),a=Ue("form"),s=E(()=>{const{labelPosition:m,inline:l}=n;return[a.b(),a.m(o.value||"default"),{[a.m(`label-${m}`)]:m,[a.m("inline")]:l}]}),f=m=>{i.push(m)},g=m=>{m.prop&&i.splice(i.indexOf(m),1)},d=(m=[])=>{n.model&&oe(i,m).forEach(l=>l.resetField())},v=(m=[])=>{oe(i,m).forEach(l=>l.clearValidate())},w=E(()=>!!n.model),$=m=>{if(i.length===0)return[];const l=oe(i,m);return l.length?l:[]},F=async m=>y(void 0,m),c=async(m=[])=>{if(!w.value)return!1;const l=$(m);if(l.length===0)return!0;let b={};for(const x of l)try{await x.validate("")}catch(T){b={...b,...T}}return Object.keys(b).length===0?!0:Promise.reject(b)},y=async(m=[],l)=>{const b=!Dt(l);try{const x=await c(m);return x===!0&&(l==null||l(x)),x}catch(x){if(x instanceof Error)throw x;const T=x;return n.scrollToError&&u(Object.keys(T)[0]),l==null||l(!1,T),b&&Promise.reject(T)}},u=m=>{var l;const b=oe(i,m)[0];b&&((l=b.$el)==null||l.scrollIntoView(n.scrollIntoViewOptions))};return de(()=>n.rules,()=>{n.validateOnRuleChange&&F().catch(m=>jr())},{deep:!0}),Rt(ze,Lt({...Nt(n),emit:r,resetFields:d,clearValidate:v,validateField:y,addField:f,removeField:g,...qa()})),e({validate:F,validateField:y,resetFields:d,clearValidate:v,scrollToField:u}),(m,l)=>(_e(),Vt("form",{class:X(_(s))},[fe(m.$slots,"default")],2))}});var Ba=Wt(Ma,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);function D(){return D=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},D.apply(this,arguments)}function Ca(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,re(t,e)}function Be(t){return Be=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},Be(t)}function re(t,e){return re=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},re(t,e)}function Ra(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function le(t,e,r){return Ra()?le=Reflect.construct.bind():le=function(i,o,a){var s=[null];s.push.apply(s,o);var f=Function.bind.apply(i,s),g=new f;return a&&re(g,a.prototype),g},le.apply(null,arguments)}function La(t){return Function.toString.call(t).indexOf("[native code]")!==-1}function Ce(t){var e=typeof Map=="function"?new Map:void 0;return Ce=function(n){if(n===null||!La(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(n))return e.get(n);e.set(n,i)}function i(){return le(n,arguments,Be(this).constructor)}return i.prototype=Object.create(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),re(i,n)},Ce(t)}var Na=/%[sdj%]/g,Va=function(){};typeof process<"u"&&process.env;function Re(t){if(!t||!t.length)return null;var e={};return t.forEach(function(r){var n=r.field;e[n]=e[n]||[],e[n].push(r)}),e}function M(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];var i=0,o=r.length;if(typeof t=="function")return t.apply(null,r);if(typeof t=="string"){var a=t.replace(Na,function(s){if(s==="%%")return"%";if(i>=o)return s;switch(s){case"%s":return String(r[i++]);case"%d":return Number(r[i++]);case"%j":try{return JSON.stringify(r[i++])}catch{return"[Circular]"}break;default:return s}});return a}return t}function Wa(t){return t==="string"||t==="url"||t==="hex"||t==="email"||t==="date"||t==="pattern"}function S(t,e){return!!(t==null||e==="array"&&Array.isArray(t)&&!t.length||Wa(e)&&typeof t=="string"&&!t)}function Da(t,e,r){var n=[],i=0,o=t.length;function a(s){n.push.apply(n,s||[]),i++,i===o&&r(n)}t.forEach(function(s){e(s,a)})}function Ft(t,e,r){var n=0,i=t.length;function o(a){if(a&&a.length){r(a);return}var s=n;n=n+1,s<i?e(t[s],o):r([])}o([])}function Ua(t){var e=[];return Object.keys(t).forEach(function(r){e.push.apply(e,t[r]||[])}),e}var _t=function(t){Ca(e,t);function e(r,n){var i;return i=t.call(this,"Async Validation Error")||this,i.errors=r,i.fields=n,i}return e}(Ce(Error));function za(t,e,r,n,i){if(e.first){var o=new Promise(function(w,$){var F=function(u){return n(u),u.length?$(new _t(u,Re(u))):w(i)},c=Ua(t);Ft(c,r,F)});return o.catch(function(w){return w}),o}var a=e.firstFields===!0?Object.keys(t):e.firstFields||[],s=Object.keys(t),f=s.length,g=0,d=[],v=new Promise(function(w,$){var F=function(y){if(d.push.apply(d,y),g++,g===f)return n(d),d.length?$(new _t(d,Re(d))):w(i)};s.length||(n(d),w(i)),s.forEach(function(c){var y=t[c];a.indexOf(c)!==-1?Ft(y,r,F):Da(y,r,F)})});return v.catch(function(w){return w}),v}function Ga(t){return!!(t&&t.message!==void 0)}function Ka(t,e){for(var r=t,n=0;n<e.length;n++){if(r==null)return r;r=r[e[n]]}return r}function Et(t,e){return function(r){var n;return t.fullFields?n=Ka(e,t.fullFields):n=e[r.field||t.fullField],Ga(r)?(r.field=r.field||t.fullField,r.fieldValue=n,r):{message:typeof r=="function"?r():r,fieldValue:n,field:r.field||t.fullField}}}function St(t,e){if(e){for(var r in e)if(e.hasOwnProperty(r)){var n=e[r];typeof n=="object"&&typeof t[r]=="object"?t[r]=D({},t[r],n):t[r]=n}}return t}var ur=function(e,r,n,i,o,a){e.required&&(!n.hasOwnProperty(e.field)||S(r,a||e.type))&&i.push(M(o.messages.required,e.fullField))},Ya=function(e,r,n,i,o){(/^\s+$/.test(r)||r==="")&&i.push(M(o.messages.whitespace,e.fullField))},se,Za=function(){if(se)return se;var t="[a-fA-F\\d:]",e=function(b){return b&&b.includeBoundaries?"(?:(?<=\\s|^)(?="+t+")|(?<="+t+")(?=\\s|$))":""},r="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",n="[a-fA-F\\d]{1,4}",i=(`
(?:
(?:`+n+":){7}(?:"+n+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+n+":){6}(?:"+r+"|:"+n+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+n+":){5}(?::"+r+"|(?::"+n+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+n+":){4}(?:(?::"+n+"){0,1}:"+r+"|(?::"+n+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+n+":){3}(?:(?::"+n+"){0,2}:"+r+"|(?::"+n+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+n+":){2}(?:(?::"+n+"){0,3}:"+r+"|(?::"+n+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+n+":){1}(?:(?::"+n+"){0,4}:"+r+"|(?::"+n+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+n+"){0,5}:"+r+"|(?::"+n+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),o=new RegExp("(?:^"+r+"$)|(?:^"+i+"$)"),a=new RegExp("^"+r+"$"),s=new RegExp("^"+i+"$"),f=function(b){return b&&b.exact?o:new RegExp("(?:"+e(b)+r+e(b)+")|(?:"+e(b)+i+e(b)+")","g")};f.v4=function(l){return l&&l.exact?a:new RegExp(""+e(l)+r+e(l),"g")},f.v6=function(l){return l&&l.exact?s:new RegExp(""+e(l)+i+e(l),"g")};var g="(?:(?:[a-z]+:)?//)",d="(?:\\S+(?::\\S*)?@)?",v=f.v4().source,w=f.v6().source,$="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",F="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",c="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",y="(?::\\d{2,5})?",u='(?:[/?#][^\\s"]*)?',m="(?:"+g+"|www\\.)"+d+"(?:localhost|"+v+"|"+w+"|"+$+F+c+")"+y+u;return se=new RegExp("(?:^"+m+"$)","i"),se},qt={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},k={integer:function(e){return k.number(e)&&parseInt(e,10)===e},float:function(e){return k.number(e)&&!k.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return typeof e=="object"&&!k.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match(qt.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(Za())},hex:function(e){return typeof e=="string"&&!!e.match(qt.hex)}},Ha=function(e,r,n,i,o){if(e.required&&r===void 0){ur(e,r,n,i,o);return}var a=["integer","float","array","regexp","object","method","email","number","date","url","hex"],s=e.type;a.indexOf(s)>-1?k[s](r)||i.push(M(o.messages.types[s],e.fullField,e.type)):s&&typeof r!==e.type&&i.push(M(o.messages.types[s],e.fullField,e.type))},Ja=function(e,r,n,i,o){var a=typeof e.len=="number",s=typeof e.min=="number",f=typeof e.max=="number",g=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,d=r,v=null,w=typeof r=="number",$=typeof r=="string",F=Array.isArray(r);if(w?v="number":$?v="string":F&&(v="array"),!v)return!1;F&&(d=r.length),$&&(d=r.replace(g,"_").length),a?d!==e.len&&i.push(M(o.messages[v].len,e.fullField,e.len)):s&&!f&&d<e.min?i.push(M(o.messages[v].min,e.fullField,e.min)):f&&!s&&d>e.max?i.push(M(o.messages[v].max,e.fullField,e.max)):s&&f&&(d<e.min||d>e.max)&&i.push(M(o.messages[v].range,e.fullField,e.min,e.max))},Y="enum",Qa=function(e,r,n,i,o){e[Y]=Array.isArray(e[Y])?e[Y]:[],e[Y].indexOf(r)===-1&&i.push(M(o.messages[Y],e.fullField,e[Y].join(", ")))},Xa=function(e,r,n,i,o){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(r)||i.push(M(o.messages.pattern.mismatch,e.fullField,r,e.pattern));else if(typeof e.pattern=="string"){var a=new RegExp(e.pattern);a.test(r)||i.push(M(o.messages.pattern.mismatch,e.fullField,r,e.pattern))}}},h={required:ur,whitespace:Ya,type:Ha,range:Ja,enum:Qa,pattern:Xa},ka=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(S(r,"string")&&!e.required)return n();h.required(e,r,i,a,o,"string"),S(r,"string")||(h.type(e,r,i,a,o),h.range(e,r,i,a,o),h.pattern(e,r,i,a,o),e.whitespace===!0&&h.whitespace(e,r,i,a,o))}n(a)},eo=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(S(r)&&!e.required)return n();h.required(e,r,i,a,o),r!==void 0&&h.type(e,r,i,a,o)}n(a)},to=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(r===""&&(r=void 0),S(r)&&!e.required)return n();h.required(e,r,i,a,o),r!==void 0&&(h.type(e,r,i,a,o),h.range(e,r,i,a,o))}n(a)},ro=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(S(r)&&!e.required)return n();h.required(e,r,i,a,o),r!==void 0&&h.type(e,r,i,a,o)}n(a)},no=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(S(r)&&!e.required)return n();h.required(e,r,i,a,o),S(r)||h.type(e,r,i,a,o)}n(a)},io=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(S(r)&&!e.required)return n();h.required(e,r,i,a,o),r!==void 0&&(h.type(e,r,i,a,o),h.range(e,r,i,a,o))}n(a)},ao=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(S(r)&&!e.required)return n();h.required(e,r,i,a,o),r!==void 0&&(h.type(e,r,i,a,o),h.range(e,r,i,a,o))}n(a)},oo=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(r==null&&!e.required)return n();h.required(e,r,i,a,o,"array"),r!=null&&(h.type(e,r,i,a,o),h.range(e,r,i,a,o))}n(a)},so=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(S(r)&&!e.required)return n();h.required(e,r,i,a,o),r!==void 0&&h.type(e,r,i,a,o)}n(a)},fo="enum",uo=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(S(r)&&!e.required)return n();h.required(e,r,i,a,o),r!==void 0&&h[fo](e,r,i,a,o)}n(a)},lo=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(S(r,"string")&&!e.required)return n();h.required(e,r,i,a,o),S(r,"string")||h.pattern(e,r,i,a,o)}n(a)},co=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(S(r,"date")&&!e.required)return n();if(h.required(e,r,i,a,o),!S(r,"date")){var f;r instanceof Date?f=r:f=new Date(r),h.type(e,f,i,a,o),f&&h.range(e,f.getTime(),i,a,o)}}n(a)},po=function(e,r,n,i,o){var a=[],s=Array.isArray(r)?"array":typeof r;h.required(e,r,i,a,o,s),n(a)},Oe=function(e,r,n,i,o){var a=e.type,s=[],f=e.required||!e.required&&i.hasOwnProperty(e.field);if(f){if(S(r,a)&&!e.required)return n();h.required(e,r,i,s,o,a),S(r,a)||h.type(e,r,i,s,o)}n(s)},go=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(S(r)&&!e.required)return n();h.required(e,r,i,a,o)}n(a)},te={string:ka,method:eo,number:to,boolean:ro,regexp:no,integer:io,float:ao,array:oo,object:so,enum:uo,pattern:lo,date:co,url:Oe,hex:Oe,email:Oe,required:po,any:go};function Le(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var Ne=Le(),ae=function(){function t(r){this.rules=null,this._messages=Ne,this.define(r)}var e=t.prototype;return e.define=function(n){var i=this;if(!n)throw new Error("Cannot configure a schema with no rules");if(typeof n!="object"||Array.isArray(n))throw new Error("Rules must be an object");this.rules={},Object.keys(n).forEach(function(o){var a=n[o];i.rules[o]=Array.isArray(a)?a:[a]})},e.messages=function(n){return n&&(this._messages=St(Le(),n)),this._messages},e.validate=function(n,i,o){var a=this;i===void 0&&(i={}),o===void 0&&(o=function(){});var s=n,f=i,g=o;if(typeof f=="function"&&(g=f,f={}),!this.rules||Object.keys(this.rules).length===0)return g&&g(null,s),Promise.resolve(s);function d(c){var y=[],u={};function m(b){if(Array.isArray(b)){var x;y=(x=y).concat.apply(x,b)}else y.push(b)}for(var l=0;l<c.length;l++)m(c[l]);y.length?(u=Re(y),g(y,u)):g(null,s)}if(f.messages){var v=this.messages();v===Ne&&(v=Le()),St(v,f.messages),f.messages=v}else f.messages=this.messages();var w={},$=f.keys||Object.keys(this.rules);$.forEach(function(c){var y=a.rules[c],u=s[c];y.forEach(function(m){var l=m;typeof l.transform=="function"&&(s===n&&(s=D({},s)),u=s[c]=l.transform(u)),typeof l=="function"?l={validator:l}:l=D({},l),l.validator=a.getValidationMethod(l),l.validator&&(l.field=c,l.fullField=l.fullField||c,l.type=a.getType(l),w[c]=w[c]||[],w[c].push({rule:l,value:u,source:s,field:c}))})});var F={};return za(w,f,function(c,y){var u=c.rule,m=(u.type==="object"||u.type==="array")&&(typeof u.fields=="object"||typeof u.defaultField=="object");m=m&&(u.required||!u.required&&c.value),u.field=c.field;function l(T,C){return D({},C,{fullField:u.fullField+"."+T,fullFields:u.fullFields?[].concat(u.fullFields,[T]):[T]})}function b(T){T===void 0&&(T=[]);var C=Array.isArray(T)?T:[T];!f.suppressWarning&&C.length&&t.warning("async-validator:",C),C.length&&u.message!==void 0&&(C=[].concat(u.message));var I=C.map(Et(u,s));if(f.first&&I.length)return F[u.field]=1,y(I);if(!m)y(I);else{if(u.required&&!c.value)return u.message!==void 0?I=[].concat(u.message).map(Et(u,s)):f.error&&(I=[f.error(u,M(f.messages.required,u.field))]),y(I);var N={};u.defaultField&&Object.keys(c.value).map(function(R){N[R]=u.defaultField}),N=D({},N,c.rule.fields);var Q={};Object.keys(N).forEach(function(R){var B=N[R],be=Array.isArray(B)?B:[B];Q[R]=be.map(l.bind(null,R))});var z=new t(Q);z.messages(f.messages),c.rule.options&&(c.rule.options.messages=f.messages,c.rule.options.error=f.error),z.validate(c.value,c.rule.options||f,function(R){var B=[];I&&I.length&&B.push.apply(B,I),R&&R.length&&B.push.apply(B,R),y(B.length?B:null)})}}var x;if(u.asyncValidator)x=u.asyncValidator(u,c.value,b,c.source,f);else if(u.validator){try{x=u.validator(u,c.value,b,c.source,f)}catch(T){console.error==null||console.error(T),f.suppressValidatorError||setTimeout(function(){throw T},0),b(T.message)}x===!0?b():x===!1?b(typeof u.message=="function"?u.message(u.fullField||u.field):u.message||(u.fullField||u.field)+" fails"):x instanceof Array?b(x):x instanceof Error&&b(x.message)}x&&x.then&&x.then(function(){return b()},function(T){return b(T)})},function(c){d(c)},s)},e.getType=function(n){if(n.type===void 0&&n.pattern instanceof RegExp&&(n.type="pattern"),typeof n.validator!="function"&&n.type&&!te.hasOwnProperty(n.type))throw new Error(M("Unknown rule type %s",n.type));return n.type||"string"},e.getValidationMethod=function(n){if(typeof n.validator=="function")return n.validator;var i=Object.keys(n),o=i.indexOf("message");return o!==-1&&i.splice(o,1),i.length===1&&i[0]==="required"?te.required:te[this.getType(n)]||void 0},t}();ae.register=function(e,r){if(typeof r!="function")throw new Error("Cannot register a validator by type, validator is not a function");te[e]=r};ae.warning=Va;ae.messages=Ne;ae.validators=te;const vo=["","error","validating","success"],yo=De({label:String,labelWidth:{type:[String,Number],default:""},prop:{type:$e([String,Array])},required:{type:Boolean,default:void 0},rules:{type:$e([Object,Array])},error:String,validateStatus:{type:String,values:vo},for:String,inlineMessage:{type:[String,Boolean],default:""},showMessage:{type:Boolean,default:!0},size:{type:String,values:Mt}}),Pt="ElLabelWrap";var mo=ie({name:Pt,props:{isAutoWidth:Boolean,updateAll:Boolean},setup(t,{slots:e}){const r=pe(ze,void 0),n=pe(Ee);n||Tr(Pt,"usage: <el-form-item><label-wrap /></el-form-item>");const i=Ue("form"),o=W(),a=W(0),s=()=>{var d;if((d=o.value)!=null&&d.firstElementChild){const v=window.getComputedStyle(o.value.firstElementChild).width;return Math.ceil(Number.parseFloat(v))}else return 0},f=(d="update")=>{Gt(()=>{e.default&&t.isAutoWidth&&(d==="update"?a.value=s():d==="remove"&&(r==null||r.deregisterLabelWidth(a.value)))})},g=()=>f("update");return Ut(()=>{g()}),zt(()=>{f("remove")}),Or(()=>g()),de(a,(d,v)=>{t.updateAll&&(r==null||r.registerLabelWidth(d,v))}),$r(E(()=>{var d,v;return(v=(d=o.value)==null?void 0:d.firstElementChild)!=null?v:null}),g),()=>{var d,v;if(!e)return null;const{isAutoWidth:w}=t;if(w){const $=r==null?void 0:r.autoLabelWidth,F=n==null?void 0:n.hasLabel,c={};if(F&&$&&$!=="auto"){const y=Math.max(0,Number.parseInt($,10)-a.value),u=r.labelPosition==="left"?"marginRight":"marginLeft";y&&(c[u]=`${y}px`)}return ge("div",{ref:o,class:[i.be("item","label-wrap")],style:c},[(d=e.default)==null?void 0:d.call(e)])}else return ge(Fr,{ref:o},[(v=e.default)==null?void 0:v.call(e)])}}});const ho=["role","aria-labelledby"],bo=ie({name:"ElFormItem"}),wo=ie({...bo,props:yo,setup(t,{expose:e}){const r=t,n=_r(),i=pe(ze,void 0),o=pe(Ee,void 0),a=Ct(void 0,{formItem:!1}),s=Ue("form-item"),f=Er().value,g=W([]),d=W(""),v=Sr(d,100),w=W(""),$=W();let F,c=!1;const y=E(()=>{if((i==null?void 0:i.labelPosition)==="top")return{};const p=rt(r.labelWidth||(i==null?void 0:i.labelWidth)||"");return p?{width:p}:{}}),u=E(()=>{if((i==null?void 0:i.labelPosition)==="top"||i!=null&&i.inline)return{};if(!r.label&&!r.labelWidth&&N)return{};const p=rt(r.labelWidth||(i==null?void 0:i.labelWidth)||"");return!r.label&&!n.label?{marginLeft:p}:{}}),m=E(()=>[s.b(),s.m(a.value),s.is("error",d.value==="error"),s.is("validating",d.value==="validating"),s.is("success",d.value==="success"),s.is("required",be.value||r.required),s.is("no-asterisk",i==null?void 0:i.hideRequiredAsterisk),(i==null?void 0:i.requireAsteriskPosition)==="right"?"asterisk-right":"asterisk-left",{[s.m("feedback")]:i==null?void 0:i.statusIcon}]),l=E(()=>Bt(r.inlineMessage)?r.inlineMessage:(i==null?void 0:i.inlineMessage)||!1),b=E(()=>[s.e("error"),{[s.em("error","inline")]:l.value}]),x=E(()=>r.prop?Fe(r.prop)?r.prop:r.prop.join("."):""),T=E(()=>!!(r.label||n.label)),C=E(()=>r.for||g.value.length===1?g.value[0]:void 0),I=E(()=>!C.value&&T.value),N=!!o,Q=E(()=>{const p=i==null?void 0:i.model;if(!(!p||!r.prop))return xe(p,r.prop).value}),z=E(()=>{const{required:p}=r,A=[];r.rules&&A.push(...qe(r.rules));const P=i==null?void 0:i.rules;if(P&&r.prop){const q=xe(P,r.prop).value;q&&A.push(...qe(q))}if(p!==void 0){const q=A.map((L,K)=>[L,K]).filter(([L])=>Object.keys(L).includes("required"));if(q.length>0)for(const[L,K]of q)L.required!==p&&(A[K]={...L,required:p});else A.push({required:p})}return A}),R=E(()=>z.value.length>0),B=p=>z.value.filter(P=>!P.trigger||!p?!0:Array.isArray(P.trigger)?P.trigger.includes(p):P.trigger===p).map(({trigger:P,...q})=>q),be=E(()=>z.value.some(p=>p.required)),cr=E(()=>{var p;return v.value==="error"&&r.showMessage&&((p=i==null?void 0:i.showMessage)!=null?p:!0)}),Xe=E(()=>`${r.label||""}${(i==null?void 0:i.labelSuffix)||""}`),G=p=>{d.value=p},dr=p=>{var A,P;const{errors:q,fields:L}=p;(!q||!L)&&console.error(p),G("error"),w.value=q?(P=(A=q==null?void 0:q[0])==null?void 0:A.message)!=null?P:`${r.prop} is required`:"",i==null||i.emit("validate",r.prop,!1,w.value)},pr=()=>{G("success"),i==null||i.emit("validate",r.prop,!0,"")},gr=async p=>{const A=x.value;return new ae({[A]:p}).validate({[A]:Q.value},{firstFields:!0}).then(()=>(pr(),!0)).catch(q=>(dr(q),Promise.reject(q)))},ke=async(p,A)=>{if(c||!r.prop)return!1;const P=Dt(A);if(!R.value)return A==null||A(!1),!1;const q=B(p);return q.length===0?(A==null||A(!0),!0):(G("validating"),gr(q).then(()=>(A==null||A(!0),!0)).catch(L=>{const{fields:K}=L;return A==null||A(!1,K),P?!1:Promise.reject(K)}))},we=()=>{G(""),w.value="",c=!1},et=async()=>{const p=i==null?void 0:i.model;if(!p||!r.prop)return;const A=xe(p,r.prop);c=!0,A.value=$t(F),await Gt(),we(),c=!1},vr=p=>{g.value.includes(p)||g.value.push(p)},yr=p=>{g.value=g.value.filter(A=>A!==p)};de(()=>r.error,p=>{w.value=p||"",G(p?"error":"")},{immediate:!0}),de(()=>r.validateStatus,p=>G(p||""));const Ae=Lt({...Nt(r),$el:$,size:a,validateState:d,labelId:f,inputIds:g,isGroup:I,hasLabel:T,addInputId:vr,removeInputId:yr,resetField:et,clearValidate:we,validate:ke});return Rt(Ee,Ae),Ut(()=>{r.prop&&(i==null||i.addField(Ae),F=$t(Q.value))}),zt(()=>{i==null||i.removeField(Ae)}),e({size:a,validateMessage:w,validateState:d,validate:ke,clearValidate:we,resetField:et}),(p,A)=>{var P;return _e(),Vt("div",{ref_key:"formItemRef",ref:$,class:X(_(m)),role:_(I)?"group":void 0,"aria-labelledby":_(I)?_(f):void 0},[ge(_(mo),{"is-auto-width":_(y).width==="auto","update-all":((P=_(i))==null?void 0:P.labelWidth)==="auto"},{default:je(()=>[_(T)?(_e(),qr(Pr(_(C)?"label":"div"),{key:0,id:_(f),for:_(C),class:X(_(s).e("label")),style:nt(_(y))},{default:je(()=>[fe(p.$slots,"label",{label:_(Xe)},()=>[Ir(it(_(Xe)),1)])]),_:3},8,["id","for","class","style"])):at("v-if",!0)]),_:3},8,["is-auto-width","update-all"]),ot("div",{class:X(_(s).e("content")),style:nt(_(u))},[fe(p.$slots,"default"),ge(Mr,{name:`${_(s).namespace.value}-zoom-in-top`},{default:je(()=>[_(cr)?fe(p.$slots,"error",{key:0,error:w.value},()=>[ot("div",{class:X(_(b))},it(w.value),3)]):at("v-if",!0)]),_:3},8,["name"])],6)],10,ho)}}});var lr=Wt(wo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);const xo=Br(Ba,{FormItem:lr}),jo=Cr(lr);export{jo as E,J as S,At as U,xo as a,ue as b,Je as c,En as d,oi as g,Jt as i};
