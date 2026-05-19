function calculatePoint(amount, isVip = false) {
  if (typeof amount !== "number" || amount <= 0) {
    throw new Error("invalid amount");
  }

  const rate = isVip ? 0.02 : 0.01;
  const point = amount * rate;

  return Math.min(point, 5000);
}

module.exports = calculatePoint;