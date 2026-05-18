const processOrder = require("../src/processOrder");

test("order가 없으면 에러 발생", () => {
  const mockApi = {};

  expect(() => processOrder(mockApi, null)).toThrow();
});

test("price가 숫자가 아니면 에러 발생", () => {
  const mockApi = {};

  expect(() => processOrder(mockApi, { userId: 1, price: "50000" })).toThrow();
});

test("price가 50000원 이상이면 할인 알림을 호출한다", () => {
  const mockApi = {
    sendDiscountNotification: jest.fn(),
    sendBasicNotification: jest.fn(),
  };

  processOrder(mockApi, { userId: 1, price: 50000 });

  expect(mockApi.sendDiscountNotification).toHaveBeenCalled();
  expect(mockApi.sendDiscountNotification).toHaveBeenCalledWith(1);
  expect(mockApi.sendBasicNotification).not.toHaveBeenCalled();
});

test("price가 50000원 미만이면 기본 알림을 호출한다", () => {
  const mockApi = {
    sendDiscountNotification: jest.fn(),
    sendBasicNotification: jest.fn(),
  };

  processOrder(mockApi, { userId: 1, price: 30000 });

  expect(mockApi.sendBasicNotification).toHaveBeenCalled();
  expect(mockApi.sendBasicNotification).toHaveBeenCalledWith(1);
  expect(mockApi.sendDiscountNotification).not.toHaveBeenCalled();
});

test("주문 금액 price를 반환한다", () => {
  const mockApi = {
    sendDiscountNotification: jest.fn(),
    sendBasicNotification: jest.fn(),
  };

  const result = processOrder(mockApi, { userId: 1, price: 30000 });

  expect(result).toBe(30000);
});