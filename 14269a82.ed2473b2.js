(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{251:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,h=p["".concat(i,".").concat(b)]||p[b]||u[b]||a;return n?o.a.createElement(h,c(c({ref:t},l),{},{components:n})):o.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(2),o=n(7),a=(n(0),n(251)),i={id:"intro",title:"Hydra at Facebook"},c={unversionedId:"fb/intro",id:"version-1.0/fb/intro",isDocsHomePage:!1,title:"Hydra at Facebook",description:"Intro",source:"@site/versioned_docs/version-1.0/fb/intro.md",slug:"/fb/intro",permalink:"/docs/fb/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/fb/intro.md",version:"1.0",lastUpdatedBy:"forcecore",lastUpdatedAt:1610301110},s=[{value:"Intro",id:"intro",children:[]},{value:"Release strategy",id:"release-strategy",children:[]},{value:"Maintaining this documentation",id:"maintaining-this-documentation",children:[]}],l={rightToc:s};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"intro"},"Intro"),Object(a.b)("p",null,"Facebook has multiple different environments, such as the ",Object(a.b)("strong",{parentName:"p"},"Internal FB Cluster"),", the ",Object(a.b)("strong",{parentName:"p"},"FAIR Cluster")," etc."),Object(a.b)("p",null,"The FB specific docs are describing the differences."),Object(a.b)("h3",{id:"release-strategy"},"Release strategy"),Object(a.b)("p",null,"Hydra's source of truth is the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra"}),"GitHub repo"),"."),Object(a.b)("p",null,"Hydra is developed using release branches. Once a new major is released, it is maintained in patch only mode.\nPrimary development is happening on the ",Object(a.b)("inlineCode",{parentName:"p"},"master")," branch."),Object(a.b)("p",null,"When a new major version of Hydra is released, a new release branch is created in Hydra repo. A corresponding Hydra version will be created inside ",Object(a.b)("inlineCode",{parentName:"p"},"github/facebookresearch/hydra_VERSION")," to track\nthe release branch."),Object(a.b)("p",null,"Hydra is trying hard to remain backward compatible between two subsequent versions and in most cases the upgrade will be smooth.\nThere could be some new deprecations warnings that should be fixed before the next major version."),Object(a.b)("h3",{id:"maintaining-this-documentation"},"Maintaining this documentation"),Object(a.b)("p",null,"This documentation lives in in the Hydra repo which is publicly accessible. The pages will only normally render on the internal\ncopy of the docs, but keep in mind that everyone can read those docs in the repo if they want to."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Do not put anything sensitive here, no root passwords or launch codes."),Object(a.b)("li",{parentName:"ol"},"If you are in need to have sensitive Hydra related documentation please reach out to the maintainers of Hydra for help.")))}d.isMDXComponent=!0}}]);