function calculatePoint(price, isVip = false) {
  if (typeof price !== "number") {
    throw new Error("invalid input");
  }

  const pointRate = isVip ? 0.02 : 0.01;
  const point = price * pointRate;

  return Math.min(point, 5000);
}

module.exports = calculatePoint;
