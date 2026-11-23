# Rapport d’audit

Projet : `losmose-maquette` · 23/11/2026 16:19:47 · 12 min · 4 page(s) · audit complet ciblé sur /,/bons-cadeaux,/la-maison,/menus (étapes : fichiers, grille, mesures, parcours, fluidite, mouvement)

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261123-150719-complet-cible-partiel` · version ?v=2
- Échecs : **0**
- À regarder : **1**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (156), balayage (4), intro accélérable et passable (7), menu (1), clavier (4), liens et boutons (4), liens profonds (6), liens vers la page en cours (4), changements de hauteur (4), parcours du projet (1), fluidité (8), défilement selon l’appareil (5), mouvement (8), effets du plan (8), souris immobile (6)

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
| **20261123-150719-complet-cible-partiel** (celle-ci) | complet | /,/bons-cadeaux,/la-maison,/menus | fichiers, grille, mesures, parcours, fluidite, mouvement | 0 | 1 | 0 | complet |

## Échecs

Aucun.

## À regarder

### lien vers une ancre : changement brusque (1)

- **lien vers une ancre : changement brusque** — `/ → /la-maison#salle` — à 467 ms (différence 21 %) (films/ancre-1366.png) _(1366×768 film)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=2
- Journal v2 : 2 étape(s) notée(s), 32 min de travail pour 60 min de budget, 0 min d’attente de l’utilisateur.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 361, tâche la plus longue 0 ms
- Fluidité /bons-cadeaux 1366×768 (molette) : 0 % d'images lentes sur 179, tâche la plus longue 0 ms
- Fluidité /la-maison 1366×768 (molette) : 0 % d'images lentes sur 284, tâche la plus longue 0 ms
- Fluidité /menus 1366×768 (molette) : 0 % d'images lentes sur 286, tâche la plus longue 69 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1427, tâche la plus longue 0 ms
- Fluidité /bons-cadeaux 390×844 (doigt) : 0 % d'images lentes sur 1351, tâche la plus longue 0 ms
- Fluidité /la-maison 390×844 (doigt) : 0 % d'images lentes sur 1347, tâche la plus longue 0 ms
- Fluidité /menus 390×844 (doigt) : 0 % d'images lentes sur 1346, tâche la plus longue 0 ms

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
