function calculatePoint(price, isVip = false) {
  // TODO: 작성
  if (typeof price !== "number" || isNaN(price) || price < 0) {
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