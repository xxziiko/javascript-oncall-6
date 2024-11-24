import { ErrorUtils, ERROR } from './index.js';

class Validator {
  static DELIMITER = ',';
  static validateDelimiter(input) {
    ErrorUtils.handleError(!input.includes(Validator.DELIMITER), ERROR.invalidValue);
  }

  static validateMonth(input) {
    const isValidMonth =
      Number.isInteger(Number(input)) && Number(input) >= 1 && Number(input) <= 12;

    ErrorUtils.handleError(!isValidMonth, ERROR.invalidValue);
  }

  static validateDay(input) {
    const isValidDay = Number.isInteger(Number(input)) && Number(input) >= 1 && Number(input) <= 31;

    ErrorUtils.handleError(!isValidDay, ERROR.invalidValue);
  }
}

export default Validator;
