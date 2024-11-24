import { ErrorUtils, MESSAGE } from '../utils/index.js';
import { CalendarController, StaffController } from './index.js';

class ScheduleController {
  constructor() {
    this.calendarController = new CalendarController();
    this.staffController = new StaffController();
  }

  async processSchedule() {
    const calendar = await ErrorUtils.getResult(() => this.calendarController.getCalendar());
    const staff = await ErrorUtils.getResult(() => this.getStaff());
  }

  async getStaff() {
    const weekStep = await this.staffController.getStaff(MESSAGE.readWeekStep);
    const holidayStep = await this.staffController.getStaff(MESSAGE.readHolidayStep);

    return { weekStep, holidayStep };
  }
}

export default ScheduleController;
