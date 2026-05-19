function add(a, b) {
 const numA = Number(a);
 const numB = Number(b);
 if (isNaN(numA) || isNaN(numB)) {
 throw new Error("invalid input");
 }
 return numA + numB;
}
module.exports = add;