"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9452],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return l},MDXProvider:function(){return u},mdx:function(){return g},useMDXComponents:function(){return s},withMDXComponents:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(){return p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},p.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){return function(n){var t=s(n.components);return a.createElement(e,p({},n,{components:t}))}},s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(t),u=r,f=d["".concat(i,".").concat(u)]||d[u]||m[u]||p;return t?a.createElement(f,o(o({ref:n},l),{},{components:t})):a.createElement(f,o({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,i=new Array(p);i[0]=f;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<p;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1426:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var a=t(87462),r=t(63366),p=(t(67294),t(3905)),i=["components"],o={id:"app_packaging",title:"Application packaging",sidebar_label:"Application packaging"},c=void 0,l={unversionedId:"advanced/app_packaging",id:"version-1.0/advanced/app_packaging",title:"Application packaging",description:"Example application",source:"@site/versioned_docs/version-1.0/advanced/packaging.md",sourceDirName:"advanced",slug:"/advanced/app_packaging",permalink:"/docs/1.0/advanced/app_packaging",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/advanced/packaging.md",tags:[],version:"1.0",lastUpdatedBy:"Christian Schell",lastUpdatedAt:1643929996,formattedLastUpdatedAt:"2/3/2022",frontMatter:{id:"app_packaging",title:"Application packaging",sidebar_label:"Application packaging"},sidebar:"version-1.0/docs",previous:{title:"Hydra plugins",permalink:"/docs/1.0/advanced/plugins"},next:{title:"Hydra in Jupyter Notebooks",permalink:"/docs/1.0/advanced/jupyter_notebooks"}},d=[],s={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,p.mdx)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,p.mdx)("p",null,(0,p.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/examples/advanced/hydra_app_example"},(0,p.mdx)("img",{parentName:"a",src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"}))),(0,p.mdx)("p",null,"You can package your Hydra application along with its configuration.\nThere is a working example ",(0,p.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/examples/advanced/hydra_app_example"},"here"),"."),(0,p.mdx)("p",null,"You can run it with:"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python examples/advanced/hydra_app_example/hydra_app/main.py\ndataset:\n  name: imagenet\n  path: /datasets/imagenet\n")),(0,p.mdx)("p",null,"To install it, use:"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-text"},"$ pip install examples/advanced/hydra_app_example\n...\nSuccessfully installed hydra-app-0.1\n")),(0,p.mdx)("p",null,"Run the installed app with:"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ hydra_app\ndataset:\n  name: imagenet\n  path: /datasets/imagenet\n")),(0,p.mdx)("p",null,"The installed app will use the packaged configuration files."))}u.isMDXComponent=!0}}]);