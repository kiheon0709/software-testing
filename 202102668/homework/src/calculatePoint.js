function calculatePoint(price, isVip = false) {
  // 잘못된 입력 검증 (null, undefined, 숫자 아닌 값, NaN)
  if (typeof price !== "number" || isNaN(price)) {
    throw new Error("invalid input");
  }

  // VIP는 2%, 일반은 1% 적립
  const rate = isVip ? 0.02 : 0.01;
  const point = price * rate;

  // 최대 적립 5000 제한
  return Math.min(point, 5000);
}

module.exports = calculatePoint;