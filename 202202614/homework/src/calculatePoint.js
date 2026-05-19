function calculatePoint(price, isVip = false) {
    if (typeof price !== "number" || isNaN(price)) {
        throw new Error("invalid input");
    }
    const rate = isVip ? 0.02 : 0.01;
    const point = price * rate;
    return Math.min(point, 5000);
}

module.exports = calculatePoint;
