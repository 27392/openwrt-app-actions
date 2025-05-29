import{q as v,am as I,N as x,j as O,cj as L,C as S,ck as D,r as C,c as h,b$ as M,k as p,U as P,s as B,cl as V,x as W,cm as H,aE as A,E as K,F as U,I as q,c3 as F,T as X,be as Y,b2 as _,b6 as G,b7 as b,b4 as y,ba as R,br as J,bs as Q}from "./index-Cr6VSFOe.js";import{n as Z,h as ee}from "./index-DEZ9xjST.js";const te=v("ellipsis",{overflow:"hidden"},[I("line-clamp",`
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `),x("line-clamp",`
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `),x("cursor-pointer",`
 cursor: pointer;
 `)]);function j(e){return`${e}-ellipsis--line-clamp`}function E(e,a){return`${e}-ellipsis--cursor-${a}`}const se=Object.assign(Object.assign({},S.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}}),re=O({name:"Ellipsis",inheritAttrs:!1,props:se,setup(e,{slots:a,attrs:n}){const s=L(),u=S("Ellipsis","-ellipsis",te,D,e,s),r=C(null),o=C(null),d=C(null),i=C(!1),f=h(()=>{const{lineClamp:t}=e,{value:l}=i;return t!==void 0?{textOverflow:"","-webkit-line-clamp":l?"":t}:{textOverflow:l?"":"ellipsis","-webkit-line-clamp":""}});function m(){let t=!1;const{value:l}=i;if(l)return!0;const{value:c}=r;if(c){const{lineClamp:g}=e;if($(c),g!==void 0)t=c.scrollHeight<=c.offsetHeight;else{const{value:N}=o;N&&(t=N.getBoundingClientRect().width<=c.getBoundingClientRect().width)}z(c,t)}return t}const w=h(()=>e.expandTrigger==="click"?()=>{var t;const{value:l}=i;l&&((t=d.value)===null||t===void 0||t.setShow(!1)),i.value=!l}:void 0);M(()=>{var t;e.tooltip&&((t=d.value)===null||t===void 0||t.setShow(!1))});const T=()=>p("span",Object.assign({},P(n,{class:[`${s.value}-ellipsis`,e.lineClamp!==void 0?j(s.value):void 0,e.expandTrigger==="click"?E(s.value,"pointer"):void 0],style:f.value}),{ref:"triggerRef",onClick:w.value,onMouseenter:e.expandTrigger==="click"?m:void 0}),e.lineClamp?a:p("span",{ref:"triggerInnerRef"},a));function $(t){if(!t)return;const l=f.value,c=j(s.value);e.lineClamp!==void 0?k(t,c,"add"):k(t,c,"remove");for(const g in l)t.style[g]!==l[g]&&(t.style[g]=l[g])}function z(t,l){const c=E(s.value,"pointer");e.expandTrigger==="click"&&!l?k(t,c,"add"):k(t,c,"remove")}function k(t,l,c){c==="add"?t.classList.contains(l)||t.classList.add(l):t.classList.contains(l)&&t.classList.remove(l)}return{mergedTheme:u,triggerRef:r,triggerInnerRef:o,tooltipRef:d,handleClick:w,renderTrigger:T,getTooltipDisabled:m}},render(){var e;const{tooltip:a,renderTrigger:n,$slots:s}=this;if(a){const{mergedTheme:u}=this;return p(Z,Object.assign({ref:"tooltipRef",placement:"top"},a,{getDisabled:this.getTooltipDisabled,theme:u.peers.Tooltip,themeOverrides:u.peerOverrides.Tooltip}),{trigger:n,default:(e=s.tooltip)!==null&&e!==void 0?e:s.default})}else return n()}}),ne=B([B("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),v("spin-container",`
 position: relative;
 `,[v("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[V()])]),v("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),v("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[x("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),v("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),v("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[x("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),ie={small:20,medium:18,large:16},oe=Object.assign(Object.assign({},S.props),{contentClass:String,contentStyle:[Object,String],description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),ce=O({name:"Spin",props:oe,setup(e){const{mergedClsPrefixRef:a,inlineThemeDisabled:n}=W(e),s=S("Spin","-spin",ne,H,e,a),u=h(()=>{const{size:i}=e,{common:{cubicBezierEaseInOut:f},self:m}=s.value,{opacitySpinning:w,color:T,textColor:$}=m,z=typeof i=="number"?A(i):m[K("size",i)];return{"--n-bezier":f,"--n-opacity-spinning":w,"--n-size":z,"--n-color":T,"--n-text-color":$}}),r=n?U("spin",h(()=>{const{size:i}=e;return typeof i=="number"?String(i):i[0]}),u,e):void 0,o=ee(e,["spinning","show"]),d=C(!1);return q(i=>{let f;if(o.value){const{delay:m}=e;if(m){f=window.setTimeout(()=>{d.value=!0},m),i(()=>{clearTimeout(f)});return}}d.value=o.value}),{mergedClsPrefix:a,active:d,mergedStrokeWidth:h(()=>{const{strokeWidth:i}=e;if(i!==void 0)return i;const{size:f}=e;return ie[typeof f=="number"?"medium":f]}),cssVars:n?void 0:u,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e,a;const{$slots:n,mergedClsPrefix:s,description:u}=this,r=n.icon&&this.rotate,o=(u||n.description)&&p("div",{class:`${s}-spin-description`},u||((e=n.description)===null||e===void 0?void 0:e.call(n))),d=n.icon?p("div",{class:[`${s}-spin-body`,this.themeClass]},p("div",{class:[`${s}-spin`,r&&`${s}-spin--rotate`],style:n.default?"":this.cssVars},n.icon()),o):p("div",{class:[`${s}-spin-body`,this.themeClass]},p(F,{clsPrefix:s,style:n.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${s}-spin`}),o);return(a=this.onRender)===null||a===void 0||a.call(this),n.default?p("div",{class:[`${s}-spin-container`,this.themeClass],style:this.cssVars},p("div",{class:[`${s}-spin-content`,this.active&&`${s}-spin-content--spinning`,this.contentClass],style:this.contentStyle},n),p(X,{name:"fade-in-transition"},{default:()=>this.active?d:null})):d}}),de=O({__name:"index",props:{title:null,show:{type:Boolean},size:null},emits:["update:show"],setup(e,{emit:a}){const n=e,s=Y(),u=h(()=>({class:s.class||"",style:s.style||""})),r=h({get:()=>n.show,set:o=>{a("update:show",o)}});return(o,d)=>(_(),G(R(Q),P({show:R(r),"onUpdate:show":d[0]||(d[0]=i=>J(r)?r.value=i:null),preset:"card",size:e.size},R(u),{style:[{"border-radius":"1rem"},o.$parent],title:e.title}),{cover:b(()=>[y(o.$slots,"cover")]),header:b(()=>[y(o.$slots,"header")]),"eader-extra":b(()=>[y(o.$slots,"header-extra")]),footer:b(()=>[y(o.$slots,"footer")]),action:b(()=>[y(o.$slots,"action")]),default:b(()=>[y(o.$slots,"default")]),_:3},16,["show","size","style","title"]))}});export{ce as N,de as _,re as a,E as b,j as c,se as e,te as s};
