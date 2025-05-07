This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Comment Rouler le projet

Ouvrir la solution depuis un terminal de commande dans le dossier /backend

rouler la commande "npm start"

ensuite aller dans le dossier /backend depuis un autre terminal

rouler la commande "npm start"

Ouvrir http://localhost:3000 depuis un browser


## Décisions du code

Dans le contexte du devoir, il était plus simple d'utiliser les technologies recommandées. Donc Next.js pour frontend et Node.js pour backend, postgreSQL pour la base de données.

un dossier /common a été créé dans le but de mettre ensemble les interfaces communes entre le frontend et le backend, surtout qu'ils sont les deux en typescript, ce qui facilite la compréhension et la maintenance.

## Points restants à faire

Beaucoup d'améliorations sont possibles, mais voici certains points pertinents à soulever.

# Ajout de sockets
Pour rendre en temps réel les modifications des utilisateurs, il faudrait remplacer certaines routes de post et get par des sockets.
Par exemple, lorsqu'un employé se met actif, sa requete devrait passer par un seocket. Les gestionnaires écouteraient sur ce socket et leur tableau de bord se verrait se mettre à jour en temps réel.

# Gestion de l'authentification
Pour des fins de démo, la fonctionnalité de l'authentification adéquate n'a pas été faite. Un utilisateur et un gestionnaire auraient chacun leur propres interfaces de connexion et les identifiants seraient encryptés dans la bd. Un système de validation de correspondance entre les valeurs entrées et celle dans la bd s'appliquerait. C'est après cette validation que les utilisateurs auraient accès à leur page de visualisation et modification de données.

# Tests unitaires et tests d'intégration
Il n'y a pas de tests pour l'instant dans ce prototype. Il faudrait certainement y ajouter des tests unitaires à la fois pour le front end et back end. Des fichiers .spec peuvent être ajoutés pour ce faire. Y ajouter également le script test dans package.json. Des tests d'intégrations peuvent aussi permettre au client d'avoir l'assurance que les fonctionnalités principales soient accessibles et fonctionnelles.

# Déploiement
Pour l'instant, le déploiement est uniquement en mode dev. Il faudrait permettre à l'application d'être déployée à autre place que dans une machine personnelle. Pour ce faire, l'utilisation de docker, par exemple, serait une solution. Y ajouter un docker-compose et y ajouter les commandes nécessaire au déploiement dans un mode de production.

Évidemment d'autres points pertinents seraient à ajouter, comme l'amélioration de l'interface utilisateur, tests de charge, visualisation des logs sur une interface distante, etc.