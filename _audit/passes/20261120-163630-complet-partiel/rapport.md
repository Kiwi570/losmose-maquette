# Rapport d’audit

Projet : `losmose-maquette` · 20/11/2026 17:43:31 · 7 min · 7 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **4 échec(s)**
- Passe : `20261120-163630-complet-partiel` · version ?v=1
- Échecs : **4**
- À regarder : **0**
- Non lancé : **0**
- Contrôles passés : mesures (273), balayage (6)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-160248-standard | standard | toutes | toutes | 34 | 11 | 2 | échecs |
| 20261120-162603-standard-partiel | standard | toutes | fichiers, mesures, parcours, mouvement | 2 | 4 | 0 | échecs |
| 20261120-163520-standard-cible-partiel | standard | /,/404,/bons-cadeaux | fichiers, mesures | 0 | 3 | 0 | complet |
| **20261120-163630-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 4 | 0 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (3)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte:nth-of-type(1) > p.hero-info:nth-of-type(3) « Du mardi au samedi Menus dès 29 € » _(844×390 sansJs, 1000×560 sansJs)_
- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.coord:nth-of-type(2) > p.hero-info.entree:nth-of-type(4) « Du mardi au samedi » _(1000×560 sansJs)_
- **premier écran : information clé hors de l’écran** — `/menus` — section#debut > div > ul.grands-prix.entree « 29€ Menu du jour Le midi, du mardi au vendredi 64€ » _(375×667 normal, 375×667 sansJs, 375×667 sansWebgl)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/menus` — section#debut > div > p.actions.entree:nth-of-type(3) > a.bouton:nth-of-type(1) « Réserver une table » _(375×667 normal, 375×667 sansJs, 375×667 sansWebgl, 1000×560 sansJs, 1440×900 sansJs)_

## À regarder

Rien.

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
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


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/contact,/menus --seulement=fichiers,mesures
```
