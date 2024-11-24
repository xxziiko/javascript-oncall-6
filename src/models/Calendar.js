import { HOLIDAY, WEEK } from '../utils/constants.js';
import { Validator } from '../utils/index.js';
class Calendar {
  #calendar;
  #holiday;

  constructor(month, day) {
    this.#validateMonthAndDay(month, day);
    this.year = 2024;
    this.month = month;
    this.day = day;
    this.#holiday = HOLIDAY[month] ?? 0;
    this.#calendar = this.#getCalendar();
  }

  get calendar() {
    return this.#calendar;
  }

  get holiday() {
    return this.#holiday;
  }

  #getCalendar() {
    const fullDate = this.#getFullDate();
    return this.#parseCalendar(fullDate);
  }

  #parseCalendar(fullDate) {
    return fullDate.map((date, index) => [date, WEEK[(WEEK.indexOf(this.day) + index) % 7]]);
  }

  #getFullDate() {
    const endDate = new Date(this.year, this.month, 0);

    return Array.from({ length: endDate.getDate() }, (_, i) => i + 1);
  }

  #validateMonthAndDay(month, day) {
    Validator.validateMonth(month);
    Validator.validateDay(day);
  }
}

export default Calendar;
