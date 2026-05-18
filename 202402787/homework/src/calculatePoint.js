function calculatePoint(price, isVip = false) {
  if (typeof price !== "number") {
    throw new Error("invalid price");
  }

  let point;

  if (isVip) {
    point = price * 0.02;
  } else {
    point = price * 0.01;
  }

  if (point > 5000) {
    return 5000;
  }

  return point;
}

module.exports = calculatePoint;