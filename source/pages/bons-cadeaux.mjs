/* Bons cadeaux : la carte posée sur la nappe de fêtes, qui se dessine pendant qu'on remplit le bon ; trois temps ; appel. */
import { html } from '../../outils/gabarit.mjs';
import { img, gouttes } from '../gabarits/elements.mjs';

export const page = { cle: 'bons-cadeaux', fichier: 'bons-cadeaux', imagePartage: 'cadeaux-fond-1280.webp' };

const MONTANTS = [100, 150, 200, 250];

export default (c) => html`
<section class="cadeaux-tete" id="debut">
  ${img(c, 'cadeaux-fond', { priorite: true, sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="6"' })}
  <div class="cadeaux-tete-grille">
    <div class="cadeaux-texte">
      <p class="surtitre entree" data-anime="gsap">${c.t('cadeaux.surtitre')}</p>
      <h1 class="page-titre entree" data-anime="gsap" data-grille="typo">${c.tb('cadeaux.titre')}</h1>
      <p class="chapo entree" data-anime="gsap" data-info-cle>${c.t('cadeaux.texte')}</p>
      <form class="entree" data-anime="gsap" data-bon-form data-formulaire data-grille="retour" novalidate id="composer">
        <p class="etiquette" id="montant-titre">${c.t('cadeaux.montant')}</p>
        <div class="montants" role="group" aria-labelledby="montant-titre">${MONTANTS.map((v, i) => html`<button type="button" data-montant="${v}" aria-pressed="${i === 0 ? 'true' : 'false'}"${i === 0 ? html` data-action-principale` : ''}>${v} €</button>`)}</div>
        <input type="hidden" name="montant" value="100">
        <p class="doux" style="margin:12px 0 18px">${c.t('cadeaux.validite')}</p>
        <div class="champ"><label for="bon-de">${c.t('cadeaux.offrant')}</label><input id="bon-de" name="de" autocomplete="name" required></div>
        <div class="champ"><label for="bon-pour">${c.t('cadeaux.beneficiaire')}</label><input id="bon-pour" name="pour" required></div>
        <div class="champ"><label for="bon-mot">${c.t('cadeaux.message')}</label><input id="bon-mot" name="mot" maxlength="60" aria-describedby="bon-mot-aide"><p class="aide" id="bon-mot-aide">${c.t('cadeaux.messageAide')}</p></div>
        <div class="champ"><label for="bon-email">${c.t('cadeaux.email')}</label><input id="bon-email" name="email" type="email" autocomplete="email" required></div>
        <p class="mention-donnees">${c.t('contact.mention')}</p>
        <button class="bouton" type="submit">${c.t('cadeaux.valider')}</button>
        <p data-message-envoi hidden>${c.t('cadeaux.envoye')}</p>
      </form>
    </div>
    <div class="bon-colonne">
      <div class="bon" data-effet="bon" data-bon-cible data-iris-centre data-visuel>
        <span class="bon-reflet" aria-hidden="true" data-audit-ignorer></span>
        <div class="bon-haut"><img src="/assets/images/logo-clair.webp" alt="${c.s('commun.logoAlt')}" width="640" height="274"><p class="bon-marque">${c.t('cadeaux.carteMarque')}</p></div>
        <p class="bon-montant" data-bon-montant data-prix>100 €</p>
        <div class="bon-bas">
          <p>${c.t('cadeaux.cartePour')}<b data-bon-pour>…</b></p>
          <p>${c.t('cadeaux.carteDe')}<b data-bon-de>…</b></p>
          <p class="bon-mot" data-bon-mot>${c.t('cadeaux.carteValidite')}</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section conteneur" id="comment">
  <div class="tete-section"><div><p class="surtitre" data-anime>${c.t('cadeaux.etapesSurtitre')}</p><h2 data-anime="lignes">${c.tb('cadeaux.etapesTitre')}</h2></div></div>
  <ol class="etapes" data-anime="cascade">
    <li><h3>${c.t('cadeaux.etape1Titre')}</h3><p>${c.t('cadeaux.etape1Texte')}</p></li>
    <li><h3>${c.t('cadeaux.etape2Titre')}</h3><p>${c.t('cadeaux.etape2Texte')}</p></li>
    <li><h3>${c.t('cadeaux.etape3Titre')}</h3><p>${c.t('cadeaux.etape3Texte')}</p></li>
  </ol>
  <div class="duo-image" style="margin-top:clamp(40px,6vw,80px)">
    ${img(c, 'cadeau-morilles', { sizes: '(max-width: 900px) 92vw, 50vw', attrs: 'data-fx="parallaxe"' })}
    <div>
      <h3 data-anime>${c.t('cadeaux.ideeTitre')}</h3>
      <p class="doux" data-anime>${c.t('cadeaux.ideeTexte')}</p>
      <p data-anime>${c.lien('menus', { classe: 'lien-fleche', texte: c.t('accueil.menusLien') })}</p>
    </div>
  </div>
</section>

<section class="section sombre fin" id="fin">
  <div class="conteneur">
    ${gouttes('cadeaux')}
    <h2 data-anime="lignes">${c.tb('cadeaux.finTitre')}</h2>
    <p class="chapo" data-anime>${c.t('cadeaux.finTexte')}</p>
    <div class="actions" data-anime><a class="bouton bouton--clair" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.appeler')} ${c.site.contact.telephone}</a>${c.lien('reserver', { classe: 'bouton bouton--contour', texte: c.t('accueil.finAction') })}</div>
  </div>
</section>
`;
