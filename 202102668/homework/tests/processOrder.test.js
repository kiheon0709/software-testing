const processOrder = require("../src/processOrder");

describe("processOrder", () => {
  test("order가 없으면 에러 발생", () => {
    const mockApi = {
      sendDiscountNotification: jest.fn(),
      sendBasicNotification: jest.fn(),
    };

    // order가 없거나 null/undefined이면 에러 발생해야 함
    expect(() => processOrder(mockApi, null)).toThrow("invalid order");
    expect(() => processOrder(mockApi, undefined)).toThrow("invalid order");
  });

  test("price가 숫자가 아니면 에러 발생", () => {
    const mockApi = {
      sendDiscountNotification: jest.fn(),
      sendBasicNotification: jest.fn(),
    };

    // price를 문자열로 넣으면 에러 발생해야 함
    expect(() =>
      processOrder(mockApi, { price: "10000", userId: 1 })
    ).toThrow("invalid order");
  });

  test("price >= 50000이면 할인 알림 호출", () => {
    const mockApi = {
      sendDiscountNotification: jest.fn(),
      sendBasicNotification: jest.fn(),
    };

    processOrder(mockApi, { price: 60000, userId: 1 });

    // sendDiscountNotification이 올바른 userId로 호출됐는지 확인
    expect(mockApi.sendDiscountNotification).toHaveBeenCalled();
    expect(mockApi.sendDiscountNotification).toHaveBeenCalledWith(1);

    // 반대로 basic은 호출되면 안 됨
    expect(mockApi.sendBasicNotification).not.toHaveBeenCalled();
  });

  test("price < 50000이면 기본 알림 호출", () => {
    const mockApi = {
      sendDiscountNotification: jest.fn(),
      sendBasicNotification: jest.fn(),
    };

    processOrder(mockApi, { price: 10000, userId: 2 });

    // sendBasicNotification이 올바른 userId로 호출됐는지 확인
    expect(mockApi.sendBasicNotification).toHaveBeenCalled();
    expect(mockApi.sendBasicNotification).toHaveBeenCalledWith(2);

    // 반대로 discount는 호출되면 안 됨
    expect(mockApi.sendDiscountNotification).not.toHaveBeenCalled();
  });

  test("price를 반환한다", () => {
    const mockApi = {
      sendDiscountNotification: jest.fn(),
      sendBasicNotification: jest.fn(),
    };

    const result = processOrder(mockApi, { price: 30000, userId: 1 });

    // 함수의 return 값을 검증
    expect(result).toBe(30000);
  });
});