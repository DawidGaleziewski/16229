let liczbaPierwsza = 12;
let liczbaDruga = 23;

// Declaration
// In es5
function sumEs5(x, y){
    let suma = x + y;
    return suma;
}

// In es6 arrow functions
let sumEs6 = (x, y) => {return x + y};

// execution
sumEs5(liczbaPierwsza, liczbaDruga);
sumEs6(liczbaPierwsza, liczbaDruga);

