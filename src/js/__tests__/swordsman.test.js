/* eslint linebreak-style: ["error", "windows"] */

import Swordsman from '../Swordsman';

describe('Swordsman', () => {
  const character = new Swordsman('Swordsman');
  const correct = {
    attack: 40, defence: 10, health: 100, level: 1, name: 'Swordsman', type: 'Swordsman',
  };

  expect(character).toEqual(correct);
});
