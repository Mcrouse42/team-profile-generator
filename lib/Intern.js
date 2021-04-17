const Employee = require("./Employee");

//get school() {
//     return this.school?
// }

class Intern extends Employee {

  constructor(name, id, email, school) {
    super(name, id, email);
    
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
