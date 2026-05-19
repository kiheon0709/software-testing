function calculatePoint(price, isVip = false) {
  // TODO: 작성
  if (typeof price !== "number") {
    throw new Error("price는 숫자여야 합니다.");
  }
  let point = price * 0.01;
  if (isVip) {
    point = price * 0.02;
  }
  return Math.min(point, 5000);
}
module.exports = calculatePoint;
