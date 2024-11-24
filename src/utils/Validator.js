import { ErrorUtils, WEEK } from './index.js';

class Validator {
  static DELIMITER = ',';

  static validateDelimiter(input) {
    ErrorUtils.handleError(!input.includes(Validator.DELIMITER));
  }

  static validateMonth(month) {
    const isValidMonth = !isNaN(month) && Number(month) >= 1 && Number(month) <= 12;

    ErrorUtils.handleError(!isValidMonth);
  }

  static validateDay(day) {
    const isValidDay = WEEK.includes(day);

    ErrorUtils.handleError(!isValidDay);
  }

  static validateRange(staff) {
    const isValidRange = staff.length >= 5 && staff.length <= 35;

    ErrorUtils.handleError(!isValidRange);
  }

  static validateDuplicate(staff) {
    ErrorUtils.handleError(new Set(staff).size !== staff.length);
  }

  static validateNameLength(name) {
    ErrorUtils.handleError(name.length >= 5);
  }
}

export default Validator;
