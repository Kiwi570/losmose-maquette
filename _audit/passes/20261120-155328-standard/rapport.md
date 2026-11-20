# Rapport d’audit

Projet : `losmose-maquette` · 20/11/2026 16:58:31 · 5 min · 1 page(s) · audit standard

## Résumé

- Statut : **16 échec(s)**
- Passe : `20261120-155328-standard`
- Échecs : **16**
- À regarder : **20**
- Non lancé : **2**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (11), balayage (1), films d’ouverture (2), films de transition (2), bords de l’écran (2), intro accélérable et passable (7), menu (1), clavier (1), liens et boutons (1), liens profonds (4), liens vers la page en cours (1), changements de hauteur (1), parcours du projet (1), fluidité (2), défilement selon l’appareil (5), mouvement (2), effets du plan (5), souris immobile (1), vitesse (1), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 1 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### lien vers le site actuel (7)

- **lien vers le site actuel** — `404.html` — mailto:contact@restaurantlosmose.fr
- **lien vers le site actuel** — `bons-cadeaux.html` — mailto:contact@restaurantlosmose.fr
- **lien vers le site actuel** — `contact.html` — mailto:contact@restaurantlosmose.fr
- **lien vers le site actuel** — `index.html` — mailto:contact@restaurantlosmose.fr
- **lien vers le site actuel** — `la-maison.html` — mailto:contact@restaurantlosmose.fr
- **lien vers le site actuel** — `menus.html` — mailto:contact@restaurantlosmose.fr
- **lien vers le site actuel** — `reserver.html` — mailto:contact@restaurantlosmose.fr

### élément sans nom accessible (1)

- **élément sans nom accessible** — `/` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_

### photo faible affichée en grand (1)

- **photo faible affichée en grand** — `/` — div.hero-arche-cadre:nth-of-type(2) > figure.media.arche > picture > img « Deux boules vertes enveloppées de feuilles, une fe » — accueil-ouverture (4/5, faible, 36 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/` — #lettre-email — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_

### textes qui se chevauchent (2)

- **textes qui se chevauchent** — `/` — section#debut > div.hero-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « TABLE DE CHEF · GAULT&MILLAU 2026 · OBERNAI » — avec div.hero-texte:nth-of-type(1) > h1.hero-titre > span.titre-masque > span.titre-ligne « L’Osmose » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/` — section#debut > div.hero-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « TABLE DE CHEF · GAULT&MILLAU 2026 · OBERNAI » — avec h1.hero-titre > span.titre-masque > span.titre-ligne > span.o « O » _(1920×1080 normal)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte:nth-of-type(1) > p.hero-info:nth-of-type(3) « Du mardi au samedi Menus dès 29 € » _(320×568 sansJs)_

### effet du plan absent (3)

- **effet du plan absent** — « repere » : aucun élément data-effet="repere"
- **effet du plan absent** — « bon » : aucun élément data-effet="bon"
- **effet du plan absent** — « bandeau » : aucun élément data-effet="bandeau"

## À regarder

### « à compléter » visible (3)

- **« à compléter » visible** — `bons-cadeaux.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `reserver.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### config.json : page type introuvable (1)

- **config.json : page type introuvable** — /la-maison, /menus, /bons-cadeaux, /reserver, /contact

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### texte de contenu sous 13 px (ordinateur) (10)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.hero-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « TABLE DE CHEF · GAULT&MILLAU 2026 · OBERNAI » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#philosophie > div:nth-of-type(1) > p.surtitre:nth-of-type(1) « NOTRE PHILOSOPHIE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.disques:nth-of-type(2) > div.disque.disque--vin:nth-of-type(2) > figure.media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#accord > div.conteneur.accord > div > p.surtitre:nth-of-type(1) « L'ACCORD DU SOMMELIER » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#accord > div.conteneur.accord > figure.media.accord-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.salle-grille:nth-of-type(2) > div.salle-composition:nth-of-type(2) > figure.media.salle-mur:nth-of-type(1) > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#en-ce-moment > div.tete-section:nth-of-type(1) > div > p.surtitre « EN CE MOMENT » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#infos > div:nth-of-type(2) > p.surtitre « INFOS PRATIQUES » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div:nth-of-type(2) > div.infos-liste.fx-fini > div:nth-of-type(4) > h3 « PAIEMENTS ACCEPTÉS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div:nth-of-type(2) > div.infos-liste > div:nth-of-type(4) > h3 « PAIEMENTS ACCEPTÉS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 87 ms (différence 21 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### effet qui ne bouge pas au défilement (1)

- **effet qui ne bouge pas au défilement** — `/` — div.vitrail — vitrail : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_

## Non lancé

- **fichiers** : ENOENT: no such file or directory, stat '/home/claude/losmose-maquette/_audit/node_modules/playwright-core'
- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Audit standard : étapes lourdes sur /.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2896 ms depuis le premier octet
- Ouverture / (390×844) : 2904 ms depuis le premier octet
- film de l'ouverture / 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 145 images d’intro, 12 de voile et 41 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 391, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1421, tâche la plus longue 0 ms
- Vitesse / : 0.49 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,mesures,mouvement
```
