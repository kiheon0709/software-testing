function calculatePoint(price, isVip = false) {
  if (typeof price !== "number") {
    throw new Error("invalid input");
  }

  let point;

  if (isVip) {
    point = price * 0.02;
  } else {
    point = price * 0.01;
  }

  if (point > 5000) {
    point = 5000;
  }

  return point;
}

module.exports = calculatePoint;