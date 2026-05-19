function calculatePoint(price, isVip = false) {
    if (typeof price !== "number") {
        throw new Error("invalid price");
    }

    const rate = isVip ? 0.02 : 0.01;
    const point = price * rate;

    if (point > 5000) {
        return 5000;
    }

    return point;
}

module.exports = calculatePoint;