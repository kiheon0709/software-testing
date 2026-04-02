const isAdult = require("../src/isAdult");

describe("isAdult 함수 테스트", () => {
  test("20살 이상이면 true를 반환한다", () => {
    expect(isAdult(20)).toBe(true);
  });

  test("19살이면 false를 반환한다", () => {
    expect(isAdult(19)).toBe(false);
  });
});
