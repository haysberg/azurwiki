---
title: Self-Hosting, kécécé ?
authors:
    - Téo Haÿs
date: 2023-05-17
---

Le self-hosting est la pratique d'avoir un serveur chez soi, et d'héberger ses services soit-même. Les services que l'on peut héberger soit-même sont très nombreux, mais nous essaierons de faire une liste de ceux que nous avons déjà utilisés afin que vous puissiez découvrir une petite partie de ce que vous avez à y gagner.

---

## Pourquoi faire du self-hosting ?

Les motivations principales pour faire du self-hosting sont généralement les suivantes :

- Avoir accès à des services qui offrent de meilleures fonctionnalités que des alternatives propriétaires / dans le cloud. Par exemple, ne pas avoir de limitations de stockage.
- Avoir le contrôle total de ses données personelles. Par exemple, pour stocker des données privées, comme des photos de famille ou les stats de votre sommeil.
- Pouvoir configurer l'infrastructure pour faire ce que l'on veut : des notifications sur Discord ou par mail pour un évènement sur le serveur, des statistiques sur tout et n'importe quoi... et on est pas censé le dire ici, mais aussi des choses pas très légales qui vous vaudraient d'être bannis de certains services.
- Pour apprendre à administrer un serveur ! Il est beaucoup moins grave de devoir reboot un serveur personnel qu'un serveur en production...

---

## Pré-requis

Pour pouvoir utiliser votre propre serveur à la maison, il vous faudra :

- :computer: **Un serveur** : Vous pouvez utiliser un ancien ordinateur (même si il a 15 ans), un Raspberry Pi (ou un clone). Du moment que vous avez une prise Ethernet, une sortie vidéo et de quoi brancher un écran, ça devrait plus ou moins suffire selon vos besoins.

- :muscle: **De la motivation** : Si vous n'y connaissez rien, prenez votre temps. Rome ne s'est pas construite en un jour ! Une fois que vous y serez, vous pourrez être fier du travail accompli.

- :globe_with_meridians: **Une connexion Internet** : Bien qu'il soit possible d'avoir accès à un serveur depuis Internet si celui-ci tourne derrière une box ADSL, beaucoup de services nécessite d'avoir plus de 6 Mbps de bande passante à disposition, il est donc fortement recommandé d'être **fibré**.


!!! warning

    Il est important de noter que nous aurons besoin d'une connexion et d'un routeur capable de faire du **port-forwarding**.
    
    Les routeurs 4G / 5G / StarLink n'étant pas capable de cela, vous ne pourrez pas avoir un serveur joignable via Internet, mais il pourra toujours être disponible sur votre réseau local.