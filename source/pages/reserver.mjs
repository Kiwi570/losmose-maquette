/* Réserver : le formulaire d'abord (jours, créneaux, couverts, formule préchoisie par l'adresse), la table dressée à droite ;
   la soirée du Nouvel An ; bon à savoir ; appel. Réservation simulée. */
import { html } from '../../outils/gabarit.mjs';
import { img, gouttes } from '../gabarits/elements.mjs';

export const page = { cle: 'reserver', fichier: 'reserver', imagePartage: 'reserver-ouverture-1280.webp' };

const FORMULES = [
  ['', 'reserver.formuleLibre'], ['jour', 'reserver.formuleJour'], ['quatre', 'reserver.formuleQuatre'], ['quatre-accord', 'reserver.formuleQuatreAccord'],
  ['cinq', 'reserver.formuleCinq'], ['cinq-accord', 'reserver.formuleCinqAccord'], ['all-inclusive-3', 'reserver.formuleAi3'], ['all-inclusive-4', 'reserver.formuleAi4'],
  ['all-inclusive-5', 'reserver.formuleAi5'], ['nouvel-an', 'reserver.formuleNouvelAn'], ['nouvel-an-all-inclusive', 'reserver.formuleNouvelAnAi'],
];

export default (c) => {
  const m = c.donnees.menus;
  return html`
<section class="page-haut conteneur resa-tete" id="debut">
  <div>
    <p class="surtitre entree masque-ecran-tres-bas" data-anime="gsap">${c.t('reserver.surtitre')}</p>
    <h1 class="page-titre entree" data-anime="gsap">${c.t('reserver.titre')}</h1>
    <p class="chapo entree masque-ecran-bas" data-anime="gsap">${c.t('reserver.texte')}</p>
    <p class="hero-info entree" data-anime="gsap" data-info-cle><span class="pastille" data-statut-lieu><span class="point"></span><span data-statut-texte>${c.t('commun.statutAttente')}</span></span><a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></p>
    <form class="formulaire-resa entree" data-anime="gsap" data-resa data-formulaire novalidate id="reservation">
      <p class="etiquette" id="jour-titre">${c.t('reserver.jour')}</p>
      <noscript><div class="champ"><label for="jour-sansjs">${c.t('reserver.jour')}</label><input id="jour-sansjs" type="date" name="jour-sansjs" data-action-principale></div><div class="champ"><label for="heure-sansjs">${c.t('reserver.heure')}</label><input id="heure-sansjs" type="time" name="heure-sansjs" min="12:00" max="20:30"></div></noscript>
      <div class="jours" data-jours role="group" aria-labelledby="jour-titre" data-action-principale><noscript><style>.jours{display:none}</style></noscript></div>
      <p class="etiquette">${c.t('reserver.heure')}</p>
      <div class="creneaux" data-creneaux role="group" aria-label="${c.s('reserver.heure')}"></div>
      <input type="hidden" name="jour"><input type="hidden" name="heure">
      <div class="resa-ligne">
        <div class="champ"><p class="etiquette" id="couverts-titre">${c.t('reserver.couverts')}</p><div class="nombre nombre--clair" role="group" aria-labelledby="couverts-titre"><button type="button" data-couvert="-1" aria-label="${c.s('reserver.moins')}">−</button><output data-couverts aria-live="polite">2</output><button type="button" data-couvert="1" aria-label="${c.s('reserver.plus')}">+</button></div></div>
        <div class="champ"><label for="formule">${c.t('reserver.formule')}</label><select id="formule" name="formule">${FORMULES.map(([v, k]) => html`<option value="${v}">${c.t(k)}</option>`)}</select></div>
      </div>
      <div class="resa-ligne">
        <div class="champ"><label for="resa-nom">${c.t('contact.nom')}</label><input id="resa-nom" name="nom" autocomplete="name" required></div>
        <div class="champ"><label for="resa-tel">${c.t('reserver.telephone')}</label><input id="resa-tel" name="telephone" type="tel" autocomplete="tel" required></div>
      </div>
      <div class="champ"><label for="resa-email">${c.t('contact.courriel')}</label><input id="resa-email" name="email" type="email" autocomplete="email" required></div>
      <div class="champ"><label for="resa-note">${c.t('reserver.note')}</label><textarea id="resa-note" name="note" rows="3"></textarea></div>
      <p class="resa-recap" data-resa-recap aria-live="polite">${c.t('reserver.recapVide')}</p>
      <p class="mention-donnees">${c.t('contact.mention')} ${c.t('reserver.creneauxNote')}</p>
      <button class="bouton" type="submit">${c.t('reserver.envoyer')}</button>
      <p data-message-envoi hidden></p>
    </form>
  </div>
  ${img(c, 'reserver-ouverture', { classe: 'resa-media', priorite: true, sizes: '(max-width: 900px) 92vw, 32vw', attrs: 'data-iris-centre data-fx="parallaxe"' })}
</section>

<section class="section sombre" id="nouvel-an">
  <div class="conteneur nouvel-an">
    <div>
      <p class="surtitre" data-anime>${c.t('reserver.nouvelAnSurtitre')}</p>
      <h2 data-anime="lignes">${c.t('reserver.nouvelAnTitre')}</h2>
      ${img(c, 'nouvel-an', { sizes: '(max-width: 900px) 92vw, 46vw', attrs: 'data-anime="rideau"' })}
      <p class="chapo" data-anime style="margin-top:24px">${c.t('reserver.nouvelAnTexte')}</p>
      <p class="doux" data-anime>${c.t('reserver.nouvelAnMention')}</p>
      <p data-anime><a class="bouton bouton--clair" href="#reservation" data-nouvel-an>${c.t('reserver.nouvelAnAction')}</a></p>
    </div>
    <div>
      <h3 data-anime>${c.t('reserver.nouvelAnMenu')}</h3>
      <ol class="plats-soiree" data-anime="cascade">${m.nouvelAn.plats.map((p) => html`<li><p style="margin:0"><strong>${p.titre}</strong><span>${p.texte}</span></p></li>`)}</ol>
      <p class="tarifs" data-anime data-prix style="font-family:var(--police-titres);font-size:1.6rem;margin-top:20px">${c.t('accueil.nouvelAnPrix')}</p>
    </div>
  </div>
</section>

<section class="section conteneur" id="bon-a-savoir">
  <div class="tete-section"><div><p class="surtitre" data-anime>${c.t('reserver.savoirSurtitre')}</p><h2 data-anime="lignes">${c.t('reserver.savoirTitre')}</h2></div></div>
  <div class="duo-image">
    <ul class="savoir" data-anime="cascade">
      <li>${c.t('reserver.savoir1')}</li><li>${c.t('reserver.savoir2')}</li><li>${c.t('reserver.savoir3')}</li><li>${c.t('reserver.savoir4')}</li>
    </ul>
    ${img(c, 'carte-cinq', { sizes: '(max-width: 900px) 92vw, 40vw', attrs: 'data-fx="zoom"' })}
  </div>
</section>

<section class="section sombre fin" id="fin">
  <div class="conteneur">
    ${gouttes('reserver')}
    <h2 data-anime="lignes">${c.t('reserver.telTexte')}</h2>
    <p class="chapo" data-anime>${c.t('commun.horaires')}</p>
    <div class="actions" data-anime><a class="bouton bouton--clair" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a><a class="bouton bouton--contour" href="tel:${c.site.contact.telephone2Lien}">${c.site.contact.telephone2}</a></div>
  </div>
</section>
`;
};
