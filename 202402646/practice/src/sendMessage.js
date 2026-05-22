function sendMessage(api, message){
    api.send(message);
}

//jest
test("jest.fn: 함수 호출 기록 확인", () =>{
    const mockApi={
        send:jest.fn()
    };
    sendMessage(mockApi,"hello");

    console.log(mockApi.send.mock.calls);
});

//toHaveBeenCalled
test("toHaveBeenCalled: 올바른 값으로 호출됐는지 확인", () =>{
    const mockApi={
        send:jest.fn()
    };
    sendMessage(mockApi,"hello");

    expect(mockApi.send).toHaveBeenCalled();
});

//toHaveBeenCalledWith-hello
test("toHaveBeenCalledWith: 올바른 값으로 호출됐는지 확인", () =>{
    const mockApi={
        send:jest.fn()
    };
    sendMessage(mockApi,"hello");

    expect(mockApi.send).toHaveBeenCalledWith("hello");
});

//toHaveaBeenCalledwith-wrong
test("toHaveBeenCalled: 함수가 호출됐는지 확인", () => {
    const mockApi = {
      send: jest.fn()
    };
 
    sendMessage(mockApi, "wrong");
 
    expect(mockApi.send).toHaveBeenCalled();
})

//toHaveaBeenCalledwith - fail
test("toHaveBeenCalled: 함수가 호출됐는지 확인", () => {
    const mockApi = {
      send: jest.fn()
    };
 
    sendMessage(mockApi, "wrong");
 
    expect(mockApi.send).toHaveBeenCalled("hello");
})

//jest.spyOn
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