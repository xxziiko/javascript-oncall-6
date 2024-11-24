import { ErrorUtils, MESSAGE } from '../utils/index.js';
import { CalendarController, StaffController } from './index.js';

class ScheduleController {
  #schedules;

  constructor() {
    this.calendarController = new CalendarController();
    this.staffController = new StaffController();
    this.#schedules = [];
  }

  get schedules() {
    return this.#schedules;
  }

  async processSchedule() {
    const monthly = await ErrorUtils.getResult(
      async () => await this.calendarController.getCalendar()
    );
    const staff = await ErrorUtils.getResult(async () => await this.getStaff());

    let weekIndex = 0;
    let holidayIndex = 0;
    if (!monthly || !staff) return;
    const { month, holiday, calendar } = monthly;

    await calendar.forEach(([date, day]) => {
      if (day === '토' || day === '일' || holiday === date) {
        const staffIndex = holidayIndex % staff.holiday.length;

        this.#schedules.push({
          month,
          date,
          day,
          staff: staff.holiday[staffIndex],
          holiday: holiday === date && '휴일',
        });
        holidayIndex++;
        return;
      }

      const staffIndex = weekIndex % staff.week.length;
      this.#schedules.push({ month, date, day, staff: staff.week[staffIndex] });
      weekIndex++;
    });

    await this.#changeSchedule(holidayIndex, weekIndex, staff);
  }

  async #changeSchedule(holidayIndex, weekIndex, staff) {
    this.#schedules.forEach((schedule, i) => {
      this.#schedules.slice(i + 1).forEach((nextDay) => {
        if (schedule.staff !== nextDay.staff) return;

        if (schedule.day === '토' || schedule.day === '일' || !!schedule.holiday) {
          holidayIndex++;
          schedule.staff = staff.holiday[holidayIndex % staff.holiday.length];
          return;
        }

        weekIndex++;
        schedule.staff = staff.week[weekIndex % staff.week.length];
      });
    });
  }

  async getStaff() {
    const week = await this.staffController.getStaff(MESSAGE.readWeekStep);
    const holiday = await this.staffController.getStaff(MESSAGE.readHolidayStep);

    return { week: week.staff, holiday: holiday.staff };
  }
}

export default ScheduleController;
