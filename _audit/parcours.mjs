/* Parcours propres à L'Osmose : composeur All Inclusive (total vérifié par le calcul), accord du sommelier (verres et prix),
   bon cadeau (montant reporté sur la carte), réservation (jour, créneau, récapitulatif, formule préchoisie par l'adresse). */
export default async function ({ contexte, attendrePret, attendre, BASE, R, T }) {
  const { ctx, page } = await contexte({ taille: T('390×844') });
  try {
    /* Composeur : 5 services pour 3 personnes = 3 × 95 € = 285 €, au lieu de 3 × 140 € = 420 €. */
    await page.goto(BASE + '/menus', { waitUntil: 'load' });
    await attendrePret(page);
    await page.locator('label[for="ai-5"]').click();
    await page.locator('[data-nombre="1"]').click();
    await attendre(900);
    const ai = await page.evaluate(() => ({ total: document.querySelector('[data-recap-total]').textContent.trim(), avant: document.querySelector('[data-recap-avant]').textContent, lien: document.querySelector('[data-composeur-lien]').getAttribute('href') }));
    if (ai.total !== '285') R.echec('composeur All Inclusive', `total ${ai.total} au lieu de 285`, { page: '/menus', taille: '390×844' });
    if (!/420/.test(ai.avant)) R.echec('composeur All Inclusive', `prix d'origine « ${ai.avant} » au lieu de 420 €`, { page: '/menus', taille: '390×844' });
    if (!/all-inclusive-5/.test(ai.lien) || !/couverts=3/.test(ai.lien)) R.echec('composeur All Inclusive', `lien de réservation non prérempli : ${ai.lien}`, { page: '/menus', taille: '390×844' });

    /* Accord : 5 services → 122 € et 4 verres visibles. */
    await page.goto(BASE + '/', { waitUntil: 'load' });
    await attendrePret(page);
    await page.locator('[data-choix-accord] button[data-verres="4"]').click();
    await attendre(1800);
    const acc = await page.evaluate(() => ({ total: document.querySelector('[data-accord-total]').textContent.trim(), visibles: [...document.querySelectorAll('.verre')].filter((v) => !v.classList.contains('cache')).length }));
    if (acc.total !== '122' || acc.visibles !== 4) R.echec('accord du sommelier', `total ${acc.total}, ${acc.visibles} verres au lieu de 122 et 4`, { page: '/', taille: '390×844' });

    /* Bon cadeau : 200 € reporté sur la carte et dans le champ envoyé. */
    await page.goto(BASE + '/bons-cadeaux', { waitUntil: 'load' });
    await attendrePret(page);
    await page.locator('[data-montant="200"]').click();
    await page.locator('#bon-pour').fill('Camille Martin');
    await attendre(900);
    const bon = await page.evaluate(() => ({ carte: document.querySelector('[data-bon-montant]').textContent.replace(/\s/g, ''), champ: document.querySelector('input[name="montant"]').value, pour: document.querySelector('[data-bon-pour]').textContent }));
    if (bon.carte !== '200€' || bon.champ !== '200' || bon.pour !== 'Camille Martin') R.echec('bon cadeau', `carte ${bon.carte}, champ ${bon.champ}, pour « ${bon.pour} »`, { page: '/bons-cadeaux', taille: '390×844' });

    /* Réservation : formule préchoisie par l'adresse, jour et créneau, récapitulatif. */
    await page.goto(BASE + '/reserver?formule=cinq-accord&couverts=4', { waitUntil: 'load' });
    await attendrePret(page);
    const jour = page.locator('[data-jours] button:not([disabled])').nth(1);
    await jour.click();
    await attendre(400);
    await page.locator('[data-creneaux] button').first().click();
    await attendre(300);
    const resa = await page.evaluate(() => ({ formule: document.querySelector('select[name="formule"]').value, recap: document.querySelector('[data-resa-recap]').textContent, jour: document.querySelector('input[name="jour"]').value, heure: document.querySelector('input[name="heure"]').value }));
    if (resa.formule !== 'cinq-accord') R.echec('réservation', `formule non préchoisie (${resa.formule})`, { page: '/reserver', taille: '390×844' });
    if (!resa.jour || !resa.heure || !/4 couverts/.test(resa.recap)) R.echec('réservation', `récapitulatif incomplet : ${resa.recap}`, { page: '/reserver', taille: '390×844' });
  } finally { await ctx.close(); }
}
