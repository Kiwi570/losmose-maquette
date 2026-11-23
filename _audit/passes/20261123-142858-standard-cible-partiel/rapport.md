# Rapport d’audit

Projet : `losmose-maquette` · 23/11/2026 15:31:01 · 2 min · 4 page(s) · audit standard ciblé sur /,/bons-cadeaux,/menus,/contact (étapes : fichiers, grille, mesures)

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261123-142858-standard-cible-partiel` · version ?v=2
- Échecs : **1**
- À regarder : **1**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (44), balayage (4)

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
| **20261123-142858-standard-cible-partiel** (celle-ci) | standard | /,/bons-cadeaux,/menus,/contact | fichiers, grille, mesures | 1 | 1 | 0 | échecs |

## Échecs

### texte sous 12 px (1)

- **texte sous 12 px** — `/` — section#accord > div.conteneur.accord > div > p.verres-astuce:nth-of-type(3) « GLISSEZ SUR LES VERRES : LE VIN TOURNE » — 11.8 px _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_

## À regarder

### journal du projet (1)

- **journal du projet** — aucune entrée pour la version 2 de donnees/site.json

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=2
- Audit standard : étapes lourdes sur /, /bons-cadeaux, /contact, /menus.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/ --seulement=fichiers,mesures
```
