/* eslint linebreak-style: ["error", "windows"] */

import Zombie from '../Zombie';

describe('Zombie', () => {
  const character = new Zombie('Zombie');
  const correct = {
    attack: 40, defence: 10, health: 100, level: 1, name: 'Zombie', type: 'Zombie',
  };

  expect(character).toEqual(correct);
});
