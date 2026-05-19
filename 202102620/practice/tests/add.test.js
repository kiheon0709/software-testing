const add = require("../src/add");

test("두 수 더하기", () => {
  expect(add(2, 3)).toBe(5);
});

test("문자열 숫자도 더하기", () => {
  expect(add("2", "3")).toBe(5);
});

test("잘못된 입력 시 에러 발생", () => {
  expect(() => add("abc", 3)).toThrow("invalid input");
});
