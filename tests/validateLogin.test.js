const validateLogin = require("../src/validateLogin");

test("정상 로그인", () => {
    const result = validateLogin({
      email: "test@test.com",
      password: "1234",
    });
  
    expect(result).toEqual({ //객체 비교 → toEqual 사용
      success: true,
      message: "로그인 성공",
    });
});

test("성공 여부 확인", () => {
    const result = validateLogin({
      email: "test@test.com",
      password: "1234",
    });
  
    expect(result.success).toBe(true); //boolean / 숫자 → toBe
});

test("정상 로그인 시 결과가 존재한다", () => {
    const result = validateLogin({
      email: "test@test.com",
      password: "1234",
    });
  
    expect(result).toBeTruthy(); //결과 존재 -> truthy
});

test("유저가 없으면 실패", () => {
    const result = validateLogin(null);
  
    expect(result).toBeFalsy(); //null → falsy
});

test("이메일 형식 오류", () => {
    const result = validateLogin({
      email: "invalid-email",
      password: "1234",
    });
  
    expect(result.success).not.toBe(true);
});

class LoginResult {
    constructor(success, message) {
      this.success = success;
      this.message = message;
    }
}
  
test("결과 타입 확인", () => {
    const result = new LoginResult(true, "로그인 성공");
  
    expect(result).toBeInstanceOf(LoginResult); //클래스 기반 객체 확인
});