/* Les menus : prix en très grand ; menu du jour ; carte des 4 et 5 services ; All Inclusive (composeur) ; galerie ; appel. */
import { html } from '../../outils/gabarit.mjs';
import { img, gouttes } from '../gabarits/elements.mjs';

export const page = { cle: 'menus', fichier: 'menus', imagePartage: 'menus-ouverture-1280.webp' };

export default (c) => {
  const m = c.donnees.menus;
  const [jour, quatre, cinq] = m.cartes;
  return html`
<section class="page-haut conteneur menus-tete" id="debut">
  <div>
    <p class="surtitre entree masque-ecran-tres-bas" data-anime="gsap">${c.t('menus.surtitre')}</p>
    <h1 class="page-titre entree" data-anime="gsap" data-grille="typo">${c.tb('menus.titre')}</h1>
    <p class="chapo entree masque-ecran-bas" data-anime="gsap">${c.t('menus.texte')}</p>
    <ul class="grands-prix entree" data-anime="gsap" data-info-cle>
      ${m.cartes.map((x) => html`<li><strong data-prix><span data-compteur="${x.prix}">${x.prix}</span>€</strong><span>${x.nom}<small>${x.quand}</small></span></li>`)}
    </ul>
    <p class="actions entree" data-anime="gsap">${c.lien('reserver', { classe: 'bouton', texte: c.t('accueil.action'), attrs: 'data-action-principale data-survol="magnetique"' })}<a class="lien-fleche" href="#all-inclusive" data-sans-transition>${c.t('menus.aiSurtitre')}</a></p>
  </div>
  ${img(c, 'menus-ouverture', { classe: 'menus-tete-media', priorite: true, sizes: '(max-width: 900px) 92vw, 50vw', attrs: 'data-iris-centre data-fx="parallaxe"' })}
</section>

<section class="section gres" id="menu-du-jour">
  <div class="conteneur carte-jour">
    ${img(c, 'menus-jour', { sizes: '(max-width: 900px) 92vw, 46vw', attrs: 'data-anime="rideau"' })}
    <div>
      <p class="surtitre" data-anime>${jour.quand}</p>
      <h2 data-anime="lignes">${c.tb('menus.jourTitre')}</h2>
      <p class="chapo" data-anime>${c.t('menus.jourTexte')}</p>
      <p class="prix" data-anime data-prix><span data-compteur="${jour.prix}">${jour.prix}</span> €<small>${c.t('accueil.parPersonne')}</small></p>
      <p data-anime>${c.lien('reserver', { params: 'formule=jour', classe: 'lien-fleche', texte: c.t('accueil.action') })}</p>
    </div>
  </div>
</section>

<section class="section conteneur" id="carte">
  <div class="tete-section"><div><p class="surtitre" data-anime>${c.t('menus.surtitre')}</p><h2 data-anime="lignes">${c.tb('menus.servicesTitre')}</h2></div><p class="doux" data-anime style="max-width:28em;margin:0">${c.t('menus.servicesTexte')}</p></div>
  <div class="services-grille">
    <div>
      <div class="tableau-menus" data-anime="cascade" role="table" aria-label="${c.s('menus.servicesTitre').replace(/<[^>]+>/g, '')}">
        <div role="row" style="display:contents"><p class="entete" role="columnheader">${c.t('menus.surtitre')}</p><p class="entete" role="columnheader" style="text-align:center">${c.t('menus.quatreNom')}</p><p class="entete" role="columnheader" style="text-align:center">${c.t('menus.cinqNom')}</p></div>
        ${m.plats.map((p) => html`<div role="row" style="display:contents"><p class="plat" role="cell"><strong>${p.titre}</strong><span>${p.texte}</span></p><p class="coche${p.cinq ? ' coche--non' : ''}" role="cell">${p.cinq ? html`<span class="visuellement-cache">${c.t('menus.enCinq')}</span><span aria-hidden="true">·</span>` : '✓'}</p><p class="coche" role="cell">✓</p></div>`)}
        <div role="row" style="display:contents"><p class="plat" role="cell"><strong>${c.t('menus.prixMenu')}</strong></p><p class="total" role="cell" data-prix>${quatre.prix} €</p><p class="total" role="cell" data-prix>${cinq.prix} €</p></div>
        <div role="row" style="display:contents"><p class="plat" role="cell"><strong>${c.t('menus.accordLigne')}</strong><span>${c.t('menus.accordVerres', { n: '3 ou 4' })}</span></p><p class="total" role="cell" data-prix>${quatre.accord} €<small>${quatre.verres} verres<span class="masque-tel"> de 10 cl</span></small></p><p class="total" role="cell" data-prix>${cinq.accord} €<small>${cinq.verres} verres<span class="masque-tel"> de 10 cl</span></small></p></div>
      </div>
      <p class="allergenes">${c.t('menus.allergenes')}</p>
      <div class="enfant" data-anime><h3>${c.t('menus.enfantTitre')}</h3><p class="prix" data-prix>${m.enfant.prix} €</p><p class="doux">${m.enfant.texte}</p></div>
      <p class="actions" style="margin-top:24px">${c.lien('reserver', { params: 'formule=quatre', classe: 'bouton', texte: c.t('accueil.action') })}</p>
    </div>
    <div class="services-images">
      ${img(c, 'carte-quatre', { sizes: '(max-width: 900px) 92vw, 30vw', attrs: 'data-fx="vitesse"' })}
      ${img(c, 'menus-chocolat', { sizes: '(max-width: 900px) 92vw, 30vw', attrs: 'data-fx="vitesse"' })}
    </div>
  </div>
</section>

<section class="section sombre" id="all-inclusive">
  <div class="conteneur">
    <div class="tete-section"><div><p class="surtitre" data-anime>${c.t('menus.aiSurtitre')}</p><h2 data-anime="lignes">${c.tb('menus.aiTitre')}</h2></div><p class="doux" data-anime style="max-width:30em;margin:0">${c.t('menus.aiTexte')}</p></div>
    <div class="composeur" data-composeur>
      <div>
        <fieldset>
          <legend>${c.t('menus.aiServices')}</legend>
          <div class="formules" data-anime="cascade">${m.allInclusive.map((f, i) => html`<div class="formule"><input type="radio" name="services" id="ai-${f.services}" value="${f.services}" data-prix="${f.prix}" data-avant="${f.avant}"${i === 1 ? html` checked` : ''}><label for="ai-${f.services}"><span>${f.services} services</span><strong data-prix>${f.prix} €</strong><s>${c.t('menus.aiAvant', { prix: f.avant })}</s></label></div>`)}</div>
        </fieldset>
        <fieldset>
          <legend>${c.t('menus.aiPersonnes')}</legend>
          <div class="nombre"><button type="button" data-nombre="-1" aria-label="Une personne de moins">−</button><output data-nombre-sortie value="2" aria-live="polite">2</output><button type="button" data-nombre="1" aria-label="Une personne de plus">+</button></div>
        </fieldset>
        <div class="aperitif">${img(c, 'aperitif', { sizes: '140px' })}<p>${c.t('menus.aperitifLegende')}<br>${c.t('menus.aiOptions')}</p></div>
      </div>
      <aside class="recap" aria-live="polite">
        <h3>${c.t('menus.aiTotal')}</h3>
        <ul><li><span data-recap-formule>4 services · 2 personnes</span></li></ul>
        <p class="prix" data-prix><span data-recap-total>156</span> €</p>
        <p class="doux" data-recap-avant>${c.t('menus.aiAvant', { prix: 230 })}</p>
        <p class="economie" data-recap-economie>${c.t('menus.aiEconomie', { prix: 74 })}</p>
        <p class="petit">${c.t('menus.aiConditions')}</p>
        ${c.lien('reserver', { params: 'formule=all-inclusive-4&couverts=2', classe: 'bouton', texte: c.t('menus.aiAction'), attrs: 'data-composeur-lien' })}
        <p class="petit" style="margin-top:12px">${c.t('menus.aiIllustratif')}</p>
      </aside>
    </div>
  </div>
</section>

<section class="section galerie-assiettes" id="assiettes">
  <div class="conteneur tete-section"><div><p class="surtitre" data-anime>${c.t('menus.galerieSurtitre')}</p><h2 data-anime="lignes">${c.tb('menus.galerieTitre')}</h2></div><p class="glisser" data-anime>${c.t('menus.galerieGlisser')} →</p></div>
  <div class="piste-assiettes" tabindex="0" role="region" aria-label="${c.s('menus.galerieRegion')}" data-galerie>
    <div class="rail-assiettes" data-anime="cascade">${m.galerie.map((g) => img(c, g, { sizes: '(max-width: 760px) 70vw, 26vw', attrs: 'data-survol="incline" data-survol-force="5"' }))}</div>
  </div>
</section>

<section class="section sombre fin" id="fin">
  <div class="conteneur">
    ${gouttes('menus')}
    <h2 data-anime="lignes">${c.tb('menus.finTitre')}</h2>
    <p class="chapo" data-anime>${c.t('menus.finTexte')}</p>
    <div class="actions" data-anime>${c.lien('reserver', { classe: 'bouton bouton--clair', texte: c.t('accueil.finAction'), attrs: 'data-survol="magnetique"' })}<a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.appeler')} ${c.site.contact.telephone}</a></div>
  </div>
</section>
`;
};
