/* eslint linebreak-style: ["error", "windows"] */

import Validator from '../Validator';

test('should validate username', () => {
  expect(Validator.validateUsername('john_doe')).toBe(true);
  expect(Validator.validateUsername('alice-123')).toBe(true);
  expect(Validator.validateUsername('user_1')).toBe(true);
});
