function calculatePoint(price, isVip = false) {
  // TODO: 작성
  if (typeof price !== "number") {
    throw new Error("올바른 결제 금액을 입력해주세요.");
  }

  const rate = isVip ? 0.02 : 0.01;
  const point = price * rate;

  return Math.min(point, 5000);
}
 
module.exports = calculatePoint;