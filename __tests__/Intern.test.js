const { expect, test } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("creates an intern object", () => {
  const intern = new Intern("Jim", "1", "jim@gmail.com", "school");

  expect(intern.name).toBe("Jim");
  expect(intern.id).toBe("1");
  expect(intern.email).toBe("jim@gmail.com");
  expect(intern.school).toBe("school");
});

test("checks an intern object", () => {
  const intern = new Intern("Jim", "1", "jim@gmail.com", "school");

  expect(intern.getName()).toBe("Jim");
  expect(intern.getId()).toBe("1");
  expect(intern.getEmail()).toBe("jim@gmail.com");
  expect(intern.getSchool()).toBe("school");
  expect(intern.getRole()).toBe("Intern");
});
