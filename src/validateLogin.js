function validateLogin(user) {
    if (!user) return null;
  
    if (!user.email || !user.password) {
      return { success: false, message: "필수값 누락" };
    }
  
    if (!user.email.includes("@")) {
      return { success: false, message: "이메일 형식 오류" };
    }
  
    return { success: true, message: "로그인 성공" };
}
  
module.exports = validateLogin;