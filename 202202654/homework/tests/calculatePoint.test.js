const calculatePoint = require("../src/calculatePoint");
test("기본 적립: 1%", () => {
  expect(calculatePoint(10000)).toBe(100);
});
test("VIP는 2% 적립", () => {
  expect(calculatePoint(10000, true)).toBe(200);
});
test("최대 적립은 5000 제한", () => {
  expect(calculatePoint(1000000)).toBe(5000);
});
test("잘못된 입력 시 에러 발생", () => {
  expect(() => calculatePoint(null)).toThrow();
});
