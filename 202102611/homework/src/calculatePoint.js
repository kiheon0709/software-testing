function calculatePoint(price, isVip = false) {
    // TODO: 작성
    if(typeof price !== "number") {
        throw new Error("invalid price");
    }
    rate = 0.01;
    point = price * rate;
    if(isVip) point *= 2;

    if(point > 5000) point = 5000;

    return point;
    
}

module.exports = calculatePoint;
