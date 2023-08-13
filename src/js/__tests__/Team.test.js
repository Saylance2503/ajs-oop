/* eslint linebreak-style: ["error", "windows"] */

import Team from '../Team';

describe('Team class', () => {
  let team;
  let character1;
  let character2;
  let character3;

  beforeEach(() => {
    team = new Team();
    character1 = { name: 'Character 1' };
    character2 = { name: 'Character 2' };
    character3 = { name: 'Character 3' };
  });

  it('Должен добавить персонажа в команду', () => {
    team.add(character1);
    expect(team.toArray()).toEqual([character1]);
  });

  it('Не должен позволять добавлять одного и того же персонажа дважды', () => {
    team.add(character1);
    expect(() => team.add(character1)).toThrowError('Персонаж уже существует в команде');
  });

  it('Должен добавлять несколько персонажей в команду с использованием метода addAll', () => {
    team.addAll(character1, character2, character3);
    expect(team.toArray()).toEqual([character1, character2, character3]);
  });

  it('Не должен добавлять дубликаты при использовании метода addAll', () => {
    team.addAll(character1, character2);
    team.addAll(character2, character3);
    expect(team.toArray()).toEqual([character1, character2]);
  });

  it('Должен конвертировать команду в массив', () => {
    team.addAll(character1, character2);
    expect(team.toArray()).toEqual([character1, character2]);
  });
});
