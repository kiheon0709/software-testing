const isAdult = require("../src/isAdult");

test("19살이면 false를 반환한다", () => {
  expect(isAdult(19)).toBe(false);
});