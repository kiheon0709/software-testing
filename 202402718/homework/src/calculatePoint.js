function calculatePoint(price, isVip = false) {

    // 숫자 타입 검사
    if (typeof price !== "number" || isNaN(price)) {
        throw new Error("price must be number");
    }

    // 음수 방지
    if (price < 0) {
        throw new Error("price must be positive");
    }

    let point;

    if (isVip) {
        point = price * 0.02; //VIP는 2% 적립
    }else{
        point = price * 0.01; //기본 적립: 결제 금액의 1%
    }

    //최대 적립 제한
    if (point > 5000) {
        point = 5000;
    }

    return Math.floor(point);
}

module.exports = calculatePoint;