"use strict";(self.webpackChunkcaspardb=self.webpackChunkcaspardb||[]).push([[56],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>v});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(t),m=a,v=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return t?n.createElement(v,l(l({ref:r},p),{},{components:t})):n.createElement(v,l({ref:r},p))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6088:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=t(7462),a=(t(7294),t(3905));const i={title:"Remplacer Netflix",sidebar_label:"Remplacer Netflix",pagination_label:"Remplacer Netflix",description:"Comment remplacer Netflix avec Jellyfin et la stack *arr ?",keywords:["docs","OSINT"]},l=void 0,o={unversionedId:"deploiement/netflix",id:"deploiement/netflix",title:"Remplacer Netflix",description:"Comment remplacer Netflix avec Jellyfin et la stack *arr ?",source:"@site/docs/50-deploiement/01-netflix.md",sourceDirName:"50-deploiement",slug:"/deploiement/netflix",permalink:"/azurwiki/deploiement/netflix",draft:!1,editUrl:"https://github.com/haysberg/azurwiki/tree/main/docs/docs/50-deploiement/01-netflix.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Remplacer Netflix",sidebar_label:"Remplacer Netflix",pagination_label:"Remplacer Netflix",description:"Comment remplacer Netflix avec Jellyfin et la stack *arr ?",keywords:["docs","OSINT"]},sidebar:"tutorialSidebar",previous:{title:"D\xe9ploiement",permalink:"/azurwiki/deploiement/"},next:{title:"D\xe9ployer un serveur Minecraft",permalink:"/azurwiki/deploiement/minecraft"}},u={},s=[{value:"Logiciels",id:"logiciels",level:2},{value:"Mat\xe9riel",id:"mat\xe9riel",level:2},{value:"Disque dur",id:"disque-dur",level:3},{value:"CPU / GPU",id:"cpu--gpu",level:3},{value:"Bande Passante",id:"bande-passante",level:3}],p={toc:s},c="wrapper";function d(e){let{components:r,...i}=e;return(0,a.kt)(c,(0,n.Z)({},p,i,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Une capture d&#39;\xe9cran du logiciel jellyfin",src:t(4333).Z,width:"2557",height:"1279"})),(0,a.kt)("p",null,"Netflix, c'est bien mais c'est cher !"),(0,a.kt)("p",null,"On peut faire beaucoup mieux avec quelques containers et un serveur avec un peu de stockage ! Un serveur o\xf9 l'on pourrait avoir n'importe quelle s\xe9rie, o\xf9 votre maman pourrait demander un film en cliquant sur un bouton et l'avoir quelques minutes plus tard."),(0,a.kt)("h2",{id:"logiciels"},"Logiciels"),(0,a.kt)("h2",{id:"mat\xe9riel"},"Mat\xe9riel"),(0,a.kt)("p",null,"Tout ces logiciels, \xe7a pompe des ressources, alors voil\xe0 ce qu'il va vous falloir pour r\xe9ussir \xe0 h\xe9berger tout \xe7a."),(0,a.kt)("h3",{id:"disque-dur"},"Disque dur"),(0,a.kt)("p",null,"Il va vous falloir un ",(0,a.kt)("strong",{parentName:"p"},"GROS")," disque."),(0,a.kt)("p",null,"Concr\xe8tement, si vous en avez un qui traine et qui ne sers \xe0 rien \xe7a peut d\xe9panner, mais on d\xe9passe assez vite le stade du premier t\xe9raoctet quand on a quelques utilisateurs et qu'ils veulent commencer \xe0 vraiment se passer de Netflix."),(0,a.kt)("p",null,"Perso, nous avons tous un disque dur de + de 10 To et on arrive \xe0 s'en sortir, mais en dessous \xe7a devient compliqu\xe9 et il faudra faire pas mal de m\xe9nage."),(0,a.kt)("p",null,"Cela veut souvent dire remplacer des \xe9pisodes pour des versions + light, quitte \xe0 perdre en qualit\xe9 vid\xe9o, ou pire, supprimer du contenu de votre serveur."),(0,a.kt)("h3",{id:"cpu--gpu"},"CPU / GPU"),(0,a.kt)("p",null,"Le probl\xe8me avec la vid\xe9o, c'est que l'information peut \xeatre encod\xe9e de plein de mani\xe8res diff\xe9rentes : H264, H265, AV1, VP9... "),(0,a.kt)("p",null,"Le plus emb\xeatant, c'est que certaines machines ne parlent pas toutes le m\xeame \"langage\" de codec. C'est \xe0 ce moment-l\xe0 que votre serveur va devoir faire la traduction (transcoding). Le probl\xe8me, c'est qu'on parle de d\xe9coder et r\xe9-encoder une vid\xe9o \xe0 la vol\xe9e, donc \xe7a pompe pas mal de puissance de calcul."),(0,a.kt)("p",null,"Autant vous le dire tout de suite, si vous avez un raspberry Pi, vous pouvez oublier l'id\xe9e de faire du transcoding. Priez pour que vos utilisateurs se connectent depuis des clients compatibles."),(0,a.kt)("p",null,"Pour les autres, un CPU fait tr\xe8s bien l'affaire quand vous avez 3 ou 4 utilisateurs en m\xeame temps sur votre machine. Par contre, vous allez devoir vous pr\xe9parer \xe0 avoir des bruits de jet priv\xe9 \xe9manant de votre serveur \xe0 3H du mat' quand votre pote ch\xf4meur ira se mater GoT en 4K."),(0,a.kt)("p",null,"Si vous voulez avoir un peu plus de jus pour servir plus de clients en simultan\xe9, ou si vous ne voulez plus de bruit de jet priv\xe9 \xe0 3H du mat' il y a une solution simple : incorporer une carte graphique dans votre serveur pour que Jellyfin puisse l'utiliser."),(0,a.kt)("p",null,"Pour avoir plus d'infos sur ce sujet, vous pouvez ",(0,a.kt)("a",{parentName:"p",href:"https://jellyfin.org/docs/general/administration/hardware-acceleration/"},"consulter la doc de Jellyfin"),"."),(0,a.kt)("p",null,"Le choix de la carte graphique importe relativement peu : n'importe quelle carte graphique orient\xe9e gaming sortie dans les 8 derni\xe8res ann\xe9es devrait faire l'affaire, en tout cas bien mieux que votre CPU."),(0,a.kt)("p",null,"La solution la plus utilis\xe9e dans notre groupe est la GTX 1650 Low Profile, une carte graphique qui ne demande pas de changer"),(0,a.kt)("h3",{id:"bande-passante"},"Bande Passante"),(0,a.kt)("p",null,"Tout d\xe9pend le nombre de personnes qui regardent du contenu en m\xeame temps sur votre instance. On vous conseille de tabler sur 10 Mbps par stream. Si jamais vous avez 30 Mbps d'upload avec votre abonnement Internet, vous ne pourrez donc pas envoyer + de 3 streams \xe0 la fois."),(0,a.kt)("p",null,"Du moment que vous avez un minimum d'upload, la question n'est pas de savoir si vous pourrez regarder des films, mais surtout avec combien de personnes vous pourrez partager votre instance."))}d.isMDXComponent=!0},4333:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/jellyfin_screen-b41fa983df622046e80a020edc2b2339.png"}}]);