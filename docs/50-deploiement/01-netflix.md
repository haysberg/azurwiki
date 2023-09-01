---
title: Remplacer Netflix
sidebar_label: Remplacer Netflix
pagination_label: Remplacer Netflix
description: Comment remplacer Netflix avec Jellyfin et la stack *arr ?
keywords:
  - docs
  - OSINT
---

![Une capture d'écran du logiciel jellyfin](images/jellyfin_screen.png)

Netflix, c'est bien mais c'est cher !

On peut faire beaucoup mieux avec quelques containers et un serveur avec un peu de stockage ! Un serveur où l'on pourrait avoir n'importe quelle série, où votre maman pourrait demander un film en cliquant sur un bouton et l'avoir quelques minutes plus tard.

## Logiciels

## Matériel

Tout ces logiciels, ça pompe des ressources, alors voilà ce qu'il va vous falloir pour réussir à héberger tout ça.

### Disque dur

Il va vous falloir un **GROS** disque.

Concrètement, si vous en avez un qui traine et qui ne sers à rien ça peut dépanner, mais on dépasse assez vite le stade du premier téraoctet quand on a quelques utilisateurs et qu'ils veulent commencer à vraiment se passer de Netflix.

Perso, nous avons tous un disque dur de + de 10 To et on arrive à s'en sortir, mais en dessous ça devient compliqué et il faudra faire pas mal de ménage.

Cela veut souvent dire remplacer des épisodes pour des versions + light, quitte à perdre en qualité vidéo, ou pire, supprimer du contenu de votre serveur.

### CPU / GPU

Le problème avec la vidéo, c'est que l'information peut être encodée de plein de manières différentes : H264, H265, AV1, VP9...

Le plus embêtant, c'est que certaines machines ne parlent pas toutes le même "langage" de codec. C'est à ce moment-là que votre serveur va devoir faire la traduction (transcoding). Le problème, c'est qu'on parle de décoder et ré-encoder une vidéo à la volée, donc ça pompe pas mal de puissance de calcul.

Autant vous le dire tout de suite, si vous avez un raspberry Pi, vous pouvez oublier l'idée de faire du transcoding. Priez pour que vos utilisateurs se connectent depuis des clients compatibles.

Pour les autres, un CPU fait très bien l'affaire quand vous avez 3 ou 4 utilisateurs en même temps sur votre machine. Par contre, vous allez devoir vous préparer à avoir des bruits de jet privé émanant de votre serveur à 3H du mat' quand votre pote chômeur ira se mater GoT en 4K.

Si vous voulez avoir un peu plus de jus pour servir plus de clients en simultané, ou si vous ne voulez plus de bruit de jet privé à 3H du mat' il y a une solution simple : incorporer une carte graphique dans votre serveur pour que Jellyfin puisse l'utiliser.

Pour avoir plus d'infos sur ce sujet, vous pouvez [consulter la doc de Jellyfin](https://jellyfin.org/docs/general/administration/hardware-acceleration/).

Le choix de la carte graphique importe relativement peu : n'importe quelle carte graphique orientée gaming sortie dans les 8 dernières années devrait faire l'affaire, en tout cas bien mieux que votre CPU.

La solution la plus utilisée dans notre groupe est la GTX 1650 Low Profile, une carte graphique qui ne demande pas de changer

### Bande Passante

Tout dépend le nombre de personnes qui regardent du contenu en même temps sur votre instance. On vous conseille de tabler sur 10 Mbps par stream. Si jamais vous avez 30 Mbps d'upload avec votre abonnement Internet, vous ne pourrez donc pas envoyer + de 3 streams à la fois.

Du moment que vous avez un minimum d'upload, la question n'est pas de savoir si vous pourrez regarder des films, mais surtout avec combien de personnes vous pourrez partager votre instance.
