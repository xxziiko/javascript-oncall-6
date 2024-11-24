import { ViewOut } from '../views/index.js';
import { ERROR } from './constants.js';

class ErrorUtils {
  static handleError(condition) {
    if (condition) {
      throw new Error(ERROR);
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
