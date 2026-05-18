const sendMessage = require('../src/sendMessage');

test("jest.fn: 함수 호출 기록 확인", () => {
    const mockApi = {
        send: jest.fn() // send 메서드를 jest.fn()으로 대체(모킹)
    };

    sendMessage(mockApi, "hello");

    console.log(mockApi.send.mock.calls); // send 메서드가 호출된 기록을 출력
});

test("toHaveBeenCalled: 함수가 호출됐는지 확인", () => {
    const mockApi = {
        send: jest.fn()
    };
});

test("toHaveBeenCalledWith: 함수가 올바른 값으로 호출됐는지 확인", () => {
    const mockApi = {
        send: jest.fn()
    };

    sendMessage(mockApi, "hello");

    expect(mockApi.send).toHaveBeenCalledWith("hello"); // send 메서드가 "hello"로 호출됐는지 확인
});

test("jest.spyOn: 기존 함수 호출 감시", () => {
    const api = { // 실제 send 메서드를 가진 객체
        send: (msg) => {
            console.log("send:", msg);
        }
    };

    const spy = jest.spyOn(api, "send");
    sendMessage(api, "hello");

    expect(spy).toHaveBeenCalled(); // send 메서드가 호출됐는지 확인
    expect(spy).toHaveBeenCalledWith("hello"); // send 메서드가 "hello"로 호출됐는지 확인
})