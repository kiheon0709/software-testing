function calculatePoint(price, isVip = false) {
    if (typeof price !== "number") {
        throw new Error("invalid price");
    }
    const rate = isVip ? 0.02 : 0.01;
    return Math.min(price * rate, 5000);
}

module.exports = calculatePoint;
