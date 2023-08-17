/* eslint linebreak-style: ["error", "windows"] */

export default class Team {
  constructor() {
    this.members = [];
  }

  addCharacter(character) {
    this.members.push(character);
  }

  * [Symbol.iterator]() {
    for (const member of this.members) {
      yield member;
    }
  }
}
