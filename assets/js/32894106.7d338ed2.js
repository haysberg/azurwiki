"use strict";(self.webpackChunkcaspardb=self.webpackChunkcaspardb||[]).push([[945],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,k=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(k,s(s({ref:t},c),{},{components:r})):n.createElement(k,s({ref:t},c))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2921:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={title:"Docker & containers",sidebar_label:"Docker & containers",pagination_label:"Docker & containers",description:"Pourquoi et comment acheter un nom de domaine ?",keywords:["docs","docker"]},s=void 0,i={unversionedId:"selfhost/docker",id:"selfhost/docker",title:"Docker & containers",description:"Pourquoi et comment acheter un nom de domaine ?",source:"@site/docs/40-selfhost/07-docker.md",sourceDirName:"40-selfhost",slug:"/selfhost/docker",permalink:"/random-veille/selfhost/docker",draft:!1,editUrl:"https://github.com/haysberg/random-veille/tree/main/docs/docs/40-selfhost/07-docker.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Docker & containers",sidebar_label:"Docker & containers",pagination_label:"Docker & containers",description:"Pourquoi et comment acheter un nom de domaine ?",keywords:["docs","docker"]},sidebar:"tutorialSidebar",previous:{title:"S\xe9curiser son infra",permalink:"/random-veille/selfhost/securite"},next:{title:"D\xe9ploiement",permalink:"/random-veille/deploiement/"}},l={},u=[{value:"C&#39;est quoi Docker ?",id:"cest-quoi-docker-",level:2},{value:"Portainer : une interface Web pour Docker",id:"portainer--une-interface-web-pour-docker",level:2},{value:"Et <code>docker compose</code> ?",id:"et-docker-compose-",level:2},{value:"Les MAJs Docker avec Watchtower",id:"les-majs-docker-avec-watchtower",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Installer des applications \xe0 la main, c'est le pi\xe8ge que font beaucoup de nouveaux administrateurs \xe0 la maison. C'est tellement plus rapide pour avoir un service qui tourne sur sa machine sans trop se poser de questions et il n'y a pas besoin d'apprendre une nouvelle techno pour le faire."),(0,o.kt)("p",null,"Sauf que sur le long terme, faire les mises \xe0 jour de son service ou g\xe9rer ses services en deux clics fait gagner \xe9norm\xe9ment de temps."),(0,o.kt)("p",null,"Il est donc ",(0,o.kt)("strong",{parentName:"p"},"fortement")," recommand\xe9 que vous appreniez Docker. Certaines solutions sont design\xe9es prioritairement pour tourner sous Docker, et vous en passez va devenir de plus en plus compliqu\xe9 quand vous allez essayer de d\xe9ployer de plus en plus de services sur votre machine."),(0,o.kt)("p",null,"Au passage, si vous souhaitez d\xe9ployer un service sur votre serveur, prenez le temps de voir si il est support\xe9 par ",(0,o.kt)("a",{parentName:"p",href:"https://fleet.linuxserver.io/"},"Linuxserver.io")," qui maintient des images Docker pour \xe9norm\xe9ment de projets !"),(0,o.kt)("h2",{id:"cest-quoi-docker-"},"C'est quoi Docker ?"),(0,o.kt)("p",null,"Docker, \xe7a permet d'encapsuler une application avec toutes ses d\xe9pendances :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Le syst\xe8me d'exploitation "),(0,o.kt)("li",{parentName:"ul"},"Les paquets n\xe9cessaires"),(0,o.kt)("li",{parentName:"ul"},"L'application en elle-m\xeame")),(0,o.kt)("p",null,"L'avantage, c'est que c'est beaucoup + light que d'utiliser des machines virtuelles, tout en \xe9tant extra flexible."),(0,o.kt)("p",null,"Cela arrange aussi \xe9norm\xe9ment les d\xe9veloppeurs de services qui peuvent fournir un seul paquet Docker et \xeatre s\xfbrs qu'il tournera sans probl\xe8me peut importe l'OS qui fait tourner le container. C'est d'ailleurs pour cela qu'il est pr\xe9f\xe9rable que vous utilisiez Docker : car c'est le format qui re\xe7oit le plus d'attention de la part des d\xe9veloppeurs la plupart du temps."),(0,o.kt)("h2",{id:"portainer--une-interface-web-pour-docker"},"Portainer : une interface Web pour Docker"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.portainer.io/"},"Portainer")," est une interface Web qui permet de g\xe9rer ses containers et ses stacks faites avec ",(0,o.kt)("inlineCode",{parentName:"p"},"docker compose")," facilement, ce qui aide \xe9norm\xe9ment quand il faut d\xe9ployer des services."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"L&#39;interface Web de Portainer",src:r(8219).Z,width:"2554",height:"1291"})),(0,o.kt)("p",null,"Pour l'installer, vous pouvez utiliser la commande ci-dessous."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker volume create portainer_data\ndocker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest\n")),(0,o.kt)("h2",{id:"et-docker-compose-"},"Et ",(0,o.kt)("inlineCode",{parentName:"h2"},"docker compose")," ?"),(0,o.kt)("p",null,"Concr\xe8tement, ",(0,o.kt)("inlineCode",{parentName:"p"},"docker compose")," permet deux choses :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sauvegarder une longue commande Docker"),(0,o.kt)("li",{parentName:"ul"},"D\xe9ployer plusieurs containers qui partagent le m\xeame r\xe9seau virtuel")),(0,o.kt)("p",null,"Par exemple, ce fichier YAML permet de faire tourner une application NodeJS avec la base de donn\xe9es MongoDB n\xe9cessaire : "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3'\nservices:\n  app:\n    image: node:latest\n    container_name: app_main\n    restart: always\n    command: sh -c \"yarn install && yarn start\"\n    ports:\n      - 8000:8000\n    working_dir: /app\n    volumes:\n      - ./:/app\n    environment:\n      MYSQL_HOST: localhost\n      MYSQL_USER: root\n      MYSQL_PASSWORD: \n      MYSQL_DB: test\n  mongo:\n    image: mongo\n    container_name: app_mongo\n    restart: always\n    ports:\n      - 27017:27017\n    volumes:\n      - ~/mongo:/data/db\nvolumes:\n  mongodb:\n")),(0,o.kt)("h2",{id:"les-majs-docker-avec-watchtower"},"Les MAJs Docker avec Watchtower"),(0,o.kt)("p",null,"Watchtower est un outil permettant de mettre \xe0 jour automatiquement vos containers Docker. Le syst\xe8me de tag de Docker est pratique, mais uniquement si vous utilisez des mises \xe0 jours automatiques."),(0,o.kt)("p",null,"Par exemple, un container qui utilise le tag ",(0,o.kt)("inlineCode",{parentName:"p"},"latest")," ne sera pas mis \xe0 jour automatiquement pour correspondre \xe0 la derni\xe8re version en date."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Cela vaut aussi pour les autres tags, pas uniquement ",(0,o.kt)("inlineCode",{parentName:"p"},"latest"),".")),(0,o.kt)("p",null,"Vous t\xe9l\xe9chargez le container une fois et le d\xe9ployez, mais si une nouvelle version sort pour corriger une faille de s\xe9curit\xe9 majeure, vous devrez tout faire vous m\xeame, et \xe7a peut devenir compliqu\xe9 quand vous avez plusieurs dizaines de containers qui tournent sur votre machine."),(0,o.kt)("p",null,"Watchtower nous permet de r\xe9gler le probl\xe8me et de mettre \xe0 jour tous nos containers en un claquement de doigts. Il suffit juste de l'installer avec le fichier ",(0,o.kt)("inlineCode",{parentName:"p"},"docker compose")," suivant :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nservices:\n  watchtower:\n    container_name: watchtower\n    image: containrrr/watchtower\n    volumes:\n      - /var/run/docker.sock:/var/run/docker.sock\n    restart: unless-stopped\n    environment:\n      - WATCHTOWER_POLL_INTERVAL=3600 #Pour v\xe9rifier les mises \xe0 jour \xe0 toutes les heures\n')))}d.isMDXComponent=!0},8219:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/portainer-5ee6c273ee183c27888260edf5e796b5.png"}}]);