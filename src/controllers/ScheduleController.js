import { ErrorUtils } from '../utils/index.js';
import { CalendarController } from './index.js';

class ScheduleController {
  constructor() {
    this.calendarController = new CalendarController();
  }

  async processSchedule() {
    const calendar = await ErrorUtils.getResult(() => this.calendarController.getCalendar());
  }
}

export default ScheduleController;
