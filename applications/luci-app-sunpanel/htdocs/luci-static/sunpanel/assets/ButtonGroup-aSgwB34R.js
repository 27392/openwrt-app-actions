import{q as s,am as d,s as o,N as e,t as a,j as f,x as p,y as b,aj as g,k as m,aa as h,dc as $}from "./index-Cr6VSFOe.js";const t="0!important",u="-1px!important";function i(r){return e(`${r}-type`,[o("& +",[s("button",{},[e(`${r}-type`,[a("border",{borderLeftWidth:t}),a("state-border",{left:u})])])])])}function n(r){return e(`${r}-type`,[o("& +",[s("button",[e(`${r}-type`,[a("border",{borderTopWidth:t}),a("state-border",{top:u})])])])])}const y=s("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[d("vertical",{flexDirection:"row"},[d("rtl",[s("button",[o("&:first-child:not(:last-child)",`
 margin-right: ${t};
 border-top-right-radius: ${t};
 border-bottom-right-radius: ${t};
 `),o("&:last-child:not(:first-child)",`
 margin-left: ${t};
 border-top-left-radius: ${t};
 border-bottom-left-radius: ${t};
 `),o("&:not(:first-child):not(:last-child)",`
 margin-left: ${t};
 margin-right: ${t};
 border-radius: ${t};
 `),i("default"),e("ghost",[i("primary"),i("info"),i("success"),i("warning"),i("error")])])])]),e("vertical",{flexDirection:"column"},[s("button",[o("&:first-child:not(:last-child)",`
 margin-bottom: ${t};
 margin-left: ${t};
 margin-right: ${t};
 border-bottom-left-radius: ${t};
 border-bottom-right-radius: ${t};
 `),o("&:last-child:not(:first-child)",`
 margin-top: ${t};
 margin-left: ${t};
 margin-right: ${t};
 border-top-left-radius: ${t};
 border-top-right-radius: ${t};
 `),o("&:not(:first-child):not(:last-child)",`
 margin: ${t};
 border-radius: ${t};
 `),n("default"),e("ghost",[n("primary"),n("info"),n("success"),n("warning"),n("error")])])])]),x={size:{type:String,default:void 0},vertical:Boolean},R=f({name:"ButtonGroup",props:x,setup(r){const{mergedClsPrefixRef:l,mergedRtlRef:c}=p(r);return b("-button-group",y,l),h($,r),{rtlEnabled:g("ButtonGroup",c,l),mergedClsPrefix:l}},render(){const{mergedClsPrefix:r}=this;return m("div",{class:[`${r}-button-group`,this.rtlEnabled&&`${r}-button-group--rtl`,this.vertical&&`${r}-button-group--vertical`],role:"group"},this.$slots)}});export{R as N};
