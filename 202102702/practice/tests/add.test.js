const add = require("../src/add");

describe("add TDD practice", () => {
  test("두 수 더하기", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("문자열 숫자도 더하기", () => {
    expect(add("2", "3")).toBe(5);
  });

  test("잘못된 입력이면 에러 발생", () => {
    expect(() => add("a", 3)).toThrow();
  });
});
