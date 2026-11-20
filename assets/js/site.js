/* Effets propres à L'Osmose. Le socle gère l'ouverture, le voile, l'en-tête, les apparitions et la bibliothèque d'effets.
   Effets du plan (data-effet) : gouttes (intro et appel final), osmose (deux disques qui se mêlent), verres (verres qui se
   remplissent), vitrail (taches de lumière colorée), aiguille (cadran des horaires), repere (goutte du plan), bon (carte cadeau). */
import { demarrer, versObjet, quand, boucle } from './socle/index.js?v=1';
import { preparer as preparerHoraires, statut, maintenant, rendreCadran, rendreTexte } from '../modules/horaires/horaires-calcul.js?v=1';

const gsap = window.gsap;
const ST = () => window.ScrollTrigger;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const tel = () => window.matchMedia('(max-width: 760px)').matches;

/* ---------- Horaires : statut du lieu, à l'heure d'Obernai, formulé en positif quand c'est fermé. ---------- */
let horaires = null;
try { horaires = preparerHoraires(JSON.parse($('#horaires-donnees').textContent)); } catch (e) { horaires = null; }
function statutDuLieu() {
  if (!horaires) return null;
  const a = horaires.adresses[0], n = maintenant(horaires.fuseau);
  const s = statut(a, n, horaires.seuil);
  let texte = s.texte;
  if (s.etat === 'ferme') texte = s.texte.replace(/^Fermé · /, '').replace(/^Fermé pour le moment$/, 'Du mardi au samedi');
  texte = texte.charAt(0).toUpperCase() + texte.slice(1);
  return { ...s, texte, a, n };
}
function poserStatut() {
  const s = statutDuLieu();
  if (!s) return;
  $$('[data-statut-lieu]').forEach((el) => { el.dataset.statut = s.etat; const t = $('[data-statut-texte]', el); if (t) t.textContent = s.texte; });
  $$('[data-statut-cadran]').forEach((el) => { el.textContent = s.texte; });
  $$('[data-horaires-cadran]').forEach((el) => {
    const svg = $('svg', el);
    if (svg) svg.outerHTML = rendreCadran(s.a, s.n);
  });
  $$('[data-horaires-semaine]').forEach((el) => { el.innerHTML = rendreTexte(s.a, s.n); });
}

/* ---------- Compte des jours avant une date (heure d'Obernai). ---------- */
function poserComptes() {
  $$('[data-compte]').forEach((el) => {
    const n = maintenant('Europe/Paris');
    const jours = Math.round((Date.parse(el.dataset.compte) - Date.parse(n.iso)) / 864e5);
    if (jours > 1) el.textContent = `Dans ${jours} jours`;
    else if (jours === 1) el.textContent = 'Demain soir';
    else if (jours === 0) el.textContent = 'Ce soir';
  });
}

/* ---------- Osmose : le mets et le vin se rapprochent et se mêlent au défilement. ---------- */
function osmose() {
  const bloc = $('[data-effet="osmose"]');
  if (!bloc || !ST()) return;
  const [mets, vin] = $$('.disque', bloc);
  const tl = gsap.timeline({ scrollTrigger: { trigger: bloc, start: 'top 90%', end: 'center 45%', scrub: 0.6 } });
  tl.fromTo(mets, { xPercent: 0, rotate: -10 }, { xPercent: 30, rotate: 0, ease: 'none' }, 0)
    .fromTo(vin, { xPercent: 0, rotate: 10 }, { xPercent: -30, rotate: 0, ease: 'none' }, 0);
}

/* ---------- Verres : 3 ou 4 verres qui se remplissent par le fond, selon le menu. ---------- */
function verres() {
  const bloc = $('[data-effet="verres"]');
  if (!bloc) return;
  const tous = $$('.verre', bloc), vins = tous.map((v) => $('.vin', v));
  const choix = $$('[data-choix-accord] button');
  const total = $('[data-accord-total]'), legende = $('[data-accord-verres]'), lien = $('[data-accord-lien]');
  let combien = 3;
  const vide = { attr: { y: 72, height: 0 } }, plein = { attr: { y: 24, height: 48 } };
  gsap.set(vins, vide);
  const remplir = (delai = 0) => {
    tous.forEach((v, i) => v.classList.toggle('cache', i >= combien));
    gsap.fromTo(vins.slice(0, combien), vide, { ...plein, duration: 1.1, ease: 'power2.out', stagger: 0.16, delay: delai, overwrite: true });
  };
  tous.forEach((v, i) => v.classList.toggle('cache', i >= combien));
  if (ST()) ST().create({ trigger: bloc, start: 'top 82%', once: true, onEnter: () => remplir() });
  else remplir();
  choix.forEach((b) => b.addEventListener('click', () => {
    choix.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    combien = +b.dataset.verres;
    if (total) total.textContent = b.dataset.total;
    if (legende) legende.textContent = `${combien} verres de 10 cl`;
    if (lien) { const u = new URL(lien.href, location.href); u.searchParams.set('formule', b.dataset.formule); lien.href = u.pathname + u.search; }
    gsap.to(vins, { ...vide, duration: 0.25, overwrite: true, onComplete: () => remplir() });
  }));
}

/* ---------- Vitrail : les taches de lumière colorée glissent à des vitesses différentes. ---------- */
function vitrail() {
  const taches = $$('.vitrail span');
  if (!taches.length || !ST()) return;
  taches.forEach((t, i) => {
    t.setAttribute('data-effet', 'vitrail');
    gsap.fromTo(t, { yPercent: 40 + i * 12, xPercent: i % 2 ? -12 : 12, rotate: -8 }, {
      yPercent: -40 - i * 10, xPercent: i % 2 ? 14 : -14, rotate: 10, ease: 'none',
      scrollTrigger: { trigger: t.closest('section'), start: 'top bottom', end: 'bottom top', scrub: 0.8 },
    });
  });
}

/* ---------- Cadran : l'aiguille rejoint l'heure d'Obernai quand le cadran entre à l'écran. ---------- */
function aiguille() {
  $$('[data-effet="aiguille"]').forEach((bloc) => {
    const go = () => {
      const g = $('.horaires__aiguille', bloc), n = maintenant('Europe/Paris');
      if (!g) return;
      gsap.fromTo(g, { rotate: 0, svgOrigin: '200 200' }, { rotate: (n.min / 1440) * 360, svgOrigin: '200 200', duration: 1.6, ease: 'power3.out' });
      gsap.fromTo($$('.horaires__arc', bloc), { opacity: 0 }, { opacity: 1, duration: 0.8, stagger: 0.15 });
    };
    if (ST()) ST().create({ trigger: bloc, start: 'top 80%', once: true, onEnter: go }); else go();
  });
}

/* ---------- Appel final : les deux gouttes se rejoignent au défilement. ---------- */
function gouttesFin() {
  $$('.fin-gouttes').forEach((svg) => {
    if (!ST()) return;
    const tl = gsap.timeline({ scrollTrigger: { trigger: svg, start: 'top 95%', end: 'top 45%', scrub: 0.6 } });
    tl.fromTo($('.fg-mets', svg), { attr: { cx: 58 } }, { attr: { cx: 104 }, ease: 'none' }, 0)
      .fromTo($('.fg-vin', svg), { attr: { cx: 182 } }, { attr: { cx: 136 }, ease: 'none' }, 0)
      .fromTo(svg, { scale: 0.86 }, { scale: 1, ease: 'none' }, 0);
  });
}

/* ---------- Plan du contact : la goutte tombe sur le restaurant. ---------- */
function repere() {
  const r = $('[data-effet="repere"]');
  if (!r) return;
  const goutte = $('.repere-tombe', r);
  const jouer = () => gsap.fromTo(goutte, { y: -160, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: 'bounce.out' });
  quand('pret', jouer);
  if (ST()) gsap.fromTo($$('.p-public', r), { scale: 0.4, opacity: 0, transformOrigin: '50% 50%' }, { scale: 1, opacity: 1, stagger: 0.12, duration: 0.6, ease: 'back.out(2)', scrollTrigger: { trigger: r, start: 'top 85%', once: true } });
}

/* ---------- Carte cadeau : elle suit la saisie, s'incline sous la souris, et un reflet la traverse au défilement. ---------- */
function bon() {
  $$('[data-effet="bon"]').forEach((carte) => {
    if (ST()) gsap.fromTo(carte, { '--reflet': '-60%', rotate: -3 }, { '--reflet': '60%', rotate: 2, ease: 'none', scrollTrigger: { trigger: carte, start: 'top bottom', end: 'bottom top', scrub: 0.6 } });
  });
  const form = $('[data-bon-form]');
  if (!form) return;
  const carte = $('[data-effet="bon"][data-bon-cible]');
  const montant = $('[data-bon-montant]', carte), pour = $('[data-bon-pour]', carte), de = $('[data-bon-de]', carte), mot = $('[data-bon-mot]', carte);
  const boutons = $$('[data-montant]', form), champ = $('input[name="montant"]', form);
  const params = new URLSearchParams(location.search);
  const choisir = (b, anime = true) => {
    boutons.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    champ.value = b.dataset.montant;
    const fin = +b.dataset.montant, debut = parseInt(montant.textContent, 10) || fin;
    if (!anime) { montant.textContent = `${fin} €`; return; }
    const o = { v: debut };
    gsap.to(o, { v: fin, duration: 0.6, ease: 'power2.out', onUpdate: () => (montant.textContent = `${Math.round(o.v)} €`) });
    gsap.fromTo(carte, { rotateY: -14 }, { rotateY: 0, duration: 0.8, ease: 'elastic.out(1, .6)' });
  };
  boutons.forEach((b) => b.addEventListener('click', () => choisir(b)));
  const depart = boutons.find((b) => b.dataset.montant === params.get('montant'));
  if (depart) choisir(depart, false);
  const lier = (nom, cible, vide) => { const i = $(`[name="${nom}"]`, form); if (!i || !cible) return; const maj = () => (cible.textContent = i.value.trim() || vide); i.addEventListener('input', maj); };
  lier('pour', pour, pour?.textContent); lier('de', de, de?.textContent); lier('mot', mot, mot?.textContent);
}

/* ---------- Composeur All Inclusive : total, prix barré et économie en direct. ---------- */
function composeur() {
  const f = $('[data-composeur]');
  if (!f) return;
  const sortie = $('[data-nombre-sortie]', f), lien = $('[data-composeur-lien]');
  const ecrire = () => {
    const r = $('input[name="services"]:checked', f), n = +sortie.value;
    const prix = +r.dataset.prix * n, avant = +r.dataset.avant * n;
    $('[data-recap-formule]').textContent = `${r.value} services · ${n} personne${n > 1 ? 's' : ''}`;
    $('[data-recap-avant]').textContent = `au lieu de ${avant} €`;
    $('[data-recap-economie]').textContent = `Vous économisez ${avant - prix} €`;
    const t = $('[data-recap-total]'), o = { v: parseInt(t.textContent, 10) || prix };
    gsap.to(o, { v: prix, duration: 0.5, ease: 'power2.out', overwrite: true, onUpdate: () => (t.textContent = Math.round(o.v)) });
    if (lien) lien.href = `${lien.pathname}?formule=all-inclusive-${r.value}&couverts=${n}`;
  };
  $$('input[name="services"]', f).forEach((r) => r.addEventListener('change', ecrire));
  $$('[data-nombre]', f).forEach((b) => b.addEventListener('click', () => {
    sortie.value = Math.min(12, Math.max(1, +sortie.value + +b.dataset.nombre)); sortie.textContent = sortie.value; ecrire();
  }));
  ecrire();
}

/* ---------- Réservation simulée : jours, créneaux (12 h à 13 h 30, 19 h à 20 h 30), couverts, formule préchoisie. ---------- */
function reservation() {
  const f = $('[data-resa]');
  if (!f) return;
  const jours = $('[data-jours]', f), creneaux = $('[data-creneaux]', f), recap = $('[data-resa-recap]', f);
  const params = new URLSearchParams(location.search);
  const etatR = { iso: null, heure: null, couverts: Math.min(12, Math.max(1, +params.get('couverts') || 2)) };
  const formule = $('select[name="formule"]', f);
  if (params.get('formule') && formule && $(`option[value="${params.get('formule')}"]`, formule)) formule.value = params.get('formule');
  const N = ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'];
  const n = maintenant('Europe/Paris');
  const ajouter = (iso, k) => { const [a, m, j] = iso.split('-').map(Number); return new Date(Date.UTC(a, m - 1, j + k)).toISOString().slice(0, 10); };
  const jourDe = (iso) => new Date(iso + 'T12:00:00Z').getUTCDay();
  const liste = []; for (let k = 0; liste.length < 7 && k < 14; k++) liste.push(ajouter(n.iso, k));
  const veutNouvelAn = params.get('formule') === 'nouvel-an' || location.hash === '#nouvel-an';
  if (veutNouvelAn && !liste.includes('2026-12-31')) { liste.pop(); liste.push('2026-12-31'); }
  jours.innerHTML = liste.map((iso) => {
    const d = jourDe(iso), ferme = d === 0 || d === 1;
    return `<button type="button" data-iso="${iso}" aria-pressed="false" ${ferme ? 'disabled aria-label="Fermé"' : ''}><span>${N[d]}</span><b>${+iso.slice(8)}</b></button>`;
  }).join('');
  /* Créneaux écrits une fois (les boutons ne sont jamais recréés) ; on masque ce qui ne vaut pas pour le jour choisi. */
  const SERVICES = [['Midi', ['12:00', '12:30', '13:00', '13:30']], ['Soir', ['19:00', '19:30', '20:00', '20:30']], ['Soirée du Nouvel An', ['19:30']]];
  const libelleH = (h) => h.replace(':', ' h ').replace(' h 00', ' h');
  creneaux.innerHTML = SERVICES.map(([nom, hs], g) => `<div class="groupe-creneaux" data-groupe="${g}"><p class="service-titre">${nom}</p>${hs.map((h) => `<button type="button" data-heure="${h}" aria-pressed="false">${libelleH(h)}</button>`).join('')}</div>`).join('')
    + '<p class="doux" data-creneaux-vide hidden></p>';
  const ecrireCreneaux = () => {
    const vide = $('[data-creneaux-vide]', creneaux);
    if (!etatR.iso) { $$('.groupe-creneaux', creneaux).forEach((g) => (g.hidden = true)); vide.hidden = false; vide.textContent = 'Choisissez d’abord un jour.'; return; }
    const auj = etatR.iso === n.iso, nouvelAn = etatR.iso === '2026-12-31';
    let visibles = 0;
    $$('.groupe-creneaux', creneaux).forEach((g) => {
      const k = +g.dataset.groupe, garde = nouvelAn ? k === 2 : k < 2;
      let libres = 0;
      $$('button', g).forEach((b) => {
        const h = b.dataset.heure, passe = auj && +h.slice(0, 2) * 60 + +h.slice(3) <= n.min + 60;
        b.hidden = !garde || passe; b.setAttribute('aria-pressed', String(etatR.heure === h && !b.hidden));
        if (!b.hidden) libres++;
      });
      g.hidden = !garde || !libres; visibles += g.hidden ? 0 : libres;
    });
    vide.hidden = visibles > 0;
    if (!visibles) vide.textContent = 'Plus de créneau aujourd’hui : choisissez un autre jour.';
    if (nouvelAn && formule && !/^nouvel-an/.test(formule.value)) formule.value = 'nouvel-an';
  };
  const ecrireRecap = () => {
    const d = etatR.iso ? new Intl.DateTimeFormat('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC' }).format(new Date(etatR.iso + 'T12:00:00Z')) : 'jour à choisir';
    const h = etatR.heure ? etatR.heure.replace(':', ' h ').replace(' h 00', ' h') : 'heure à choisir';
    const fo = formule ? formule.options[formule.selectedIndex].text : '';
    recap.textContent = `${d.charAt(0).toUpperCase() + d.slice(1)} · ${h} · ${etatR.couverts} couvert${etatR.couverts > 1 ? 's' : ''}${fo ? ' · ' + fo : ''}`;
    $('[name="jour"]', f).value = etatR.iso || ''; $('[name="heure"]', f).value = etatR.heure || '';
  };
  jours.addEventListener('click', (e) => {
    const b = e.target.closest('button[data-iso]'); if (!b || b.disabled) return;
    etatR.iso = b.dataset.iso; etatR.heure = null;
    $$('button', jours).forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    ecrireCreneaux(); ecrireRecap();
    gsap.fromTo($$('button:not([hidden])', creneaux), { y: 10, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.04, duration: 0.35 });
  });
  creneaux.addEventListener('click', (e) => {
    const b = e.target.closest('button[data-heure]'); if (!b) return;
    etatR.heure = b.dataset.heure; $$('button', creneaux).forEach((x) => x.setAttribute('aria-pressed', String(x === b))); ecrireRecap();
  });
  const sortie = $('[data-couverts]', f);
  sortie.value = etatR.couverts; sortie.textContent = etatR.couverts;
  $$('[data-couvert]', f).forEach((b) => b.addEventListener('click', () => {
    etatR.couverts = Math.min(12, Math.max(1, etatR.couverts + +b.dataset.couvert)); sortie.value = etatR.couverts; sortie.textContent = etatR.couverts; ecrireRecap();
  }));
  formule?.addEventListener('change', ecrireRecap);
  const premier = veutNouvelAn ? $('button[data-iso="2026-12-31"]', jours) : $$('button[data-iso]:not(:disabled)', jours)[0];
  if (premier) premier.click(); else { ecrireCreneaux(); ecrireRecap(); }
  /* Bouton « Réserver le 31 décembre » de la même page : ajoute le jour s'il manque, le choisit, puis l'ancre fait défiler. */
  $$('[data-nouvel-an]').forEach((a) => a.addEventListener('click', () => {
    let b = $('button[data-iso="2026-12-31"]', jours);
    if (!b) { jours.insertAdjacentHTML('beforeend', '<button type="button" data-iso="2026-12-31" aria-pressed="false"><span>jeu.</span><b>31</b></button>'); b = $('button[data-iso="2026-12-31"]', jours); }
    b.click(); if (formule) { formule.value = 'nouvel-an'; ecrireRecap(); }
  }));
}

/* ---------- La maison : le bandeau de grès s'ouvre du centre vers les bords au défilement. ---------- */
function bandeau() {
  const f = $('[data-effet="bandeau"]');
  if (!f || !ST()) return;
  gsap.fromTo(f, { clipPath: 'inset(0% 7% 0% 7% round 18px)' }, { clipPath: 'inset(0% 0% 0% 0% round 18px)', ease: 'none', scrollTrigger: { trigger: f, start: 'top 85%', end: 'bottom 60%', scrub: 0.6 } });
}

/* ---------- Accueil : deux petites gouttes tournent autour de l'arche, qui respire doucement (seulement à l'écran). ---------- */
function orbite() {
  const o = $('[data-effet="orbite"]');
  if (!o) return;
  const cadre = o.parentElement, photo = $('.arche img', cadre), [a, b] = $$('i', o);
  boucle(cadre, (dt, t) => {
    const w = cadre.clientWidth, h = cadre.clientHeight, cx = w / 2, cy = h * 0.46, rx = w * 0.56, ry = h * 0.52;
    const p = t * 0.32;
    a.style.transform = `translate(${cx + Math.cos(p) * rx}px, ${cy + Math.sin(p) * ry}px)`;
    b.style.transform = `translate(${cx + Math.cos(p + Math.PI) * rx}px, ${cy + Math.sin(p + Math.PI) * ry}px)`;
    if (photo) photo.style.scale = String(1.04 + 0.035 * Math.sin(t * 0.45));
  });
}

/* ---------- Ouverture : intro des gouttes sur l'accueil et toutes les pages. ---------- */
const ENTREES = '.hero [data-anime="gsap"], .entree';
function entrerPage(tl, t0) {
  const titre = $('.hero-titre .titre-ligne');
  if (titre) tl.fromTo(titre, { yPercent: 112 }, { yPercent: 0, duration: 0.9, ease: 'power4.out' }, t0);
  const autres = $$(ENTREES).filter((el) => !el.classList.contains('hero-titre'));
  if (autres.length) tl.fromTo(autres, { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: 'power3.out' }, t0 + 0.08);
  const h = $('.hero-titre'); if (h) tl.set(h, { opacity: 1 }, t0);
  return tl;
}

demarrer({
  preparer() {
    poserStatut();
    poserComptes();
    if (!gsap) return;
    orbite(); bandeau(); osmose(); verres(); vitrail(); aiguille(); gouttesFin(); repere(); bon(); composeur(); reservation();
  },
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    const mets = $('.goutte--mets'), vin = $('.goutte--vin'), coeur = $('.goutte--coeur'), trou = $('.goutte-trou');
    if (mets && vin) {
      tl.set(mets, { attr: { cx: 34, r: 30 } }, 0).set(vin, { attr: { cx: 206, r: 30 } }, 0)
        .to(mets, { attr: { cx: 104 }, duration: 0.8, ease: 'power2.inOut' }, 0.1)
        .to(vin, { attr: { cx: 136 }, duration: 0.8, ease: 'power2.inOut' }, 0.1)
        .to([mets, vin], { attr: { cx: 120, r: 44 }, duration: 0.35, ease: 'power2.out' }, 0.88)
        .fromTo(coeur, { attr: { r: 0 } }, { attr: { r: 50 }, duration: 0.35 }, 0.9)
        .fromTo(trou, { attr: { r: 0 } }, { attr: { r: 30 }, duration: 0.3, ease: 'back.out(2)' }, 1.05)
        .fromTo('.ouverture-mot, .ouverture-ligne', { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, stagger: 0.08 }, 0.35)
        .to('.ouverture-mot, .ouverture-ligne', { opacity: 0, duration: 0.25 }, 1.2);
    }
    versObjet(tl, { a: 1.32, duree: 0.5, ouverture: 0.75 });
    entrerPage(tl, 1.95);
    return tl;
  },
  etatFinal() {
    if (!gsap) return;
    gsap.set($$(`${ENTREES}, .hero-titre, .hero-titre .titre-ligne`), { clearProps: 'transform,opacity' });
    $$(`${ENTREES}, .hero-titre`).forEach((el) => el.classList.add('vu'));
  },
  arrivee() {
    if (!gsap) return;
    entrerPage(gsap.timeline({ delay: 0.12 }), 0);
  },
});
