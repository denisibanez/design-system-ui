import{r as i,k as a,a as u,t as c,n as m,l as y,o as d}from"./vue.esm-bundler-b19e0e18.js";const b=(e,t)=>{const n=e.__vccOpts||e;for(const[o,r]of t)n[o]=r;return n},s={name:"my-button",props:{label:{type:String,required:!0},primary:{type:Boolean,default:!1},size:{type:String,validator:function(e){return["small","medium","large"].indexOf(e)!==-1}},backgroundColor:{type:String}},emits:["click"],setup(e,{emit:t}){return e=i(e),{classes:a(()=>({"storybook-button":!0,"storybook-button--primary":e.primary,"storybook-button--secondary":!e.primary,[`storybook-button--${e.size||"medium"}`]:!0})),style:a(()=>({backgroundColor:e.backgroundColor})),onClick(){t("click")}}}};function k(e,t,n,o,r,p){return d(),u("button",{type:"button",class:m(o.classes),onClick:t[0]||(t[0]=(...l)=>o.onClick&&o.onClick(...l)),style:y(o.style)},c(n.label),7)}const f=b(s,[["render",k]]);s.__docgenInfo={displayName:"my-button",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"primary",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"string"},values:["small","medium","large"]},{name:"backgroundColor",type:{name:"string"}}],events:[{name:"click"}],sourceFiles:["/Users/denisibanezrodriguesvieira/Documents/Projetos/master/components/purevite/design-system-ui/src/stories/Button.vue"]};export{f as M,b as _};
//# sourceMappingURL=Button-6ed70173.js.map
