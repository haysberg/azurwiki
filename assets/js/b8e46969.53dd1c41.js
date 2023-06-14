"use strict";(self.webpackChunkcaspardb=self.webpackChunkcaspardb||[]).push([[112],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(r),m=o,f=c["".concat(u,".").concat(m)]||c[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3510:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={title:"DNS & Registars",sidebar_label:"DNS & Registars",pagination_label:"DNS & Registars",description:"Pourquoi et comment acheter un nom de domaine ?",keywords:["docs","OSINT"]},i=void 0,s={unversionedId:"selfhost/Administration/dns",id:"selfhost/Administration/dns",title:"DNS & Registars",description:"Pourquoi et comment acheter un nom de domaine ?",source:"@site/docs/05-selfhost/04-Administration/01-dns.md",sourceDirName:"05-selfhost/04-Administration",slug:"/selfhost/Administration/dns",permalink:"/random-veille/selfhost/Administration/dns",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05-selfhost/04-Administration/01-dns.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"DNS & Registars",sidebar_label:"DNS & Registars",pagination_label:"DNS & Registars",description:"Pourquoi et comment acheter un nom de domaine ?",keywords:["docs","OSINT"]},sidebar:"tutorialSidebar",previous:{title:"Outils",permalink:"/random-veille/selfhost/Administration/"},next:{title:"S\xe9curiser son serveur",permalink:"/random-veille/selfhost/Administration/securite"}},u={},l=[{value:"Quel registar choisir ?",id:"quel-registar-choisir-",level:2},{value:"\ud83e\udd47 Cloudflare",id:"-cloudflare",level:3},{value:"\ud83e\udd48 OVH",id:"-ovh",level:3},{value:"Configurer le changement d&#39;IP automatique",id:"configurer-le-changement-dip-automatique",level:2}],d={toc:l},c="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Obtenir un nom de domaine va vite \xeatre n\xe9cessaire, que cela soit en terme de s\xe9curit\xe9 (il y a besoin d'une entr\xe9e DNS pour obtenir un certificat valide pour le HTTPS) ou d'utilisabilit\xe9 (aucun utilisateur ne se souviendra de votre IP, surtout si elle change)."),(0,o.kt)("h2",{id:"quel-registar-choisir-"},"Quel registar choisir ?"),(0,o.kt)("p",null,"Pour obtenir un nom de domaine, vous allez devoir passer par un ",(0,o.kt)("em",{parentName:"p"},"registar"),", autrement dit une entreprise capable d'enregistrer un nom de domaine."),(0,o.kt)("p",null,"Nous en recommandons deux."),(0,o.kt)("h3",{id:"-cloudflare"},"\ud83e\udd47 Cloudflare"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.cloudflare.com/fr-fr/"},"Cloudflare")," est un des registars les plus utilis\xe9s dans le monde.\nLe nombre de serveurs DNS repliqu\xe9s un peu partout de Cloudflare permet d'avoir des temps de r\xe9ponse plus rapides."),(0,o.kt)("p",null,"De plus, Cloudflare ne gagne pas d'argent sur leur enregistrements DNS ! Le prix demand\xe9 est uniquement celui que co\xfbte r\xe9ellement le nom de domaine (fix\xe9 par les \xeeles Tuvalu pour le ",(0,o.kt)("inlineCode",{parentName:"p"},".tv")," par exemple). Cloudflare ne touche donc aucune marge sur leurs ventes de DNS, et font du chiffre d'affaire sur tous les autres services qu'ils proposent."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Notez que nous ne recommandons pas les autres produits de Cloudflare.")),(0,o.kt)("h3",{id:"-ovh"},"\ud83e\udd48 OVH"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.ovhcloud.com/fr/"},"OVH")," permet aussi d'acheter des noms de domaine, mais pour plus cher que Cloudflare."),(0,o.kt)("p",null,"C'est un h\xe9bergeur Fran\xe7ais qui peut aussi vous faire une ristourne si vous prenez une offre d'h\xe9bergement avec un nom de domaine."),(0,o.kt)("h2",{id:"configurer-le-changement-dip-automatique"},"Configurer le changement d'IP automatique"))}p.isMDXComponent=!0}}]);