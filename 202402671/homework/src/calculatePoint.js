function calculatePoint(price, isVip = false) {
  if (typeof price !== "number") throw new Error("price must be a number");

  const rate = isVip ? 0.02 : 0.01;
  const point = price * rate;
  return Math.min(point, 5000);
}
 
module.exports = calculatePoint;