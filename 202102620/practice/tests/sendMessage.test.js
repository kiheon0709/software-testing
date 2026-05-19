const sendMessage = require("../src/sendMessage");

test("jest.fn: 함수 호출 기록 확인", () => {
  const mockApi = {
    send: jest.fn(),
  };

  sendMessage(mockApi, "hello");

  expect(mockApi.send).toHaveBeenCalled();
  expect(mockApi.send).toHaveBeenCalledWith("hello");
});

test("jest.spyOn: 기존 함수 호출 감시", () => {
  const api = {
    send: (message) => message,
  };
  const spy = jest.spyOn(api, "send");

  sendMessage(api, "hello");

  expect(spy).toHaveBeenCalled();
  expect(spy).toHaveBeenCalledWith("hello");
});
