function add(a, b) {
    const na = Number(a);
    const nb = Number(b);

    /*
    if(typeof a !== "number" || typeof b !== "number") {
        throw new Error("number only");
    }
    */

    if(isNaN(na) || isNaN(nb)) {
        throw new Error("invalid input");
    }

    return na + nb;
}

module.exports = add;

