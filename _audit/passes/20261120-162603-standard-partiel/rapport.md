# Rapport d’audit

Projet : `losmose-maquette` · 20/11/2026 17:35:09 · 9 min · 7 page(s) · audit standard (étapes : fichiers, mesures, parcours, mouvement)

## Résumé

- Statut : **2 échec(s)**
- Passe : `20261120-162603-standard-partiel` · version ?v=1
- Échecs : **2**
- À regarder : **4**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (77), balayage (6), intro accélérable et passable (7), menu (1), clavier (7), liens et boutons (7), liens profonds (6), liens vers la page en cours (6), changements de hauteur (6), parcours du projet (1), mouvement (12), effets du plan (8), souris immobile (4)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-160248-standard | standard | toutes | toutes | 34 | 11 | 2 | échecs |
| **20261120-162603-standard-partiel** (celle-ci) | standard | toutes | fichiers, mesures, parcours, mouvement | 2 | 4 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div > p.surtitre.entree:nth-of-type(1) « 404 » _(320×568 normal, 320×568 sansJs)_

### textes qui se chevauchent (1)

- **textes qui se chevauchent** — `/bons-cadeaux` — div.cadeaux-tete-grille > div.bon-colonne:nth-of-type(2) > div.bon > p.bon-montant « 100 € » — avec div.bon-colonne:nth-of-type(2) > div.bon > div.bon-bas:nth-of-type(2) > p:nth-of-type(2) « De la part de … » _(768×1024 normal, 844×390 normal)_

## À regarder

### « à compléter » visible (3)

- **« à compléter » visible** — `bons-cadeaux.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `reserver.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/reserver` — écran différent à la même position après rechargement (15.1 %), voir comparaisons/rechargement-reserver-*.png _(1366×768)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 3 étape(s) notée(s), 27 min de travail pour 70 min de budget, 12 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /bons-cadeaux, /contact, /la-maison, /menus, /reserver.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/404,/bons-cadeaux --seulement=fichiers,mesures
```
