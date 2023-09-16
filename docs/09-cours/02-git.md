---
title: Introduction à Git
sidebar_label: Introduction à Git
pagination_label: Introduction à Git
description: Introduction à Git
keywords:
  - docs
  - devops
  - git
---

Git, c'est **LE** logiciel que vous devez connaitre pour réussir à travailler en équipe. Développeur, DevOps, Ops, tout le monde utilise Git pour la simple et bonne raison qu'il n'existe pas vraiment d'alternatives, Git ayant tout simplement écrasé la concurrence lors de sa sortie.

Vous trouverez bien évidemment plusieurs serveurs Git, dont voici une petite liste non-exhaustive :
- [GitHub](https://github.com/), sur lequel est hébergé ce site d'ailleurs.
- [GitLab](https://gitlab.com/gitlab-org/gitlab), qui propose par ailleurs une instance gratuite, mais avec + de conditions que GitHub.
- [Forgejo](https://forgejo.org/), dont l'instance principale est [codeberg.org](https://codeberg.org/). Forgejo est un logiciel libre, et est très léger ce qui permet de le déployer un peu partout, si vous souhaitez vous passer de GitHub notamment.

Si vous souhaitez rentrer un peu plus dans les différentes commandes disponibles avec `git`, je vous invite à lire [ce tutoriel](https://rogerdudler.github.io/git-guide/index.fr.html) qui est très complet et par lequel beaucoup de devs passent pour apprendre à maîtriser l'outil.

D'ailleurs, si vous voulez faire des trucs un peu tricky, il peut être utile d'avoir un GUI Git sous la main.
Pour GitHub, vous pouvez utiliser [GitHub Desktop](https://desktop.github.com/).

Pour avoir une solution un peu plus puissante, vous pouvez utiliser [GitKraken](https://www.gitkraken.com/).
Au passage, si vous avez un compte [GitHub Students](https://education.github.com/students), GitKraken vous offrira une license Pro.

## Commandes principales de `git`

### Récupérer un projet depuis un dépôt distant

```bash
git clone <repo_url>
```

### Ajouter des fichiers au tracking de Git
```bash
git add <fichiers>
```

:::info
Vous pouvez aussi utiliser des wildcards comme `*` ou `.`.
:::

### Créer une branche
```bash
git checkout -b <nom_branche>
```

### Commit vos changements et les push
```bash
git commit -m "message du commit"
git push
```

### Merge une branche A dans une branche B
```bash
git checkout branche_b
git merge branche_a
```
