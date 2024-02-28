// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]

debugger
let range = function(x, y) {

    if ( x - y === 1 || x - y === 0 || x - y === -1 || y - x === 1 || y - x === 0 || y - x === -1  ) {
        return [];
    }

    if ( x < y ) {
        return [x + 1, ...range(x + 1, y)];
    } else if ( x > y ) {
        return [...range(x, y + 1), y + 1];
    }

};

console.log(range(2, 9)); // [3,4,5,6,7,8]
console.log(range(7, 2)); // [6,5,4,3]

console.log(range(3, -3)); // [2,1,0,-1,-2]
console.log(range(-9, -2)); // [-3,-4,-5,-6,-7,-8]
