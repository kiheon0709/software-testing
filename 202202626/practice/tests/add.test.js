const add = require("../src/add");

test("두 수 더하기", () =>{
    expect(add(2,3)).toBe(5);
});

test("문자열 숫자도 더하기", ()=>{
    expect(add("2","3")).toBe(5);
});

test("wrong입력시 에러발생", ()=>{
    expect(()=>add("abc",1)).toThrow("invalid input");
});