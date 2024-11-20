Manipulation du DOM et Local Storage
Ce projet illustre l'utilisation du Local Storage et de la manipulation d'éléments HTML via JavaScript. Il propose une interface où l'utilisateur peut interagir avec une liste de couleurs, modifier dynamiquement le style d'un élément et enregistrer ses préférences dans le navigateur.

Fonctionnalités
🎨 Changer dynamiquement le fond d'un élément :
Cliquez sur un élément de la liste pour changer la couleur d'un div.
💾 Persistance des données avec Local Storage :
La couleur sélectionnée est sauvegardée dans le Local Storage et restaurée au prochain chargement de la page.
⚡ Interactivité fluide :
Effet de survol sur les éléments.
Indicateur visuel de l'élément actif.
Structure du projet
Fichiers inclus :
index.html :
Contient la structure HTML de la page.
Inclut les styles inline pour un rendu esthétique simple.
storage2.js :
Contient le script JavaScript pour :
Gérer les interactions utilisateur.
Manipuler les éléments DOM.
Gérer le stockage et la récupération des données dans le Local Storage.
README.md :
Documentation du projet.
Détails des fichiers :
HTML
Une liste <ul> avec 4 <li> représentant des couleurs.
Un div .experiment qui change de couleur en fonction des interactions utilisateur.
JavaScript
Utilisation de querySelectorAll pour sélectionner tous les <li>.
Écouteurs d'événements click pour détecter les interactions utilisateur.
Gestion des données avec Local Storage pour stocker et restaurer les préférences utilisateur.
CSS intégré dans HTML
Responsabilité visuelle des éléments.
Style pour les états actifs et survolés.
Démonstration
Fonctionnement :
La page charge la dernière couleur sélectionnée (si elle existe dans le Local Storage).
Lorsqu’un utilisateur clique sur une couleur :
La couleur du div .experiment change instantanément.
L’état actif est visuellement mis en évidence.
La couleur est sauvegardée pour être restaurée au rechargement de la page.
Exemple visuel :
Liste de couleurs en forme de carrés.
Div qui reflète la couleur sélectionnée.
Améliorations possibles
Ajouter plus de couleurs.
Ajouter une animation lors du changement de couleur.
Offrir la possibilité de réinitialiser les préférences de couleur.
Auteur
Hanane Oubaha
Développeuse passionnée par la création de projets interactifs avec JavaScript.
Licence
Ce projet est sous licence MIT - consultez le fichier LICENSE pour plus de détails.