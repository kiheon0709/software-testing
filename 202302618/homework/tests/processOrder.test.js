const processOrder= require("../src/processOrder");

describe("processOrder", () => {

    test("order가 없으면 에러 발생", () => {
        const mockApi = {
            sendDiscountNotification: jest.fn(),
            sendBasicNotification: jest.fn()
        };
        expect(() => {
            processOrder(mockApi, null);
        }).toThrow("invalid order");
    });

    test("price가 숫자가 아니면 에러 발생", () => {
        const mockApi = {
            sendDiscountNotification: jest.fn(),
            sendBasicNotification: jest.fn()
        };
        const wrongOrder = { userId: "user1", price: "50000" };

        expect(() => {
            processOrder(mockApi, wrongOrder);
        }).toThrow("invalid order");});

    test("price >= 50000이면 할인 알림 호출", () => {
        const mockApi = {
            sendDiscountNotification: jest.fn(),
            sendBasicNotification: jest.fn()
        };
        const bigOrder = { userId: "user1", price: 50000 };

        processOrder(mockApi, bigOrder);
        expect(mockApi.sendDiscountNotification).toHaveBeenCalledWith("user1");
        expect(mockApi.sendBasicNotification).not.toHaveBeenCalled();});

    test("price < 50000이면 기본 알림 호출", () => {
        const mockApi = {
            sendDiscountNotification: jest.fn(),
            sendBasicNotification: jest.fn()
        };
        const smallOrder = { userId: "user2", price: 30000 };

        processOrder(mockApi, smallOrder);
        expect(mockApi.sendBasicNotification).toHaveBeenCalledWith("user2");
        expect(mockApi.sendDiscountNotification).not.toHaveBeenCalled();});

    test("price를 반환한다", () => {
        const mockApi = {
            sendDiscountNotification: jest.fn(),
            sendBasicNotification: jest.fn()
        };
        const order = { userId: "user3", price: 25000 };

        const result = processOrder(mockApi, order);
        expect(result).toBe(25000);});

});