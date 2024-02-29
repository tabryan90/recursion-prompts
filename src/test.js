// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
debugger
let modulo = function(x, y) {
    if ( x === 0 ) return 0;
    if ( x === 0 && y === 0 ) return NaN;

    if ( (x < 0 && y < 0) && x >=y ) return x;
    if ( (x > 0 && y > 0) && x <= y ) return x;

    if ( x > 0 && y > 0 ) {
        return modulo(x - y, y);

    } else if ( (x < 0 && y < 0) && x > y ) {
        return x;

    } else if ( x > 0 && y < 0 ) {

    } else if ( (x < 0 && y > 0) && x < y ) {
        return modulo(x - y, y);

    } else if ( (x < 0 && y < 0) && x < y ) {
        return modulo(x - y, y);
    }

};

// console.log(modulo(5,2)) // 1
// console.log(modulo(17,5)) // 2
// console.log(modulo(22,6)) // 4

console.log(modulo(-79, 82)) //
// console.log(modulo(-275, -502)) // passed
// console.log(modulo(-275, -274)) // passed

// console.log(modulo(-8, 2))

console.log(-79 % 82); // -79 - if x is less than y return x
// console.log(-275 % -502); // -275 - if both are negative and x is less than y return -x
// console.log(-275 % -274); // -1 - if both are positive and x is GREATER than y return the -remainder
console.log(-4 % 2)

/*
let exponent = function(base, exp) {
    if ( exp === 0 ) return 1;

    if ( exp < 0 ) {
        return 1/(base * exponent(base, -exp - 1));
    } else if ( exp > 0 ) {
        return base * exponent(base, exp - 1);
    }
};
*/
