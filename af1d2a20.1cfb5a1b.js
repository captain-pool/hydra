(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{186:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return d}));var r=t(2),o=t(7),a=(t(0),t(251)),i={id:"compose_api",title:"Compose API",sidebar_label:"Experimental compose API"},c={unversionedId:"advanced/compose_api",id:"version-0.11/advanced/compose_api",isDocsHomePage:!1,title:"Compose API",description:"Hydra 0.11.0 introduces a new experimental API for composing configuration via the hydra.experimental.compose() function.",source:"@site/versioned_docs/version-0.11/advanced/hydra_compose.md",slug:"/advanced/compose_api",permalink:"/docs/0.11/advanced/compose_api",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-0.11/advanced/hydra_compose.md",version:"0.11",lastUpdatedBy:"forcecore",lastUpdatedAt:1610301110,sidebar_label:"Experimental compose API",sidebar:"version-0.11/docs",previous:{title:"Hydra plugins",permalink:"/docs/0.11/advanced/plugins"},next:{title:"Ray example",permalink:"/docs/0.11/advanced/ray_example"}},p=[{value:"<code>hydra.experimental.compose()</code> example",id:"hydraexperimentalcompose-example",children:[]},{value:"API Documentation",id:"api-documentation",children:[]}],l={rightToc:p};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Hydra 0.11.0 introduces a new experimental API for composing configuration via the ",Object(a.b)("inlineCode",{parentName:"p"},"hydra.experimental.compose()")," function.\nPrior to calling compose(), you have to initialize Hydra: This can be done by using the standard ",Object(a.b)("inlineCode",{parentName:"p"},"@hydra.main()")," or by calling ",Object(a.b)("inlineCode",{parentName:"p"},"hydra.experimental.initialize()"),"."),Object(a.b)("p",null,"Here is an ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/0.11_branch/examples/notebook"}),"example Jupyter notebook utilizing this API"),"."),Object(a.b)("h3",{id:"hydraexperimentalcompose-example"},Object(a.b)("inlineCode",{parentName:"h3"},"hydra.experimental.compose()")," example"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'from hydra.experimental import compose, initialize\n\n\nif __name__ == "__main__":\n    initialize(\n        config_dir="conf", strict=True,\n    )\n\n    cfg = compose("config.yaml", overrides=["db=mysql", "db.user=me"])\n    print(OmegaConf.to_yaml(cfg))\n')),Object(a.b)("h3",{id:"api-documentation"},"API Documentation"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'def compose(config_file=None, overrides=[], strict=None):\n    """\n    :param config_file: optional config file to load\n    :param overrides: list of overrides for config file\n    :param strict: optionally override the default strict mode\n    :return: the composed config\n    """\n\n\ndef initialize(config_dir=None, strict=None, caller_stack_depth=1):\n    """\n    Initializes the Hydra sub system\n\n    :param config_dir: config directory relative to the calling script\n    :param strict: Default value for strict mode\n    :param caller_stack_depth:\n    :return:\n    """\n')))}d.isMDXComponent=!0},251:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),d=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=d(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=d(t),u=r,f=s["".concat(i,".").concat(u)]||s[u]||m[u]||a;return t?o.a.createElement(f,c(c({ref:n},l),{},{components:t})):o.a.createElement(f,c({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);