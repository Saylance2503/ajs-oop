/* eslint linebreak-style: ["error", "windows"] */

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Персонаж уже существует в команде');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    for (const character of characters) {
      this.add(character);
    }
  }

  toArray() {
    return Array.from(this.members);
  }
}
