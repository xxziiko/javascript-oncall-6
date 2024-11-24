import { ErrorUtils, ERROR } from './index.js';

class Validator {
  static DELIMITER = ',';

  static validateDelimiter(input) {
    ErrorUtils.handleError(!input.includes(Validator.DELIMITER));
  }

  static validateMonth(input) {
    const isValidMonth =
      Number.isInteger(Number(input)) && Number(input) >= 1 && Number(input) <= 12;

    ErrorUtils.handleError(!isValidMonth);
  }

  static validateDay(input) {
    const isValidDay = Number.isInteger(Number(input)) && Number(input) >= 1 && Number(input) <= 31;

    ErrorUtils.handleError(!isValidDay);
  }

  static validateRange(staff) {
    ErrorUtils.handleError(staff.length < 5 || staff.length > 35);
  }

  static validateDuplicate(staff) {
    ErrorUtils.handleError(new Set(staff).size !== staff.length);
  }

  static validateNameLength(name) {
    ErrorUtils.handleError(name.length >= 5);
  }
}

export default Validator;
