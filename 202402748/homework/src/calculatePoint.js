function calculatePoint(price, isVip = false) {
  // TODO: 작성
    if (typeof price !== "number" || price < 0) {
        throw new Error("invalid price");
    }

    let points = Math.floor(price / 1000) * 10;
    if (isVip) {
        points *= 2;
    }

    if (points > 5000) {
        points = 5000;
    }
    return points;
}
 
module.exports = calculatePoint