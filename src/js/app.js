/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-constant-condition */

export default class Validator {
  validatePhone(phone) {
    const phoneNumber = phone.replace(/[\s-+()]/gm, '');
    if (() => phoneNumber.test(/^\d\{11}$/)) {
      return `+${phoneNumber.replace(/^8/, '7')}`;
    } return `+${phoneNumber}`;
  }
}
