function add(a, b) {
  const numA = Number(a);
  const numB = Number(b);
  if (isNaN(numA) || isNaN(numB)) {
    throw new Error("invalid input");
  }
  return numA + numB;
}

module.exports = add;

test("두 수 더하기", () => {
  expect(add(2, 3)).toBe(5);
});

test("문자열 숫자도 더하기", () => {
  expect(add("2", "3")).toBe(5);
});
