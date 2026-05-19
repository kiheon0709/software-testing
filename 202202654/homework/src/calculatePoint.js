function calculatePoint(price, isVip = false) {
  if (!price) {
    throw new Error("invalid price");
  }

  if (isVip) {
    const point = price * 0.02;
    if (point <= 5000) {
      return point;
    } else {
      return 5000;
    }
    return price * 0.02;
  } else {
    const point = price * 0.01;
    if (point <= 5000) {
      return point;
    } else {
      return 5000;
    }
  }
}

module.exports = calculatePoint;
