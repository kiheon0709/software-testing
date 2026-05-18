const processOrder = require("../src/processOrder");
describe("processOrder", () => {

  test("order가 없으면 에러 발생", () => {
    // 함수가 에러를 던지는가?
    expect(() => processOrder({}, null)).toThrow("invalid order");
  });

  test("price가 숫자가 아니면 에러 발생", () => {
    // price를 문자열로 넣어서 에러가 발생하는가?
    const mockApi = {};
    expect(() => processOrder(mockApi, { price: "60000", userId: 1 })).toThrow("invalid order");
  });

  test("price >= 50000이면 할인 알림 호출", () => {
    // 호출 기록을 확인할 수 있는 함수 2개가 필요함
    const mockApi = {
      sendDiscountNotification: jest.fn(),
      sendBasicNotification: jest.fn()
    };

    processOrder(mockApi, {price: 60000, userId: 1});
    // sendDiscountNotification이 호출됐는가?
    expect(mockApi.sendDiscountNotification).toHaveBeenCalled();
    // 올바른 userId로 호출되는가?
    expect(mockApi.sendDiscountNotification).toHaveBeenCalledWith(1);
    // basic은 호출되지 않았는가?
    expect(mockApi.sendBasicNotification).not.toHaveBeenCalled();
  });

  test("price < 50000이면 기본 알림 호출", () => {
    // 할인 알림 호출과 비슷하게 mock 함수 생성
    const mockApi = {
      sendDiscountNotification: jest.fn(),
      sendBasicNotification: jest.fn()
    };

    processOrder(mockApi, {price: 10000, userId: 2});
    // sendBasicNotification 호출 확인, userId 확인
    expect(mockApi.sendBasicNotification).toHaveBeenCalled();
    expect(mockApi.sendBasicNotification).toHaveBeenCalledWith(2);
    // discount은 호출되지 않아야 함
    expect(mockApi.sendDiscountNotification).not.toHaveBeenCalled();
  });

  test("price를 반환한다", () => {
    const mockApi = {
      // 실제 호출 여부는 중요하지 않지만 에러 방지용
      sendBasicNotification: jest.fn()
    };

    const result = processOrder(mockApi, {price: 30000, userId: 1});
    // 함수의 리턴값을 검증해보기
    expect(result).toBe(30000);
  });

});
