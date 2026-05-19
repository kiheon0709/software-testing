const sendMessage = require("../src/sendMessage");

// (1) jest.fn() - 호출 기록 확인
test("jest.fn: 함수 호출 기록 확인", () => {
  const mockApi = {
    send: jest.fn()
  };
  sendMessage(mockApi, "hello");
  console.log(mockApi.send.mock.calls);
});

// (2) toHaveBeenCalled - 호출 여부 확인
test("toHaveBeenCalled: 함수가 호출됐는지 확인", () => {
  const mockApi = {
    send: jest.fn()
  };
  sendMessage(mockApi, "hello");
  expect(mockApi.send).toHaveBeenCalled();
});

// (3) toHaveBeenCalledWith - 올바른 값으로 호출됐는지 확인
test("toHaveBeenCalledWith: 올바른 값으로 호출됐는지 확인", () => {
  const mockApi = {
    send: jest.fn()
  };
  sendMessage(mockApi, "hello");
  expect(mockApi.send).toHaveBeenCalledWith("hello");
});

// (4) jest.spyOn - 기존 함수 감시
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