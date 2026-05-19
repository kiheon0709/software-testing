function add(a, b) {
    const numA = Number(a);
    const numB = Number(b);

    if (isNaN(numA) || isNaN(numB)) {
        throw new Error("number only");
    }

    return numA + numB;
}

module.exports = add;