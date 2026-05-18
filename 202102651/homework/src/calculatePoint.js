function calculatePoint(price, isVip = false) {
  if (price === null || price === undefined || typeof price !== "number") {
    throw new Error("invalid price");
  }

  const rate = isVip ? 0.02 : 0.01;
  const points = price * rate;

  return Math.min(points, 5000);
}

module.exports = calculatePoint;
