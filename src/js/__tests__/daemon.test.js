/* eslint linebreak-style: ["error", "windows"] */

import Daemon from '../Daemon';

describe('Daemon', () => {
  const character = new Daemon('Daemon');
  const correct = {
    attack: 10, defence: 40, health: 100, level: 1, name: 'Daemon', type: 'Daemon',
  };

  expect(character).toEqual(correct);
});
