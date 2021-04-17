const { expect, test } = require("@jest/globals");
const Manager = require("../lib/Manager.js");

//creates manager object test
test("creates a manager object", () => {
  const manager = new Manager("Jim", "1", "jim@gmail.com", "9");

  expect(manager.name).toBe("Jim");
  expect(manager.id).toBe("1");
  expect(manager.email).toBe("jim@gmail.com");
  expect(manager.officeNumber).toBe("9");
});

test("checks employee object contents", () => {
  const manager = new Manager("Jim", "1", "jim@gmail.com", "9");

  expect(manager.getName()).toBe("Jim");
  expect(manager.getId()).toBe("1");
  expect(manager.getEmail()).toBe("jim@gmail.com");
  expect(manager.getOfficeNumber()).toBe("9");
  expect(manager.getRole()).toBe("Manager");
});
