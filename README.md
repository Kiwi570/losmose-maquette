# L'Osmose : maquette v2

Maquette du site du Restaurant L'Osmose, à Obernai. La direction artistique s'appelle « Grès rose et vin d'Alsace ».
Adresse prévue : https://losmose-maquette.vercel.app

## Pages

- **Accueil** : le nom et trois assiettes dans un triptyque d'arches qui suit la souris, le O du nom qui se remplit de vin, la philosophie (le mets et le vin qui se mêlent), les trois menus, l'accord du sommelier (des verres qui se remplissent et qu'on fait tourner à la souris ou au doigt), le parcours du chef, la salle, les fêtes (Nouvel An et bons cadeaux), les infos pratiques avec le cadran des horaires, l'appel final.
- **La maison** : le chef et le sommelier, le parcours, Gault&Millau 2026, la salle et la privatisation.
- **Les menus** : le menu du jour, la carte en 4 et 5 services avec l'accord, le composeur All Inclusive (total en direct) et une galerie d'assiettes.
- **Bons cadeaux** : le bon se dessine pendant qu'on le remplit (montant, noms, petit mot) ; à l'envoi, il se retourne et reçoit le cachet « Envoyé ». La commande est simulée.
- **Réserver** : les jours, les créneaux, les couverts et la formule (préchoisie depuis les autres pages), puis la soirée du Nouvel An. À l'envoi, un billet récapitule la demande et reçoit le cachet « Reçue ». La réservation est simulée.
- **Contact** : le plan schématique, les horaires « ouvert maintenant » à l'heure d'Obernai, les parkings et un formulaire de message simulé.
- **404**.

Sur toutes les pages : le mot d'accent de chaque titre se remplit de vin quand il arrive, et un fil de vin relie les sections (dans la marge sur grand écran, avec le nom de la section ; un trait en haut de l'écran ailleurs).

Pages du site actuel qui ne sont pas reprises en page dédiée (possibles en v2) : Réservation Nouvel An (le contenu figure sur Réserver et sur l'accueil) et Traiteur (le contenu figure sur La maison). Les versions anglaise et allemande pourront s'ajouter en v2 : tous les textes sont dans `donnees/textes/fr.json`.

## Mettre à jour

- Textes : `donnees/textes/fr.json`. Menus, Nouvel An, parcours : `donnees/menus.json`. Horaires : `donnees/horaires.json`.
- Puis `node outils/generer.mjs`. Ne jamais modifier à la main les pages `.html`, qui sont produites par ce script.
- Version des fichiers : `version` dans `donnees/site.json` (augmenter à chaque mise en ligne).

## À fournir par le client (à compléter)

- Mentions légales : raison sociale (SAS Gastronomie d'Alsace ?), adresse du siège, SIRET, capital, numéro de TVA, responsable de la publication. **À compléter.**
- Politique de confidentialité (formulaires, lettre d'information). **À compléter.** Sous les formulaires, la maquette dit seulement à quoi servent les coordonnées ; le lien vers la politique est à ajouter quand elle existera.
- Hébergeur du futur site, s'il reste chez Vercel : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
- Crédits des illustrations générées, à reporter sur le site final : mur de grès (La maison), table dressée (Réserver), vin vu du dessus (accueil, La maison), trois verres (accueil), tablée de fête (accueil, La maison), nappe de fêtes (Bons cadeaux), assiette vide (404). La mention « Illustration générée » reste sur le site final.
- Portrait du chef et du sommelier, et photos de la salle entière : il n'y en a qu'une sur le site actuel (l'arche à vitraux).
- Allergènes : le site actuel n'en donne pas. La maquette indique « Informations sur les allergènes disponibles sur demande ».
- Fermetures annuelles, jours fériés et horaires exceptionnels : à ajouter dans `donnees/horaires.json`. Aujourd'hui, seuls les horaires du mardi au samedi sont connus.
- Créneaux d'arrivée pour la réservation (12 h à 13 h 30 et 19 h à 20 h 30 dans la maquette) : **à confirmer.**
- Soirée du Nouvel An : la page actuelle ne donne pas d'année. Le menu, les prix (200 € et 300 €) et la harpiste sont repris pour le 31 décembre 2026 : **à confirmer.** La fiche « Réveillon en accord mets et vins à 250 € » du site actuel ne correspond pas au prix de 300 € affiché sur la même page.
- Faits repris de sources publiques, à confirmer : Gault&Millau 2026 (13,5/20, Table de Chef), le nom du sommelier (Frédéric Voné), l'ouverture en 2017, une trentaine de couverts.
- Réseaux sociaux : aucun lien sur le site actuel (une page Facebook existe). À donner s'ils doivent figurer.

## Incohérences relevées sur le site actuel

- L'adresse est écrite « rue du Général de Gouraud » ou « rue du Général Gouraud » selon les pages.
- Parkings : « 3 parkings à moins de 100 m » sur une page, mais 50 m, 200 m et 300 m sur la page Contact.
- Le bandeau « Menus à partir de 29 € » figure sur la page All Inclusive, dont la première formule est à 64 €.
- Le bon cadeau de 150 € a une adresse qui parle du « menu inspiration en 7 services ».
- La page Traiteur donne pour contact « M. Frédéric Botter ».
- La carte écrit « Fois Gras ».
- L'hébergeur indiqué dans les mentions légales (PHPNET) n'est pas celui du site actuel (Wix).

## À la mise en ligne définitive

- Retirer : `noindex` (balise robots dans `source/gabarits/commun.mjs` et en-tête X-Robots-Tag dans `vercel.json`), les formulaires simulés (réservation, bon cadeau, message, lettre d'information), les mentions « à compléter » du pied de page, les créneaux de démonstration.
- Brancher : la vraie réservation, le vrai paiement des bons cadeaux et de l'All Inclusive.
- Garder : la mention « Illustration générée » sur les images créées par IA.
