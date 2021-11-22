import Bank from "./bank.js";
import Credit from "./credit.js";
import Background from "./background.js";

export default class Mortgage {
  constructor(name) {
    this.name = name;
  }
  applyFor(amount) {
    // access multiple subsystems...
    var result = "approved";
    if (!new Bank().verify(this.name, amount)) {
      result = "denied";
    } else if (!new Credit().get(this.name)) {
      result = "denied";
    } else if (!new Background().check(this.name)) {
      result = "denied";
    }
    return this.name + " has been " + result + " for a " + amount + " mortgage";
  }
}
