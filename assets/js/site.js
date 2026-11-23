/* Effets propres à L'Osmose. Le socle gère l'ouverture, le voile, l'en-tête, les apparitions et la bibliothèque d'effets.
   Effets du plan (data-effet) : gouttes (intro et appel final), osmose (deux disques qui se mêlent), verres (verres qui se
   remplissent), vitrail (taches de lumière colorée), aiguille (cadran des horaires), repere (goutte du plan), bon (carte cadeau). */
import { demarrer, versObjet, quand, boucle } from './socle/index.js?v=2';
import { preparer as preparerHoraires, statut, maintenant, rendreCadran, rendreTexte } from '../modules/horaires/horaires-calcul.js?v=2';

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
  tl.fromTo(mets, { xPercent: 0, rotate: -10 }, { xPercent: 17, rotate: 0, ease: 'none' }, 0)
    .fromTo(vin, { xPercent: 0, rotate: 10 }, { xPercent: -17, rotate: 0, ease: 'none' }, 0);
}

/* ---------- Verres : 3 ou 4 verres qui se remplissent par le fond, surface du vin qui ondule, « tchin » au changement de menu. ---------- */
function verres() {
  const bloc = $('[data-effet="verres"]');
  if (!bloc) return;
  const tous = $$('.verre', bloc);
  const etats = tous.map((v, i) => ({ v, vin: $('.vin', v), corps: $('.verre-corps', v), niveau: 72, houle: 0, i }));
  const choix = $$('[data-choix-accord] button');
  const total = $('[data-accord-total]'), legende = $('[data-accord-verres]'), lien = $('[data-accord-lien]');
  let combien = 3;
  etats.forEach((e) => { e.pente = 0; e.vp = 0; });
  const dessiner = (e, t) => {
    const a = 1.2 + e.houle * 4, pts = [];
    for (let x = 0; x <= 60; x += 5) pts.push(`${x} ${(e.niveau + (x - 30) * e.pente + Math.sin(x / 60 * Math.PI * 2 + t * 2.2 + e.i) * a).toFixed(2)}`);
    e.vin.setAttribute('d', `M${pts.join(' L')} V 80 H 0 Z`);
  };
  etats.forEach((e) => dessiner(e, 0));
  boucle(bloc, (dt, t) => etats.forEach((e) => {
    e.houle *= Math.exp(-dt * 1.6);
    /* Le vin est un ressort amorti : il penche à contre-sens du geste, revient, déborde un peu, se pose. */
    e.vp += (-70 * e.pente - 3.2 * e.vp) * dt;
    e.pente = Math.max(-0.42, Math.min(0.42, e.pente + e.vp * dt));
    e.v.style.rotate = Math.abs(e.pente) > 0.002 ? `${(e.pente * 9).toFixed(2)}deg` : '';
    dessiner(e, t);
  }));
  /* Faire tourner le vin : la souris qui passe ou le doigt qui glisse sur les verres l'agite ; un appui fait trinquer. */
  const astuce = $('.verres-astuce');
  const curseur = () => $('.curseur');
  let dernierX = null, dernierT = 0, appui = false, parcouru = 0;
  const agiter = (dx, dt) => {
    const v = Math.max(-2.5, Math.min(2.5, dx / Math.max(dt, 8)));
    etats.forEach((e, i) => {
      if (i >= combien) return;
      e.vp = Math.max(-7, Math.min(7, e.vp - v * (0.55 + i * 0.06)));
      e.houle = Math.min(1.6, e.houle + Math.abs(v) * 0.08);
    });
    if (astuce && Math.abs(v) > 0.3) astuce.classList.add('tourne');
  };
  bloc.addEventListener('pointerdown', (ev) => { appui = true; parcouru = 0; dernierX = ev.clientX; dernierT = ev.timeStamp; });
  bloc.addEventListener('pointermove', (ev) => {
    if (ev.pointerType !== 'mouse' && !appui) return;
    if (dernierX === null) { dernierX = ev.clientX; dernierT = ev.timeStamp; return; }
    const dx = ev.clientX - dernierX;
    parcouru += Math.abs(dx);
    agiter(dx, ev.timeStamp - dernierT);
    dernierX = ev.clientX; dernierT = ev.timeStamp;
  });
  bloc.addEventListener('pointerup', () => { if (appui && parcouru < 6) { etats.forEach((e) => (e.houle = Math.max(e.houle, 0.8))); tchin(0); } appui = false; });
  ['pointercancel', 'pointerleave'].forEach((t) => bloc.addEventListener(t, () => { appui = false; dernierX = null; }));
  bloc.addEventListener('pointerenter', (ev) => { if (ev.pointerType === 'mouse') { const c = curseur(); if (c) c.classList.add('curseur-tourne'); } });
  bloc.addEventListener('pointerleave', () => { const c = curseur(); if (c) c.classList.remove('curseur-tourne'); });
  const remplir = (delai = 0) => {
    tous.forEach((v, i) => v.classList.toggle('cache', i >= combien));
    etats.forEach((e, i) => {
      if (i >= combien) { gsap.to(e, { niveau: 72, duration: 0.3, overwrite: true }); return; }
      e.houle = 1;
      gsap.fromTo(e, { niveau: 72 }, { niveau: 26, duration: 1.3, ease: 'power2.out', delay: delai + i * 0.18, overwrite: true });
    });
  };
  const tchin = (attente = 0.9) => etats.slice(0, combien).forEach((e, i) => {
    const sens = i < (combien - 1) / 2 ? 1 : i > (combien - 1) / 2 ? -1 : 0;
    gsap.fromTo(e.corps, { rotate: 0 }, { rotate: sens * 7, svgOrigin: '30 142', duration: 0.16, yoyo: true, repeat: 1, ease: 'power2.out', delay: attente + i * 0.03 });
  });
  tous.forEach((v, i) => v.classList.toggle('cache', i >= combien));
  if (ST()) ST().create({ trigger: bloc, start: 'top 82%', once: true, onEnter: () => { remplir(); tchin(); } });
  else remplir();
  choix.forEach((b) => b.addEventListener('click', () => {
    choix.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    combien = +b.dataset.verres;
    if (total) total.textContent = b.dataset.total;
    if (legende) legende.textContent = `${combien} verres de 10 cl`;
    if (lien) { const u = new URL(lien.href, location.href); u.searchParams.set('formule', b.dataset.formule); lien.href = u.pathname + u.search; }
    etats.forEach((e) => (e.houle = 1));
    remplir(0.1); tchin();
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

/* ---------- Accueil : le triptyque d'arches suit la souris en profondeur, glisse au défilement, et les photos respirent. ---------- */
function triptyque() {
  const t = $('[data-effet="triptyque"]');
  if (!t) return;
  const cadres = $$('.arche-cadre', t), photos = $$('.arche img', t), profondeurs = [14, 24, 14];
  const souris = { x: 0, y: 0 }, lisse = { x: 0, y: 0 };
  if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
    window.addEventListener('pointermove', (e) => { souris.x = e.clientX / innerWidth - 0.5; souris.y = e.clientY / innerHeight - 0.5; }, { passive: true });
  }
  boucle(t, (dt, temps) => {
    const k = 1 - Math.exp(-dt * 5);
    lisse.x += (souris.x - lisse.x) * k; lisse.y += (souris.y - lisse.y) * k;
    /* Les arches flottent doucement, chacune à son rythme, et suivent la souris en profondeur. */
    cadres.forEach((c, i) => { const f = Math.sin(temps * 0.7 + i * 2.1) * (i === 1 ? 4 : 7); c.style.translate = `${(lisse.x * profondeurs[i]).toFixed(2)}px ${(lisse.y * profondeurs[i] + f).toFixed(2)}px`; });
    photos.forEach((p, i) => { p.style.scale = String(1.05 + 0.03 * Math.sin(temps * 0.45 + i * 1.7)); });
  });
  if (ST() && !tel()) {
    gsap.to(cadres[0], { yPercent: -10, ease: 'none', scrollTrigger: { trigger: t, start: 'top top', end: 'bottom top', scrub: 0.5 } });
    gsap.to(cadres[2], { yPercent: -16, ease: 'none', scrollTrigger: { trigger: t, start: 'top top', end: 'bottom top', scrub: 0.5 } });
  }
}

/* ---------- Le O du titre se remplit de vin quand on quitte l'ouverture (un titre qui fait l'événement). ---------- */
function oVin() {
  const o = $('[data-effet="o-vin"]');
  if (!o || !ST()) return;
  gsap.fromTo(o, { '--niveau': '18%' }, { '--niveau': '100%', ease: 'none', scrollTrigger: { trigger: o.closest('section'), start: 'top top', end: 'bottom 35%', scrub: 0.4 } });
}

/* ---------- Manifeste : le nom apparaît là où le mets et le vin se mêlent. ---------- */
function union() {
  const u = $('.disque-union');
  if (!u || !ST()) return;
  gsap.fromTo(u, { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, ease: 'none', scrollTrigger: { trigger: u.parentElement, start: 'top 55%', end: 'center 45%', scrub: 0.6 } });
}

/* ---------- Menus : la rangée d'assiettes glisse au défilement sur grand écran (au doigt sur téléphone). ---------- */
function rangee() {
  const piste = $('.piste-assiettes');
  if (!piste || !ST()) return;
  gsap.matchMedia().add('(min-width: 761px)', () => {
    piste.classList.add('piste--glisse');
    const rail = $('.rail-assiettes', piste);
    const tw = gsap.fromTo(rail, { x: 0 }, { x: () => -Math.max(0, rail.scrollWidth - piste.clientWidth), ease: 'none',
      scrollTrigger: { trigger: piste, start: 'top 85%', end: 'bottom 15%', scrub: 0.6, invalidateOnRefresh: true } });
    return () => { tw.scrollTrigger && tw.scrollTrigger.kill(); tw.kill(); gsap.set(rail, { clearProps: 'transform' }); piste.classList.remove('piste--glisse'); };
  });
}

/* ---------- Retour physique de l'action : un cachet « O » tombe sur le billet de réservation ou sur le bon cadeau. ---------- */
function cachet(cible, texte) {
  const c = document.createElement('span');
  c.className = 'cachet'; c.setAttribute('aria-hidden', 'true'); c.setAttribute('data-superpose', '');
  c.innerHTML = `<b>O</b><small>${texte}</small>`;
  cible.appendChild(c);
  gsap.fromTo(c, { scale: 2.2, rotate: -28, opacity: 0, y: -40 }, { scale: 1, rotate: -12, opacity: 1, y: 0, duration: 0.55, ease: 'back.out(2.2)' });
  gsap.fromTo(cible, { x: 0 }, { x: 3, duration: 0.05, repeat: 5, yoyo: true, delay: 0.42, clearProps: 'x' });
}
function retours() {
  const resa = $('[data-resa]');
  if (resa) resa.addEventListener('submit', () => setTimeout(() => {
    const envoi = $('[type="submit"]', resa);
    if (!envoi || !envoi.disabled) return;
    const billet = document.createElement('div');
    billet.className = 'billet'; billet.setAttribute('data-grille', 'retour');
    billet.innerHTML = `<p class="billet-titre">Votre demande</p><p>${$('[data-resa-recap]', resa).textContent}</p><p class="billet-note">Demande simulée : la maison confirme par téléphone ou par e-mail.</p>`;
    envoi.insertAdjacentElement('afterend', billet);
    gsap.fromTo(billet, { y: 30, opacity: 0, rotate: -2 }, { y: 0, opacity: 1, rotate: 0, duration: 0.6, ease: 'power3.out', onComplete: () => cachet(billet, 'Reçue') });
  }, 0));
  const bonForm = $('[data-bon-form]');
  if (bonForm) bonForm.addEventListener('submit', () => setTimeout(() => {
    const envoi = $('[type="submit"]', bonForm), carte = $('[data-bon-cible]');
    if (!envoi || !envoi.disabled || !carte) return;
    carte.setAttribute('data-grille', 'retour');
    const rc = carte.getBoundingClientRect(); if (rc.bottom < 80 || rc.top > innerHeight - 80) carte.scrollIntoView({ block: 'center' });
    gsap.fromTo(carte, { rotateY: 0 }, { rotateY: 360, duration: 1, ease: 'power3.inOut', onComplete: () => cachet(carte, 'Envoyé') });
  }, 0));
  const message = $('[data-message-form]');
  if (message) message.addEventListener('submit', () => setTimeout(() => {
    const envoi = $('[type="submit"]', message);
    if (!envoi || !envoi.disabled || $('.cachet', message)) return;
    cachet(message, 'Envoyé');
  }, 0));
}

/* ---------- Fil de vin : relie les sections ; la goutte descend avec la lecture, chaque section passée se remplit,
   son nom passe à côté de la goutte. Sur tablette et téléphone, un trait de vin en haut de l'écran. ---------- */
function fil() {
  const f = $('.fil');
  if (!f) return;
  const points = $('.fil-points', f), nom = $('.fil-nom', f), pied = $('.pied');
  const sections = $$('main > section').map((s) => ({ s, nom: ($('.surtitre', s) || {}).textContent || '', sombre: s.classList.contains('sombre') }));
  /* Positions mesurées une fois (et au redimensionnement) : rien n'est relu pendant le défilement. */
  let reperes = [], courant = -1, attente = 0, pret = false, max = 1, haut = 0, finDebut = 0, image = 0;
  const mesurer = () => {
    max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    points.innerHTML = '';
    reperes = sections.map((x) => {
      const b = x.s.getBoundingClientRect(), top = b.top + scrollY;
      const p = Math.min(1, Math.max(0, (top - innerHeight * 0.5) / max));
      const i = document.createElement('i'); i.style.top = `${(p * 100).toFixed(2)}%`; points.appendChild(i);
      return { ...x, p, i, top, bas: top + b.height };
    });
    haut = pied ? pied.getBoundingClientRect().top + scrollY : Infinity;
    finDebut = reperes[0] ? reperes[0].bas : 0;
    poser();
  };
  const poser = () => {
    image = 0;
    const y = scrollY, milieu = y + innerHeight / 2, p = Math.min(1, Math.max(0, y / max));
    f.style.setProperty('--p', p.toFixed(4));
    let k = 0;
    reperes.forEach((r, j) => { const passe = p >= r.p - 0.001; r.i.classList.toggle('passe', passe); if (passe) k = j; });
    /* Couleur du fil selon le fond qui passe derrière lui (milieu de l'écran). */
    const fond = reperes.find((r) => r.top <= milieu && r.bas > milieu);
    f.classList.toggle('fil--clair', milieu >= haut || !!(fond && fond.sombre));
    /* Le fil naît quand on quitte l'ouverture : il ne croise jamais le premier écran. */
    f.classList.toggle('fil--pret', pret && finDebut - y < innerHeight * 0.72);
    if (k !== courant && reperes[k]) {
      courant = k;
      nom.classList.add('change');
      clearTimeout(attente);
      attente = setTimeout(() => { nom.textContent = reperes[k].nom; nom.classList.remove('change'); }, 220);
    }
  };
  addEventListener('scroll', () => { if (!image) image = requestAnimationFrame(poser); }, { passive: true });
  addEventListener('resize', () => requestAnimationFrame(mesurer));
  if (ST()) ST().addEventListener('refresh', mesurer);
  mesurer();
  setTimeout(() => { pret = true; mesurer(); }, 400);
}

/* ---------- Le vin monte dans le mot d'accent de chaque titre : au premier écran après l'ouverture,
   plus bas quand le titre arrive. Un titre déjà à l'écran au chargement reste plein (rien ne change au rechargement). ---------- */
const VIN_MOTS = !matchMedia('(prefers-reduced-motion: reduce)').matches;
function remplirMot(h, delai = 0) {
  gsap.fromTo(h, { '--vin-mot': '0%' }, { '--vin-mot': '100%', duration: 1.35, delay: delai, ease: 'power2.inOut', overwrite: 'auto',
    onComplete: () => { h.style.removeProperty('--vin-mot'); h.classList.add('vin-fini'); } });
}
function vinMots() {
  if (!VIN_MOTS) return;
  document.documentElement.classList.add('vin-mots');
  $$('main h2').filter((h) => $('em', h)).forEach((h) => {
    if (h.getBoundingClientRect().top < innerHeight * 0.85 || !ST()) { h.classList.add('vin-fini'); return; }
    h.style.setProperty('--vin-mot', '0%');
    ST().create({ trigger: h, start: 'top 80%', once: true, onEnter: () => remplirMot(h, 0.35) });
  });
}
const titreVin = () => $('main h1[data-grille="typo"]');

/* ---------- Images d'ouverture : si la photo arrive après l'aperçu flou, elle se fond au lieu d'apparaître d'un coup. ---------- */
function fonduImages() {
  $$('[class*="apercu--"] img').forEach((im) => {
    if (im.complete && im.naturalWidth) return;
    im.style.opacity = '0';
    const montrer = () => { im.style.transition = 'opacity .7s ease'; im.style.opacity = ''; };
    im.addEventListener('load', montrer, { once: true });
    im.addEventListener('error', montrer, { once: true });
  });
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
  const t = titreVin();
  if (t && VIN_MOTS && $('em', t)) tl.add(() => remplirMot(t), t0 + 0.4);
  return tl;
}

demarrer({
  preparer() {
    poserStatut();
    poserComptes();
    if (!gsap) return;
    fonduImages();
    const t = titreVin();
    if (t && VIN_MOTS && $('em', t)) t.style.setProperty('--vin-mot', '0%');
    triptyque(); oVin(); union(); rangee(); retours(); bandeau(); osmose(); verres(); vitrail(); aiguille(); gouttesFin(); repere(); bon(); composeur(); reservation();
    vinMots(); fil();
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
    const t = titreVin();
    if (t) { gsap.killTweensOf(t, '--vin-mot'); t.style.removeProperty('--vin-mot'); t.classList.add('vin-fini'); }
  },
  arrivee() {
    if (!gsap) return;
    entrerPage(gsap.timeline({ delay: 0.12 }), 0);
  },
});
