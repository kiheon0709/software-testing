function calculatePoint(price, isVip = false) {
    if (typeof price !== "number" || !Number.isFinite(price) || price < 0) {
        throw new Error("invalid price");
    }

    const basePoint = Math.floor(price * (isVip ? 0.02 : 0.01));
    return Math.min(basePoint, 5000);
}

module.exports = calculatePoint;