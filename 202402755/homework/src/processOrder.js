function processOrder(api, order) {
  if (!order || typeof order.price !== "number") {
    throw new Error("invalid order");
  }
  if (order.price >= 50000) {
    api.sendDiscountNotification(order.userId);
  } else {
    api.sendBasicNotification(order.userId);
  }
  return order.price;
}
module.exports = processOrder;
