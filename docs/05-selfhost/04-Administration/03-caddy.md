---
title: Serveur Web - Caddy
sidebar_label: Reverse Proxy
pagination_label: Serveur Web - Caddy
description: Pourquoi utiliser un reverse proxy et pourquoi Caddy est utile ?
keywords:
  - docs
  - OSINT
---

[Caddy](https://caddyserver.com/) est un serveur web disponible sur toutes les distributions Linux, qui propose plusieurs avantages par rapport à des alternatives comme [Nginx](https://www.nginx.com/) ou [Apache](https://httpd.apache.org/).

## Configuration simple à comprendre

Voilà une configuration tout à fait lambda, que l'on va décortiquer ensemble.
Cette configuration vous permettra de rendre public un dossier sur votre serveur pour pouvoir y télécharger des fichiers, ainsi qu'une instance Portainer que vous pouvez trouver dans la page dédiée à [Docker](./05-docker.md).

*Notez que le fichier de configuration par défaut pour Caddy est dans `/etc/caddy/Caddyfile`.*

```
files.example.net {
        root * /chemin/des/fichiers
        file_server browse
}

portainer.example.net {
        reverse_proxy https://localhost:9443  {
                transport http {
                        tls_insecure_skip_verify
                }
        }
}

```

Dans les fichiers Caddyfile, vous n'avez pas besoin de mentionner l'adresse IP ou le port sur lequel vous allez écouter les requêtes entrantes. À la place, vous pouvez simplement indiquer le nom de domaine (ou le sous-domaine) qui va fournir un service.

Donc au lieu d'avoir un `192.168.1.12:80` on a les mentions de `files.example.net` et de `portainer.example.net`.

- Certicats TLS automatiques
- Redirection HTTPS automatique
- Configuration TLS par défaut solide
- Serveur de fichiers 
- Extensible avec plugins