import { Validator } from '../utils/index.js';

class Staff {
  #staff;

  constructor(staff) {
    this.#validateStaff(staff);
    this.#staff = staff;
  }

  get staff() {
    return this.#staff;
  }

  #validateStaff(staff) {
    Validator.validateDuplicate(staff);
    Validator.validateRange(staff);
    staff.forEach((name) => Validator.validateNameLength(name));
  }
}

export default Staff;
