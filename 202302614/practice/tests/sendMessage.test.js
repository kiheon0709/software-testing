const sendMessage = require("../src/sendMessage");

test("jest.spyOn: 기존 함수 호출 감시", () => {
    const api = {
        send: (msg) => { console.log("send:", msg); }
    };

    const spy = jest.spyOn(api, "send"); 

    sendMessage(api, "hello");

    expect(spy).toHaveBeenCalled(); 
    expect(spy).toHaveBeenCalledWith("hello"); 
});