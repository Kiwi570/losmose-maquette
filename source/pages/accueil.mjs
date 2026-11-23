/* Accueil de L'Osmose : le nom et l'assiette, la philosophie, les menus, l'accord, le chef, la salle,
   les fêtes, la privatisation, les infos pratiques et l'appel final. Chaque section a un effet au défilement. */
import { html, brut } from '../../outils/gabarit.mjs';
import { img, verre, gouttes, cadran, prix } from '../gabarits/elements.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'accueil-ouverture-1280.webp' };

const COULEURS_VINS = ['#E9C46A', '#F2A27E', '#B23A48', '#7A1F2B'];

export default (c) => {
  const m = c.donnees.menus;
  const nom = c.s('accueil.titre').replace(/'/g, '’');
  const titre = brut(nom.replace('O', '<span class="o" data-effet="o-vin" data-grille="typo">O</span>'));
  const reperes = [0, 1, 5, 6].map((i) => m.parcours[i]);
  return html`
<section class="hero" id="debut">
  <div class="hero-texte">
    <p class="surtitre" data-anime="gsap">${c.t('accueil.surtitre')}</p>
    <h1 class="hero-titre" data-anime="gsap"><span class="titre-masque"><span class="titre-ligne">${titre}</span></span></h1>
    <p class="chapo" data-anime="gsap">${c.t('accueil.texte')}</p>
    <div class="actions" data-anime="gsap">
      ${c.lien('reserver', { classe: 'bouton', texte: c.t('accueil.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      ${c.lien('menus', { classe: 'lien-fleche', texte: c.t('accueil.voirMenus') })}
    </div>
    <p class="hero-info" data-info-cle data-anime="gsap"><span class="pastille" data-statut-lieu><span class="point"></span><span data-statut-texte>${c.t('commun.statutAttente')}</span></span><span>${c.t('commun.menusDes')}</span></p>
  </div>
  <div class="triptyque" data-effet="triptyque" data-souris>
    <div class="arche-cadre arche-cadre--g"><div class="arche-clip">${img(c, 'arche-gauche', { classe: 'arche', priorite: true, sizes: '(max-width: 760px) 30vw, 18vw', attrs: '' })}<span class="reflet" aria-hidden="true" data-audit-ignorer></span></div></div>
    <div class="arche-cadre arche-cadre--c"><div class="arche-clip">${img(c, 'accueil-ouverture', { classe: 'arche', priorite: true, sizes: '(max-width: 760px) 38vw, 22vw', attrs: 'data-iris-centre' })}<span class="reflet" aria-hidden="true" data-audit-ignorer></span></div></div>
    <div class="arche-cadre arche-cadre--d"><div class="arche-clip">${img(c, 'arche-droite', { classe: 'arche', priorite: true, sizes: '(max-width: 760px) 30vw, 18vw', attrs: '' })}<span class="reflet" aria-hidden="true" data-audit-ignorer></span></div></div>
  </div>
</section>

<section class="section conteneur manifeste" id="philosophie">
  <div>
    <p class="surtitre" data-anime>${c.t('accueil.manifesteSurtitre')}</p>
    <p class="manifeste-citation" data-anime="mots">${c.t('accueil.manifeste')}</p>
    <p class="chapo doux" data-anime>${c.t('accueil.manifesteTexte')}</p>
  </div>
  <div class="disques" data-effet="osmose">
    <div class="disque disque--mets">${img(c, 'osmose-mets', { sizes: '(max-width: 900px) 56vw, 24vw' })}<span class="disque-legende">${c.t('accueil.mets')}</span></div>
    <div class="disque disque--vin">${img(c, 'osmose-vin', { sizes: '(max-width: 900px) 56vw, 24vw' })}<span class="disque-legende">${c.t('accueil.vin')}</span></div>
    <span class="disque-union" aria-hidden="true" data-audit-ignorer>${nom}</span>
  </div>
</section>

<section class="section gres" id="menus">
  <div class="conteneur">
    <div class="tete-section">
      <div><p class="surtitre" data-anime>${c.t('accueil.menusSurtitre')}</p><h2 data-anime="lignes">${c.tb('accueil.menusTitre')}</h2></div>
      ${c.lien('menus', { classe: 'lien-fleche', texte: c.t('accueil.menusLien') })}
    </div>
    <ul class="cartes-menus" data-anime="cascade">${m.cartes.map((x) => html`<li class="carte-menu">
      ${img(c, x.image, { sizes: '(max-width: 760px) 92vw, (max-width: 1100px) 46vw, 30vw' })}
      <div class="carte-menu-corps">
        <h3>${x.nom}</h3>
        <p class="quand">${x.quand}</p>
        <p>${x.texte}</p>
        <p class="prix" data-prix><span data-compteur="${x.prix}">${x.prix}</span> €<small>${c.t('accueil.parPersonne')}</small></p>
        ${x.accord ? html`<p class="accord-ligne">${c.t('accueil.accordPrix', { prix: x.accord })}</p>` : ''}
      </div>
    </li>`)}</ul>
    <div class="menus-plus"><p>${c.t('accueil.menusPlus')}</p>${c.lien('reserver', { classe: 'bouton bouton--contour', texte: c.t('accueil.action') })}</div>
  </div>
</section>

<section class="section sombre" id="accord">
  <div class="conteneur accord">
    <div>
      <p class="surtitre" data-anime>${c.t('accueil.accordSurtitre')}</p>
      <h2 data-anime="lignes">${c.tb('accueil.accordTitre')}</h2>
      <p class="chapo" data-anime>${c.t('accueil.accordTexte')}</p>
      <div class="choix" role="group" aria-label="${c.s('accueil.accordChoix')}" data-choix-accord>
        <button type="button" aria-pressed="true" data-verres="3" data-total="${m.cartes[1].accord}" data-formule="quatre-accord">${c.t('accueil.accordQuatre')}</button>
        <button type="button" aria-pressed="false" data-verres="4" data-total="${m.cartes[2].accord}" data-formule="cinq-accord">${c.t('accueil.accordCinq')}</button>
      </div>
      <div class="verres" data-effet="verres" data-grille="manipuler">${COULEURS_VINS.map((col, i) => verre(i, col))}</div>
      <p class="verres-astuce" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 12a8 8 0 1 1-2.34-5.66M20 4v4h-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>${c.t('accueil.accordAstuce')}</p>
      <p class="accord-total" aria-live="polite"><strong class="prix" data-prix><span data-accord-total>${m.cartes[1].accord}</span> €</strong><span data-accord-verres>${c.t('accueil.accordVerres', { n: 3 })}</span></p>
      ${c.lien('reserver', { classe: 'bouton bouton--clair', params: 'formule=quatre-accord', texte: c.t('accueil.accordLien'), attrs: 'data-accord-lien data-survol="magnetique"' })}
    </div>
    ${img(c, 'accord-verres', { classe: 'accord-media', sizes: '(max-width: 900px) 92vw, 44vw', attrs: 'data-fx="parallaxe"' })}
  </div>
</section>

<section class="section conteneur chef" id="chef">
  ${img(c, 'chef-assiette', { classe: 'chef-media', sizes: '(max-width: 900px) 92vw, 40vw', attrs: 'data-anime="rideau"' })}
  <div>
    <p class="surtitre" data-anime>${c.t('accueil.chefSurtitre')}</p>
    <h2 data-anime="lignes">${c.tb('accueil.chefTitre')}</h2>
    <p class="chapo doux" data-anime>${c.t('accueil.chefTexte')}</p>
    <div class="frise">
      <svg class="frise-trait" viewBox="0 0 4 100" preserveAspectRatio="none" aria-hidden="true" data-fx="trace"><path d="M2 0 V 100" fill="none" stroke="currentColor" stroke-width="3" vector-effect="non-scaling-stroke"/></svg>
      <ol>${reperes.map((p) => html`<li data-anime><span class="quand">${p.quand}</span><strong>${p.titre}</strong><p>${p.texte}</p></li>`)}</ol>
    </div>
    ${c.lien('la-maison', { classe: 'lien-fleche', texte: c.t('accueil.chefLien') })}
  </div>
</section>

<section class="section gres salle" id="salle">
  <div class="vitrail" aria-hidden="true">
    <span data-effet="vitrail" style="--c:#D8574A;--t:260px;left:6%;top:12%"></span><span data-effet="vitrail" style="--c:#E9B44C;--t:200px;left:22%;top:48%"></span>
    <span data-effet="vitrail" style="--c:#7FA36B;--t:180px;left:48%;top:8%"></span><span data-effet="vitrail" style="--c:#C2457A;--t:240px;left:70%;top:52%"></span>
    <span data-effet="vitrail" style="--c:#E9B44C;--t:160px;left:86%;top:16%"></span>
  </div>
  <div class="conteneur salle-grille">
    <div>
      <p class="surtitre" data-anime>${c.t('accueil.salleSurtitre')}</p>
      <h2 data-anime="lignes">${c.tb('accueil.salleTitre')}</h2>
      <p class="chapo" data-anime>${c.t('accueil.salleTexte')}</p>
      <ul class="puces" data-anime="cascade"><li>${c.t('accueil.salleParking')}</li><li>${c.t('commun.horaires')}</li></ul>
      ${c.lien('la-maison', { ancre: 'salle', classe: 'lien-fleche', texte: c.t('accueil.chefLien') })}
    </div>
    <div class="salle-composition">
      ${img(c, 'recevoir-tablee', { classe: 'salle-mur', sizes: '(max-width: 900px) 92vw, 50vw', attrs: 'data-fx="zoom"' })}
      ${img(c, 'salle-arche', { classe: 'salle-arche', sizes: '(max-width: 900px) 48vw, 22vw', attrs: 'data-superpose data-fx="vitesse"' })}
      <p class="legende">${c.t('accueil.salleLegende')}</p>
    </div>
  </div>
</section>

<section class="section conteneur" id="en-ce-moment">
  <div class="tete-section"><div><p class="surtitre" data-anime>${c.t('accueil.momentSurtitre')}</p><h2 data-anime="lignes">${c.tb('accueil.momentTitre')}</h2></div></div>
  <div class="moment-grille" data-anime="cascade">
    <article class="moment-carte moment-carte--nuit">
      ${img(c, 'nouvel-an', { sizes: '(max-width: 900px) 92vw, 58vw' })}
      <div class="moment-corps">
        <span class="compte" data-compte="${m.nouvelAn.date}">${c.t('accueil.compte')}</span>
        <h3>${c.t('accueil.nouvelAnTitre')}</h3>
        <p class="date">${c.t('accueil.nouvelAnDate')}</p>
        <p>${c.t('accueil.nouvelAnTexte')}</p>
        <p class="tarifs" data-prix>${c.tb('accueil.nouvelAnPrix')}</p>
        <p class="doux">${c.t('accueil.nouvelAnMention')}</p>
        <div class="actions">${c.lien('reserver', { ancre: 'nouvel-an', classe: 'bouton bouton--clair', texte: c.t('accueil.nouvelAnLien') })}</div>
      </div>
    </article>
    <article class="moment-carte">
      ${img(c, 'cadeau-morilles', { sizes: '(max-width: 900px) 92vw, 36vw' })}
      <div class="moment-corps">
        <h3>${c.t('accueil.cadeauxTitre')}</h3>
        <p>${c.t('accueil.cadeauxTexte')}</p>
        <div class="actions">${c.lien('bons-cadeaux', { classe: 'lien-fleche', texte: c.t('accueil.cadeauxLien') })}</div>
      </div>
    </article>
  </div>
</section>

<section class="section conteneur infos" id="infos">
  <div class="cadran" data-visuel data-effet="aiguille" data-horaires-cadran>${cadran(c)}<div class="cadran-centre"><strong data-statut-cadran>${c.t('commun.statutAttente')}</strong></div></div>
  <div>
    <p class="surtitre" data-anime>${c.t('accueil.infosSurtitre')}</p>
    <h2 data-anime="lignes">${c.tb('accueil.infosTitre')}</h2>
    <div class="infos-liste" data-anime="cascade">
      <div><h3>${c.t('accueil.infosHoraires')}</h3><p>${c.t('commun.horaires')}</p></div>
      <div><h3>${c.t('accueil.infosAdresse')}</h3><p>${c.site.contact.adresse}<br>${c.site.contact.entree}</p></div>
      <div><h3>${c.t('accueil.infosParking')}</h3><p>${c.t('accueil.infosParkingTexte')}</p></div>
      <div><h3>${c.t('accueil.infosPaiement')}</h3><p>${c.t('commun.paiements')}</p></div>
    </div>
    ${c.lien('contact', { classe: 'lien-fleche', texte: c.t('accueil.infosLien') })}
  </div>
</section>

<section class="section sombre fin" id="reserver-fin">
  <div class="conteneur">
    ${gouttes('fin')}
    <h2 data-anime="lignes">${c.tb('accueil.finTitre')}</h2>
    <p class="chapo" data-anime>${c.t('accueil.finTexte')}</p>
    <div class="actions" data-anime>
      ${c.lien('reserver', { classe: 'bouton bouton--clair', texte: c.t('accueil.finAction'), attrs: 'data-survol="magnetique"' })}
      <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.appeler')} ${c.site.contact.telephone}</a>
    </div>
  </div>
</section>
`;
};
