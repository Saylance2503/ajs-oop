/* eslint linebreak-style: ["error", "windows"] */

export default class Validator {
  static validateUsername(username) {
    const startEndRegex = /^[a-zA-Z0-9-_].*[a-zA-Z0-9-_]$/;
    const limitationRegex = /^(?!.*\d{4,})[^-_0-9]\w*[^-_0-9]$/;

    return (
      startEndRegex.test(username)
      && limitationRegex.test(username)
    );
  }
}
