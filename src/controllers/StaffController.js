import { Validator } from '../utils/index.js';
import { Staff } from '../models/index.js';
import { ViewIn } from '../views/index.js';

class StaffController {
  constructor() {
    this.staff = new Staff([]);
  }

  async getStaff(message) {
    const staff = await ViewIn.readStaff(message);
    Validator.validateDelimiter(staff);

    return new Staff(staff.split(Validator.DELIMITER));
  }
}

export default StaffController;
