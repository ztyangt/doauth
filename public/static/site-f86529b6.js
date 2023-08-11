import{z as me,bC as fe,L as X,aJ as ve,au as q,aw as O,av as K,A as M,C as H,bD as L,d as R,az as _e,aE as ge,B as he,aF as be,ay as ye,O as k,r as I,aY as Ve,F as j,aA as we,y as Ce,o as r,v as E,f as S,e,I as w,h as Se,c as y,w as n,R as A,S as F,P as C,t as J,b as l,bj as ke,Q as ee,bE as Ee,J as Ie,bw as Te,aa as Ne,bF as ae,a$ as Ue,K as Be,V as xe,a as te,g as x,bG as P,a6 as le,aZ as Pe,Y as Re,Z as $e,_ as oe,bH as De,aH as Fe,E as Oe,m as ne,n as se,l as ze,x as Ke,s as Me,bh as je}from"./index-a1081636.js";import{E as Y}from"./card-3b4b2fb8.js";import{n as z,E as ie,a as ce,s as Ae}from"./common-0a2c8a00.js";import{a as Je,E as qe}from"./col-c3a3296e.js";import{a as He,_ as Le}from"./select-a7d8150e.js";import"./tag-a1591f17.js";const Ge=me({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:fe},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:X},inactiveIcon:{type:X},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:ve(Function)},id:String,tabindex:{type:[String,Number]},value:{type:[Boolean,String,Number],default:!1}}),Ye={[q]:c=>O(c)||K(c)||M(c),[H]:c=>O(c)||K(c)||M(c),[L]:c=>O(c)||K(c)||M(c)},Ze=["onClick"],Qe=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex","onKeydown"],We=["aria-hidden"],Xe=["aria-hidden"],ea=["aria-hidden"],G="ElSwitch",aa=R({name:G}),ta=R({...aa,props:Ge,emits:Ye,setup(c,{expose:s,emit:i}){const o=c,d=Be(),{formItem:f}=_e(),u=ge(),a=he("switch");(t=>{t.forEach(_=>{Te({from:_[0],replacement:_[1],scope:G,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},k(()=>{var D;return!!((D=d.vnode.props)!=null&&D[_[2]])}))})})([['"value"','"model-value" or "v-model"',"value"],['"active-color"',"CSS var `--el-switch-on-color`","activeColor"],['"inactive-color"',"CSS var `--el-switch-off-color`","inactiveColor"],['"border-color"',"CSS var `--el-switch-border-color`","borderColor"]]);const{inputId:v}=be(o,{formItemContext:f}),h=ye(k(()=>o.loading)),T=I(o.modelValue!==!1),V=I(),N=I(),B=k(()=>[a.b(),a.m(u.value),a.is("disabled",h.value),a.is("checked",g.value)]),m=k(()=>[a.e("label"),a.em("label","left"),a.is("active",!g.value)]),b=k(()=>[a.e("label"),a.em("label","right"),a.is("active",g.value)]),re=k(()=>({width:Ve(o.width)}));j(()=>o.modelValue,()=>{T.value=!0}),j(()=>o.value,()=>{T.value=!1});const Z=k(()=>T.value?o.modelValue:o.value),g=k(()=>Z.value===o.activeValue);[o.activeValue,o.inactiveValue].includes(Z.value)||(i(q,o.inactiveValue),i(H,o.inactiveValue),i(L,o.inactiveValue)),j(g,t=>{var _;V.value.checked=t,o.validateEvent&&((_=f==null?void 0:f.validate)==null||_.call(f,"change").catch(D=>we()))});const $=()=>{const t=g.value?o.inactiveValue:o.activeValue;i(q,t),i(H,t),i(L,t),Ne(()=>{V.value.checked=g.value})},Q=()=>{if(h.value)return;const{beforeChange:t}=o;if(!t){$();return}const _=t();[ae(_),O(_)].includes(!0)||Ue(G,"beforeChange must return type `Promise<boolean>` or `boolean`"),ae(_)?_.then(W=>{W&&$()}).catch(W=>{}):_&&$()},de=k(()=>a.cssVarBlock({...o.activeColor?{"on-color":o.activeColor}:null,...o.inactiveColor?{"off-color":o.inactiveColor}:null,...o.borderColor?{"border-color":o.borderColor}:null})),pe=()=>{var t,_;(_=(t=V.value)==null?void 0:t.focus)==null||_.call(t)};return Ce(()=>{V.value.checked=g.value}),s({focus:pe,checked:g}),(t,_)=>(r(),E("div",{class:w(e(B)),style:ee(e(de)),onClick:Ee(Q,["prevent"])},[S("input",{id:e(v),ref_key:"input",ref:V,class:w(e(a).e("input")),type:"checkbox",role:"switch","aria-checked":e(g),"aria-disabled":e(h),name:t.name,"true-value":t.activeValue,"false-value":t.inactiveValue,disabled:e(h),tabindex:t.tabindex,onChange:$,onKeydown:Se(Q,["enter"])},null,42,Qe),!t.inlinePrompt&&(t.inactiveIcon||t.inactiveText)?(r(),E("span",{key:0,class:w(e(m))},[t.inactiveIcon?(r(),y(e(F),{key:0},{default:n(()=>[(r(),y(A(t.inactiveIcon)))]),_:1})):C("v-if",!0),!t.inactiveIcon&&t.inactiveText?(r(),E("span",{key:1,"aria-hidden":e(g)},J(t.inactiveText),9,We)):C("v-if",!0)],2)):C("v-if",!0),S("span",{ref_key:"core",ref:N,class:w(e(a).e("core")),style:ee(e(re))},[t.inlinePrompt?(r(),E("div",{key:0,class:w(e(a).e("inner"))},[t.activeIcon||t.inactiveIcon?(r(),y(e(F),{key:0,class:w(e(a).is("icon"))},{default:n(()=>[(r(),y(A(e(g)?t.activeIcon:t.inactiveIcon)))]),_:1},8,["class"])):t.activeText||t.inactiveText?(r(),E("span",{key:1,class:w(e(a).is("text")),"aria-hidden":!e(g)},J(e(g)?t.activeText:t.inactiveText),11,Xe)):C("v-if",!0)],2)):C("v-if",!0),S("div",{class:w(e(a).e("action"))},[t.loading?(r(),y(e(F),{key:0,class:w(e(a).is("loading"))},{default:n(()=>[l(e(ke))]),_:1},8,["class"])):C("v-if",!0)],2)],6),!t.inlinePrompt&&(t.activeIcon||t.activeText)?(r(),E("span",{key:1,class:w(e(b))},[t.activeIcon?(r(),y(e(F),{key:0},{default:n(()=>[(r(),y(A(t.activeIcon)))]),_:1})):C("v-if",!0),!t.activeIcon&&t.activeText?(r(),E("span",{key:1,"aria-hidden":!e(g)},J(t.activeText),9,ea)):C("v-if",!0)],2)):C("v-if",!0)],14,Ze))}});var la=Ie(ta,[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);const oa=xe(la);const ue=c=>(Re("data-v-73966840"),c=c(),$e(),c),na=ue(()=>S("h3",null,"其他设置",-1)),sa={class:"config-card p-2"},ia={class:"config-tip"},ca=ue(()=>S("div",{class:"config-title my-2"},"开放注册",-1)),ua=R({__name:"OtherConfig",setup(c){const s=te({openRegister:!0}),i={handleChange:async o=>{const d=await P.save("allow_register",o?"1":"0");z(d,"设置成功")},getConfig:async()=>{const o=await P.one("allow_register");o.code===200&&(s.openRegister=o.data.value==="1")}};return i.getConfig(),(o,d)=>{const f=le,u=Pe,a=oa,p=Y;return r(),y(p,{class:"box-card cus-box-card",shadow:"hover"},{header:n(()=>[na]),default:n(()=>[S("div",sa,[l(u,{class:"box-item",effect:"dark",content:"是否允许用户自行注册账号？",placement:"top"},{default:n(()=>[S("span",ia,[l(f,{name:"questioncircle1",size:"12px"}),x(" 开放注册 ")])]),_:1}),ca,l(a,{onChange:i.handleChange,modelValue:e(s).openRegister,"onUpdate:modelValue":d[0]||(d[0]=v=>e(s).openRegister=v),"active-text":"开放","inactive-text":"禁止"},null,8,["onChange","modelValue"])])]),_:1})}}});const ra=oe(ua,[["__scopeId","data-v-73966840"]]);class U{constructor(){}static getInstance(){return U.instance||(U.instance=new U),U.instance}email(s,i,o,d,f,u,a,p){return De.post("api/comm/send-email",{host:s,port:i,account:o,password:d,subject:f,nickname:u,content:a,receive:p})}}const da=U.getInstance(),pa=S("h3",null,"邮件服务",-1),ma={class:"flex-sb w-100"},fa=R({__name:"EmailConfig",setup(c){const s=te({value:{host:"",port:"",account:"",password:"",subject:"",nickname:""}}),i=I(""),o=I(!1),d=I(!1),f={getConfig:async()=>{const u=await P.one("email_config");u.code===200&&(s.value=u.data.json)},handleSave:async()=>{d.value=!0;const u=await P.save("email_config",void 0,JSON.stringify(s.value));z(u),d.value=!1},testEmail:async()=>{if(s.value){o.value=!0;const u=await da.email(s.value.host,parseInt(s.value.port),s.value.account,s.value.password,s.value.subject,s.value.nickname,"当您收到这封邮件，代表您的邮件服务配置成功！",i.value);z(u),o.value=!1}else Oe.warning("请先完善邮件配置表单！")}};return f.getConfig(),(u,a)=>{const p=ne,v=ie,h=Je,T=qe,V=se,N=ce,B=Y;return r(),y(B,{class:"box-card cus-box-card",shadow:"hover"},{header:n(()=>[pa]),default:n(()=>[l(N,null,{default:n(()=>[l(T,{gutter:15},{default:n(()=>[l(h,{span:24,md:12,lg:8},{default:n(()=>[l(v,{label:"服务地址"},{default:n(()=>[l(p,{modelValue:e(s).value.host,"onUpdate:modelValue":a[0]||(a[0]=m=>e(s).value.host=m),placeholder:"邮件服务器地址"},null,8,["modelValue"])]),_:1})]),_:1}),l(h,{span:24,md:12,lg:8},{default:n(()=>[l(v,{label:"服务端口"},{default:n(()=>[l(p,{type:"text",modelValue:e(s).value.port,"onUpdate:modelValue":a[1]||(a[1]=m=>e(s).value.port=m),placeholder:"邮件服务端口"},null,8,["modelValue"])]),_:1})]),_:1}),l(h,{span:24,md:12,lg:8},{default:n(()=>[l(v,{label:"发信账号"},{default:n(()=>[l(p,{modelValue:e(s).value.account,"onUpdate:modelValue":a[2]||(a[2]=m=>e(s).value.account=m),placeholder:"发信邮件账号"},null,8,["modelValue"])]),_:1})]),_:1}),l(h,{span:24,md:12,lg:8},{default:n(()=>[l(v,{label:"服务密码"},{default:n(()=>[l(p,{modelValue:e(s).value.password,"onUpdate:modelValue":a[3]||(a[3]=m=>e(s).value.password=m),placeholder:"邮件服务密码"},null,8,["modelValue"])]),_:1})]),_:1}),l(h,{span:24,md:12,lg:8},{default:n(()=>[l(v,{label:"邮件主题"},{default:n(()=>[l(p,{modelValue:e(s).value.subject,"onUpdate:modelValue":a[4]||(a[4]=m=>e(s).value.subject=m),placeholder:"邮件主题"},null,8,["modelValue"])]),_:1})]),_:1}),l(h,{span:24,md:12,lg:8},{default:n(()=>[l(v,{label:"邮件昵称"},{default:n(()=>[l(p,{modelValue:e(s).value.nickname,"onUpdate:modelValue":a[5]||(a[5]=m=>e(s).value.nickname=m),placeholder:"邮件昵称,请输入英文"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),S("div",ma,[l(p,{modelValue:e(i),"onUpdate:modelValue":a[6]||(a[6]=m=>Fe(i)?i.value=m:null),placeholder:"接收者邮箱"},null,8,["modelValue"]),l(V,{class:"ml-2",type:"warning",onClick:f.testEmail,loading:e(o)},{default:n(()=>[x(" 邮件服务测试 ")]),_:1},8,["onClick","loading"])])]),_:1}),l(V,{class:"mt-2",type:"primary",onClick:f.handleSave,loading:e(d)},{default:n(()=>[x(" 提交保存 ")]),_:1},8,["onClick","loading"])]),_:1})}}}),va=S("h3",null,"站点信息",-1),_a=R({__name:"SiteConfig",setup(c){const s=ze(),{siteConfig:i}=Ke(s),o=I(),d=I(!1),f={handleSave:async()=>{d.value=!0;const u=await P.save("site_config",void 0,JSON.stringify(s.siteConfig));z(u),d.value=!1,u.code===200&&s.updateConfig()},handleUpload:u=>{o.value=u,document.querySelector("#uploadRef").click()},uploadSuccess:u=>{Ae(s.siteConfig,o.value,u)}};return(u,a)=>{const p=ne,v=ie,h=le,T=He,V=ce,N=se,B=Le,m=Y;return r(),y(m,{class:"box-card cus-box-card",shadow:"hover"},{header:n(()=>[va]),default:n(()=>[e(i)?(r(),y(V,{key:0,style:{"max-width":"800px"}},{default:n(()=>[l(v,{label:"站点名字"},{default:n(()=>[l(p,{modelValue:e(i).site_name,"onUpdate:modelValue":a[0]||(a[0]=b=>e(i).site_name=b),placeholder:"站点名字"},null,8,["modelValue"])]),_:1}),l(v,{label:"站点logo"},{default:n(()=>[l(p,{type:"text",modelValue:e(i).logo,"onUpdate:modelValue":a[2]||(a[2]=b=>e(i).logo=b),placeholder:"请输入图片url或上传"},{append:n(()=>[l(h,{onClick:a[1]||(a[1]=b=>f.handleUpload("logo")),name:"upload2"})]),_:1},8,["modelValue"])]),_:1}),l(v,{label:"站点描述"},{default:n(()=>[l(p,{modelValue:e(i).description,"onUpdate:modelValue":a[3]||(a[3]=b=>e(i).description=b),placeholder:"站点描述"},null,8,["modelValue"])]),_:1}),l(v,{label:"系统描述"},{default:n(()=>[l(p,{modelValue:e(i).sysdesc,"onUpdate:modelValue":a[4]||(a[4]=b=>e(i).sysdesc=b),type:"textarea",placeholder:"站点描述",autosize:{minRows:3,maxRows:12}},null,8,["modelValue"])]),_:1}),l(v,{label:"站点标签"},{default:n(()=>[l(T,{modelValue:e(i).tags,"onUpdate:modelValue":a[5]||(a[5]=b=>e(i).tags=b),multiple:"",filterable:"","allow-create":"","default-first-option":"","reserve-keyword":!1,placeholder:"站点标签",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1})):C("",!0),l(N,{class:"mt-2",type:"primary",onClick:f.handleSave,loading:e(d)},{default:n(()=>[x(" 提交保存 ")]),_:1},8,["onClick","loading"]),Me(l(B,{accept:"image/*",onUpload:f.uploadSuccess},{default:n(()=>[l(N,{type:"primary",id:"uploadRef"},{default:n(()=>[x("点击上传")]),_:1})]),_:1},8,["onUpload"]),[[je,!1]])]),_:1})}}}),ga={};function ha(c,s){const i=_a,o=fa,d=ra;return r(),E("div",null,[l(i),l(o,{class:"mt-2"}),l(d,{class:"mt-2"})])}const ka=oe(ga,[["render",ha]]);export{ka as default};