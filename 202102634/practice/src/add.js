function add(a, b){
    
    
    const Na = Number(a);
    const Nb = Number(b);

    if (isNaN(Na) || isNaN(Nb)) {
        throw new Error("invaild input");
    };

    return Na + Nb;
}

module.exports = add;