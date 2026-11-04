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
  - Texture la plus fréquente : `limoneux` (4)
- **Points à discuter (seuil : pH < 5,5 strict)** :
  - **4 points** : `S01` (5.2), `S04` (4.8), `S06` (5.4), `S09` (5.1).
  - Un point avec un pH de 5.5 exact n'est pas retenu.
- **Tri par pH croissant** :
  - Ordre : `S04` (4.8), `S09` (5.1), `S01` (5.2), `S06` (5.4), `S02` (6.1), `S07` (6.3), `S10` (6.5), `S03` (6.8), `S05` (7.2), `S08` (7.6).


**Essais dans le menu** : un ajout valide (encore là après redémarrage), chaque règle refusée, une recherche introuvable, chaque tri, la synthèse, un choix inconnu.

| Action | Attendu | Obtenu | Testeur |
| --- | --- | --- | --- |
| ✏️ | | | |
| ✏️ | | | |
| ✏️ | | | |
| ✏️ | | | |
| ✏️ | | | |
| ✏️ | | | |

**Sur un autre poste** (`git clone`, `node app.js`, `npm test`, en suivant le README) : ✏️
