function calculatePoint(price, isVip = false) {
  if (price == null) {
    throw new Error("Invalid input");
  }
  
  const rate = isVip ? 0.02 : 0.01;
  const point = Math.floor(price * rate);
  
  return Math.min(point, 5000);
}
 
module.exports = calculatePoint;