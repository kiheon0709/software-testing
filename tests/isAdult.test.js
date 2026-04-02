const isAdult = require("../src/isAdult");

test("20살 이상이면 성인이다", () => {
  expect(isAdult(20)).toBe(true);
});

test("19살은 미성년자이다", () => {
  expect(isAdult(19)).toBe(false);
});