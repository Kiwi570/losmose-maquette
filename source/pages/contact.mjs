/* Contact : le plan schématique d'abord (la goutte tombe sur le restaurant), les coordonnées posées à côté ;
   les horaires sur le cadran ; le message (simulé). */
import { html } from '../../outils/gabarit.mjs';
import { img, cadran, semaine } from '../gabarits/elements.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'salle-arche-960.webp' };

const SUJETS = [['reservation', 'contact.sujetReservation'], ['privatisation', 'contact.sujetPrivatisation'], ['cadeaux', 'contact.sujetCadeaux'], ['autre', 'contact.sujetAutre']];

export default (c) => {
  const k = c.site.contact;
  return html`
<section class="page-haut conteneur contact-tete" id="debut">
  <div class="plan entree" data-anime="gsap" data-effet="repere" data-iris-centre data-visuel>
    <svg viewBox="0 0 800 600" role="img" aria-label="${c.s('contact.planTitre')} : ${c.s('contact.restaurant')}, ${k.adresse}, ${c.s('contact.parkingPrive')}">
      <rect class="ilot" x="40" y="40" width="250" height="170" rx="18"/><rect class="ilot" x="340" y="30" width="180" height="150" rx="18"/>
      <rect class="ilot" x="560" y="60" width="210" height="190" rx="18"/><rect class="ilot" x="40" y="300" width="230" height="250" rx="18"/>
      <rect class="ilot" x="560" y="340" width="210" height="220" rx="18"/><rect class="ilot" x="330" y="420" width="170" height="150" rx="18"/>
      <path class="eau" d="M -20 270 C 160 250, 260 300, 420 280 S 700 300, 820 270"/>
      <path class="rue-bord" d="M -10 245 L 810 300" stroke-width="40"/><path class="rue" d="M -10 245 L 810 300" stroke-width="32"/>
      <path class="rue-bord" d="M 300 620 L 540 -10" stroke-width="40"/><path class="rue" d="M 300 620 L 540 -10" stroke-width="32"/>
      <text class="nom-rue" x="40" y="236" transform="rotate(3.9 40 236)">${c.t('contact.rue')}</text>
      <text class="nom-rue" x="0" y="0" transform="translate(470 120) rotate(-69)">${c.t('contact.avenue')}</text>
      <g class="p-public" transform="translate(150 120)"><circle r="20"/><text>P</text></g><text class="p-etiquette" x="178" y="125">${c.t('contact.parking1')}</text>
      <g class="p-public" transform="translate(640 420)"><circle r="20"/><text>P</text></g><text class="p-etiquette" x="560" y="465">${c.t('contact.parking2')}</text>
      <g class="p-public" transform="translate(120 420)"><circle r="20"/><text>P</text></g><text class="p-etiquette" x="60" y="465">${c.t('contact.parking3')}</text>
      <g class="p-public" transform="translate(600 205)"><circle r="20" style="fill:var(--accent)"/><text>P</text></g><text class="p-etiquette" x="626" y="210">${c.t('contact.parkingPrive')}</text>
      <g class="repere-tombe" transform="translate(0 0)"><ellipse class="repere-ombre" cx="455" cy="252" rx="22" ry="7"/><path class="repere-goutte" d="M455 250 C 425 210, 418 192, 418 176 A 37 37 0 1 1 492 176 C 492 192, 485 210, 455 250 Z"/><circle class="repere-coeur" cx="455" cy="175" r="14"/></g>
      <text class="repere-nom" x="500" y="168">${c.t('contact.restaurant')}</text>
    </svg>
    <p class="plan-note">${c.t('contact.planNote')}</p>
  </div>
  <div class="coord">
    <p class="surtitre entree" data-anime="gsap">${c.t('contact.surtitre')}</p>
    <h1 class="entree" data-anime="gsap">${c.t('contact.titre')}</h1>
    <p class="entree masque-ecran-bas" data-anime="gsap">${c.t('contact.texte')}</p>
    <p class="actions entree" data-anime="gsap"><a class="bouton" href="tel:${k.telephoneLien}" data-action-principale>${c.t('commun.appeler')}</a><a class="lien-fleche" href="#message" data-sans-transition>${c.t('contact.messageTitre')}</a></p>
    <p class="hero-info entree" data-anime="gsap" data-info-cle><span class="pastille" data-statut-lieu><span class="point"></span><span data-statut-texte>${c.t('commun.statutAttente')}</span></span></p>
    <dl class="entree" data-anime="gsap">
      <div><dt>${c.t('accueil.infosAdresse')}</dt><dd>${k.adresse}<br>${k.entree}</dd></div>
      <div><dt>${c.t('contact.telephones')}</dt><dd><a href="tel:${k.telephoneLien}">${k.telephone}</a> · <a href="tel:${k.telephone2Lien}">${k.telephone2}</a></dd></div>
      <div><dt>${c.t('contact.email')}</dt><dd><span class="courriel">${k.email}</span></dd></div>
    </dl>
  </div>
</section>

<section class="section gres" id="horaires">
  <div class="conteneur horaires-bloc">
    <div class="cadran" data-visuel data-effet="aiguille" data-horaires-cadran>${cadran(c)}<div class="cadran-centre"><strong data-statut-cadran>${c.t('commun.statutAttente')}</strong></div></div>
    <div>
      <p class="surtitre" data-anime>${c.t('contact.horairesSurtitre')}</p>
      <h2 data-anime="lignes">${c.t('contact.horairesTitre')}</h2>
      <div data-horaires-semaine data-anime>${semaine(c)}</div>
      <p class="doux" data-anime style="margin-top:18px">${c.t('accueil.infosParkingTexte')}</p>
    </div>
  </div>
</section>

<section class="section conteneur message" id="message">
  <div>
    <p class="surtitre" data-anime>${c.t('contact.messageSurtitre')}</p>
    <h2 data-anime="lignes">${c.t('contact.messageTitre')}</h2>
    ${img(c, 'salle-arche', { sizes: '(max-width: 900px) 92vw, 36vw', attrs: 'data-anime="rideau"' })}
    <h3 style="margin-top:28px;font-size:1.2rem" data-anime>${c.t('contact.paiementTitre')}</h3>
    <ul class="paiements" data-anime="cascade">${c.s('commun.paiements').split(', ').map((p) => html`<li>${p}</li>`)}</ul>
  </div>
  <form data-formulaire novalidate>
    <div class="champ"><label for="sujet">${c.t('contact.sujet')}</label><select id="sujet" name="sujet">${SUJETS.map(([v, t]) => html`<option value="${v}">${c.t(t)}</option>`)}</select></div>
    <div class="champ"><label for="msg-nom">${c.t('contact.nom')}</label><input id="msg-nom" name="nom" autocomplete="name" required></div>
    <div class="champ"><label for="msg-email">${c.t('contact.courriel')}</label><input id="msg-email" name="email" type="email" autocomplete="email" required></div>
    <div class="champ"><label for="msg-texte">${c.t('contact.messageChamp')}</label><textarea id="msg-texte" name="message" rows="5" required></textarea></div>
    <p class="mention-donnees">${c.t('contact.mention')}</p>
    <button class="bouton" type="submit">${c.t('contact.envoyer')}</button>
    <p data-message-envoi hidden></p>
  </form>
</section>
`;
};
