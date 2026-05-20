function calculatePoint(price, isVip = false) {
    if(!price || typeof price !== "number"|| typeof isVip !== "boolean") {
        throw new Error();
    }
    var g = price * 0.01;
    if(isVip) g *= 2;
    return g >= 5000 ? 5000 : g;
}
module.exports = calculatePoint;