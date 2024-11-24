import { ViewOut } from '../views/index.js';
import { errorFormat } from './index.js';

class ErrorUtils {
  static handleError(condition, errorMessages) {
    if (condition) {
      throw new Error(errorFormat(errorMessages));
    }
  }

  static async getResult(callback) {
    try {
      return await callback();
    } catch (error) {
      if (error.message === 'NO INPUT') return;
      ViewOut.printResult(error.message);

      return await ErrorUtils.getResult(callback);
    }
  }
}

export default ErrorUtils;
