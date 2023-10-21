"use strict";(self.webpackChunkcaspardb=self.webpackChunkcaspardb||[]).push([[487],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=l(t),m=o,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||s;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=m;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a[c]="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2317:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=t(7462),o=(t(7294),t(3905));const s={id:"doc-markdown",title:"Introduction",sidebar_label:"H\xe9bergement",pagination_label:"H\xe9bergement",description:"Pr\xe9sentation du self-hosting, et pourquoi auto-h\xe9berger",keywords:["docs","self-hosting"]},i=void 0,a={unversionedId:"selfhost/doc-markdown",id:"selfhost/doc-markdown",title:"Introduction",description:"Pr\xe9sentation du self-hosting, et pourquoi auto-h\xe9berger",source:"@site/docs/40-selfhost/index.md",sourceDirName:"40-selfhost",slug:"/selfhost/",permalink:"/azurwiki/selfhost/",draft:!1,editUrl:"https://github.com/haysberg/azurwiki/tree/main/docs/docs/40-selfhost/index.md",tags:[],version:"current",frontMatter:{id:"doc-markdown",title:"Introduction",sidebar_label:"H\xe9bergement",pagination_label:"H\xe9bergement",description:"Pr\xe9sentation du self-hosting, et pourquoi auto-h\xe9berger",keywords:["docs","self-hosting"]},sidebar:"tutorialSidebar",previous:{title:"RE - Blogs",permalink:"/azurwiki/reverse/blogs"},next:{title:"Acheter un serveur",permalink:"/azurwiki/selfhost/hardware"}},u={},l=[{value:"Pourquoi faire du self-hosting ?",id:"pourquoi-faire-du-self-hosting-",level:2},{value:"Pr\xe9-requis",id:"pr\xe9-requis",level:2}],p={toc:l},c="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(c,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Le self-hosting est la pratique d'avoir un serveur chez soi, et d'h\xe9berger ses services soit-m\xeame. Les services que l'on peut h\xe9berger soit-m\xeame sont tr\xe8s nombreux, mais nous essaierons de faire une liste de ceux que nous avons d\xe9j\xe0 utilis\xe9s afin que vous puissiez d\xe9couvrir une petite partie de ce que vous avez \xe0 y gagner."),(0,o.kt)("h2",{id:"pourquoi-faire-du-self-hosting-"},"Pourquoi faire du self-hosting ?"),(0,o.kt)("p",null,"Les motivations principales pour faire du self-hosting sont g\xe9n\xe9ralement les suivantes :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Avoir acc\xe8s \xe0 des services qui offrent de meilleures fonctionnalit\xe9s que des alternatives propri\xe9taires / dans le cloud. Par exemple, ne pas avoir de limitations de stockage."),(0,o.kt)("li",{parentName:"ul"},"Avoir le contr\xf4le total de ses donn\xe9es personnelles. Par exemple, pour stocker des donn\xe9es priv\xe9es, comme des photos de famille ou les statistiques de votre sommeil."),(0,o.kt)("li",{parentName:"ul"},"Pouvoir configurer l'infrastructure pour faire ce que l'on veut : des notifications sur Discord ou par mail pour un \xe9v\xe8nement sur le serveur, des statistiques sur tout et n'importe quoi... et on n'est pas cens\xe9 le dire ici, mais aussi des choses pas tr\xe8s l\xe9gales qui vous vaudraient d'\xeatre bannis de certains services."),(0,o.kt)("li",{parentName:"ul"},"Pour apprendre \xe0 administrer un serveur ! Il est beaucoup moins grave de devoir reboot un serveur personnel qu'un serveur en production...")),(0,o.kt)("h2",{id:"pr\xe9-requis"},"Pr\xe9-requis"),(0,o.kt)("p",null,"Pour pouvoir utiliser votre propre serveur \xe0 la maison, il vous faudra :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\ud83d\udcbb ",(0,o.kt)("strong",{parentName:"p"},"Un serveur")," : Vous pouvez utiliser un ancien ordinateur (m\xeame s'il a 15 ans), un Raspberry Pi (ou un clone). Du moment que vous avez une prise Ethernet, une sortie vid\xe9o et de quoi brancher un \xe9cran, \xe7a devrait plus ou moins suffire selon vos besoins.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\ud83d\udcaa ",(0,o.kt)("strong",{parentName:"p"},"De la motivation")," : Si vous n'y connaissez rien, prenez votre temps. Rome ne s'est pas construite en un jour ! Une fois que vous y serez, vous pourrez \xeatre fier du travail accompli.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\ud83c\udf10 ",(0,o.kt)("strong",{parentName:"p"},"Une connexion Internet")," : Bien qu'il soit possible d'avoir acc\xe8s \xe0 un serveur depuis Internet si celui-ci tourne derri\xe8re une box ADSL, beaucoup de services n\xe9cessite d'avoir plus de 6 Mbps de bande passante \xe0 disposition, il est donc fortement recommand\xe9 d'\xeatre ",(0,o.kt)("strong",{parentName:"p"},"fibr\xe9"),"."))),(0,o.kt)("admonition",{title:"Note concernant les types de boxs Internet support\xe9es",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Il est important de noter que nous aurons besoin d'une connexion et d'un routeur capable de faire du ",(0,o.kt)("strong",{parentName:"p"},"port-forwarding"),"."),(0,o.kt)("p",{parentName:"admonition"},"Les routeurs 4G / 5G / StarLink n'\xe9tant pas capable de cela, vous ne pourrez pas avoir un serveur joignable via Internet, mais il pourra toujours \xeatre disponible sur votre r\xe9seau local.")))}d.isMDXComponent=!0}}]);