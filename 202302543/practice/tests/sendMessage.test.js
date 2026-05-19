const sendMessage = require("../src/sendMessage");

test("toHaveBeenCalledWith: 올바른 값으로 호출됐는지 확인", () => {
  const mockApi = {
    send: jest.fn()
  };

  sendMessage(mockApi, "hello");

  expect(mockApi.send).toHaveBeenCalledWith("hello");
});

test("jest.spyOn: 기존 함수 호출 감시", () => {
  const api = {
    send: (msg) => {
      console.log("send:", msg);
    }
  };
  
  const spy = jest.spyOn(api, "send");

  sendMessage(api, "hello");

  expect(spy).toHaveBeenCalled();

  expect(spy).toHaveBeenCalledWith("hello");
});