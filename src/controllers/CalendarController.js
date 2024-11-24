import { Calendar } from '../models/index.js';
import { Validator } from '../utils/index.js';
import { ViewIn } from '../views/index.js';

class CalendarController {
  async getCalendar() {
    const input = await ViewIn.readMonthAndDay();
    Validator.validateDelimiter(input);

    return this.#parseMonthAndDay(input);
  }

  #parseMonthAndDay(input) {
    const [month, day] = input.split(Validator.DELIMITER);
    return new Calendar(month, day);
  }
}

export default CalendarController;
