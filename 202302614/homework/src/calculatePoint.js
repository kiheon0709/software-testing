function calculatePoint(price, isVip = false) {
  // 값은 숫자 타입만 허용
  if (price === null || typeof price !== "number") {
    throw new Error("invalid input");
  }

  // VIP 여부에 따라 추가 적립(%2)
  const rate = isVip ? 0.02 : 0.01;
  
  // 결제 금액에 따라 포인트 적립
  let point = price * rate;

  // 최대 적립 제한 존재(5000)
  if (point > 5000) {
    point = 5000;
  }

  return point;
}

module.exports = calculatePoint;