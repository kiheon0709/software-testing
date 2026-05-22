function add(a,b){
    const NumA = Number(a);
    const NumB = Number(b);
    if(isNaN(numA) || isNaN(numB)){
        throw new Error("invalid input");
    }
    return numA + numB;
}
module.exports = add;