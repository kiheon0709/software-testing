function add(a, b) {
    const numA = Number(a);
    const numB = Number(b);

    if (isNaN(a) || isNaN(b)) {
        throw new Error("invalid input");
    }

    return numA + numB;
}

module.exports = add;