/*
function add(a, b) {
 return a + b;
}
module.exports = add;
*/

/*
function add(a, b) {
 if (typeof a !== "number" || typeof b !== "number") {
 throw new Error("number only");
 }
 return a + b;
}
module.exports = add;
*/

function add(a, b) {
 const numA = Number(a);
 const numB = Number(b);
 if (isNaN(numA) || isNaN(numB)) {
 throw new Error("invalid input");
 }
 return numA + numB;
}
module.exports = add;