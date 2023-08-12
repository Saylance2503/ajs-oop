/* eslint linebreak-style: ["error", "windows"] */

export default class Validator {
  static validateUsername(username) {
    const regex = /^(?!.*[-_]{2,})(?!.*\d{4,})[a-zA-Z0-9-_][a-zA-Z0-9-_]*[a-zA-Z0-9-_]$/;
    return regex.test(username);
  }
}
