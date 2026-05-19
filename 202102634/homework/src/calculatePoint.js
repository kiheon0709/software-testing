function calculatePoint(price, isVip = false) {
  // TODO: 작성
  if (typeof price !== "number" || isNaN(price)) {
    throw new Error("invaild value");
  };

  if (isVip){
    pt = price / 50;
  } else {
    pt = price / 100;
  };

  if (pt > 5000) { pt = 5000; };
  return pt;

};
 
module.exports = calculatePoint;