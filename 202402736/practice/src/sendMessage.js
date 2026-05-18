function sendMessage(api, message) {
  if (message === "") {
    throw new Error("invalid message");
  }

  api.send(message);

  return message;
}

module.exports = sendMessage;