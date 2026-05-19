function calculatePoint(price, isVIP = false) {
    if (typeof price !== "number" || isNaN(price)) {
        throw new Error("Invalid price");
    }

    const reward_rate = isVIP ? 0.02 : 0.01;
    const point = price * reward_rate;
    return Math.min(point, 5000);
}

module.exports = calculatePoint;