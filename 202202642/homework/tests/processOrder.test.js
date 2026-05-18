const processOrder = require("../src/processOrder");

describe("processOrder", () => {
    test("order가 없으면 에러 발생", () => {
        const mockApi = {
            sendDiscountNotification: jest.fn(),
            sendBasicNotification: jest.fn(),
        };

        expect(() => processOrder(mockApi, null)).toThrow();
    });

    test("price가 숫자가 아니면 에러 발생", () => {
        const mockApi = {
            sendDiscountNotification: jest.fn(),
            sendBasicNotification: jest.fn(),
        };

        expect(() => processOrder(mockApi, { price: "50000", userId: 1 })).toThrow();
    });

    test("price >= 50000이면 할인 알림 호출", () => {
        const mockApi = {
            sendDiscountNotification: jest.fn(),
            sendBasicNotification: jest.fn(),
        };

        processOrder(mockApi, { price: 60000, userId: 1 });

        expect(mockApi.sendDiscountNotification).toHaveBeenCalled();
        expect(mockApi.sendDiscountNotification).toHaveBeenCalledWith(1);
        expect(mockApi.sendBasicNotification).not.toHaveBeenCalled();
    });

    test("price < 50000이면 기본 알림 호출", () => {
        const mockApi = {
            sendDiscountNotification: jest.fn(),
            sendBasicNotification: jest.fn(),
        };

        processOrder(mockApi, { price: 10000, userId: 2 });

        expect(mockApi.sendBasicNotification).toHaveBeenCalled();
        expect(mockApi.sendBasicNotification).toHaveBeenCalledWith(2);
        expect(mockApi.sendDiscountNotification).not.toHaveBeenCalled();
    });

    test("price를 반환한다", () => {
        const mockApi = {
            sendDiscountNotification: jest.fn(),
            sendBasicNotification: jest.fn(),
        };

        const result = processOrder(mockApi, { price: 30000, userId: 1 });

        expect(result).toBe(30000);
    });
});
