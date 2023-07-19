/* eslint linebreak-style: ["error", "windows"] */

import Character from '../Character';

describe('Character', () => {
  const characterTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

  test.each(characterTypes)(
    'должен увеличиваться уровень и характеристики, когда вызывается метод levelUp',
    (type) => {
      const character = new Character('CharacterName', type);
      character.levelUp();
      expect(character.level).toBe(2);
      expect(character.attack).toBe(30);
      expect(character.defence).toBe(30);
      expect(character.health).toBe(100);
    },
  );

  test.each(characterTypes)(
    'не должен увеличиваться уровень и характеристики, когда метод levelUp вызывается для мертвого персонажа',
    (type) => {
      const character = new Character('CharacterName', type);
      character.health = 0;
      expect(() => character.levelUp()).toThrow('Нельзя повысить левел умершего.');
    },
  );

  test.each(characterTypes)(
    'должен уменьшаться уровень здоровья, когда вызывается метод damage',
    (type) => {
      const character = new Character('CharacterName', type);
      character.damage(30);
      expect(character.health).toBeCloseTo(91.5);
    },
  );

  test.each(characterTypes)(
    'не должен уменьшаться уровень здоровья ниже 0, когда вызывается метод damage',
    (type) => {
      const character = new Character('CharacterName', type);
      character.damage(200);
      expect(character.health).toBe(0);
    },
  );

  test.each(characterTypes)(
    'не должен уменьшаться уровень здоровья, когда метод damage вызывается для мертвого персонажа',
    (type) => {
      const character = new Character('CharacterName', type);
      character.health = 0;
      character.damage(50);
      expect(character.health).toBe(0);
    },
  );
});
