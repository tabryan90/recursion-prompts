// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
let powerOfTwo = function(n) {
    if ( n === 0 ) return false;

    if ( n === 1 ) return true;

    if ( n % 2 !== 0 && n !== 1 ) {
        return false;
    } else {
        return powerOfTwo( n / 2 );
    }
};

console.log(powerOfTwo(1)); // true
console.log(powerOfTwo(16)); // true
console.log(powerOfTwo(10)); // false
console.log(powerOfTwo(0)); // false
console.log(powerOfTwo(270)); // false


/*

let isEven = function(n) {
    n = Math.abs(n);

    if (n == 0) {
        return true;
    } else if (n == 1) {
        return false;
    } else {
        return isEven(n - 2);
    }
};

 */
