// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15

let arraySum = function(array) {







    // if (array.length === 0) return 0;

    // flatten();
    // const flatten = function(array) {
    //     let result = [];
    //     for ( let i = 0; i < array.length; i++ ) {
    //         let num = array[i];
    //         if (Array.isArray(num)) {
    //             result.push(...flatten(num));
    //         } else {
    //             result.push(num);
    //         }
    //     }
    // }

    // return array + arraySum(array.slice(1));
};

console.log(arraySum([1,[2,3],[[4]],5])); // 15
