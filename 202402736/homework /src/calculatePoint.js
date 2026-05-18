function calculatePoint(price, isVip = false) {
  if (typeof price !== "number" || price === null) {
    throw new Error("Invalid price");
  }

  const rate = isVip ? 0.02 : 0.01;
  let point = price * rate;

  if (point > 5000) {
    point = 5000;
  }

  return point;
}

module.exports = calculatePoint;