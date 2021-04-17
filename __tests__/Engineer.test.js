const { expect, test } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("creates a Engineer object", () => {
  const engineer = new Engineer("Jim", "1", "jim@gmail.com", "GithubLink");

  expect(engineer.name).toBe("Jim");
  expect(engineer.id).toBe("1");
  expect(engineer.email).toBe("jim@gmail.com");
  expect(engineer.github).toBe("GithubLink");
});

test("checks the Engineer object", () => {
  const engineer = new Engineer("Jim", "1", "jim@gmail.com", "GithubLink");

  expect(engineer.name).toBe("Jim");
  expect(engineer.id).toBe("1");
  expect(engineer.email).toBe("jim@gmail.com");
  expect(engineer.github).toBe("GithubLink");
  expect(engineer.getRole()).toBe("Engineer");
});
