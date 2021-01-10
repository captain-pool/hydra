(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{189:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return l})),n.d(r,"metadata",(function(){return c})),n.d(r,"rightToc",(function(){return i})),n.d(r,"default",(function(){return u}));var t=n(2),o=n(7),a=(n(0),n(251)),l={id:"colorlog",title:"Colorlog plugin",sidebar_label:"Colorlog plugin"},c={unversionedId:"plugins/colorlog",id:"version-0.11/plugins/colorlog",isDocsHomePage:!1,title:"Colorlog plugin",description:"Adds colorlog colored logs for hydra/joblogging and hydra/hydralogging.",source:"@site/versioned_docs/version-0.11/plugins/colorlog.md",slug:"/plugins/colorlog",permalink:"/docs/0.11/plugins/colorlog",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-0.11/plugins/colorlog.md",version:"0.11",lastUpdatedBy:"forcecore",lastUpdatedAt:1610301110,sidebar_label:"Colorlog plugin",sidebar:"version-0.11/docs",previous:{title:"Customizing Application's help",permalink:"/docs/0.11/configure_hydra/app_help"},next:{title:"Application packaging",permalink:"/docs/0.11/advanced/app_packaging"}},i=[],p={rightToc:i};function u(e){var r=e.components,l=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},p,l,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Adds ",Object(a.b)("a",{class:"external",href:"https://github.com/borntyping/python-colorlog",target:"_blank"},"colorlog")," colored logs for ",Object(a.b)("inlineCode",{parentName:"p"},"hydra/job_logging")," and ",Object(a.b)("inlineCode",{parentName:"p"},"hydra/hydra_logging"),"."),Object(a.b)("p",null,"Install with "),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{}),"pip install hydra_colorlog\n")),Object(a.b)("p",null,"Once installed, override ",Object(a.b)("inlineCode",{parentName:"p"},"hydra/job_logging")," and ",Object(a.b)("inlineCode",{parentName:"p"},"hydra/hydra_logging")," your config:"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),"defaults:\n  - hydra/job_logging: colorlog\n  - hydra/hydra_logging: colorlog\n")),Object(a.b)("p",null,"See included ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/0.11_branch/plugins/hydra_colorlog/example"}),"example"),"."),Object(a.b)("p",null,Object(a.b)("img",{alt:"Colored log output",src:n(262).default})))}u.isMDXComponent=!0},251:function(e,r,n){"use strict";n.d(r,"a",(function(){return g})),n.d(r,"b",(function(){return b}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var r=o.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},g=function(e){var r=u(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=u(n),d=t,b=g["".concat(l,".").concat(d)]||g[d]||s[d]||a;return n?o.a.createElement(b,c(c({ref:r},p),{},{components:n})):o.a.createElement(b,c({ref:r},p))}));function b(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:t,l[1]=c;for(var p=2;p<a;p++)l[p]=n[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},262:function(e,r,n){"use strict";n.r(r),r.default=n.p+"assets/images/colorlog-b20147697b9d16362f62a5d0bb58347f.png"}}]);