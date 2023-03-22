import{M as d}from"./Header-0167ab36.js";import"./Button-6ed70173.js";import"./vue.esm-bundler-b19e0e18.js";const l={title:"Example/Header",component:d,parameters:{layout:"fullscreen"}},m=c=>({components:{MyHeader:d},setup(){return{...c}},template:'<my-header :user="user" />'}),e=m.bind({});e.args={user:{name:"Jane Doe"}};const t=m.bind({});t.args={user:null};var r,n,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    MyHeader
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    // Story args can be spread into the returned object
    return {
      ...args
    };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<my-header :user="user" />'
})`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var a,o,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    MyHeader
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    // Story args can be spread into the returned object
    return {
      ...args
    };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<my-header :user="user" />'
})`,...(p=(o=t.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const g=["LoggedIn","LoggedOut"];export{e as LoggedIn,t as LoggedOut,g as __namedExportsOrder,l as default};
//# sourceMappingURL=Header.stories-e5f9fc0e.js.map
