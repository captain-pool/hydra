(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{229:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(7),o=(r(0),r(241)),i={id:"intro",title:"Introduction to Structured Configs",sidebar_label:"Introduction to Structured Configs"},c={unversionedId:"tutorials/structured_config/intro",id:"tutorials/structured_config/intro",isDocsHomePage:!1,title:"Introduction to Structured Configs",description:"This is an advanced tutorial that assumes that you are comfortable with the concepts introduced in the Basic Tutorial.",source:"@site/docs/tutorials/structured_config/0_intro.md",slug:"/tutorials/structured_config/intro",permalink:"/docs/next/tutorials/structured_config/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/tutorials/structured_config/0_intro.md",version:"current",lastUpdatedBy:"Shagun Sodhani",lastUpdatedAt:1607569909,sidebar_label:"Introduction to Structured Configs",sidebar:"docs",previous:{title:"Tab completion",permalink:"/docs/next/tutorials/basic/running_your_app/tab_completion"},next:{title:"Minimal example",permalink:"/docs/next/tutorials/structured_config/minimal_example"}},s=[],u={rightToc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This is an advanced tutorial that assumes that you are comfortable with the concepts introduced in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/tutorials/basic/your_first_app/simple_cli"}),"Basic Tutorial"),".\nThe examples in this tutorial are available ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/examples/tutorials/structured_configs"}),"here"),"."),Object(o.b)("p",null,"Structured Configs use Python ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.python.org/3.7/library/dataclasses.html"}),"dataclasses")," to\ndescribe your configuration structure and types. They enable:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Runtime type checking")," as you compose or mutate your config "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Static type checking")," when using static type checkers (mypy, PyCharm, etc.)")),Object(o.b)("h4",{id:"structured-configs-supports"},"Structured Configs supports:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Primitive types (",Object(o.b)("inlineCode",{parentName:"li"},"int"),", ",Object(o.b)("inlineCode",{parentName:"li"},"bool"),", ",Object(o.b)("inlineCode",{parentName:"li"},"float"),", ",Object(o.b)("inlineCode",{parentName:"li"},"str"),", ",Object(o.b)("inlineCode",{parentName:"li"},"Enums"),") "),Object(o.b)("li",{parentName:"ul"},"Nesting of Structured Configs"),Object(o.b)("li",{parentName:"ul"},"Containers (List and Dict) containing primitives or Structured Configs"),Object(o.b)("li",{parentName:"ul"},"Optional fields")),Object(o.b)("h4",{id:"structured-configs-limitations"},"Structured Configs Limitations:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Union")," types are not supported (except ",Object(o.b)("inlineCode",{parentName:"li"},"Optional"),")"),Object(o.b)("li",{parentName:"ul"},"User methods are not supported")),Object(o.b)("h4",{id:"there-are-two-primary-patterns-for-using-structured-configs"},"There are two primary patterns for using Structured configs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"As a ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/tutorials/structured_config/minimal_example"}),"config"),", in place of configuration files (often a starting place)"),Object(o.b)("li",{parentName:"ul"},"As a ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/tutorials/structured_config/schema"}),"config schema")," validating configuration files (better for complex use cases)")),Object(o.b)("p",null,"With both patterns, you still get everything Hydra has to offer (config composition, Command line overrides etc).\nThis tutorial covers both. ","*",Object(o.b)("strong",{parentName:"p"},"Read it in order"),"*","."),Object(o.b)("p",null,"Hydra supports OmegaConf's Structured Configs via the ",Object(o.b)("inlineCode",{parentName:"p"},"ConfigStore")," API.\nThis tutorial does not assume any knowledge of them.\nIt is recommended that you visit the ",Object(o.b)("a",{class:"external",href:"https://omegaconf.readthedocs.io/en/latest/structured_config.html",target:"_blank"},"OmegaConf Structured Configs page")," to learn more later."),Object(o.b)("div",{class:"alert alert--info",role:"alert"},"1. The ConfigStore API is new and subject to change.",Object(o.b)("br",null),"2. OmegaConf's Structured Configs are new.",Object(o.b)("br",null),"Please report any issues.",Object(o.b)("br",null)),Object(o.b)("br",null))}l.isMDXComponent=!0},241:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),d=n,f=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return r?a.a.createElement(f,c(c({ref:t},u),{},{components:r})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);