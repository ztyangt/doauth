import{b as H,ae as J,af as K,d as q,P as O,ag as se,G as T,Q as te,o as c,f as E,r as A,n as m,h as e,_ as Q,J as X,i as ae,z as N,a as le,I as re,ah as oe,c as w,a3 as D,m as $,g as y,p as G,k as V,w as u,l as ne,E as M,j as t,ai as ie,aj as ue,t as R,a5 as Z,a0 as pe,ak as de,a2 as ce,al as I,a6 as P,am as me,a9 as ge,aa as fe,an as ve,ao as _e,ad as be}from"./index-6c108ddb.js";import{E as he}from"./card-7c12a8fc.js";import{E as we,a as ye}from"./form-item-218342d5.js";import{_ as Se}from"./LottieItem-438011e6.js";const ke=H({space:{type:[Number,String],default:""},active:{type:Number,default:0},direction:{type:String,default:"horizontal",values:["horizontal","vertical"]},alignCenter:{type:Boolean},simple:{type:Boolean},finishStatus:{type:String,values:["wait","process","finish","error","success"],default:"finish"},processStatus:{type:String,values:["wait","process","finish","error","success"],default:"process"}}),Ve={[J]:(h,k)=>[h,k].every(K)},xe=q({name:"ElSteps"}),Ee=q({...xe,props:ke,emits:Ve,setup(h,{emit:k}){const r=h,b=O("steps"),{children:o,addChild:n,removeChild:s}=se(X(),"ElStep");return T(o,()=>{o.value.forEach((g,f)=>{g.setIndex(f)})}),te("ElSteps",{props:r,steps:o,addStep:n,removeStep:s}),T(()=>r.active,(g,f)=>{k(J,g,f)}),(g,f)=>(c(),E("div",{class:m([e(b).b(),e(b).m(g.simple?"simple":g.direction)])},[A(g.$slots,"default")],2))}});var Ce=Q(Ee,[["__file","/home/runner/work/element-plus/element-plus/packages/components/steps/src/steps.vue"]]);const $e=H({title:{type:String,default:""},icon:{type:ae},description:{type:String,default:""},status:{type:String,values:["","wait","process","finish","error","success"],default:""}}),Ie=q({name:"ElStep"}),Ne=q({...Ie,props:$e,setup(h){const k=h,r=O("step"),b=N(-1),o=N({}),n=N(""),s=le("ElSteps"),g=X();re(()=>{T([()=>s.props.active,()=>s.props.processStatus,()=>s.props.finishStatus],([l])=>{i(l)},{immediate:!0})}),oe(()=>{s.removeStep(W.uid)});const f=w(()=>k.status||n.value),x=w(()=>{const l=s.steps.value[b.value-1];return l?l.currentStatus:"wait"}),v=w(()=>s.props.alignCenter),a=w(()=>s.props.direction==="vertical"),d=w(()=>s.props.simple),S=w(()=>s.steps.value.length),U=w(()=>{var l;return((l=s.steps.value[S.value-1])==null?void 0:l.uid)===(g==null?void 0:g.uid)}),p=w(()=>d.value?"":s.props.space),_=w(()=>[r.b(),r.is(d.value?"simple":s.props.direction),r.is("flex",U.value&&!p.value&&!v.value),r.is("center",v.value&&!a.value&&!d.value)]),B=w(()=>{const l={flexBasis:K(p.value)?`${p.value}px`:p.value?p.value:`${100/(S.value-(v.value?0:1))}%`};return a.value||U.value&&(l.maxWidth=`${100/S.value}%`),l}),z=l=>{b.value=l},j=l=>{const C=l==="wait",L={transitionDelay:`${C?"-":""}${150*b.value}ms`},F=l===s.props.processStatus||C?0:100;L.borderWidth=F&&!d.value?"1px":0,L[s.props.direction==="vertical"?"height":"width"]=`${F}%`,o.value=L},i=l=>{l>b.value?n.value=s.props.finishStatus:l===b.value&&x.value!=="error"?n.value=s.props.processStatus:n.value="wait";const C=s.steps.value[b.value-1];C&&C.calcProgress(n.value)},W=D({uid:g.uid,currentStatus:f,setIndex:z,calcProgress:j});return s.addStep(W),(l,C)=>(c(),E("div",{style:G(e(B)),class:m(e(_))},[$(" icon & line "),y("div",{class:m([e(r).e("head"),e(r).is(e(f))])},[e(d)?$("v-if",!0):(c(),E("div",{key:0,class:m(e(r).e("line"))},[y("i",{class:m(e(r).e("line-inner")),style:G(o.value)},null,6)],2)),y("div",{class:m([e(r).e("icon"),e(r).is(l.icon||l.$slots.icon?"icon":"text")])},[A(l.$slots,"icon",{},()=>[l.icon?(c(),V(e(M),{key:0,class:m(e(r).e("icon-inner"))},{default:u(()=>[(c(),V(ne(l.icon)))]),_:1},8,["class"])):e(f)==="success"?(c(),V(e(M),{key:1,class:m([e(r).e("icon-inner"),e(r).is("status")])},{default:u(()=>[t(e(ie))]),_:1},8,["class"])):e(f)==="error"?(c(),V(e(M),{key:2,class:m([e(r).e("icon-inner"),e(r).is("status")])},{default:u(()=>[t(e(ue))]),_:1},8,["class"])):e(d)?$("v-if",!0):(c(),E("div",{key:3,class:m(e(r).e("icon-inner"))},R(b.value+1),3))])],2)],2),$(" title & description "),y("div",{class:m(e(r).e("main"))},[y("div",{class:m([e(r).e("title"),e(r).is(e(f))])},[A(l.$slots,"title",{},()=>[Z(R(l.title),1)])],2),e(d)?(c(),E("div",{key:0,class:m(e(r).e("arrow"))},null,2)):(c(),E("div",{key:1,class:m([e(r).e("description"),e(r).is(e(f))])},[A(l.$slots,"description",{},()=>[Z(R(l.description),1)])],2))],2)],6))}});var Y=Q(Ne,[["__file","/home/runner/work/element-plus/element-plus/packages/components/steps/src/item.vue"]]);const qe=pe(Ce,{Step:Y}),Ue=de(Y);const ee=h=>(ve("data-v-1bd4b242"),h=h(),_e(),h),Be={class:"card-header flex-center"},ze=ee(()=>y("h1",{class:"center"},"DoAuth域名授权管理系统",-1)),Pe={key:2,class:"install-success center my-4"},Ae=ee(()=>y("div",{class:"w-100 center"},[y("span",null,"恭喜您，程序已安装成功！")],-1)),De={class:"flex-center px-4"},Re=q({__name:"index",setup(h){const k=N(),r=N(),b=ce(),o=D({hostname:"localhost",hostport:"3306",database:"",username:"",password:"",prefix:"auth"}),n=D({account:"admin",nickname:"管理员",email:"",password:"",re_password:""}),s=D({step:0}),g={hostname:[{required:!0,message:"数据库地址不能为空",trigger:"blur"}],hostport:[{required:!0,message:"数据库端口不能为空",trigger:"blur"}],database:[{required:!0,message:"数据库名称不能为空",trigger:"blur"}],username:[{required:!0,message:"数据库用户名不能为空",trigger:"blur"}],password:[{required:!0,message:"数据库密码不能为空",trigger:"blur"},{min:6,message:"数据库密码不能少于6位",trigger:"blur"},{max:18,message:"数据库密码不能多于18位",trigger:"blur"},{pattern:/^[a-zA-Z0-9_]+$/,message:"数据库密码只能包含数字字母或下划线",trigger:"blur"}],prefix:[{required:!0,message:"数据表前缀不能为空",trigger:"blur"},{pattern:/^[a-zA-Z]+$/,message:"数据表前缀只可以输入数字母",trigger:"blur"}]},f={account:[{required:!0,message:"账户名不能为空",trigger:"blur"},{min:5,message:"账户名不能少于5位",trigger:"blur"},{max:18,message:"账户名不能多于18位",trigger:"blur"},{pattern:/^[a-zA-Z0-9_]+$/,message:"账户名只能包含数字字母或下划线",trigger:"blur"}],nickname:[{required:!0,message:"昵称不能为空",trigger:"blur"}],email:[{required:!0,message:"邮箱不能为空",trigger:"blur"},{pattern:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,message:"邮箱格式不正确",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:6,message:"密码不能少于6位",trigger:"blur"},{max:18,message:"密码不能多于18位",trigger:"blur"},{pattern:/^[a-zA-Z0-9_]+$/,message:"密码只能包含数字字母或下划线",trigger:"blur"}]},x={handleNext:async()=>{s.step===0&&x.initDB(k.value),s.step===1&&x.install(r.value),s.step===3&&b.push("/")},initDB:async v=>{v&&await v.validate(async a=>{if(a){const d=await I.connect(o.hostname,o.hostport,o.database,o.username,o.password,o.prefix);if(P(d),d.code===200){const S=await I.init();P(S),s.step=1}}})},install:async v=>{v&&await v.validate(async a=>{if(a){if(n.password!==n.re_password)return me.warning("两次输入的密码不一致，请检查！");const d=await I.admin(n.account,n.nickname,n.email,n.password);P(d),d.code===200&&x.installLock()}})},installLock:async()=>{const v=await I.lock();P(v,"安装成功"),v.code===200&&(s.step=3)},goPrev:async()=>{await I.rmconfig(),s.step=0}};return(v,a)=>{const d=Se,S=Ue,U=qe,p=ge,_=we,B=ye,z=fe,j=he;return c(),V(j,{class:"box-card p-2"},{header:u(()=>[y("div",Be,[t(d,{name:"auth",width:"80px",height:"80px"}),ze])]),default:u(()=>[t(U,{active:e(s).step,"finish-status":"success","align-center":""},{default:u(()=>[t(S,{title:"数据库配置"}),t(S,{title:"管理员账户"}),t(S,{title:"完成安装"})]),_:1},8,["active"]),e(s).step===0?(c(),V(B,{key:0,ref_key:"dbRef",ref:k,model:e(o),rules:g,"label-width":"110px",class:"mt-4","label-position":"right","require-asterisk-position":"right"},{default:u(()=>[t(_,{label:"数据库地址",prop:"hostname"},{default:u(()=>[t(p,{modelValue:e(o).hostname,"onUpdate:modelValue":a[0]||(a[0]=i=>e(o).hostname=i),placeholder:"请输入数据库地址",clearable:""},null,8,["modelValue"])]),_:1}),t(_,{label:"数据库端口",prop:"hostport"},{default:u(()=>[t(p,{modelValue:e(o).hostport,"onUpdate:modelValue":a[1]||(a[1]=i=>e(o).hostport=i),placeholder:"请输入数据库端口号",clearable:""},null,8,["modelValue"])]),_:1}),t(_,{label:"数据库名称",prop:"database"},{default:u(()=>[t(p,{modelValue:e(o).database,"onUpdate:modelValue":a[2]||(a[2]=i=>e(o).database=i),placeholder:"请输入数据库名称",clearable:""},null,8,["modelValue"])]),_:1}),t(_,{label:"数据库用户名",prop:"username"},{default:u(()=>[t(p,{modelValue:e(o).username,"onUpdate:modelValue":a[3]||(a[3]=i=>e(o).username=i),placeholder:"请输入数据库用户名",clearable:""},null,8,["modelValue"])]),_:1}),t(_,{label:"数据库密码",prop:"password"},{default:u(()=>[t(p,{modelValue:e(o).password,"onUpdate:modelValue":a[4]||(a[4]=i=>e(o).password=i),type:"password",placeholder:"请输入数据库密码",clearable:"","show-password":""},null,8,["modelValue"])]),_:1}),t(_,{label:"数据表前缀",prop:"prefix"},{default:u(()=>[t(p,{modelValue:e(o).prefix,"onUpdate:modelValue":a[5]||(a[5]=i=>e(o).prefix=i),placeholder:"请输入数据表前缀",clearable:""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])):e(s).step===1?(c(),V(B,{key:1,ref_key:"adminRef",ref:r,model:e(n),rules:f,"label-width":"100px",class:"mt-4","label-position":"right","require-asterisk-position":"right"},{default:u(()=>[t(_,{label:"账户名",prop:"account"},{default:u(()=>[t(p,{modelValue:e(n).account,"onUpdate:modelValue":a[6]||(a[6]=i=>e(n).account=i),placeholder:"请输入管理员账户名称",clearable:""},null,8,["modelValue"])]),_:1}),t(_,{label:"昵称",prop:"nickname"},{default:u(()=>[t(p,{modelValue:e(n).nickname,"onUpdate:modelValue":a[7]||(a[7]=i=>e(n).nickname=i),placeholder:"请输入管理员昵称",clearable:""},null,8,["modelValue"])]),_:1}),t(_,{label:"邮箱",prop:"email"},{default:u(()=>[t(p,{modelValue:e(n).email,"onUpdate:modelValue":a[8]||(a[8]=i=>e(n).email=i),placeholder:"请输入邮箱",clearable:""},null,8,["modelValue"])]),_:1}),t(_,{label:"密码",prop:"password"},{default:u(()=>[t(p,{modelValue:e(n).password,"onUpdate:modelValue":a[9]||(a[9]=i=>e(n).password=i),placeholder:"请输入管理员密码",clearable:"","show-password":""},null,8,["modelValue"])]),_:1}),t(_,{label:"重复密码",prop:"re_password"},{default:u(()=>[t(p,{modelValue:e(n).re_password,"onUpdate:modelValue":a[10]||(a[10]=i=>e(n).re_password=i),placeholder:"请重复管理员密码",clearable:"","show-password":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])):e(s).step===3?(c(),E("div",Pe,[t(d,{class:"disib",name:"install",width:"200px",height:"200px"}),Ae])):$("",!0),y("div",De,[e(s).step===1?(c(),V(z,{key:0,onClick:x.goPrev,plain:"",class:"w-50 mt-4",round:""},{default:u(()=>[Z(" 返回上一步 ")]),_:1},8,["onClick"])):$("",!0),t(z,{onClick:x.handleNext,type:"primary",class:"w-50 mt-4",round:""},{default:u(()=>[Z(R(e(s).step!==3?"下一步":"返回首页"),1)]),_:1},8,["onClick"])])]),_:1})}}});const Te=be(Re,[["__scopeId","data-v-1bd4b242"]]);export{Te as default};
