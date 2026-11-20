/* Éléments communs aux pages de L'Osmose : images d'après donnees/images.json, verres, gouttes, cadran des horaires. */
import { html, brut } from '../../outils/gabarit.mjs';
import { preparer, rendreCadran, rendreTexte } from '../../outils/horaires-calcul.mjs';

const GROK = ['maison-ouverture', 'reserver-ouverture', 'osmose-vin', 'accord-verres', 'recevoir-tablee', 'cadeaux-fond', 'page-404'];

/** Image du plan (alt et cadrages lus dans donnees/images.json). */
export function img(c, nom, o = {}) {
  const fiche = c.donnees.images[nom] || {};
  const chemin = GROK.includes(nom) ? `grok/${nom}` : nom;
  return c.media({ nom: chemin, alt: o.alt ?? fiche.alt ?? '', cadrage: o.cadrage || fiche.cadrage || '50% 50%', cadrageMobile: fiche.mobile?.cadrage, sizes: o.sizes || '100vw', priorite: !!o.priorite, classe: (o.classe || '') + (o.priorite ? ` apercu--${nom}` : ''), attrs: o.attrs || '', legende: o.legende });
}

/** Un verre à pied dessiné en SVG ; le vin monte par le fond (rect découpé par la forme du verre). */
export function verre(i, couleur) {
  return html`<svg class="verre" viewBox="0 0 60 150" aria-hidden="true" data-verre="${i}">
  <defs><clipPath id="coupe-${i}"><path d="M8 6 C 6 38, 12 62, 30 70 C 48 62, 54 38, 52 6 Z"/></clipPath></defs>
  <g clip-path="url(#coupe-${i})"><rect class="vin" x="0" y="6" width="60" height="66" fill="${couleur}"/></g>
  <path class="bord" d="M8 6 C 6 38, 12 62, 30 70 C 48 62, 54 38, 52 6 M30 70 V 138 M14 142 H 46"/>
</svg>`;
}

/** Deux gouttes qui se mêlent (appel final), filtre « gooey » sur un petit SVG seulement. */
export function gouttes(id) {
  return html`<svg class="fin-gouttes" viewBox="0 0 240 160" aria-hidden="true" data-effet="gouttes" data-visuel>
  <defs><filter id="goo-${id}" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur in="SourceGraphic" stdDeviation="7" result="b"/><feColorMatrix in="b" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 26 -11"/></filter></defs>
  <g filter="url(#goo-${id})"><circle class="fg-mets" cx="78" cy="80" r="36" fill="#F5EEE6"/><circle class="fg-vin" cx="162" cy="80" r="36" fill="#B23A48"/></g>
</svg>`;
}

/** Cadran 24 h des horaires, rendu à la génération (une journée d'ouverture type) ; le JavaScript le remet à l'heure. */
export function cadran(c) {
  const d = preparer(c.donnees.horaires), a = d.adresses[0];
  return brut(rendreCadran(a, { iso: '2026-11-17', min: 0 }));
}
export function semaine(c) {
  const d = preparer(c.donnees.horaires), a = d.adresses[0];
  return brut(rendreTexte(a, null));
}
export const prix = (n) => new Intl.NumberFormat('fr-FR').format(n);
