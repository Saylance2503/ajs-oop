/* eslint linebreak-style: ["error", "windows"] */

import Undead from '../Undead';

describe('Undead', () => {
  const character = new Undead('Undead');
  const correct = {
    attack: 25, defence: 25, health: 100, level: 1, name: 'Undead', type: 'Undead',
  };

  expect(character).toEqual(correct);
});
