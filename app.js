// Carnet d'observation des sols — point d'entrée : le menu.
import { demander, fermerSaisie, ouvrirSaisie } from './src/saisie.js';
import { chargerJson, enregistrerJson } from './src/stockage.js';
import { HUMIDITES, TEXTURES, ajouterObservation, formaterObservation, listerObservations, trouverParId } from './src/registre.js';
import { filtrerParParcelle, filtrerParTexture, trierParPh } from './src/recherche.js';
import { SEUIL_PH_A_DISCUTER, compterParTexture, phMinMax, pointsADiscuter } from './src/synthese.js';
import { supprimerObservation, trierParPhDecroissant } from './src/bonus.js';

const FICHIER_DONNEES = 'donnees/observations.json';

async function main() {
  ouvrirSaisie();
  console.log('==================================================');
  console.log("   CARNET D'OBSERVATION DES SOLS");
  console.log('   Ferme pédagogique');
  console.log('==================================================');

  let observations = [];
  try {
    observations = await chargerJson(FICHIER_DONNEES);
    console.log(`${observations.length} observation(s) chargée(s) depuis ${FICHIER_DONNEES}.`);
  } catch (erreur) {
    console.log(`Impossible de lire ${FICHIER_DONNEES} : ${erreur.message}. Le carnet démarre vide.`);
  }

  let continuer = true;

  while (continuer) {
    console.log('\n--------------------- MENU ---------------------');
    console.log('1. Ajouter une observation');
    console.log('2. Lister les observations');
    console.log('3. Rechercher (point, parcelle, texture)');
    console.log('4. Trier par pH');
    console.log('5. Synthèse des observations');
    console.log('6. Supprimer une observation');
    console.log('0. Quitter');

    const choix = await demander('Votre choix : ');
    if (choix === null || choix === '0') {
      console.log('Au revoir !');
      break;
    }

    try {
      switch (choix) {
        case '1': {
          console.log('\n--- Ajouter une observation ---');
          const id = await demander('Point observé (ex. S11) : ');
          if (id === null) break;
          const parcelle = await demander('Parcelle (ex. P1) : ');
          if (parcelle === null) break;
          const texture = await demander(`Texture (${TEXTURES.join(', ')}) : `);
          if (texture === null) break;
          const pH = await demander('pH (nombre de 0 à 14, sans unité, virgule acceptée) : ');
          if (pH === null) break;
          const etatHumidite = await demander(`État d'humidité (${HUMIDITES.join(', ')}) : `);
          if (etatHumidite === null) break;

          const saisie = {
            id: id.toUpperCase(),
            parcelle: parcelle.toUpperCase(),
            texture: texture.toLowerCase(),
            pH,
            etatHumidite: etatHumidite.toLowerCase(),
          };

          const erreurs = ajouterObservation(observations, saisie);
          if (erreurs.length === 0) {
            await enregistrerJson(FICHIER_DONNEES, observations);
            console.log(`Observation ${saisie.id} ajoutée. Le carnet compte ${observations.length} observation(s).`);
          } else {
            console.log('Observation refusée :');
            for (const err of erreurs) {
              console.log(`  - ${err}`);
            }
            console.log(`Le carnet compte toujours ${observations.length} observation(s).`);
          }
          break;
        }

        case '2': {
          console.log(`\n--- Liste des observations (${observations.length}) ---`);
          console.log(listerObservations(observations));
          break;
        }  
        
        case '3': {
          console.log('\n--- Rechercher ---');
          console.log('1. Par point (identifiant)');
          console.log('2. Par parcelle');
          console.log("3. Les observations d'une texture");
          const sousChoix = await demander('Votre choix : ');
          if (sousChoix === null) break;

          if (sousChoix === '1') {
            const point = await demander('Point : ');
            if (point === null) break;
            const trouvee = trouverParId(observations, point.toUpperCase());
            if (trouvee) {
              console.log(formaterObservation(trouvee));
            } else {
              console.log(`Observation ${point.toUpperCase()} introuvable.`);
            }
          } else if (sousChoix === '2') {
            const parcelle = await demander('Parcelle : ');
            if (parcelle === null) break;
            const res = filtrerParParcelle(observations, parcelle.toUpperCase());
            console.log(`${res.length} observation(s) sur la parcelle ${parcelle.toUpperCase()} :`);
            console.log(listerObservations(res));
          } else if (sousChoix === '3') {
            const texture = await demander('Texture : ');
            if (texture === null) break;
            const res = filtrerParTexture(observations, texture.toLowerCase());
            console.log(`${res.length} observation(s) de texture ${texture.toLowerCase()} :`);
            console.log(listerObservations(res));
          } else {
            console.log('Choix inconnu : retour au menu.');
          }
          break;
        }

        case '4': {
          console.log('\n--- Trier ---');
          console.log('1. Par pH croissant');
          console.log('2. Par pH décroissant')
          const sousChoix = await demander('Votre choix : ');
          if (sousChoix === null) break;

          if (sousChoix === '1') {
            const triees = trierParPh(observations);
            console.log(listerObservations(triees));
          } else if (sousChoix === '2') {
            const triees = trierParPhDecroissant(observations);
            console.log(listerObservations(triees));
          } else {
            console.log('Choix inconnu : retour au menu.');
          }
          break;
        }

        case '5': {
          console.log('\n--- Synthèse des observations ---');
          console.log(`Nombre d'observations : ${observations.length}`);

          if (observations.length === 0) {
            console.log('pH minimum et maximum : aucune donnée');
          } else {
            const bornes = phMinMax(observations);
            console.log(`pH minimum : ${bornes.min} · pH maximum : ${bornes.max}`);
          }

          console.log('Observations par texture :');
          const comptage = compterParTexture(observations);
          for (const [tex, nb] of Object.entries(comptage)) {
            console.log(`  ${tex} : ${nb}`);
          }

          const aDiscuter = pointsADiscuter(observations, SEUIL_PH_A_DISCUTER);
          console.log(`Points à discuter avec le coach (pH < ${SEUIL_PH_A_DISCUTER}) : ${aDiscuter.length}`);
          for (const point of aDiscuter) {
            console.log(`  ${formaterObservation(point)}`);
          }

          console.log("Rappels : le pH est sans unité. Aucune moyenne de pH n'est calculée (échelle logarithmique).");
          console.log("Ces points ne sont pas un diagnostic de fertilisation : ils servent à préparer l'échange avec le coach.");
          break;
        }
        case '6': {
          const id = await demander('Identifiant : ');
          if (id === null) break;
          const supprimee = supprimerObservation(observations, id.toUpperCase());
          if (supprimee) {
            await enregistrerJson(FICHIER_DONNEES, observations);
            console.log(`Observation ${supprimee.id} supprimée. Le carnet compte ${observations.length} observation(s).`);
          } else {
            console.log(`Observation ${id.toUpperCase()} introuvable.`);
          }
          break;
        }

        default:
          console.log(`Choix inconnu : « ${choix} ». Tapez un chiffre du menu.`);
          break;
      }
    } catch (erreur) {
      if (erreur.message?.startsWith('TODO')) {
        console.log(`À compléter : ${erreur.message}`);
      } else {
        console.log(`Erreur inattendue : ${erreur.message}`);
      }
    }
  }

  fermerSaisie();
}

main();