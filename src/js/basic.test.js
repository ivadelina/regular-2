/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import Validator from './app.js';


test('Change phone', () => {
  const createClass = new Validator('8 (927) 000-00-00');
  const result = createClass.validatePhone('8 (927) 000-00-00');
  expect(result).toEqual('+79270000000');
});
test('Change phone', () => {
  const createClass = new Validator('+7 960 000 00 00');
  const result = createClass.validatePhone('+7 960 000 00 00');
  expect(result).toEqual('+79600000000');
});
test('Change phone', () => {
  const createClass = new Validator('+86 000 000 0000');
  const result = createClass.validatePhone('+86 000 000 0000');
  expect(result).toEqual('+860000000000');
});
