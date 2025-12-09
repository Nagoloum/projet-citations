// tests/app.test.js
const citationAleatoire = require('../src/app');

describe('citationAleatoire', () => {
  test('retourne une chaîne non vide', () => {
    const result = citationAleatoire();
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });

  test('retourne toujours une citation du tableau', () => {
    for (let i = 0; i < 100; i++) {
      const result = citationAleatoire();
      expect([
        "Le succès est la somme de petits efforts répétés jour après jour.",
        "Apprendre sans réfléchir est vain. Réfléchir sans apprendre est dangereux.",
        "La simplicité est la sophistication suprême.",
        "La meilleure façon de prédire l’avenir, c’est de le créer."
      ]).toContain(result);
    }
  });
});