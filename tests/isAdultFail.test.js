const isAdult = require("../src/isAdult");

test("19살이면 true를 반환한다", () => {
  expect(isAdult(19)).toBe(true);
});