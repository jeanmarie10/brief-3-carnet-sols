# Relevé des tests

> Écrivez le résultat attendu avant d'essayer. Un écart n'est pas une faute : notez-le, corrigez, refaites le test.

## Calculs à la main

D'après le fichier de départ `donnees/observations.json` (10 observations : S01 à S10) :

- **Nombre d'observations** : 10
- **pH minimum et maximum** :
  - Valeurs listées : 5.2, 6.1, 6.8, 4.8, 7.2, 5.4, 6.3, 7.6, 5.1, 6.5
  - Minimum : **4.8** (point `S04`)
  - Maximum : **7.6** (point `S08`)
- **Comptage par texture** :
  - `sableux` : 3 (`S01`, `S04`, `S08`)
  - `limoneux` : 4 (`S02`, `S05`, `S07`, `S10`)
  - `argileux` : 3 (`S03`, `S06`, `S09`)
- **Points à discuter (seuil : pH < 5,5 strict)** :
  - **4 points** : `S01` (5.2), `S04` (4.8), `S06` (5.4), `S09` (5.1).
  - Un point avec un pH de 5.5 exact n'est pas retenu.
- **Tri par pH croissant** :
  - Ordre : `S04` (4.8), `S09` (5.1), `S01` (5.2), `S06` (5.4), `S02` (6.1), `S07` (6.3), `S10` (6.5), `S03` (6.8), `S05` (7.2), `S08` (7.6).


**Essais dans le menu** : un ajout valide (encore là après redémarrage), chaque règle refusée, une recherche introuvable, chaque tri, la synthèse, un choix inconnu.

| Action | Attendu | Obtenu | Testeur |
| --- | --- | --- | --- |
| Lancer node app.js | Accueil, `10 observation(s) chargée(s) depuis donnees/observations.json.`, puis le menu | Conforme au resultat attendu | zie marius sanogo |
| Choix 2 (lister) | Les 10 observations, une par ligne, format `S01 \| P1 \| sableux \| pH 5.2 \| sec` |Conforme au resultat attendu  | zie marius sanogo|
| Recherche par point : s04, puis S99 | `S04 \| P2 \| sableux \| pH 4.8 \| sec`, puis `Observation S99 introuvable.` | Conforme au resultat attendu |zie marius sanogo |
| Recherche par parcelle P3 et par texture argileux | 2 observations (S05, S06), puis 3 (S03, S06, S09) | Conforme au resultat attendu | zie marius sanogo|
| Tri par pH, puis choix 2 | Le tri va de S04 à S08 ; la liste revient dans l’ordre d’origine |Conforme au resultat attendu  |zie marius sanogo |
| Choix 5 (synthèse) | Min 4.8, max 7.6 ; 3, 4, 3 ; points à discuter S01, S04, S06, S09 |Conforme au resultat attendu  | zie marius sanogo|
| Choix 9, puis Entrée vide | Choix inconnu…, le menu revient, rien ne plante | Conforme au resultat attendu | zie marius sanogo |
| Ajout valide s11, p6, Limoneux, 5,8, Humide, puis quitter et relancer | S11 ajoutée, et elle est encore là après redémarrage | Conforme au resultat attendu  | zie marius sanogo |
| Refus : point déjà utilisé, texture hors liste, humidité hors liste | Observation refusée :, un message par erreur, carnet inchangé |Conforme au resultat attendu   | zie marius sanogo |
| Bornes du pH : 0 et 14, puis 14,1, -1, vide | 0 et 14 acceptés ; les trois autres refusés | Conforme au resultat attendu  | zie marius sanogo |
| Trois erreurs en une saisie (point S01, texture craie, pH 18) | Une ligne - … par erreur | Conforme au resultat attendu  | zie marius sanogo |
| pH 5,5 ajouté, puis choix 5 | Ce point n’est pas dans les points à discuter | Conforme au resultat attendu  | zie marius sanogo |

**Sur un autre poste** (`git clone`, `node app.js`, `npm test`, en suivant le README) : 
node app.js: tout les tests proposés fonctionne 
npm test: 32 tests valides
