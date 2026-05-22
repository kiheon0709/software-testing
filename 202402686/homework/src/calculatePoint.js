function calculatePoint(price, isVip = false) {
 // TODO: 작성
 if (typeof price !== "number" || price < 0) {
    throw new Error("Invalid price");
 }
 if(isVip) {
    return Math.min(price * 0.02, 5000);
 }else {
    return Math.min(price * 0.01, 5000);
 }
}

module.exports = calculatePoint;