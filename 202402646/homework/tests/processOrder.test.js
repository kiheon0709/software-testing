const processOrder = require("../src/processOrder");
describe("processOrder", () => {
  test("order가 없으면 에러 발생", () => {
    // 💡 힌트:
    // - 함수가 에러를 던지는지 확인해야 함
    // TODO: 작성
    expect(() => processOrder(null)).toThrow();
  });

  test("price가 숫자가 아니면 에러 발생", () => {
    const mockApi = {};
    // 💡 힌트:
    // - price를 문자열로 넣어보기
    // - 에러 발생해야 함
    // TODO: 작성
    expect(() => processOrder(mockApi, { price: "10000", userId: 1 })).toThrow("invalid order");
  });

  test("price >= 50000이면 할인 알림 호출", () => {
    const mockApi = {
      // 💡 힌트:
      // - 두 개의 함수 필요
      // - 둘 다 "호출 기록을 확인할 수 있는 함수"여야 함
      sendDiscountNotification: jest.fn(),
      sendBasicNotification: jest.fn()
    };
    processOrder(mockApi, { price: 60000, userId: 1 });
    // 💡 힌트:
    // - sendDiscountNotification이 호출됐는지 확인
    // - 올바른 userId로 호출됐는지도 확인
    // - 반대로 basic은 호출되면 안됨
    // TODO: 작성

    expect(mockApi.sendDiscountNotification).toHaveBeenCalledWith(1);
    expect(mockApi.sendBasicNotification).not.toHaveBeenCalled();
  });
   test("price < 50000이면 기본 알림 호출", () => {
    const mockApi = {
      // 💡 힌트:
      // - 위와 동일하게 mock 함수 생성
      sendDiscountNotification: jest.fn(),
      sendBasicNotification: jest.fn()
    };
    
    processOrder(mockApi, { price: 10000, userId: 2 });
    // 💡 힌트:
    // - sendBasicNotification 호출 확인
    // - userId 값 확인
    // - discount는 호출되면 안됨
    // TODO: 작성
    sendBasicNotification: jest.fn()
  });
   test("price를 반환한다", () => {
    const mockApi = {
      // 💡 힌트:
      // - 위와 동일하게 mock 함수 생성
      // - 실제 호출 여부는 중요하지 않지만 에러 방지용
      sendDiscountNotification: jest.fn(),
      sendBasicNotification: jest.fn()
    };
    const result = processOrder(mockApi, { price: 30000, userId: 1 });
    // 💡 힌트:
    // - 함수의 return 값을 검증
    // TODO: 작성
    expect(result).toBe(30000);
  });

});