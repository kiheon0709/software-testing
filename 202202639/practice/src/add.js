function add(a, b) {
  const numA = Number(a); // 문자열 숫자도 처리할 수 있도록 변환 
  const numB = Number(b); 

  // 숫자가 아닌 값이 들어왔을 때의 예외 처리 
  if (isNaN(numA) || isNaN(numB)) {
    throw new Error("invalid input"); 
  }

  return numA + numB; 
}
module.exports = add; 