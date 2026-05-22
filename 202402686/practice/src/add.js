function add(a,b) { //use Number(), isNaN() to check if a and b are numbers
    if(typeof a !== "number" || typeof b !== "number") {
        if(isNaN(Number(a)) || isNaN(Number(b))) {
            throw new Error("Invalid input: a and b must be numbers or numeric strings");
        }
        a = Number(a);
        b = Number(b);
    }
    return a + b;
}

module.exports = add;