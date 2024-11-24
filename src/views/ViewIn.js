import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../utils/index.js';

class ViewIn {
  static readMonthAndDay() {
    return Console.readLineAsync(MESSAGE.readMonthAndDay);
  }
}

export default ViewIn;
