// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
debugger
let exponent = function(base, exp) {
    if ( exp === 0 ) return 1;

    if ( exp < 0 ) {
        return 1/(base * exponent(base, -exp - 1));
    } else if ( exp > 0 ) {
        return base * exponent(base, exp - 1);
    }
};

// console.log(exponent(4,3)); // 64
console.log(exponent(4,-2)); // 0.0625
