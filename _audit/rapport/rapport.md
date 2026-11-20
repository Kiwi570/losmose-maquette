# Rapport d’audit

Projet : `losmose-maquette` · 20/11/2026 18:10:26 · 21 min · 7 page(s) · audit standard

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261120-164942-standard` · version ?v=1
- Échecs : **0**
- À regarder : **12**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (77), balayage (6), films d’ouverture (12), films de transition (12), bords de l’écran (7), intro accélérable et passable (7), menu (1), clavier (7), liens et boutons (7), liens profonds (6), liens vers la page en cours (6), changements de hauteur (6), parcours du projet (1), fluidité (12), défilement selon l’appareil (5), mouvement (12), effets du plan (8), souris immobile (4), vitesse (6), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 6 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-160248-standard | standard | toutes | toutes | 34 | 11 | 2 | échecs |
| 20261120-162603-standard-partiel | standard | toutes | fichiers, mesures, parcours, mouvement | 2 | 4 | 0 | échecs |
| 20261120-163520-standard-cible-partiel | standard | /,/404,/bons-cadeaux | fichiers, mesures | 0 | 3 | 0 | complet |
| 20261120-163630-complet-partiel | complet | toutes | mesures, ecran | 4 | 0 | 0 | échecs |
| 20261120-164412-complet-cible-partiel | complet | /,/contact,/menus | fichiers, mesures | 1 | 3 | 0 | échecs |
| 20261120-164727-complet-cible-partiel | complet | /,/menus | fichiers, mesures | 0 | 3 | 0 | complet |
| **20261120-164942-standard** (celle-ci) | standard | toutes | toutes | 0 | 12 | 1 | complet |

## Échecs

Aucun.

## À regarder

### « à compléter » visible (3)

- **« à compléter » visible** — `bons-cadeaux.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `reserver.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### grille : objet d’ouverture hors du premier écran (2)

- **grille : objet d’ouverture hors du premier écran** — `/bons-cadeaux` — 370 × 0 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_
- **grille : objet d’ouverture hors du premier écran** — `/reserver` — 358 × 0 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/la-maison` — à 50 ms (différence 26 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/la-maison` — à 62 ms (différence 21 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/reserver` — écran différent à la même position après rechargement (15.1 %), voir comparaisons/rechargement-reserver-*.png _(1366×768)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 3 étape(s) notée(s), 27 min de travail pour 70 min de budget, 12 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /bons-cadeaux, /contact, /la-maison, /menus, /reserver.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2910 ms depuis le premier octet
- Ouverture /bons-cadeaux (1366×768) : 2906 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2903 ms depuis le premier octet
- Ouverture /la-maison (1366×768) : 2904 ms depuis le premier octet
- Ouverture /menus (1366×768) : 2902 ms depuis le premier octet
- Ouverture /reserver (1366×768) : 2892 ms depuis le premier octet
- film de l'ouverture /reserver 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture / (390×844) : 2910 ms depuis le premier octet
- Ouverture /bons-cadeaux (390×844) : 2902 ms depuis le premier octet
- Ouverture /contact (390×844) : 2904 ms depuis le premier octet
- Ouverture /la-maison (390×844) : 2898 ms depuis le premier octet
- Ouverture /menus (390×844) : 2909 ms depuis le premier octet
- film de l'ouverture /menus 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /reserver (390×844) : 2894 ms depuis le premier octet
- film de l'ouverture /reserver 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran /reserver 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 575 images d’intro, 45 de voile et 176 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /bons-cadeaux : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /la-maison : aucune section épinglée ou plein écran.
- Tient dans l'écran /menus : aucune section épinglée ou plein écran.
- Tient dans l'écran /reserver : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 402, tâche la plus longue 0 ms
- Fluidité /bons-cadeaux 1366×768 (molette) : 0 % d'images lentes sur 181, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 187, tâche la plus longue 0 ms
- Fluidité /la-maison 1366×768 (molette) : 0 % d'images lentes sur 286, tâche la plus longue 0 ms
- Fluidité /menus 1366×768 (molette) : 0 % d'images lentes sur 278, tâche la plus longue 50 ms
- Fluidité /reserver 1366×768 (molette) : 0 % d'images lentes sur 237, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1433, tâche la plus longue 0 ms
- Fluidité /bons-cadeaux 390×844 (doigt) : 0 % d'images lentes sur 1352, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1351, tâche la plus longue 0 ms
- Fluidité /la-maison 390×844 (doigt) : 0 % d'images lentes sur 1348, tâche la plus longue 0 ms
- Fluidité /menus 390×844 (doigt) : 0 % d'images lentes sur 1350, tâche la plus longue 0 ms
- Fluidité /reserver 390×844 (doigt) : 0 % d'images lentes sur 1352, tâche la plus longue 0 ms
- Vitesse / : 0.87 s de calcul au chargement (téléphone ralenti).
- Vitesse /bons-cadeaux : 0.44 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.45 s de calcul au chargement (téléphone ralenti).
- Vitesse /la-maison : 0.50 s de calcul au chargement (téléphone ralenti).
- Vitesse /menus : 0.65 s de calcul au chargement (téléphone ralenti).
- Vitesse /reserver : 0.49 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
