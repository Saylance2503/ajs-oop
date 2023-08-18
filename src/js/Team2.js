/* eslint linebreak-style: ["error", "windows"] */

export default class Team {
  constructor() {
    this.members = [];
    this.count = 0;
  }

  addCharacter(character) {
    this.members.push(character);
  }

  [Symbol.iterator]() {
    return {
      members: this.members,
      count: 0,
      next() {
        if (this.count < this.members.length) {
          const character = this.members[this.count];
          this.count += 1;
          return { value: character, done: false };
        }
        return { done: true };
      },
    };
  }
}
