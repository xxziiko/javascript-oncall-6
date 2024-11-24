import { Calendar } from '../models/index.js';
import { Validator } from '../utils/index.js';
import { ViewIn } from '../views/index.js';

class CalendarController {
  constructor() {
    this.calendar = new Calendar(null, null);
  }

  async getCalendar() {
    const input = await ViewIn.readMonthAndDay();
    this.#validateMonthAndDay(input);

    return this.#parseMonthAndDay(input);
  }

  #parseMonthAndDay(input) {
    const [month, day] = input.split(',');
    return new Calendar(month, day);
  }

  #validateMonthAndDay(input) {
    Validator.validateDelimiter(input);
    Validator.validateMonth(input);
    Validator.validateDay(input);
  }
}

export default CalendarController;
