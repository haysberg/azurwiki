"use strict";(self.webpackChunkcaspardb=self.webpackChunkcaspardb||[]).push([[274],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var s=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},o=Object.keys(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=s.createContext({}),l=function(e){var t=s.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return s.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=l(r),m=n,v=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return r?s.createElement(v,a(a({ref:t},p),{},{components:r})):s.createElement(v,a({ref:t},p))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:n,a[1]=i;for(var l=2;l<o;l++)a[l]=r[l];return s.createElement.apply(null,a)}return s.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5671:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=r(7462),n=(r(7294),r(3905));const o={title:"Quel syst\xe8me d'exploitation choisir ?",sidebar_label:"Choisir un OS",pagination_label:"Choisir un OS",description:"Quel OS choisir pour son serveur ?",keywords:["docs","OSINT"]},a=void 0,i={unversionedId:"selfhost/os",id:"selfhost/os",title:"Quel syst\xe8me d'exploitation choisir ?",description:"Quel OS choisir pour son serveur ?",source:"@site/docs/05-selfhost/03-os.md",sourceDirName:"05-selfhost",slug:"/selfhost/os",permalink:"/random-veille/selfhost/os",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05-selfhost/03-os.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Quel syst\xe8me d'exploitation choisir ?",sidebar_label:"Choisir un OS",pagination_label:"Choisir un OS",description:"Quel OS choisir pour son serveur ?",keywords:["docs","OSINT"]},sidebar:"tutorialSidebar",previous:{title:"Acheter un serveur",permalink:"/random-veille/selfhost/hardware"},next:{title:"Alternatives",permalink:"/random-veille/selfhost/alternatives/"}},u={},l=[{value:"Pour les d\xe9butants",id:"pour-les-d\xe9butants",level:2},{value:"\ud83e\udd47 YunoHost",id:"-yunohost",level:3},{value:"CasaOS",id:"casaos",level:3},{value:"Pour aller + loin",id:"pour-aller--loin",level:2},{value:"\ud83e\udd47 Fedora",id:"-fedora",level:3},{value:"Debian / Ubuntu",id:"debian--ubuntu",level:3}],p={toc:l},c="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,s.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"pour-les-d\xe9butants"},"Pour les d\xe9butants"),(0,n.kt)("p",null,"Si vous commencez dans le self-hosting, on vous conseille de prendre quelque chose qui a peu de chance de casser, et qui vous permet de d\xe9ployer vos services en quelques clics. Sans \xe7a, vous allez devoir apprendre beaucoup de notions diff\xe9rentes pour pouvoir commencer, et c'est tr\xe8s souvent ce qui d\xe9courage les d\xe9butants."),(0,n.kt)("p",null,"Si jamais vous voulez creuser plus, il y aura de toutes fa\xe7on beaucoup de ressources ci-dessous, donc ne vous prenez pas la t\xeate et si vous voulez migrer plus tard et tenter de nouvelles choses, faites-le ! Gardez juste en t\xeate que c'est plus facile de prendre le truc \xe0 son rythme, et de commencer petit."),(0,n.kt)("h3",{id:"-yunohost"},"\ud83e\udd47 YunoHost"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://yunohost.org"},"YunoHost")," est une distribution Linux Fran\xe7aise qui permet de d\xe9ployer des services facilement en quelques clics. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Page d&#39;accueil utilisateur de YunoHost",src:r(1604).Z,width:"1107",height:"536"})),(0,n.kt)("p",null,"Bas\xe9e sur Debian (r\xe9put\xe9 pour sa stabilit\xe9), elle vous permet de d\xe9ployer facilement un grand nombre d'applications disponibles sur son ",(0,n.kt)("a",{parentName:"p",href:"https://yunohost.org/fr/apps"},"catalogue"),"."),(0,n.kt)("admonition",{title:"Comment \xe7a bas\xe9 sur Debian ?",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Les diff\xe9rents syst\xe8mes d'exploitation Linux sont en fait appel\xe9s des ",(0,n.kt)("a",{parentName:"p",href:"https://fr.wikipedia.org/wiki/Distribution_Linux"},"distributions"),", car Linux \xe9tant open-source, on peut le redistribuer."),(0,n.kt)("p",{parentName:"admonition"},"Ces distributions fournissent le noyau Linux, mais aussi plein d'autres outils, comme une console pour interagir avec le syst\xe8me, des drivers pour certaines cartes graphiques, des logiciels pr\xe9install\xe9s, etc..."),(0,n.kt)("p",{parentName:"admonition"},"L'avantage, c'est que chacun peut un peu faire la version qu'il veut, vous trouverez donc forc\xe9ment chaussure \xe0 votre pied un jour !")),(0,n.kt)("p",null,"YunoHost g\xe8re automatiquement vos certificats TLS, votre reverse proxy, l'authentification de vos utilisateurs, et les mises \xe0 jours d'application. Cela vous permettra par exemple d'avoir votre propre petit clone de Netflix, ou votre cloud personnel, sans trop vous prendre la t\xeate."),(0,n.kt)("h3",{id:"casaos"},"CasaOS"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.casaos.io/"},"CasaOS")," est une application \xe0 installer sur un syst\xe8me Debian. Il fait un peu le m\xeame job, en permettant de d\xe9ployer des applications relativement facilement \xe0 partir d'un catalogue d'application plus ou moins aussi fourni que celui de YunoHost."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Page d&#39;accueil utilisateur de CasaOS",src:r(6638).Z,width:"1920",height:"1006"})),(0,n.kt)("p",null,"Il est \xe0 noter que si vous ne savez pas quelle machine utiliser pour faire votre premier serveur et que vous pr\xe9voyez d'utiliser CasaOS, l'entreprise derri\xe8re le syst\xe8me vends aussi un mini-serveur appel\xe9 le ",(0,n.kt)("a",{parentName:"p",href:"https://www.zimaboard.com/"},"Zima Board")," qui est livr\xe9 avec CasaOS de pr\xe9install\xe9 !"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Pensez quand m\xeame \xe0 v\xe9rifier si vous n'avez pas un ancien PC qui traine, ou qu'un membre de la famille pourrait vous donner, \xe7a reste + \xe9colo ! En plus Linux est connu pour tourner sur n'importe quoi, il y a peu de chances que vous croisiez une incompatibilit\xe9 quelque part.")),(0,n.kt)("h2",{id:"pour-aller--loin"},"Pour aller + loin"),(0,n.kt)("p",null,"Peut-\xeatre que vous avez d\xe9j\xe0 touch\xe9 \xe0 des serveurs Linux par le pass\xe9, ou que vous avez d\xe9j\xe0 utilis\xe9 la cconsole sur votre ordinateur personnel, et que vous voulez aller un peu plus loin, pour \xeatre moins guid\xe9, et un peu plus libre dans votre configuration."),(0,n.kt)("h3",{id:"-fedora"},"\ud83e\udd47 Fedora"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://fedoraproject.org/fr/server/"},"Fedora Server")," est un syst\xe8me d'exploitation libre et open-source. Il est comparable dans les fonctionnalit\xe9s qu'il offre avec d'autres syst\xe8mes d'exploitation que nous listeront plus bas."),(0,n.kt)("p",null,"Il se d\xe9marque n\xe9anmoins de Debian et Ubuntu par plusieurs points :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Un rythme de mise \xe0 jour bi-annuel o\xf9 aucune version n'est une LTS (Long-Term Support ou Support Long Terme). Cela force les utilisateurs \xe0 mettre \xe0 jour leur version de Fedora tous les six mois, ce qui est une relativement bonne chose.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Les mises \xe0 jours d'une version de Fedora \xe0 une autre se passe bien plus souvent sans encombre que celle faites sous Ubuntu, de notre propre exp\xe9rience.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Fedora propose des paquets plus r\xe9cents que ceux propos\xe9s par Debian ou Ubuntu, ce qui offre des fonctionnalit\xe9s suppl\xe9mentaires ainsi des gains de performance, pour peu que l'on mette \xe0 jour son serveur souvent.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Le syst\xe8me d'exploitation fournit aussi ",(0,n.kt)("a",{parentName:"p",href:"https://cockpit-project.org/"},"Cockpit"),", une interface web qui permet de configurer plein de fonctionnalit\xe9s demandant autrement de faire des manipulations dans le terminal (qui peuvent parfois mal finir). Il est par exemple possible de formater un disque, ajouter un utilisateur, configurer ses interfaces r\xe9seau et son pare-feu, ou encore configurer les mises \xe0 jour et le reboot automatique du serveur \xe0 une heure donn\xe9e."))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Bien qu'il soit possible d'installer Cockpit sur d'autres syst\xe8mes, il est install\xe9 par d\xe9faut avec des plugins sp\xe9cifiques \xe0 Fedora Server dans cette distribution, par exemple pour les mises \xe0 jour automatiques.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Cockpit",src:r(603).Z,width:"1447",height:"1190"})),(0,n.kt)("h3",{id:"debian--ubuntu"},"Debian / Ubuntu"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.debian.org/index.fr.html"},"Debian")," est un syst\xe8me d'exploitation libre et open-source, tout comme ",(0,n.kt)("a",{parentName:"p",href:"https://ubuntu.com/download/server"},"Ubuntu Server"),", un d\xe9riv\xe9 de Debian fourni par l'entreprise Canonical."),(0,n.kt)("p",null,"Entre les deux, nous pr\xe9f\xe9rons vous recommander Debian, notamment pour sa stabilit\xe9. Debian est une distribution Linux connue pour faire des mises \xe0 jour de paquets logiciels uniquement lorsqu'ils sont test\xe9s et approuv\xe9s, ce qui garantir que votre serveur sera le plus stable possible."),(0,n.kt)("p",null,"Nous d\xe9conseillons aussi Ubuntu pour plusieurs raisons :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Des mises \xe0 jours de paquets plus fr\xe9quentes que sur Debian, mais moins test\xe9es, et quand m\xeame \xe0 la ramasse par rapport \xe0 Fedora."),(0,n.kt)("li",{parentName:"ul"},"Des mises \xe0 jour de version qui ont tendance \xe0 avoir un probl\xe8me en plein milieu d'une op\xe9ration d\xe9licate, ce qui \xe9quivaut toujours \xe0 au moins une bonne nuit blanche pour r\xe9ussir \xe0 s'en sortir."),(0,n.kt)("li",{parentName:"ul"},"Un catalogue de paquets tr\xe8s proche de ceux de Debian : tout ce que vous installez sur Ubuntu, vous pourrez l'installer sur Debian et vice versa."),(0,n.kt)("li",{parentName:"ul"},"Ubuntu est la seule distribution \xe0 mettre en avant l'utilisation de ",(0,n.kt)("inlineCode",{parentName:"li"},"snap"),", son propre format de paquet qui cohabite avec les traditionels paquets ",(0,n.kt)("inlineCode",{parentName:"li"},".deb")," utilis\xe9s par Debian et tous ses d\xe9riv\xe9s, ce qui peut parfois poser pas mal de souci dans la gestion des logiciels install\xe9s sur le serveur.")))}d.isMDXComponent=!0},6638:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/casaos_home-d8aaebb870f66b38e02de1cafa4655cf.jpg"},603:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/cockpit-417657897387eb0693ad3ee2d193ba4e.webp"},1604:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/yunohost_sso-639580c6a41d91fee2353866ccc964c5.jpg"}}]);