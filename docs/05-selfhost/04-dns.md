---
title: DNS & Registars
sidebar_label: DNS & Registars
pagination_label: DNS & Registars
description: Pourquoi et comment acheter un nom de domaine ?
keywords:
  - docs
  - OSINT
---

Obtenir un nom de domaine va vite être nécessaire, que cela soit en terme de sécurité (il y a besoin d'une entrée DNS pour obtenir un certificat valide pour le HTTPS) ou d'utilisabilité (aucun utilisateur ne se souviendra de votre IP, surtout si elle change).

## Quel registar choisir ?

Pour obtenir un nom de domaine, vous allez devoir passer par un *registar*, autrement dit une entreprise capable d'enregistrer un nom de domaine.

Nous en recommandons deux.

### 🥇 Cloudflare

[Cloudflare](https://www.cloudflare.com/fr-fr/) est un des registars les plus utilisés dans le monde. 
Le nombre de serveurs DNS repliqués un peu partout de Cloudflare permet d'avoir des temps de réponse plus rapides.

De plus, Cloudflare ne gagne pas d'argent sur leur enregistrements DNS ! Le prix demandé est uniquement celui que coûte réellement le nom de domaine (fixé par les îles Tuvalu pour le `.tv` par exemple). Cloudflare ne touche donc aucune marge sur leurs ventes de DNS, et font du chiffre d'affaire sur tous les autres services qu'ils proposent.

*Notez que nous ne recommandons pas les autres produits de Cloudflare.*

### 🥈 OVH

[OVH](https://www.ovhcloud.com/fr/) permet aussi d'acheter des noms de domaine, mais pour plus cher que Cloudflare.

C'est un hébergeur Français qui peut aussi vous faire une ristourne si vous prenez une offre d'hébergement avec un nom de domaine.

## Configurer le changement d'IP automatique

Si vous vivez en France, il y a de fortes chances pour que vous ayez une IP dynamique. C'est un souci si vous avez un nom de domaine. Comment indiquer au serveur DNS que votre IP a changé ?

Pour Cloudflare, vous pouvez utiliser le projet [cloudflare-ddns](https://github.com/timothymiller/cloudflare-ddns) qui vous permettra de mettre à jour votre IP sans souci !

Pour OVH, il est recommandé d'utiliser [ddclient](https://doc.ubuntu-fr.org/ddclient) comme indiqué dans la [documentation d'OVH](https://help.ovhcloud.com/csm/fr-dns-dynhost?id=kb_article_view&sysparm_article=KB0051644).

Avec OVH, votre config devrait ressembler à ça :

```conf
# /etc/ddclient.conf
daemon=2
protocol=dyndns2
use=web, web=checkip.dyndns.com, web-skip='Current IP Address'
server=www.ovh.com
login=votredomaine.tld-user // à modifier 
password=votremotdepasse // à modifier
dyndns.votredomaine.tld // à modifier
```

