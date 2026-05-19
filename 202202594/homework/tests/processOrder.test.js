const processOrder = require("../src/processOrder");

describe("processOrder", () => {
    test("order가 없으면 에러 발생", () => {
        const mockApi = {};
        expect(() => processOrder(mockApi, null)).toThrow("invalid order");
    });
    test("price가 숫자가 아니면 에러 발생", () => {
        const mockApi = {};
        expect(() => processOrder(mockApi, {
            userId:"박현민",
            price:"나"
        })).toThrow("invalid order");
    });
    test("price >= 50000이면 할인 알림 호출", () => {
        const mockApi = {
            sendDiscountNotification : jest.fn(),
            sendBasicNotification : jest.fn()
        };
        processOrder(mockApi, {
            price  : 60000, userId : 1
        });
        
        expect(mockApi.sendDiscountNotification).toHaveBeenCalled();
    });
    test("price >= 50000이면 할인 알림 호출", () => {
        const mockApi = {
            sendDiscountNotification : jest.fn(),
            sendBasicNotification : jest.fn()
        };
        processOrder(mockApi, {
            price  : 10000, userId : 2
        });
        
        expect(mockApi.sendBasicNotification).toHaveBeenCalled();
    });
    test("price를 반환한다", () => {
        const mockApi = {
            sendDiscountNotification : jest.fn(),
            sendBasicNotification : jest.fn()
        };
        const result = processOrder(mockApi, {
            price  : 30000, userId : 1
        });
        
        expect(result).toBe(30000);
    });
})