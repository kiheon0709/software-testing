const sendMessage = require("../src/sendMessage");

test("jest.fn: send가 호출됐는지 확인", () => {
    const mockApi = {
        send: jest.fn(),
    };

    sendMessage(mockApi, "hello");

    expect(mockApi.send).toHaveBeenCalled();
});

test("toHaveBeenCalled: 함수가 호출됐는지 확인", () => {
    const mockApi = {
        send: jest.fn(),
    };
    sendMessage(mockApi, "wrong");
    expect(mockApi.send).toHaveBeenCalled();
});

test("toHaveBeenCalledWith: 올바른 값으로 호출됐는지 확인", () => {
    const mockApi = { send: jest.fn() };
    sendMessage(mockApi, "hello");
    expect(mockApi.send).toHaveBeenCalledWith("hello");
});

test("jest.spyOn: 실제 api 객체의 send 호출 감시", () => {
    const realApi = {
        send: (msg) => console.log("실제 전송:", msg),
    };
    const spy = jest.spyOn(realApi, "send");
    sendMessage(realApi, "world");
    expect(spy).toHaveBeenCalledWith("world");
    spy.mockRestore();
});
