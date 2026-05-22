const processOrder = require("../src/processOrder");

describe("processOrder", () => {
 test("order가 없으면 에러 발생", () => {
    expect(() => processOrder({}, null)).toThrow("invalid order");
 });

 test("price가 숫자가 아니면 에러 발생", () => {
    expect(() => processOrder({}, { price: "500000" })).toThrow("invalid order");
 });

 test("price >= 50000이면 할인 알림 호출", () => {
    const mockApi = {
        sendDiscountNotification: jest.fn(),
        sendBasicNotification: jest.fn()
    };
    const order = { price: 60000, userId: "user1" };
    processOrder(mockApi, order);
    expect(mockApi.sendDiscountNotification).toHaveBeenCalledWith("user1");
 });

 test("price < 50000이면 기본 알림 호출", () => {
    const mockApi = {
        sendDiscountNotification: jest.fn(),
        sendBasicNotification: jest.fn()
    };
    const order = { price: 10000, userId: "user2" };
    processOrder(mockApi, order);
    expect(mockApi.sendBasicNotification).toHaveBeenCalledWith("user2");
 });

 test("price를 반환한다", () => {
    const mockApi = {
        sendDiscountNotification: jest.fn(),
        sendBasicNotification: jest.fn()
    };
    const order = { price: 50000, userId: "user1" };
    const result = processOrder(mockApi, order);
    expect(result).toBe(50000);
 });
});