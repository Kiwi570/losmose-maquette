# Rapport d’audit

Projet : `losmose-maquette` · 23/11/2026 16:03:56 · 26 min · 7 page(s) · audit complet

## Résumé

- Statut : **2 échec(s)**
- Passe : `20261123-143819-complet` · version ?v=2
- Échecs : **2**
- À regarder : **4**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (273), balayage (6), films d’ouverture (12), films de transition (12), bords de l’écran (7), intro accélérable et passable (7), menu (1), clavier (7), liens et boutons (7), liens profonds (6), liens vers la page en cours (6), changements de hauteur (6), parcours du projet (1), fluidité (12), défilement selon l’appareil (5), mouvement (12), effets du plan (8), souris immobile (6), vitesse (6), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 6 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ✓ présent | sur les 6 page(s) |
| 5. Un titre fait l’événement sur chaque page | ✓ présent | sur les 6 page(s) |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✓ présent | sur /bons-cadeaux, /reserver |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-142615-standard-cible-partiel | standard | /reserver,/la-maison | fichiers, films, parcours:hauteur | 0 | 3 | 0 | complet |
| 20261123-142743-standard-cible-partiel | standard | /reserver | parcours | 0 | 0 | 0 | complet |
| 20261123-142858-standard-cible-partiel | standard | /,/bons-cadeaux,/menus,/contact | fichiers, grille, mesures | 1 | 1 | 0 | échecs |
| **20261123-143819-complet** (celle-ci) | complet | toutes | toutes | 2 | 4 | 1 | échecs |

## Échecs

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/bons-cadeaux` — form#composer > div.montants:nth-of-type(1) > button:nth-of-type(1) « 100 € » _(375×667 sansJs)_

### positions non recalculées après un changement de hauteur (1)

- **positions non recalculées après un changement de hauteur** — `/` — 4 services — décalage de 35 px _(1366×768)_

## À regarder

### photo moyenne affichée en très grand (1)

- **photo moyenne affichée en très grand** — `/la-maison` — div:nth-of-type(1) > figure.media.chef-media > picture > img « Tasses noires et cuillères de bouchées roses sur u » — assiette-cuilleres (3/5, 52 % de l'écran) : une image notée 4 ou 5 à cette taille _(390×844 normal)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/la-maison` — à 50 ms (différence 25 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/la-maison` — à 74 ms (différence 20 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### fluidité (1)

- **fluidité** — `/menus` — 4 % d'images de plus de 50 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=2
- Journal v2 : 2 étape(s) notée(s), 32 min de travail pour 60 min de budget, 0 min d’attente de l’utilisateur.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2899 ms depuis le premier octet
- Ouverture /bons-cadeaux (1366×768) : 2899 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2904 ms depuis le premier octet
- Ouverture /la-maison (1366×768) : 2889 ms depuis le premier octet
- Ouverture /menus (1366×768) : 2901 ms depuis le premier octet
- Ouverture /reserver (1366×768) : 2903 ms depuis le premier octet
- film de l'ouverture /reserver 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture / (390×844) : 2913 ms depuis le premier octet
- Ouverture /bons-cadeaux (390×844) : 2902 ms depuis le premier octet
- film de l'ouverture /bons-cadeaux 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /contact (390×844) : 2895 ms depuis le premier octet
- Ouverture /la-maison (390×844) : 2889 ms depuis le premier octet
- film de l'ouverture /la-maison 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /menus (390×844) : 2902 ms depuis le premier octet
- film de l'ouverture /menus 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /reserver (390×844) : 2906 ms depuis le premier octet
- Bords de l’écran : 546 images d’intro, 40 de voile et 173 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /bons-cadeaux : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /la-maison : aucune section épinglée ou plein écran.
- Tient dans l'écran /menus : aucune section épinglée ou plein écran.
- Tient dans l'écran /reserver : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 374, tâche la plus longue 0 ms
- Fluidité /bons-cadeaux 1366×768 (molette) : 0 % d'images lentes sur 177, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 189, tâche la plus longue 0 ms
- Fluidité /la-maison 1366×768 (molette) : 0 % d'images lentes sur 289, tâche la plus longue 0 ms
- Fluidité /reserver 1366×768 (molette) : 0 % d'images lentes sur 238, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1432, tâche la plus longue 0 ms
- Fluidité /bons-cadeaux 390×844 (doigt) : 0 % d'images lentes sur 1352, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1349, tâche la plus longue 0 ms
- Fluidité /la-maison 390×844 (doigt) : 0 % d'images lentes sur 1353, tâche la plus longue 0 ms
- Fluidité /menus 390×844 (doigt) : 0 % d'images lentes sur 1354, tâche la plus longue 0 ms
- Fluidité /reserver 390×844 (doigt) : 0 % d'images lentes sur 1349, tâche la plus longue 0 ms
- Vitesse / : 0.77 s de calcul au chargement (téléphone ralenti).
- Vitesse /bons-cadeaux : 0.57 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.43 s de calcul au chargement (téléphone ralenti).
- Vitesse /la-maison : 0.47 s de calcul au chargement (téléphone ralenti).
- Vitesse /menus : 0.65 s de calcul au chargement (téléphone ralenti).
- Vitesse /reserver : 0.49 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/bons-cadeaux --seulement=fichiers,mesures,parcours
```
