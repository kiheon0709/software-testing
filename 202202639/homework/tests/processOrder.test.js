const processOrder = require("../src/processOrder");

describe("processOrder", () => {
  // 1. order 객체가 누락되었을 때의 예외 처리 검증
  test("order가 없으면 에러 발생", () => {
    expect(() => {
      processOrder({}, null);
    }).toThrow("invalid order");
  });

  // 2. price 값이 숫자 타입이 아닐 때의 예외 처리 검증
  test("price가 숫자가 아니면 에러 발생", () => {
    const mockApi = {};
    expect(() => {
      processOrder(mockApi, { price: "10000", userId: 1 });
    }).toThrow("invalid order");
  });

  // 3. price가 50,000원 이상일 때의 알림 분기 검증
  test("price >= 50000이면 할인 알림 호출", () => {
    // 호출 기록을 추적할 수 있는 가짜 함수(Mock) 정의
    const mockApi = {
      sendDiscountNotification: jest.fn(),
      sendBasicNotification: jest.fn(),
    };

    processOrder(mockApi, { price: 60000, userId: 1 });

    // 할인 알림은 올바른 userId와 함께 호출되어야 함
    expect(mockApi.sendDiscountNotification).toHaveBeenCalledWith(1);
    // 기본 알림은 호출되면 안 됨
    expect(mockApi.sendBasicNotification).not.toHaveBeenCalled();
  });

  // 4. price가 50,000원 미만일 때의 알림 분기 검증
  test("price < 50000이면 기본 알림 호출", () => {
    const mockApi = {
      sendDiscountNotification: jest.fn(),
      sendBasicNotification: jest.fn(),
    };

    processOrder(mockApi, { price: 10000, userId: 2 });

    // 기본 알림은 올바른 userId와 함께 호출되어야 함
    expect(mockApi.sendBasicNotification).toHaveBeenCalledWith(2);
    // 할인 알림은 호출되면 안 됨
    expect(mockApi.sendDiscountNotification).not.toHaveBeenCalled();
  });

  // 5. 정상 흐름에서 최종 반환값(price) 검증
  test("price를 반환한다", () => {
    const mockApi = {
      sendDiscountNotification: jest.fn(),
      sendBasicNotification: jest.fn(),
    };

    const result = processOrder(mockApi, { price: 30000, userId: 1 });

    // 함수의 return 값이 입력한 order.price와 일치하는지 검증
    expect(result).toBe(30000);
  });
});