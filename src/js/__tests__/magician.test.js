/* eslint linebreak-style: ["error", "windows"] */

import Magician from '../Magician';

describe('Magician', () => {
  const character = new Magician('Magician');
  const correct = {
    attack: 10, defence: 40, health: 100, level: 1, name: 'Magician', type: 'Magician',
  };

  expect(character).toEqual(correct);
});
