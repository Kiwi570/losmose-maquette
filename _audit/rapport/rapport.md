# Rapport d’audit

Projet : `losmose-maquette` · 23/11/2026 16:42:13 · 18 min · 7 page(s) · audit complet (étapes : fichiers, grille, mesures, films, parcours, ecran, captures)

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261123-152425-complet-partiel` · version ?v=2
- Échecs : **0**
- À regarder : **3**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (273), balayage (6), films d’ouverture (12), films de transition (12), intro accélérable et passable (7), menu (1), clavier (7), liens et boutons (7), liens profonds (6), liens vers la page en cours (6), changements de hauteur (6), parcours du projet (1), captures (1)

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
| 20261123-143819-complet | complet | toutes | toutes | 2 | 4 | 1 | échecs |
| 20261123-150719-complet-cible-partiel | complet | /,/bons-cadeaux,/la-maison,/menus | fichiers, grille, mesures, parcours, fluidite, mouvement | 0 | 1 | 0 | complet |
| **20261123-152425-complet-partiel** (celle-ci) | complet | toutes | fichiers, grille, mesures, films, parcours, ecran, captures | 0 | 3 | 0 | complet |

## Échecs

Aucun.

## À regarder

### numéro de version (1)

- **numéro de version** — ?v=2 est celui de la dernière livraison : à changer avant de livrer

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/la-maison` — à 67 ms (différence 26 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/la-maison` — à 89 ms (différence 20 %) (films/retour-avant-390.png) _(390×844 retour avant)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=2
- Journal v2 : 4 étape(s) notée(s), 85 min de travail pour 95 min de budget, 0 min d’attente de l’utilisateur.
- Journal : « audit complet et corrections » 48 min pour 30 prévues.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2903 ms depuis le premier octet
- Ouverture /bons-cadeaux (1366×768) : 2910 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2897 ms depuis le premier octet
- Ouverture /la-maison (1366×768) : 2892 ms depuis le premier octet
- Ouverture /menus (1366×768) : 2905 ms depuis le premier octet
- Ouverture /reserver (1366×768) : 2898 ms depuis le premier octet
- Ouverture / (390×844) : 2906 ms depuis le premier octet
- film de l'ouverture / 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /bons-cadeaux (390×844) : 2903 ms depuis le premier octet
- film de l'ouverture /bons-cadeaux 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /contact (390×844) : 2890 ms depuis le premier octet
- Ouverture /la-maison (390×844) : 2911 ms depuis le premier octet
- Ouverture /menus (390×844) : 2907 ms depuis le premier octet
- Ouverture /reserver (390×844) : 2894 ms depuis le premier octet
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /bons-cadeaux : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /la-maison : aucune section épinglée ou plein écran.
- Tient dans l'écran /menus : aucune section épinglée ou plein écran.
- Tient dans l'écran /reserver : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
