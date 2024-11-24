import { ScheduleController } from './controllers/index.js';
class App {
  async run() {
    const scheduleController = new ScheduleController();
    await scheduleController.processSchedule();
  }
}

export default App;
