/* eslint linebreak-style: ["error", "windows"] */

import Validator from '../Validator';

test('should validate username', () => {
  expect(Validator.validateUsername('john_doe')).toBe(true);
  expect(Validator.validateUsername('user1')).toBe(false);
  expect(Validator.validateUsername('2user')).toBe(false);
  expect(Validator.validateUsername('us-_er')).toBe(false);
});
