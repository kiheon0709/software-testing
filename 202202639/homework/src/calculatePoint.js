/**
 * 결제 금액에 따라 포인트를 계산하여 반환하는 함수
 * @param {number} price - 결제 금액 (숫자 타입만 허용)
 * @param {boolean} isVip - VIP 여부 (기본값: false)
 * @returns {number} 최종 적립 포인트 (최대 5,000 제한)
 */
function calculatePoint(price, isVip = false) {
  // 1. 잘못된 입력값 처리: price가 null, undefined이거나 숫자 타입이 아닌 경우 예외 발생
  if (price === null || price === undefined || typeof price !== "number") {
    throw new Error("invalid input");
  }

  // 2. VIP 여부에 따른 적립률 설정 (VIP: 2%, 일반: 1%)
  const rate = isVip ? 0.02 : 0.01;
  
  // 3. 포인트 계산
  let calculatedPoint = price * rate;

  // 4. 최대 적립 한도 제한 적용 (최대 5,000점 제한)
  if (calculatedPoint > 5000) {
    calculatedPoint = 5000;
  }

  return calculatedPoint;
}

module.exports = calculatePoint;