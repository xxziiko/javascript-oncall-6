import { Validator } from '../utils/index.js';
import { Staff } from '../models/index.js';
import { ViewIn } from '../views/index.js';

class StaffController {
  async getStaff(message) {
    const staff = await ViewIn.readStaff(message);
    Validator.validateDelimiter(staff);
    return this.#parseStaff(staff);
  }

  #parseStaff(staff) {
    return new Staff(staff.split(Validator.DELIMITER));
  }
}

export default StaffController;
