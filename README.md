# fabmob.io


Le nouveau site Web de la FabMob France.

## Comment modifier le contenu

1) se connecter ou créer un compte github

### Ajouter ou modifier un article de blog

Tout est dans le dossier [`articles`](https://github.com/fabmob/fabmob.io/tree/master/articles). Ce sont des fichiers .md dits "markdown", qui est une alternative 10x plus simple au .doc. Pas de panique, ça s'[apprend en 5 minutes](https://learnxinyminutes.com/docs/fr-fr/markdown-fr/) puis ça se pratique ;). 

▶️ Concrètement : 
- pour créer un fichier, une fois connecté à votre compte github, cliquez sur `Add file` > `Create a new file`, remplissez son nom en haut (par exemple 2019-tu-me-manques.md). 
- pour modifier un fichier, cliquez sur l'icône crayon 🖋 en haut à droite, puis modifiez-le. 

En début de fichier, vous devez respecter un peu de formalisme dans un deuxième format très intéressant et simple qu'on appelle le YAML. Si vous voulez, vous pouvez suivre le tuto ["le YAML pour les nuls"](https://velolib.re/documentation/introduction-yaml). 

```yaml
---
title: Bouger, un phénomène culturel intégral
date: 2000-04-26
image: https://i.imgur.com/OZEwzs5.jpg
categories: 
  - articles
  - innovation
tags: 
  - imaginaire
author: Gabriel Plassat
---

# Mon titre

Blabla

## Mon sous-titre

Blabla2

```

Avec le contenu juste au-dessus (et si possible, un texte un peu plus intéressant de votre création), il vous suffit alors de cliquer tout en bas de la page sur le bouton vert "Commit changes". Vous arrivez sur un écran qui vous permet de visualiser vos changements qui est surtout intéressant quand vous modifiez quelque chose car vous verrez des lignes rouges (supprimées) et des vertes (ajoutées). Cliquez sur "Create pull request". Les membres de l'équipe qui suivent ce site auront une notification et pourrons discuter / valider vos changements. Bravo 👏 !



## Infos techniques 

C'est un site écrit en Javascript/React, comme une `single page application` très simple, sans dépendance à un framework comme create-react-app, Gatsby ou Nextjs. 

> Rappelons-nous les objectifs de ce nouveau site en 2020 : remplacer un Wordpress pas à jour, lent, usine à gaz qui sert surtout pour le blog et comme mauvais site vitrine, pas dispo en https, et qui de toute façons nécessitait régulièrement de faire appel à un développeur.

> Nous avons estimé que les gains du server-side-rendering ne sont aujourd'hui plus aussi important qu'à l'époque. D'après les dernières infos, le moteur de Google (le moteur utilisé en écrasante majorité par les Français) indexe très bien les pages générées côté client, la grosse différence étant le temps de traitement qui peut être allongé de quelques jours, qui ne nous touche ici que très peu.

Le site utilise un mini-moteur de blog intégré, `Article.js`, développé pour github.com/laem/blog pas encore assez complexe pour mériter d'être externalisé dans son propre dépot, qui lit les articles présents dans `articles/xx/x.md`, .md étant le format markdown utilisé notamment ici sur Github, sur pad.fabmob.io (Codimd), ou encore forum.fabmob.io (Discourse).

Du point de vue CSS, on a commencé à styler les éléments HTML "nativement", sur le même principe que l'excellent https://andybrewer.github.io/mvp/, puis à utiliser style-components en mode attribut `css` parce que c'est vraiment pratique pour itérer, avant de construire notre propre bibliothèque de composants.


⚙️ Pour le lancer sur votre machine, installez node, yarn puis faites `yarn && yarn start`. 

