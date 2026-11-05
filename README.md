# Carnet d'observation des sols


## Contexte

Cet outil est destiné à l'assistant terrain de la ferme pédagogique afin de consigner les observations de terrain sur les parcelles agricoles. Il permet de saisir la texture du sol, la valeur du pH mesurée et l'état d'humidité observé. L'application affiche la liste structurée des relevés, permet des recherches par point ou parcelle, effectue des tris par pH et produit une synthèse statistique repérant les sols très acides. Le carnet relève des constats objectifs mais ne produit en aucun cas de diagnostic de fertilisation automatique.

## Prérequis et lancement

- Node.js 20 ou plus récent, Git ; aucune bibliothèque à installer.

```bash
git clone https://github.com/VOTRE-COMPTE/brief-3-carnet-sols.git
cd brief-3-carnet-sols
node app.js
npm test
```

Sous PowerShell, si `npm` est bloqué : `npm.cmd test`.

## Fonctionnalités


- *[X]* Données lues et enregistrées dans `donnees/observations.json`
- *[X]* Ajouter une observation, saisies invalides refusées sans arrêter le programme
- *[X]* Lister les observations, message si le carnet est vide
- *[X]* Rechercher par point ou par parcelle ; filtrer par texture
- *[X]* Trier par pH
- *[X]* Synthèse : pH minimum et maximum, nombre par texture, points à discuter (pH < 5,5)
- *[X]* Bonus : supprimer choix 6
- [ ] Bonus : modifier une observation choix 7
- *[X]* Bonus : tri par pH décroissant
- [ ] Bonus : texture la plus fréquente

## Données

Les données sont stockées au format JSON dans donnees/observations.json. Le fichier initial contient 10 observations fictives composées des propriétés id, parcelle, texture, pH (valeur sans unité) et etatHumidite.

## Limites

- Le carnet repère les valeurs de pH inférieures à 5,5 pour alimenter la discussion mais ne produit aucun conseil ni diagnostic de fertilisation.
- Aucune moyenne mathématique de pH n'est calculée car son échelle est logarithmique.
- Les textures et états d'humidité sont limités aux classes d'exercice définies par le protocole agronomique.

## Documents

[Dictionnaire des données](docs/dictionnaire-donnees.md) · [Tâches](docs/taches.md) · [Relevé des tests](docs/releve-tests.md) · [Journal de recherche](docs/journal-recherche.md) · [Fiche agronomique](docs/fiche-agronomique.md) · [Fiche individuelle](docs/fiche-individuelle.md)

## Auteur

Ebey Jean-Marie Michel DADIE, github.com/jeanmarie10 

**Entraide** :

Ruth TOMEDE (sur le code)

Marius SANOGO (sur l'explication de certains fonctions)

Konan ASSIE (au niveau du compte github et du code)

Marc LIADE (sur le fichier app.js)
