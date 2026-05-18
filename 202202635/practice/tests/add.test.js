const add = require("../src/add");

test("두 수 더하기", () => {
    expect(add(2,3)).toBe(5);
});