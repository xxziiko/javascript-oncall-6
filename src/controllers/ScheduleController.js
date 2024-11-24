import { ErrorUtils } from '../utils/index.js';
import { CalendarController } from './index.js';

class ScheduleController {
  constructor() {
    this.calendarController = new CalendarController();
  }

  async processSchedule() {
    const calendar = await ErrorUtils.getResult(() => this.calendarController.getCalendar());
    const staff = await ErrorUtils.getResult(() => this.getStaff());
  async getStaff() {
    const weekStep = await this.staffController.getStaff(MESSAGE.readWeekStep);
  }
}

export default ScheduleController;
