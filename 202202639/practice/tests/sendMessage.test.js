const sendMessage = require("../src/sendMessage");
test("jest.fn: 함수 호출 기록 확인", () => {
  const mockApi = {
    send: jest.fn()
  };
  sendMessage(mockApi, "hello");
  console.log(mockApi.send.mock.calls);
});

// 2. toHaveBeenCalled 매처를 사용한 테스트 
test("toHaveBeenCalled: 함수가 호출됐는지 확인", () => {
  const mockApi = {
    send: jest.fn() 
  };

  sendMessage(mockApi, "hello"); 
  expect(mockApi.send).toHaveBeenCalled(); // 1번이라도 실행되면 통과 
});

// 3. toHaveBeenCalledWith 매처를 사용한 테스트 
test("toHaveBeenCalledWith: 올바른 값으로 호출됐는지 확인", () => {
  const mockApi = {
    send: jest.fn() 
  };

  sendMessage(mockApi, "hello");
  expect(mockApi.send).toHaveBeenCalledWith("hello"); // 제대로 된 값인지 확인 
});

// 4. jest.spyOn()을 이용해 기존 함수를 유지하며 감시하는 테스트 
test("jest.spyOn: 기존 함수 호출 감시", () => {
  const api = {
    send: (msg) => {
      console.log("send:", msg); // 원래 존재하는 실제 로직
    }
  };

  // 기존 코드를 유지하면서 추적(스파이)만 하도록 설정 
  const spy = jest.spyOn(api, "send"); 

  sendMessage(api, "hello"); 
  expect(spy).toHaveBeenCalled(); 
  expect(spy).toHaveBeenCalledWith("hello"); 
});