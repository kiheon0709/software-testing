function calculatePoint(price, isVip = false) {
    if (typeof price !== "number") {
        throw new Error("price는 숫자여야 합니다");
    }

    const rate = isVip ? 0.02 : 0.01;
    const point = price * rate;

    return Math.min(point, 5000);
}

module.exports = calculatePoint;