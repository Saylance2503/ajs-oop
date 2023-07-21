/* eslint linebreak-style: ["error", "windows"] */

export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Неверное имя. Имя должно быть строкой длиной от 2 до 10 символов.');
    }

    const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!validTypes.includes(type)) {
      throw new Error('Неверный тип. Тип должен быть одним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie.');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = null;
    this.defence = null;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Нельзя повысить левел умершего.');
    }

    this.level += 1;
    this.attack += Math.round(this.attack * 0.2);
    this.defence += Math.round(this.defence * 0.2);
    this.health = 100;
  }

  damage(points) {
    if (this.health === 0) {
      return;
    }

    this.health -= points * (1 - this.defence / 100);

    if (this.health < 0) {
      this.health = 0;
    }
  }
}
