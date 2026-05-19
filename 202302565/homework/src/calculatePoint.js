function calculatePoint(price, isVip = false) {
  if (typeof price !== "number" || isNaN(price) || price < 0) {
    throw new Error("invalid price");
  }

  let pointRate = isVip ? 0.02 : 0.01; 

  let finalPoint = Math.floor(price * pointRate);

  const MAX_POINT = 5000;
  if (finalPoint > MAX_POINT) {
    finalPoint = MAX_POINT;
  }

  return finalPoint;
}

module.exports = calculatePoint;