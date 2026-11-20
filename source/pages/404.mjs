/* Page 404 de L'Osmose : l'assiette déjà repartie en cuisine. */
import { html } from '../../outils/gabarit.mjs';
import { img } from '../gabarits/elements.mjs';

export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };

export default (c) => html`
<section class="conteneur introuvable page-haut" id="debut">
  <div>
    <p class="surtitre entree" data-anime="gsap" data-info-cle>404</p>
    <h1 class="entree" data-anime="gsap">${c.t('introuvable.titre')}</h1>
    <p class="chapo entree" data-anime="gsap">${c.t('introuvable.texte')}</p>
    <div class="actions entree" data-anime="gsap">${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })}${c.lien('menus', { classe: 'lien-fleche', texte: c.t('introuvable.menus') })}</div>
    <p class="doux entree" data-anime="gsap">${c.t('commun.horaires')}</p>
  </div>
  ${img(c, 'page-404', { priorite: true, sizes: '(max-width: 900px) 92vw, 46vw', attrs: 'data-iris-centre data-fx="parallaxe"' })}
</section>
`;
