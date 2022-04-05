function getPrime(max){
    if ( typeof max !='number' || !Number.isInteger(max)) {
        return null
    }

    let auxiliar = [];
    let prime =[];

    for (let i =2; i<= max; ++i) {
        if(!auxiliar[i]) {
            prime.push(i);
            for (let j = i <<1; j<= max; j +=i) {
                auxiliar[j] = true
            }
        }
    }
    return prime;

}
console.log(getPrime(100))