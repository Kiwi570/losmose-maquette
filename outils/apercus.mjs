/* Aperçus flous des images d'ouverture (20 px, en base64) posés en fond de leur figure :
   au retour arrière, la figure montre le flou au lieu d'une case unie le temps que l'image se décode. */
import { createRequire } from 'node:module';
const sharp = createRequire(import.meta.url)('../_biblio/node_modules/sharp');
import { writeFileSync, existsSync } from 'node:fs';
const IMAGES = [['accueil-ouverture', 'accueil-ouverture-640'], ['arche-gauche', 'arche-gauche-640'], ['arche-droite', 'arche-droite-640'], ['menus-ouverture', 'menus-ouverture-640'], ['maison-ouverture', 'grok/maison-ouverture-640'],
  ['reserver-ouverture', 'grok/reserver-ouverture-640'], ['cadeaux-fond', 'grok/cadeaux-fond-640'], ['page-404', 'grok/page-404-800']];
const regles = [];
for (const [nom, fichier] of IMAGES) {
  const src = `assets/images/${fichier}.webp`, mob = `assets/images/${fichier.replace(/-(\d+)$/, '-mobile-640')}.webp`;
  const flou = async (f) => 'data:image/webp;base64,' + (await sharp(f).resize(20).webp({ quality: 40 }).toBuffer()).toString('base64');
  regles.push(`.apercu--${nom} { background: url(${await flou(src)}) var(--cadrage, 50% 50%) / cover no-repeat; }`);
  if (existsSync(mob) && mob !== src) regles.push(`@media (max-width: 760px) and (orientation: portrait) { .apercu--${nom} { background-image: url(${await flou(mob)}); background-position: var(--cadrage-mobile, var(--cadrage, 50% 50%)); } }`);
}
writeFileSync('assets/css/apercus.css', '/* Produit par outils/apercus.mjs : aperçus flous des images d\'ouverture. */\n' + regles.join('\n') + '\n');
console.log(`${IMAGES.length} aperçus écrits dans assets/css/apercus.css`);
