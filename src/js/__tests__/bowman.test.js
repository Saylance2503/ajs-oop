/* eslint linebreak-style: ["error", "windows"] */

import Bowman from '../Bowman';

describe('Bowman', () => {
  const character = new Bowman('Bowman');
  const correct = {
    attack: 25, defence: 25, health: 100, level: 1, name: 'Bowman', type: 'Bowman',
  };

  expect(character).toEqual(correct);
});
