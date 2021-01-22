(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{211:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return d}));var n=t(3),a=t(8),o=(t(0),t(266)),i={id:"workdir",title:"Customizing working directory pattern",sidebar_label:"Customizing working directory pattern"},c={unversionedId:"configure_hydra/workdir",id:"version-1.0/configure_hydra/workdir",isDocsHomePage:!1,title:"Customizing working directory pattern",description:"Example application",source:"@site/versioned_docs/version-1.0/configure_hydra/workdir.md",slug:"/configure_hydra/workdir",permalink:"/docs/configure_hydra/workdir",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/configure_hydra/workdir.md",version:"1.0",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1611343759,sidebar_label:"Customizing working directory pattern",sidebar:"version-1.0/docs",previous:{title:"Customizing logging",permalink:"/docs/configure_hydra/logging"},next:{title:"Customizing Application's help",permalink:"/docs/configure_hydra/app_help"}},u=[],p={toc:u};function d(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/examples/configure_hydra/workdir"}),Object(o.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"})))),Object(o.b)("p",null,"Below are a few examples of customizing output directory patterns."),Object(o.b)("p",null,"Run output directory grouped by day:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  run:\n    dir: ./outputs/${now:%Y-%m-%d}/${now:%H-%M-%S}\n")),Object(o.b)("p",null,"Sweep sub directory contains the the job number and the override parameters for the job instance:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  sweep:\n    subdir: ${hydra.job.num}_${hydra.job.override_dirname}\n")),Object(o.b)("p",null,"Run output directory grouped by job name:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  run:\n    dir: outputs/${hydra.job.name}/${now:%Y-%m-%d_%H-%M-%S}\n")),Object(o.b)("p",null,"Run output directory can contain user configuration variables:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  run:\n    dir: outputs/${now:%Y-%m-%d_%H-%M-%S}/opt:${optimizer.type}\n\n")),Object(o.b)("p",null,"Run output directory can contain override parameters for the job:"),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"./job#hydrajoboverride_dirname"}),"Override dirname")," in the Job configuration page for details on how to customize\n",Object(o.b)("inlineCode",{parentName:"p"},"hydra.job.override_dirname"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  run:\n    dir: output/${hydra.job.override_dirname}\n")))}d.isMDXComponent=!0},266:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),d=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=d(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},s=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=d(t),s=n,m=l["".concat(i,".").concat(s)]||l[s]||b[s]||o;return t?a.a.createElement(m,c(c({ref:r},p),{},{components:t})):a.a.createElement(m,c({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=s;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);