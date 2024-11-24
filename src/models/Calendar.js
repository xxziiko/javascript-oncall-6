import { HOLIDAY, WEEK } from '../utils/constants';

class Calendar {
  #calendar;

  constructor(month, day) {
    this.year = 2024;
    this.month = month;
    this.day = day;
    this.holiday = !!HOLIDAY[month];
    this.#calendar = this.#getCalendar();
  }

  get calendar() {
    return this.#calendar;
  }

  #getCalendar() {
    const fullDate = this.#getFullDate();

    return this.#parseCalendar(fullDate);
  }

  #parseCalendar(fullDate) {
    return fullDate.map((date, index) => ({
      date,
      day: WEEK[(WEEK.indexOf(this.day) + index) % 7],
      holiday: this.holiday && HOLIDAY[this.month] === date,
    }));
  }

  #getFullDate() {
    const endDate = new Date(this.year, this.month, 0);

    return Array.from({ length: endDate.getDate() }, (_, i) => i + 1);
  }
}

export default Calendar;
