(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[577],{1844:function(e,t){"use strict";function r(e,t){const r=[];for(let n=0;n<e.length;n++)if(t)for(let o=0;o<t.length;o++)Array.isArray(e[n])?r.push([...e[n],t[o]]):r.push([e[n],t[o]]);else r.push([e[n]]);return r}t.gr=void 0,t.gr=function e(...t){if(!Array.isArray(t))throw new TypeError("Please, send an array.");const[n,o,...a]=t,i=r(n,o);return a.length?e(i,...a):i}},2962:function(e,t,r){"use strict";r.d(t,{PB:function(){return c}});var n=r(9008),o=r(7294);const a={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},i=(e,t=[],{defaultWidth:r,defaultHeight:n}={})=>t.reduce(((t,a,i)=>(t.push(o.createElement("meta",{key:`og:${e}:0${i}`,property:`og:${e}`,content:a.url})),a.alt&&t.push(o.createElement("meta",{key:`og:${e}:alt0${i}`,property:`og:${e}:alt`,content:a.alt})),a.secureUrl&&t.push(o.createElement("meta",{key:`og:${e}:secure_url0${i}`,property:`og:${e}:secure_url`,content:a.secureUrl.toString()})),a.type&&t.push(o.createElement("meta",{key:`og:${e}:type0${i}`,property:`og:${e}:type`,content:a.type.toString()})),a.width?t.push(o.createElement("meta",{key:`og:${e}:width0${i}`,property:`og:${e}:width`,content:a.width.toString()})):r&&t.push(o.createElement("meta",{key:`og:${e}:width0${i}`,property:`og:${e}:width`,content:r.toString()})),a.height?t.push(o.createElement("meta",{key:`og:${e}:height${i}`,property:`og:${e}:height`,content:a.height.toString()})):n&&t.push(o.createElement("meta",{key:`og:${e}:height${i}`,property:`og:${e}:height`,content:n.toString()})),t)),[]),l=e=>{const t=[];e.titleTemplate&&(a.templateTitle=e.titleTemplate);let r="";e.title?(r=e.title,a.templateTitle&&(r=a.templateTitle.replace(/%s/g,(()=>r)))):e.defaultTitle&&(r=e.defaultTitle),r&&t.push(o.createElement("title",{key:"title"},r));const n=e.noindex||a.noindex||e.dangerouslySetAllPagesToNoIndex,l=e.nofollow||a.nofollow||e.dangerouslySetAllPagesToNoFollow;let c="";if(e.robotsProps){const{nosnippet:t,maxSnippet:r,maxImagePreview:n,maxVideoPreview:o,noarchive:a,noimageindex:i,notranslate:l,unavailableAfter:p}=e.robotsProps;c=`${t?",nosnippet":""}${r?`,max-snippet:${r}`:""}${n?`,max-image-preview:${n}`:""}${a?",noarchive":""}${p?`,unavailable_after:${p}`:""}${i?",noimageindex":""}${o?`,max-video-preview:${o}`:""}${l?",notranslate":""}`}if(n||l?(e.dangerouslySetAllPagesToNoIndex&&(a.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(a.nofollow=!0),t.push(o.createElement("meta",{key:"robots",name:"robots",content:`${n?"noindex":"index"},${l?"nofollow":"follow"}${c}`}))):t.push(o.createElement("meta",{key:"robots",name:"robots",content:`index,follow${c}`})),e.description&&t.push(o.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&t.push(o.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((e=>{t.push(o.createElement("link",{rel:"alternate",key:`languageAlternate-${e.hrefLang}`,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&t.push(o.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&t.push(o.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&t.push(o.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&t.push(o.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),(e.openGraph?.title||r)&&t.push(o.createElement("meta",{key:"og:title",property:"og:title",content:e.openGraph?.title||r})),(e.openGraph?.description||e.description)&&t.push(o.createElement("meta",{key:"og:description",property:"og:description",content:e.openGraph?.description||e.description})),e.openGraph){if((e.openGraph.url||e.canonical)&&t.push(o.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){const r=e.openGraph.type.toLowerCase();t.push(o.createElement("meta",{key:"og:type",property:"og:type",content:r})),"profile"===r&&e.openGraph.profile?(e.openGraph.profile.firstName&&t.push(o.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&t.push(o.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&t.push(o.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&t.push(o.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===r&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach(((e,r)=>{t.push(o.createElement("meta",{key:`book:author:0${r}`,property:"book:author",content:e}))})),e.openGraph.book.isbn&&t.push(o.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&t.push(o.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach(((e,r)=>{t.push(o.createElement("meta",{key:`book:tag:0${r}`,property:"book:tag",content:e}))}))):"article"===r&&e.openGraph.article?(e.openGraph.article.publishedTime&&t.push(o.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&t.push(o.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&t.push(o.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach(((e,r)=>{t.push(o.createElement("meta",{key:`article:author:0${r}`,property:"article:author",content:e}))})),e.openGraph.article.section&&t.push(o.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach(((e,r)=>{t.push(o.createElement("meta",{key:`article:tag:0${r}`,property:"article:tag",content:e}))}))):"video.movie"!==r&&"video.episode"!==r&&"video.tv_show"!==r&&"video.other"!==r||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach(((e,r)=>{e.profile&&t.push(o.createElement("meta",{key:`video:actor:0${r}`,property:"video:actor",content:e.profile})),e.role&&t.push(o.createElement("meta",{key:`video:actor:role:0${r}`,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach(((e,r)=>{t.push(o.createElement("meta",{key:`video:director:0${r}`,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach(((e,r)=>{t.push(o.createElement("meta",{key:`video:writer:0${r}`,property:"video:writer",content:e}))})),e.openGraph.video.duration&&t.push(o.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&t.push(o.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach(((e,r)=>{t.push(o.createElement("meta",{key:`video:tag:0${r}`,property:"video:tag",content:e}))})),e.openGraph.video.series&&t.push(o.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(a.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(a.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&t.push(...i("image",e.openGraph.images,{defaultWidth:a.defaultOpenGraphImageWidth,defaultHeight:a.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(a.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(a.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&t.push(...i("video",e.openGraph.videos,{defaultWidth:a.defaultOpenGraphVideoWidth,defaultHeight:a.defaultOpenGraphVideoHeight})),e.openGraph.locale&&t.push(o.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&t.push(o.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&t.push(o.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((e=>{t.push(o.createElement("meta",{key:`meta:${e.keyOverride??e.name??e.property??e.httpEquiv}`,...e}))})),e.additionalLinkTags?.length&&e.additionalLinkTags.forEach((e=>{t.push(o.createElement("link",{key:`link${e.keyOverride??e.href}${e.rel}`,...e}))})),t};class c extends o.Component{render(){const{title:e,noindex:t=!1,nofollow:r,robotsProps:a,description:i,canonical:c,openGraph:p,facebook:s,twitter:u,additionalMetaTags:d,titleTemplate:h,mobileAlternate:f,languageAlternates:m,additionalLinkTags:g}=this.props;return o.createElement(n.default,null,l({title:e,noindex:t,nofollow:r,robotsProps:a,description:i,canonical:c,facebook:s,openGraph:p,additionalMetaTags:d,twitter:u,titleTemplate:h,mobileAlternate:f,languageAlternates:m,additionalLinkTags:g}))}}},8045:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(c){l=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}t.default=function(e){var t=e.src,r=e.sizes,n=e.unoptimized,i=void 0!==n&&n,l=e.priority,c=void 0!==l&&l,u=e.loading,h=e.lazyRoot,y=void 0===h?null:h,v=e.lazyBoundary,w=void 0===v?"200px":v,k=e.className,G=e.quality,E=e.width,A=e.height,$=e.objectFit,_=e.objectPosition,I=e.onLoadingComplete,j=e.loader,T=void 0===j?x:j,z=e.placeholder,P=void 0===z?"empty":z,L=e.blurDataURL,R=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),W=p.useRef(null),D=R,M=r?"responsive":"intrinsic";"layout"in D&&(D.layout&&(M=D.layout),delete D.layout);var N="";if(function(e){return"object"===typeof e&&(b(e)||function(e){return void 0!==e.src}(e))}(t)){var H=b(t)?t.default:t;if(!H.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(H)));if(L=L||H.blurDataURL,N=H.src,(!M||"fill"!==M)&&(A=A||H.height,E=E||H.width,!H.height||!H.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(H)))}t="string"===typeof t?t:N;var C=S(E),q=S(A),V=S(G),U=!c&&("lazy"===u||"undefined"===typeof u);(t.startsWith("data:")||t.startsWith("blob:"))&&(i=!0,U=!1);m.has(t)&&(U=!1);0;var B,F=a(d.useIntersection({rootRef:y,rootMargin:w,disabled:!U}),2),J=F[0],Q=F[1],K=!U||Q,X={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Y={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Z=!1,ee={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:$,objectPosition:_},te="blur"===P?{filter:"blur(20px)",backgroundSize:$||"cover",backgroundImage:'url("'.concat(L,'")'),backgroundPosition:_||"0% 0%"}:{};if("fill"===M)X.display="block",X.position="absolute",X.top=0,X.left=0,X.bottom=0,X.right=0;else if("undefined"!==typeof C&&"undefined"!==typeof q){var re=q/C,ne=isNaN(re)?"100%":"".concat(100*re,"%");"responsive"===M?(X.display="block",X.position="relative",Z=!0,Y.paddingTop=ne):"intrinsic"===M?(X.display="inline-block",X.position="relative",X.maxWidth="100%",Z=!0,Y.maxWidth="100%",B="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(C,"%27%20height=%27").concat(q,"%27/%3e")):"fixed"===M&&(X.display="inline-block",X.position="relative",X.width=C,X.height=q)}else 0;var oe={src:g,srcSet:void 0,sizes:void 0};K&&(oe=O({src:t,unoptimized:i,layout:M,width:C,quality:V,sizes:r,loader:T}));var ae=t;0;var ie;0;var le=(o(ie={},"imagesrcset",oe.srcSet),o(ie,"imagesizes",oe.sizes),ie),ce=p.default.useLayoutEffect,pe=p.useRef(I);return p.useEffect((function(){pe.current=I}),[I]),ce((function(){J(W.current)}),[J]),p.useEffect((function(){!function(e,t,r,n,o){var a=function(){var r=e.current;r&&(r.src!==g&&("decode"in r?r.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.current&&(m.add(t),"blur"===n&&(r.style.filter="",r.style.backgroundSize="",r.style.backgroundImage="",r.style.backgroundPosition=""),o.current)){var a=r.naturalWidth,i=r.naturalHeight;o.current({naturalWidth:a,naturalHeight:i})}})))};e.current&&(e.current.complete?a():e.current.onload=a)}(W,ae,0,P,pe)}),[ae,M,P,K]),p.default.createElement("span",{style:X},Z?p.default.createElement("span",{style:Y},B?p.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:B}):null):null,p.default.createElement("img",Object.assign({},D,oe,{decoding:"async","data-nimg":M,className:k,ref:W,style:f({},ee,te)})),U&&p.default.createElement("noscript",null,p.default.createElement("img",Object.assign({},D,O({src:t,unoptimized:i,layout:M,width:C,quality:V,sizes:r,loader:T}),{decoding:"async","data-nimg":M,style:ee,className:k,loading:u||"lazy"}))),c?p.default.createElement(s.default,null,p.default.createElement("link",Object.assign({key:"__nimg-"+oe.src+oe.srcSet+oe.sizes,rel:"preload",as:"image",href:oe.srcSet?void 0:oe.src},le))):null)};var c,p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),s=(c=r(5443))&&c.__esModule?c:{default:c},u=r(5809),d=r(7190);function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){for(var t=arguments,r=function(r){var n=null!=t[r]?t[r]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){h(e,t,n[t])}))},n=1;n<arguments.length;n++)r(n);return e}var m=new Set,g=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var y=new Map([["default",function(e){var t=e.root,r=e.src,n=e.width,o=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(o||75)}],["imgix",function(e){var t=e.root,r=e.src,n=e.width,o=e.quality,a=new URL("".concat(t).concat($(r))),i=a.searchParams;i.set("auto",i.get("auto")||"format"),i.set("fit",i.get("fit")||"max"),i.set("w",i.get("w")||n.toString()),o&&i.set("q",o.toString());return a.href}],["cloudinary",function(e){var t=e.root,r=e.src,n=e.width,o=e.quality,a=["f_auto","c_limit","w_"+n,"q_"+(o||"auto")].join(",")+"/";return"".concat(t).concat(a).concat($(r))}],["akamai",function(e){var t=e.root,r=e.src,n=e.width;return"".concat(t).concat($(r),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function b(e){return void 0!==e.default}var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"akamai"}||u.imageConfigDefault,w=v.deviceSizes,k=v.imageSizes,G=v.loader,E=v.path,A=(v.domains,i(w).concat(i(k)));function O(e){var t=e.src,r=e.unoptimized,n=e.layout,o=e.width,a=e.quality,l=e.sizes,c=e.loader;if(r)return{src:t,srcSet:void 0,sizes:void 0};var p=function(e,t,r){if(r&&("fill"===t||"responsive"===t)){for(var n,o=/(^|\s)(1?\d?\d)vw/g,a=[];n=o.exec(r);n)a.push(parseInt(n[2]));if(a.length){var l,c=.01*(l=Math).min.apply(l,i(a));return{widths:A.filter((function(e){return e>=w[0]*c})),kind:"w"}}return{widths:A,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:w,kind:"w"}:{widths:i(new Set([e,2*e].map((function(e){return A.find((function(t){return t>=e}))||A[A.length-1]})))),kind:"x"}}(o,n,l),s=p.widths,u=p.kind,d=s.length-1;return{sizes:l||"w"!==u?l:"100vw",srcSet:s.map((function(e,r){return"".concat(c({src:t,quality:a,width:e})," ").concat("w"===u?e:r+1).concat(u)})).join(", "),src:c({src:t,quality:a,width:s[d]})}}function S(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function x(e){var t=y.get(G);if(t)return t(f({root:E},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(G))}function $(e){return"/"===e[0]?e.slice(1):e}w.sort((function(e,t){return e-t})),A.sort((function(e,t){return e-t}))},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(c){l=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!l,p=a.useRef(),s=o(a.useState(!1),2),u=s[0],d=s[1],h=o(a.useState(t?t.current:null),2),f=h[0],m=h[1],g=a.useCallback((function(e){p.current&&(p.current(),p.current=void 0),n||u||e&&e.tagName&&(p.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,i=n.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{root:f,rootMargin:r}))}),[n,f,r,u]);return a.useEffect((function(){if(!l&&!u){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[u]),a.useEffect((function(){t&&m(t.current)}),[t]),[g,u]};var a=r(7294),i=r(9311),l="undefined"!==typeof IntersectionObserver;var c=new Map},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},9008:function(e,t,r){e.exports=r(5443)},5675:function(e,t,r){e.exports=r(8045)}}]);