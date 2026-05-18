const processOrder = require("../src/processOrder");

describe("processOrder", () => {
  test("order가 없으면 에러 발생", () => {
    const api = {
      sendDiscountNotification: jest.fn(),
      sendBasicNotification: jest.fn(),
    };
    const order = {
      price: 0,
      userId: 0,
    };
    expect(() => processOrder(api, null)).toThrow();
  });
  test("price가 숫자가 아니면 에러 발생", () => {
    const api = {
      sendDiscountNotification: jest.fn(),
      sendBasicNotification: jest.fn(),
    };
    const order = {
      price: "We do a little trolling",
      userId: 0,
    };
    expect(() => processOrder(api, order)).toThrow();
  });
  test("price >= 50000이면 할인 알림 호출", () => {
    const api = {
      sendDiscountNotification: (msg) => {
        console.log("send:", msg);
      },
      sendBasicNotification: (msg) => {
        console.log("send:", msg);
      },
    };
    const order = {
      price: 70000,
      userId: 1,
    };
    const spy = jest.spyOn(api, "sendDiscountNotification");
    processOrder(api, order);
    expect(spy).toHaveBeenCalled();
  });
  test("price < 50000이면 기본 알림 호출", () => {
    const api = {
      sendDiscountNotification: (msg) => {
        console.log("send:", msg);
      },
      sendBasicNotification: (msg) => {
        console.log("send:", msg);
      },
    };
    const order = {
      price: 10000,
      userId: 1,
    };
    const spy = jest.spyOn(api, "sendBasicNotification");
    processOrder(api, order);
    expect(spy).toHaveBeenCalled();
  });
  test("price를 반환한다", () => {
    const api = {
      sendDiscountNotification: jest.fn(),
      sendBasicNotification: jest.fn(),
    };
    const order = {
      price: 10000,
      userId: 1,
    };
    expect(processOrder(api, order)).toBe(10000);
  });
});
