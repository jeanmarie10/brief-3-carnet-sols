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

✏️ *Cochez seulement ce qui marche : `- [x]`.*

- [ ] Données lues et enregistrées dans `donnees/observations.json`
- [ ] Ajouter une observation, saisies invalides refusées sans arrêter le programme
- [ ] Lister les observations, message si le carnet est vide
- [ ] Rechercher par point ou par parcelle ; filtrer par texture
- [ ] Trier par pH
- [ ] Synthèse : pH minimum et maximum, nombre par texture, points à discuter (pH < 5,5)
- [ ] Bonus : supprimer et modifier une observation (choix 6 et 7)
- [ ] Bonus : tri par pH décroissant, texture la plus fréquente

## Données

✏️ *Le fichier, le nombre d'observations, les champs (voir [docs/dictionnaire-donnees.md](docs/dictionnaire-donnees.md)), le pH sans unité. Rappelez qu'elles sont fictives.*

## Limites

✏️ *Au moins trois. Par exemple : le carnet repère des valeurs à discuter, mais ne produit aucun diagnostic de fertilisation.*

## Documents

[Dictionnaire des données](docs/dictionnaire-donnees.md) · [Tâches](docs/taches.md) · [Relevé des tests](docs/releve-tests.md) · [Journal de recherche](docs/journal-recherche.md) · [Fiche agronomique](docs/fiche-agronomique.md) · [Fiche individuelle](docs/fiche-individuelle.md)

## Auteur

✏️ *Prénom NOM, compte GitHub. Entraide : avec qui, sur quoi.*
