/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-constant-condition */

export default class Validator {
  validatePhone(phone) {
    const phoneNumber = phone.replace(/[\s-+()]/gm, '');
    const secondTest = /^\d{11}$/.test(phoneNumber);
    if (secondTest) {
      return `+${phoneNumber.replace(/^8/, '7')}`;
    } return `+${phoneNumber}`;
  }
}
