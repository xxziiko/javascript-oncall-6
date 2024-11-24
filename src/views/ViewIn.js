import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../utils/index.js';

class ViewIn {
  static async readMonthAndDay() {
    return await Console.readLineAsync(MESSAGE.readMonthAndDay);
  }

  static async readStaff(message) {
    return await Console.readLineAsync(message);
  }
}

export default ViewIn;
