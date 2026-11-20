/* La maison : titre centré puis bandeau de grès qui s'ouvre ; le chef et le sommelier ; le parcours ; Gault&Millau ;
   la salle ; privatiser ; appel final. */
import { html } from '../../outils/gabarit.mjs';
import { img, gouttes } from '../gabarits/elements.mjs';

export const page = { cle: 'la-maison', fichier: 'la-maison', imagePartage: 'maison-ouverture-1280.webp' };

export default (c) => {
  const m = c.donnees.menus;
  return html`
<section class="page-haut maison-tete section" id="debut">
  <div class="conteneur">
    <p class="surtitre entree" data-anime="gsap">${c.t('maison.surtitre')}</p>
    <h1 class="page-titre entree" data-anime="gsap">${c.t('maison.titre')}</h1>
    <p class="chapo entree masque-ecran-tres-bas" data-anime="gsap">${c.t('maison.texte')}</p>
    <p class="actions entree" data-anime="gsap" style="justify-content:center">${c.lien('reserver', { classe: 'bouton', texte: c.t('accueil.action'), attrs: 'data-action-principale data-survol="magnetique"' })}<span class="doux" data-info-cle>${c.t('commun.joursHoraires')}</span></p>
  </div>
  ${img(c, 'maison-ouverture', { classe: 'bandeau', priorite: true, sizes: '96vw', attrs: 'data-iris-centre data-effet="bandeau"' })}
</section>

<section class="section conteneur" id="duo">
  <div class="tete-section"><div><p class="surtitre" data-anime>${c.t('maison.duoSurtitre')}</p><h2 data-anime="lignes">${c.t('maison.duoTitre')}</h2></div></div>
  <ul class="duo" data-anime="cascade">
    <li class="duo-carte" data-survol="incline" data-survol-force="4">
      ${img(c, 'menus-spheres', { sizes: '(max-width: 760px) 92vw, 46vw' })}
      <div class="corps"><p class="role">${c.t('maison.chefRole')}</p><h3>${c.t('maison.chefNom')}</h3><p class="doux">${c.t('maison.chefTexte')}</p></div>
    </li>
    <li class="duo-carte" data-survol="incline" data-survol-force="4">
      ${img(c, 'accord-verres', { cadrage: '50% 72%', sizes: '(max-width: 760px) 92vw, 46vw' })}
      <div class="corps"><p class="role">${c.t('maison.sommelierRole')}</p><h3>${c.t('maison.sommelierNom')}</h3><p class="doux">${c.t('maison.sommelierTexte')}</p></div>
    </li>
  </ul>
</section>

<section class="section gres" id="parcours">
  <div class="conteneur parcours">
    <div>
      <p class="surtitre" data-anime>${c.t('maison.parcoursSurtitre')}</p>
      <h2 data-anime="lignes">${c.t('maison.parcoursTitre')}</h2>
      ${img(c, 'chef-assiette', { classe: 'chef-media', sizes: '(max-width: 900px) 92vw, 36vw', attrs: 'data-fx="parallaxe"' })}
    </div>
    <div class="frise">
      <svg class="frise-trait" viewBox="0 0 4 100" preserveAspectRatio="none" aria-hidden="true" data-fx="trace"><path d="M2 0 V 100" fill="none" stroke="currentColor" stroke-width="3" vector-effect="non-scaling-stroke"/></svg>
      <ol>${m.parcours.map((p) => html`<li data-anime><span class="quand">${p.quand}</span><strong>${p.titre}</strong><p>${p.texte}</p></li>`)}</ol>
    </div>
  </div>
</section>

<section class="section conteneur guide" id="gault-millau">
  <div class="note-guide" data-visuel data-anime>
    <strong data-compteur="13.5">13,5</strong><span>${c.t('maison.guideSur')}</span><em>${c.t('maison.guideCategorie')}</em>
  </div>
  <div>
    <p class="surtitre" data-anime>${c.t('maison.guideSurtitre')}</p>
    <h2 data-anime="lignes">${c.t('maison.guideCategorie')}</h2>
    <p class="chapo" data-anime>${c.t('maison.guideTexte')}</p>
    <p class="source" data-anime>${c.t('maison.guideSource')}</p>
  </div>
</section>

<section class="section gres salle" id="salle">
  <div class="vitrail" aria-hidden="true">
    <span data-effet="vitrail" style="--c:#D8574A;--t:240px;left:4%;top:20%"></span><span data-effet="vitrail" style="--c:#E9B44C;--t:190px;left:30%;top:58%"></span>
    <span data-effet="vitrail" style="--c:#7FA36B;--t:170px;left:56%;top:10%"></span><span data-effet="vitrail" style="--c:#C2457A;--t:220px;left:80%;top:46%"></span>
  </div>
  <div class="conteneur duo-image maison-salle">
    ${img(c, 'salle-arche', { sizes: '(max-width: 900px) 92vw, 38vw', attrs: 'data-anime="rideau"' })}
    <div>
      <p class="surtitre" data-anime>${c.t('maison.salleSurtitre')}</p>
      <h2 data-anime="lignes">${c.t('maison.salleTitre')}</h2>
      <p class="chapo" data-anime>${c.t('maison.salleTexte')}</p>
      <p class="legende" data-anime>${c.t('maison.salleLegende')}</p>
    </div>
  </div>
</section>

<section class="section conteneur recevoir" id="privatiser">
  <div>
    <p class="surtitre" data-anime>${c.t('maison.privatiserSurtitre')}</p>
    <h2 data-anime="lignes">${c.t('maison.privatiserTitre')}</h2>
    <p data-anime>${c.t('maison.privatiserTexte')}</p>
    <p class="doux" data-anime>${c.t('maison.privatiserMusique')} ${c.t('accueil.recevoirPetit')}</p>
    <p class="tel-fort" data-anime><a href="tel:${c.site.contact.telephone2Lien}">${c.t('accueil.recevoirTel')}</a></p>
    ${c.lien('contact', { ancre: 'message', params: 'sujet=privatisation', classe: 'bouton', texte: c.t('maison.privatiserLien') })}
  </div>
  ${img(c, 'recevoir-tablee', { classe: 'recevoir-media', sizes: '(max-width: 900px) 92vw, 56vw', attrs: 'data-fx="zoom"' })}
</section>

<section class="section sombre fin" id="fin">
  <div class="conteneur">
    ${gouttes('maison')}
    <h2 data-anime="lignes">${c.t('maison.finTitre')}</h2>
    <p class="chapo" data-anime>${c.t('maison.finTexte')}</p>
    <div class="actions" data-anime>${c.lien('reserver', { classe: 'bouton bouton--clair', texte: c.t('accueil.finAction'), attrs: 'data-survol="magnetique"' })}${c.lien('menus', { classe: 'bouton bouton--contour', texte: c.t('accueil.voirMenus') })}</div>
  </div>
</section>
`;
};
