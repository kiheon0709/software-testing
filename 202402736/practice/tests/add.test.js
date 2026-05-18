const add = require("../src/add");

test("add", () => {
  expect(add(1, 2)).toBe(3);
});