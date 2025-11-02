---
title: Server Side Template Injection (SSTI) Flask
sidebar_label: SSTI
pagination_label: SSTI Flask
description: SSTI Flask
keywords:
  - docs
  - injection
  - SSTI
  - Red Team
  - Flask
  - Python
  - Web
---

## Qu'est ce qu'une injection via template ?

### Introduction

L'attaque par Server Side Template Injection, communément appelée SSTI, est une attaque qui est pratiquée sur des applications web utilisant des moteurs de templates côté serveur. Elle permet à un attaquant d'injecter du code malveillant dans les templates utilisés par l'application, ce qui peut conduire à l'exécution de code arbitraire sur le serveur.

Il existe plusieurs moteurs de templates populaires, tels que Jinja2 pour Python (utilisé par Flask), Twig pour PHP, et EJS pour Node.js. Chaque moteur de template a ses propres vulnérabilités potentielles, mais le principe général de l'attaque SSTI reste le même.

Ici nous allons nous concentrer sur Flask et son moteur de template Jinja2.

### Mais d'où vient cette vulnérabilité ?

La vulnérabilité survient quand les données que fournit l'utilisateur sont directement évaluées par le moteur de template sans aucune validation ou assainissement. Regardons un exemple simple en Flask :

```python
@app.route('/')
def index():
    name = request.args.get('name', 'World')
    template = f"<h1>Bonjour, {name} !</h1>"
    return render_template_string(template)
```

Ce template est vulnérable car le développeur injecte directement dans le template la variable `name` qui provient de l'utilisateur. Un attaquant pourrait exploiter cette vulnérabilité en fournissant une valeur malveillante pour `name`.

Bien souvent l'utilisateur ne voit pas le code côté serveur, nous allons donc tester des payloads simples pour voir si le serveur est vulnérable à ce genre de faille.

### Payload simple

Voici un payload simple pour tester la vulnérabilité :

```
{{7*7}}
```

Si le serveur est vulnérable, il renverra `49` dans la réponse HTTP. Sinon, il affichera simplement `{{7*7}}`.

### Exploitation avancée

Une fois que nous avons confirmé que le serveur est vulnérable, nous pouvons exploiter la faille. Nous avons accès au langage Python, ce qui va nous permettre d'exécuter des commandes système.
Dans la commande si dessous, nous utilisons la fonction `__import__` pour importer le module `os`, puis nous utilisons `popen` pour exécuter des commandes linux.
Voici un exemple de payload pour lister les fichiers du répertoire courant :

```
{{ self.__init__.__globals__.__builtins__.__import__('os').popen('ls').read() }}
```

### Remédiation et conclusion

Voici un code permettant de se protéger contre les attaques SSTI en Flask :

```python
@app.route('/safe')
def safe():
    user_input = request.args.get('name', 'invité')
    template = """
    <h1>Bonjour, {{ name }}</h1>
    <p>Votre entrée sécurisée : {{ name }}</p>
    """
    return render_template_string(template, name=user_input)
```

Nous utilisons des variables pour passer les données utilisateur au template, ce qui empêche l'injection de payload.

En conclusion, les attaques SSTI sont une porte d'entrée des applications web utilisant des moteurs de templates. Cette faille ressemble grandement à des failles de type injection et il est crucial de ne jamais faire confiance aux entrées utilisateur. Toujours valider les données avant de les utiliser dans des templates.
