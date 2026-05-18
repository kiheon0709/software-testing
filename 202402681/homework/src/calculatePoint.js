function calculatePoint(price, isVip = false) {
  // TODO: 작성
  if (typeof price !== "number") {
    throw new Error("invalid price");
  }

  const rate = isVip ? 0.02 : 0.01;
  const point = price * rate;

  return Math.min(point, 5000);
}
 
module.exports = calculatePoint;