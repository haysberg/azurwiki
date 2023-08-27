"use strict";(self.webpackChunkcaspardb=self.webpackChunkcaspardb||[]).push([[197],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3496:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={title:"Caddy",sidebar_label:"Serveur Web - Caddy",pagination_label:"Serveur Web - Caddy",description:"Pourquoi utiliser un reverse proxy et pourquoi Caddy est utile ?",keywords:["docs","OSINT"]},o=void 0,s={unversionedId:"selfhost/caddy",id:"selfhost/caddy",title:"Caddy",description:"Pourquoi utiliser un reverse proxy et pourquoi Caddy est utile ?",source:"@site/docs/40-selfhost/05-caddy.md",sourceDirName:"40-selfhost",slug:"/selfhost/caddy",permalink:"/random-veille/selfhost/caddy",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/40-selfhost/05-caddy.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Caddy",sidebar_label:"Serveur Web - Caddy",pagination_label:"Serveur Web - Caddy",description:"Pourquoi utiliser un reverse proxy et pourquoi Caddy est utile ?",keywords:["docs","OSINT"]},sidebar:"tutorialSidebar",previous:{title:"DNS & Registars",permalink:"/random-veille/selfhost/dns"},next:{title:"S\xe9curiser son infra",permalink:"/random-veille/selfhost/securite"}},l={},u=[],p={toc:u},c="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://caddyserver.com/"},"Caddy")," est un serveur web disponible sur toutes les distributions Linux, qui propose plusieurs avantages par rapport \xe0 des alternatives comme ",(0,a.kt)("a",{parentName:"p",href:"https://www.nginx.com/"},"Nginx")," ou ",(0,a.kt)("a",{parentName:"p",href:"https://httpd.apache.org/"},"Apache"),"."),(0,a.kt)("p",null,"Voil\xe0 une configuration tout \xe0 fait lambda, que l'on va d\xe9cortiquer ensemble.\nCette configuration vous permettra de rendre public un dossier sur votre serveur pour pouvoir y t\xe9l\xe9charger des fichiers, ainsi qu'une instance Portainer que vous pouvez trouver dans la page d\xe9di\xe9e \xe0 ",(0,a.kt)("a",{parentName:"p",href:"/random-veille/selfhost/docker"},"Docker"),"."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Notez que le fichier de configuration par d\xe9faut pour Caddy est dans ",(0,a.kt)("inlineCode",{parentName:"em"},"/etc/caddy/Caddyfile"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"files.example.net {\n        root * /chemin/des/fichiers\n        file_server browse\n}\n\nportainer.example.net {\n        reverse_proxy https://localhost:9443  {\n                transport http {\n                        tls_insecure_skip_verify\n                }\n        }\n}\n")),(0,a.kt)("p",null,"Dans les fichiers Caddyfile, vous n'avez pas besoin de mentionner l'adresse IP ou le port sur lequel vous allez \xe9couter les requ\xeates entrantes. \xc0 la place, vous pouvez simplement indiquer le nom de domaine (ou le sous-domaine) qui va fournir un service."),(0,a.kt)("p",null,"Donc au lieu d'avoir un ",(0,a.kt)("inlineCode",{parentName:"p"},"192.168.1.12:80")," on a les mentions de ",(0,a.kt)("inlineCode",{parentName:"p"},"files.example.net")," et de ",(0,a.kt)("inlineCode",{parentName:"p"},"portainer.example.net"),"."),(0,a.kt)("p",null,"Faire \xe7a nous permet d'aller chercher un certificat TLS automatiquement, avec toute la configuration qui va bien :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Uniquement TLS 1.2 & 1.3"),(0,a.kt)("li",{parentName:"ul"},"Certificat valide"),(0,a.kt)("li",{parentName:"ul"},"Redirection HTTPS automatique")),(0,a.kt)("p",null,"Cette configuration nous permet d'atteindre la note de A sur ",(0,a.kt)("a",{parentName:"p",href:"https://www.ssllabs.com/ssltest/index.html"},"SSL Labs")," :"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"R\xe9sultat SSL Labs avec Caddy",src:r(4075).Z,width:"769",height:"226"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"root * /chemin/des/fichiers\n        file_server browse\n")),(0,a.kt)("p",null,"Cette partie de la configuration nous permet de cr\xe9er un explorateur de fichiers interactif dans le dossier que l'on a indiqu\xe9. Il est important de noter que sans le mot-cl\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},"browse")," le serveur pourra servir les fichiers mais sans l'explorateur, ce qui est int\xe9ressant si vous souhaitez servir un site static avec un ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," par exemple."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"reverse_proxy https://localhost:9443  {\n                transport http {\n                        tls_insecure_skip_verify\n                }\n        }\n")),(0,a.kt)("p",null,"Cette deuxi\xe8me partie se connecte \xe0 notre container ",(0,a.kt)("inlineCode",{parentName:"p"},"portainer")," qui tourne en \xe9coutant sur le port 9443. En ajoutant la partie ",(0,a.kt)("inlineCode",{parentName:"p"},"transport http")," on peut ignorer le fait que le certificat TLS du backend soit un certificat auto-sign\xe9."),(0,a.kt)("p",null,"Gr\xe2ce \xe0 cette configuration, notre serveur affichera deux pages compl\xe8tement diff\xe9rentes alors que les deux services sont h\xe9berg\xe9s physiquement sur la m\xeame machine ! Pratique non ?"))}d.isMDXComponent=!0},4075:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ssllabs-f0e5e6bbf377ed6fb7e7f949cc684606.png"}}]);