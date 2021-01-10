(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{209:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return o})),t.d(a,"rightToc",(function(){return c})),t.d(a,"default",(function(){return p}));var n=t(2),r=t(7),l=(t(0),t(251)),i={id:"joblib_launcher",title:"Joblib Launcher plugin",sidebar_label:"Joblib Launcher plugin"},o={unversionedId:"plugins/joblib_launcher",id:"version-1.0/plugins/joblib_launcher",isDocsHomePage:!1,title:"Joblib Launcher plugin",description:"PyPI",source:"@site/versioned_docs/version-1.0/plugins/joblib_launcher.md",slug:"/plugins/joblib_launcher",permalink:"/docs/plugins/joblib_launcher",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/plugins/joblib_launcher.md",version:"1.0",lastUpdatedBy:"forcecore",lastUpdatedAt:1610301110,sidebar_label:"Joblib Launcher plugin",sidebar:"version-1.0/docs",previous:{title:"Colorlog plugin",permalink:"/docs/plugins/colorlog"},next:{title:"Ray Launcher plugin",permalink:"/docs/plugins/ray_launcher"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],b={rightToc:c};function p(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://pypi.org/project/hydra-joblib-launcher/"}),Object(l.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/pypi/v/hydra-joblib-launcher",alt:"PyPI"}))),"\n",Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/pypi/l/hydra-joblib-launcher",alt:"PyPI - License"})),"\n",Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/pypi/pyversions/hydra-joblib-launcher",alt:"PyPI - Python Version"})),"\n",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://pypistats.org/packages/hydra-joblib-launcher"}),Object(l.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/pypi/dm/hydra-joblib-launcher.svg",alt:"PyPI - Downloads"}))),"\n",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/plugins/hydra_joblib_launcher/example"}),Object(l.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"}))),"\n",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/plugins/hydra_joblib_launcher"}),Object(l.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Plugin%20source-informational",alt:"Plugin source"})))),Object(l.b)("p",null,"The Joblib Launcher plugin provides a launcher for parallel tasks based on ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://joblib.readthedocs.io/en/latest/parallel.html"}),Object(l.b)("inlineCode",{parentName:"a"},"Joblib.Parallel")),"."),Object(l.b)("h3",{id:"installation"},"Installation"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-commandline"}),"pip install hydra-joblib-launcher --upgrade\n")),Object(l.b)("h3",{id:"usage"},"Usage"),Object(l.b)("p",null,"Once installed, add ",Object(l.b)("inlineCode",{parentName:"p"},"hydra/launcher=joblib")," to your command line. Alternatively, override ",Object(l.b)("inlineCode",{parentName:"p"},"hydra/launcher")," in your config:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"defaults:\n  - hydra/launcher: joblib\n")),Object(l.b)("p",null,"By default, process-based parallelism using all available CPU cores is used. By overriding the default configuration, it is e.g. possible limit the number of parallel executions."),Object(l.b)("p",null,"The JobLibLauncherConf backing the config is defined ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/blob/master/plugins/hydra_joblib_launcher/hydra_plugins/hydra_joblib_launcher/config.py"}),"here"),":"),Object(l.b)("p",null,"You can discover the Joblib Launcher parameters with:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="$ python your_app.py hydra/launcher=joblib --cfg hydra -p hydra.launcher"',title:'"$',python:!0,"your_app.py":!0,"hydra/launcher":"joblib","--cfg":!0,hydra:!0,"-p":!0,'hydra.launcher"':!0}),"# @package hydra.launcher\n_target_: hydra_plugins.hydra_joblib_launcher.joblib_launcher.JoblibLauncher\nn_jobs: 10\nbackend: null\nprefer: processes\nrequire: null\nverbose: 0\ntimeout: null\npre_dispatch: 2*n_jobs\nbatch_size: auto\ntemp_folder: null\nmax_nbytes: null\nmmap_mode: r\n")),Object(l.b)("p",null,"See ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://joblib.readthedocs.io/en/latest/parallel.html"}),Object(l.b)("inlineCode",{parentName:"a"},"Joblib.Parallel")," documentation")," for full details about the parameters above."),Object(l.b)("div",{class:"alert alert--info",role:"alert"},"NOTE: The only supported JobLib backend is Loky (process-based parallelism)."),Object(l.b)("br",null),Object(l.b)("p",null,"An ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/plugins/hydra_joblib_launcher/example"}),"example application")," using this launcher is provided in the plugin repository."),Object(l.b)("p",null,"Starting the app with ",Object(l.b)("inlineCode",{parentName:"p"},"python my_app.py --multirun task=1,2,3,4,5")," will launch five parallel executions:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"$ python my_app.py --multirun task=1,2,3,4,5\n[HYDRA] Joblib.Parallel(n_jobs=-1,verbose=0,timeout=None,pre_dispatch=2*n_jobs,batch_size=auto,temp_folder=None,max_nbytes=None,mmap_mode=r,backend=loky) is launching 5 jobs\n[HYDRA] Launching jobs, sweep output dir : multirun/2020-02-18/10-00-00\n[__main__][INFO] - Process ID 14336 executing task 2 ...\n[__main__][INFO] - Process ID 14333 executing task 1 ...\n[__main__][INFO] - Process ID 14334 executing task 3 ...\n[__main__][INFO] - Process ID 14335 executing task 4 ...\n[__main__][INFO] - Process ID 14337 executing task 5 ...\n")))}p.isMDXComponent=!0},251:function(e,a,t){"use strict";t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return d}));var n=t(0),r=t.n(n);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),p=function(e){var a=r.a.useContext(b),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},s=function(e){var a=p(e.components);return r.a.createElement(b.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},h=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(t),h=n,d=s["".concat(i,".").concat(h)]||s[h]||u[h]||l;return t?r.a.createElement(d,o(o({ref:a},b),{},{components:t})):r.a.createElement(d,o({ref:a},b))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=h;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var b=2;b<l;b++)i[b]=t[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);