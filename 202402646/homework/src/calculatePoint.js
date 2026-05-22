function calculatePoint(price, isVip = false) {
  // TODO: 작성
  
   //같은 숫자 타입만 허용
    if (price === null || price === undefined || typeof price !== "number" || isNaN(price)) {
    throw new Error("invalid input");
  }

    //  VIP는 2%, 일반은 1% 
    const rate = isVip ? 0.02 : 0.01;
    let point = price * rate;

    // 최대 적립 제한
    if (point > 5000) {
        point = 5000;
    }

    return point;
}
 
module.exports = calculatePoint;
