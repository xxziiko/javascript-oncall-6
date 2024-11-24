import { formatSchedule } from './utils/index.js';
import { ScheduleController } from './controllers/index.js';
import { ViewOut } from './views/index.js';

class App {
  async run() {
    const scheduleController = new ScheduleController();

    await scheduleController.processSchedule();
    const schedules = scheduleController.schedules;
    schedules.forEach((schedule) => ViewOut.printResult(formatSchedule(schedule)));
  }
}

export default App;
