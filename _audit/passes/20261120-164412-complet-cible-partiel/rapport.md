# Rapport d’audit

Projet : `losmose-maquette` · 20/11/2026 17:47:20 · 3 min · 3 page(s) · audit complet ciblé sur /,/contact,/menus (étapes : fichiers, mesures)

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261120-164412-complet-cible-partiel` · version ?v=1
- Échecs : **1**
- À regarder : **3**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (117), balayage (3)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-160248-standard | standard | toutes | toutes | 34 | 11 | 2 | échecs |
| 20261120-162603-standard-partiel | standard | toutes | fichiers, mesures, parcours, mouvement | 2 | 4 | 0 | échecs |
| 20261120-163520-standard-cible-partiel | standard | /,/404,/bons-cadeaux | fichiers, mesures | 0 | 3 | 0 | complet |
| 20261120-163630-complet-partiel | complet | toutes | mesures, ecran | 4 | 0 | 0 | échecs |
| **20261120-164412-complet-cible-partiel** (celle-ci) | complet | /,/contact,/menus | fichiers, mesures | 1 | 3 | 0 | échecs |

## Échecs

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/menus` — section#debut > div > p.actions.entree:nth-of-type(3) > a.bouton:nth-of-type(1) « Réserver une table » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_

## À regarder

### « à compléter » visible (3)

- **« à compléter » visible** — `bons-cadeaux.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `reserver.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 3 étape(s) notée(s), 27 min de travail pour 70 min de budget, 12 min d’attente de l’utilisateur.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/menus --seulement=fichiers,mesures
```
