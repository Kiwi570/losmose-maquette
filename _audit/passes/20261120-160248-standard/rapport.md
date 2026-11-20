# Rapport d’audit

Projet : `losmose-maquette` · 20/11/2026 17:23:24 · 21 min · 7 page(s) · audit standard

## Résumé

- Statut : **34 échec(s)**
- Passe : `20261120-160248-standard` · version ?v=1
- Échecs : **34**
- À regarder : **11**
- Non lancé : **2**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (77), balayage (6), films d’ouverture (12), films de transition (12), bords de l’écran (7), intro accélérable et passable (7), menu (1), clavier (7), liens et boutons (7), liens profonds (6), liens vers la page en cours (6), changements de hauteur (5), parcours du projet (1), fluidité (12), défilement selon l’appareil (5), mouvement (12), effets du plan (8), souris immobile (4), vitesse (6), captures (1)

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

## Échecs

### texte sous 12 px (7)

- **texte sous 12 px** — `/` — section#debut > div.hero-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « TABLE DE CHEF · GAULT&MILLAU 2026 · OBERNAI » — 10.6 px _(320×568 normal, 320×568 sansJs)_
- **texte sous 12 px** — `/menus` — div:nth-of-type(1) > div.tableau-menus.fx-fini:nth-of-type(1) > div:nth-of-type(1) > p.entete:nth-of-type(1) « LES MENUS » — 10.9 px _(390×844 normal, 320×568 normal, 390×844 sansWebgl)_
- **texte sous 12 px** — `/menus` — div:nth-of-type(1) > div.tableau-menus.fx-fini:nth-of-type(1) > div:nth-of-type(1) > p.entete:nth-of-type(2) « 4 SERVICES » — 10.9 px _(390×844 normal, 320×568 normal, 390×844 sansWebgl)_
- **texte sous 12 px** — `/menus` — div:nth-of-type(1) > div.tableau-menus.fx-fini:nth-of-type(1) > div:nth-of-type(1) > p.entete:nth-of-type(3) « 5 SERVICES » — 10.9 px _(390×844 normal, 320×568 normal, 390×844 sansWebgl)_
- **texte sous 12 px** — `/menus` — div:nth-of-type(1) > div.tableau-menus:nth-of-type(1) > div:nth-of-type(1) > p.entete:nth-of-type(1) « LES MENUS » — 10.9 px _(390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/menus` — div:nth-of-type(1) > div.tableau-menus:nth-of-type(1) > div:nth-of-type(1) > p.entete:nth-of-type(2) « 4 SERVICES » — 10.9 px _(390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/menus` — div:nth-of-type(1) > div.tableau-menus:nth-of-type(1) > div:nth-of-type(1) > p.entete:nth-of-type(3) « 5 SERVICES » — 10.9 px _(390×844 sansJs, 320×568 sansJs)_

### premier écran : information clé hors de l’écran (7)

- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div > p.doux.entree:nth-of-type(3) « Du mardi au samedi, de 12 h à 14 h et de 19 h à 21 » _(320×568 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/bons-cadeaux` — form#composer > p.doux:nth-of-type(2) « Le bon est valable 6 mois : pensez à réserver tôt. » _(320×568 normal, 844×390 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.coord:nth-of-type(2) > p.hero-info.entree:nth-of-type(3) « Ouvre à 19 h » _(320×568 normal, 844×390 normal)_
- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.coord:nth-of-type(2) > p.hero-info.entree:nth-of-type(3) « Du mardi au samedi » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/la-maison` — section#debut > div.conteneur > p.actions.entree:nth-of-type(3) > span.doux « Du mardi au samedi, de 12 h à 14 h et de 19 h à 21 » _(320×568 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/menus` — section#debut > div > ul.grands-prix.entree « 29€ Menu du jour Le midi, du mardi au vendredi 64€ » _(320×568 normal, 1366×768 normal, 1366×768 sansWebgl, 1366×768 sansJs, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/menus` — section#debut > div > ul.grands-prix.entree « 29€ Menu du jour Le midi, du mardi au vendredi 0€  » _(844×390 normal)_

### premier écran : bouton principal hors de l’écran (6)

- **premier écran : bouton principal hors de l’écran** — `/bons-cadeaux` — form#composer > div.montants:nth-of-type(1) > button:nth-of-type(1) « 100 € » _(320×568 normal, 844×390 normal, 320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/contact` — section#debut > div.coord:nth-of-type(2) > p.actions.entree:nth-of-type(4) > a.bouton:nth-of-type(1) « Appeler » _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +4)_
- **premier écran : bouton principal hors de l’écran** — `/la-maison` — section#debut > div.conteneur > p.actions.entree:nth-of-type(3) > a.bouton « Réserver une table » _(844×390 normal)_
- **premier écran : bouton principal hors de l’écran** — `/menus` — section#debut > div > p.actions.entree:nth-of-type(3) > a.bouton:nth-of-type(1) « Réserver une table » _(320×568 normal, 844×390 normal, 1366×768 normal, 1366×768 sansWebgl, 1366×768 sansJs, 320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/reserver` — form#reservation > div.jours:nth-of-type(1) « ven. 20 sam. 21 dim. 22 lun. 23 mar. 24 mer. 25 je » _(320×568 normal, 844×390 normal)_
- **premier écran : bouton principal hors de l’écran** — `/reserver` — form#reservation > div.jours:nth-of-type(1) « .jours{display:none} » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_

### premier écran : titre hors de l’écran (3)

- **premier écran : titre hors de l’écran** — `/bons-cadeaux` — section#debut > div.cadeaux-tete-grille > div.cadeaux-texte:nth-of-type(1) > h1.page-titre.entree « Offrir L'Osmose » — haut 537 px, bas 579 px, zone 73–390 px _(844×390 normal)_
- **premier écran : titre hors de l’écran** — `/contact` — section#debut > div.coord:nth-of-type(2) > h1.entree « Nous trouver » — haut 483 px, bas 528 px, zone 73–503 px _(320×568 normal, 320×568 sansJs)_
- **premier écran : titre hors de l’écran** — `/contact` — section#debut > div.coord:nth-of-type(2) > h1.entree « Nous trouver » — haut 786 px, bas 831 px, zone 73–390 px _(844×390 normal)_

### textes qui se chevauchent (2)

- **textes qui se chevauchent** — `/bons-cadeaux` — div.cadeaux-tete-grille > div.bon-colonne:nth-of-type(2) > div.bon > p.bon-montant « 100 € » — avec div.bon-colonne:nth-of-type(2) > div.bon > div.bon-bas:nth-of-type(2) > p:nth-of-type(1) « Pour … » _(320×568 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/bons-cadeaux` — div.cadeaux-tete-grille > div.bon-colonne:nth-of-type(2) > div.bon > p.bon-montant « 100 € » — avec div.bon-colonne:nth-of-type(2) > div.bon > div.bon-bas:nth-of-type(2) > p:nth-of-type(2) « De la part de … » _(320×568 normal, 320×568 sansJs)_

### élément recouvert (1)

- **élément recouvert** — `/bons-cadeaux` — div.cadeaux-tete-grille > div.bon-colonne:nth-of-type(2) > div.bon > p.bon-montant « 100 € » — par div.cadeaux-tete-grille > div.bon-colonne:nth-of-type(2) > div.bon > span.bon-reflet _(390×844 normal, 768×1024 normal)_

### zone tactile sous 44 px (2)

- **zone tactile sous 44 px** — `/la-maison` — section#privatiser > div > p.tel-fort:nth-of-type(4) > a « Groupes et traiteur : 07 55 61 02 61 » — 268 × 22 px _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/reserver` — section#debut > div > p.hero-info.entree:nth-of-type(3) > a « 03 88 99 38 89 » — 107 × 25 px _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_

### contraste insuffisant (4)

- **contraste insuffisant** — `/reserver` — form#reservation > div.jours:nth-of-type(1) > button:nth-of-type(3) > span « dim. » — 3.80:1 (minimum 4.5:1) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **contraste insuffisant** — `/reserver` — form#reservation > div.jours:nth-of-type(1) > button:nth-of-type(3) > b « 22 » — 3.80:1 (minimum 4.5:1) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **contraste insuffisant** — `/reserver` — form#reservation > div.jours:nth-of-type(1) > button:nth-of-type(4) > span « lun. » — 3.80:1 (minimum 4.5:1) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **contraste insuffisant** — `/reserver` — form#reservation > div.jours:nth-of-type(1) > button:nth-of-type(4) > b « 23 » — 3.80:1 (minimum 4.5:1) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_

### lien vers la page en cours (1)

- **lien vers la page en cours** — `/reserver` — la page se recharge au lieu de défiler

### section sans effet au défilement (1)

- **section sans effet au défilement** — `/la-maison` — section#debut.page-haut.maison-tete — aucun élément data-effet (bibliothèque : data-anime="lignes|mots|lettres|cascade|rideau", data-fx ; ou effet du projet marqué data-effet) _(1366×768 normal, 390×844 normal)_

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

### grille : objet d’ouverture hors du premier écran (1)

- **grille : objet d’ouverture hors du premier écran** — `/reserver` — 358 × 0 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_

### section sans visuel (1)

- **section sans visuel** — `/la-maison` — section#debut « LA MAISON Une osmose entre mets et vins En 2017, u » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/la-maison` — à 61 ms (différence 25 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_

### lien vers une ancre : changement brusque (1)

- **lien vers une ancre : changement brusque** — `/ → /la-maison#salle` — à 1313 ms (différence 22 %) (films/ancre-1366.png) _(1366×768 film)_

## Non lancé

- **parcours:hauteur** : page.evaluate: TypeError: Cannot read properties of null (reading 'scrollIntoView')
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
- Ouverture / (1366×768) : 2908 ms depuis le premier octet
- Ouverture /bons-cadeaux (1366×768) : 2901 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2895 ms depuis le premier octet
- Ouverture /la-maison (1366×768) : 2898 ms depuis le premier octet
- Ouverture /menus (1366×768) : 2909 ms depuis le premier octet
- Ouverture /reserver (1366×768) : 2896 ms depuis le premier octet
- film de l'ouverture /reserver 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture / (390×844) : 2901 ms depuis le premier octet
- Ouverture /bons-cadeaux (390×844) : 2897 ms depuis le premier octet
- Ouverture /contact (390×844) : 2898 ms depuis le premier octet
- Ouverture /la-maison (390×844) : 2904 ms depuis le premier octet
- film de l'ouverture /la-maison 390×844 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /menus (390×844) : 2908 ms depuis le premier octet
- Ouverture /reserver (390×844) : 2899 ms depuis le premier octet
- Bords de l’écran : 541 images d’intro, 42 de voile et 173 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /bons-cadeaux : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /la-maison : aucune section épinglée ou plein écran.
- Tient dans l'écran /menus : aucune section épinglée ou plein écran.
- Tient dans l'écran /reserver : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 401, tâche la plus longue 52 ms
- Fluidité /bons-cadeaux 1366×768 (molette) : 0 % d'images lentes sur 182, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 184, tâche la plus longue 0 ms
- Fluidité /la-maison 1366×768 (molette) : 0 % d'images lentes sur 290, tâche la plus longue 0 ms
- Fluidité /menus 1366×768 (molette) : 0 % d'images lentes sur 283, tâche la plus longue 0 ms
- Fluidité /reserver 1366×768 (molette) : 0 % d'images lentes sur 228, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1421, tâche la plus longue 0 ms
- Fluidité /bons-cadeaux 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1335, tâche la plus longue 0 ms
- Fluidité /la-maison 390×844 (doigt) : 0 % d'images lentes sur 1344, tâche la plus longue 0 ms
- Fluidité /menus 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Fluidité /reserver 390×844 (doigt) : 0 % d'images lentes sur 1335, tâche la plus longue 0 ms
- Vitesse / : 0.60 s de calcul au chargement (téléphone ralenti).
- Vitesse /bons-cadeaux : 0.39 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.44 s de calcul au chargement (téléphone ralenti).
- Vitesse /la-maison : 0.52 s de calcul au chargement (téléphone ralenti).
- Vitesse /menus : 0.65 s de calcul au chargement (téléphone ralenti).
- Vitesse /reserver : 0.47 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,mesures,parcours,mouvement
```
