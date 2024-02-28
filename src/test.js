// 10. Write a function that determines if a string is a palindrome.
// palindrome("koko") // false
// palindrome("rotor") // true
// palindrome("wow") // true
debugger
let palindrome = function(string) {
    if ( string.length === 1 ) return true;
    if ( string.length % 2 === 0 ) return false;

    if ( string[0].toLowerCase() === string[string.length - 1].toLowerCase() ) {
        return palindrome(string.slice(1, string.length - 1))
    } else {
        return false;
    }

};

// console.log(palindrome("koko")) // false
// console.log(palindrome("rotor")) // true
// console.log(palindrome("wow")) // true
// console.log(palindrome("sAip puaki v iKaup Pias")) // true

console.log(palindrome("orangutan")) // false


/*

let reverse = function(string) {
    if ( string.length === 0 ) {
        return string;
      }

      return reverse(string.slice(1)) + string[0];
};


let powerOfTwo = function(n) {
    if ( n === 0 ) return false;

    if ( n === 1 ) return true;

    if ( n % 2 !== 0 && n !== 1 ) {
        return false;
    } else {
        return powerOfTwo( n / 2 );
    }
};


*/
