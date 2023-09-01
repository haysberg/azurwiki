---
title: Sécuriser son infra
sidebar_label: Sécuriser son infra
pagination_label: Sécuriser son infra
description: Pourquoi et comment sécuriser son infra ?
keywords:
  - docs
  - OSINT
---

On ne le dira jamais assez, mais **la sécurité c'est important !**

Si vous ne respectez pas certaines règles basiques votre serveur sera à la merci de n'importe qui qui trouvera votre IP (_spoiler_ : ça n'est pas très compliqué).

Voilà quelques règles assez simples que vous pouvez suivre pour sécuriser l'accès à votre infra.

## 🧑 Profils utilisateurs

Vous entendrez souvent dire qu'il faut absolument créer un utilisateur "normal" non privilégié pour ne pas faire toutes les opérations en tant que `root`. Cela n'est pas nécessaire.

On entends surtout deux justifications pour la création d'un utilisateur normal :

**🗨️ "Si tu te fais hacker le hacker ne pourra pas faire beaucoup de dégats !"**

C'est faux. Même sans être administrateur, un hacker qui prendrait le contrôle d'un compte utilisateur pourra tout de même supprimer l'intégralité des documents de cet utilisateur.

De plus, la plupart des services qui sont fait pour tourner sur le réseau (LDAP, Serveur Web, etc...) ne tournent pas avec votre utilisateur ou avec `root`, mais avec un utilisateur dédié qui possède des droits limités, au cas où?

On notera au passage que si l'utilisateur possède les droits `sudo` il peut faire ce qu'il veut en tant que `root`. C'est d'ailleurs une des premières vérifications que fera un attaquant pour effectuer une élévation de privilèges. _Pourquoi chercher une faille quand on peut juste rajouter 4 lettres devant une commande ?_

**🗨️ "Si tu fais la mauvaise commande tu peux détruire ta machine !"**

C'est plus ou moins vrai. L'habitude d'utiliser `sudo` devant chaque commande d'administration arrivera à un moment ou à un autre.

Ce qu'il faut comprendre ici, c'est qu'être `root` ou faire partie du groupe `sudoers` revient quasiment au même.

Il est inutile voire même dangeureux de se protéger derrière `sudo`. Un faux sens de sécurité s'installe et _hop_, avant qu'on s'en soit rendu compte on mine du Bitcoin sur le serveur du salon.

## 🔐 Utilisez un bon mot de passe / Désactivez-le

Si vous voulez utiliser un mot de passe pour vous connecter à votre serveur, **choisissez un mot de passe très long**.

Que cela soit une phrase de passe d'au moins 25 caractères mélangeant minuscules, majuscules, chiffres et symboles ou bien un mot de passe que vous pourrez sauvegarder dans Bitwarden, vous ne pouvez pas vous permettre d'avoir un mot de passe de 5 caractères !

Pour éviter d'avoir à le retaper plusieurs fois, il est recommandé d'utiliser des clés SSH.

Pour désactiver la connexion SSH sur `sshd` vous pouvez modifier les deux paramètres suivants dans `/etc/ssh/sshd_config` :

```
PasswordAuthentication no
PubkeyAuthentication yes
```

## 🗝️ Clés SSH

Une clé SSH, c'est un autre moyen de vous authentifier ! Cela permet notamment de remplacer votre mot de passe, surtout si il est très long.

Pour générer une clé, vous pouvez taper la commande suivante sous Linux et MacOS :

```bash
ssh-keygen -t ed25519 -C "ton_email@example.com"
```

:::caution

Vous verrez parfois des tutoriels en ligne qui utilisent l'algorithme RSA et pas l'Ed25519. Si vous n'utilisez pas de systèmes anciens qui ne fonctionnent qu'avec des clés RSA, préférez toujours l'ED25519.
:::

Si vous avez un souci avec la génération de votre clé, on vous conseille le [tutoriel de GitHub](https://docs.github.com/fr/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) pour générer une clé SSH.

## 🧱 Pare-feu

[Fedora](https://fedoraproject.org/fr/) fournit par défaut [Cockpit](https://cockpit-project.org/) qui permet d'éditer les règles de votre pare-feu facilement.

Si votre box n'est pas configurée en mode DMZ, elle _devrait_ bloquer tous les ports qui ne sont pas explicitement ouverts.

Il faut absolument bloquer tous les ports si vous n'avez pas besoin qu'ils soient joignables depuis l'extérieur. Il suffit d'un service vulnérable sur le réseau pour que votre instance soit compromise.

Il est important de noter que certains distributions Linux gardent les ports ouverts sur le réseau ! Pensez donc à bien vérifier quels ports sont ouverts sur votre machine.

:::danger Le port SSH
Pensez à garder le port 22 ouvert ! Vous aurez besoin d'accéder à votre serveur. Un port 22 fermé va vous forcer à aller vous connecter à votre terminal local avec un clavier et un écran. Pas très pratique quand le serveur est dans un placard sous la télé.
:::

## 📥 Mises à jour

Il est vital de faire vos mises à jour régulièrement !

Les mises à jour sous Linux ne ralentissent pas votre machine et permettent de régler d'important problèmes de sécurité.

Sous Debian, vous pouvez utiliser [unattended-upgrade](https://wiki.debian.org/fr/unattended-upgrades) et sous Fedora vous pouvez configurer les mises à jour automatiques dans la catégorie "Mises à jour de logiciel" dans Cockpit.

:::info
Il est important de redémarrer le serveur après les mises à jour pour qu'elles soient réellement utilisées.
:::

### 🐳 Mettre à jour ses containers

Pour mettre à jour vos containers Docker automatiquement, on vous conseille d'utiliser [Watchtower](https://containrrr.dev/watchtower/) qui permet de mettre à jour des containers automatiquement dès qu'une nouvelle version est dispo.

Pour plus d'infos, allez donc voir la page dédiée à l'[administration Docker](./07-docker.md) !
