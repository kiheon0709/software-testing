const sendMessage = require("../src/sendMessage");

describe("sendMessage", () => {
  test("message가 빈 문자열이면 에러 발생", () => {
    const mockService = {};
    expect(() => sendMessage(mockService, "")).toThrow("invalid message");
  });

  test("message가 유효하면 메세지 전송 서비스 호출", () => {
    const mockService = {
      send: jest.fn()
    };

    sendMessage(mockService, "hello");

    expect(mockService.send).toHaveBeenCalled();
    expect(mockService.send).toHaveBeenCalledWith("hello");
  });

  test("전송된 메세지를 반환한다", () => {
    const mockService = {
      send: jest.fn()
    };

    const result = sendMessage(mockService, "hello");

    expect(result).toBe("hello");
  });
});