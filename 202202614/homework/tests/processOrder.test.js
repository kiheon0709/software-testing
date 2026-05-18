const processOrder = require("../src/processOrder");

describe("processOrder", () => {
    test("order가 없으면 에러 발생", () => {
        const api = { sendDiscountNotification: jest.fn(), sendBasicNotification: jest.fn() };
        expect(() => processOrder(api, null)).toThrow("invalid order");
    });

    test("price가 숫자가 아니면 에러 발생", () => {
        const api = { sendDiscountNotification: jest.fn(), sendBasicNotification: jest.fn() };
        const order = { price: "만원", userId: 1 };
        expect(() => processOrder(api, order)).toThrow("invalid order");
    });

    test("price >= 50000이면 할인 알림 호출", () => {
        const api = { sendDiscountNotification: jest.fn(), sendBasicNotification: jest.fn() };
        const order = { price: 50000, userId: 1 };
        processOrder(api, order);
        expect(api.sendDiscountNotification).toHaveBeenCalled();
    });

    test("price < 50000이면 기본 알림 호출", () => {
        const api = { sendDiscountNotification: jest.fn(), sendBasicNotification: jest.fn() };
        const order = { price: 30000, userId: 1 };
        processOrder(api, order);
        expect(api.sendBasicNotification).toHaveBeenCalled();
    });

    test("price를 반환한다", () => {
        const api = { sendDiscountNotification: jest.fn(), sendBasicNotification: jest.fn() };
        const order = { price: 30000, userId: 1 };
        const result = processOrder(api, order);
        expect(result).toBe(30000);
    });
});
