---
title: Gestion de containers
sidebar_label: Gestion de containers
pagination_label: Gestion de containers
description: Pourquoi et comment acheter un nom de domaine ?
keywords:
  - docs
  - docker
---

Installer des applications à la main, c'est le piège que font beaucoup de nouveaux administrateurs à la maison. C'est tellement plus rapide pour avoir un service qui tourne sur sa machine sans trop se poser de questions et il n'y a pas besoin d'apprendre une nouvelle techno pour le faire.

Sauf que sur le long terme, faire les mises à jour de son service ou gérer ses services en deux clics fait gagner énormément de temps.

Il est donc **fortement** recommandé que vous appreniez Docker. Certaines solutions sont designées prioritairement pour tourner sous Docker, et vous en passez va devenir de plus en plus compliqué quand vous allez essayer de déployer de plus en plus de services sur votre machine.

# C'est quoi Docker ?

# Portainer : une interface Docker

# Et `docker compose` ?

# Les MAJs Docker avec Watchtower

Fichier `docker compose` pour installer Watchtower sur sa machine :

```yaml
version: "3"
services:
  watchtower:
    container_name: watchtower
    image: containrrr/watchtower
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    restart: unless-stopped
    environment:
      - WATCHTOWER_POLL_INTERVAL=3600 #Pour vérifier les mises à jour à toutes les heures
```